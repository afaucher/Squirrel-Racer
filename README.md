# Squirrel Ranger

A cozy treetop game in one HTML5 page, for explorers aged 8 and up. You're a real squirrel in a real forest: run the branches, leap between trees, photograph the birds, wildflowers and mushrooms, and collect the nuts and cones. There's no score, no losing, and no wrong way to go.

## Play

Open `index.html` in a browser. It works on phones (touch), with a keyboard, or with a game controller. It needs no server or build: keep the `data/` and `art/` folders beside it: `data/` holds the species facts and `art/` some of the drawing code.

## Controls

| | Touch | Keyboard | Controller |
|---|---|---|---|
| **Move** | Left thumb (floating stick) | W A S D | Left stick or D-pad |
| **Leap** | Right thumb: pull back, release | Hold arrows, release | Right stick: pull back, release |
| **Photo** | Hold the camera button (top right); the lens follows your finger; let go | Hold Space or Enter; the lens follows the mouse (or arrows aim); let go | Hold A or B, right stick aims, let go |
| **Menu** | Acorn button (top left) | M or Esc | Start |
| **Full screen** | Full screen, at the bottom of the menu | F (Esc exits) | Menu, then Full screen |
| **Mute** | Mute, at the bottom of the menu | Menu, then Mute | Menu, then Mute |

- **Leap** is a wind-up: pull away from where you want to go and let go. Longer pulls jump farther. On the keyboard the direction is the average of the arrows you've held.
- **Landing** latches onto whatever you touch: limb, trunk or ground.
- **Thin branch tips bend** and weaken your launch, so leap from closer to the trunk. (Squirrels really do weigh branch bendiness over gap distance; see Hunt et al., *Science*, 2021.)

## Forests, missions and the collection

Open the acorn menu to choose:

- **Play:** pick a forest, then one of the squirrels that really lives there, and explore freely.
- **Missions:** three missions dealt at random. Each one rolls a forest, then one of that forest's squirrels, then what to find (half the time the three cover one of each kind; otherwise each kind is random): photograph three different birds, collect three different nuts or cones, photograph three different wildflowers, or photograph three different mushrooms. Each mission shows its three species in outline on the right, and each one fills in when you find it; tap a frame to see it again (and hear the call, for birds). Finishing a mission shows all three with their common and scientific names. Nothing can be failed.
- **Collection:** every squirrel, bird, nut, cone, wildflower and mushroom in all the real forests, with a check mark on the ones you've found. A squirrel joins your collection the first time you complete a mission as it, and its tile counts the missions you've completed with it. Tap any tile for its full page: a large picture, scientific name, native range, the forests it lives in, a fact, field marks and call for birds, the parent tree for nuts and cones, and a Wikipedia link. Nuts and cones are shown beside the tree they come from. Your collection is saved in this browser.

Holding the photo button opens a round lens (a quarter of the screen across) and dims everything else. The lens opens under your finger or mouse pointer and follows it as you slide; a keyboard without a mouse, or a controller, aims it with the arrows or right stick. Let go to take the photo. Only what's inside the circle can be captured: if something your mission is looking for is in it, that's always chosen first; otherwise it's the new find nearest the middle. A faint warm glow shows what's in focus. Nuts and cones are collected only when they're within reach. Each bird, nut and flower can be counted once per forest. Every card shows the common name, scientific name and native range, with a short fact.

| Forest | Squirrels | Trees | Birds |
|---|---|---|---|
| Eastern Hardwood Forest | Eastern gray (and its black and white forms), eastern fox (and its dark southeastern form), southern flying | White and northern red oak, shagbark hickory, American beech, sugar maple | Northern cardinal, blue jay, tufted titmouse, white-breasted nuthatch, red-bellied woodpecker |
| Boreal Forest | American red, northern flying | White and black spruce, balsam fir, jack pine, paper birch, quaking aspen | Canada jay, boreal chickadee, red-breasted nuthatch, white-winged crossbill, spruce grouse, dark-eyed junco |
| Southwest Ponderosa Pine | Abert's (and its black form), Kaibab, Arizona gray | Ponderosa pine, Gambel oak, Douglas-fir, quaking aspen, Colorado pinyon | Steller's jay, pygmy nuthatch, mountain chickadee, acorn woodpecker, western bluebird, red-faced warbler |
| Pacific Northwest Forest | Douglas, western gray, Humboldt's flying | Douglas-fir, western hemlock, western redcedar, Sitka spruce, bigleaf maple, red alder, beaked hazel | Steller's jay, chestnut-backed chickadee, varied thrush, pileated woodpecker, red-breasted nuthatch, Pacific wren |
| Caledonian Pinewood | Eurasian red (and its dark form) | Scots pine, silver birch, hazel, pedunculate oak, European beech, rowan | Eurasian jay, crested tit, great spotted woodpecker, coal tit, European robin, common chaffinch |
| Japanese Beech Forest | Japanese, Japanese giant flying, Japanese dwarf flying | Siebold's beech, Japanese oak, painted maple, Japanese bigleaf magnolia, Japanese horse chestnut, Japanese walnut | Eurasian jay, varied tit, Eurasian nuthatch, Japanese green woodpecker, Narcissus flycatcher, Japanese robin |
| Atlantic Forest (araucaria forest of southern Brazil) | Brazilian | Paraná pine, yerba mate, imbuia, pinheiro-bravo, queen palm, Argentine cedar | Red-breasted toucan, azure jay, white-spotted woodpecker, araucaria tit-spinetail, diademed tanager, rufous-bellied thrush |

Each forest's mix of trees, how each species clumps (clonal aspen groves, scattered hickories), how wet it likes the ground and whether it grows beneath the canopy all come from cited sources, and wildflowers grow in the light, wetness and company they really prefer. The layout is an approximation of the real forest: slope, soil, fire history and much else aren't modelled. Now and then a clearing opens where a tree has fallen, full of sunlight and sun-loving flowers. Each forest also has 11 native wildflowers, 4 nuts or cones, and 5 or 6 mushrooms. Each mushroom grows only where it really does: in soil near its partner trees, on their trunks, or on fallen logs and stumps of the right tree species, and a few that red squirrels are known to dry turn up in the branches. To add a forest, see [docs/ADDING-A-FOREST.md](docs/ADDING-A-FOREST.md): how the species are researched, how each one is described as data, and how to check the result. Birds are synthesized from the rhythm and pitch of their real calls, a little different every time, and the birds you hear in the distance are always ones that live in that forest.

## How the squirrel moves

A two-ended body: the shoulders lead and the hips trail, so the spine follows the path it actually takes. Each end grips its own surface and you can move while either end is within reach, so the squirrel climbs across gaps (front paws reach the next branch while the hind paws still hold the last) instead of jumping. Roll comes from what both ends are holding, so it twists through a back view (or a belly view behind thick branches) rather than flipping. The spine's swing rate is capped, reversing plays a short turn, and standing still settles the body back onto the branch.

## What's in it

- **Trees:** playable spline trunks and limbs with second-level forks, crown limbs and flared, parent-aligned joints. Growth forms: oak, maple, birch and pine, plus a palm (an unbranched ringed trunk under arching feather-leaved fronds you can run along) and the araucaria (a tall bare trunk under limbs that curve up to one flat, umbrella-like top). Some limbs start behind the trunk, and twigs sit in front of or behind their branch.
- **Depth:** every walkable surface has a depth (behind limb, trunk, front limb). The squirrel is drawn at the depth of what it's holding, and anything in front of it is redrawn over it.
- **Scenery layers:** space-colonization trees far away, recursive-grammar trees in the midground, hazy same-tree limbs, layered grass with depth-sorted blades, procedural flowers (phyllotaxis heads, rose-curve blossoms, racemes), and near-camera branches, grass and flowers that get pushed out of the way as the camera moves through them.
- **Squirrel:** spline body with a flexible neck, spring tail and leg IK. Pose library drawn from real squirrel behavior (half-bound gallop, headfirst descent with reversed hind feet, sit-and-feed, alert tail flick). 22 real coats, including the ear tufts of Abert's and Eurasian red squirrels, the Kaibab squirrel's white tail, the Douglas squirrel's dark side stripe and orange belly, and the white nose and ears of the southeastern fox squirrel.
- **Flying squirrels glide:** the southern, northern, Humboldt's, Japanese giant and Japanese dwarf flying squirrels have big eyes and a furry membrane from wrist to ankle (all but the Japanese giant have flat tails). Once a leap starts to fall, they spread it and glide, slowing their fall so they sail much farther. The aim arc shows the glide.
- **Mushrooms and dead wood:** caps, brackets in tiers, corals, puffballs, earthstars, truffles half dug up and more, drawn from each species' field marks, with fallen logs and stumps in the bark of their own trees. Every mushroom's info page reminds you to look but never pick or eat.
- **Birds, nuts, cones and wildflowers:** each species drawn from its real field marks. Birds perch on limbs, cling to trunks (woodpeckers head-up, nuthatches head-down) or feed on the ground. Toucans get their own big, patterned bill. The Paraná pine's pinha cones sit on its limbs and break into loose pinhão seeds on the ground.
- **Celebrations instead of a score:** a rainbow tail on long flights, and stars, fireflies and falling leaves for big branch landings.
- **Forest audio:** a layered mixer whose canopy wind, birds, crickets and leaf rustle fade with height and speed, plus sounds for leaps, landings and celebrations. All synthesized in the browser; there are no audio files.

## What's next

Ideas under consideration (more kinds of life in each forest, a world map, a quiz, better forest building, a race mode and ranger-uniform rewards) are written up, with costs and a suggested order, in [docs/FUTURE-DIRECTIONS.md](docs/FUTURE-DIRECTIONS.md).

## Credits

All the public sources behind the species, sounds and research are listed in [ATTRIBUTION.md](ATTRIBUTION.md).

Every claim on a species card (name, scientific name, range, fact, field marks) cites its own sources in `data/*.js` and records when it was last checked. `node tools/check_facts.mjs` (Node 20 or later, no installs) verifies that every claim is sourced and that none has been edited since its last check; `--links` also confirms the source pages still load.


Research behind the motion and trees:
- Hunt et al., "Acrobatic squirrels learn to leap and land on tree branches without falling", *Science* (2021).
- Hind-foot reversal in Sciuridae (SICB abstract).
- Runions, Lane & Prusinkiewicz, "Modeling Trees with a Space Colonization Algorithm" (2007).
- Leonardo da Vinci's area-preserving branching rule.
