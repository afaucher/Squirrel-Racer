# Future directions

Ideas for where Squirrel Ranger goes next, written down at `v1.0` (seven forests). Nothing here is built or committed to yet. Each section says what the idea is, what it would take given how the game works today, and what is still undecided. Suggested order and open questions are at the end.

## Where the game stands

These facts about the current code shape most of the ideas below.

- **Kinds are hard-coded.** Squirrels, birds, nuts and cones, and wildflowers are handled by letter (`s`, `b`, `n`, `f`) in about 30 places across missions, cards, the collection and the info pages. Every new kind means touching all of them.
- **Forests have no structure yet.** Each tree slot picks a species by weight, independently of its neighbours, and each tree gets 5–8 random flowers from the forest's list. There are no stands, clearings, fallen logs or snags, and no link between a plant or animal and the trees it lives with.
- **Facts are sourced.** `data/*.js` holds every name, range and fact with its sources, and `tools/check_facts.mjs` checks them. New content has to meet the same standard.
- **Art and sound are generated in code**, and the game opens from disk with no build step.
- **Progress lives in this browser only.** The collection is saved in localStorage, so clearing site data or switching devices loses it.

---

## 1. More life in each forest

**Mushrooms are done** (after `v1.0`): 29 species, 5 or 6 per forest, each placed by its sourced habitat and host trees, with fallen logs and stumps for the wood-rotters. Mosses, insects and small mammals are still to come.

Add mammals, small mammals, mushrooms, insects and mosses alongside the birds, nuts and flowers.

Each new kind needs:
- a drawing style in `art/`
- a placement rule: ground, trunk, log or branch
- a collection section and a mission type
- research for every forest, roughly 30–40 species per kind, sourced like the existing data

| Kind | Cost | Notes |
|---|---|---|
| Mushrooms | Low | They don't move. Good squirrel stories: red squirrels dry mushrooms on branches, and flying squirrels dig up truffles. |
| Mosses and lichens | Low | They don't move. They grow on trunks, logs and rocks. |
| Insects | Medium | Butterflies and beetles need small flutter animations and must stay photographable when tiny. |
| Small mammals | Medium–high | Chipmunks, voles and martens suit the squirrel's scale, but need animation and behaviour. |
| Large mammals | High | Deer or bears would fill the screen at squirrel-cam zoom. Leave them out, or show them only far in the background. |

**Start with mushrooms**, on top of the kind registry (section 7) and the forest building (section 4).

## 2. A world map

**Map as the forest picker:** a stylized world map with a pin per forest, showing collection progress and badges on each pin. Coastlines could come from [Natural Earth](https://www.naturalearthdata.com), which is public domain and fits the project's sourcing rules. This is mostly UI.

**Species range maps:** avoid these, or draw coarse hand-made regions instead. The good range data (IUCN, BirdLife) is restricted for reuse, and large.

## 3. Quiz mode

Matching games built from data the game already has:
- call ↔ bird
- picture ↔ name
- nut or cone ↔ parent tree (already linked in the data)
- squirrel ↔ forest
- field marks ↔ bird

It needs no new art, and it scales automatically as species are added.

- **Fair wrong answers:** take them from the same forest or the same kind.
- **Practise what you've found:** quizzing only on collected species turns the collection into something you practise with.
- **"No losing":** the game has no losing, and a quiz has wrong answers. Handle them gently: "try again", with no score shown.

## 4. Better forest building

**Started (after `v1.0`):** trees now grow in stands (each species' abundance swells and fades along the forest), and clearings open where a tree has fallen, with its stump and log, sunlight and more wildflowers. Fallen logs and stumps came with mushrooms. Still to do: wildflowers tied to their own habitat (sun or shade, which trees), birds near their trees, and snags.

Make forests look and behave more like the real places:
- **Stands:** a run of beech, then a stand of hemlock, instead of an even mix.
- **Clearings:** with the sun-loving flowers that grow there, such as fireweed.
- **Understory:** plants tied to the trees above them, such as bunchberry under conifers.
- **Birds near their trees:** crossbills in spruce, nuthatches on big trunks.
- **Fallen logs and snags:** dead standing trunks.

This needs habitat tags in `data/*.js`: which trees a species goes with, how much light, and what surface. Those associations are claims, so they need sources too.

It is foundation work. Logs and snags are where mushrooms, mosses and insects would live, so it should come before most of section 1.

## 5. Race mode, a reward that's just fun

The game was first called Squirrel *Racer*, so it fits. Real behaviour gives a cozy framing: red squirrels chase intruders through the canopy, and spring mating chases are famous.

- **Time trial (cheap):** a course of acorn rings through the trees, unlocked by finishing missions.
- **Ghost race (medium):** race a replay of your own best run.
- **Rival squirrel (expensive):** a computer-controlled squirrel on the same movement system. The movement is complex, so an AI that races well on it is real work.

Start with the time trial.

## 6. Cosmetic rewards

Rewards for completing missions and for collecting everything of one kind in a forest, built on the game's name: a **ranger's uniform**.

- **Forest badges:** each forest has three badges, one each for all its birds, all its nuts and cones, and all its wildflowers. Each badge shows a leaf or cone from that forest. They go on a sash the squirrel wears.
- **A ranger hat:** for earning all three badges in a forest. It could be a different hat per forest, or one hat with that forest's badge pinned on.
- **The full uniform:** sash, hat and neckerchief, as the long-term goal for completing several forests.
- **Tail effects:** leaf trails, sparkles or a fluffier tail, for mission milestones (for example 3, 10 and 25 missions).
- **Squirrel-specific unlocks:** for missions finished as a particular squirrel, giving a reason to play each one.

| Item | Cost | Why |
|---|---|---|
| Tail effects | Low | A hook already exists for the rainbow tail on long leaps. |
| Badges, sash display, wardrobe screen | Low–medium | Mostly UI: a wardrobe in the menu, and badges on the collection page. |
| Hats and worn items | Medium–high | They must sit right in every pose (running, sitting, clinging, head-first descent, gliding), from the side, back and belly, across 17 coats. The flying squirrels' gliding membrane complicates the uniform. Pin each item to a point on the squirrel's skeleton rather than drawing it per pose, and ship hats one at a time. |

Design notes:
- **Show what's locked:** with a hint ("Find every Boreal bird"), so the reward pulls players forward.
- **Avoid grind:** tie unlocks to the collection rather than raw mission counts, so they reward exploring each forest.
- **Protect progress:** unlocks would live next to the collection in localStorage. The more progress matters, the more an export/import or backup code is worth adding.

## 7. A kind registry (enabling work)

**Started with mushrooms:** `KINDS` and `FINDS` in `index.html` now drive mission wording, the collection sections, info pages and which kinds missions can ask for. Drawing, placement and photo targeting are still per kind.

Not a feature players see. Describe each kind once (its letter, labels, drawing, placement, mission wording, collection section) instead of in about 30 places. It makes every new kind in section 1 much cheaper, and new kinds automatically get collection sections, missions, quiz questions and badges.

---

## Suggested order

1. **Quiz mode** (section 3): quick, high payoff, no dependencies.
2. **Cosmetic rewards** (section 6): badges, the wardrobe and tail effects first; hats one at a time after. It gives a reason to finish forests.
3. **Kind registry** (section 7): after badges exist, so new kinds get badges for free.
4. **Forest building** (section 4): stands, clearings, logs and habitat tags.
5. **New kinds** (section 1): mushrooms first, then insects, then small mammals.
6. **World map** (section 2): the forest picker with progress and badges. It can come any time after step 1.
7. **Race mode** (section 5): a time trial first, as a reward. The squirrel races in its hat, and race medals can be another reward.

Quiz mode, the map and forest building touch different code and could run in parallel. The kind registry should land before any new kinds.

## Open questions

- **Learning versus fun:** is the main goal teaching kids to recognise species, or play? That decides whether quiz or race comes earlier.
- **"No losing":** should it hold everywhere, including quiz and race?
- **Phones:** more creatures on screen costs frame rate. Is smooth play on phones a hard requirement?
- **Progress:** does it need to survive across devices, which would mean a backup code or an account?
