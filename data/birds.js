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
 }
};
