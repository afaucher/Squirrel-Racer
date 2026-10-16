// Squirrel Ranger species facts: Trees, and the nuts and cones they bear.
// Every claim on a card is {"text", "src": [urls], "checked": "YYYY-MM", "sig", "note"?}.
// "sig" fingerprints the text when it was checked; edit the text and the check flags it for a re-check.
// How to add or fix a fact: docs/ADDING-A-FOREST.md. Validate with: node tools/check_facts.mjs

(window.SPECIES_DATA ||= {}).trees = {
 "whiteoak": {
  "name": {"text":"White oak","src":["https://www.fs.usda.gov/database/feis/plants/tree/quealb/all.html"],"checked":"2026-10","sig":"86f1f487"},
  "sci": {"text":"Quercus alba","src":["https://www.fs.usda.gov/database/feis/plants/tree/quealb/all.html"],"checked":"2026-10","sig":"4a16c12f"},
  "range": {"text":"Eastern and central US, southeastern Canada","src":["https://www.fs.usda.gov/database/feis/plants/tree/quealb/all.html","https://en.wikipedia.org/wiki/Quercus_alba"],"checked":"2026-10","sig":"892ececb"}
 },
 "redoak": {
  "name": {"text":"Northern red oak","src":["https://www.fs.usda.gov/database/feis/plants/tree/querub/all.html"],"checked":"2026-10","sig":"613383e3"},
  "sci": {"text":"Quercus rubra","src":["https://www.fs.usda.gov/database/feis/plants/tree/querub/all.html"],"checked":"2026-10","sig":"a87bba67"},
  "range": {"text":"Eastern US and southeastern Canada","src":["https://www.fs.usda.gov/database/feis/plants/tree/querub/all.html"],"checked":"2026-10","sig":"80c32bf9"}
 },
 "hickory": {
  "name": {"text":"Shagbark hickory","src":["https://www.fs.usda.gov/database/feis/plants/tree/carova/all.html"],"checked":"2026-10","sig":"9bee066f"},
  "sci": {"text":"Carya ovata","src":["https://www.fs.usda.gov/database/feis/plants/tree/carova/all.html"],"checked":"2026-10","sig":"1d58bbd5"},
  "range": {"text":"Eastern US and southeastern Canada","src":["https://www.fs.usda.gov/database/feis/plants/tree/carova/all.html"],"checked":"2026-10","sig":"80c32bf9"}
 },
 "beech": {
  "name": {"text":"American beech","src":["https://www.fs.usda.gov/database/feis/plants/tree/faggra/all.html"],"checked":"2026-10","sig":"2726b91e"},
  "sci": {"text":"Fagus grandifolia","src":["https://www.fs.usda.gov/database/feis/plants/tree/faggra/all.html"],"checked":"2026-10","sig":"c7471c3f"},
  "range": {"text":"Eastern US and southeastern Canada","src":["https://www.fs.usda.gov/database/feis/plants/tree/faggra/all.html"],"checked":"2026-10","sig":"80c32bf9"}
 },
 "sugarmaple": {
  "name": {"text":"Sugar maple","src":["https://www.fs.usda.gov/database/feis/plants/tree/acesac/all.html"],"checked":"2026-10","sig":"29c35af1"},
  "sci": {"text":"Acer saccharum","src":["https://www.fs.usda.gov/database/feis/plants/tree/acesac/all.html"],"checked":"2026-10","sig":"6d546e4f"},
  "range": {"text":"Eastern US and southeastern Canada","src":["https://www.fs.usda.gov/database/feis/plants/tree/acesac/all.html"],"checked":"2026-10","sig":"80c32bf9"}
 },
 "whitespruce": {
  "name": {"text":"White spruce","src":["https://www.fs.usda.gov/database/feis/plants/tree/picgla/all.html"],"checked":"2026-10","sig":"e9414907"},
  "sci": {"text":"Picea glauca","src":["https://www.fs.usda.gov/database/feis/plants/tree/picgla/all.html"],"checked":"2026-10","sig":"19e104d0"},
  "range": {"text":"Across Canada and Alaska, and the far northern US","src":["https://www.fs.usda.gov/database/feis/plants/tree/picgla/all.html"],"checked":"2026-10","sig":"5fd0a251"}
 },
 "blackspruce": {
  "name": {"text":"Black spruce","src":["https://www.fs.usda.gov/database/feis/plants/tree/picmar/all.html"],"checked":"2026-10","sig":"6cca48bb"},
  "sci": {"text":"Picea mariana","src":["https://www.fs.usda.gov/database/feis/plants/tree/picmar/all.html"],"checked":"2026-10","sig":"588f59d0"},
  "range": {"text":"Canada, Alaska and the northern US","src":["https://www.fs.usda.gov/database/feis/plants/tree/picmar/all.html","https://mortonarb.org/plant-and-protect/trees-and-plants/black-spruce/"],"checked":"2026-10","sig":"e91b5159"}
 },
 "balsamfir": {
  "name": {"text":"Balsam fir","src":["https://www.fs.usda.gov/database/feis/plants/tree/abibal/all.html"],"checked":"2026-10","sig":"315127e9"},
  "sci": {"text":"Abies balsamea","src":["https://www.fs.usda.gov/database/feis/plants/tree/abibal/all.html","https://www.conifers.org/pi/Abies_balsamea.php"],"checked":"2026-10","sig":"ace9ec77"},
  "range": {"text":"Eastern and central Canada, northeastern US","src":["https://www.fs.usda.gov/database/feis/plants/tree/abibal/all.html","https://www.conifers.org/pi/Abies_balsamea.php"],"checked":"2026-10","sig":"0f7c077e"}
 },
 "jackpine": {
  "name": {"text":"Jack pine","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinban/all.html"],"checked":"2026-10","sig":"4037886c"},
  "sci": {"text":"Pinus banksiana","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinban/all.html"],"checked":"2026-10","sig":"dc5b8bab"},
  "range": {"text":"Canada and the northern US","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinban/all.html"],"checked":"2026-10","sig":"ec5d2c4d"}
 },
 "paperbirch": {
  "name": {"text":"Paper birch","src":["https://www.fs.usda.gov/database/feis/plants/tree/betpap/all.html"],"checked":"2026-10","sig":"4b55ca82"},
  "sci": {"text":"Betula papyrifera","src":["https://www.fs.usda.gov/database/feis/plants/tree/betpap/all.html"],"checked":"2026-10","sig":"8357fef2"},
  "range": {"text":"Across Canada, Alaska and the northern US","src":["https://www.fs.usda.gov/database/feis/plants/tree/betpap/all.html"],"checked":"2026-10","sig":"559f1a5a"}
 },
 "aspen": {
  "name": {"text":"Quaking aspen","src":["https://www.fs.usda.gov/database/feis/plants/tree/poptre/all.html"],"checked":"2026-10","sig":"72781261"},
  "sci": {"text":"Populus tremuloides","src":["https://www.fs.usda.gov/database/feis/plants/tree/poptre/all.html"],"checked":"2026-10","sig":"e751e0d2"},
  "range": {"text":"Canada, Alaska, the northern and western US, and Mexico","src":["https://www.fs.usda.gov/database/feis/plants/tree/poptre/all.html"],"checked":"2026-10","sig":"50dae491"}
 },
 "ponderosa": {
  "name": {"text":"Ponderosa pine","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinpons/all.html"],"checked":"2026-10","sig":"d9f34837"},
  "sci": {"text":"Pinus ponderosa","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinpons/all.html","https://www.conifers.org/pi/Pinus_ponderosa.php"],"checked":"2026-10","sig":"d66453cf","note":"The Gymnosperm Database splits the group (Rocky Mountain trees as Pinus scopulorum); FEIS keeps one species with varieties."},
  "range": {"text":"Western North America","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinpons/all.html"],"checked":"2026-10","sig":"d869cfe0"}
 },
 "gambeloak": {
  "name": {"text":"Gambel oak","src":["https://www.fs.usda.gov/database/feis/plants/tree/quegam/all.html"],"checked":"2026-10","sig":"26be5ebf"},
  "sci": {"text":"Quercus gambelii","src":["https://www.fs.usda.gov/database/feis/plants/tree/quegam/all.html"],"checked":"2026-10","sig":"a2b5816e"},
  "range": {"text":"Southern Rocky Mountains and the Southwest","src":["https://www.fs.usda.gov/database/feis/plants/tree/quegam/all.html"],"checked":"2026-10","sig":"aa1da548"}
 },
 "douglasfir": {
  "name": {"text":"Douglas-fir","src":["https://www.conifers.org/pi/Pseudotsuga_menziesii.php"],"checked":"2026-10","sig":"e1cc2125"},
  "sci": {"text":"Pseudotsuga menziesii","src":["https://www.conifers.org/pi/Pseudotsuga_menziesii.php"],"checked":"2026-10","sig":"b1e7d3d8"},
  "range": {"text":"Western North America","src":["https://www.conifers.org/pi/Pseudotsuga_menziesii.php"],"checked":"2026-10","sig":"d869cfe0"}
 },
 "pinyon": {
  "name": {"text":"Colorado pinyon","src":["https://www.conifers.org/pi/Pinus_edulis.php","https://www.fs.usda.gov/database/feis/plants/tree/pinedu/all.html"],"checked":"2026-10","sig":"94f76817"},
  "sci": {"text":"Pinus edulis","src":["https://www.conifers.org/pi/Pinus_edulis.php","https://www.fs.usda.gov/database/feis/plants/tree/pinedu/all.html"],"checked":"2026-10","sig":"e3293a0b"},
  "range": {"text":"Colorado Plateau and the Southwest US","src":["https://www.fs.usda.gov/database/feis/plants/tree/pinedu/all.html","https://www.conifers.org/pi/Pinus_edulis.php"],"checked":"2026-10","sig":"ef17f329"}
 },
 "scotspine": {
  "name": {"text":"Scots pine","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/scots-pine/"],"checked":"2026-10","sig":"83f6a775"},
  "sci": {"text":"Pinus sylvestris","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/scots-pine/","https://www.treesandshrubsonline.org/articles/pinus/pinus-sylvestris/"],"checked":"2026-10","sig":"9793a844"},
  "range": {"text":"Europe and northern Asia; Scotland's native pine","src":["https://www.treesandshrubsonline.org/articles/pinus/pinus-sylvestris/","https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/scots-pine/"],"checked":"2026-10","sig":"22103ae4"}
 },
 "silverbirch": {
  "name": {"text":"Silver birch","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/silver-birch/"],"checked":"2026-10","sig":"f1279839"},
  "sci": {"text":"Betula pendula","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/silver-birch/","https://www.euforgen.org/species/betula-pendula/"],"checked":"2026-10","sig":"3307e295"},
  "range": {"text":"Europe and western and central Asia","src":["https://www.euforgen.org/species/betula-pendula/"],"checked":"2026-10","sig":"44fe3fed"}
 },
 "hazel": {
  "name": {"text":"Common hazel","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/hazel/"],"checked":"2026-10","sig":"c42285cf"},
  "sci": {"text":"Corylus avellana","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/hazel/"],"checked":"2026-10","sig":"b7686703"},
  "range": {"text":"Europe and western Asia","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/hazel/"],"checked":"2026-10","sig":"4709ea5d"}
 },
 "pedoak": {
  "name": {"text":"Pedunculate oak","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/english-oak/","https://www.euforgen.org/species/quercus-robur/"],"checked":"2026-10","sig":"0529fd58"},
  "sci": {"text":"Quercus robur","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/english-oak/"],"checked":"2026-10","sig":"409741c5"},
  "range": {"text":"Europe to the Caucasus","src":["https://www.euforgen.org/species/quercus-robur/"],"checked":"2026-10","sig":"3b51cea1"}
 },
 "eubeech": {
  "name": {"text":"European beech","src":["https://www.euforgen.org/species/fagus-sylvatica/","https://www.treesandshrubsonline.org/articles/fagus/fagus-sylvatica/"],"checked":"2026-10","sig":"65c87876"},
  "sci": {"text":"Fagus sylvatica","src":["https://www.treesandshrubsonline.org/articles/fagus/fagus-sylvatica/"],"checked":"2026-10","sig":"e2a33e8c"},
  "range": {"text":"Western and central Europe","src":["https://www.treesandshrubsonline.org/articles/fagus/fagus-sylvatica/","https://www.euforgen.org/species/fagus-sylvatica/"],"checked":"2026-10","sig":"3060d088"}
 },
 "rowan": {
  "name": {"text":"Rowan","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/rowan/"],"checked":"2026-10","sig":"e0ebe4ec"},
  "sci": {"text":"Sorbus aucuparia","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/rowan/","https://www.euforgen.org/species/sorbus-aucuparia/"],"checked":"2026-10","sig":"fcc12366"},
  "range": {"text":"Europe and northern Asia","src":["https://en.wikipedia.org/wiki/Sorbus_aucuparia","https://www.euforgen.org/species/sorbus-aucuparia/"],"checked":"2026-10","sig":"57423290"}
 },
 "westernhemlock": {
  "name": {"text":"Western hemlock","src":["https://www.conifers.org/pi/Tsuga_heterophylla.php"],"checked":"2026-10","sig":"cb389e2e"},
  "sci": {"text":"Tsuga heterophylla","src":["https://www.conifers.org/pi/Tsuga_heterophylla.php"],"checked":"2026-10","sig":"e1b30860"},
  "range": {"text":"Pacific coast from Alaska to northern California, and inland to the northern Rockies","src":["https://www.conifers.org/pi/Tsuga_heterophylla.php"],"checked":"2026-10","sig":"b3e9e45c"}
 },
 "westernredcedar": {
  "name": {"text":"Western redcedar","src":["https://www.conifers.org/cu/Thuja_plicata.php"],"checked":"2026-10","sig":"ac308f4a"},
  "sci": {"text":"Thuja plicata","src":["https://www.conifers.org/cu/Thuja_plicata.php"],"checked":"2026-10","sig":"b644d92b"},
  "range": {"text":"Pacific Northwest and the northern Rockies","src":["https://www.conifers.org/cu/Thuja_plicata.php"],"checked":"2026-10","sig":"40272bee"}
 },
 "sitkaspruce": {
  "name": {"text":"Sitka spruce","src":["https://www.conifers.org/pi/Picea_sitchensis.php"],"checked":"2026-10","sig":"c981bc85"},
  "sci": {"text":"Picea sitchensis","src":["https://www.conifers.org/pi/Picea_sitchensis.php"],"checked":"2026-10","sig":"2bd9973a"},
  "range": {"text":"Pacific coast from Alaska to northern California","src":["https://www.conifers.org/pi/Picea_sitchensis.php"],"checked":"2026-10","sig":"6401f338"}
 },
 "bigleafmaple": {
  "name": {"text":"Bigleaf maple","src":["https://www.fs.usda.gov/database/feis/plants/tree/acemac/all.html"],"checked":"2026-10","sig":"95f538ba"},
  "sci": {"text":"Acer macrophyllum","src":["https://www.fs.usda.gov/database/feis/plants/tree/acemac/all.html"],"checked":"2026-10","sig":"b684b3b6"},
  "range": {"text":"Pacific coast from British Columbia to California","src":["https://www.fs.usda.gov/database/feis/plants/tree/acemac/all.html"],"checked":"2026-10","sig":"b3a5147d"}
 },
 "redalder": {
  "name": {"text":"Red alder","src":["https://www.fs.usda.gov/database/feis/plants/tree/alnrub/all.html"],"checked":"2026-10","sig":"7241ba5e"},
  "sci": {"text":"Alnus rubra","src":["https://www.fs.usda.gov/database/feis/plants/tree/alnrub/all.html"],"checked":"2026-10","sig":"a18ccbc2"},
  "range": {"text":"Pacific coast from Alaska to California","src":["https://www.fs.usda.gov/database/feis/plants/tree/alnrub/all.html"],"checked":"2026-10","sig":"bfa8af02"}
 },
 "beakedhazel": {
  "name": {"text":"Beaked hazel","src":["https://www.fs.usda.gov/database/feis/plants/shrub/corcor/all.html"],"checked":"2026-10","sig":"4c8f07d2"},
  "sci": {"text":"Corylus cornuta","src":["https://www.fs.usda.gov/database/feis/plants/shrub/corcor/all.html"],"checked":"2026-10","sig":"646b3f55"},
  "range": {"text":"Across much of North America; the western variety is called California hazelnut","src":["https://www.fs.usda.gov/database/feis/plants/shrub/corcor/all.html"],"checked":"2026-10","sig":"7bb6f1ff"}
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
 }
};
