// Squirrel Ranger species facts: Birds.
// Every claim on a card is {"text", "src": [urls], "checked": "YYYY-MM", "sig", "note"?}.
// "sig" fingerprints the text when it was checked; edit the text and the check flags it for a re-check.
// How to add or fix a fact: docs/ADDING-A-FOREST.md. Validate with: node tools/check_facts.mjs

(window.SPECIES_DATA ||= {}).birds = {
 "cardinal": {
  "name": {"text":"Northern cardinal","src":["https://www.audubon.org/field-guide/bird/northern-cardinal"],"checked":"2026-10","sig":"ddaf2ab0"},
  "sci": {"text":"Cardinalis cardinalis","src":["https://www.audubon.org/field-guide/bird/northern-cardinal","https://birdsoftheworld.org/bow/species/norcar/cur/introduction"],"checked":"2026-10","sig":"45b52081"},
  "wiki": "Northern_cardinal",
  "range": {"text":"Eastern and central US, southeastern Canada and Mexico","src":["https://birdsoftheworld.org/bow/species/norcar/cur/introduction","https://en.wikipedia.org/wiki/Northern_cardinal"],"checked":"2026-10","sig":"e3bd1fd8"},
  "fact": {"text":"Both males and females sing, and pairs sometimes sing duets.","src":["https://birdnote.org/node/12968","https://birdsoftheworld.org/bow/species/norcar/cur/introduction"],"checked":"2026-10","sig":"a7428bdd"},
  "marks": {"text":"Male: all red with a black face mask. Female: tan with red tints. Both have a tall pointed crest and thick coral bill.","src":["https://en.wikipedia.org/wiki/Northern_cardinal","https://birdsoftheworld.org/bow/species/norcar/cur/introduction"],"checked":"2026-10","sig":"2c27fd9d"}
 },
 "bluejay": {
  "name": {"text":"Blue jay","src":["https://www.audubon.org/field-guide/bird/blue-jay"],"checked":"2026-10","sig":"0146bddb"},
  "sci": {"text":"Cyanocitta cristata","src":["https://www.audubon.org/field-guide/bird/blue-jay","https://birdsoftheworld.org/bow/species/blujay/cur/introduction"],"checked":"2026-10","sig":"fec73420"},
  "wiki": "Blue_jay",
  "range": {"text":"Eastern and central North America","src":["https://en.wikipedia.org/wiki/Blue_jay","https://www.audubon.org/field-guide/bird/blue-jay"],"checked":"2026-10","sig":"e07bb2df"},
  "fact": {"text":"Blue jays bury acorns like squirrels do, and the forgotten ones grow into oaks.","src":["https://www.audubon.org/field-guide/bird/blue-jay","https://lucec.loyno.edu/natural-history-writings/blue-jay-acorn-planters"],"checked":"2026-10","sig":"2b211390"},
  "marks": {"text":"Blue crest and back, black necklace, white-tipped wings and tail with black bars.","src":["https://www.audubon.org/field-guide/bird/blue-jay","https://en.wikipedia.org/wiki/Blue_jay"],"checked":"2026-10","sig":"e26e36d5"}
 },
 "titmouse": {
  "name": {"text":"Tufted titmouse","src":["https://www.audubon.org/field-guide/bird/tufted-titmouse"],"checked":"2026-10","sig":"06d77a4f"},
  "sci": {"text":"Baeolophus bicolor","src":["https://www.audubon.org/field-guide/bird/tufted-titmouse","https://birdsoftheworld.org/bow/species/tuftit/cur/introduction"],"checked":"2026-10","sig":"c55826ff"},
  "wiki": "Tufted_titmouse",
  "pl": "Tufted titmice",
  "range": {"text":"Eastern United States","src":["https://birdsoftheworld.org/bow/species/tuftit/cur/introduction","https://www.audubon.org/field-guide/bird/tufted-titmouse"],"checked":"2026-10","sig":"177acfd7"},
  "fact": {"text":"Titmice hoard seeds in bark crevices, usually close to the feeder or tree they came from.","src":["https://www.pa.gov/agencies/pgc/wildlife/discover-pa-wildlife/tufted-titmouse","https://en.wikipedia.org/wiki/Tufted_titmouse"],"checked":"2026-10","sig":"6b7b8bd3"},
  "marks": {"text":"Soft gray crest, black forehead patch, big dark eye, peach flanks.","src":["https://birdsoftheworld.org/bow/species/tuftit/cur/introduction","https://www.pa.gov/agencies/pgc/wildlife/discover-pa-wildlife/tufted-titmouse"],"checked":"2026-10","sig":"ea682ecb"}
 },
 "wbnut": {
  "name": {"text":"White-breasted nuthatch","src":["https://www.audubon.org/field-guide/bird/white-breasted-nuthatch"],"checked":"2026-10","sig":"dc474ad3"},
  "sci": {"text":"Sitta carolinensis","src":["https://www.audubon.org/field-guide/bird/white-breasted-nuthatch","https://en.wikipedia.org/wiki/White-breasted_nuthatch"],"checked":"2026-10","sig":"d730ea32"},
  "wiki": "White-breasted_nuthatch",
  "range": {"text":"Woodlands across most of the US, southern Canada and Mexico","src":["https://en.wikipedia.org/wiki/White-breasted_nuthatch","https://birdsoftheworld.org/bow/species/whbnut/cur/introduction"],"checked":"2026-10","sig":"e712a926"},
  "fact": {"text":"Nuthatches wedge nuts into bark and hammer them open, the \"hatch\" in their name.","src":["https://birdsoftheworld.org/bow/species/whbnut/cur/introduction","https://en.wikipedia.org/wiki/White-breasted_nuthatch"],"checked":"2026-10","sig":"8d9eaf3c"},
  "marks": {"text":"Black cap, white face and breast, blue-gray back, chestnut under the tail. Climbs head-first down trunks.","src":["https://www.csusb.edu/biology/birds/view/535683","https://en.wikipedia.org/wiki/White-breasted_nuthatch"],"checked":"2026-10","sig":"f2a9df1a"}
 },
 "rbwood": {
  "name": {"text":"Red-bellied woodpecker","src":["https://www.audubon.org/field-guide/bird/red-bellied-woodpecker"],"checked":"2026-10","sig":"094b6521"},
  "sci": {"text":"Melanerpes carolinus","src":["https://www.audubon.org/field-guide/bird/red-bellied-woodpecker"],"checked":"2026-10","sig":"14fc4ba8"},
  "wiki": "Red-bellied_woodpecker",
  "range": {"text":"Eastern United States","src":["https://www.audubon.org/field-guide/bird/red-bellied-woodpecker","https://en.wikipedia.org/wiki/Red-bellied_woodpecker"],"checked":"2026-10","sig":"177acfd7"},
  "fact": {"text":"Its red belly is only a faint wash; the red on its head is much easier to see.","src":["https://www.audubon.org/field-guide/bird/red-bellied-woodpecker","https://en.wikipedia.org/wiki/Red-bellied_woodpecker"],"checked":"2026-10","sig":"4ddfab10"},
  "marks": {"text":"Zebra-barred back, pale buff face, faint red belly wash. Red cap and nape on males; just the nape on females.","src":["https://www.audubon.org/field-guide/bird/red-bellied-woodpecker","https://en.wikipedia.org/wiki/Red-bellied_woodpecker"],"checked":"2026-10","sig":"8fbbfa35"}
 },
 "canjay": {
  "name": {"text":"Canada jay","src":["https://www.audubon.org/field-guide/bird/canada-jay","https://en.wikipedia.org/wiki/Canada_jay"],"checked":"2026-10","sig":"07581379"},
  "sci": {"text":"Perisoreus canadensis","src":["https://www.audubon.org/field-guide/bird/canada-jay","https://birdsoftheworld.org/bow/species/gryjay/cur/introduction"],"checked":"2026-10","sig":"d8f9eaf5"},
  "wiki": "Canada_jay",
  "range": {"text":"Boreal and mountain forests of Canada, Alaska and the northern and western US","src":["https://en.wikipedia.org/wiki/Canada_jay","https://birdsoftheworld.org/bow/species/gryjay/cur/introduction"],"checked":"2026-10","sig":"a514d506"},
  "fact": {"text":"Canada jays store food under bark with sticky saliva and raise chicks in late winter.","src":["https://birdsoftheworld.org/bow/species/gryjay/cur/introduction","https://www.audubon.org/field-guide/bird/canada-jay"],"checked":"2026-10","sig":"5379b651"},
  "marks": {"text":"Fluffy gray body, white forehead and face, dark gray nape, short black bill.","src":["https://en.wikipedia.org/wiki/Canada_jay","https://www.audubon.org/field-guide/bird/canada-jay"],"checked":"2026-10","sig":"a3884d13"}
 },
 "borchick": {
  "name": {"text":"Boreal chickadee","src":["https://www.audubon.org/field-guide/bird/boreal-chickadee"],"checked":"2026-10","sig":"613c4061"},
  "sci": {"text":"Poecile hudsonicus","src":["https://www.audubon.org/field-guide/bird/boreal-chickadee","https://birdsoftheworld.org/bow/species/borchi2/cur/introduction"],"checked":"2026-10","sig":"13cbbdcf"},
  "wiki": "Boreal_chickadee",
  "range": {"text":"Boreal forests of Canada, Alaska and the far northern US","src":["https://birdsoftheworld.org/bow/species/borchi2/cur/introduction","https://flatheadaudubon.org/bird-of-the-month/boreal-chickadee/"],"checked":"2026-10","sig":"4c5d221c"},
  "fact": {"text":"Boreal chickadees hide seeds and insects in bark and needles to eat in winter.","src":["https://www.audubon.org/magazine/how-does-boreal-chickadee-survive-arctic-winters","https://en.wikipedia.org/wiki/Boreal_chickadee"],"checked":"2026-10","sig":"4e1ec3b4"},
  "marks": {"text":"Brown cap, black bib, white cheeks, cinnamon-brown flanks.","src":["https://www.audubon.org/field-guide/bird/boreal-chickadee","https://en.wikipedia.org/wiki/Boreal_chickadee"],"checked":"2026-10","sig":"8d1cd088"}
 },
 "rbnut": {
  "name": {"text":"Red-breasted nuthatch","src":["https://www.audubon.org/field-guide/bird/red-breasted-nuthatch"],"checked":"2026-10","sig":"bf4c8cd9"},
  "sci": {"text":"Sitta canadensis","src":["https://www.audubon.org/field-guide/bird/red-breasted-nuthatch"],"checked":"2026-10","sig":"40ab92e5"},
  "wiki": "Red-breasted_nuthatch",
  "range": {"text":"Conifer forests of Canada, Alaska and the western and northeastern US","src":["https://en.wikipedia.org/wiki/Red-breasted_nuthatch","https://www.audubon.org/field-guide/bird/red-breasted-nuthatch"],"checked":"2026-10","sig":"91afbe42"},
  "fact": {"text":"They smear sticky conifer resin around their nest hole to keep intruders out.","src":["https://www.audubon.org/field-guide/bird/red-breasted-nuthatch","https://en.wikipedia.org/wiki/Red-breasted_nuthatch"],"checked":"2026-10","sig":"c51d6a91"},
  "marks": {"text":"Black cap and eye line, white eyebrow, rusty underparts. Tiny, and head-first.","src":["https://en.wikipedia.org/wiki/Red-breasted_nuthatch","https://www.audubon.org/field-guide/bird/red-breasted-nuthatch"],"checked":"2026-10","sig":"85bc6b14"}
 },
 "wwcross": {
  "name": {"text":"White-winged crossbill","src":["https://www.audubon.org/field-guide/bird/white-winged-crossbill","https://en.wikipedia.org/wiki/White-winged_crossbill"],"checked":"2026-10","sig":"970d1f33","note":"AOS name; IOC/British name is Two-barred crossbill."},
  "sci": {"text":"Loxia leucoptera","src":["https://www.audubon.org/field-guide/bird/white-winged-crossbill","https://en.wikipedia.org/wiki/White-winged_crossbill"],"checked":"2026-10","sig":"79ef0015"},
  "wiki": "White-winged_crossbill",
  "range": {"text":"Boreal forests of North America and Eurasia","src":["https://en.wikipedia.org/wiki/White-winged_crossbill","https://www.audubon.org/field-guide/bird/white-winged-crossbill"],"checked":"2026-10","sig":"47d087cd"},
  "fact": {"text":"The crossed bill pries open spruce cones, the same food red squirrels hoard.","src":["https://www.audubon.org/field-guide/bird/white-winged-crossbill","https://northernwoodlands.org/articles/article/squirrel-stashes"],"checked":"2026-10","sig":"7d13397a"},
  "marks": {"text":"Black wings with two bold white bars and crossed bill tips for prying open cones. Males are rose-pink; females yellowish.","src":["https://www.audubon.org/field-guide/bird/white-winged-crossbill","https://en.wikipedia.org/wiki/White-winged_crossbill"],"checked":"2026-10","sig":"8914e529"}
 },
 "sgrouse": {
  "name": {"text":"Spruce grouse","src":["https://www.audubon.org/field-guide/bird/spruce-grouse"],"checked":"2026-10","sig":"71ec2389"},
  "sci": {"text":"Canachites canadensis","src":["https://www.audubon.org/field-guide/bird/spruce-grouse","https://en.wikipedia.org/wiki/Spruce_grouse"],"checked":"2026-10","sig":"e7d692d2"},
  "wiki": "Spruce_grouse",
  "pl": "Spruce grouse",
  "range": {"text":"Boreal forests of Canada, Alaska and the northernmost US","src":["https://en.wikipedia.org/wiki/Spruce_grouse","https://www.audubon.org/field-guide/bird/spruce-grouse"],"checked":"2026-10","sig":"268f606f"},
  "fact": {"text":"All winter, spruce grouse live almost entirely on conifer needles.","src":["https://www.audubon.org/field-guide/bird/spruce-grouse","https://en.wikipedia.org/wiki/Spruce_grouse"],"checked":"2026-10","sig":"1fb745f8"},
  "marks": {"text":"Chunky ground bird. Male: gray, black throat and breast edged white, red comb over the eye. Female: mottled brown.","src":["https://www.audubon.org/field-guide/bird/spruce-grouse","https://en.wikipedia.org/wiki/Spruce_grouse"],"checked":"2026-10","sig":"9821fddd"}
 },
 "junco": {
  "name": {"text":"Dark-eyed junco","src":["https://www.audubon.org/field-guide/bird/dark-eyed-junco"],"checked":"2026-10","sig":"0d1ebe13"},
  "sci": {"text":"Junco hyemalis","src":["https://www.audubon.org/field-guide/bird/dark-eyed-junco","https://birdsoftheworld.org/bow/species/daejun/cur/introduction"],"checked":"2026-10","sig":"6f8c163c"},
  "wiki": "Dark-eyed_junco",
  "range": {"text":"Across North America; breeds in northern and mountain forests","src":["https://birdsoftheworld.org/bow/species/daejun/cur/introduction","https://www.audubon.org/field-guide/bird/dark-eyed-junco"],"checked":"2026-10","sig":"1d47b59c"},
  "fact": {"text":"Juncos flash white outer tail feathers when they fly up from the ground.","src":["https://birdsoftheworld.org/bow/species/daejun/cur/introduction","https://en.wikipedia.org/wiki/Dark-eyed_junco"],"checked":"2026-10","sig":"1b11f31e"},
  "marks": {"text":"Slate-gray hood and back, clean white belly, pale pink bill, white outer tail feathers.","src":["https://en.wikipedia.org/wiki/Dark-eyed_junco","https://www.audubon.org/field-guide/bird/dark-eyed-junco"],"checked":"2026-10","sig":"ac00dfc4","note":"Describes the eastern slate-colored form; females are browner and western forms differ."}
 },
 "stjay": {
  "name": {"text":"Steller's jay","src":["https://www.audubon.org/field-guide/bird/stellers-jay"],"checked":"2026-10","sig":"fc731423"},
  "sci": {"text":"Cyanocitta stelleri","src":["https://www.audubon.org/field-guide/bird/stellers-jay","https://birdsoftheworld.org/bow/species/stejay/cur/introduction"],"checked":"2026-10","sig":"ed42e5cf"},
  "wiki": "Steller%27s_jay",
  "range": {"text":"Western North America, from Alaska to Central America","src":["https://birdsoftheworld.org/bow/species/stejay/cur/introduction","https://en.wikipedia.org/wiki/Steller%27s_jay"],"checked":"2026-10","sig":"43a256a8"},
  "fact": {"text":"Steller's jays can mimic the screams of hawks.","src":["https://www.audubon.org/field-guide/bird/stellers-jay","https://en.wikipedia.org/wiki/Steller%27s_jay"],"checked":"2026-10","sig":"fa72b9ad"},
  "marks": {"text":"Black crested head with pale forehead streaks, sooty back, deep blue wings, belly and tail.","src":["https://www.audubon.org/field-guide/bird/stellers-jay","https://en.wikipedia.org/wiki/Steller%27s_jay"],"checked":"2026-10","sig":"0d59a0f3"}
 },
 "pygnut": {
  "name": {"text":"Pygmy nuthatch","src":["https://www.audubon.org/field-guide/bird/pygmy-nuthatch"],"checked":"2026-10","sig":"5b2493f6"},
  "sci": {"text":"Sitta pygmaea","src":["https://www.audubon.org/field-guide/bird/pygmy-nuthatch"],"checked":"2026-10","sig":"a29fa1c4"},
  "wiki": "Pygmy_nuthatch",
  "range": {"text":"Pine forests of the western US and Mexico","src":["https://en.wikipedia.org/wiki/Pygmy_nuthatch","https://www.audubon.org/field-guide/bird/pygmy-nuthatch"],"checked":"2026-10","sig":"2f93ce44"},
  "fact": {"text":"On cold nights, dozens of pygmy nuthatches may huddle together in one tree hole.","src":["https://home.nps.gov/romo/learn/nature/pygmy_nuthatch.htm","https://en.wikipedia.org/wiki/Pygmy_nuthatch"],"checked":"2026-10","sig":"b22a808b"},
  "marks": {"text":"Tiny. Gray-brown cap down to the eye, dark eye line, pale nape spot, creamy underparts.","src":["https://www.audubon.org/field-guide/bird/pygmy-nuthatch","https://home.nps.gov/romo/learn/nature/pygmy_nuthatch.htm"],"checked":"2026-10","sig":"5b8367eb"}
 },
 "mtnchick": {
  "name": {"text":"Mountain chickadee","src":["https://www.audubon.org/field-guide/bird/mountain-chickadee"],"checked":"2026-10","sig":"ecf5eaaf"},
  "sci": {"text":"Poecile gambeli","src":["https://www.audubon.org/field-guide/bird/mountain-chickadee"],"checked":"2026-10","sig":"3f5b62e1"},
  "wiki": "Mountain_chickadee",
  "range": {"text":"Mountain conifer forests of western North America","src":["https://www.audubon.org/field-guide/bird/mountain-chickadee","https://en.wikipedia.org/wiki/Mountain_chickadee"],"checked":"2026-10","sig":"3a848d7c"},
  "fact": {"text":"Its white eyebrow is the quickest way to tell it from other chickadees.","src":["https://www.audubon.org/field-guide/bird/mountain-chickadee","https://en.wikipedia.org/wiki/Mountain_chickadee"],"checked":"2026-10","sig":"0b81748a"},
  "marks": {"text":"Black cap split by a white eyebrow, black bib, white cheeks, gray back.","src":["https://en.wikipedia.org/wiki/Mountain_chickadee","https://www.audubon.org/field-guide/bird/mountain-chickadee"],"checked":"2026-10","sig":"5ec5857d"}
 },
 "acornwp": {
  "name": {"text":"Acorn woodpecker","src":["https://www.audubon.org/field-guide/bird/acorn-woodpecker"],"checked":"2026-10","sig":"b1f37315"},
  "sci": {"text":"Melanerpes formicivorus","src":["https://www.audubon.org/field-guide/bird/acorn-woodpecker"],"checked":"2026-10","sig":"0913995c"},
  "wiki": "Acorn_woodpecker",
  "range": {"text":"Oak and pine-oak woodlands from the western US through Mexico and Central America to Colombia","src":["https://birdsoftheworld.org/bow/species/acowoo/cur/introduction","https://www.audubon.org/field-guide/bird/acorn-woodpecker"],"checked":"2026-10","sig":"90026491"},
  "fact": {"text":"Families store thousands of acorns in holes drilled into one \"granary\" tree.","src":["https://www.audubon.org/field-guide/bird/acorn-woodpecker","https://en.wikipedia.org/wiki/Acorn_woodpecker"],"checked":"2026-10","sig":"d8cdcccd"},
  "marks": {"text":"Clown face: black chin, white forehead and throat ring, red crown, pale eye. Glossy black back, white belly.","src":["https://www.audubon.org/field-guide/bird/acorn-woodpecker","https://en.wikipedia.org/wiki/Acorn_woodpecker"],"checked":"2026-10","sig":"4c85d2bd"}
 },
 "wbluebird": {
  "name": {"text":"Western bluebird","src":["https://www.audubon.org/field-guide/bird/western-bluebird"],"checked":"2026-10","sig":"e386586a"},
  "sci": {"text":"Sialia mexicana","src":["https://www.audubon.org/field-guide/bird/western-bluebird"],"checked":"2026-10","sig":"07873a06"},
  "wiki": "Western_bluebird",
  "range": {"text":"Western United States and Mexico","src":["https://birdsoftheworld.org/bow/species/wesblu/cur/introduction"],"checked":"2026-10","sig":"7975cc28"},
  "fact": {"text":"Western bluebirds nest in old woodpecker holes.","src":["https://www.audubon.org/field-guide/bird/western-bluebird"],"checked":"2026-10","sig":"39311e98"},
  "marks": {"text":"Male: deep blue head, throat and wings, rusty breast and back patch, gray belly. Female is grayer.","src":["https://www.audubon.org/field-guide/bird/western-bluebird","https://birdsoftheworld.org/bow/species/wesblu/cur/introduction"],"checked":"2026-10","sig":"bd1f4abb"}
 },
 "rfwarbler": {
  "name": {"text":"Red-faced warbler","src":["https://www.audubon.org/field-guide/bird/red-faced-warbler"],"checked":"2026-10","sig":"ae45bd9c"},
  "sci": {"text":"Cardellina rubrifrons","src":["https://www.audubon.org/field-guide/bird/red-faced-warbler"],"checked":"2026-10","sig":"c72aecb7"},
  "wiki": "Red-faced_warbler",
  "range": {"text":"Mountains of Arizona, New Mexico and Mexico in summer; Mexico and Central America in winter","src":["https://birdsoftheworld.org/bow/species/refwar/cur/introduction","https://en.wikipedia.org/wiki/Red-faced_warbler"],"checked":"2026-10","sig":"41254f39"},
  "fact": {"text":"It hides its nest on the ground, tucked under a plant, rock or log.","src":["https://www.audubon.org/field-guide/bird/red-faced-warbler","https://en.wikipedia.org/wiki/Red-faced_warbler"],"checked":"2026-10","sig":"9c426a48"},
  "marks": {"text":"Bright red face and throat, black helmet, white nape spot, gray back, white rump.","src":["https://en.wikipedia.org/wiki/Red-faced_warbler","https://www.audubon.org/field-guide/bird/red-faced-warbler"],"checked":"2026-10","sig":"cddb9831"}
 },
 "eujay": {
  "name": {"text":"Eurasian jay","src":["https://en.wikipedia.org/wiki/Eurasian_jay"],"checked":"2026-10","sig":"aa0031d0"},
  "sci": {"text":"Garrulus glandarius","src":["https://www.rspb.org.uk/birds-and-wildlife/jay","https://www.bto.org/understanding-birds/birdfacts/jay"],"checked":"2026-10","sig":"507d7888"},
  "wiki": "Eurasian_jay",
  "range": {"text":"Europe, North Africa and Asia","src":["https://en.wikipedia.org/wiki/Eurasian_jay","https://www.oiseaux-birds.com/card-eurasian-jay.html"],"checked":"2026-10","sig":"f5a21ba1"},
  "fact": {"text":"One Eurasian jay can bury thousands of acorns in autumn, planting new oak woods.","src":["https://www.wythamwoods.ox.ac.uk/article/jay-garrulus-glandarius","https://en.wikipedia.org/wiki/Eurasian_jay"],"checked":"2026-10","sig":"a8c5faf3"},
  "marks": {"text":"Pinkish-brown body, black moustache, streaked crown, pale eye, bright blue barred wing patch.","src":["https://www.oiseaux-birds.com/card-eurasian-jay.html","https://en.wikipedia.org/wiki/Eurasian_jay"],"checked":"2026-10","sig":"04ab6e1e"}
 },
 "crestit": {
  "name": {"text":"Crested tit","src":["https://www.bto.org/understanding-birds/birdfacts/crested-tit","https://www.rspb.org.uk/birds-and-wildlife/crested-tit"],"checked":"2026-10","sig":"0a44f3b6"},
  "sci": {"text":"Lophophanes cristatus","src":["https://www.bto.org/understanding-birds/birdfacts/crested-tit","https://www.rspb.org.uk/birds-and-wildlife/crested-tit"],"checked":"2026-10","sig":"3e3fee2c"},
  "wiki": "European_crested_tit",
  "range": {"text":"Conifer forests of Europe; in Britain only the Scottish Highlands","src":["https://www.bto.org/understanding-birds/birdfacts/crested-tit","https://treesforlife.org.uk/forest/species-profiles/crested-tit/"],"checked":"2026-10","sig":"b8226624"},
  "fact": {"text":"Crested tits nest in rotten pine stumps, and sometimes in old red squirrel dreys.","src":["https://treesforlife.org.uk/forest/species-profiles/crested-tit/","https://www.bto.org/understanding-birds/birdfacts/crested-tit"],"checked":"2026-10","sig":"1f8d050e","note":"Trees for Life mentions red squirrel dreys; BTO and RSPB do not."},
  "marks": {"text":"Black-and-white speckled crest, white face with a black C-shaped line, black bib and collar, brown back.","src":["https://www.bto.org/understanding-birds/birdfacts/crested-tit","https://treesforlife.org.uk/forest/species-profiles/crested-tit/"],"checked":"2026-10","sig":"809b962c"}
 },
 "gspot": {
  "name": {"text":"Great spotted woodpecker","src":["https://www.rspb.org.uk/birds-and-wildlife/great-spotted-woodpecker"],"checked":"2026-10","sig":"f34e22c0"},
  "sci": {"text":"Dendrocopos major","src":["https://www.rspb.org.uk/birds-and-wildlife/great-spotted-woodpecker","https://www.bto.org/understanding-birds/birdfacts/great-spotted-woodpecker"],"checked":"2026-10","sig":"08c5ec66"},
  "wiki": "Great_spotted_woodpecker",
  "range": {"text":"Europe, North Africa and across temperate Asia","src":["https://en.wikipedia.org/wiki/Great_spotted_woodpecker"],"checked":"2026-10","sig":"42389bb0"},
  "fact": {"text":"It wedges pine cones into a bark \"anvil\" to pick out the seeds.","src":["https://naturblick.museumfuernaturkunde.berlin/species/portrait/88?lang=en","https://en.wikipedia.org/wiki/Great_spotted_woodpecker"],"checked":"2026-10","sig":"45e50fe3"},
  "marks": {"text":"Black and white with big white shoulder ovals and bright red under the tail. Males have a red nape patch.","src":["https://www.rspb.org.uk/birds-and-wildlife/great-spotted-woodpecker","https://en.wikipedia.org/wiki/Great_spotted_woodpecker"],"checked":"2026-10","sig":"6c62c74e"}
 },
 "coaltit": {
  "name": {"text":"Coal tit","src":["https://www.rspb.org.uk/birds-and-wildlife/coal-tit"],"checked":"2026-10","sig":"71ecb6f0"},
  "sci": {"text":"Periparus ater","src":["https://www.rspb.org.uk/birds-and-wildlife/coal-tit","https://www.bto.org/understanding-birds/birdfacts/coal-tit"],"checked":"2026-10","sig":"a5fadea4"},
  "wiki": "Coal_tit",
  "range": {"text":"Europe, North Africa and Asia","src":["https://en.wikipedia.org/wiki/Coal_tit","https://birdsoftheworld.org/bow/species/coatit2/cur/introduction"],"checked":"2026-10","sig":"f5a21ba1"},
  "fact": {"text":"Coal tits hide spruce and pine seeds to eat later, just like squirrels.","src":["https://ntnu.no/ojs/index.php/DKNVS_skrifter/article/view/1449","https://highlifehighlandranger.substack.com/p/the-art-of-scatter-hoarding"],"checked":"2026-10","sig":"1e23b5af","note":"Source names conifer seeds generally, not spruce and pine specifically."},
  "marks": {"text":"Black cap and bib, white cheeks, white patch on the nape, two white wing bars.","src":["https://www.bto.org/understanding-birds/birdfacts/coal-tit","https://en.wikipedia.org/wiki/Coal_tit"],"checked":"2026-10","sig":"7195a11c"}
 },
 "robin": {
  "name": {"text":"European robin","src":["https://en.wikipedia.org/wiki/European_robin"],"checked":"2026-10","sig":"0845f5c4"},
  "sci": {"text":"Erithacus rubecula","src":["https://www.rspb.org.uk/birds-and-wildlife/robin","https://www.bto.org/understanding-birds/birdfacts/robin"],"checked":"2026-10","sig":"2b3eb209"},
  "wiki": "European_robin",
  "range": {"text":"Europe, western Asia and North Africa","src":["https://en.wikipedia.org/wiki/European_robin"],"checked":"2026-10","sig":"4be3baff"},
  "fact": {"text":"Robins sing all winter to defend their territory.","src":["https://www.rspb.org.uk/birds-and-wildlife/robin","https://en.wikipedia.org/wiki/European_robin"],"checked":"2026-10","sig":"bd3731fc"},
  "marks": {"text":"Round; brown above, orange face and breast edged with gray, white belly.","src":["https://en.wikipedia.org/wiki/European_robin","https://www.rspb.org.uk/birds-and-wildlife/robin"],"checked":"2026-10","sig":"2eb61527"}
 },
 "chaffinch": {
  "name": {"text":"Common chaffinch","src":["https://en.wikipedia.org/wiki/Common_chaffinch","https://www.bird-lens.com/2023/11/04/the-common-chaffinch-will-be-split-in-5-species/"],"checked":"2026-10","sig":"646c819d"},
  "sci": {"text":"Fringilla coelebs","src":["https://www.bto.org/understanding-birds/birdfacts/chaffinch","https://www.bird-lens.com/2023/11/04/the-common-chaffinch-will-be-split-in-5-species/"],"checked":"2026-10","sig":"ac90ad39"},
  "wiki": "Common_chaffinch",
  "pl": "Common chaffinches",
  "range": {"text":"Europe and western Asia, east into Siberia","src":["https://www.bird-lens.com/2023/11/04/the-common-chaffinch-will-be-split-in-5-species/","https://en.wikipedia.org/wiki/Common_chaffinch"],"checked":"2026-10","sig":"be95694f","note":"North African birds were split off as the African chaffinch (Fringilla spodiogenys) by the IOC in 2023."},
  "fact": {"text":"Its song speeds up and tumbles down the scale, ending in a flourish.","src":["https://www.montwt.co.uk/node/2653","https://www.bto.org/understanding-birds/birdfacts/chaffinch"],"checked":"2026-10","sig":"f11c2811"},
  "marks": {"text":"Bold white shoulder and wing bar. Male: blue-gray crown, rosy face and breast, chestnut back, green rump. Female is plainer and browner.","src":["https://en.wikipedia.org/wiki/Common_chaffinch","https://www.rspb.org.uk/birds-and-wildlife/chaffinch"],"checked":"2026-10","sig":"ece42a72"}
 },
 "varthrush": {
  "name": {"text":"Varied thrush","src":["https://www.audubon.org/field-guide/bird/varied-thrush"],"checked":"2026-10","sig":"f3032850"},
  "sci": {"text":"Ixoreus naevius","src":["https://www.audubon.org/field-guide/bird/varied-thrush"],"checked":"2026-10","sig":"c3eb487b"},
  "wiki": "Varied_thrush",
  "range": {"text":"Alaska and western Canada to northern California and the northern Rockies; some winter south to California","src":["https://birdsoftheworld.org/bow/species/varthr/cur/introduction","https://en.wikipedia.org/wiki/Varied_thrush"],"checked":"2026-10","sig":"c180ead5"},
  "fact": {"text":"Its song is a long, eerie, buzzy whistle, then a pause and another on a different pitch.","src":["https://www.audubon.org/field-guide/bird/varied-thrush","https://birdsoftheworld.org/bow/species/varthr/cur/introduction"],"checked":"2026-10","sig":"8e6b9196"},
  "marks": {"text":"Male: slate-blue back, orange throat and breast crossed by a black band, orange eyebrow and wing bars. Female is browner.","src":["https://www.audubon.org/field-guide/bird/varied-thrush","https://en.wikipedia.org/wiki/Varied_thrush"],"checked":"2026-10","sig":"e7c62f0a"}
 },
 "chbchick": {
  "name": {"text":"Chestnut-backed chickadee","src":["https://www.audubon.org/field-guide/bird/chestnut-backed-chickadee"],"checked":"2026-10","sig":"d5c96b3b"},
  "sci": {"text":"Poecile rufescens","src":["https://www.audubon.org/field-guide/bird/chestnut-backed-chickadee"],"checked":"2026-10","sig":"c8525065"},
  "wiki": "Chestnut-backed_chickadee",
  "range": {"text":"Pacific coast from southern Alaska to central California, plus a small population in the northern Rockies","src":["https://birdsoftheworld.org/bow/species/chbchi/cur/introduction","https://fieldguide.mt.gov/speciesDetail.aspx?elcode=ABPAW01070"],"checked":"2026-10","sig":"0dda68de"},
  "fact": {"text":"It feeds higher in the conifers than other chickadees and often travels in mixed flocks.","src":["https://www.nationalgeographic.com/animals/birds/facts/chestnut-backed-chickadee","https://birdsoftheworld.org/bow/species/chbchi/cur/introduction"],"checked":"2026-10","sig":"dee1432b"},
  "marks": {"text":"Sooty-brown cap, black bib, white cheeks, rich chestnut back and flanks.","src":["https://www.nationalgeographic.com/animals/birds/facts/chestnut-backed-chickadee","https://www.audubon.org/field-guide/bird/chestnut-backed-chickadee"],"checked":"2026-10","sig":"9ef8f02c"}
 },
 "pileated": {
  "name": {"text":"Pileated woodpecker","src":["https://www.audubon.org/field-guide/bird/pileated-woodpecker"],"checked":"2026-10","sig":"17c1599d"},
  "sci": {"text":"Dryocopus pileatus","src":["https://www.audubon.org/field-guide/bird/pileated-woodpecker","https://en.wikipedia.org/wiki/Pileated_woodpecker"],"checked":"2026-10","sig":"ff2114ba","note":"BirdLife/HBW use Hylatomus pileatus; AOS and IOC still use Dryocopus pileatus."},
  "wiki": "Pileated_woodpecker",
  "range": {"text":"Forests across Canada, the eastern US, the northern Rockies and the Pacific coast to California","src":["https://en.wikipedia.org/wiki/Pileated_woodpecker","https://birdsoftheworld.org/bow/species/pilwoo/cur/introduction"],"checked":"2026-10","sig":"00a63d56"},
  "fact": {"text":"It chisels big rectangular holes hunting carpenter ants, and its old holes become homes for owls and flying squirrels.","src":["https://www.audubon.org/field-guide/bird/pileated-woodpecker","https://birdsoftheworld.org/bow/species/pilwoo/cur/introduction","https://pixcams.com/the-giant-woodpecker-of-our-woods-a-closer-look-at-the-pileated/"],"checked":"2026-10","sig":"8c49646c","note":"The flying-squirrel detail partly rests on a nature-camera site; worth a stronger source."},
  "marks": {"text":"Crow-sized and black, with a flaming red crest, white stripes across the face and down the neck, and a red moustache (male).","src":["https://www.audubon.org/field-guide/bird/pileated-woodpecker","https://en.wikipedia.org/wiki/Pileated_woodpecker"],"checked":"2026-10","sig":"c719840c"}
 },
 "pacwren": {
  "name": {"text":"Pacific wren","src":["https://www.audubon.org/field-guide/bird/pacific-wren"],"checked":"2026-10","sig":"afb74883"},
  "sci": {"text":"Troglodytes pacificus","src":["https://www.audubon.org/field-guide/bird/pacific-wren"],"checked":"2026-10","sig":"f553b360"},
  "wiki": "Pacific_wren",
  "range": {"text":"Pacific coast from Alaska to California, and inland to the northern Rockies","src":["https://birdsoftheworld.org/bow/species/pacwre1/cur/introduction","https://en.wikipedia.org/wiki/Pacific_wren"],"checked":"2026-10","sig":"7faa0bf0"},
  "fact": {"text":"One of the smallest birds in its forest, with one of the longest, most complex songs.","src":["https://klamathbird.org/callnote/bird-bio-pacific-wren/","https://en.wikipedia.org/wiki/Pacific_wren"],"checked":"2026-10","sig":"37dcbeee"},
  "marks": {"text":"Tiny, round and dark brown with fine barring, a pale eyebrow and a stubby tail often cocked upright.","src":["https://en.wikipedia.org/wiki/Pacific_wren","https://klamathbird.org/callnote/bird-bio-pacific-wren/","https://www.audubon.org/field-guide/bird/pacific-wren"],"checked":"2026-10","sig":"e962bd48"}
 },
 "varitit": {
  "name": {"text":"Varied tit","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://kotobank.jp/word/%E3%83%A4%E3%83%9E%E3%82%AC%E3%83%A9-3173779"],"checked":"2026-10","sig":"9fbc0bb2"},
  "sci": {"text":"Sittiparus varius","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx"],"checked":"2026-10","sig":"2400d12b","note":"IOC v15.2 puts it in the genus Sittiparus. Older Japanese sources (the biodic.go.jp 6th survey atlas and Bird Research News 2005) still say Parus varius. IOC treats Owston's Tit (S. owstoni) and Iriomote Tit (S. olivaceus) as separate species; the Honshu birds are the nominate subspecies varius."},
  "wiki": "Varied_tit",
  "range": {"text":"Japan, Korea, northeast China and the southern Kuril Islands","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx"],"checked":"2026-10","sig":"303c6535"},
  "fact": {"text":"In autumn it hides acorns and seeds in bark cracks, logs and soil; some uneaten seeds may sprout.","src":["https://www.qsr.mlit.go.jp/yamakuni/birds/bird/yamagara.html","https://www.jstage.jst.go.jp/article/jjo1986/51/2/51_2_101/_article/-char/en","https://kotobank.jp/word/%E3%83%A4%E3%83%9E%E3%82%AC%E3%83%A9-3173779"],"checked":"2026-10","sig":"2ccf1a19"},
  "marks": {"text":"Black cap and bib, creamy face, a cream stripe down the nape, chestnut belly and upper back, blue-gray wings and tail.","src":["https://www.bird-research.jp/1/seitai/2_z_varius.pdf","https://kotobank.jp/word/%E3%83%A4%E3%83%9E%E3%82%AC%E3%83%A9-3173779","https://www.qsr.mlit.go.jp/yamakuni/birds/bird/yamagara.html","https://en.wikipedia.org/wiki/Varied_tit"],"checked":"2026-10","sig":"1d6411ab"}
 },
 "eunut": {
  "name": {"text":"Eurasian nuthatch","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://birdsoftheworld.org/bow/species/eurnut2/cur/introduction"],"checked":"2026-10","sig":"8b34263c"},
  "sci": {"text":"Sitta europaea","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://www.biodic.go.jp/reports2/6th/6_bird_species/pdf/gojuukara.pdf"],"checked":"2026-10","sig":"5b40c9f6","note":"Subspecies check: IOC v15.2 gives Honshu to northern Kyushu as subspecies hondoensis, Hokkaido and the southern Kurils as clara, and southern Kyushu as roseilia. Subspecies amurensis is mainland only (Russian Far East, NE China, Korea) and asiatica is Siberian, so neither is the Japanese bird. The card describes the Honshu birds (hondoensis): white underparts with orange to chestnut flanks and undertail. IOC treats Siberian Nuthatch (S. arctica) as a separate species."},
  "wiki": "Eurasian_nuthatch",
  "range": {"text":"Across Europe and Asia to Japan","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://birdsoftheworld.org/bow/species/eurnut2/cur/introduction","https://www.biodic.go.jp/reports2/6th/6_bird_species/pdf/gojuukara.pdf"],"checked":"2026-10","sig":"e4994fbb"},
  "fact": {"text":"It walks headfirst down tree trunks and wedges spare seeds into bark cracks to eat later.","src":["https://www.pref.niigata.lg.jp/sec/kankyotaisaku/1356908861478.html","https://kotobank.jp/word/%E3%82%B4%E3%82%B8%E3%83%A5%E3%82%A6%E3%82%AB%E3%83%A9"],"checked":"2026-10","sig":"0fb5b87e"},
  "marks": {"text":"Blue-gray above, bold black stripe through the eye, white face and belly, orange-chestnut flanks and undertail, long sharp bill.","src":["https://www.pref.kyoto.jp/kankyo/rdb/bio/db/bird0096.html","https://kotobank.jp/word/%E3%82%B4%E3%82%B8%E3%83%A5%E3%82%A6%E3%82%AB%E3%83%A9","https://tadami-buna.jp/img/file80.pdf","https://birdsoftheworld.org/bow/species/eurnut2/cur/introduction","https://en.wikipedia.org/wiki/Eurasian_nuthatch"],"checked":"2026-10","sig":"5e06607a"}
 },
 "jgreenwp": {
  "name": {"text":"Japanese green woodpecker","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx"],"checked":"2026-10","sig":"78c9501c"},
  "sci": {"text":"Picus awokera","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://www.biodic.go.jp/reports2/6th/6_bird_species/pdf/aogera.pdf"],"checked":"2026-10","sig":"326ebfd8","note":"IOC v15.2 uses the English name 'Japanese Green Woodpecker'. Birds of the World and older lists call it 'Japanese Woodpecker'. IOC lists 3 subspecies: awokera (Honshu), horii (Kyushu, Shikoku) and takatsukasae (Tanegashima, Yakushima)."},
  "wiki": "Japanese_green_woodpecker",
  "range": {"text":"Honshu, Shikoku and Kyushu, Japan","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://www.biodic.go.jp/reports2/6th/6_bird_species/pdf/aogera.pdf"],"checked":"2026-10","sig":"74914a4d"},
  "fact": {"text":"Found only in Japan, it often hunts ants on the ground and feasts on nuts and berries in autumn.","src":["https://www.biodic.go.jp/reports2/6th/6_bird_species/pdf/aogera.pdf","https://kotobank.jp/word/%E3%82%A2%E3%82%AA%E3%82%B2%E3%83%A9-3140442","https://www.pref.niigata.lg.jp/sec/kankyotaisaku/1356908745437.html"],"checked":"2026-10","sig":"0e4c06bd"},
  "marks": {"text":"Male: red crown, red-and-black moustache, gray face and breast, yellow-green back, black V-bars on a pale belly. Female has red only on the nape.","src":["https://kotobank.jp/word/%E3%82%A2%E3%82%AA%E3%82%B2%E3%83%A9-3140442","https://www.pref.niigata.lg.jp/sec/kankyotaisaku/1356908745437.html","https://en.wikipedia.org/wiki/Japanese_green_woodpecker"],"checked":"2026-10","sig":"c26f3543"}
 },
 "narcfly": {
  "name": {"text":"Narcissus flycatcher","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://avifauna.hkbws.org.hk/species/0410/050100"],"checked":"2026-10","sig":"d0062415"},
  "sci": {"text":"Ficedula narcissina","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://www.biodic.go.jp/reports2/6th/6_bird_species/pdf/kibitaki.pdf"],"checked":"2026-10","sig":"9c2eb507","note":"IOC treats Ryukyu Flycatcher (F. owstoni) and Green-backed Flycatcher (F. elisae) as separate species. The biodic.go.jp atlas (2004), written before those splits, says Ryukyu birds are resident 'Kibitaki'."},
  "wiki": "Narcissus_flycatcher",
  "range": {"text":"Breeds in Japan, Sakhalin and the Kurils; winters in the Philippines and Borneo","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx"],"checked":"2026-10","sig":"c5f7fca0"},
  "fact": {"text":"It darts out from a branch to snatch flying insects in midair, then returns to its perch.","src":["https://www.biodic.go.jp/reports2/6th/6_bird_species/pdf/kibitaki.pdf","https://www.qsr.mlit.go.jp/yamakuni/birds/bird/kibitaki.html","https://kotobank.jp/word/%E3%82%AD%E3%83%93%E3%82%BF%E3%82%AD-51434"],"checked":"2026-10","sig":"53035726"},
  "marks": {"text":"Male: black above with a yellow-orange eyebrow, orange throat fading to yellow, yellow rump and a white wing patch. Female is olive-brown.","src":["https://avifauna.hkbws.org.hk/species/0410/050100","https://kotobank.jp/word/%E3%82%AD%E3%83%93%E3%82%BF%E3%82%AD-51434","https://www.qsr.mlit.go.jp/yamakuni/birds/bird/kibitaki.html"],"checked":"2026-10","sig":"24b62c4b"}
 },
 "jrobin": {
  "name": {"text":"Japanese robin","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://avifauna.hkbws.org.hk/species/0400/049200"],"checked":"2026-10","sig":"cd6e0509"},
  "sci": {"text":"Larvivora akahige","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx"],"checked":"2026-10","sig":"e6d037f2","note":"Formerly Erithacus akahige; the biodic.go.jp atlas and Oita Red Data Book still use that name. IOC treats it as monotypic and treats Izu Robin (L. tanensis) of the Izu Islands as a separate species. Its Japanese name komadori (駒鳥) is said to come from the song sounding like a horse neighing."},
  "wiki": "Japanese_robin",
  "range": {"text":"Breeds in Japan (Hokkaido to Kyushu), Sakhalin and the Kurils; winters in southern China","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://www.biodic.go.jp/reports2/6th/6_bird_species/pdf/komadori.pdf"],"checked":"2026-10","sig":"4b1bafb5"},
  "fact": {"text":"Its song sounds like a horse whinnying, which gave it its Japanese name, komadori: horse bird.","src":["https://kotobank.jp/word/%E3%82%B3%E3%83%9E%E3%83%89%E3%83%AA-3151920"],"checked":"2026-10","sig":"376a03f6","note":"Kotobank's Britannica entry states the name origin; Nipponica says it 'is said to be' the origin. Song written ヒンカラララ."},
  "marks": {"text":"Male: rufous-orange face, throat and tail, brown back, a thin dark band under the orange, gray flanks, white belly. Female is duller.","src":["https://avifauna.hkbws.org.hk/species/0400/049200","https://kotobank.jp/word/%E3%82%B3%E3%83%9E%E3%83%89%E3%83%AA-3151920"],"checked":"2026-10","sig":"873a33a5"}
 },
 "rbtoucan": {
  "name": {"text":"Red-breasted toucan","src":["https://www.worldbirdnames.org/new/ioc-lists/master-list-2/","https://worldbirdnames.org/master_ioc_list_v15.2.xlsx"],"checked":"2026-10","sig":"9cb35610","note":"IOC v15.2 changed the English name from Green-billed Toucan to Red-breasted Toucan. Portuguese: tucano-de-bico-verde. Argentina/Paraguay: tucán pico verde."},
  "sci": {"text":"Ramphastos dicolorus","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://birdsoftheworld.org/bow/species/rebtou2/cur/introduction"],"checked":"2026-10","sig":"8495e651"},
  "wiki": "Red-breasted_toucan",
  "range": {"text":"Southeastern and southern Brazil, eastern Paraguay, northeastern Argentina","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://birdsoftheworld.org/bow/species/rebtou2/cur/introduction","https://d3nehc6yl9qzo4.cloudfront.net/downloads/guia_de_aves_mataatlantica_wwfbrasil.pdf"],"checked":"2026-10","sig":"8b1b3eee","note":"Habitat: Large canopy fruit-eater recorded in araucaria forest (Floresta Ombrófila Mista) remnants in Paraná. This is the weakest habitat link of the six. The Colombo (PR) park management plan cites Pichorim & Boçon (1996), who recorded R. dicolorus and the azure jay among large canopy frugivores and omnivores in araucaria forest remnants at Rio Azul and Mallet, PR. BOW describes the species as a montane-forest toucan. I could not find a primary source that names it in an araucaria-forest species table. Bispo & Scherer-Neto 2010 (a 10 ha fragment) do not list it, and Franz et al. 2014 (RS araucaria sites) suspect their records were released birds. WikiAves, which would probably settle this, is behind a Cloudflare human check. Habitat sources: https://portal.colombo.pr.gov.br/downloads/Encarte_II_Analise%20Regional_PNMGB_FINAL.pdf Also: a UCLA field report from the Imbuias reserve in the Araucaria Moist Forest ecoregion pictures a red-breasted toucan sitting on an araucaria (https://www.ioes.ucla.edu/wp-content/uploads/2016/12/Giorgi-F07-fieldreport-FIN.pdf)."},
  "fact": {"text":"Its huge bill is light and spongy inside, so it reaches fruit on twigs too thin to hold the bird.","src":["https://d3nehc6yl9qzo4.cloudfront.net/downloads/guia_de_aves_mataatlantica_wwfbrasil.pdf"],"checked":"2026-10","sig":"d2dad754"},
  "marks": {"text":"Black, with a huge pale-green bill, a yellow-orange throat, a red belly and rump, and red skin around the eye.","src":["https://en.wikipedia.org/wiki/Red-breasted_toucan","https://birdsoftheworld.org/bow/species/rebtou2/cur/introduction"],"checked":"2026-10","sig":"37b4f66e"}
 },
 "azjay": {
  "name": {"text":"Azure jay","src":["https://www.worldbirdnames.org/new/ioc-lists/master-list-2/","https://worldbirdnames.org/master_ioc_list_v15.2.xlsx"],"checked":"2026-10","sig":"dddc5e45","note":"Portuguese: gralha-azul. The traditional symbol bird of Paraná."},
  "sci": {"text":"Cyanocorax coeruleus","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://en.wikipedia.org/wiki/Azure_jay"],"checked":"2026-10","sig":"0acdb884","note":"IOC v15.2 revised the spelling from caeruleus to coeruleus, following AviList 2025. Most older Brazilian literature and BOW use Cyanocorax caeruleus."},
  "wiki": "Azure_jay",
  "range": {"text":"Southern Brazil, northeastern Argentina, eastern Paraguay","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://en.wikipedia.org/wiki/Azure_jay"],"checked":"2026-10","sig":"06a3b437","note":"Habitat: Humid forest, especially forest dominated by Araucaria angustifolia. Recorded in araucaria forest remnants in Paraná and Rio Grande do Sul and in araucaria plantations in Santa Catarina. Habitat sources: https://en.wikipedia.org/wiki/Azure_jay, https://www.redalyc.org/pdf/1991/199115789012.pdf, https://anais-siiepe.ufpel.edu.br/2015/CB_02830.pdf, https://www.cambridge.org/core/product/D2F5A644A0081F891082F138E06BECAB/core-reader Wikipedia says its presence in Paraguay is disputed."},
  "fact": {"text":"It eats so many pinhão seeds that Paraná legends say this jay plants the araucaria forest.","src":["https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1140113/1/Especies-Arboreas-Brasileiras-vol-1-Pinheiro-do-Parana.pdf","https://en.wikipedia.org/wiki/Azure_jay","https://birdsoftheworld.org/bow/species/azujay1/cur/introduction"],"checked":"2026-10","sig":"de734f78","note":"I worded this as legend on purpose. Embrapa (Carvalho, Espécies Arbóreas Brasileiras) says Paraná tradition treats the azure jay as the main pinhão disperser, but that it rarely comes to the ground. The bird documented hiding pinhão in the soil is the plush-crested jay (Cyanocorax chrysops, Anjos). Popular sources say the azure jay buries pinhão, but I found no primary study for that, so the card does not claim it."},
  "marks": {"text":"Bright cobalt-blue jay with a black head, throat and upper breast, and a short bushy crest just above the bill. Sexes alike.","src":["https://en.wikipedia.org/wiki/Azure_jay","https://birdsoftheworld.org/bow/species/azujay1/cur/introduction"],"checked":"2026-10","sig":"113ad8ba"}
 },
 "wspwood": {
  "name": {"text":"White-spotted woodpecker","src":["https://www.worldbirdnames.org/new/ioc-lists/master-list-2/","https://worldbirdnames.org/master_ioc_list_v15.2.xlsx"],"checked":"2026-10","sig":"a3fea178","note":"Portuguese: picapauzinho-verde-carijó."},
  "sci": {"text":"Veniliornis spilogaster","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://birdsoftheworld.org/bow/species/whswoo2/cur/introduction"],"checked":"2026-10","sig":"261a12af"},
  "wiki": "White-spotted_woodpecker",
  "range": {"text":"Southeastern Brazil, eastern Paraguay, northeastern Argentina, Uruguay","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://birdsoftheworld.org/bow/species/whswoo2/cur/introduction"],"checked":"2026-10","sig":"30a38d1f","note":"Habitat: A core member of mixed bird flocks in araucaria forest: it was in 55% of the flocks at Parque Estadual das Araucárias, SC. Also recorded in an araucaria remnant in Paraná. Habitat sources: https://periodicos.ufsc.br/index.php/biotemas/article/download/2175-7925.2009v22n3p143/17925, https://www.redalyc.org/pdf/1991/199115789012.pdf, https://periodicos.ufsc.br/index.php/biotemas/article/download/2175-7925.2013v26n3p261/25326/101040"},
  "fact": {"text":"Besides digging out beetle grubs, this little woodpecker snacks on berries, even the fruit of the yerba mate tree.","src":["https://periodicos.ufsc.br/index.php/biotemas/article/download/2175-7925.2013v26n3p261/25326/101040","https://en.wikipedia.org/wiki/White-spotted_woodpecker"],"checked":"2026-10","sig":"243217ff","note":"Kaminski 2013 (Biotemas) saw it eat fruit of Ilex paraguariensis (erva-mate), Schinus, Miconia, Myrsine and Zanthoxylum in araucaria forest at Rio Negrinho, SC."},
  "marks": {"text":"Small olive woodpecker covered in pale spots and bars, with a white eyebrow and moustache. Male: fine red streaks on the crown. Female has none.","src":["https://en.wikipedia.org/wiki/White-spotted_woodpecker","https://birdsoftheworld.org/bow/species/whswoo2/cur/introduction"],"checked":"2026-10","sig":"bd5121db"}
 },
 "arauctit": {
  "name": {"text":"Araucaria tit-spinetail","src":["https://www.worldbirdnames.org/new/ioc-lists/master-list-2/","https://worldbirdnames.org/master_ioc_list_v15.2.xlsx"],"checked":"2026-10","sig":"e1e33f32","note":"Portuguese: grimpeiro, from 'grimpa', the local word for a dry araucaria twig."},
  "sci": {"text":"Leptasthenura setaria","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://www.redalyc.org/pdf/1991/199114289022.pdf"],"checked":"2026-10","sig":"a6a7d68b"},
  "wiki": "Araucaria_tit-spinetail",
  "range": {"text":"Southeastern and southern Brazil, Misiones in northeastern Argentina","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://en.wikipedia.org/wiki/Araucaria_tit-spinetail","https://www.redalyc.org/pdf/1991/199114289022.pdf"],"checked":"2026-10","sig":"d433c517","note":"Habitat: Totally dependent on Paraná pine (Araucaria angustifolia), native or planted. A recognised araucaria-forest endemic. Habitat sources: https://www.redalyc.org/pdf/1991/199114289022.pdf, https://portal.colombo.pr.gov.br/downloads/Encarte_II_Analise%20Regional_PNMGB_FINAL.pdf, https://www.redalyc.org/pdf/1991/199115789012.pdf"},
  "fact": {"text":"It lives only in araucaria trees, hunting tiny bugs among the spiky leaves and building its nest from araucaria twigs.","src":["https://www.redalyc.org/pdf/1991/199114289022.pdf","https://es.wikipedia.org/wiki/Leptasthenura_setaria"],"checked":"2026-10","sig":"1e7656c4"},
  "marks": {"text":"Tiny rufous bird with a black-and-white striped face and crest, a streaky white throat and a very long, deeply forked, spiky tail. Sexes alike.","src":["https://en.wikipedia.org/wiki/Araucaria_tit-spinetail","https://es.wikipedia.org/wiki/Leptasthenura_setaria"],"checked":"2026-10","sig":"2cb8b74f"}
 },
 "diadtan": {
  "name": {"text":"Diademed tanager","src":["https://www.worldbirdnames.org/new/ioc-lists/master-list-2/","https://worldbirdnames.org/master_ioc_list_v15.2.xlsx"],"checked":"2026-10","sig":"65ad3241","note":"Portuguese: sanhaço-frade. Spanish: frutero azul or cardenal azul."},
  "sci": {"text":"Stephanophorus diadematus","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://birdsoftheworld.org/bow/species/diatan1/cur/introduction"],"checked":"2026-10","sig":"7899ca1c"},
  "wiki": "Diademed_tanager",
  "range": {"text":"Southern Brazil, eastern Paraguay, northeastern Argentina, Uruguay","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://en.wikipedia.org/wiki/Diademed_tanager"],"checked":"2026-10","sig":"e6ad72fb","note":"Habitat: Forest edges, including araucaria forest. Recorded in an araucaria forest remnant in Paraná (present on 53% of visits). Habitat sources: https://en.wikipedia.org/wiki/Diademed_tanager, https://es.wikipedia.org/wiki/Stephanophorus_diadematus, https://www.redalyc.org/pdf/1991/199115789012.pdf"},
  "fact": {"text":"Besides fruit and flowers, it sips honeydew, the sugary drops left on leaves by tiny sap-sucking bugs.","src":["https://en.wikipedia.org/wiki/Diademed_tanager","https://birdsoftheworld.org/bow/species/diatan1/cur/introduction"],"checked":"2026-10","sig":"dc448c82","note":"Wikipedia says 'honeydew from plant lice'. BOW confirms fruit, flowers and insects but its honeydew detail is paywalled."},
  "marks": {"text":"Deep violet-blue tanager with a black face, a white crown and a small red tuft at the front of the crown. It can look all black in dim light.","src":["https://en.wikipedia.org/wiki/Diademed_tanager","https://es.wikipedia.org/wiki/Stephanophorus_diadematus","https://birdsoftheworld.org/bow/species/diatan1/cur/introduction"],"checked":"2026-10","sig":"5e99a073"}
 },
 "rbthrush": {
  "name": {"text":"Rufous-bellied thrush","src":["https://www.worldbirdnames.org/new/ioc-lists/master-list-2/","https://worldbirdnames.org/master_ioc_list_v15.2.xlsx"],"checked":"2026-10","sig":"61175bd5","note":"Portuguese: sabiá-laranjeira."},
  "sci": {"text":"Turdus rufiventris","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://birdsoftheworld.org/bow/species/rubthr1/cur/introduction"],"checked":"2026-10","sig":"4564c976"},
  "wiki": "Rufous-bellied_thrush",
  "range": {"text":"Eastern South America, from Bolivia and Brazil to Uruguay and northern Argentina","src":["https://worldbirdnames.org/master_ioc_list_v15.2.xlsx","https://birdsoftheworld.org/bow/species/rubthr1/cur/introduction"],"checked":"2026-10","sig":"f1296af0","note":"Habitat: The most abundant bird caught in an araucaria forest remnant in Paraná (13% of captures). Also in araucaria-forest mixed flocks in SC and at FLONA São Francisco de Paula, RS. Habitat sources: https://www.redalyc.org/pdf/1991/199115789012.pdf, https://periodicos.ufsc.br/index.php/biotemas/article/download/2175-7925.2009v22n3p143/17925, https://anais-siiepe.ufpel.edu.br/2015/CB_02830.pdf"},
  "fact": {"text":"Brazil's official symbol bird since 2002. It hops on the ground for worms and spreads seeds from fruits it eats.","src":["https://www2.camara.leg.br/legin/fed/decret_sn/2002/decreto-51564-3-outubro-2002-602027-publicacaooriginal-123470-pe.html","https://pt.wikipedia.org/wiki/Sabi%C3%A1-laranjeira","https://en.wikipedia.org/wiki/Rufous-bellied_thrush"],"checked":"2026-10","sig":"7f5e8fe5","note":"The 3 October 2002 decree makes the sabiá (Turdus rufiventris) the focus of Brazil's Bird Day and calls it a symbol of Brazilian birdlife. It is popularly called the national bird, but the decree does not use the words 'national bird'. The ground-foraging and seed-dispersal details come from Portuguese Wikipedia; BOW's foraging section is paywalled."},
  "marks": {"text":"Olive-brown thrush with a bright orange-rufous belly, a whitish throat streaked brown, a yellowish bill and a thin yellow eye ring. Sexes alike.","src":["https://birdsoftheworld.org/bow/species/rubthr1/cur/introduction","https://pt.wikipedia.org/wiki/Sabi%C3%A1-laranjeira"],"checked":"2026-10","sig":"96a2efde"}
 }
};
