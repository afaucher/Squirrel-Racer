# Squirrel Racer

A cozy treetop game in a single HTML5 file. You're a real squirrel in a real forest: run the branches, leap between trees, photograph the birds and wildflowers, and collect the nuts and cones. There's no score, no losing, and no wrong way to go.

## Play

Open `index.html` in a browser. It works on phones (touch), with a keyboard, or with a game controller.

To hear the recorded forest audio (see `audio/`), serve the folder over HTTP instead of opening the file directly, for example:

```sh
python3 -m http.server
```

then visit http://localhost:8000.

## Controls

| | Touch | Keyboard | Controller |
|---|---|---|---|
| **Move** | Left thumb (floating stick) | W A S D | Left stick or D-pad |
| **Leap** | Right thumb: pull back, release | Hold arrows, release | Right stick: pull back, release |
| **Photo** | Hold the camera button (top right); the lens follows your finger; let go | Hold Space or Enter; the lens follows the mouse (or arrows aim); let go | Hold A or B, right stick aims, let go |
| **Menu** | Acorn button (top left) | M or Esc | Start |
| **Full screen** | Button at the bottom | F (Esc exits) | — |

- **Leap** is a wind-up: pull away from where you want to go and let go. Longer pulls jump farther. On the keyboard the direction is the average of the arrows you've held.
- **Landing** latches onto whatever you touch: limb, trunk or ground.
- **Thin branch tips bend** and weaken your launch, so leap from closer to the trunk. (Squirrels really do weigh branch bendiness over gap distance; see Hunt et al., *Science*, 2021.)

## Forests, missions and the collection

Open the acorn menu to choose:

- **Play:** pick a forest, then one of the squirrels that really lives there, and explore freely.
- **Missions:** three missions dealt at random. Each one rolls a forest, then one of that forest's squirrels, then what to find: photograph three different birds, collect three different nuts or cones, or photograph three different wildflowers. Each mission shows its three species in outline on the right, and each one fills in when you find it; tap a frame to see it again (and hear the call, for birds). Finishing a mission shows all three with their common and scientific names. Nothing can be failed.
- **Collection:** every squirrel, bird, nut, cone and wildflower in all four forests, with a check mark on the ones you've found. A squirrel joins your collection the first time you complete a mission as it, and its tile counts the missions you've completed with it. Tap any tile for its full page: a large picture, scientific name, native range, the forests it lives in, a fact, field marks and call for birds, the parent tree for nuts and cones, and a Wikipedia link. Nuts and cones are shown beside the tree they come from. Your collection is saved in this browser.

Holding the photo button opens a round lens (a quarter of the screen across) and dims everything else. The lens opens under your finger or mouse pointer and follows it as you slide; a keyboard without a mouse, or a controller, aims it with the arrows or right stick. Let go to take the photo. Only what's inside the circle can be captured: if something your mission is looking for is in it, that's always chosen first; otherwise it's the new find nearest the middle. A faint warm glow shows what's in focus. Nuts and cones are collected only when they're within reach. Each bird, nut and flower can be counted once per forest. Every card shows the common name, scientific name and native range, with a short fact.

| Forest | Squirrels | Trees | Birds |
|---|---|---|---|
| Eastern Hardwood Forest | Eastern gray (and its black form), eastern fox | White and northern red oak, shagbark hickory, American beech, sugar maple | Northern cardinal, blue jay, tufted titmouse, white-breasted nuthatch, red-bellied woodpecker |
| Boreal Forest | American red | White and black spruce, balsam fir, jack pine, paper birch, quaking aspen | Canada jay, boreal chickadee, red-breasted nuthatch, white-winged crossbill, spruce grouse, dark-eyed junco |
| Southwest Ponderosa Pine | Abert's, Kaibab | Ponderosa pine, Gambel oak, Douglas-fir, quaking aspen, Colorado pinyon | Steller's jay, pygmy nuthatch, mountain chickadee, acorn woodpecker, western bluebird, red-faced warbler |
| Caledonian Pinewood | Eurasian red (and its dark form) | Scots pine, silver birch, hazel, pedunculate oak, European beech, rowan | Eurasian jay, crested tit, great spotted woodpecker, coal tit, European robin, common chaffinch |

Each forest also has 11 native wildflowers and 4 nuts or cones. To add a forest, see [docs/ADDING-A-FOREST.md](docs/ADDING-A-FOREST.md): how the species are researched, how each one is described as data, and how to check the result. Birds are synthesized from the rhythm and pitch of their real calls; drop a recording at `audio/birds/<id>.mp3` to use it instead (see `audio/README.md`).

## Motion models (A/B toggle in the page)

- **B · Nimble (default).** A two-ended body: the shoulders lead and the hips trail, so the spine follows the path it actually takes. Each end grips its own surface and you can move while either end is within reach, so the squirrel climbs across gaps (front paws reach the next branch while the hind paws still hold the last) instead of jumping. Roll comes from what both ends are holding, so it twists through a back view (or a belly view behind thick branches) rather than flipping. The spine's swing rate is capped, reversing plays a short turn, and standing still settles the body back onto the branch.
- **A · Surface.** The squirrel runs along one surface at a time. Push into the branch to swing to its other side; overlapping branches from neighbouring trees can be crossed by pushing toward them.

## What's in it

- **Trees:** playable spline trunks and limbs with second-level forks, crown limbs and flared, parent-aligned joints. Species: oak, maple, birch and pine. Some limbs start behind the trunk, and twigs sit in front of or behind their branch.
- **Depth:** every walkable surface has a depth (behind limb, trunk, front limb). The squirrel is drawn at the depth of what it's holding, and anything in front of it is redrawn over it.
- **Scenery layers:** space-colonization trees far away, recursive-grammar trees in the midground, hazy same-tree limbs, layered grass with depth-sorted blades, procedural flowers (phyllotaxis heads, rose-curve blossoms, racemes), and near-camera branches, grass and flowers that get pushed out of the way as the camera moves through them.
- **Squirrel:** spline body with a flexible neck, spring tail and leg IK. Pose library drawn from real squirrel behavior (half-bound gallop, headfirst descent with reversed hind feet, sit-and-feed, alert tail flick). Eight real coats, including the ear tufts of Abert's and Eurasian red squirrels and the Kaibab squirrel's white tail.
- **Birds, nuts, cones and wildflowers:** each species drawn from its real field marks. Birds perch on limbs, cling to trunks (woodpeckers head-up, nuthatches head-down) or feed on the ground.
- **Celebrations instead of a score:** a rainbow tail on long flights, and stars, fireflies and falling leaves for big branch landings.
- **Forest audio:** a layered mixer whose canopy wind, birds, crickets and leaf rustle fade with height and speed, plus sounds for leaps, landings and celebrations. Synthesized by default; drop CC0 recordings into `audio/` to replace the beds.

## Credits

All the public sources behind the species, sounds and research are listed in [ATTRIBUTION.md](ATTRIBUTION.md).


Research behind the motion and trees:
- Hunt et al., "Acrobatic squirrels learn to leap and land on tree branches without falling", *Science* (2021).
- Hind-foot reversal in Sciuridae (SICB abstract).
- Runions, Lane & Prusinkiewicz, "Modeling Trees with a Space Colonization Algorithm" (2007).
- Leonardo da Vinci's area-preserving branching rule.
