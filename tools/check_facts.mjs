#!/usr/bin/env node
// Checks the species facts in data/*.js against the rules below and against the game's code (index.html and art/*.js).
//
//   node tools/check_facts.mjs                       validate (exits 1 on any error)
//   node tools/check_facts.mjs --links               also fetch every source URL and report dead ones
//   node tools/check_facts.mjs --write               reformat data/*.js and regenerate the species tables in ATTRIBUTION.md
//   node tools/check_facts.mjs --mark-checked birds.cardinal.fact   record that a claim was just verified
//                                                    (also birds.cardinal for all its claims, or birds.* for a whole kind)
//
// Rules: every claim has text, at least one https source and a checked month; a claim whose text changed
// after it was checked (its "sig" no longer matches) must be re-checked; ids match the game's art, calls and forests.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CLAIMS, PLAIN, FILES, SUBSTRATES, HABITS, readData, writeDataFiles, sig } from './species_data.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ATTR = path.join(ROOT, 'ATTRIBUTION.md');

// The game's code: the page plus the artwork scripts it loads.
function gameCode() {
  const artDir = path.join(ROOT, 'art');
  const art = fs.existsSync(artDir) ? fs.readdirSync(artDir).filter(f => f.endsWith('.js')).sort().map(f => fs.readFileSync(path.join(artDir, f), 'utf8')) : [];
  return [fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8'), ...art].join('\n');
}

// Evaluate a data literal (object or array) that follows `marker` in the game's code.
function literalText(html, marker) {
  const at = html.indexOf(marker);
  if (at < 0) throw new Error('game code (index.html, art/*.js): missing ' + marker);
  let i = at + marker.length;
  while (html[i] !== '{' && html[i] !== '[') i++;
  const start = i; let depth = 0, q = null;
  for (; i < html.length; i++) {
    const c = html[i];
    if (q) { if (c === '\\') i++; else if (c === q) q = null; continue; }
    if (c === "'" || c === '"' || c === '`') { q = c; continue; }
    if (c === '{' || c === '[') depth++;
    else if (c === '}' || c === ']') { if (!--depth) return html.slice(start, i + 1); }
  }
  throw new Error('game code: unbalanced ' + marker);
}
const literal = (html, marker) => new Function('return (' + literalText(html, marker) + ')')();

const isClaim = v => v && typeof v === 'object' && !Array.isArray(v) && 'text' in v;
const month = () => new Date().toISOString().slice(0, 7);
const host = u => { const h = new URL(u).hostname.replace(/^www\./, ''); return h === 'en.wikipedia.org' ? 'Wikipedia' : h; };
const wikiURL = r => 'https://en.wikipedia.org/wiki/' + (r.wiki || r.sci.text.replace(/ /g, '_'));

function attributionTables(data) {
  const kinds = { squirrels: 'Squirrels', birds: 'Birds', trees: 'Trees', nuts: 'Nuts and cones', flowers: 'Wildflowers', fungi: 'Mushrooms' };
  let md = '\nGenerated from `data/*.js` by `node tools/check_facts.mjs --write`; edit the data files, not these tables. Each card claim\'s own sources are listed beside it in the data files.\n\n';
  for (const [kind, title] of Object.entries(kinds)) {
    md += `### ${title}\n\n`;
    md += kind === 'nuts' ? '| Nut or cone | From the tree | Sources |\n|---|---|---|\n' : '| Species | Scientific name | Sources |\n|---|---|---|\n';
    for (const r of Object.values(data[kind])) {
      const name = kind === 'nuts' ? r.name : r.name.text;
      const second = kind === 'nuts' ? data.trees[r.tree.text].name.text : `*${r.sci.text}*` + (r.formerly ? ` (formerly *${r.formerly}*)` : '');
      const urls = [...new Set(CLAIMS[kind].flatMap(c => r[c]?.src || []))];
      if (kind !== 'nuts' && !urls.includes(wikiURL(r))) urls.push(wikiURL(r));
      md += `| ${name} | ${second} | ${urls.map(u => `[${host(u)}](${u})`).join(' · ')} |\n`;
    }
    md += '\n';
  }
  return md;
}

async function deadLinks(urls) {
  const bad = [], queue = [...urls];
  const UA = 'Mozilla/5.0 (compatible; SquirrelRanger-factcheck/1.0; +https://github.com/afaucher/Squirrel-Racer)';
  const one = async u => {
    let last = '';
    for (const method of ['HEAD', 'GET']) {
      try {
        const r = await fetch(u, { method, redirect: 'follow', headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20000) });
        if (r.ok) return;
        last = String(r.status);
      } catch (e) { last = e.cause?.code || e.name; }
    }
    bad.push(`${last} ${u}`);
  };
  await Promise.all(Array.from({ length: 8 }, async () => { while (queue.length) await one(queue.shift()); }));
  return bad.sort();
}

async function main() {
  const argv = process.argv.slice(2);
  const has = f => argv.includes(f);
  const html = gameCode();
  const data = readData(ROOT);
  const errors = [], warns = [], stat = {};

  // --mark-checked: stamp claims as verified this month (they must already have sources)
  const markIdx = argv.indexOf('--mark-checked');
  if (markIdx >= 0) {
    const pat = argv[markIdx + 1] || '';
    const [kind, id = '*', field = '*'] = pat.split('.');
    if (!CLAIMS[kind]) { console.error(`--mark-checked needs kind.id.claim, e.g. birds.cardinal.fact (kinds: ${Object.keys(CLAIMS).join(', ')})`); process.exit(2); }
    let n = 0;
    for (const [sid, r] of Object.entries(data[kind])) {
      if (id !== '*' && id !== sid) continue;
      for (const c of CLAIMS[kind]) {
        if (field !== '*' && field !== c) continue;
        if (!r[c]?.src?.length) { errors.push(`${kind}.${sid}.${c}: add a source before marking it checked`); continue; }
        r[c].checked = month(); r[c].sig = sig(r[c].text); n++;
      }
    }
    writeDataFiles(ROOT, data);
    console.log(`marked ${n} claim(s) checked ${month()}`);
  }

  // 1. claims: text, sources, checked, and unchanged since checked
  for (const [kind, claims] of Object.entries(CLAIMS)) {
    const s = stat[kind] = { species: 0, claims: 0, sourced: 0, checked: 0, stale: 0 };
    for (const [id, r] of Object.entries(data[kind])) {
      s.species++;
      for (const k of Object.keys(r)) if (!claims.includes(k) && !PLAIN.includes(k) && !(kind === 'nuts' && k === 'name')) warns.push(`${kind}.${id}: unknown field "${k}"`);
      for (const c of claims) {
        s.claims++;
        const v = r[c], at = `${kind}.${id}.${c}`;
        if (!isClaim(v) || typeof v.text !== 'string' || !v.text.trim()) { errors.push(`${at}: missing, or not {"text": ...}`); continue; }
        if (!Array.isArray(v.src) || !v.src.length) { errors.push(`${at}: no source`); continue; }
        const bad = v.src.filter(u => !/^https:\/\/\S+$/.test(u));
        if (bad.length) { errors.push(`${at}: not an https URL: ${bad.join(', ')}`); continue; }
        s.sourced++;
        if (!v.checked) { errors.push(`${at}: never checked`); continue; }
        if (!/^\d{4}-\d{2}$/.test(v.checked)) { errors.push(`${at}: checked "${v.checked}" is not YYYY-MM`); continue; }
        if (v.sig !== sig(v.text)) { s.stale++; errors.push(`${at}: text changed since it was checked ${v.checked}; re-check it, then --mark-checked ${at}`); continue; }
        s.checked++;
      }
    }
    if (kind === 'nuts') for (const [id, n] of Object.entries(data.nuts)) if (typeof n.name !== 'string' || !n.name) errors.push(`nuts.${id}: no name`);
  }
  for (const [id, n] of Object.entries(data.nuts)) if (!data.trees[n.tree?.text]) errors.push(`nuts.${id}.tree: "${n.tree?.text}" is not a tree in data/trees.js`);

  // 2. the game uses exactly these ids: art tables, bird calls and the forests
  const same = (label, game, mine) => {
    const G = new Set(game), M = new Set(mine);
    for (const x of G) if (!M.has(x)) errors.push(`${label}: "${x}" is in the game code but has no facts in data/`);
    for (const x of M) if (!G.has(x)) errors.push(`${label}: "${x}" has facts in data/ but no entry in the game code`);
  };
  same('birds (BirdArt BIRDS)', literal(html, 'const BIRDS=').map(b => b.id), Object.keys(data.birds));
  same('squirrels (SQUIRRELS)', Object.keys(literal(html, 'const SQUIRRELS=')), Object.keys(data.squirrels));
  same('nuts (NUTS)', Object.keys(literal(html, 'const NUTS=')), Object.keys(data.nuts));
  same('flowers (FLW)', Object.keys(literal(html, 'const FLW=')), Object.keys(data.flowers));
  same('fungi (FUNGI)', Object.keys(literal(html, 'const FUNGI=')), Object.keys(data.fungi));
  const calls = [...literalText(html, 'const CALLS=').matchAll(/(?:^|\n)\s*(\w+):\(\)=>/g)].map(m => m[1]);
  for (const id of Object.keys(data.birds)) if (!calls.includes(id)) warns.push(`birds.${id}: no CALLS entry, so it plays the cardinal's call`);
  const ZN = literal(html, 'const ZN=');
  const used = { squirrels: new Set(), birds: new Set(), trees: new Set(Object.values(data.nuts).map(n => n.tree.text)), nuts: new Set(), flowers: new Set(), fungi: new Set() };
  for (const [zid, Z] of Object.entries(ZN)) for (const kind of Object.keys(used)) for (const id of kind === 'trees' ? Z.trees.map(t => t[0]) : Z[kind] || []) {
    used[kind].add(id);
    if (!data[kind][id]) errors.push(`forest ${zid}: ${kind} "${id}" has no facts in data/`);
  }
  for (const kind of Object.keys(used)) for (const id of Object.keys(data[kind])) if (!used[kind].has(id)) warns.push(`${kind}.${id}: not in any forest`);

  // 2b. a mushroom grows only where its data says: a known substrate and habit, real host trees, and in each of its forests
  //     at least one of its host trees, or the game can never place it there
  for (const [id, f] of Object.entries(data.fungi)) {
    const at = `fungi.${id}`;
    if (!SUBSTRATES.includes(f.substrate)) errors.push(`${at}.substrate: "${f.substrate}" is not one of ${SUBSTRATES.join(', ')}`);
    if (f.habit && !HABITS.includes(f.habit)) errors.push(`${at}.habit: "${f.habit}" is not one of ${HABITS.join(', ')}`);
    const hosts = f.hosts || [];
    if (!Array.isArray(hosts)) { errors.push(`${at}.hosts: not a list of tree ids`); continue; }
    for (const h of hosts) if (!data.trees[h]) errors.push(`${at}.hosts: "${h}" is not a tree in data/trees.js`);
    if (!hosts.length && ['trunk base', 'living trunk', 'dead wood'].includes(f.substrate)) errors.push(`${at}: grows on wood (${f.substrate}) but lists no host trees`);
    for (const [zid, Z] of Object.entries(ZN)) if ((Z.fungi || []).includes(id) && hosts.length && !hosts.some(h => Z.trees.some(t => t[0] === h)))
      errors.push(`${at}: none of its host trees (${hosts.join(', ')}) grow in forest ${zid}, so it can never appear there`);
  }

  // 3. a scientific name shared by two entries must be colour forms of one species
  const bySci = {};
  for (const kind of ['squirrels', 'birds', 'trees', 'flowers', 'fungi']) for (const [id, r] of Object.entries(data[kind])) (bySci[r.sci.text] ||= []).push([kind, id, r.name.text.replace(/ \(.*\)$/, '')]);
  for (const [s, list] of Object.entries(bySci)) if (new Set(list.map(x => x[2])).size > 1) warns.push(`"${s}" is used by differently named entries: ${list.map(x => x[0] + '.' + x[1]).join(', ')}`);

  // 4. --links: every source still loads
  if (has('--links')) {
    const urls = new Set();
    for (const kind of Object.keys(CLAIMS)) for (const r of Object.values(data[kind])) {
      for (const c of CLAIMS[kind]) for (const u of r[c]?.src || []) urls.add(u);
      if (kind !== 'nuts') urls.add(wikiURL(r));
    }
    console.log(`fetching ${urls.size} links...`);
    for (const b of await deadLinks(urls)) warns.push('link did not load: ' + b);
  }

  // 5. --write: canonical data files and generated ATTRIBUTION tables
  if (has('--write')) {
    writeDataFiles(ROOT, data);
    const md = fs.readFileSync(ATTR, 'utf8');
    const A = '<!-- species-tables:start -->', B = '<!-- species-tables:end -->';
    const a = md.indexOf(A), b = md.indexOf(B);
    if (a < 0 || b < a) errors.push(`ATTRIBUTION.md needs ${A} and ${B} around the species tables`);
    else { fs.writeFileSync(ATTR, md.slice(0, a + A.length) + '\n' + attributionTables(data) + md.slice(b)); console.log('rewrote data/*.js and the ATTRIBUTION.md species tables'); }
  }

  console.log('\n             species  claims  sourced  checked  stale');
  for (const [kind, s] of Object.entries(stat)) console.log(`  ${kind.padEnd(10)} ${String(s.species).padStart(5)} ${String(s.claims).padStart(7)} ${String(s.sourced).padStart(8)} ${String(s.checked).padStart(8)} ${String(s.stale).padStart(6)}`);
  const show = (label, list) => list.length && console.log(`\n${list.length} ${label}:\n  ` + list.slice(0, 50).join('\n  ') + (list.length > 50 ? `\n  ...and ${list.length - 50} more` : ''));
  show('warning(s)', warns);
  show('error(s)', errors);
  if (errors.length) process.exitCode = 1; else console.log('\nall checks passed');
}
main().catch(e => { console.error(e.message); process.exitCode = 2; });
