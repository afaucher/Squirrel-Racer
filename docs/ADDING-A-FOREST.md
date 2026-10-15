# Adding a forest

This is how the five current forests were researched and modelled. Follow the same steps to add a new one. The Pacific Northwest Forest was the first one built from this guide, so it makes a good worked example.

A forest is a list of real species plus a few colours. All the species art, calls and placement come from data, so adding a forest means **researching** the species, **writing their data**, then **checking it**. No new drawing code is needed unless a species has a shape the renderers can't draw yet.

Everything lives in `index.html`. Search for the names in the right-hand column of each table.

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

**Check habitat, not just range.** A species can live in the right region but in the wrong place, like a meadow, prairie or dry oak woodland. For the Pacific Northwest, common camas and broadleaf lupine were swapped for Oregon fawn lily and vanilla leaf, and tall Oregon grape for the dwarf Oregon grape of the forest floor. When you keep a weaker fit on purpose (the western gray squirrel prefers drier oak and Douglas-fir woods), say so in its range.

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
- **A reference link.** Use the species' Wikipedia page, and open it to confirm it exists and is the right species. It goes in `ATTRIBUTION.md`.

For **birds**, also note the field marks from a field guide (All About Birds or the RSPB): colours of the back, belly, head, wings and tail, plus caps, masks, bars and crests. Note the bill shape and length, and draw the male where the sexes differ. Also note the call's rhythm and pitch as field guides describe it, like the cardinal's slurred "cheer cheer cheer" whistles.

For **trees**, note bark colour and texture, leaf or needle colour, overall shape, and anything distinctive. Examples: white, marked bark (birch, aspen); orange plated bark (ponderosa, Scots pine); shaggy strips (shagbark hickory); spire versus round crown.

For **nuts and cones**, note size, shape, colour and any feature that makes it recognisable: the long acorn stalk of pedunculate oak, the "mouse" bracts of Douglas-fir, a fir cone standing upright.

For **squirrels**, note coat colours, belly, tail and ear tufts.

---

## 2. Model the data

Add entries in this order. Copy a neighbour from the existing forests and adjust it; that's faster and safer than starting from scratch.

### 2.1 Trees: `TREE_INFO` and `SPECIES`

`TREE_INFO.<id> = [common name, scientific name, range]`

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

### 2.2 Nuts and cones: `NUTS`

```js
douglascone: {name:'Douglas-fir cone', tree:'douglasfir', fact:'…',
  art:{t:'cone', len:10.5, wid:4.6, col:'#9a6e44', hi:'#b88c5c', bract:'#c9b48a'}},
```

`tree` must be an id from `TREE_INFO`. The scientific name and range are filled in from that tree.

| `art.t` | Parameters |
|---|---|
| `acorn` | `nut`, `cap` colours; `capD` (how far the cap covers, 0–1); `w`, `h`; `warty` (knobbly cap); `flat` (broad, flat cap); `stalk` (stalk length) |
| `cone` | `len`, `wid`; `col` (body) and `hi` (scales); `egg` (egg-shaped), `barrel` (straight-sided), `upright` (stands on the branch, like firs); `open` (scales open), `prickle` (scale prickles), `bract` (three-pointed bract colour), `bosses` (Scots pine knobs), `nuts` (seed colour showing), `curve` (a lopsided cone, like jack pine) |
| `hickory` | No parameters: a split husk |
| `beech` | `col`: a spiny husk with three-sided nuts |
| `hazel` | A nut in a frilled husk. `beak: 1` gives the long bristly husk of the beaked hazel. |

Hanging nuts are placed under their own tree's limbs (upright cones on top), and 1–2 lie fallen nearby.

### 2.3 Wildflowers: `FLW`

`id: [common name, scientific name, range, art]`

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
| `spathe` | Big leaves around a hooded spathe (skunk cabbage) | None |
| `mayapple`, `slipper`, `iris` | One-off shapes | None |

If a flower needs a shape that doesn't exist, add a new `art.k` branch in `drawFlowerSp` and keep it to simple filled shapes.

### 2.4 Birds: `BIRDS` (inside `BirdArt`), then range and fact

Each bird is drawn from field marks on a shared body, facing right:

```js
{id:'stjay', zone:'sw', name:"Steller's jay", sci:'Cyanocitta stelleri', wiki:'Steller%27s_jay', pose:'perch', size:1.15, bw:1.08, bh:.95,
 marks:'Black crested head with pale forehead streaks, sooty back, deep blue wings, belly and tail.',
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
| `bill` | `t`: `cone` (finches, cardinal), `short` (tits), `thin` (warblers, nuthatches; `up:1` turns it up), `jay`, `chisel` (woodpeckers), `cross` (crossbills) or `grouse`. Plus `c`, `len` and depth `d`. |
| `hp` (head) | `[kind, colour, offset?]`, where kind is `bib brow cap capback capback2 ccurve cheek chin clown collar comb crown eyeline face forehead fstreaks helmet hood mask moustache moustache3 nape napered napespot necklace streakcrown` |
| `bp` (body) | `backbars belly breast breastband breastedge flank rump scallop spots streaks vent wash` |
| `wp` (wing) | `bars edge panel patch spots tips wingbar wingbars2` |
| `sp` (shoulder) | `shoulder` |

Then add the text to the `Object.assign(BIRD_SP.<id>, {range, fact, pl?})` lines. `pl` is only needed for an irregular plural (titmice, grouse).

**Call.** Add a `CALLS.<id>` entry, a list of notes: `[start (s), start Hz, end Hz, length (s), wave, volume, wobble Hz?]`, where `wave` is `sine`, `square`, `sawtooth`, `triangle` or `noise`. `rep(n, gap, fn)` repeats a note. For example, the cardinal's four falling whistles:

```js
cardinal: () => rep(4, .24, t => [[t, 3900, 1800, .17, 'sine', .9]]),
```

A real recording at `audio/birds/<id>.mp3` replaces the synthesized call automatically.

### 2.5 Squirrels: `COATS` and `SQUIRRELS`

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
| `muzzle`, `earOut`, `earIn` | Colours for the muzzle and the outer and inner ear, when they differ from the coat (the white nose and ears of the southeastern fox squirrel, the pink ears of the white gray squirrel) |
| `eye` | Eye size (1 is normal; 1.4 for the big night eyes of flying squirrels) |
| `tailR` | Tail fluffiness (0.75 for a flying squirrel's flat tail, 1.15 for the western gray's huge one) |
| `glide: 1` | A flying squirrel: draws the furry membrane from wrist to ankle, and once a leap starts to fall, the squirrel glides (a slow, capped fall). The aim arc shows it. |

`SQUIRRELS.<id> = {name, sci, coat, range, fact}`, where `coat` is the `COATS` key.

### 2.6 The forest: `ZN` and `ZONE_IDS`

```js
sw: {name:'Southwest Ponderosa Pine', where:'Arizona, New Mexico and Colorado',
  sky:['#8fbbe0','#efe7d4'], hills:'#c9bba3', far:'#a5a59a', farLeaf:['#a8ae96','#b3b8a0'],
  trees:[['ponderosa',6],['gambeloak',3],['douglasfir',2],['aspen',1],['pinyon',2]],
  squirrels:['abert','kaibab'],
  birds:['stjay','pygnut','mtnchick','acornwp','wbluebird','rfwarbler'],
  nuts:['ponderosacone','gambelacorn','douglascone','pinyonnut'],
  flowers:['scarletgilia', …11 ids…]},
```

- `trees` are `[id, weight]`.
- `sky`, `hills`, `far` and `farLeaf` set the backdrop. Keep them hazy and low-contrast, and give them a tint that suggests the place: cooler blue-gray for boreal, warm dust for the Southwest.
- Add the id to `ZONE_IDS` (its position sets the order in the menus). The menus, missions and collection all pick the new forest up from there.

---

## 3. Check it

1. **Look at every picture.** Open the game, open the browser console and paste this. It opens a contact sheet of every species in one forest (change `'sw'` to your id):

   ```js
   (z => { const Z = ZN[z], w = open('', '_blank'), d = w.document; d.body.style.cssText = 'margin:0;background:#e8ecdf;font:12px sans-serif;display:flex;flex-wrap:wrap';
     const add = (k, id, label) => { const c = pictureOf(k, id, 160, 120), f = d.createElement('figure'); f.style.margin = '6px'; const i = d.createElement('img'); i.src = c.toDataURL(); i.width = 160; f.append(i, Object.assign(d.createElement('figcaption'), {textContent: label})); d.body.append(f); };
     Z.squirrels.forEach(id => add('s', id, id)); Z.trees.forEach(([id]) => add('t', id, id)); Z.birds.forEach(id => add('b', id, id)); Z.nuts.forEach(id => add('n', id, id)); Z.flowers.forEach(id => add('f', id, id)); })('sw');
   ```

   Compare each one with a photo. Check that the key field marks read at small size, and that the silhouettes are still recognisable (they become the mission outlines).
2. **Walk the forest.** Play it on a phone-sized and a desktop window. Check that the trees look right together, birds sit on limbs and trunks properly, cones hang (or stand) correctly, and nothing blocks the controls.
3. **Play each mission type** to the success screen, and check that the squirrel joins the collection.
4. **Check the text.** Every name, scientific name, range and fact against your sources, and the plurals in mission titles.
5. **Update the docs:**
   - Add the forest to the table in `README.md`.
   - Add every new species with its reference link to `ATTRIBUTION.md`, plus any new general sources.
   - Credit any recordings you add, with their licence.

---

## Workflow

The game is also published as a Claude artifact for quick review. Update and review the artifact first, then push to GitHub once it's approved. `index.html` is the artifact's page wrapped in a standard `<!doctype html>` skeleton.
