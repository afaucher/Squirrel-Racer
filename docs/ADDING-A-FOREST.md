# Adding a forest

This is how the real forests were researched and modelled. Follow the same steps to add a new one. The Pacific Northwest Forest was the first one built from this guide, so it makes a good worked example.

A forest is a list of real species plus a few colours. All the species art, calls and placement come from data, so adding a forest means **researching** the species, **writing their data**, then **checking it**. No new drawing code is needed unless a species has a shape the renderers can't draw yet.

What each card **says** (names, scientific names, ranges, facts and field marks) lives in `data/*.js`, with a source for every claim. How each species **looks and sounds** (art, coats, calls) and which forest it lives in are code: bird artwork is in `art/birds.js`, flower, nut and cone artwork in `art/plants.js`, squirrel artwork and coats in `art/squirrel.js`, and everything else in `index.html`. Search for the names in the headings below. The two are joined by the species id, and `node tools/check_facts.mjs` checks that they line up.

---

## 1. Research

### Pick the forest

Choose a real, named forest type with at least one native tree squirrel that lives there. Good sources are forest descriptions from the USDA Forest Service ([Fire Effects Information System](https://research.fs.usda.gov/feis), [*Silvics of North America*](https://research.fs.usda.gov/treesearch/1547)) or regional conservation groups, like [Trees for Life](https://treesforlife.org.uk/into-the-forest/the-caledonian-forest/) for the Caledonian pinewood.

### Choose the species

Each forest has the same shape:

| What | How many | How to choose |
|---|---|---|
| **Trees** | 5–6 | The dominant canopy trees, weighted roughly by how common they are. Every nut or cone below must come from one of these. |
| **Squirrels** | 1–6 | Native tree squirrels. A common colour form (the black eastern gray, the dark Eurasian red) counts as its own entry with the same scientific name. |
| **Birds** | 5–6 | Common, easy to see, and visually distinct from each other. Aim for a mix of poses (see below). Prefer birds with a link to squirrels or seeds: jays that bury acorns, crossbills that eat spruce seed, tits that nest in old dreys. |
| **Nuts and cones** | 4 | One per bearing tree. Pick ones that look different from each other. |
| **Wildflowers** | 11 | Native woodland or clearing flowers. Mix colours, shapes and seasons. |
| **Mushrooms** | 5 | Native, common and distinct from each other. **Where each one grows matters most**, because the game places it only there. Mix habitats: at least two on dead wood (fallen logs or stumps) of specific host trees, at least one from soil with its partner trees, and ideally a bracket on living trunks. Prefer squirrel links: red squirrels dry mushrooms in the branches, and flying squirrels dig up truffles. Never write a fact that suggests eating one. |

**Check habitat, not just range.** A species can live in the right region but in the wrong place, like a meadow, prairie or dry oak woodland. For the Pacific Northwest, common camas and broadleaf lupine were swapped for Oregon fawn lily and vanilla leaf, and tall Oregon grape for the dwarf Oregon grape of the forest floor. When you keep a weaker fit on purpose (the western gray squirrel prefers drier oak and Douglas-fir woods), say so in its range.

**Reuse species that are already in the game.** Search `data/*.js` for the scientific name first. If a species is already there and its range already covers the new forest, add its existing id to the forest instead of writing a new card (the Japanese Beech Forest reuses the Eurasian jay and marsh marigold). New ids must not clash with existing ones: `trillium`, `beech` and `robin` are taken, for example.

Missions pick 3 of each kind, so a forest needs **at least 3** birds, nuts or cones, and wildflowers. More gives variety.

**Bird poses.** A good mix is:
- a jay or other **perch** bird
- a chickadee or tit (**perch** or **horiz**)
- a nuthatch that goes **headdown** on the trunk
- a woodpecker that **clings** head-up
- one bird that feeds on the **ground**

### Record the facts

For every species, write down:

- **Common name.** Use the standard for the region: the AOS checklist names in North America (as used by [All About Birds](https://www.allaboutbirds.org)), and BOU/IOC names in Britain (as used by the [RSPB](https://www.rspb.org.uk/birds-and-wildlife/a-z)).
- **Scientific name.** Use the current one; check that it hasn't been reclassified. For example, wood anemone is now *Anemonoides nemorosa*.
- **Native range.** One short phrase, such as "Eastern and central North America".
- **One fact.** About 20 words or fewer, true, and written for a curious kid. Facts linking to squirrels, seeds or the food web are best. Write it in your own words; never copy text.
- **Sources.** For every claim above, at least one page you opened yourself that states it; never a guessed URL. Prefer the authority for each kind, and use Wikipedia only when nothing better states the claim:

  | Kind | Good sources |
  |---|---|
  | Birds | [Audubon field guide](https://www.audubon.org/bird-guide), [Birds of the World](https://birdsoftheworld.org) (free overview pages), [All About Birds](https://www.allaboutbirds.org), [RSPB](https://www.rspb.org.uk/birds-and-wildlife/a-z) and [BTO BirdFacts](https://www.bto.org/understanding-birds/birdfacts) |
  | Squirrels | [Animal Diversity Web](https://animaldiversity.org), state and provincial wildlife agencies, the National Park Service, peer-reviewed papers |
  | Trees, nuts, cones | [FEIS](https://research.fs.usda.gov/feis), [The Gymnosperm Database](https://www.conifers.org), [Woodland Trust](https://www.woodlandtrust.org.uk), [EUFORGEN](https://www.euforgen.org) |
  | Wildflowers | [Lady Bird Johnson Wildflower Center](https://www.wildflower.org), [Burke Herbarium](https://burkeherbarium.org), [Woodland Trust](https://www.woodlandtrust.org.uk), [Plantlife](https://www.plantlife.org.uk) |

  Some sites (All About Birds, Kew's Plants of the World Online, the IUCN Red List) block automated fetches, so agents may need the alternatives.

  Outside North America and Britain, use the region's own authorities. For the Japanese Beech Forest these were the Ministry of the Environment (env.go.jp, biodic.go.jp), the Forestry Agency's regional pages (rinya.maff.go.jp), prefectural Red Data Books, Hokkaido University's plant pages, Kotobank's encyclopedia entries, and the [IOC World Bird List](https://www.worldbirdnames.org) for bird names. RHS, GBIF and World Flora Online stand in for Kew. For the Atlantic Forest they were Embrapa's tree volumes, Paraná's environment agency (IAT), Brazil's official mammal list, the WWF-Brasil bird guide and SciELO papers. Flora e Funga do Brasil blocks scripts, but its official checklist can be read through GBIF (api.gbif.org). WikiAves and xeno-canto also block scripts. Where sources disagree on a scientific name, use the current accepted one and record the other in the claim's `note`.

  **Splitting the research.** Four agents can research in parallel: birds; the forest itself plus trees and nuts; squirrels; and wildflowers. Give them one shared brief with the rules above. Ask each to return JSON in the `data/*.js` shape, with `src` lists they actually opened, plus free-text drawing notes (colours, shapes, the call). Then review the results yourself: shorten the text to card length, swap any species whose habitat evidence is weak, and check for id clashes before merging.

For **birds**, also note the field marks from a field guide: colours of the back, belly, head, wings and tail, plus caps, masks, bars and crests. Note the bill shape and length, and draw the male where the sexes differ. When they differ, say so in the field marks too ("Male: … Female is browner."), since the card text should match the picture without being wrong about the other sex. Also note the call's rhythm and pitch as field guides describe it, like the cardinal's slurred "cheer cheer cheer" whistles.

For **trees**, note bark colour and texture, leaf or needle colour, overall shape, and anything distinctive. Examples: white, marked bark (birch, aspen); orange plated bark (ponderosa, Scots pine); shaggy strips (shagbark hickory); spire versus round crown.

For **nuts and cones**, note size, shape, colour and any feature that makes it recognisable: the long acorn stalk of pedunculate oak, the "mouse" bracts of Douglas-fir, a fir cone standing upright.

For **squirrels**, note coat colours, belly, tail and ear tufts.

---

## 2. Model the data

Add entries in this order. Copy a neighbour from the existing forests and adjust it; that's faster and safer than starting from scratch.

### 2.0 The facts: `data/*.js`

Each kind has its own file: `data/squirrels.js`, `data/birds.js`, `data/trees.js` (trees, then the nuts and cones they bear) and `data/flowers.js`. Inside, each species is a block of plain JSON, and every claim shown on its card is an object with its text and evidence:

```js
"varthrush": {
 "name": {"text":"Varied thrush","src":["https://www.audubon.org/field-guide/bird/varied-thrush"],"checked":"2026-10","sig":"1f0c…"},
 "sci": {"text":"Ixoreus naevius","src":["…"],"checked":"2026-10","sig":"…"},
 "wiki": "Varied_thrush",
 "range": {"text":"Alaska and western Canada to northern California …","src":["…"],"checked":"2026-10","sig":"…"},
 "fact": {"text":"Its song is a long, eerie, buzzy whistle …","src":["…"],"checked":"2026-10","sig":"…"},
 "marks": {"text":"Male: slate-blue back …","src":["…"],"checked":"2026-10","sig":"…","note":"optional nuance for the next checker"}
},
```

| Kind | Claims (each `{text, src, checked, sig, note?}`) | Plain fields |
|---|---|---|
| squirrels | `name`, `sci`, `range`, `fact` | `wiki` (Wikipedia page name, when it isn't the scientific name) |
| birds | `name`, `sci`, `range`, `fact`, `marks` | `wiki`, `pl` (an irregular plural: titmice, grouse) |
| trees | `name`, `sci`, `range` | |
| nuts | `tree` (the parent tree's id), `fact` | `name`; the scientific name and range come from the tree |
| flowers | `name`, `sci`, `range` | `formerly` (an old scientific name) |

- `src` lists the pages that state the claim (see **Sources** above).
- `checked` is the month the claim was last verified against those sources, and `sig` fingerprints its text at that moment. Don't write them by hand: once a claim's sources are in, run `node tools/check_facts.mjs --mark-checked birds.varthrush.fact` (or `birds.varthrush` for every claim of one species).
- If you change a claim's text later, its `sig` no longer matches and the check fails until it is re-verified and re-marked. That's deliberate: sources can't silently go stale.
- `note` is for what the next checker should know: sources that disagree, a pending reclassification, a weak source.

### 2.1 Trees: facts in `data/trees.js`, art in `SPECIES`

Each tree's art is one of four base growth forms plus overrides, added in the `Object.assign(SPECIES, {...})` block:

```js
whitespruce: mk('pine', {bark:'#5b4a3e', leaf:['#3d5f55','#4c6e63','#2f4a42'], whorlN:8, wDroop:.18, H:1.08}),
```

| Base | Growth form | Good for |
|---|---|---|
| `oak` | Forking, gnarled, spreading | Oaks |
| `maple` | One trunk, rounded crown | Maples, beech, hickory, hazel, rowan |
| `birch` | Slender, light, drooping | Birches, aspen |
| `pine` | A trunk with whorls of limbs, a conifer | Pines, spruces, firs, Douglas-fir |

| Override | Meaning |
|---|---|
| `bark`, `barkHi`, `barkLo` | Bark colour, highlight and shadow |
| `leaf` | 3–4 leaf or needle colours |
| `trunk` | Trunk width (13 slender to 24 stout). Broadleaf trees with `trunk` ≥ 19 sometimes grow extra-large. |
| `spread`, `droop` | Limb spread and droop (broadleaf) |
| `H` | Height multiplier (`pinyon` .62, `ponderosa` 1.22) |
| `whorlN`, `wL`, `wStart`, `wDroop` | Conifers: number of whorls, limb length, where limbs start up the trunk (0–1), and how much they droop |
| `wavy: 1` | A gently wavy trunk (birch, aspen) |
| `mark` | Colour of short dark bark marks (birch lenticels, ponderosa plates) |
| `strips` | Colour of long peeling strips (shagbark hickory) |
| `bloom` | Spring blossoms on twigs: `'dogwood'`, `'cherry'` or `null` |
| `nutAt` | Where along a limb its nuts hang, as `[from, to]` fractions of the limb (default `[.4, .95]`). The queen palm's fruit hangs at the base of its fronds, `[.03, .15]`, and the Paraná pine's cones sit near the limb tips, `[.72, .98]`. |

Trees that none of the four bases can draw use a **growth form** from `TREE_FORMS` in `art/plants.js`. Set `form` on a base, and the form builds the trunk, the climbable limbs and the leaves in the same layers as the other trees:

```js
queenpalm: mk('maple', {form:'palm', bark:'#a39e94', rings:'#77726a', trunk:9, rachis:['#7a8a4a','#9aa866','#56622e'], leaf:[…], leaflet:30, plume:1, hang:.45, nutAt:[.03,.15]}),
paranapine: mk('pine', {form:'araucaria', whorl:false, H:1.12, bark:'#6b4a45', mark:'#3e2a26', leaf:[…], trunk:20, leafR:9, nutAt:[.72,.98]}),
```

| `form` | Shape | Overrides |
|---|---|---|
| `palm` | An unbranched, ringed trunk under a crown of arching feather-leaved fronds. Each frond is a limb the squirrel can run along. | `rachis` (3 colours for the frond stalks: base, highlight, shadow), `fronds` (how many, 10), `frondL` (length), `arch` (how much they bend down), `leaflet`, `leafletW` (leaflet length and width), `hang` (0 stiff, 1 limp), `plume: 1` (leaflets in several planes, for a feathery frond like the queen palm's), `rings` (ring-scar colour), `shaft: [colour, fraction]` (a smooth crownshaft at the top, like the juçara's), `lean`, `taper` |
| `araucaria` | A tall bare trunk, then whorls of limbs that run out and curve up to one flat, umbrella-like top, with brushy tufts toward the tips | `whorlN` (limbs, 8), `wStart` (where the crown starts up the trunk, .64), `wL` (limb reach), `leafR` (tuft size) |

### 2.2 Nuts and cones: facts in `data/trees.js`, art in `NUTS` (`art/plants.js`)

```js
douglascone: {art:{t:'cone', len:10.5, wid:4.6, col:'#9a6e44', hi:'#b88c5c', bract:'#c9b48a'}},
```

The nut's `name`, `tree` and `fact` go under `nuts` in `data/trees.js`. `tree` is a claim like any other (`{"text": "<tree id>", "src": [...]}`), so it needs a source showing the tree bears this nut. It must be a tree id from the same file; the scientific name and range are filled in from that tree.

| `art.t` | Parameters |
|---|---|
| `acorn` | `nut`, `cap` colours; `capD` (how far the cap covers, 0–1); `w`, `h`; `warty` (knobbly cap); `flat` (broad, flat cap); `stalk` (stalk length) |
| `cone` | `len`, `wid`; `col` (body) and `hi` (scales); `egg` (egg-shaped), `barrel` (straight-sided), `upright` (stands on the branch, like firs); `open` (scales open), `prickle` (scale prickles), `bract` (three-pointed bract colour), `bosses` (Scots pine knobs), `nuts` (seed colour showing), `curve` (a lopsided cone, like jack pine) |
| `hickory` | No parameters: a split husk |
| `beech` | `col`: a spiny husk with three-sided nuts |
| `hazel` | A nut in a frilled husk. `beak: 1` gives the long bristly husk of the beaked hazel. |
| `walnut` | `col` (shell), `husk`: a pointed, wrinkled walnut between the two halves of its split green husk |
| `conker` | `col` (seed), `hilum` (the pale scar), `husk` and `inner`: a glossy horse chestnut in its three-part husk |
| `pinhao` | `col` and `tip` (the seed), `cone` and `hi` (the cone), `R` (cone size): a round, spiky pinha cone sitting on the limb, which shows as three loose pinhão seeds on the ground, on cards and in mission outlines |
| `drupes` | `col`, `hi`, `stalk`; `n` (strands), `r` (fruit size), `egg` (oval fruit): a hanging bunch of round fruit, like palm nuts |
| `podocarp` | `col` (the juicy stalk), `seed`, `bloom` (the waxy seed coat): a seed on a swollen fleshy stalk |
| `capsule` | `col`, `dots` (pale specks), `wing` (seed wings): a woody pod split into five valves, with winged seeds |

Hanging nuts are placed under their own tree's limbs (upright cones on top), and 1–2 lie fallen nearby.

### 2.3 Wildflowers: facts in `data/flowers.js`, art in `FLW` (`art/plants.js`)

`id: art`, for example `bloodroot: {k:'polar', v:{k:8, p:.75, …}}`.

| `art.k` | Shape | Parameters |
|---|---|---|
| `polar` | Open flower with petals | `v:{k (petal count), p (petal fullness), notch, c1 (edge), c2 (centre), center, layers:1, stripe?, spots?, tip?}`, `R` (size), `low` (short stem), `nod` (hangs down) |
| `phyllo` | Daisy-like head | `v`: a `PHYLLO` key. Add new heads to `PHYLLO`: `{p, p2, d:[disc colours], n (rays), len, wid, tip?}` |
| `raceme` | Spike of flowers on a stem | `v`: a `RACEME` key: `{c:[3 colours, base to tip], shape, n, slim?, small?}`. `shape` is `pea` (lupines), `bell` (foxglove), `plume` (goldenrod), `spike4` (fireweed, heather, vanilla leaf), `star` (six-petalled stars). Add `leaf3: 1` to the `art` for a big three-part leaf (vanilla leaf), `trumpet` (gilia, penstemon) or `bract` (paintbrush). |
| `droop` | Cone with drooping rays | `ray`, `ray2`, `cone` colours; `coneH` (cone height) |
| `bells` | Hanging bells | `c`, `n`; `oneSide` (bluebell), `cluster` (Virginia bluebells, with `bud` colour), `twin` (twinflower) |
| `columbine` | Spurred columbine | `c1` (sepals and spurs), `c2` (petals), `nod` |
| `cluster` | Flat or domed cluster of tiny flowers | `c`, `eye`, `dome` |
| `hearts` | Hearts hanging from an arching stem (bleeding heart) | `c`, `tip`, `n` |
| `spathe` | Big leaves around a hooded spathe (skunk cabbage) | `c`, `c2` (spathe outside and inside, yellow by default), `sp` (spadix) |
| `mayapple`, `slipper`, `iris` | One-off shapes | None |

If a flower needs a shape that doesn't exist, add a new `art.k` branch in `drawFlowerSp` (in `art/plants.js`) and keep it to simple filled shapes.

### 2.3b Mushrooms: facts and where they grow in `data/fungi.js`, art in `FUNGI` (`art/fungi.js`)

Each mushroom's card claims are `name`, `sci`, `range`, `grows`, `fact` and `marks` (field marks), each with sources. The `grows` claim ("On dead beech logs and stumps") comes with four plain fields that place the mushroom in the game. They must say exactly what the `grows` sources support:

| Field | Meaning |
|---|---|
| `substrate` | `soil`, `leaf litter` or `moss` (on the ground near its host trees, or anywhere if it lists none); `buried` (a truffle, shown half dug up); `trunk base`; `living trunk` (brackets on standing trees); `dead wood` (fallen logs and stumps) |
| `hosts` | Tree ids it grows on or with. Ground mushrooms appear only near these trees, trunk mushrooms only on them, and dead-wood mushrooms only on logs and stumps of these species. Wood-growers must list at least one, and every forest that lists the mushroom must have at least one of its hosts. |
| `habit` | `single`, `scattered`, `cluster` (tufts from one base), `tiers` (overlapping shelves) or `ring` |
| `cached` | `true` if squirrels are documented drying or caching it in trees; it can then also appear in the branches |

Fallen logs and stumps are drawn in the bark of their own tree species, mostly the tree next to them. A mission for a dead-wood mushroom makes logs of its host trees more likely.

`FUNGI.<id>` is the look: `{shape, s (size in world pixels), cap, cap2, under, stem, ring, bulb, spots, scales, bands, rim, glow, n, sh (stem height), sw (stem width), dome}`.

| `shape` | Looks like |
|---|---|
| `convex`, `flat`, `funnel`, `conical`, `bell` | A cap on a stem, with `under` (gills or pores) showing below the rim |
| `shelf`, `hoof`, `oyster` | Brackets growing out from a trunk or log; `bands` colours the growth zones; `oyster` has gills and a short side stem |
| `coral`, `puffball`, `earthstar`, `cup`, `stinkhorn`, `jelly`, `truffle` | One-off shapes |

### 2.4 Birds: facts in `data/birds.js`, art in `BIRDS` (inside `BirdArt`, in `art/birds.js`)

Each bird is drawn from its field marks on a shared body, facing right:

```js
{id:'stjay', zone:'sw', pose:'perch', size:1.15, bw:1.08, bh:.95,
 up:'#2f3a52', low:'#2b4f9e', head:'#16171b', wing:'#2a55b0',
 tail:{c:'#2a52a8', len:22, p:[['bars','#121a33']]}, crest:{len:9, c:'#16171b'},
 bill:{t:'jay', c:'#121316', len:5.4, d:2.8}, leg:'#1c1d21',
 hp:[['fstreaks','#a9c6ec']], bp:[['breast','#20263a']], wp:[['bars','#121a33']]},
```

| Field | Meaning |
|---|---|
| `pose` | `perch`, `horiz`, `ground`, `cling` (woodpeckers, head up on the trunk) or `headdown` (nuthatches). This also decides where the bird appears: limbs, ground or trunk. |
| `size`, `bw`, `bh`, `hs` | Overall size (1 is about a cardinal), body width and height, and head size |
| `sex: 1` | The drawing shows the male |
| `up`, `low`, `head`, `wing`, `leg` | Base colours: back, belly, head, wing, legs |
| `tail` | `{c, len, p}`. Tail patterns are `outer` (white outer feathers), `bars` and `tip`. |
| `crest` | `{len, c}` |
| `bill` | `t`: `cone` (finches, cardinal), `short` (tits), `thin` (warblers, nuthatches; `up:1` turns it up), `jay`, `chisel` (woodpeckers), `cross` (crossbills), `grouse` or `toucan`. Plus `c`, `len` and depth `d`. The big curved `toucan` bill also takes a colour pattern: `ridge` (a stripe along the top), `low` (lower mandible), `tip` and `base` (a band where it meets the face). Hornbills can reuse it. |
| `hp` (head) | `[kind, colour, offset?]`, where kind is `bib brow cap capback capback2 ccurve cheek chin clown collar comb crown eyeline face forehead fstreaks helmet hood mask moustache moustache3 nape napered napespot necklace streakcrown eyeskin` (`eyeskin` is the bare skin round a toucan's eye) |
| `bp` (body) | `backbars belly breast breastband breastedge flank rump scallop spots streaks vent wash` |
| `wp` (wing) | `bars edge panel patch spots tips wingbar wingbars2` |
| `sp` (shoulder) | `shoulder` |

The name, scientific name, range, fact and field marks go in `data/birds.js`.

**Call.** Add a `CALLS.<id>` entry, a list of notes: `[start (s), start Hz, end Hz, length (s), wave, volume, wobble Hz?, width?]`, where `wave` is `sine`, `square`, `sawtooth`, `triangle` or `noise`. `width` only applies to `noise`: it is the filter's Q, 6 by default; lower it (1–2) for broad sounds like drumming or wingbeats, and raise the volume to match. `rep(n, gap, fn)` repeats a note and `rnd(lo, hi)` picks a random number. For example, the cardinal's four falling whistles:

```js
cardinal: () => rep(4, .24, t => [[t, 3900, 1800, .17, 'sine', .9]]),
```

Every time a call plays, the whole thing is shifted a little in pitch and speed, so you don't need to add that yourself. For birds whose song is different every time (the robin, the Pacific wren), build the phrase with `rnd` so each call is new. The forest's background birds are drawn from its `birds` list, so they come for free.

### 2.5 Squirrels: facts in `data/squirrels.js`, art in `COATS` and `SQUIRRELS` (`art/squirrel.js`)

```js
abert: {back:'#73767a', back2:'#55585c', wash:'#8a7a6c', belly:'#f4f2ec', tail:'#7a7d80', tailEdge:'#efeee9',
        paw:'#4a4c50', ring:'#f2f0ea', ear:'#55585c', nose:'#2a2a2c', tuft:9, tuftC:'#3a3c3f', stripe:'#9a5a32'},
```

| Field | Meaning |
|---|---|
| `back`, `back2`, `wash`, `belly` | Back, darker back, flank wash, belly |
| `tail`, `tailEdge` | Tail, with a frosted edge |
| `paw`, `ring`, `ear`, `nose` | Paws, eye ring, inner ear, nose |
| `tuft`, `tuftC` | Ear tufts: length (0 for none, 7–9 for tufted) and colour |
| `stripe` | An optional coloured band along the back (Abert's) |
| `side` | A dark line along the flank (Douglas squirrel) |
| `cheek` | A pale stripe from the ear down the cheek (Japanese giant flying squirrel) |
| `muzzle`, `earOut`, `earIn` | Colours for the muzzle and the outer and inner ear, when they differ from the coat (the white nose and ears of the southeastern fox squirrel, the pink ears of the white gray squirrel) |
| `eye` | Eye size (1 is normal; 1.4 for the big night eyes of flying squirrels) |
| `tailR` | Tail fluffiness (0.75 for a flying squirrel's flat tail, 1.15 for the western gray's huge one) |
| `glide: 1` | A flying squirrel: draws the furry membrane from wrist to ankle, and once a leap starts to fall, the squirrel glides (a slow, capped fall). The aim arc shows it. |

`SQUIRRELS.<id> = {coat}`, where `coat` is the `COATS` key. The name, scientific name, range and fact go in `data/squirrels.js`.

### 2.6 The forest: `ZN` and `ZONE_IDS`

```js
sw: {name:'Southwest Ponderosa Pine', where:'Arizona, New Mexico and Colorado',
  sky:['#8fbbe0','#efe7d4'], hills:'#c9bba3', far:'#a5a59a', farLeaf:['#a8ae96','#b3b8a0'],
  trees:[['ponderosa',6],['gambeloak',3],['douglasfir',2],['aspen',1],['pinyon',2]],
  squirrels:['abert','kaibab'],
  birds:['stjay','pygnut','mtnchick','acornwp','wbluebird','rfwarbler'],
  nuts:['ponderosacone','gambelacorn','douglascone','pinyonnut'],
  flowers:['scarletgilia', …11 ids…],
  fungi:[…5 ids…]},
```

- `trees` are `[id, weight]`.
- `sky`, `hills`, `far` and `farLeaf` set the backdrop. Keep them hazy and low-contrast, and give them a tint that suggests the place: cooler blue-gray for boreal, warm dust for the Southwest. `farCrowns` (optional) picks the shapes of the faraway trees, three of `round`, `tall`, `wide` and `umbrella` (the flat tops of an araucaria skyline).
- Add the id to `ZONE_IDS` (its position sets the order in the menus). The menus, missions and collection all pick the new forest up from there.

---

## 3. Check it

1. **Look at every picture.** Open the game, open the browser console and paste this. It opens a contact sheet of every species in one forest (change `'sw'` to your id):

   ```js
   (z => { const Z = ZN[z], w = open('', '_blank'), d = w.document; d.body.style.cssText = 'margin:0;background:#e8ecdf;font:12px sans-serif;display:flex;flex-wrap:wrap';
     const add = (k, id, label) => { const c = pictureOf(k, id, 160, 120), f = d.createElement('figure'); f.style.margin = '6px'; const i = d.createElement('img'); i.src = c.toDataURL(); i.width = 160; f.append(i, Object.assign(d.createElement('figcaption'), {textContent: label})); d.body.append(f); };
     Z.squirrels.forEach(id => add('s', id, id)); Z.trees.forEach(([id]) => add('t', id, id)); Z.birds.forEach(id => add('b', id, id)); Z.nuts.forEach(id => add('n', id, id)); Z.flowers.forEach(id => add('f', id, id)); (Z.fungi || []).forEach(id => add('m', id, id)); })('sw');
   ```

   Compare each one with a photo. Check that the key field marks read at small size, and that the silhouettes are still recognisable (they become the mission outlines).
2. **Walk the forest.** Play it on a phone-sized and a desktop window. Check that the trees look right together, birds sit on limbs and trunks properly, cones hang (or stand) correctly, and nothing blocks the controls.
3. **Play each mission type** to the success screen, and check that the squirrel joins the collection. You can play by hand, or drive the real game from the console. A hidden browser pane or background tab slows `requestAnimationFrame` to a crawl, so the first line moves the game loop onto a timer that keeps full speed. Walking uses the same key events as the keyboard, and photos use the real lens. Remember that the lens follows the mouse once the pointer has been over the play area.

   ```js
   (() => { const mc = new MessageChannel(); let q = []; mc.port1.onmessage = () => { const now = performance.now(), due = q.filter(x => x.at <= now); q = q.filter(x => x.at > now); due.forEach(x => x.cb(now)); if (q.length) mc.port2.postMessage(0); };
     window.requestAnimationFrame = cb => { q.push({cb, at: performance.now() + 16}); mc.port2.postMessage(0); return 1; }; })();
   const sleep = ms => new Promise(r => setTimeout(r, ms));
   const walk = (code, ms) => { dispatchEvent(new KeyboardEvent('keydown', {code})); return sleep(ms).then(() => dispatchEvent(new KeyboardEvent('keyup', {code}))); };
   const targets = () => { const c = document.getElementById('play'), w = c.clientWidth, h = c.clientHeight, M = PLAY.mission, o = [];
     for (const T of W.trees.values()) { for (const b of T.birds) { const [x, y] = birdPos(b); o.push(['b', b.sp, x, y - 8]); } for (const n of T.nuts) { const [x, y] = nutPos(n); o.push(['n', n.sp, x, y + 5]); } for (const f of T.flowers) o.push(['f', f.sp, f.x, f.y - f.h]); }
     return o.filter(([k, id]) => wanted(M, k, id)).map(([k, id, x, y]) => { const [sx, sy] = toScreen(x, y, w, h); return {id, sx, sy}; }).filter(q => q.sx > 0 && q.sx < w && q.sy > 0 && q.sy < h); };
   const shoot = async ({sx, sy}) => { Object.assign(MOUSE, {x: sx, y: sy, t: performance.now()}); lensStart('key'); await sleep(700); lensEnd(); await sleep(300); };
   // a bird or flower mission: walk right, photographing each target that comes on screen
   startGame({zone: 'sw', squirrel: 'abert', mission: {zone: 'sw', squirrel: 'abert', type: 'b', targets: ZN.sw.birds.slice(0, 3), need: 3, got: []}});
   for (let i = 0; i < 40 && !PLAY.mission.done; i++) { const t = targets()[0]; if (t) await shoot(t); else await walk('KeyD', 1500); }
   ```

   Nuts must also be within reach: walk to a fallen one (`n.ground`) before you shoot, or climb to a hanging one. The lens can't reach the edge of the screen, so skip targets closer to it than `lensR(w, h)`, or the loop keeps shooting one it can never hit. If the page was loaded while hidden, the game loop may never start: call `requestAnimationFrame(frame)` once after the first line.
4. **Check the facts.** Read every claim against its sources, and check the plurals in mission titles. Then run:

   ```sh
   node tools/check_facts.mjs           # every claim sourced and checked, ids match the art, calls and forests
   node tools/check_facts.mjs --links   # every source URL still loads (some sites block scripts; open those by hand)
   ```

   It exits with an error until every claim has a source and a current check, and it lists exactly which claims are missing.
5. **Update the docs:**
   - Add the forest to the table in `README.md`.
   - Run `node tools/check_facts.mjs --write` to regenerate the species tables in `ATTRIBUTION.md` from the data. Add any new general sources to its list by hand.

---

## Workflow

The game is also published as a Claude artifact for quick review. Update and review the artifact first, then push to GitHub once it's approved. `index.html` is the artifact's page wrapped in a standard `<!doctype html>` skeleton, and the `data/*.js` and `art/*.js` files are published alongside it at the same paths.
