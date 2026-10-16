// Squirrel Ranger species facts: Trees, and the nuts and cones they bear.
// Every claim on a card is {"text", "src": [urls], "checked": "YYYY-MM", "sig", "note"?}.
// "sig" fingerprints the text when it was checked; edit the text and the check flags it for a re-check.
// How to add or fix a fact: docs/ADDING-A-FOREST.md. Validate with: node tools/check_facts.mjs

(window.SPECIES_DATA ||= {}).trees = {
 "whiteoak": {
  "name": {"text":"White oak","src":["https://www.fs.usda.gov/database/feis/plants/tree/quealb/all.html"],"checked":"2026-10","sig":"86f1f487"},
  "sci": {"text":"Quercus alba","src":["https://www.fs.usda.gov/database/feis/plants/tree/quealb/all.html"],"checked":"2026-10","sig":"4a16c12f"},
  "range": {"text":"Eastern and central US, southeastern Canada","src":["https://www.fs.usda.gov/database/feis/plants/tree/quealb/all.html","https://en.wikipedia.org/wiki/Quercus_alba"],"checked":"2026-10","sig":"892ececb"},
  "stands": {"text":"Usually grows mixed in with other oaks and hickories, and in the north it rarely forms stands of only white oak.","src":["https://www.fs.usda.gov/database/feis/plants/tree/quealb/all.html","https://research.fs.usda.gov/silvics/white-oak"],"checked":"2026-10","sig":"87862413"},
  "clump": "mixed",
  "site": {"text":"Grows on many kinds of ground, from rich uplands to moist bottomlands, but avoids the driest rocky ridgetops and very wet flats.","src":["https://www.fs.usda.gov/database/feis/plants/tree/quealb/all.html","https://research.fs.usda.gov/silvics/white-oak"],"checked":"2026-10","sig":"09dc0734"},
  "moisture": "mesic",
  "pioneer": false,
  "height": {"text":"A big canopy tree, commonly 18 to 30 m tall.","src":["https://www.fs.usda.gov/database/feis/plants/tree/quealb/all.html","https://research.fs.usda.gov/silvics/white-oak"],"checked":"2026-10","sig":"fa4a2c0a"},
  "storey": "canopy"
 },
 "redoak": {
  "name": {"text":"Northern red oak","src":["https://www.fs.usda.gov/database/feis/plants/tree/querub/all.html"],"checked":"2026-10","sig":"613383e3"},
  "sci": {"text":"Quercus rubra","src":["https://www.fs.usda.gov/database/feis/plants/tree/querub/all.html"],"checked":"2026-10","sig":"a87bba67"},
  "range": {"text":"Eastern US and southeastern Canada","src":["https://www.fs.usda.gov/database/feis/plants/tree/querub/all.html"],"checked":"2026-10","sig":"80c32bf9"},
  "stands": {"text":"Grows mixed with other oaks, hickories, maples and beech, and sometimes makes pure stands of red oak.","src":["https://research.fs.usda.gov/silvics/northern-red-oak","https://www.fs.usda.gov/database/feis/plants/tree/querub/all.html"],"checked":"2026-10","sig":"b0909733"},
  "clump": "mixed",
  "site": {"text":"Likes deep, well-drained soils on lower and middle slopes, coves and valley floors.","src":["https://research.fs.usda.gov/silvics/northern-red-oak","https://www.fs.usda.gov/database/feis/plants/tree/querub/all.html"],"checked":"2026-10","sig":"4a343fad"},
  "moisture": "mesic",
  "pioneer": false,
  "height": {"text":"A tall canopy tree, usually 20 to 30 m tall.","src":["https://research.fs.usda.gov/silvics/northern-red-oak","https://www.fs.usda.gov/database/feis/plants/tree/querub/all.html"],"checked":"2026-10","sig":"a599dffb"},
  "storey": "canopy"
 },
 "hickory": {
  "name": {"text":"Shagbark hickory","src":["https://www.fs.usda.gov/database/feis/plants/tree/carova/all.html"],"checked":"2026-10","sig":"9bee066f"},
  "sci": {"text":"Carya ovata","src":["https://www.fs.usda.gov/database/feis/plants/tree/carova/all.html"],"checked":"2026-10","sig":"1d58bbd5"},
  "range": {"text":"Eastern US and southeastern Canada","src":["https://www.fs.usda.gov/database/feis/plants/tree/carova/all.html"],"checked":"2026-10","sig":"80c32bf9"},
  "stands": {"text":"Usually grows as single trees or small groups scattered among the oaks, and almost never forms a hickory-only forest.","src":["https://www.fs.usda.gov/database/feis/plants/tree/carova/all.html","https://research.fs.usda.gov/silvics/shagbark-hickory"],"checked":"2026-10","sig":"bcb99c3b"},
  "clump": "scattered",
  "site": {"text":"Most common on deep, rich, moist soils: upland slopes in the north and river bottoms and coves in the south.","src":["https://www.fs.usda.gov/database/feis/plants/tree/carova/all.html","https://research.fs.usda.gov/silvics/shagbark-hickory"],"checked":"2026-10","sig":"eb9933bf"},
  "moisture": "moist",
  "pioneer": false,
  "height": {"text":"A canopy tree, commonly 20 to 25 m tall.","src":["https://www.fs.usda.gov/database/feis/plants/tree/carova/all.html","https://research.fs.usda.gov/silvics/shagbark-hickory"],"checked":"2026-10","sig":"b2661c81"},
  "storey": "canopy"
 },
 "beech": {
  "name": {"text":"American beech","src":["https://www.fs.usda.gov/database/feis/plants/tree/faggra/all.html"],"checked":"2026-10","sig":"2726b91e"},
  "sci": {"text":"Fagus grandifolia","src":["https://www.fs.usda.gov/database/feis/plants/tree/faggra/all.html"],"checked":"2026-10","sig":"c7471c3f"},
  "range": {"text":"Eastern US and southeastern Canada","src":["https://www.fs.usda.gov/database/feis/plants/tree/faggra/all.html"],"checked":"2026-10","sig":"80c32bf9"},
  "stands": {"text":"Grows mixed with sugar maple and other hardwoods, and its roots send up sprouts, so some groups of big beech trees are actually one clone.","src":["https://research.fs.usda.gov/silvics/american-beech","https://www.fs.usda.gov/database/feis/plants/tree/faggra/all.html"],"checked":"2026-10","sig":"743bf40c"},
  "clump": "mixed",
  "site": {"text":"Prefers loamy soils rich in humus, often on cool, moist north-facing slopes, and can handle soggy ground as long as it does not stay flooded.","src":["https://research.fs.usda.gov/silvics/american-beech","https://www.fs.usda.gov/database/feis/plants/tree/faggra/all.html"],"checked":"2026-10","sig":"acfddd61"},
  "moisture": "mesic",
  "pioneer": false,
  "height": {"text":"A canopy tree, usually 18 to 25 m tall, that is very good at growing slowly in deep shade.","src":["https://www.fs.usda.gov/database/feis/plants/tree/faggra/all.html","https://research.fs.usda.gov/silvics/american-beech"],"checked":"2026-10","sig":"4d89f238"},
  "storey": "canopy"
 },
 "sugarmaple": {
  "name": {"text":"Sugar maple","src":["https://www.fs.usda.gov/database/feis/plants/tree/acesac/all.html"],"checked":"2026-10","sig":"29c35af1"},
  "sci": {"text":"Acer saccharum","src":["https://www.fs.usda.gov/database/feis/plants/tree/acesac/all.html"],"checked":"2026-10","sig":"6d546e4f"},
  "range": {"text":"Eastern US and southeastern Canada","src":["https://www.fs.usda.gov/database/feis/plants/tree/acesac/all.html"],"checked":"2026-10","sig":"80c32bf9"},
  "stands": {"text":"Often the main tree in rich woods, sharing them with beech, birch and basswood, and sometimes forming nearly pure maple stands.","src":["https://www.fs.usda.gov/database/feis/plants/tree/acesac/all.html","https://msaf.forest.mtu.edu/Business/MSAFguide-2010/1-4b-Upland.html","https://research.fs.usda.gov/silvics/sugar-maple"],"checked":"2026-10","sig":"69c268c6"},
  "clump": "clumped",
  "site": {"text":"Grows best in rich, moist, well-drained soils in cool, moist climates, not in dry, shallow soil or swamps.","src":["https://research.fs.usda.gov/silvics/sugar-maple","https://www.fs.usda.gov/database/feis/plants/tree/acesac/all.html"],"checked":"2026-10","sig":"ac48ffd8"},
  "moisture": "mesic",
  "pioneer": false,
  "height": {"text":"A tall canopy tree, 27 to 37 m tall when mature.","src":["https://research.fs.usda.gov/silvics/sugar-maple","https://www.fs.usda.gov/database/feis/plants/tree/acesac/all.html"],"checked":"2026-10","sig":"26068a3d"},
  "storey": "canopy"
 },
 "whitespruce": {
  "name": {"text":"White spruce","src":["https://www.fs.usda.gov/database/feis/plants/tree/picgla/all.html"],"checked":"2026-10","sig":"e9414907"},
  "sci": {"text":"Picea glauca","src":["https://www.fs.usda.gov/database/feis/plants/tree/picgla/all.html"],"checked":"2026-10","sig":"19e104d0"},
  "range": {"text":"Across Canada and Alaska, and the far northern US","src":["https://www.fs.usda.gov/database/feis/plants/tree/picgla/all.html"],"checked":"2026-10","sig":"5fd0a251"},
  "stands": {"text":"Usually grows mixed with aspen, paper birch, balsam fir and black spruce, and makes pure stands mostly where fires are rare.","src":["https://research.fs.usda.gov/silvics/white-spruce","https://www.fs.usda.gov/database/feis/plants/tree/picgla/all.html"],"checked":"2026-10","sig":"b0953d74"},
  "clump": "mixed",
  "site": {"text":"Grows best on well-drained soils, from river floodplains to uplands, but not in standing water or over shallow permafrost.","src":["https://www.fs.usda.gov/database/feis/plants/tree/picgla/all.html","https://research.fs.usda.gov/silvics/white-spruce"],"checked":"2026-10","sig":"8af816f4"},
  "moisture": "mesic",
  "pioneer": false,
  "height": {"text":"A canopy tree, about 12 to 21 m tall in Alaska and around 25 m or more on good sites farther south.","src":["https://www.fs.usda.gov/database/feis/plants/tree/picgla/all.html","https://research.fs.usda.gov/silvics/white-spruce"],"checked":"2026-10","sig":"c4cec977"},
  "storey": "canopy"
 },
 "blackspruce": {
  "name": {"text":"Black spruce","src":["https://www.fs.usda.gov/database/feis/plants/tree/picmar/all.html"],"checked":"2026-10","sig":"6cca48bb"},
  "sci": {"text":"Picea mariana","src":["https://www.fs.usda.gov/database/feis/plants/tree/picmar/all.html"],"checked":"2026-10","sig":"588f59d0"},
  "range": {"text":"Canada, Alaska and the northern US","src":["https://www.fs.usda.gov/database/feis/plants/tree/picmar/all.html","https://mortonarb.org/plant-and-protect/trees-and-plants/black-spruce/"],"checked":"2026-10","sig":"e91b5159"},
  "stands": {"text":"Often grows in large, nearly pure stands, and in mossy bogs its lower branches can take root and grow into new trees.","src":["https://research.fs.usda.gov/silvics/black-spruce","https://www.ontario.ca/document/forest-resources-ontario-2021/common-trees"],"checked":"2026-10","sig":"178d92d2"},
  "clump": "clumped",
  "site": {"text":"Usually grows on cold, wet peat soils and bogs, and is often one of the first trees to come back after a fire.","src":["https://research.fs.usda.gov/silvics/black-spruce","https://www.ontario.ca/document/forest-resources-ontario-2021/common-trees"],"checked":"2026-10","sig":"13b2c851"},
  "moisture": "wet",
  "pioneer": true,
  "height": {"text":"A canopy tree, 12 to 20 m tall on good sites but only 8 to 12 m on poor bog sites.","src":["https://research.fs.usda.gov/silvics/black-spruce"],"checked":"2026-10","sig":"9edb8e6a"},
  "storey": "canopy"
 },
 "balsamfir": {
  "name": {"text":"Balsam fir","src":["https://www.fs.usda.gov/database/feis/plants/tree/abibal/all.html"],"checked":"2026-10","sig":"315127e9"},
  "sci": {"text":"Abies balsamea","src":["https://www.fs.usda.gov/database/feis/plants/tree/abibal/all.html","https://www.conifers.org/pi/Abies_balsamea.php"],"checked":"2026-10","sig":"ace9ec77"},
  "range": {"text":"Eastern and central Canada, northeastern US","src":["https://www.fs.usda.gov/database/feis/plants/tree/abibal/all.html","https://www.conifers.org/pi/Abies_balsamea.php"],"checked":"2026-10","sig":"0f7c077e"},
  "stands": {"text":"Usually grows mixed with spruce, birch and aspen, often in clumps in the shade beneath other trees.","src":["https://www.fs.usda.gov/database/feis/plants/tree/abibal/all.html","https://www.ontario.ca/document/forest-resources-ontario-2021/common-trees","https://research.fs.usda.gov/silvics/balsam-fir"],"checked":"2026-10","sig":"c2166f16"},
  "clump": "mixed",
  "site": {"text":"Most common on cool, moist sites, and it rarely comes back soon after a fire because it needs nearby surviving trees for seed.","src":["https://www.fs.usda.gov/database/feis/plants/tree/abibal/all.html","https://research.fs.usda.gov/silvics/balsam-fir"],"checked":"2026-10","sig":"b8cf4b14"},
  "moisture": "moist",
  "pioneer": false,
  "height": {"text":"A medium-sized tree, usually 12 to 18 m tall, that often grows up in the shade beneath pines, aspen and paper birch.","src":["https://research.fs.usda.gov/silvics/balsam-fir","https://www.fs.usda.gov/database/feis/plants/tree/abibal/all.html"],"checked":"2026-10","sig":"770f34c0"},
  "storey": "subcanopy"
 },
 "jackpine": {
  "name": {"text":"Jack pine","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinban/all.html"],"checked":"2026-10","sig":"4037886c"},
  "sci": {"text":"Pinus banksiana","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinban/all.html"],"checked":"2026-10","sig":"dc5b8bab"},
  "range": {"text":"Canada and the northern US","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinban/all.html"],"checked":"2026-10","sig":"ec5d2c4d"},
  "stands": {"text":"Grows in stands of same-age trees that sprang up together after a fire, often pure jack pine in Canada.","src":["https://research.fs.usda.gov/silvics/jack-pine","https://www.fs.usda.gov/database/feis/plants/tree/pinban/all.html"],"checked":"2026-10","sig":"5a536b33"},
  "clump": "clumped",
  "site": {"text":"Lives on dry, sandy or rocky ground, and its sealed cones open in the heat of a fire to reseed burned land.","src":["https://research.fs.usda.gov/silvics/jack-pine","https://www.fs.usda.gov/database/feis/plants/tree/pinban/all.html"],"checked":"2026-10","sig":"97175ddc"},
  "moisture": "dry",
  "pioneer": true,
  "height": {"text":"A canopy tree, usually 17 to 20 m tall.","src":["https://research.fs.usda.gov/silvics/jack-pine","https://www.fs.usda.gov/database/feis/plants/tree/pinban/all.html"],"checked":"2026-10","sig":"825616c8"},
  "storey": "canopy"
 },
 "paperbirch": {
  "name": {"text":"Paper birch","src":["https://www.fs.usda.gov/database/feis/plants/tree/betpap/all.html"],"checked":"2026-10","sig":"4b55ca82"},
  "sci": {"text":"Betula papyrifera","src":["https://www.fs.usda.gov/database/feis/plants/tree/betpap/all.html"],"checked":"2026-10","sig":"8357fef2"},
  "range": {"text":"Across Canada, Alaska and the northern US","src":["https://www.fs.usda.gov/database/feis/plants/tree/betpap/all.html"],"checked":"2026-10","sig":"559f1a5a"},
  "stands": {"text":"Often forms nearly pure stands on burned or logged land, and cut or burned trees sprout back as clumps of several stems.","src":["https://www.fs.usda.gov/database/feis/plants/tree/betpap/all.html","https://research.fs.usda.gov/silvics/paper-birch","https://www.ontario.ca/document/forest-resources-ontario-2021/common-trees"],"checked":"2026-10","sig":"86c0dd90"},
  "clump": "clumped",
  "site": {"text":"Prefers moist, well-drained soils and quickly moves into open land after wildfire or logging.","src":["https://www.fs.usda.gov/database/feis/plants/tree/betpap/all.html","https://research.fs.usda.gov/silvics/paper-birch"],"checked":"2026-10","sig":"2545fb3d"},
  "moisture": "moist",
  "pioneer": true,
  "height": {"text":"A canopy tree, about 21 to 24 m tall, though shorter in Alaska.","src":["https://www.fs.usda.gov/database/feis/plants/tree/betpap/all.html","https://research.fs.usda.gov/silvics/paper-birch"],"checked":"2026-10","sig":"534c6b7a"},
  "storey": "canopy"
 },
 "aspen": {
  "name": {"text":"Quaking aspen","src":["https://www.fs.usda.gov/database/feis/plants/tree/poptre/all.html"],"checked":"2026-10","sig":"72781261"},
  "sci": {"text":"Populus tremuloides","src":["https://www.fs.usda.gov/database/feis/plants/tree/poptre/all.html"],"checked":"2026-10","sig":"e751e0d2"},
  "range": {"text":"Canada, Alaska, the northern and western US, and Mexico","src":["https://www.fs.usda.gov/database/feis/plants/tree/poptre/all.html"],"checked":"2026-10","sig":"50dae491"},
  "stands": {"text":"Spreads by root sprouts into groves where many trunks share one root system and are all one clone.","src":["https://research.fs.usda.gov/silvics/quaking-aspen","https://www.fs.usda.gov/database/feis/plants/tree/poptre/all.html"],"checked":"2026-10","sig":"6d609279"},
  "clump": "clonal",
  "site": {"text":"Likes well-drained, loamy soils, and is often the first tree to take over burns and clear-cuts.","src":["https://research.fs.usda.gov/silvics/quaking-aspen","https://www.fs.usda.gov/database/feis/plants/tree/poptre/all.html","https://www.ontario.ca/document/forest-resources-ontario-2021/common-trees"],"checked":"2026-10","sig":"ad27b95b"},
  "moisture": "mesic",
  "pioneer": true,
  "height": {"text":"A small to medium canopy tree, about 15 to 25 m tall.","src":["https://research.fs.usda.gov/silvics/quaking-aspen","https://www.fs.usda.gov/database/feis/plants/tree/poptre/all.html"],"checked":"2026-10","sig":"4bc442bc"},
  "storey": "canopy"
 },
 "ponderosa": {
  "name": {"text":"Ponderosa pine","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinpons/all.html"],"checked":"2026-10","sig":"d9f34837"},
  "sci": {"text":"Pinus ponderosa","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinpons/all.html","https://www.conifers.org/pi/Pinus_ponderosa.php"],"checked":"2026-10","sig":"d66453cf","note":"The Gymnosperm Database splits the group (Rocky Mountain trees as Pinus scopulorum); FEIS keeps one species with varieties."},
  "range": {"text":"Western North America","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinpons/all.html"],"checked":"2026-10","sig":"d869cfe0"},
  "stands": {"text":"Grows in open forests where the pines stand in small groups of trees the same age, with grassy openings in between.","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinpons/all.html","https://www.usgs.gov/publications/arizonanew-mexico-mountains-ecoregion-chapter-10-status-and-trends-land-change-western"],"checked":"2026-10","sig":"bc574a8a"},
  "clump": "clumped",
  "site": {"text":"Sunny mountain plateaus and slopes, about 2,000–3,000 m up in Arizona and New Mexico, on ground too dry for most other timber trees.","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinpons/all.html"],"checked":"2026-10","sig":"29daa880"},
  "moisture": "dry",
  "pioneer": true,
  "height": {"text":"A tall canopy pine that can reach 50 m in the southern Rockies.","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinpons/all.html"],"checked":"2026-10","sig":"25cf0fd5"},
  "storey": "canopy"
 },
 "gambeloak": {
  "name": {"text":"Gambel oak","src":["https://www.fs.usda.gov/database/feis/plants/tree/quegam/all.html"],"checked":"2026-10","sig":"26be5ebf"},
  "sci": {"text":"Quercus gambelii","src":["https://www.fs.usda.gov/database/feis/plants/tree/quegam/all.html"],"checked":"2026-10","sig":"a2b5816e"},
  "range": {"text":"Southern Rocky Mountains and the Southwest","src":["https://www.fs.usda.gov/database/feis/plants/tree/quegam/all.html"],"checked":"2026-10","sig":"aa1da548"},
  "stands": {"text":"Grows as clones whose stems are linked underground by roots and lignotubers, making clumps and thickets under the pines.","src":["https://www.fs.usda.gov/database/feis/plants/tree/quegam/all.html"],"checked":"2026-10","sig":"181a0915"},
  "clump": "clonal",
  "site": {"text":"Grows from dry rocky spots, where it stays a short shrub, to wetter spots, where it grows into a tree; it sprouts back quickly after fire.","src":["https://www.fs.usda.gov/database/feis/plants/tree/quegam/all.html"],"checked":"2026-10","sig":"3da1b727"},
  "moisture": "any",
  "pioneer": true,
  "height": {"text":"A tall shrub layer under the ponderosa pines, usually 1–6 m tall, though some oaks become trees up to 23 m.","src":["https://fs.usda.gov/database/feis/pdfs/PNVGs/Southwest/R3PPGO.pdf","https://www.fs.usda.gov/database/feis/plants/tree/quegam/all.html"],"checked":"2026-10","sig":"496b7121"},
  "storey": "understory"
 },
 "douglasfir": {
  "name": {"text":"Douglas-fir","src":["https://www.conifers.org/pi/Pseudotsuga_menziesii.php"],"checked":"2026-10","sig":"e1cc2125"},
  "sci": {"text":"Pseudotsuga menziesii","src":["https://www.conifers.org/pi/Pseudotsuga_menziesii.php"],"checked":"2026-10","sig":"b1e7d3d8"},
  "range": {"text":"Western North America","src":["https://www.conifers.org/pi/Pseudotsuga_menziesii.php"],"checked":"2026-10","sig":"d869cfe0"},
  "stands": {"text":"Usually grows mixed with other trees, but after big fires it can come back as a pure stand of trees all the same age.","src":["https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/douglas-fir","https://www.fs.usda.gov/database/feis/plants/tree/psemeng/all.html","https://www.fs.usda.gov/database/feis/plants/tree/psemenm/all.html"],"checked":"2026-10","sig":"ca2fd320"},
  "clump": "mixed",
  "site": {"text":"In the Southwest it grows on moist, north-facing slopes and higher mixed-conifer forests; in the Pacific Northwest it fills low and middle elevation forests, and its wind-blown seeds take over open, burned ground.","src":["https://www.fs.usda.gov/database/feis/plants/tree/psemeng/all.html","https://www.fs.usda.gov/database/feis/plants/tree/psemenm/all.html","https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/douglas-fir"],"checked":"2026-10","sig":"4fad021f","note":"Mesic is a compromise between its drier Cascade slopes and moister interior sites."},
  "moisture": "mesic",
  "pioneer": true,
  "height": {"text":"A canopy giant: 30–42 m tall in the Rockies and Southwest, and often 76 m or more in Pacific Northwest old-growth forests.","src":["https://www.fs.usda.gov/database/feis/plants/tree/psemeng/all.html","https://www.fs.usda.gov/database/feis/plants/tree/psemenm/all.html"],"checked":"2026-10","sig":"94290d54"},
  "storey": "canopy"
 },
 "pinyon": {
  "name": {"text":"Colorado pinyon","src":["https://www.conifers.org/pi/Pinus_edulis.php","https://www.fs.usda.gov/database/feis/plants/tree/pinedu/all.html"],"checked":"2026-10","sig":"94f76817"},
  "sci": {"text":"Pinus edulis","src":["https://www.conifers.org/pi/Pinus_edulis.php","https://www.fs.usda.gov/database/feis/plants/tree/pinedu/all.html"],"checked":"2026-10","sig":"e3293a0b"},
  "range": {"text":"Colorado Plateau and the Southwest US","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinedu/all.html","https://www.conifers.org/pi/Pinus_edulis.php"],"checked":"2026-10","sig":"ef17f329"},
  "stands": {"text":"Grows with junipers in open pinyon-juniper woodlands that can stretch across huge areas.","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinedu/all.html"],"checked":"2026-10","sig":"3376f29a"},
  "clump": "mixed",
  "site": {"text":"Dry foothills, 1,400–2,700 m up, below the ponderosa pine forest; even a gentle fire can kill it.","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinedu/all.html"],"checked":"2026-10","sig":"3f0defd3"},
  "moisture": "dry",
  "pioneer": false,
  "height": {"text":"A low, bushy tree 8–17 m tall, much shorter than the ponderosa pines above it.","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinedu/all.html"],"checked":"2026-10","sig":"d8b24868"},
  "storey": "subcanopy"
 },
 "scotspine": {
  "name": {"text":"Scots pine","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/scots-pine/"],"checked":"2026-10","sig":"83f6a775"},
  "sci": {"text":"Pinus sylvestris","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/scots-pine/","https://www.treesandshrubsonline.org/articles/pinus/pinus-sylvestris/"],"checked":"2026-10","sig":"9793a844"},
  "range": {"text":"Europe and northern Asia; Scotland's native pine","src":["https://www.treesandshrubsonline.org/articles/pinus/pinus-sylvestris/","https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/scots-pine/"],"checked":"2026-10","sig":"22103ae4"},
  "stands": {"text":"Scots pine is the backbone of the forest: in some places it grows in pure pine stands, and in others it is mixed with birch.","src":["https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/scots-pine/scots-pine-facts/","https://treesforlife.org.uk/into-the-forest/habitats-and-ecology/habitats/native-pinewoods/","https://sac.jncc.gov.uk/habitat/H91C0/"],"checked":"2026-10","sig":"c4b58cbb"},
  "clump": "clumped",
  "site": {"text":"On acid, nutrient-poor Highland soils; its seedlings need bright light and bare, well-drained mineral soil, such as clearings, glen slopes and glacial mounds.","src":["https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/scots-pine/scots-pine-facts/","https://treesforlife.org.uk/into-the-forest/habitats-and-ecology/habitats/native-pinewoods/"],"checked":"2026-10","sig":"289f4dbb"},
  "moisture": "dry",
  "pioneer": true,
  "height": {"text":"The biggest and longest-lived tree in the Caledonian Forest; in Scotland the largest are about 20 m tall, and exceptional trees reach about 27 m.","src":["https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/scots-pine/scots-pine-facts/","https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/scots-pine/"],"checked":"2026-10","sig":"6b4f7293"},
  "storey": "canopy"
 },
 "silverbirch": {
  "name": {"text":"Silver birch","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/silver-birch/"],"checked":"2026-10","sig":"f1279839"},
  "sci": {"text":"Betula pendula","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/silver-birch/","https://www.euforgen.org/species/betula-pendula/"],"checked":"2026-10","sig":"3307e295"},
  "range": {"text":"Europe and western and central Asia","src":["https://www.euforgen.org/species/betula-pendula/"],"checked":"2026-10","sig":"44fe3fed"},
  "stands": {"text":"Birches are the most common trees in the pinewoods after pine, and they often form big stands of their own among the pines.","src":["https://treesforlife.org.uk/into-the-forest/habitats-and-ecology/habitats/native-pinewoods/","https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/birch/birch-facts/"],"checked":"2026-10","sig":"521b6ebc","note":"The sources count downy and silver birch together."},
  "clump": "clumped",
  "site": {"text":"Mostly on well-drained, drier soils, and as a fast-growing pioneer it quickly takes over open ground.","src":["https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/birch/birch-facts/"],"checked":"2026-10","sig":"bb10aaaa"},
  "moisture": "dry",
  "pioneer": true,
  "height": {"text":"A fast-growing tree that can reach up to 30 m tall.","src":["https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/birch/birch-facts/"],"checked":"2026-10","sig":"ff3e8af9"},
  "storey": "canopy"
 },
 "hazel": {
  "name": {"text":"Common hazel","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/hazel/"],"checked":"2026-10","sig":"c42285cf"},
  "sci": {"text":"Corylus avellana","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/hazel/"],"checked":"2026-10","sig":"b7686703"},
  "range": {"text":"Europe and western Asia","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/hazel/"],"checked":"2026-10","sig":"4709ea5d"},
  "stands": {"text":"In the pinewoods hazel shows up as single trees or small groups, although in parts of Argyll it forms woods of almost pure hazel.","src":["https://treesforlife.org.uk/into-the-forest/habitats-and-ecology/habitats/native-pinewoods/","https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/hazel/hazel-facts/"],"checked":"2026-10","sig":"5aeccbff"},
  "clump": "scattered",
  "site": {"text":"Rarely on the acid soils of the pinewoods; it prefers better ground such as drier south-facing slopes, often under oak, ash or birch.","src":["https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/hazel/hazel-facts/","https://treesforlife.org.uk/into-the-forest/habitats-and-ecology/habitats/native-pinewoods/","https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/hazel/"],"checked":"2026-10","sig":"776e3190"},
  "moisture": "mesic",
  "pioneer": false,
  "height": {"text":"A bushy understorey tree with many stems, usually no more than 6 m tall in Scotland.","src":["https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/hazel/hazel-facts/"],"checked":"2026-10","sig":"b0cb9a99"},
  "storey": "understory"
 },
 "pedoak": {
  "name": {"text":"Pedunculate oak","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/english-oak/","https://www.euforgen.org/species/quercus-robur/"],"checked":"2026-10","sig":"0529fd58"},
  "sci": {"text":"Quercus robur","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/english-oak/"],"checked":"2026-10","sig":"409741c5"},
  "range": {"text":"Europe to the Caucasus","src":["https://www.euforgen.org/species/quercus-robur/"],"checked":"2026-10","sig":"3b51cea1"},
  "stands": {"text":"Oak is not a major part of the Caledonian Forest; like the other broadleaves it grows as scattered trees or small groups among the pines.","src":["https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/oak/oak-facts/","https://treesforlife.org.uk/into-the-forest/habitats-and-ecology/habitats/native-pinewoods/"],"checked":"2026-10","sig":"a1bbc1b8"},
  "clump": "scattered",
  "site": {"text":"Likes heavy, moist, fairly rich soils, usually below about 300 m, and is commoner in southern and eastern Scotland than in the Highlands.","src":["https://www.forestresearch.gov.uk/tools-and-resources/tree-species-database/131559-pedunculate-oak-pok-2/","https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/oak/oak-facts/"],"checked":"2026-10","sig":"9b04a49a","note":"Sessile oak is the commoner oak in the Highlands."},
  "moisture": "moist",
  "pioneer": false,
  "height": {"text":"A large canopy tree, 20 to 40 m tall.","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/english-oak/","https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/oak/oak-facts/"],"checked":"2026-10","sig":"5e6d59fd"},
  "storey": "canopy"
 },
 "eubeech": {
  "name": {"text":"European beech","src":["https://www.euforgen.org/species/fagus-sylvatica/","https://www.treesandshrubsonline.org/articles/fagus/fagus-sylvatica/"],"checked":"2026-10","sig":"65c87876"},
  "sci": {"text":"Fagus sylvatica","src":["https://www.treesandshrubsonline.org/articles/fagus/fagus-sylvatica/"],"checked":"2026-10","sig":"e2a33e8c"},
  "range": {"text":"Western and central Europe","src":["https://www.treesandshrubsonline.org/articles/fagus/fagus-sylvatica/","https://www.euforgen.org/species/fagus-sylvatica/"],"checked":"2026-10","sig":"3060d088"},
  "stands": {"text":"Beech is not a native tree of Scotland's pinewoods; people planted it in Scotland for decoration and shelter, so you see it in woods, on estates and along field edges.","src":["https://stories.rbge.org.uk/archives/5831","https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/common-beech/"],"checked":"2026-10","sig":"da3ecc93"},
  "clump": "scattered",
  "site": {"text":"Grows best on drier, free-draining soils such as chalk, limestone and light loams; in the UK it is only truly native to south-east England and south-east Wales.","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/common-beech/","https://www.forestryandland.gov.scot/learn/trees/beech"],"checked":"2026-10","sig":"a586748c"},
  "moisture": "dry",
  "pioneer": false,
  "height": {"text":"A huge tree with a domed crown that can grow more than 40 m tall, and its deep shade lets only a few shade-loving plants grow beneath it.","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/common-beech/"],"checked":"2026-10","sig":"4968540e"},
  "storey": "canopy"
 },
 "rowan": {
  "name": {"text":"Rowan","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/rowan/"],"checked":"2026-10","sig":"e0ebe4ec"},
  "sci": {"text":"Sorbus aucuparia","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/rowan/","https://www.euforgen.org/species/sorbus-aucuparia/"],"checked":"2026-10","sig":"fcc12366"},
  "range": {"text":"Europe and northern Asia","src":["https://en.wikipedia.org/wiki/Sorbus_aucuparia","https://www.euforgen.org/species/sorbus-aucuparia/"],"checked":"2026-10","sig":"57423290"},
  "stands": {"text":"Rowan pops up as single trees or small groups, often under pines where birds perched and dropped its seeds.","src":["https://treesforlife.org.uk/into-the-forest/habitats-and-ecology/habitats/native-pinewoods/","https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/rowan/rowan-facts/"],"checked":"2026-10","sig":"9c393afb"},
  "clump": "scattered",
  "site": {"text":"A tough pioneer that grows higher up the mountains than any other Scottish tree (almost 1,000 m) and copes with poor soils; today it often clings to cliffs, steep streamsides and boulders out of reach of deer.","src":["https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/rowan/rowan-facts/","https://stories.rbge.org.uk/archives/5895"],"checked":"2026-10","sig":"f033b512"},
  "moisture": "any",
  "pioneer": true,
  "height": {"text":"A fairly small tree, usually 10 to 15 m tall, and only a low shrub in harsh places.","src":["https://treesforlife.org.uk/into-the-forest/trees-plants-animals/trees/rowan/rowan-facts/","https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/rowan/","https://stories.rbge.org.uk/archives/5895"],"checked":"2026-10","sig":"94d6ac14"},
  "storey": "subcanopy"
 },
 "westernhemlock": {
  "name": {"text":"Western hemlock","src":["https://www.conifers.org/pi/Tsuga_heterophylla.php"],"checked":"2026-10","sig":"cb389e2e"},
  "sci": {"text":"Tsuga heterophylla","src":["https://www.conifers.org/pi/Tsuga_heterophylla.php"],"checked":"2026-10","sig":"e1b30860"},
  "range": {"text":"Pacific coast from Alaska to northern California, and inland to the northern Rockies","src":["https://www.conifers.org/pi/Tsuga_heterophylla.php"],"checked":"2026-10","sig":"b3e9e45c"},
  "stands": {"text":"Grows mixed with Douglas-fir and redcedar, or in pure stands after windstorms or fires, and its seedlings love sprouting on rotting logs.","src":["https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/western-hemlock","https://www.fs.usda.gov/database/feis/plants/tree/tsuhet/all.html"],"checked":"2026-10","sig":"777a3cd1"},
  "clump": "mixed",
  "site": {"text":"Mild, foggy, rainy low to mid-elevation forests, where it grows well in deep shade.","src":["https://www.fs.usda.gov/database/feis/plants/tree/tsuhet/all.html","https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/western-hemlock"],"checked":"2026-10","sig":"1da7a427"},
  "moisture": "moist",
  "pioneer": false,
  "height": {"text":"A canopy tree usually 30–46 m tall, sometimes 49–61 m.","src":["https://www.fs.usda.gov/database/feis/plants/tree/tsuhet/all.html"],"checked":"2026-10","sig":"caf87026"},
  "storey": "canopy"
 },
 "westernredcedar": {
  "name": {"text":"Western redcedar","src":["https://www.conifers.org/cu/Thuja_plicata.php"],"checked":"2026-10","sig":"ac308f4a"},
  "sci": {"text":"Thuja plicata","src":["https://www.conifers.org/cu/Thuja_plicata.php"],"checked":"2026-10","sig":"b644d92b"},
  "range": {"text":"Pacific Northwest and the northern Rockies","src":["https://www.conifers.org/cu/Thuja_plicata.php"],"checked":"2026-10","sig":"40272bee"},
  "stands": {"text":"Usually grows mixed with hemlock and Douglas-fir, and is only sometimes found in pure stands.","src":["https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/western-redcedar","https://www.fs.usda.gov/database/feis/plants/tree/thupli/all.html"],"checked":"2026-10","sig":"25b39359"},
  "clump": "mixed",
  "site": {"text":"Moist lowlands, seepage slopes and wet stream bottoms; it handles flooding and grows well in shade.","src":["https://www.fs.usda.gov/database/feis/plants/tree/thupli/all.html","https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/western-redcedar"],"checked":"2026-10","sig":"6972b546"},
  "moisture": "moist",
  "pioneer": false,
  "height": {"text":"A canopy tree usually 21–30 m tall; old giants can top 60 m.","src":["https://www.fs.usda.gov/database/feis/plants/tree/thupli/all.html","https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/western-redcedar"],"checked":"2026-10","sig":"dd8236b3"},
  "storey": "canopy"
 },
 "sitkaspruce": {
  "name": {"text":"Sitka spruce","src":["https://www.conifers.org/pi/Picea_sitchensis.php"],"checked":"2026-10","sig":"c981bc85"},
  "sci": {"text":"Picea sitchensis","src":["https://www.conifers.org/pi/Picea_sitchensis.php"],"checked":"2026-10","sig":"2bd9973a"},
  "range": {"text":"Pacific coast from Alaska to northern California","src":["https://www.conifers.org/pi/Picea_sitchensis.php"],"checked":"2026-10","sig":"6401f338"},
  "stands": {"text":"Grows in pure or mixed stands, most often with western hemlock, along a narrow strip of the Pacific coast.","src":["https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/sitka-spruce","https://www.fs.usda.gov/database/feis/plants/tree/picsit/all.html"],"checked":"2026-10","sig":"7b478ed4"},
  "clump": "mixed",
  "site": {"text":"Foggy coasts, floodplains and beaches, where it can handle salty ocean spray and is one of the first trees on new ground like landslides and sand dunes.","src":["https://www.fs.usda.gov/database/feis/plants/tree/picsit/all.html","https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/sitka-spruce"],"checked":"2026-10","sig":"2fbc44a5"},
  "moisture": "moist",
  "pioneer": true,
  "height": {"text":"The world's largest spruce: a canopy tree over 65 m tall on good sites, and up to 100 m in BC's Carmanah Valley.","src":["https://www.fs.usda.gov/database/feis/plants/tree/picsit/all.html","https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/sitka-spruce"],"checked":"2026-10","sig":"fd3cded7"},
  "storey": "canopy"
 },
 "bigleafmaple": {
  "name": {"text":"Bigleaf maple","src":["https://www.fs.usda.gov/database/feis/plants/tree/acemac/all.html"],"checked":"2026-10","sig":"95f538ba"},
  "sci": {"text":"Acer macrophyllum","src":["https://www.fs.usda.gov/database/feis/plants/tree/acemac/all.html"],"checked":"2026-10","sig":"b684b3b6"},
  "range": {"text":"Pacific coast from British Columbia to California","src":["https://www.fs.usda.gov/database/feis/plants/tree/acemac/all.html"],"checked":"2026-10","sig":"b3a5147d"},
  "stands": {"text":"Grows here and there among the conifers or in small groves, often as a clump of 3–5 trunks sprouting from one stump.","src":["https://www.fs.usda.gov/database/feis/plants/tree/acemac/all.html","https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/bigleaf-maple"],"checked":"2026-10","sig":"81698673"},
  "clump": "scattered",
  "site": {"text":"Moist woods, streambanks and floodplains below about 900 m; it sprouts back after fire or cutting and moves into clearings.","src":["https://www.fs.usda.gov/database/feis/plants/tree/acemac/all.html","https://extension.wsu.edu/maplesyrup/bigleafmaple/","https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/bigleaf-maple"],"checked":"2026-10","sig":"d668d002"},
  "moisture": "moist",
  "pioneer": true,
  "height": {"text":"A broadleaf tree about 15–30 m tall that often grows under the tall conifers and fills gaps in the canopy.","src":["https://extension.wsu.edu/maplesyrup/bigleafmaple/","https://www.fs.usda.gov/database/feis/plants/tree/acemac/all.html","https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/bigleaf-maple"],"checked":"2026-10","sig":"45019227"},
  "storey": "subcanopy"
 },
 "redalder": {
  "name": {"text":"Red alder","src":["https://www.fs.usda.gov/database/feis/plants/tree/alnrub/all.html"],"checked":"2026-10","sig":"7241ba5e"},
  "sci": {"text":"Alnus rubra","src":["https://www.fs.usda.gov/database/feis/plants/tree/alnrub/all.html"],"checked":"2026-10","sig":"a18ccbc2"},
  "range": {"text":"Pacific coast from Alaska to California","src":["https://www.fs.usda.gov/database/feis/plants/tree/alnrub/all.html"],"checked":"2026-10","sig":"bfa8af02"},
  "stands": {"text":"Moves fast into open ground and makes thick stands of trees all the same age, often with no other kind of tree.","src":["https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/red-alder","https://www.fs.usda.gov/database/feis/plants/tree/alnrub/all.html"],"checked":"2026-10","sig":"503ea9b5"},
  "clump": "clumped",
  "site": {"text":"Streamsides, moist bottomlands and freshly opened ground after fire, logging, windstorms or road building; its roots add nitrogen to the soil.","src":["https://www.fs.usda.gov/database/feis/plants/tree/alnrub/all.html","https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/silviculture/stocking-standards/tree-species-compendium-index/red-alder"],"checked":"2026-10","sig":"0fb8e70f"},
  "moisture": "moist",
  "pioneer": true,
  "height": {"text":"A fast-growing, short-lived tree 24–30 m tall; after about 25 years the conifers catch up and grow over it.","src":["https://www.fs.usda.gov/database/feis/plants/tree/alnrub/all.html"],"checked":"2026-10","sig":"d720c902"},
  "storey": "canopy"
 },
 "beakedhazel": {
  "name": {"text":"Beaked hazel","src":["https://www.fs.usda.gov/database/feis/plants/shrub/corcor/all.html"],"checked":"2026-10","sig":"4c8f07d2"},
  "sci": {"text":"Corylus cornuta","src":["https://www.fs.usda.gov/database/feis/plants/shrub/corcor/all.html"],"checked":"2026-10","sig":"646b3f55"},
  "range": {"text":"Across much of North America; the western variety is called California hazelnut","src":["https://www.fs.usda.gov/database/feis/plants/shrub/corcor/all.html"],"checked":"2026-10","sig":"7bb6f1ff"},
  "stands": {"text":"In Pacific Northwest forests it grows mostly as single shrubs here and there, sometimes in thick clumps.","src":["https://www.fs.usda.gov/database/feis/plants/shrub/corcor/all.html"],"checked":"2026-10","sig":"220258f8","note":"West of the Cascades this is the California subspecies of beaked hazel."},
  "clump": "scattered",
  "site": {"text":"Low, warm, well-drained sites with lightly shaded forest; there is more of it after logging or fire, and less as the forest gets older.","src":["https://www.fs.usda.gov/database/feis/plants/shrub/corcor/all.html"],"checked":"2026-10","sig":"5744d8ce"},
  "moisture": "mesic",
  "pioneer": true,
  "height": {"text":"An understory shrub with several trunks, 4–6 m tall; the western form can grow into a small tree up to 15 m.","src":["https://www.fs.usda.gov/database/feis/plants/shrub/corcor/all.html"],"checked":"2026-10","sig":"a14055e8"},
  "storey": "understory"
 },
 "buna": {
  "name": {"text":"Siebold's beech","src":["https://whc.unesco.org/en/list/663/","https://www.env.go.jp/nature/isan/worldheritage/en/shirakami/uiversal/index.html"],"checked":"2026-10","sig":"1bc2fe0f","note":"Also called Japanese beech; Japanese name buna."},
  "sci": {"text":"Fagus crenata","src":["https://www.worldfloraonline.org/taxon/wfo-0000966414","https://whc.unesco.org/en/list/663/"],"checked":"2026-10","sig":"b0f05b44"},
  "wiki": "Fagus_crenata",
  "range": {"text":"Southwest Hokkaido, Honshu, Shikoku and Kyushu, Japan","src":["https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/buna.html"],"checked":"2026-10","sig":"1cd977c6"},
  "stands": {"text":"Beech is the boss here: in snowy Japan Sea-side forests it makes up 80 to 90% of the treetops, and it covers whole mountain ranges such as the Shirakami Mountains.","src":["https://www.env.go.jp/content/900491077.pdf","https://www.env.go.jp/nature/isan/worldheritage/shirakami/uiversal/index.html","https://tohoku.repo.nii.ac.jp/record/35175/files/10.1111-j.1654-1103.2004.tb02275.x.pdf"],"checked":"2026-10","sig":"37bee15a"},
  "clump": "clumped",
  "site": {"text":"On fertile ground in the mountains; it is very shade-tolerant and grows mixed with Japanese oak, painted maple and other broadleaves.","src":["https://www.hro.or.jp/forest/research/fpri/koho/default/doumoku-index/buna.html","https://www.hro.or.jp/forest/research/fri/database/zukanf/kitanoki/b37buna.html"],"checked":"2026-10","sig":"de7510a0"},
  "moisture": "mesic",
  "pioneer": false,
  "height": {"text":"A canopy tree 20 to 30 m tall with a big crown and smooth grey bark.","src":["https://www.hro.or.jp/forest/research/fri/database/zukanf/kitanoki/b37buna.html","https://www.hro.or.jp/forest/research/fpri/koho/default/doumoku-index/buna.html"],"checked":"2026-10","sig":"cd6c7e30"},
  "storey": "canopy"
 },
 "mizunara": {
  "name": {"text":"Japanese oak","src":["https://en.wikipedia.org/wiki/Quercus_crispula","https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/mizunara.html"],"checked":"2026-10","sig":"8bfd6c84","note":"Also called Mongolian oak; Japanese name mizunara (water oak), famous for whisky casks."},
  "sci": {"text":"Quercus mongolica subsp. crispula","src":["https://www.worldfloraonline.org/taxon/wfo-0000290363","https://en.wikipedia.org/wiki/Quercus_crispula"],"checked":"2026-10","sig":"46901c19","note":"Sources disagree. WFO (WCSP data, Dec 2025) treats Quercus crispula Blume as a synonym of Q. mongolica subsp. crispula; GBIF and most Japanese sources (Hirosaki Univ., Forestry Agency gallery) still use Quercus crispula, and the Tohoku Forest Office page says Quercus mongolica. 'Quercus crispula' is widely used and acceptable if a simpler label is wanted."},
  "wiki": "Quercus_crispula",
  "range": {"text":"Japan, Sakhalin, Korea and northeast China","src":["https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/mizunara.html","https://en.wikipedia.org/wiki/Quercus_crispula"],"checked":"2026-10","sig":"1a021b78"},
  "stands": {"text":"Japanese oak is common in the beech zone, where it grows mixed in among the beeches as a smaller share of the canopy trees.","src":["https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/mizunara.html","https://tohoku.repo.nii.ac.jp/record/35175/files/10.1111-j.1654-1103.2004.tb02275.x.pdf","https://www.hro.or.jp/forest/research/fpri/koho/default/doumoku-index/buna.html"],"checked":"2026-10","sig":"86fa9718"},
  "clump": "mixed",
  "site": {"text":"Prefers soils that are neither too dry nor too wet and grows best low and mid-way down gentle slopes; it sprouts strongly from stumps and regrows after fire or logging.","src":["https://www.hro.or.jp/upload/49865/1090104.pdf","https://www.hro.or.jp/upload/3643/kenpo20-5.pdf"],"checked":"2026-10","sig":"a14fa427"},
  "moisture": "mesic",
  "pioneer": true,
  "height": {"text":"A canopy tree up to about 25 m tall, and squirrels, mice and jays spread its acorns by burying them.","src":["https://www.hro.or.jp/upload/49865/1090104.pdf","https://tohoku.repo.nii.ac.jp/record/35175/files/10.1111-j.1654-1103.2004.tb02275.x.pdf"],"checked":"2026-10","sig":"72ba591e"},
  "storey": "canopy"
 },
 "jwalnut": {
  "name": {"text":"Japanese walnut","src":["https://en.wikipedia.org/wiki/Juglans_ailantifolia"],"checked":"2026-10","sig":"c576befb","note":"Japanese name oni-gurumi ('ogre walnut')."},
  "sci": {"text":"Juglans mandshurica var. sachalinensis","src":["https://www.worldfloraonline.org/taxon/wfo-0001067474","https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%8B%E3%82%B0%E3%83%AB%E3%83%9F"],"checked":"2026-10","sig":"5fe67f5d","note":"Sources disagree. WFO (Tropicos data) and Japanese Wikipedia treat it as Juglans mandshurica var. sachalinensis; GBIF, English Wikipedia and the Tohoku Forest Office page use Juglans ailantifolia (often spelled ailanthifolia). Juglans ailantifolia is the more familiar label."},
  "wiki": "Juglans_ailantifolia",
  "range": {"text":"Japan and Sakhalin","src":["https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/onigurumi.html","https://en.wikipedia.org/wiki/Juglans_ailantifolia"],"checked":"2026-10","sig":"17d97a28"},
  "stands": {"text":"Japanese walnut grows along mountain streams and can form walnut groves there, and squirrels help spread it by burying its nuts.","src":["https://taffrc.pref.toyama.jp/nsgc/shinrin/wp-content/uploads/sites/9/2024/09/No.23%EF%BC%882021.12.28%EF%BC%89%E7%9B%B8%E6%B5%A6%E8%8B%B1%E6%98%A5%E3%80%80%E6%A4%8D%E6%9E%97%E3%81%AB%E3%82%88%E3%82%8B%E6%B2%B3%E7%95%94%E6%9E%97%E3%81%AE%E9%80%A0%E6%88%90-1.pdf","https://www.hro.or.jp/upload/3430/kahanrin.pdf","https://www.hro.or.jp/upload/49834/1090515.pdf"],"checked":"2026-10","sig":"e681aed7"},
  "clump": "clumped",
  "site": {"text":"Moist ground beside mountain streams and rivers, from lowlands up into the mountains.","src":["https://www.hro.or.jp/upload/49834/1090515.pdf","https://www.hro.or.jp/upload/3430/kahanrin.pdf","https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/riben01.html"],"checked":"2026-10","sig":"50d0a7de"},
  "moisture": "moist",
  "pioneer": false,
  "height": {"text":"A canopy tree up to about 30 m tall that keeps other plants from growing under its crown.","src":["https://www.hro.or.jp/upload/49834/1090515.pdf"],"checked":"2026-10","sig":"a83420d3"},
  "storey": "canopy"
 },
 "tochi": {
  "name": {"text":"Japanese horse chestnut","src":["https://en.wikipedia.org/wiki/Aesculus_turbinata"],"checked":"2026-10","sig":"9a8e320a","note":"Japanese name tochinoki or tochi."},
  "sci": {"text":"Aesculus turbinata","src":["https://www.worldfloraonline.org/taxon/wfo-0000522367"],"checked":"2026-10","sig":"a31fc0d8"},
  "wiki": "Aesculus_turbinata",
  "range": {"text":"Southwest Hokkaido, Honshu, Shikoku and Kyushu, Japan","src":["https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/totinoki.html"],"checked":"2026-10","sig":"1cd977c6"},
  "stands": {"text":"Horse chestnut is one of the main trees of the streamside valley forests, growing together with Japanese wingnut and katsura.","src":["https://online.bunka.go.jp/heritages/detail/138224","https://taffrc.pref.toyama.jp/nsgc/shinrin/wp-content/uploads/sites/9/2024/09/No.23%EF%BC%882021.12.28%EF%BC%89%E7%9B%B8%E6%B5%A6%E8%8B%B1%E6%98%A5%E3%80%80%E6%A4%8D%E6%9E%97%E3%81%AB%E3%82%88%E3%82%8B%E6%B2%B3%E7%95%94%E6%9E%97%E3%81%AE%E9%80%A0%E6%88%90-1.pdf"],"checked":"2026-10","sig":"4c828887"},
  "clump": "mixed",
  "site": {"text":"Valley bottoms and streamsides in cool mountain forests, on rich, fertile soil.","src":["https://www.hro.or.jp/upload/49766/1091204.pdf","https://online.bunka.go.jp/heritages/detail/138224","https://taffrc.pref.toyama.jp/nsgc/shinrin/wp-content/uploads/sites/9/2024/09/No.23%EF%BC%882021.12.28%EF%BC%89%E7%9B%B8%E6%B5%A6%E8%8B%B1%E6%98%A5%E3%80%80%E6%A4%8D%E6%9E%97%E3%81%AB%E3%82%88%E3%82%8B%E6%B2%B3%E7%95%94%E6%9E%97%E3%81%AE%E9%80%A0%E6%88%90-1.pdf"],"checked":"2026-10","sig":"38966242"},
  "moisture": "moist",
  "pioneer": false,
  "height": {"text":"A big canopy tree up to 30 m tall and 2 m thick, with a wide, rounded crown.","src":["https://www.hro.or.jp/upload/49766/1091204.pdf"],"checked":"2026-10","sig":"bb07cfb1"},
  "storey": "canopy"
 },
 "itaya": {
  "name": {"text":"Painted maple","src":["https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/itaya.html","https://en.wikipedia.org/wiki/Acer_pictum"],"checked":"2026-10","sig":"88062488","note":"Japanese name itaya-kaede. English names vary: painted maple, mono maple, yellow-paint maple."},
  "sci": {"text":"Acer pictum","src":["https://www.worldfloraonline.org/taxon/wfo-0000514846","https://en.wikipedia.org/wiki/Acer_pictum"],"checked":"2026-10","sig":"b3419f0b","note":"Acer mono (still used by the Tohoku Forest Office page) is a synonym."},
  "wiki": "Acer_pictum",
  "range": {"text":"Japan, Korea, China and the Russian Far East","src":["https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/itaya.html","https://en.wikipedia.org/wiki/Acer_pictum"],"checked":"2026-10","sig":"0f2a1e3a"},
  "stands": {"text":"Painted maple is a very ordinary tree of mountain forests and grows mixed in with the beeches.","src":["https://www.hro.or.jp/upload/49842/1090405.pdf","https://www.hro.or.jp/forest/research/fpri/koho/default/doumoku-index/buna.html"],"checked":"2026-10","sig":"05cf378d"},
  "clump": "mixed",
  "site": {"text":"Found all over temperate mountains and not fussy about soil.","src":["https://www.hro.or.jp/upload/49842/1090405.pdf"],"checked":"2026-10","sig":"cf804491"},
  "moisture": "any",
  "pioneer": false,
  "height": {"text":"A tall deciduous tree that can reach about 25 m.","src":["https://www.hro.or.jp/upload/49842/1090405.pdf"],"checked":"2026-10","sig":"2c2310e2","note":"Heights are for its Hokkaido variety."},
  "storey": "canopy"
 },
 "hoonoki": {
  "name": {"text":"Japanese bigleaf magnolia","src":["https://www.rhs.org.uk/plants/23120/wd/details","https://en.wikipedia.org/wiki/Magnolia_obovata"],"checked":"2026-10","sig":"cb21ffdc","note":"Japanese name hoonoki; about 9% of tall stems in the Forestry Agency's Shirakami core-zone plot (shirakamimonitarinngu-13.pdf)."},
  "sci": {"text":"Magnolia obovata","src":["https://www.rhs.org.uk/plants/23120/wd/details","https://en.wikipedia.org/wiki/Magnolia_obovata"],"checked":"2026-10","sig":"458d7036","note":"The Tohoku Forest Office page still uses the synonym Magnolia hypoleuca."},
  "wiki": "Magnolia_obovata",
  "range": {"text":"Japan and the southern Kuril Islands","src":["https://www.rhs.org.uk/plants/23120/wd/details","https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/hoonoki.html"],"checked":"2026-10","sig":"7420ebd7"},
  "stands": {"text":"Bigleaf magnolia often grows as a little clump of stems you can easily spot, but it is never one of the main trees of the forest.","src":["https://www.hro.or.jp/upload/49779/1091003.pdf","https://tohoku.repo.nii.ac.jp/record/35175/files/10.1111-j.1654-1103.2004.tb02275.x.pdf"],"checked":"2026-10","sig":"516b0c8a"},
  "clump": "scattered",
  "site": {"text":"On fairly fertile mountain ground; it acts as a pioneer, and its seedlings spring up in sunny gaps where old trees have fallen.","src":["https://www.hro.or.jp/upload/49779/1091003.pdf","https://bioone.org/journals/journal-of-vegetation-science/volume-13/issue-4/1100-9233(2002)013[0565:TEOSAC]2.0.CO;2/The-effects-of-Sasa-and-canopy-gap-formation-on-tree/10.1658/1100-9233(2002)013[0565:TEOSAC]2.0.CO;2.full"],"checked":"2026-10","sig":"9cfe2fba"},
  "moisture": "mesic",
  "pioneer": true,
  "height": {"text":"A fairly straight tree more than 20 m tall that reaches the canopy, with giant leaves 20 to 40 cm long.","src":["https://www.hro.or.jp/upload/49779/1091003.pdf","https://tohoku.repo.nii.ac.jp/record/35175/files/10.1111-j.1654-1103.2004.tb02275.x.pdf"],"checked":"2026-10","sig":"9c7c7cfb"},
  "storey": "canopy"
 },
 "paranapine": {
  "name": {"text":"Paraná pine","src":["https://en.wikipedia.org/wiki/Araucaria_angustifolia","https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/304455/1/CT0060.pdf"],"checked":"2026-10","sig":"dedea4ea","note":"Portuguese: pinheiro-do-paraná, araucária; seed = pinhão. Also called Brazilian pine or candelabra tree. Embrapa notes the trade name 'parana pine'."},
  "sci": {"text":"Araucaria angustifolia","src":["https://api.gbif.org/v1/species/114810361","https://api.gbif.org/v1/species/114810361/speciesProfiles"],"checked":"2026-10","sig":"9cc32863","note":"Accepted in Flora e Funga do Brasil (via its GBIF checklist, FB33971), which lists Floresta Ombrófila Mista among its vegetation types. The floradobrasil.jbrj.gov.br site itself blocked automated fetches with a bot challenge."},
  "range": {"text":"Uplands of southern and southeastern Brazil, Misiones in Argentina, and eastern Paraguay","src":["https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/304455/1/CT0060.pdf"],"checked":"2026-10","sig":"bcaa3229"},
  "stands": {"text":"Paraná pines form the top layer of the araucaria forest, with broadleaf trees like erva-mate, imbuia and pinheiro-bravo just below their crowns, and out on grasslands they start new patches of forest called capões.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140113/1/Especies-Arboreas-Brasileiras-vol-1-Pinheiro-do-Parana.pdf","https://revistas.unicentro.br/index.php/ambiencia/article/download/1357/1932","https://pfb.sede.embrapa.br/pfb/article/download/104/140/834"],"checked":"2026-10","sig":"bab16bfe"},
  "clump": "clumped",
  "site": {"text":"It grows only in araucaria forest on the cool southern Brazil uplands, mostly at 500–1,800 m, where rain falls all year, and it does best on deep, well-drained soils that still hold water well.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140113/1/Especies-Arboreas-Brasileiras-vol-1-Pinheiro-do-Parana.pdf","https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/312669/1/PinheiroParana2006.pdf"],"checked":"2026-10","sig":"70aa7191"},
  "moisture": "mesic",
  "pioneer": true,
  "height": {"text":"An emergent conifer 10–35 m tall (exceptionally 50 m) whose crowns stick out above the broadleaf trees and make up the forest's top layer.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140113/1/Especies-Arboreas-Brasileiras-vol-1-Pinheiro-do-Parana.pdf","https://revistas.unicentro.br/index.php/ambiencia/article/download/1357/1932"],"checked":"2026-10","sig":"031b9fac"},
  "storey": "canopy"
 },
 "yerbamate": {
  "name": {"text":"Yerba mate","src":["https://en.wikipedia.org/wiki/Yerba_mate","https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1139739/1/Especies-Arboreas-Brasileiras-vol-1-Erva-Mate.pdf"],"checked":"2026-10","sig":"24bef89e","note":"Portuguese: erva-mate, congonha. Embrapa: characteristic of montane Floresta Ombrófila Mista, always in mature associations with the Paraná pine."},
  "sci": {"text":"Ilex paraguariensis","src":["https://api.gbif.org/v1/species/114687755","https://api.gbif.org/v1/species/114687755/speciesProfiles"],"checked":"2026-10","sig":"85a485c0"},
  "wiki": "Yerba_mate",
  "range": {"text":"Southern and southeastern Brazil, northeastern Argentina, eastern Paraguay and northern Uruguay","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1139739/1/Especies-Arboreas-Brasileiras-vol-1-Erva-Mate.pdf"],"checked":"2026-10","sig":"826ebd4a"},
  "stands": {"text":"Erva-mate grows mixed in with other broadleaf trees in the shady layer just under the Paraná pines, especially in older pine forest, and it is often the most numerous tree there.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1139739/1/Especies-Arboreas-Brasileiras-vol-1-Erva-Mate.pdf","https://pfb.sede.embrapa.br/pfb/article/download/104/140/834","https://revistas.unicentro.br/index.php/ambiencia/article/download/1357/1932"],"checked":"2026-10","sig":"b0930719"},
  "clump": "mixed",
  "site": {"text":"A shade-tolerant tree of mature araucaria forest on poor, acidic, medium-deep to deep soils, which avoids waterlogged, sandy and very shallow soils.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1139739/1/Especies-Arboreas-Brasileiras-vol-1-Erva-Mate.pdf","https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/312663/1/ErvaMate2006.pdf"],"checked":"2026-10","sig":"dd56fab3"},
  "moisture": "mesic",
  "pioneer": false,
  "height": {"text":"A tree of the second layer, below the Paraná pine crowns; in the wild forest it can reach 30 m, but cultivated plants are kept at 3–5 m.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1139739/1/Especies-Arboreas-Brasileiras-vol-1-Erva-Mate.pdf","https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140113/1/Especies-Arboreas-Brasileiras-vol-1-Pinheiro-do-Parana.pdf"],"checked":"2026-10","sig":"ee0d58e0"},
  "storey": "subcanopy"
 },
 "imbuia": {
  "name": {"text":"Imbuia","src":["https://en.wikipedia.org/wiki/Ocotea_porosa","https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140081/1/Especies-Arboreas-Brasileiras-vol-1-Imbuia.pdf"],"checked":"2026-10","sig":"7545ea82","note":"Portuguese: imbuia, embuia, canela-imbuia. English Wikipedia also gives 'Brazilian walnut'. Embrapa: characteristic of montane Floresta Ombrófila Mista, forming the second storey and sometimes dense stands (imbuiais). Probably the longest-lived tree of the araucaria forest."},
  "sci": {"text":"Ocotea porosa","src":["https://api.gbif.org/v1/species/114734063","https://api.gbif.org/v1/species/114734063/speciesProfiles"],"checked":"2026-10","sig":"fab06159","note":"Flora e Funga gives the authority as (Nees & Mart.) Barroso. GBIF's backbone and Embrapa give other authorities, but the binomial is the same."},
  "range": {"text":"Southern and southeastern Brazil uplands","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140081/1/Especies-Arboreas-Brasileiras-vol-1-Imbuia.pdf"],"checked":"2026-10","sig":"86f28f55"},
  "stands": {"text":"Imbuia grows in the layer just under the Paraná pines and sometimes forms dense groves called imbuiais; it may be the longest-lived tree in the araucaria forest, often over 500 years old.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140081/1/Especies-Arboreas-Brasileiras-vol-1-Imbuia.pdf","https://pfb.sede.embrapa.br/pfb/article/download/104/140/834","https://www.redalyc.org/pdf/449/44922150035.pdf"],"checked":"2026-10","sig":"9cf544ea","note":"It only sometimes forms groves; elsewhere it grows mixed."},
  "clump": "clumped",
  "site": {"text":"A shade-tolerant, late-successional tree of montane araucaria forest in rainy climates with no dry season; it grows best on fertile, deep, well-drained clay soils.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140081/1/Especies-Arboreas-Brasileiras-vol-1-Imbuia.pdf"],"checked":"2026-10","sig":"aff08edf"},
  "moisture": "mesic",
  "pioneer": false,
  "height": {"text":"A big tree of the second canopy layer, usually 10–20 m tall and sometimes up to 30 m.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140081/1/Especies-Arboreas-Brasileiras-vol-1-Imbuia.pdf"],"checked":"2026-10","sig":"85b31f2f"},
  "storey": "subcanopy"
 },
 "pinheirobravo": {
  "name": {"text":"Pinheiro-bravo","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140112/1/Especies-Arboreas-Brasileiras-vol-1-Pinheiro-Bravo.pdf","https://www.conifers.org/po/Podocarpus_lambertii.php"],"checked":"2026-10","sig":"48d1faae","note":"No established English name: the Gymnosperm Database and Wikipedia give only Portuguese names, so the Portuguese name is used. Other Portuguese names: pinheirinho, pinho-bravo. A descriptive English option would be 'Lambert's podocarp', but it is not a standard name."},
  "sci": {"text":"Podocarpus lambertii","src":["https://api.gbif.org/v1/species/114810465","https://api.gbif.org/v1/species/114810465/speciesProfiles"],"checked":"2026-10","sig":"38a20eed"},
  "range": {"text":"Southern and southeastern Brazil uplands and Misiones, Argentina","src":["https://www.conifers.org/po/Podocarpus_lambertii.php","https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140112/1/Especies-Arboreas-Brasileiras-vol-1-Pinheiro-Bravo.pdf"],"checked":"2026-10","sig":"2d271741"},
  "stands": {"text":"Pinheiro-bravo grows mixed with erva-mate and imbuia in the layer under the Paraná pines, and its young trees spring up in older second-growth woods and in the small forest islands (capões) in grassland.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140113/1/Especies-Arboreas-Brasileiras-vol-1-Pinheiro-do-Parana.pdf","https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140112/1/Especies-Arboreas-Brasileiras-vol-1-Pinheiro-Bravo.pdf","https://revistas.unicentro.br/index.php/ambiencia/article/download/1357/1932"],"checked":"2026-10","sig":"1366d4ab"},
  "clump": "mixed",
  "site": {"text":"It lives in araucaria forest on mostly poor, well-drained soils; on dry ground in the highland grasslands it is one of the trees that starts new forest islands.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140112/1/Especies-Arboreas-Brasileiras-vol-1-Pinheiro-Bravo.pdf"],"checked":"2026-10","sig":"5579eb3a"},
  "moisture": "mesic",
  "pioneer": true,
  "height": {"text":"A conifer usually about 10 m tall that can reach 27 m inside araucaria forest, but stays only 1–4 m tall out in the grassland.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140112/1/Especies-Arboreas-Brasileiras-vol-1-Pinheiro-Bravo.pdf","https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140113/1/Especies-Arboreas-Brasileiras-vol-1-Pinheiro-do-Parana.pdf"],"checked":"2026-10","sig":"2be3fc35"},
  "storey": "subcanopy"
 },
 "queenpalm": {
  "name": {"text":"Queen palm","src":["https://en.wikipedia.org/wiki/Syagrus_romanzoffiana"],"checked":"2026-10","sig":"accf6aa5","note":"Portuguese: jerivá, coqueiro-jerivá; fruits = coquinhos. Embrapa records it in Floresta Ombrófila Mista (Aluvial and Montana) in Paraná and Santa Catarina at 5–142 trees per hectare. Chosen over juçara (Euterpe edulis); see 'rejected'."},
  "sci": {"text":"Syagrus romanzoffiana","src":["https://api.gbif.org/v1/species/114690697","https://api.gbif.org/v1/species/114690697/speciesProfiles"],"checked":"2026-10","sig":"d1e80a97"},
  "range": {"text":"Eastern and southern Brazil to Paraguay, Uruguay and northeastern Argentina","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140835/1/Especies-Arboreas-Brasileiras-vol-2-Jeriva.pdf"],"checked":"2026-10","sig":"fbb26c52"},
  "stands": {"text":"The jerivá palm grows mixed in among the broadleaf trees of the araucaria forest, and it turns up both in small gaps and in big openings in the forest.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140835/1/Especies-Arboreas-Brasileiras-vol-2-Jeriva.pdf","https://pfb.sede.embrapa.br/pfb/article/download/104/140/834","https://revistas.unicentro.br/index.php/ambiencia/article/download/1357/1932"],"checked":"2026-10","sig":"217d617a"},
  "clump": "mixed",
  "site": {"text":"A very adaptable palm found in almost every kind of vegetation from northern Brazil to Rio Grande do Sul, on rich or poor soils, dry ground and ground that floods for a while.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140835/1/Especies-Arboreas-Brasileiras-vol-2-Jeriva.pdf","https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/883701/1/FenologiaJeriva.pdf"],"checked":"2026-10","sig":"54d79fd9"},
  "moisture": "any",
  "pioneer": true,
  "height": {"text":"A palm with a single ringed trunk, 10–25 m tall, sometimes up to 30 m.","src":["https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/883701/1/FenologiaJeriva.pdf","https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140835/1/Especies-Arboreas-Brasileiras-vol-2-Jeriva.pdf"],"checked":"2026-10","sig":"c3ffb942","note":"No source gives its layer in araucaria forest; subcanopy is inferred from its height."},
  "storey": "subcanopy"
 },
 "argcedar": {
  "name": {"text":"Argentine cedar","src":["https://en.wikipedia.org/wiki/Cedrela_fissilis"],"checked":"2026-10","sig":"2f6985e1","note":"Portuguese: cedro, cedro-rosa. Habitat: Embrapa says it is common in Floresta Ombrófila Mista (all formations), and Paraná's IAT lists it among the common araucaria-forest companions. However, the Flora e Funga do Brasil vegetation list (via GBIF) does not include Floresta Ombrófila Mista. It is also naturally scattered, at 1–7 trees per hectare in southern forests (Embrapa), so it gets a low weight."},
  "sci": {"text":"Cedrela fissilis","src":["https://api.gbif.org/v1/species/114741932"],"checked":"2026-10","sig":"df135bee"},
  "range": {"text":"Costa Rica to southern Brazil and northeastern Argentina","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1139731/1/Especies-Arboreas-Brasileiras-vol-1-Cedro.pdf","https://en.wikipedia.org/wiki/Cedrela_fissilis"],"checked":"2026-10","sig":"4fe3117d"},
  "stands": {"text":"Cedro is a rare tree that grows as single trees spread through the forest, often only one or two per hectare, and its young trees come up in small gaps and at forest edges.","src":["https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/292214/1/circtec113.pdf"],"checked":"2026-10","sig":"b75e4c07"},
  "clump": "scattered",
  "site": {"text":"It grows mainly on deep, moist but well-drained soils, avoids shallow, stony or waterlogged ground, and spreads vigorously into second-growth forest.","src":["https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/292214/1/circtec113.pdf"],"checked":"2026-10","sig":"75ed5d19"},
  "moisture": "moist",
  "pioneer": true,
  "height": {"text":"A large tree that drops its leaves, 8–40 m tall, and one of the few araucaria-forest trees with trunks more than 1 m thick.","src":["https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/292214/1/circtec113.pdf","https://www.redalyc.org/pdf/449/44922150035.pdf"],"checked":"2026-10","sig":"21e9adb6"},
  "storey": "canopy"
 }
};

(window.SPECIES_DATA ||= {}).nuts = {
 "whiteacorn": {
  "name": "White oak acorn",
  "tree": {"text":"whiteoak","src":["https://www.fs.usda.gov/database/feis/plants/tree/quealb/all.html"],"checked":"2026-10","sig":"3dbbf8a5"},
  "fact": {"text":"Sweet, low in tannin and quick to sprout, so squirrels usually eat white oak acorns right away.","src":["https://sciencedaily.com/releases/1998/11/981126102802.htm","https://www.fs.usda.gov/database/feis/plants/tree/quealb/all.html"],"checked":"2026-10","sig":"12f7e15c"}
 },
 "redacorn": {
  "name": "Northern red oak acorn",
  "tree": {"text":"redoak","src":["https://www.fs.usda.gov/database/feis/plants/tree/querub/all.html"],"checked":"2026-10","sig":"12b01c65"},
  "fact": {"text":"Bitter with tannin and slow to sprout, so squirrels bury red oak acorns to eat later.","src":["https://www.fs.usda.gov/database/feis/plants/tree/querub/all.html","https://sciencedaily.com/releases/1998/11/981126102802.htm"],"checked":"2026-10","sig":"37a385e8"}
 },
 "hickorynut": {
  "name": "Shagbark hickory nut",
  "tree": {"text":"hickory","src":["https://www.fs.usda.gov/database/feis/plants/tree/carova/all.html"],"checked":"2026-10","sig":"ab99a7da"},
  "fact": {"text":"A thick husk splits into four parts around one of the richest nuts in the forest.","src":["https://www.fs.usda.gov/database/feis/plants/tree/carova/all.html"],"checked":"2026-10","sig":"48e6f740"}
 },
 "beechnut": {
  "name": "American beechnut",
  "tree": {"text":"beech","src":["https://www.fs.usda.gov/database/feis/plants/tree/faggra/all.html"],"checked":"2026-10","sig":"856f3787"},
  "fact": {"text":"Two or three three-sided nuts ride in each soft-spined husk.","src":["https://treelib.ca/species/56/fagus_grandifolia","https://dendro.cnre.vt.edu/dendrology/syllabus/factsheet.cfm?ID=47"],"checked":"2026-10","sig":"84d74fab"}
 },
 "whitesprucecone": {
  "name": "White spruce cone",
  "tree": {"text":"whitespruce","src":["https://www.fs.usda.gov/database/feis/plants/tree/picgla/all.html"],"checked":"2026-10","sig":"4e92d8b7"},
  "fact": {"text":"Red squirrels cut thousands of these in late summer and pile them in middens.","src":["https://www.fs.usda.gov/database/feis/plants/tree/picgla/all.html","https://northernwoodlands.org/articles/article/squirrel-stashes"],"checked":"2026-10","sig":"5cd0405d"}
 },
 "blacksprucecone": {
  "name": "Black spruce cone",
  "tree": {"text":"blackspruce","src":["https://www.fs.usda.gov/database/feis/plants/tree/picmar/all.html"],"checked":"2026-10","sig":"4781111f"},
  "fact": {"text":"Small, purplish cones that can stay on the tree for years.","src":["https://mortonarb.org/plant-and-protect/trees-and-plants/black-spruce/","https://www.fs.usda.gov/database/feis/plants/tree/picmar/all.html"],"checked":"2026-10","sig":"a0c90fb9"}
 },
 "balsamfircone": {
  "name": "Balsam fir cone",
  "tree": {"text":"balsamfir","src":["https://www.fs.usda.gov/database/feis/plants/tree/abibal/all.html"],"checked":"2026-10","sig":"dcb08d02"},
  "fact": {"text":"It stands upright on the branch and falls apart there, so squirrels cut them first.","src":["https://treelib.ca/species/259/abies_balsamea","https://www.dnr.state.mn.us/forestry/nursery/balsam-fir-seed-collection-guide.html"],"checked":"2026-10","sig":"7231d1f1","note":"Squirrels cutting the cones first is implied by caches of closed cones, not stated outright."}
 },
 "jackpinecone": {
  "name": "Jack pine cone",
  "tree": {"text":"jackpine","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinban/all.html"],"checked":"2026-10","sig":"6f446648"},
  "fact": {"text":"Sealed with resin; many only open after the heat of a forest fire.","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinban/all.html"],"checked":"2026-10","sig":"a860cce0"}
 },
 "ponderosacone": {
  "name": "Ponderosa pine cone",
  "tree": {"text":"ponderosa","src":["https://www.conifers.org/pi/Pinus_ponderosa.php"],"checked":"2026-10","sig":"7b133d27"},
  "fact": {"text":"Each scale ends in a small prickle.","src":["https://www.conifers.org/pi/Pinus_ponderosa.php"],"checked":"2026-10","sig":"5ea8d8f5"}
 },
 "gambelacorn": {
  "name": "Gambel oak acorn",
  "tree": {"text":"gambeloak","src":["https://www.fs.usda.gov/database/feis/plants/tree/quegam/all.html"],"checked":"2026-10","sig":"0e1937b1"},
  "fact": {"text":"Acorn woodpeckers, jays and squirrels all eat and spread these acorns.","src":["https://www.fs.usda.gov/database/feis/plants/tree/quegam/all.html"],"checked":"2026-10","sig":"892562e4"}
 },
 "douglascone": {
  "name": "Douglas-fir cone",
  "tree": {"text":"douglasfir","src":["https://www.conifers.org/pi/Pseudotsuga_menziesii.php"],"checked":"2026-10","sig":"cdede0c8"},
  "fact": {"text":"Its three-pointed bracts look like the hind legs and tail of a mouse hiding in the cone.","src":["https://www.nps.gov/articles/000/douglas-fir.htm","https://www.conifers.org/pi/Pseudotsuga_menziesii.php"],"checked":"2026-10","sig":"636a513a"}
 },
 "pinyonnut": {
  "name": "Pinyon nut",
  "tree": {"text":"pinyon","src":["https://www.conifers.org/pi/Pinus_edulis.php"],"checked":"2026-10","sig":"b9eef55c"},
  "fact": {"text":"Big wingless seeds; jays and squirrels plant new pinyons by burying them.","src":["https://www.conifers.org/pi/Pinus_edulis.php","https://www.fs.usda.gov/database/feis/plants/tree/pinedu/all.html"],"checked":"2026-10","sig":"1f8c0fab"}
 },
 "scotscone": {
  "name": "Scots pine cone",
  "tree": {"text":"scotspine","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/scots-pine/"],"checked":"2026-10","sig":"7c14cac2"},
  "fact": {"text":"Red squirrels strip off the scales and leave a neat bare core.","src":["https://discoverwildlife.com/how-to/identify-wildlife/how-to-identify-wildlife-feeding-signs"],"checked":"2026-10","sig":"5b8a7caa"}
 },
 "hazelnut": {
  "name": "Hazelnut",
  "tree": {"text":"hazel","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/hazel/"],"checked":"2026-10","sig":"9d053755"},
  "fact": {"text":"Red squirrels split hazelnuts cleanly in two; mice gnaw a round hole instead.","src":["https://discoverwildlife.com/how-to/identify-wildlife/how-to-identify-wildlife-feeding-signs"],"checked":"2026-10","sig":"7a3d259c"}
 },
 "eubeechnut": {
  "name": "European beechnut",
  "tree": {"text":"eubeech","src":["https://www.treesandshrubsonline.org/articles/fagus/fagus-sylvatica/"],"checked":"2026-10","sig":"5a54fef7"},
  "fact": {"text":"Beech trees fruit heavily every few years, in what are called mast years.","src":["https://www.woodlands.co.uk/?p=655"],"checked":"2026-10","sig":"438c7555"}
 },
 "pedacorn": {
  "name": "Pedunculate oak acorn",
  "tree": {"text":"pedoak","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/english-oak/"],"checked":"2026-10","sig":"01901b2a"},
  "fact": {"text":"Named for the long stalk, or peduncle, that its acorns hang from.","src":["https://www.keele.ac.uk/arboretum/aboutthearboretum/articles/oaksatkeele/","https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/english-oak/"],"checked":"2026-10","sig":"00de194f"}
 },
 "hemlockcone": {
  "name": "Western hemlock cone",
  "tree": {"text":"westernhemlock","src":["https://www.conifers.org/pi/Tsuga_heterophylla.php"],"checked":"2026-10","sig":"0f694c45"},
  "fact": {"text":"Tiny cones, only about 1.5 to 2.5 cm long, hang from the twigs.","src":["https://www.conifers.org/pi/Tsuga_heterophylla.php","https://www.conifers.org/pi/Tsuga.php"],"checked":"2026-10","sig":"82b6d814"}
 },
 "sitkacone": {
  "name": "Sitka spruce cone",
  "tree": {"text":"sitkaspruce","src":["https://www.conifers.org/pi/Picea_sitchensis.php"],"checked":"2026-10","sig":"f8edf866"},
  "fact": {"text":"Its thin, papery scales have ragged, toothed edges, and Douglas squirrels eat the seeds.","src":["https://www.conifers.org/pi/Picea_sitchensis.php","https://www.greentimbers.ca/vegetation-wildlife/wildlife/mammals/douglas-squirrel/"],"checked":"2026-10","sig":"9261ce58"}
 },
 "beakednut": {
  "name": "Beaked hazelnut",
  "tree": {"text":"beakedhazel","src":["https://www.fs.usda.gov/database/feis/plants/shrub/corcor/all.html"],"checked":"2026-10","sig":"7ab4dde3"},
  "fact": {"text":"The bristly husk around each nut stretches into a tube, the \"beak\" in its name.","src":["https://www.fs.usda.gov/database/feis/plants/shrub/corcor/all.html"],"checked":"2026-10","sig":"75a2b006"}
 },
 "bunanut": {
  "name": "Siebold's beechnut",
  "tree": {"text":"buna","src":["https://www.rinya.maff.go.jp/tohoku/sidou/buna.html"],"checked":"2026-10","sig":"56849f01"},
  "fact": {"text":"Beech trees drop big nut crops only some years. Wood mice choose beechnuts over other forest nuts.","src":["https://www.rinya.maff.go.jp/tohoku/sidou/buna.html","https://eprints.lib.hokudai.ac.jp/repo/huscap/all/50928/PB145-4_798-801.pdf"],"checked":"2026-10","sig":"ac433bbd"}
 },
 "mizunaraacorn": {
  "name": "Japanese oak acorn",
  "tree": {"text":"mizunara","src":["https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/mizunara.html"],"checked":"2026-10","sig":"eae6a56d"},
  "fact": {"text":"Jays and squirrels bury mizunara acorns to eat later; forgotten ones sprout far from the parent tree.","src":["https://msc.tsukuba.ac.jp/wp/wp-content/uploads/2021/03/worksheet_level2ans._20210116.pdf","https://global.canon/ja/bird-branch/photo-gallery/kakesu/index.html"],"checked":"2026-10","sig":"7f93df99"}
 },
 "jwalnutnut": {
  "name": "Japanese walnut",
  "tree": {"text":"jwalnut","src":["https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/onigurumi.html"],"checked":"2026-10","sig":"a838ba27"},
  "fact": {"text":"Japanese squirrels and wood mice bury walnuts along forest streams; forgotten ones can sprout into new walnut trees.","src":["https://www.jstage.jst.go.jp/article/jjfs1953/84/1/84_1_1/_article"],"checked":"2026-10","sig":"6f4e9e4a"}
 },
 "tochinut": {
  "name": "Tochi nut",
  "tree": {"text":"tochi","src":["https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/totinoki.html","https://www.pref.yamagata.jp/documents/40694/syunndayori_202501_tochimoti.pdf"],"checked":"2026-10","sig":"21c17002"},
  "fact": {"text":"Tochi nuts are bitter, but wood mice still bury them. People take about 20 days to wash out the bitterness for tochi-mochi.","src":["https://eprints.lib.hokudai.ac.jp/repo/huscap/all/50928/PB145-4_798-801.pdf","https://www.pref.yamagata.jp/documents/40694/syunndayori_202501_tochimoti.pdf"],"checked":"2026-10","sig":"fe779aee"}
 },
 "pinhao": {
  "name": "Pinhão",
  "tree": {"text":"paranapine","src":["https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/304455/1/CT0060.pdf"],"checked":"2026-10","sig":"b12a880d"},
  "fact": {"text":"Buried pinhão seeds survive best, so the ones squirrels forget to dig up can sprout into new pines.","src":["https://rif.emnuvens.com.br/revista/article/view/779","https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/304455/1/CT0060.pdf","https://bdtd.ibict.br/vufind/Record/UNIOESTE-1_f77ea7b57cdc8be603dafc40d968af3a"],"checked":"2026-10","sig":"a807cd37","note":"Alberts 1992 (Revista do Instituto Florestal, São Paulo state) watched the Brazilian squirrel, then called Sciurus aestuans, burying Paraná pine seeds in Campos do Jordão. Embrapa CT 60 lists squirrels, including the serelepe, among the pinhão's dispersers. Squinzani 2021 (UNIOESTE dissertation) found buried seeds were the only ones still surviving at the last check. The original squirrel-as-disperser paper (Bordignon & Monteiro-Filho 2000, Arq. Ciênc. Vet. Zool. UNIPAR) is cited in these sources, but I could not open it."}
 },
 "palmnut": {
  "name": "Queen palm nut",
  "tree": {"text":"queenpalm","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140835/1/Especies-Arboreas-Brasileiras-vol-2-Jeriva.pdf"],"checked":"2026-10","sig":"29b930aa"},
  "fact": {"text":"Squirrels gnaw a neat triangle-shaped hole in this nut's shell, and bury extra nuts to eat in winter.","src":["https://www.scielo.br/j/zool/a/MzcVdZNFs9RxYY6y6WS36Bg/","https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140835/1/Especies-Arboreas-Brasileiras-vol-2-Jeriva.pdf"],"checked":"2026-10","sig":"3f521db3","note":"Mendes & Cândido-Jr 2014 (Zoologia 31(3), araucaria moist forest, Cascavel PR): the main opening method (about 50% of records) cuts a triangular hole starting at the germination pore. Embrapa: the squirrel eats jerivá coquinhos and buries seeds for winter, and some forgotten seeds are dispersed. Jerivá makes up about 40% of its diet."}
 },
 "podoseed": {
  "name": "Pinheiro-bravo seed",
  "tree": {"text":"pinheirobravo","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140112/1/Especies-Arboreas-Brasileiras-vol-1-Pinheiro-Bravo.pdf","https://www.conifers.org/po/Podocarpus_lambertii.php"],"checked":"2026-10","sig":"61da04a4"},
  "fact": {"text":"Its seed sits on a juicy dark-purple stalk. Birds eat the stalk and help spread the seed.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140112/1/Especies-Arboreas-Brasileiras-vol-1-Pinheiro-Bravo.pdf","https://www.conifers.org/po/Podocarpus_lambertii.php"],"checked":"2026-10","sig":"7a34ab6e","note":"Embrapa: the fleshy, juicy stalk turns dark purple and is edible, and dispersal is mainly by birds (ornitocórica). The Gymnosperm Database calls the receptacle reddish purple."}
 },
 "cedarpod": {
  "name": "Argentine cedar pod",
  "tree": {"text":"argcedar","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1139731/1/Especies-Arboreas-Brasileiras-vol-1-Cedro.pdf"],"checked":"2026-10","sig":"5f5c6e0d"},
  "fact": {"text":"Its woody pod splits open into five parts, and its winged seeds drift away on the wind.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1139731/1/Especies-Arboreas-Brasileiras-vol-1-Cedro.pdf"],"checked":"2026-10","sig":"c1d3a196","note":"Embrapa: a pear-shaped woody capsule opens by five valves and holds about 30–100 seeds, each winged at one end. Seeds fall or are carried by the wind. Many opened capsules stay on the tree until the next season. This is the only one of the four without a fauna link; it was picked because it looks so different. See 'rejected' for the yerba mate alternative."}
 }
};
