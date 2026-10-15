# Squirrel Racer

An endless treetop run in a single HTML5 file. You're a squirrel: run the branches, leap between trees, and land the big ones. There's no score and no wrong way to go.

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

- **Leap** is a wind-up: pull away from where you want to go and let go. Longer pulls jump farther. On the keyboard the direction is the average of the arrows you've held.
- **Landing** latches onto whatever you touch: limb, trunk or ground.
- **Thin branch tips bend** and weaken your launch, so leap from closer to the trunk. (Squirrels really do weigh branch bendiness over gap distance; see Hunt et al., *Science*, 2021.)

## Motion models (A/B toggle in the page)

- **B · Nimble (default).** The body moves freely in straight lines anywhere within reach of a branch, trunk or the ground. Each foot reaches for the nearest surface, so slipping between nearby branches, going underneath, or around a trunk just happens. Mid-roll the squirrel switches to a back view (or a belly view when it passes behind a thick branch) with its legs gripping both edges of the branch.
- **A · Surface.** The squirrel runs along one surface at a time. Push into the branch to swing to its other side; overlapping branches from neighbouring trees can be crossed by pushing toward them.

## What's in it

- **Trees:** playable spline trunks and limbs with second-level forks, crown limbs and flared, parent-aligned joints. Species: oak, maple, birch and pine. Some limbs start behind the trunk, and twigs sit in front of or behind their branch.
- **Depth:** every walkable surface has a depth (behind limb, trunk, front limb). The squirrel is drawn at the depth of what it's holding, and anything in front of it is redrawn over it.
- **Scenery layers:** space-colonization trees far away, recursive-grammar trees in the midground, hazy same-tree limbs, layered grass with depth-sorted blades, procedural flowers (phyllotaxis heads, rose-curve blossoms, racemes), and near-camera branches, grass and flowers that get pushed out of the way as the camera moves through them.
- **Squirrel:** spline body with a flexible neck, spring tail and leg IK. Pose library drawn from real squirrel behavior (half-bound gallop, headfirst descent with reversed hind feet, sit-and-feed, alert tail flick). A random coat each run: gray, fox, red, or the rare black morph.
- **Celebrations instead of a score:** a rainbow tail on long flights, and stars, fireflies and falling leaves for big branch landings.
- **Forest audio:** a layered mixer whose canopy wind, birds, crickets and leaf rustle fade with height and speed, plus sounds for leaps, landings and celebrations. Synthesized by default; drop CC0 recordings into `audio/` to replace the beds.

## Credits

Research behind the motion and trees:
- Hunt et al., "Acrobatic squirrels learn to leap and land on tree branches without falling", *Science* (2021).
- Hind-foot reversal in Sciuridae (SICB abstract).
- Runions, Lane & Prusinkiewicz, "Modeling Trees with a Space Colonization Algorithm" (2007).
- Leonardo da Vinci's area-preserving branching rule.
