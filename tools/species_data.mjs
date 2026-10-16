// Read and write the species fact files in data/. Shared by tools/check_facts.mjs.
//
// Each file assigns plain JSON to window.SPECIES_DATA.<kind>, so the browser can load it with a
// <script src> (which works when index.html is opened from disk) and tools can parse it as JSON.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

// The claims each kind of species makes on its card. Every claim is {text, src, checked, sig, note?}.
export const CLAIMS = {
  squirrels: ['name', 'sci', 'range', 'fact'],
  birds: ['name', 'sci', 'range', 'fact', 'marks'],
  trees: ['name', 'sci', 'range', 'stands', 'site', 'height'],
  nuts: ['tree', 'fact'],
  flowers: ['name', 'sci', 'range', 'habitat'],
  fungi: ['name', 'sci', 'range', 'grows', 'fact', 'marks'],
  forests: ['composition'],
};
// Plain fields that are not claims: wiki (page name), pl (irregular plural), formerly (old scientific name), a nut's display name,
// and for a mushroom the details of its "grows" claim that place it in the game: substrate, hosts (tree ids), habit and cached.
export const PLAIN = ['wiki', 'pl', 'formerly', 'substrate', 'hosts', 'habit', 'cached',
  // a tree's stands, site and height claims place it: how it clumps, how wet it likes it, whether it pioneers openings, its storey
  'clump', 'moisture', 'pioneer', 'storey',
  // a wildflower's habitat claim places it: light, moisture, whether it favours openings, the trees it grows with, epiphyte
  'light', 'openings', 'with', 'epiphyte',
  // a forest's composition claim comes with each tree's relative abundance
  'weights'];
export const CLUMPS = ['clonal', 'clumped', 'mixed', 'scattered'];
export const MOISTURES = ['wet', 'moist', 'mesic', 'dry', 'any'];
export const STOREYS = ['canopy', 'subcanopy', 'understory'];
export const LIGHTS = ['shade', 'part', 'sun'];
// Where a mushroom can grow, and how it grows there
export const SUBSTRATES = ['soil', 'leaf litter', 'moss', 'buried', 'trunk base', 'living trunk', 'dead wood'];
export const HABITS = ['single', 'scattered', 'cluster', 'tiers', 'ring'];
const ORDER = ['name', 'sci', 'formerly', 'wiki', 'pl', 'tree', 'range', 'stands', 'clump', 'site', 'moisture', 'pioneer', 'height', 'storey', 'habitat', 'light', 'openings', 'with', 'epiphyte', 'grows', 'substrate', 'hosts', 'habit', 'cached', 'fact', 'marks', 'composition', 'weights'];
const CLAIM_ORDER = ['text', 'src', 'checked', 'sig', 'note'];

export const FILES = {
  'squirrels.js': { kinds: ['squirrels'], title: 'Squirrels' },
  'birds.js': { kinds: ['birds'], title: 'Birds' },
  'trees.js': { kinds: ['trees', 'nuts'], title: 'Trees, and the nuts and cones they bear' },
  'flowers.js': { kinds: ['flowers'], title: 'Wildflowers' },
  'fungi.js': { kinds: ['fungi'], title: 'Mushrooms' },
  'forests.js': { kinds: ['forests'], title: 'Forests: which trees make up each one' },
};

const HEADER = title => `// Squirrel Ranger species facts: ${title}.
// Every claim on a card is {"text", "src": [urls], "checked": "YYYY-MM", "sig", "note"?}.
// "sig" fingerprints the text when it was checked; edit the text and the check flags it for a re-check.
// How to add or fix a fact: docs/ADDING-A-FOREST.md. Validate with: node tools/check_facts.mjs
`;
const ASSIGN = kind => `(window.SPECIES_DATA ||= {}).${kind} = `;

// Short fingerprint of a claim's text, stored when the claim is checked.
export const sig = text => crypto.createHash('sha256').update(text, 'utf8').digest('hex').slice(0, 8);

export function readData(repo) {
  const data = {};
  for (const [file, { kinds }] of Object.entries(FILES)) {
    const text = fs.readFileSync(path.join(repo, 'data', file), 'utf8');
    const parts = text.split(/\(window\.SPECIES_DATA \|\|= \{\}\)\.(\w+) = /);
    for (let i = 1; i < parts.length; i += 2) {
      const kind = parts[i], body = parts[i + 1].trim().replace(/;$/, '');
      if (!kinds.includes(kind)) throw new Error(`data/${file}: unexpected kind "${kind}"`);
      try { data[kind] = JSON.parse(body); } catch (e) { throw new Error(`data/${file} (${kind}): ${e.message}`); }
    }
    for (const k of kinds) if (!data[k]) throw new Error(`data/${file}: no ${k}`);
  }
  return data;
}

// One species per block and one field per line, so a diff shows exactly which claim changed.
function formatKind(kind, species) {
  const lines = [];
  const ids = Object.keys(species);
  ids.forEach((id, n) => {
    const r = species[id];
    const keys = [...ORDER.filter(k => k in r), ...Object.keys(r).filter(k => !ORDER.includes(k))];
    lines.push(` ${JSON.stringify(id)}: {`);
    keys.forEach((k, j) => {
      let v = r[k];
      if (v && typeof v === 'object' && 'text' in v) v = Object.fromEntries([...CLAIM_ORDER.filter(c => c in v), ...Object.keys(v).filter(c => !CLAIM_ORDER.includes(c))].map(c => [c, v[c]]));
      lines.push(`  ${JSON.stringify(k)}: ${JSON.stringify(v)}${j < keys.length - 1 ? ',' : ''}`);
    });
    lines.push(` }${n < ids.length - 1 ? ',' : ''}`);
  });
  return ASSIGN(kind) + '{\n' + lines.join('\n') + '\n};\n';
}

export function writeDataFiles(repo, data) {
  fs.mkdirSync(path.join(repo, 'data'), { recursive: true });
  for (const [file, { kinds, title }] of Object.entries(FILES))
    fs.writeFileSync(path.join(repo, 'data', file), HEADER(title) + kinds.map(k => '\n' + formatKind(k, data[k])).join(''));
}
