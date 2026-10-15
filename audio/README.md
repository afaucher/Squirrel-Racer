# Forest audio

The game synthesizes its forest ambience, but it will use real recordings if these files exist here:

| File | Layer | Fades with |
|---|---|---|
| `forest-birds.ogg` | Bird bed | Louder higher in the canopy |
| `canopy-wind.ogg` | Wind in the leaves | Height and gusts |
| `ground-insects.ogg` | Crickets / insects | Only near the ground |

Each file loops, so trim it to a clean loop. When a recording is present, the synthesized version of that layer drops to a quiet bed underneath it.

## CC0 sources

These were checked as CC0 (public domain, no attribution required):

- [Birds and wind ambient](https://opengameart.org/content/birds-and-wind-ambient-birds-wind-and-synth) on OpenGameArt. Four OGG tracks of birds with wind; "Birds and Wind - Ambient.ogg" suits `forest-birds.ogg`.
- [Ambient bird sounds](https://opengameart.org/content/ambient-bird-sounds) by isaiah658 on OpenGameArt. A single bird-ambience OGG.
- [Forest bird sounds](https://opengameart.org/content/forest-bird-sounds) by pauliuw on OpenGameArt. 10 individual calls, useful as one-shots.
- [Rambouillet Forest](https://bigsoundbank.com/rambouillet-forest-s0136.html) on BigSoundBank. 2½ minutes of birdsong, wind and creaking branches. It includes a passing car and a plane, so trim those out.

Serve the folder over HTTP (for example `python3 -m http.server`) so the browser can load the files.
