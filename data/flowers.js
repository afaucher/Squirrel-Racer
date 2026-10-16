// Squirrel Ranger species facts: Wildflowers.
// Every claim on a card is {"text", "src": [urls], "checked": "YYYY-MM", "sig", "note"?}.
// "sig" fingerprints the text when it was checked; edit the text and the check flags it for a re-check.
// How to add or fix a fact: docs/ADDING-A-FOREST.md. Validate with: node tools/check_facts.mjs

(window.SPECIES_DATA ||= {}).flowers = {
 "bloodroot": {
  "name": {"text":"Bloodroot","src":["https://www.wildflower.org/plants/result.php?id_plant=SACA13"],"checked":"2026-10","sig":"e91d4cec"},
  "sci": {"text":"Sanguinaria canadensis","src":["https://www.wildflower.org/plants/result.php?id_plant=SACA13"],"checked":"2026-10","sig":"48dd00af"},
  "range": {"text":"Eastern North America","src":["https://www.wildflower.org/plants/result.php?id_plant=SACA13"],"checked":"2026-10","sig":"e0a6cbc7"},
  "moisture": "moist",
  "habitat": {"text":"Rich, moist, shady hardwood woods and wooded slopes","src":["https://www.wildflower.org/plants/result.php?id_plant=SACA13","https://www.illinoiswildflowers.info/woodland/plants/bloodroot.htm","https://kswildflower.org/plants/sanguinaria-canadensis"],"checked":"2026-10","sig":"084e6bb2"},
  "light": "shade",
  "openings": false,
  "with": ["sugarmaple","whiteoak","redoak","hickory"]
 },
 "trillium": {
  "name": {"text":"Large-flowered trillium","src":["https://www.wildflower.org/plants/result.php?id_plant=TRGR4"],"checked":"2026-10","sig":"c5313389"},
  "sci": {"text":"Trillium grandiflorum","src":["https://www.wildflower.org/plants/result.php?id_plant=TRGR4"],"checked":"2026-10","sig":"53c263a5"},
  "range": {"text":"Eastern North America","src":["https://www.wildflower.org/plants/result.php?id_plant=TRGR4"],"checked":"2026-10","sig":"e0a6cbc7"},
  "moisture": "moist",
  "habitat": {"text":"Rich, moist maple and beech woods","src":["https://www.wildflower.org/plants/result.php?id_plant=TRGR4","https://nanps.org/product/trillium-grandiflorum/","https://flnps.org/node/721"],"checked":"2026-10","sig":"fe73b9b5"},
  "light": "part",
  "openings": false,
  "with": ["sugarmaple","beech"]
 },
 "vabluebells": {
  "name": {"text":"Virginia bluebells","src":["https://www.wildflower.org/plants/result.php?id_plant=MEVI3"],"checked":"2026-10","sig":"311cfb4a"},
  "sci": {"text":"Mertensia virginica","src":["https://www.wildflower.org/plants/result.php?id_plant=MEVI3"],"checked":"2026-10","sig":"d7a6c60e"},
  "range": {"text":"Eastern United States","src":["https://www.wildflower.org/plants/result.php?id_plant=MEVI3"],"checked":"2026-10","sig":"177acfd7","note":"Also native to a small part of southern Ontario."},
  "moisture": "moist",
  "habitat": {"text":"Moist, rich woods and river floodplains","src":["https://www.wildflower.org/plants/result.php?id_plant=MEVI3","https://www.lakeforest.edu/academics/majors-and-minors/environmental-studies/mertensia-virginicaand160(virginia-bluebells)-boraginaceae"],"checked":"2026-10","sig":"de8ab8e6"},
  "light": "shade",
  "openings": false,
  "with": ["sugarmaple"]
 },
 "wildcolumbine": {
  "name": {"text":"Wild columbine","src":["https://www.fs.usda.gov/database/feis/plants/forb/aqucan/all.html"],"checked":"2026-10","sig":"c1c9d0ce"},
  "sci": {"text":"Aquilegia canadensis","src":["https://www.wildflower.org/plants/result.php?id_plant=AQCA","https://www.fs.usda.gov/database/feis/plants/forb/aqucan/all.html"],"checked":"2026-10","sig":"d2ba13b6"},
  "range": {"text":"Eastern North America","src":["https://www.wildflower.org/plants/result.php?id_plant=AQCA","https://www.fs.usda.gov/database/feis/plants/forb/aqucan/all.html"],"checked":"2026-10","sig":"e0a6cbc7"},
  "moisture": "dry",
  "habitat": {"text":"Rocky woods, cliffs and wooded slopes, often at the forest edge","src":["https://minnesotawildflowers.info/flower/red-columbine","https://www.panativeplantsociety.org/aquilegia-canadensis.html","https://www.wildflower.org/plants/result.php?id_plant=AQCA"],"checked":"2026-10","sig":"76343732"},
  "light": "part",
  "openings": true,
  "with": []
 },
 "mayapple": {
  "name": {"text":"Mayapple","src":["https://www.wildflower.org/plants/result.php?id_plant=POPE"],"checked":"2026-10","sig":"52c21c30"},
  "sci": {"text":"Podophyllum peltatum","src":["https://www.wildflower.org/plants/result.php?id_plant=POPE"],"checked":"2026-10","sig":"4d7468bf"},
  "range": {"text":"Eastern North America","src":["https://www.wildflower.org/plants/result.php?id_plant=POPE"],"checked":"2026-10","sig":"e0a6cbc7"},
  "moisture": "moist",
  "habitat": {"text":"Moist, shady hardwood woods, often in big patches","src":["https://www.wildflower.org/plants/result.php?id_plant=POPE","https://www.illinoiswildflowers.info/woodland/plants/mayapple.htm"],"checked":"2026-10","sig":"9e83e669"},
  "light": "part",
  "openings": false,
  "with": ["whiteoak","redoak","hickory","beech","sugarmaple"]
 },
 "springbeauty": {
  "name": {"text":"Spring beauty","src":["https://www.wildflower.org/plants/result.php?id_plant=CLVI3"],"checked":"2026-10","sig":"126a3739"},
  "sci": {"text":"Claytonia virginica","src":["https://www.wildflower.org/plants/result.php?id_plant=CLVI3"],"checked":"2026-10","sig":"9c7a95d6"},
  "range": {"text":"Eastern United States","src":["https://www.wildflower.org/plants/result.php?id_plant=CLVI3"],"checked":"2026-10","sig":"177acfd7","note":"Also native to a small part of southern Canada."},
  "moisture": "moist",
  "habitat": {"text":"Rich, moist hardwood woods in early spring","src":["https://www.wildflower.org/plants/result.php?id_plant=CLVI3","https://www.illinoiswildflowers.info/woodland/plants/spring_beauty.htm","https://kswildflower.org/plants/claytonia-virginica"],"checked":"2026-10","sig":"55ff525e","note":"Its trees are mapped from 'deciduous woodlands'; no source names them."},
  "light": "part",
  "openings": false,
  "with": ["whiteoak","redoak","hickory","beech","sugarmaple"]
 },
 "wildgeranium": {
  "name": {"text":"Wild geranium","src":["https://www.wildflower.org/plants/result.php?id_plant=GEMA"],"checked":"2026-10","sig":"6812ee04"},
  "sci": {"text":"Geranium maculatum","src":["https://www.wildflower.org/plants/result.php?id_plant=GEMA"],"checked":"2026-10","sig":"654907af"},
  "range": {"text":"Eastern North America","src":["https://www.wildflower.org/plants/result.php?id_plant=GEMA"],"checked":"2026-10","sig":"e0a6cbc7"},
  "moisture": "mesic",
  "habitat": {"text":"Open, moist hardwood woods and sunny woodland gaps","src":["https://www.fs.usda.gov/database/feis/plants/forb/germac/all.html","https://www.wildflower.org/plants/result.php?id_plant=GEMA"],"checked":"2026-10","sig":"388731f3"},
  "light": "part",
  "openings": true,
  "with": ["whiteoak","redoak","hickory","beech","sugarmaple"]
 },
 "blackeyedsusan": {
  "name": {"text":"Black-eyed Susan","src":["https://www.wildflower.org/plants/result.php?id_plant=RUHI2"],"checked":"2026-10","sig":"186d5fa1"},
  "sci": {"text":"Rudbeckia hirta","src":["https://www.wildflower.org/plants/result.php?id_plant=RUHI2"],"checked":"2026-10","sig":"552519f6"},
  "range": {"text":"Eastern and central North America","src":["https://www.wildflower.org/plants/result.php?id_plant=RUHI2"],"checked":"2026-10","sig":"e07bb2df"},
  "moisture": "dry",
  "habitat": {"text":"Sunny meadows, fields, roadsides and woodland edges","src":["https://www.wildflower.org/plants/result.php?id_plant=RUHI2","https://www.minnesotawildflowers.info/flower/black-eyed-susan"],"checked":"2026-10","sig":"20d99c6e"},
  "light": "sun",
  "openings": true,
  "with": []
 },
 "neaster": {
  "name": {"text":"New England aster","src":["https://www.wildflower.org/plants/result.php?id_plant=SYNO2"],"checked":"2026-10","sig":"c4536629"},
  "sci": {"text":"Symphyotrichum novae-angliae","src":["https://www.wildflower.org/plants/result.php?id_plant=SYNO2"],"checked":"2026-10","sig":"92fedb26"},
  "range": {"text":"Eastern and central North America","src":["https://www.wildflower.org/plants/result.php?id_plant=SYNO2"],"checked":"2026-10","sig":"e07bb2df"},
  "moisture": "moist",
  "habitat": {"text":"Moist, sunny meadows, old fields and woodland edges","src":["https://www.minnesotawildflowers.info/flower/new-england-aster","https://www.wildflower.org/plants/result.php?id_plant=SYNO2"],"checked":"2026-10","sig":"3f887a33"},
  "light": "sun",
  "openings": true,
  "with": []
 },
 "goldenrod": {
  "name": {"text":"Canada goldenrod","src":["https://www.wildflower.org/plants/result.php?id_plant=SOCA6"],"checked":"2026-10","sig":"d21b6b42"},
  "sci": {"text":"Solidago canadensis","src":["https://www.wildflower.org/plants/result.php?id_plant=SOCA6"],"checked":"2026-10","sig":"66e3ff09"},
  "range": {"text":"Across North America","src":["https://www.wildflower.org/plants/result.php?id_plant=SOCA6"],"checked":"2026-10","sig":"5b7bf242"},
  "moisture": "moist",
  "habitat": {"text":"Sunny fields, roadsides, open woods and wetland edges","src":["https://www.minnesotawildflowers.info/flower/canada-goldenrod","https://www.wildflower.org/plants/result.php?id_plant=SOCA6"],"checked":"2026-10","sig":"22f649b2"},
  "light": "sun",
  "openings": true,
  "with": []
 },
 "coneflower": {
  "name": {"text":"Purple coneflower","src":["https://www.wildflower.org/plants/result.php?id_plant=ECPU"],"checked":"2026-10","sig":"378eb1b0"},
  "sci": {"text":"Echinacea purpurea","src":["https://www.wildflower.org/plants/result.php?id_plant=ECPU"],"checked":"2026-10","sig":"9c984d0a"},
  "range": {"text":"Central and eastern United States","src":["https://www.wildflower.org/plants/result.php?id_plant=ECPU"],"checked":"2026-10","sig":"198f98b2"},
  "moisture": "dry",
  "habitat": {"text":"Sunny, rocky open woods, thickets and prairies","src":["https://www.wildflower.org/plants/result.php?id_plant=ECPU"],"checked":"2026-10","sig":"91c3110a"},
  "light": "sun",
  "openings": true,
  "with": []
 },
 "fireweed": {
  "name": {"text":"Fireweed","src":["https://www.wildflower.org/plants/result.php?id_plant=CHAN9","https://data.canadensys.net/vascan/name/Chamaenerion%20angustifolium"],"checked":"2026-10","sig":"f6ade389"},
  "sci": {"text":"Chamaenerion angustifolium","src":["https://data.canadensys.net/vascan/name/Chamaenerion%20angustifolium","https://en.wikipedia.org/wiki/Chamaenerion_angustifolium"],"checked":"2026-10","sig":"08f03569","note":"Chamaenerion per VASCAN/FNA; Kew may still treat it as Epilobium angustifolium."},
  "range": {"text":"Across the Northern Hemisphere","src":["https://en.wikipedia.org/wiki/Chamaenerion_angustifolium"],"checked":"2026-10","sig":"c4d6300b"},
  "moisture": "mesic",
  "habitat": {"text":"Burns, clearings and roadsides in full sun","src":["https://www.fs.usda.gov/database/feis/plants/forb/chaang/all.html"],"checked":"2026-10","sig":"9c42088f"},
  "light": "sun",
  "openings": true,
  "with": ["whitespruce","blackspruce","jackpine","paperbirch","aspen"]
 },
 "bunchberry": {
  "name": {"text":"Bunchberry","src":["https://www.wildflower.org/plants/result.php?id_plant=COCA13"],"checked":"2026-10","sig":"a23a6369"},
  "sci": {"text":"Cornus canadensis","src":["https://www.wildflower.org/plants/result.php?id_plant=COCA13"],"checked":"2026-10","sig":"15c54480"},
  "range": {"text":"Northern North America and northeast Asia","src":["https://www.wildflower.org/plants/result.php?id_plant=COCA13"],"checked":"2026-10","sig":"4543af55"},
  "moisture": "moist",
  "habitat": {"text":"Cool, moist forest floors, often in mossy conifer woods","src":["https://www.fs.usda.gov/database/feis/plants/forb/corcan/all.html","https://linnet.geog.ubc.ca/Atlas/Atlas.aspx?sciname=Cornus%20canadensis","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Cornus%20canadensis"],"checked":"2026-10","sig":"7479fc6d"},
  "light": "part",
  "openings": false,
  "with": ["whitespruce","blackspruce","balsamfir","jackpine","paperbirch","aspen","westernhemlock","sitkaspruce"]
 },
 "twinflower": {
  "name": {"text":"Twinflower","src":["https://www.wildflower.org/plants/result.php?id_plant=LIBO3"],"checked":"2026-10","sig":"1dbc3007"},
  "sci": {"text":"Linnaea borealis","src":["https://www.wildflower.org/plants/result.php?id_plant=LIBO3","https://en.wikipedia.org/wiki/Linnaea_borealis"],"checked":"2026-10","sig":"0d2edbd0"},
  "range": {"text":"Northern forests around the world","src":["https://en.wikipedia.org/wiki/Linnaea_borealis"],"checked":"2026-10","sig":"d2cf74fc"},
  "moisture": "mesic",
  "habitat": {"text":"Mossy, shady conifer and mixed forest floors","src":["https://www.fs.usda.gov/database/feis/plants/forb/linbor/all.html","https://www.minnesotawildflowers.info/flower/twinflower","https://linnet.geog.ubc.ca/Atlas/Atlas.aspx?sciname=Linnaea%20borealis"],"checked":"2026-10","sig":"eb80023d","note":"Its boreal trees come from cover-type lists, not direct statements."},
  "light": "part",
  "openings": false,
  "with": ["whitespruce","blackspruce","balsamfir","jackpine","paperbirch","aspen","scotspine","silverbirch"]
 },
 "pricklyrose": {
  "name": {"text":"Prickly wild rose","src":["https://en.wikipedia.org/wiki/Rosa_acicularis"],"checked":"2026-10","sig":"45450c47"},
  "sci": {"text":"Rosa acicularis","src":["https://www.fs.usda.gov/database/feis/plants/shrub/rosaci/all.html","https://www.wildflower.org/plants/result.php?id_plant=ROAC"],"checked":"2026-10","sig":"c4e7a066"},
  "range": {"text":"Northern North America, Europe and Asia","src":["https://en.wikipedia.org/wiki/Rosa_acicularis","https://www.fs.usda.gov/database/feis/plants/shrub/rosaci/all.html"],"checked":"2026-10","sig":"233c3ef9"},
  "moisture": "mesic",
  "habitat": {"text":"Sunny clearings, old burns and open spruce, aspen and birch woods","src":["https://www.fs.usda.gov/database/feis/plants/shrub/rosaci/all.html"],"checked":"2026-10","sig":"9454df75"},
  "light": "part",
  "openings": true,
  "with": ["whitespruce","blackspruce","jackpine","paperbirch","aspen"]
 },
 "ladyslipper": {
  "name": {"text":"Showy lady's-slipper","src":["https://gobotany.nativeplanttrust.org/species/cypripedium/reginae/","https://www.fs.usda.gov/wildflowers/plant-of-the-week/cypripedium_reginae.shtml"],"checked":"2026-10","sig":"42c01a08"},
  "sci": {"text":"Cypripedium reginae","src":["https://gobotany.nativeplanttrust.org/species/cypripedium/reginae/"],"checked":"2026-10","sig":"557c9d66"},
  "range": {"text":"Northeastern North America","src":["https://www.fs.usda.gov/wildflowers/plant-of-the-week/cypripedium_reginae.shtml","https://en.wikipedia.org/wiki/Cypripedium_reginae"],"checked":"2026-10","sig":"27b95d40"},
  "moisture": "wet",
  "habitat": {"text":"Wet, mossy spruce bogs, swamps and fens","src":["https://dnr.state.mn.us/snapshots/plants/showyladysslipper.html","https://gobotany.nativeplanttrust.org/species/cypripedium/reginae/","https://www.minnesotawildflowers.info/flower/showy-ladys-slipper"],"checked":"2026-10","sig":"808d0859"},
  "light": "part",
  "openings": false,
  "with": ["blackspruce"]
 },
 "pearly": {
  "name": {"text":"Pearly everlasting","src":["https://www.wildflower.org/plants/result.php?id_plant=ANMA"],"checked":"2026-10","sig":"8a23e1a0"},
  "sci": {"text":"Anaphalis margaritacea","src":["https://www.wildflower.org/plants/result.php?id_plant=ANMA"],"checked":"2026-10","sig":"87fc618a"},
  "range": {"text":"Across North America and Asia","src":["https://en.wikipedia.org/wiki/Anaphalis_margaritacea","https://www.wildflower.org/plants/result.php?id_plant=ANMA"],"checked":"2026-10","sig":"92bd9161"},
  "moisture": "mesic",
  "habitat": {"text":"Sunny clearings, roadsides, dry fields and open woods","src":["https://linnet.geog.ubc.ca/Atlas/Atlas.aspx?sciname=Anaphalis%20margaritacea","https://www.minnesotawildflowers.info/flower/pearly-everlasting"],"checked":"2026-10","sig":"6d67ada1"},
  "light": "sun",
  "openings": true,
  "with": []
 },
 "marshmarigold": {
  "name": {"text":"Marsh marigold","src":["https://en.wikipedia.org/wiki/Caltha_palustris"],"checked":"2026-10","sig":"b28f4bfc"},
  "sci": {"text":"Caltha palustris","src":["https://www.wildflower.org/plants/result.php?id_plant=CAPA5"],"checked":"2026-10","sig":"4eade349"},
  "range": {"text":"Wetlands across the Northern Hemisphere","src":["https://en.wikipedia.org/wiki/Caltha_palustris","https://www.wildflower.org/plants/result.php?id_plant=CAPA5"],"checked":"2026-10","sig":"6ec42716"},
  "moisture": "wet",
  "habitat": {"text":"Swamps, wet woods, springs and stream banks","src":["https://www.minnesotawildflowers.info/flower/marsh-marigold","https://gobotany.nativeplanttrust.org/species/caltha/palustris/"],"checked":"2026-10","sig":"357e0160"},
  "light": "part",
  "openings": false,
  "with": []
 },
 "labradortea": {
  "name": {"text":"Labrador tea","src":["https://data.canadensys.net/vascan/name/Rhododendron%20groenlandicum"],"checked":"2026-10","sig":"246cb8c2"},
  "sci": {"text":"Rhododendron groenlandicum","src":["https://data.canadensys.net/vascan/name/Rhododendron%20groenlandicum"],"checked":"2026-10","sig":"7ed2d568"},
  "range": {"text":"Northern North America and Greenland","src":["https://data.canadensys.net/vascan/name/Rhododendron%20groenlandicum","https://temperate.theferns.info/plant/Rhododendron+groenlandicum"],"checked":"2026-10","sig":"36b36c80"},
  "moisture": "wet",
  "habitat": {"text":"Wet, mossy black spruce bogs and swamps","src":["https://www.fs.usda.gov/database/feis/plants/shrub/ledgro/all.html","https://www.minnesotawildflowers.info/shrub/labrador-tea"],"checked":"2026-10","sig":"63f2134b"},
  "light": "part",
  "openings": false,
  "with": ["blackspruce","jackpine"]
 },
 "arcticlupine": {
  "name": {"text":"Arctic lupine","src":["https://depts.washington.edu/propplnt/Plants/lupinus%20arcticus.htm"],"checked":"2026-10","sig":"0ddfc00b"},
  "sci": {"text":"Lupinus arcticus","src":["https://panarcticflora.org/taxon/630101"],"checked":"2026-10","sig":"21471c49"},
  "range": {"text":"Alaska and northwestern Canada","src":["https://panarcticflora.org/taxon/630101"],"checked":"2026-10","sig":"ca7c65e5"},
  "moisture": "mesic",
  "habitat": {"text":"Sunny meadows, gravel bars, roadsides and open forest","src":["https://linnet.geog.ubc.ca/Atlas/Atlas.aspx?sciname=Lupinus%20arcticus"],"checked":"2026-10","sig":"595729a5"},
  "light": "sun",
  "openings": true,
  "with": []
 },
 "woodlily": {
  "name": {"text":"Wood lily","src":["https://www.wildflower.org/plants/result.php?id_plant=LIPH"],"checked":"2026-10","sig":"4bedae34"},
  "sci": {"text":"Lilium philadelphicum","src":["https://www.wildflower.org/plants/result.php?id_plant=LIPH"],"checked":"2026-10","sig":"25cb7bc7"},
  "range": {"text":"Across much of North America","src":["https://www.wildflower.org/plants/result.php?id_plant=LIPH"],"checked":"2026-10","sig":"f1181bc7"},
  "moisture": "dry",
  "habitat": {"text":"Sunny forest openings, meadows and open jack pine woods","src":["https://www.wildflower.org/plants/result.php?id_plant=LIPH","https://minnesotawildflowers.info/flower/wood-lily","https://gobotany.nativeplanttrust.org/species/lilium/philadelphicum/"],"checked":"2026-10","sig":"db8d3d6a"},
  "light": "sun",
  "openings": true,
  "with": ["jackpine"]
 },
 "harebell": {
  "name": {"text":"Harebell","src":["https://www.wildflower.org/plants/result.php?id_plant=CARO2"],"checked":"2026-10","sig":"04f4d7ec"},
  "sci": {"text":"Campanula rotundifolia","src":["https://www.wildflower.org/plants/result.php?id_plant=CARO2"],"checked":"2026-10","sig":"448fe44f"},
  "range": {"text":"Across the Northern Hemisphere","src":["https://www.wildflower.org/plants/result.php?id_plant=CARO2"],"checked":"2026-10","sig":"c4d6300b"},
  "moisture": "dry",
  "habitat": {"text":"Rocky slopes, dry meadows and open woods in the sun","src":["https://www.minnesotawildflowers.info/flower/harebell","https://linnet.geog.ubc.ca/Atlas/Atlas.aspx?sciname=Campanula%20rotundifolia"],"checked":"2026-10","sig":"d1b787b4"},
  "light": "sun",
  "openings": true,
  "with": []
 },
 "scarletgilia": {
  "name": {"text":"Scarlet gilia","src":["https://www.wildflower.org/plants/result.php?id_plant=IPAG"],"checked":"2026-10","sig":"8645dedc"},
  "sci": {"text":"Ipomopsis aggregata","src":["https://www.wildflower.org/plants/result.php?id_plant=IPAG"],"checked":"2026-10","sig":"3ad1a828"},
  "range": {"text":"Western North America","src":["https://www.wildflower.org/plants/result.php?id_plant=IPAG"],"checked":"2026-10","sig":"d869cfe0"},
  "moisture": "dry",
  "habitat": {"text":"Scarlet gilia grows on dry, sunny slopes and meadows in open pine and aspen forests.","src":["https://npsnm.org/wildflowersnm/Ipomopsis_aggregata.html","https://swbiodiversity.org/seinet/taxa/index.php?taxon=Ipomopsis+aggregata","https://coloradowildbuds.com/ipomopsis-aggregata.html"],"checked":"2026-10","sig":"f35b9278"},
  "light": "sun",
  "openings": true,
  "with": ["ponderosa","gambeloak","aspen","douglasfir","pinyon"]
 },
 "paintbrush": {
  "name": {"text":"Wholeleaf Indian paintbrush","src":["https://www.wildflower.org/plants/result.php?id_plant=CAIN14"],"checked":"2026-10","sig":"3e88ec4b"},
  "sci": {"text":"Castilleja integra","src":["https://www.wildflower.org/plants/result.php?id_plant=CAIN14"],"checked":"2026-10","sig":"ac74b0d9"},
  "range": {"text":"Southwest US and northern Mexico","src":["https://www.wildflower.org/plants/result.php?id_plant=CAIN14"],"checked":"2026-10","sig":"2fb1c868"},
  "moisture": "dry",
  "habitat": {"text":"Wholeleaf paintbrush grows on dry, rocky slopes and in sunny meadows.","src":["https://npsnm.org/wildflowersnm/Castilleja_integra.html","https://swbiodiversity.org/seinet/taxa/index.php?taxon=Castilleja+integra","https://www.wildflower.org/plants/result.php?id_plant=CAIN14"],"checked":"2026-10","sig":"d14dd7f2"},
  "light": "sun",
  "openings": true,
  "with": ["pinyon"]
 },
 "silverylupine": {
  "name": {"text":"Silvery lupine","src":["https://www.wildflower.org/plants/result.php?id_plant=LUAR3"],"checked":"2026-10","sig":"57cf831c"},
  "sci": {"text":"Lupinus argenteus","src":["https://www.wildflower.org/plants/result.php?id_plant=LUAR3"],"checked":"2026-10","sig":"8cd8860d"},
  "range": {"text":"Western North America","src":["https://www.wildflower.org/plants/result.php?id_plant=LUAR3"],"checked":"2026-10","sig":"d869cfe0"},
  "moisture": "dry",
  "habitat": {"text":"Silvery lupine grows in open pine and aspen forests and mountain meadows.","src":["https://npsnm.org/wildflowersnm/Lupinus_argenteus.html","https://swbiodiversity.org/seinet/taxa/index.php?taxon=Lupinus+argenteus","https://www.wildflower.org/plants/result.php?id_plant=LUAR3"],"checked":"2026-10","sig":"c891c704"},
  "light": "part",
  "openings": true,
  "with": ["ponderosa","pinyon","aspen"]
 },
 "blueflax": {
  "name": {"text":"Blue flax","src":["https://www.fs.usda.gov/database/feis/plants/forb/linlew/all.html"],"checked":"2026-10","sig":"6ed043ee"},
  "sci": {"text":"Linum lewisii","src":["https://www.fs.usda.gov/database/feis/plants/forb/linlew/all.html","https://www.wildflower.org/plants/result.php?id_plant=LILE3"],"checked":"2026-10","sig":"c8b2e086"},
  "range": {"text":"Western North America","src":["https://www.wildflower.org/plants/result.php?id_plant=LILE3","https://www.fs.usda.gov/database/feis/plants/forb/linlew/all.html"],"checked":"2026-10","sig":"d869cfe0"},
  "moisture": "dry",
  "habitat": {"text":"Blue flax grows in sunny meadows and dry, open slopes, and it does not like shade.","src":["https://www.fs.usda.gov/database/feis/plants/forb/linlew/all.html","https://npsnm.org/wildflowersnm/Linum_lewisii.html","https://swbiodiversity.org/seinet/taxa/index.php?taxon=Linum+lewisii"],"checked":"2026-10","sig":"fca5817b"},
  "light": "sun",
  "openings": true,
  "with": ["ponderosa","pinyon","gambeloak","aspen","douglasfir"]
 },
 "rmiris": {
  "name": {"text":"Rocky Mountain iris","src":["https://www.wildflower.org/plants/result.php?id_plant=IRMI"],"checked":"2026-10","sig":"b3bdab5b"},
  "sci": {"text":"Iris missouriensis","src":["https://www.wildflower.org/plants/result.php?id_plant=IRMI"],"checked":"2026-10","sig":"b6a5f381"},
  "range": {"text":"Western North America","src":["https://www.wildflower.org/plants/result.php?id_plant=IRMI"],"checked":"2026-10","sig":"d869cfe0"},
  "moisture": "wet",
  "habitat": {"text":"Rocky Mountain iris grows in wet mountain meadows and along streams.","src":["https://www.wildflower.org/plants/result.php?id_plant=IRMI","https://npsnm.org/wildflowersnm/Iris_missouriensis.html","https://swbiodiversity.org/seinet/taxa/index.php?taxon=Iris+missouriensis"],"checked":"2026-10","sig":"3d0fab38"},
  "light": "sun",
  "openings": true,
  "with": ["ponderosa","gambeloak","aspen"]
 },
 "bluecolumbine": {
  "name": {"text":"Colorado blue columbine","src":["https://www.wildflower.org/plants/result.php?id_plant=AQCO"],"checked":"2026-10","sig":"8c176e4a"},
  "sci": {"text":"Aquilegia coerulea","src":["https://www.wildflower.org/plants/result.php?id_plant=AQCO"],"checked":"2026-10","sig":"7fa777ae"},
  "range": {"text":"Rocky Mountains from Montana and Idaho to Arizona and New Mexico","src":["https://www.wildflower.org/plants/result.php?id_plant=AQCO"],"checked":"2026-10","sig":"482cb2b0"},
  "moisture": "moist",
  "habitat": {"text":"Colorado blue columbine grows in cool, moist aspen groves, forest clearings and mountain meadows.","src":["https://coloradowildbuds.com/aquilegia-coerulea.html","https://npsnm.org/wildflowersnm/Aquilegia_coerulea.html","https://www.wildflower.org/plants/result.php?id_plant=AQCO"],"checked":"2026-10","sig":"341462fc"},
  "light": "part",
  "openings": false,
  "with": ["aspen","douglasfir"]
 },
 "goldeneye": {
  "name": {"text":"Showy goldeneye","src":["https://www.wildflower.org/plants/result.php?id_plant=HEMU3"],"checked":"2026-10","sig":"11412e2b"},
  "sci": {"text":"Heliomeris multiflora","src":["https://www.wildflower.org/plants/result.php?id_plant=HEMU3"],"checked":"2026-10","sig":"9a12e725"},
  "range": {"text":"Rocky Mountains, the Southwest and northern Mexico","src":["https://www.wildflower.org/plants/result.php?id_plant=HEMU3"],"checked":"2026-10","sig":"1e2d7894"},
  "moisture": "dry",
  "habitat": {"text":"Showy goldeneye grows on dry slopes, in mountain meadows and under open pine forests.","src":["https://swbiodiversity.org/seinet/taxa/index.php?taxon=Heliomeris+multiflora","https://npsnm.org/wildflowersnm/Heliomeris_multiflora.html"],"checked":"2026-10","sig":"87d1767f","note":"Part sun is a judgment call; sources give habitats but no light rating."},
  "light": "part",
  "openings": true,
  "with": ["ponderosa","aspen","pinyon","gambeloak"]
 },
 "globemallow": {
  "name": {"text":"Scarlet globemallow","src":["https://www.wildflower.org/plants/result.php?id_plant=SPCO"],"checked":"2026-10","sig":"03af6ee6"},
  "sci": {"text":"Sphaeralcea coccinea","src":["https://www.wildflower.org/plants/result.php?id_plant=SPCO"],"checked":"2026-10","sig":"aeef5a4e"},
  "range": {"text":"Western and central North America","src":["https://www.wildflower.org/plants/result.php?id_plant=SPCO"],"checked":"2026-10","sig":"5f65c9f5"},
  "moisture": "dry",
  "habitat": {"text":"Scarlet globemallow grows in dry, sunny, open ground like prairies and roadsides.","src":["https://npsnm.org/wildflowersnm/Sphaeralcea_coccinea.html","https://www.wildflower.org/plants/result.php?id_plant=SPCO","https://swbiodiversity.org/seinet/taxa/index.php?taxon=Sphaeralcea+coccinea"],"checked":"2026-10","sig":"9150f87d"},
  "light": "sun",
  "openings": true,
  "with": ["ponderosa","pinyon"]
 },
 "mexicanhat": {
  "name": {"text":"Mexican hat","src":["https://www.wildflower.org/plants/result.php?id_plant=RACO3"],"checked":"2026-10","sig":"434e7ed3"},
  "sci": {"text":"Ratibida columnifera","src":["https://www.wildflower.org/plants/result.php?id_plant=RACO3"],"checked":"2026-10","sig":"ecdf052b"},
  "range": {"text":"Central and western North America","src":["https://www.wildflower.org/plants/result.php?id_plant=RACO3"],"checked":"2026-10","sig":"96d1fb97"},
  "moisture": "dry",
  "habitat": {"text":"Mexican hat grows in sunny meadows, prairies and roadsides near pine woods.","src":["https://swbiodiversity.org/seinet/taxa/index.php?taxon=Ratibida+columnifera","https://npsnm.org/wildflowersnm/Ratibida_columnifera.html","https://www.wildflower.org/plants/result.php?id_plant=RACO3"],"checked":"2026-10","sig":"3515c637"},
  "light": "sun",
  "openings": true,
  "with": ["ponderosa","pinyon"]
 },
 "blanketflower": {
  "name": {"text":"Common blanketflower","src":["https://en.wikipedia.org/wiki/Gaillardia_aristata"],"checked":"2026-10","sig":"d0d6def6"},
  "sci": {"text":"Gaillardia aristata","src":["https://www.wildflower.org/plants/result.php?id_plant=GAAR","https://en.wikipedia.org/wiki/Gaillardia_aristata"],"checked":"2026-10","sig":"67dc0c5e"},
  "range": {"text":"Western North America","src":["https://www.wildflower.org/plants/result.php?id_plant=GAAR","https://en.wikipedia.org/wiki/Gaillardia_aristata"],"checked":"2026-10","sig":"d869cfe0"},
  "moisture": "dry",
  "habitat": {"text":"Blanketflower grows in dry, sunny openings among aspens and pines.","src":["https://swbiodiversity.org/seinet/taxa/index.php?taxon=Gaillardia+aristata","https://www.wildflower.org/plants/result.php?id_plant=GAAR"],"checked":"2026-10","sig":"9af396d8"},
  "light": "sun",
  "openings": true,
  "with": ["aspen","ponderosa"]
 },
 "penstemon": {
  "name": {"text":"Beardlip penstemon","src":["https://www.wildflower.org/plants/result.php?id_plant=PEBA2"],"checked":"2026-10","sig":"4504e821"},
  "sci": {"text":"Penstemon barbatus","src":["https://www.wildflower.org/plants/result.php?id_plant=PEBA2"],"checked":"2026-10","sig":"657df7b2"},
  "range": {"text":"Southwest US and Mexico","src":["https://www.wildflower.org/plants/result.php?id_plant=PEBA2"],"checked":"2026-10","sig":"010b10dd"},
  "moisture": "dry",
  "habitat": {"text":"Beardlip penstemon grows on rocky slopes in open pine, oak and pinyon woods.","src":["https://npsnm.org/wildflowersnm/Penstemon_barbatus.html","https://swbiodiversity.org/seinet/taxa/index.php?taxon=Penstemon+barbatus","https://www.wildflower.org/plants/result.php?id_plant=PEBA2"],"checked":"2026-10","sig":"f89c3f2c"},
  "light": "part",
  "openings": true,
  "with": ["ponderosa","gambeloak","pinyon"]
 },
 "bluebell": {
  "name": {"text":"Bluebell","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/bluebell/","https://www.plantlife.org.uk/plants-and-fungi/bluebell/"],"checked":"2026-10","sig":"8e64d602"},
  "sci": {"text":"Hyacinthoides non-scripta","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/bluebell/","https://www.plantlife.org.uk/plants-and-fungi/bluebell/"],"checked":"2026-10","sig":"c14e37ef"},
  "range": {"text":"Western Europe; Britain has about half the world's bluebells","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/bluebell/","https://www.plantlife.org.uk/plants-and-fungi/bluebell/"],"checked":"2026-10","sig":"0306c0e0"},
  "moisture": "mesic",
  "habitat": {"text":"Bluebells carpet the shady floor of old broadleaf woods in spring, before the tree leaves close over.","src":["https://www.plantlife.org.uk/plants-and-fungi/bluebell/","https://www.woodlandtrust.org.uk/visiting-woods/woods/kinclaven-bluebell-wood/","https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/bluebell/"],"checked":"2026-10","sig":"1834ffa5"},
  "light": "shade",
  "openings": false,
  "with": ["pedoak","eubeech"]
 },
 "woodanemone": {
  "name": {"text":"Wood anemone","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/wood-anemone/"],"checked":"2026-10","sig":"970d27f8"},
  "sci": {"text":"Anemonoides nemorosa","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/wood-anemone/","https://en.wikipedia.org/wiki/Anemonoides_nemorosa"],"checked":"2026-10","sig":"cde680bc"},
  "formerly": "Anemone nemorosa",
  "range": {"text":"Europe","src":["https://en.wikipedia.org/wiki/Anemonoides_nemorosa"],"checked":"2026-10","sig":"e595f45d"},
  "moisture": "mesic",
  "habitat": {"text":"Wood anemones carpet old woodland floors in early spring, soaking up sun before the trees get their leaves.","src":["https://www.plantlife.org.uk/plants-and-fungi/wood-anemone/","https://rfs.org.uk/wp-content/uploads/2021/04/wood-anemone.pdf","https://www.theferret.scot/content/files/sites/default/files/site-special-scientific-interest/54/sssi-citation.pdf"],"checked":"2026-10","sig":"83601fa4"},
  "light": "part",
  "openings": false,
  "with": ["silverbirch","pedoak"]
 },
 "primrose": {
  "name": {"text":"Primrose","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/primrose/"],"checked":"2026-10","sig":"b7b974f0"},
  "sci": {"text":"Primula vulgaris","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/primrose/","https://en.wikipedia.org/wiki/Primula_vulgaris"],"checked":"2026-10","sig":"4b9cfd42"},
  "range": {"text":"Western and southern Europe","src":["https://en.wikipedia.org/wiki/Primula_vulgaris"],"checked":"2026-10","sig":"6b3bee80","note":"Also reaches western Asia and Algeria."},
  "moisture": "moist",
  "habitat": {"text":"Primroses grow in damp woodland clearings, at wood edges and on banks where a bit of sunlight gets in.","src":["https://www.plantlife.org.uk/plants-and-fungi/primrose/","https://www.first-nature.com/flowers/primula-vulgaris.php","https://www.theferret.scot/content/files/sites/default/files/site-special-scientific-interest/54/sssi-citation.pdf"],"checked":"2026-10","sig":"cea6d657"},
  "light": "part",
  "openings": true,
  "with": ["silverbirch"]
 },
 "celandine": {
  "name": {"text":"Lesser celandine","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/lesser-celandine/"],"checked":"2026-10","sig":"bed8e5e6"},
  "sci": {"text":"Ficaria verna","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/lesser-celandine/","https://en.wikipedia.org/wiki/Ficaria_verna"],"checked":"2026-10","sig":"962cdf77"},
  "range": {"text":"Europe and western Asia","src":["https://en.wikipedia.org/wiki/Ficaria_verna"],"checked":"2026-10","sig":"4709ea5d"},
  "moisture": "moist",
  "habitat": {"text":"Lesser celandine makes shiny yellow carpets on damp woodland paths, stream banks and ditches in early spring.","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/lesser-celandine/","https://www.plantlife.org.uk/plants-and-fungi/lesser-celandine/"],"checked":"2026-10","sig":"84288d5a"},
  "light": "part",
  "openings": false,
  "with": []
 },
 "foxglove": {
  "name": {"text":"Foxglove","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/foxglove/"],"checked":"2026-10","sig":"69a6dcbc"},
  "sci": {"text":"Digitalis purpurea","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/foxglove/","https://en.wikipedia.org/wiki/Digitalis_purpurea"],"checked":"2026-10","sig":"a3ff19ae"},
  "range": {"text":"Western Europe","src":["https://en.wikipedia.org/wiki/Digitalis_purpurea"],"checked":"2026-10","sig":"52f155ee"},
  "moisture": "mesic",
  "habitat": {"text":"Foxgloves pop up in sunny clearings, felled patches and wood edges, especially on acid soil.","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/foxglove/","https://tom2.woodlands.co.uk/blog/flora-and-fauna/woodland-and-hedgerow-plants-the-foxglove/","https://www.first-nature.com/flowers/digitalis-purpurea.php"],"checked":"2026-10","sig":"3d41471e"},
  "light": "part",
  "openings": true,
  "with": []
 },
 "woodsorrel": {
  "name": {"text":"Wood sorrel","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/wood-sorrel/"],"checked":"2026-10","sig":"961bd6ab"},
  "sci": {"text":"Oxalis acetosella","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/wood-sorrel/","https://en.wikipedia.org/wiki/Oxalis_acetosella"],"checked":"2026-10","sig":"66c3fbcb"},
  "range": {"text":"Europe and northern Asia","src":["https://en.wikipedia.org/wiki/Oxalis_acetosella"],"checked":"2026-10","sig":"57423290"},
  "moisture": "moist",
  "habitat": {"text":"Wood sorrel grows in cool, damp, shady woods and can cope with very deep shade.","src":["https://www.plantlife.org.uk/plants-and-fungi/wood-sorrel/","https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/wood-sorrel/","https://www.theferret.scot/content/files/sites/default/files/site-special-scientific-interest/54/sssi-citation.pdf"],"checked":"2026-10","sig":"c511272b"},
  "light": "shade",
  "openings": false,
  "with": ["silverbirch"]
 },
 "heather": {
  "name": {"text":"Heather","src":["https://npgsweb.ars-grin.gov/gringlobal/taxon/taxonomydetail?id=8605"],"checked":"2026-10","sig":"ed140167"},
  "sci": {"text":"Calluna vulgaris","src":["https://npgsweb.ars-grin.gov/gringlobal/taxon/taxonomydetail?id=8605","https://en.wikipedia.org/wiki/Calluna"],"checked":"2026-10","sig":"27f753c0"},
  "range": {"text":"Europe and Asia Minor","src":["https://npgsweb.ars-grin.gov/gringlobal/taxon/taxonomydetail?id=8605"],"checked":"2026-10","sig":"34350193","note":"Also reaches Siberia, Morocco and the Azores."},
  "moisture": "dry",
  "habitat": {"text":"Heather loves open, sunny, acid ground: moors, heaths and bright gaps in pine and birch woods.","src":["https://www.fs.usda.gov/database/feis/plants/shrub/calvul/all.html","https://treesforlife.org.uk/into-the-forest/trees-plants-animals/plants/heather/heather-facts/","https://www.theferret.scot/content/files/sites/default/files/site-special-scientific-interest/54/sssi-citation.pdf"],"checked":"2026-10","sig":"36198c5b"},
  "light": "sun",
  "openings": true,
  "with": ["scotspine","silverbirch"]
 },
 "redcampion": {
  "name": {"text":"Red campion","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/red-campion/"],"checked":"2026-10","sig":"903809f7"},
  "sci": {"text":"Silene dioica","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/red-campion/","https://en.wikipedia.org/wiki/Silene_dioica"],"checked":"2026-10","sig":"dda25d63"},
  "range": {"text":"Europe","src":["https://en.wikipedia.org/wiki/Silene_dioica"],"checked":"2026-10","sig":"e595f45d"},
  "moisture": "moist",
  "habitat": {"text":"Red campion brightens lightly shaded wood edges, hedgebanks and verges, often on damp ground.","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/red-campion/","https://www.first-nature.com/flowers/silene-dioica.php","https://en.wikipedia.org/wiki/Silene_dioica"],"checked":"2026-10","sig":"c7b0c48c"},
  "light": "part",
  "openings": true,
  "with": []
 },
 "wintergreen": {
  "name": {"text":"One-flowered wintergreen","src":["https://en.wikipedia.org/wiki/Moneses","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Moneses%20uniflora"],"checked":"2026-10","sig":"b11a76da"},
  "sci": {"text":"Moneses uniflora","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Moneses%20uniflora","https://en.wikipedia.org/wiki/Moneses"],"checked":"2026-10","sig":"60bae6f7"},
  "range": {"text":"Northern forests around the world","src":["https://en.wikipedia.org/wiki/Moneses","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Moneses%20uniflora"],"checked":"2026-10","sig":"d2cf74fc"},
  "moisture": "mesic",
  "habitat": {"text":"One-flowered wintergreen is a rare little flower of the mossy floor of old pine woods.","src":["https://www.plantlife.org.uk/plants-and-fungi/one-flowered-wintergreen/","https://cairngorms.co.uk/wildlife/one-flowered-wintergreen","https://stories.rbge.org.uk/archives/40446"],"checked":"2026-10","sig":"bba9c631","note":"Shade is inferred; sources disagree on moisture, so mesic is a compromise."},
  "light": "shade",
  "openings": false,
  "with": ["scotspine"]
 },
 "westerntrillium": {
  "name": {"text":"Western trillium","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Trillium%20ovatum","https://www.wildflower.org/plants/result.php?id_plant=TROV2"],"checked":"2026-10","sig":"fc512aaf"},
  "sci": {"text":"Trillium ovatum","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Trillium%20ovatum","https://www.wildflower.org/plants/result.php?id_plant=TROV2"],"checked":"2026-10","sig":"b14d4715"},
  "range": {"text":"Southern British Columbia to central California, east to the northern Rockies","src":["https://www.wildflower.org/plants/result.php?id_plant=TROV2"],"checked":"2026-10","sig":"c17a1f8c"},
  "moisture": "moist",
  "habitat": {"text":"Western trillium grows in shady, moist forests, often near streams.","src":["https://linnet.geog.ubc.ca/Atlas/Atlas.aspx?sciname=Trillium%20ovatum","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Trillium%20ovatum","https://www.wildflower.org/plants/result.php?id_plant=TROV2","https://realgardensgrownatives.com/?p=2735"],"checked":"2026-10","sig":"d20645a3","note":"Its trees come from a native-plant gardening source, so they are weaker evidence."},
  "light": "shade",
  "openings": false,
  "with": ["douglasfir","westernhemlock","westernredcedar"]
 },
 "bleedingheart": {
  "name": {"text":"Pacific bleeding heart","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Dicentra%20formosa"],"checked":"2026-10","sig":"5520e267"},
  "sci": {"text":"Dicentra formosa","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Dicentra%20formosa"],"checked":"2026-10","sig":"f79c005c"},
  "range": {"text":"Pacific coast from British Columbia to California","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Dicentra%20formosa"],"checked":"2026-10","sig":"b3a5147d"},
  "moisture": "moist",
  "habitat": {"text":"Pacific bleeding heart grows in cool, damp woods and along streams.","src":["https://linnet.geog.ubc.ca/Atlas/Atlas.aspx?sciname=Dicentra%20formosa","https://www.wildflower.org/plants/result.php?id_plant=DIFO","https://courses.washington.edu/esrm412/protocols/2015/DIFO.pdf"],"checked":"2026-10","sig":"95594204"},
  "light": "shade",
  "openings": false,
  "with": ["douglasfir","westernhemlock"]
 },
 "dwarforegongrape": {
  "name": {"text":"Dwarf Oregon grape","src":["https://www.wildflower.org/plants/result.php?id_plant=MANE2","https://en.wikipedia.org/wiki/Mahonia_nervosa"],"checked":"2026-10","sig":"842b6b94"},
  "sci": {"text":"Berberis nervosa","src":["https://en.wikipedia.org/wiki/Mahonia_nervosa"],"checked":"2026-10","sig":"99d09ca4","note":"Many sources still say Mahonia nervosa; POWO and WFO now place Mahonia in Berberis."},
  "range": {"text":"Southern British Columbia to central California, plus northern Idaho","src":["https://en.wikipedia.org/wiki/Mahonia_nervosa","https://www.wildflower.org/plants/result.php?id_plant=MANE2"],"checked":"2026-10","sig":"d3ac5c9b"},
  "moisture": "mesic",
  "habitat": {"text":"Dwarf Oregon grape is a low evergreen shrub that grows in the shade of big conifer forests.","src":["https://www.fs.usda.gov/database/feis/plants/shrub/mahner/all.html","https://explorer.natureserve.org/api/data/taxon/ELEMENT_GLOBAL.2.942423"],"checked":"2026-10","sig":"99b90f3c"},
  "light": "shade",
  "openings": false,
  "with": ["douglasfir","westernhemlock","sitkaspruce"]
 },
 "westerncolumbine": {
  "name": {"text":"Western columbine","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Aquilegia%20formosa"],"checked":"2026-10","sig":"c16ef8ac"},
  "sci": {"text":"Aquilegia formosa","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Aquilegia%20formosa"],"checked":"2026-10","sig":"61f6c5fe"},
  "range": {"text":"Western North America","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Aquilegia%20formosa"],"checked":"2026-10","sig":"d869cfe0"},
  "moisture": "moist",
  "habitat": {"text":"Western columbine grows in open woods, clearings, meadows and damp rocky banks.","src":["https://linnet.geog.ubc.ca/Atlas/Atlas.aspx?sciname=Aquilegia%20formosa","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Aquilegia%20formosa","https://www.wildflower.org/plants/result.php?id_plant=AQFO"],"checked":"2026-10","sig":"9f42f9e6"},
  "light": "part",
  "openings": true,
  "with": []
 },
 "tigerlily": {
  "name": {"text":"Columbia lily","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Lilium%20columbianum"],"checked":"2026-10","sig":"d31ff7ae"},
  "sci": {"text":"Lilium columbianum","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Lilium%20columbianum"],"checked":"2026-10","sig":"97061b8e"},
  "range": {"text":"British Columbia to northern California, east to Idaho and Montana","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Lilium%20columbianum"],"checked":"2026-10","sig":"a7a57671"},
  "moisture": "mesic",
  "habitat": {"text":"The Columbia lily grows in sunny meadows, forest edges and clearings.","src":["https://linnet.geog.ubc.ca/Atlas/Atlas.aspx?sciname=Lilium%20columbianum","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Lilium%20columbianum"],"checked":"2026-10","sig":"b4fc78bf"},
  "light": "sun",
  "openings": true,
  "with": []
 },
 "fawnlily": {
  "name": {"text":"Oregon fawn lily","src":["https://en.wikipedia.org/wiki/Erythronium_oregonum"],"checked":"2026-10","sig":"3ee3eb12"},
  "sci": {"text":"Erythronium oregonum","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Erythronium%20oregonum","https://en.wikipedia.org/wiki/Erythronium_oregonum"],"checked":"2026-10","sig":"61000306"},
  "range": {"text":"Southwestern British Columbia to northern California, west of the Cascades","src":["https://en.wikipedia.org/wiki/Erythronium_oregonum"],"checked":"2026-10","sig":"9641f354"},
  "moisture": "mesic",
  "habitat": {"text":"The Oregon fawn lily grows in grassy meadows, rocky openings and open woods at low elevations.","src":["https://linnet.geog.ubc.ca/Atlas/Atlas.aspx?sciname=Erythronium%20oregonum","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Erythronium%20oregonum"],"checked":"2026-10","sig":"465cfd6f"},
  "light": "sun",
  "openings": true,
  "with": []
 },
 "salmonberry": {
  "name": {"text":"Salmonberry","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Rubus%20spectabilis"],"checked":"2026-10","sig":"948e2613"},
  "sci": {"text":"Rubus spectabilis","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Rubus%20spectabilis"],"checked":"2026-10","sig":"517d5f5f"},
  "range": {"text":"Pacific coast from Alaska to California","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Rubus%20spectabilis"],"checked":"2026-10","sig":"bfa8af02"},
  "moisture": "wet",
  "habitat": {"text":"Salmonberry forms thickets in wet spots, along streams and in forest clearings, especially under alder.","src":["https://www.fs.usda.gov/database/feis/plants/shrub/rubspe/all.html","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Rubus%20spectabilis"],"checked":"2026-10","sig":"bee9b23c"},
  "light": "part",
  "openings": true,
  "with": ["redalder","sitkaspruce","douglasfir","westernhemlock","westernredcedar"]
 },
 "redcurrant": {
  "name": {"text":"Red-flowering currant","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Ribes%20sanguineum"],"checked":"2026-10","sig":"4a6330f9"},
  "sci": {"text":"Ribes sanguineum","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Ribes%20sanguineum"],"checked":"2026-10","sig":"69f1fb6e"},
  "range": {"text":"Pacific coast from British Columbia to California","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Ribes%20sanguineum"],"checked":"2026-10","sig":"b3a5147d"},
  "moisture": "dry",
  "habitat": {"text":"Red-flowering currant grows in sunny, rather dry open woods, forest edges and rocky spots.","src":["https://linnet.geog.ubc.ca/Atlas/Atlas.aspx?sciname=Ribes%20sanguineum","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Ribes%20sanguineum"],"checked":"2026-10","sig":"381b2448"},
  "light": "sun",
  "openings": true,
  "with": ["douglasfir"]
 },
 "skunkcabbage": {
  "name": {"text":"Western skunk cabbage","src":["https://en.wikipedia.org/wiki/Lysichiton_americanus"],"checked":"2026-10","sig":"dc817ca6"},
  "sci": {"text":"Lysichiton americanus","src":["https://www.wildflower.org/plants/result.php?id_plant=LYAM3","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Lysichiton%20americanus"],"checked":"2026-10","sig":"d015f146"},
  "range": {"text":"Wet forests and swamps from Alaska to central California","src":["https://www.wildflower.org/plants/result.php?id_plant=LYAM3","https://en.wikipedia.org/wiki/Lysichiton_americanus"],"checked":"2026-10","sig":"4fa488ac"},
  "moisture": "wet",
  "habitat": {"text":"Western skunk cabbage grows in swamps and soggy, muddy forest wetlands.","src":["https://linnet.geog.ubc.ca/Atlas/Atlas.aspx?sciname=Lysichiton%20americanus","https://explorer.natureserve.org/api/data/taxon/ELEMENT_GLOBAL.2.683415","https://explorer.natureserve.org/api/data/taxon/ELEMENT_GLOBAL.2.683705"],"checked":"2026-10","sig":"d1603392"},
  "light": "part",
  "openings": false,
  "with": ["westernredcedar","westernhemlock","sitkaspruce","redalder"]
 },
 "vanillaleaf": {
  "name": {"text":"Vanilla leaf","src":["https://www.wildflower.org/plants/result.php?id_plant=ACTR","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Achlys%20triphylla"],"checked":"2026-10","sig":"d596c5d0"},
  "sci": {"text":"Achlys triphylla","src":["https://www.wildflower.org/plants/result.php?id_plant=ACTR","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Achlys%20triphylla"],"checked":"2026-10","sig":"b24c633c"},
  "range": {"text":"Coast Ranges and Cascades from British Columbia to northern California","src":["https://www.wildflower.org/plants/result.php?id_plant=ACTR"],"checked":"2026-10","sig":"7cdc4741"},
  "moisture": "moist",
  "habitat": {"text":"Vanilla leaf carpets the shady floor of moist Douglas-fir forests.","src":["https://linnet.geog.ubc.ca/Atlas/Atlas.aspx?sciname=Achlys%20triphylla","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Achlys%20triphylla","https://explorer.natureserve.org/api/data/taxon/ELEMENT_GLOBAL.2.942423"],"checked":"2026-10","sig":"b9a81acb"},
  "light": "shade",
  "openings": false,
  "with": ["douglasfir","westernhemlock","bigleafmaple"]
 },
 "katakuri": {
  "name": {"text":"Japanese fawn lily","src":["https://en.wikipedia.org/wiki/Erythronium_japonicum"],"checked":"2026-10","sig":"1f36cc29","note":"Hokkaido University's plant pages call it Japanese dog-tooth violet; Japanese name katakuri."},
  "sci": {"text":"Erythronium japonicum","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/erythronium/jap.html","https://api.gbif.org/v1/species/2752866"],"checked":"2026-10","sig":"5bd32b58"},
  "wiki": "Erythronium_japonicum",
  "range": {"text":"Japan, Korea, northeast China and the Russian Far East","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/erythronium/jap.html","https://en.wikipedia.org/wiki/Erythronium_japonicum"],"checked":"2026-10","sig":"e73d6691"},
  "moisture": "mesic",
  "habitat": {"text":"Katakuri lilies carpet the floor of bright beech and oak woods in early spring, before the trees leaf out.","src":["https://www.city.kitaakita.akita.jp/archive/contents-3200","https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/erythronium/jap.html","https://ja.wikipedia.org/wiki/%E3%82%AB%E3%82%BF%E3%82%AF%E3%83%AA"],"checked":"2026-10","sig":"4d3411ce"},
  "light": "part",
  "openings": false,
  "with": ["buna","mizunara","itaya"]
 },
 "nirinso": {
  "name": {"text":"Soft windflower","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/buttercup/anemone/fla.html","https://en.wikipedia.org/wiki/Anemonastrum_flaccidum"],"checked":"2026-10","sig":"0576ec1e","note":"Also called flaccid anemone; Japanese name nirinso ('two-flower plant')."},
  "sci": {"text":"Anemonastrum flaccidum","src":["https://api.gbif.org/v1/species/10305703","https://en.wikipedia.org/wiki/Anemonastrum_flaccidum"],"checked":"2026-10","sig":"d7927930","note":"Moved from Anemone to Anemonastrum by Mosyakin (published 2018); many Japanese sources, incl. Hokkaido Univ. and the Forestry Agency, still use Anemone flaccida."},
  "formerly": "Anemone flaccida",
  "wiki": "Anemonastrum_flaccidum",
  "range": {"text":"Japan, Korea, Sakhalin and northern and eastern China","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/buttercup/anemone/fla.html","https://en.wikipedia.org/wiki/Anemonastrum_flaccidum"],"checked":"2026-10","sig":"00095f4f"},
  "moisture": "moist",
  "habitat": {"text":"Soft windflowers grow in white patches on damp, bright forest floors and woodland edges in spring.","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/buttercup/anemone/fla.html","https://www.city.itabashi.tokyo.jp/kusei/kouhou/houdou/1038678/1038744.html","https://www.city.sapporo.jp/ryokuka/hanaki/hanagoyomi/nirinso.html"],"checked":"2026-10","sig":"2b62c0f0"},
  "light": "part",
  "openings": false,
  "with": []
 },
 "shiraneaoi": {
  "name": {"text":"Japanese wood poppy","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/buttercup/glaucidium/pal.html","https://en.wikipedia.org/wiki/Glaucidium_palmatum"],"checked":"2026-10","sig":"319365fe","note":"Japanese name shirane-aoi. Not a true poppy."},
  "sci": {"text":"Glaucidium palmatum","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/buttercup/glaucidium/pal.html","https://api.gbif.org/v1/species/5579436"],"checked":"2026-10","sig":"57364c77","note":"Only species in its genus; placed in Ranunculaceae (APG), though some Japanese sources keep a separate family Glaucidiaceae."},
  "wiki": "Glaucidium_palmatum",
  "range": {"text":"Mountains of Hokkaido and northern Honshu, Japan","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/buttercup/glaucidium/pal.html","https://www.rinya.maff.go.jp/tohoku/syo/huzisato/zukan/siraneaoi.html"],"checked":"2026-10","sig":"622c91ab"},
  "moisture": "moist",
  "habitat": {"text":"The Japanese wood poppy grows in snowy mountain beech forests, on moist slopes where snow melts late and beside wet ground.","src":["https://www.forest-akita.jp/data/sanya-hana/10-shirane/shirane.html","https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/buttercup/glaucidium/pal.html","https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A9%E3%83%8D%E3%82%A2%E3%82%AA%E3%82%A4"],"checked":"2026-10","sig":"6e62af9f"},
  "light": "part",
  "openings": true,
  "with": ["buna"]
 },
 "mizubasho": {
  "name": {"text":"Asian skunk cabbage","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/arum/lysichiton/cam.html","https://en.wikipedia.org/wiki/Lysichiton_camtschatcensis"],"checked":"2026-10","sig":"9a59ee47","note":"Also white skunk cabbage; Japanese name mizubasho."},
  "sci": {"text":"Lysichiton camtschatcensis","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/arum/lysichiton/cam.html","https://api.gbif.org/v1/species/2869301"],"checked":"2026-10","sig":"5ca722ae","note":"Sometimes spelled camtschatcense (e.g. Forestry Agency Asahi-Shonai list)."},
  "wiki": "Lysichiton_camtschatcensis",
  "range": {"text":"Northern Japan to Kamchatka and eastern Siberia","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/arum/lysichiton/cam.html","https://en.wikipedia.org/wiki/Lysichiton_camtschatcensis"],"checked":"2026-10","sig":"041a823b"},
  "moisture": "wet",
  "habitat": {"text":"Asian skunk cabbage grows in soggy mountain wetlands, marshes and wet spots on the forest floor, right after the snow melts.","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/arum/lysichiton/cam.html","https://ja.wikipedia.org/wiki/%E3%83%9F%E3%82%BA%E3%83%90%E3%82%B7%E3%83%A7%E3%82%A6","https://www.rinya.maff.go.jp/tohoku/syo/asahi/shasinkan/kusabana.html"],"checked":"2026-10","sig":"fdd7a5f4"},
  "light": "part",
  "openings": true,
  "with": []
 },
 "cobralily": {
  "name": {"text":"Japanese cobra lily","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/arum/arisaema/ser.html"],"checked":"2026-10","sig":"e49f6e96","note":"A Japanese jack-in-the-pulpit; Japanese name mamushigusa ('viper plant'). Wikipedia calls it Fuji cobra lily."},
  "sci": {"text":"Arisaema serratum","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/arum/arisaema/ser.html","https://api.gbif.org/v1/species/2866950"],"checked":"2026-10","sig":"c8d24cac","note":"Japanese Arisaema taxonomy is messy: some Japanese lists treat mamushigusa under Arisaema japonicum (also accepted by GBIF as a separate species). The Forestry Agency Shirakami page gives only the genus."},
  "wiki": "Arisaema_serratum",
  "range": {"text":"Japan, Korea, China and the Russian Far East","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/arum/arisaema/ser.html","https://en.wikipedia.org/wiki/Arisaema_serratum"],"checked":"2026-10","sig":"0f2a1e3a"},
  "moisture": "moist",
  "habitat": {"text":"The Japanese cobra lily grows in damp woods, at forest edges and in fields.","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/arum/arisaema/ser.html","https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%B3%E3%83%88%E3%82%A6%E3%83%9E%E3%83%A0%E3%82%B7%E3%82%B0%E3%82%B5"],"checked":"2026-10","sig":"ddcc8b81"},
  "light": "part",
  "openings": false,
  "with": []
 },
 "goldenlily": {
  "name": {"text":"Golden-rayed lily","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/lilium/aur.html","https://en.wikipedia.org/wiki/Lilium_auratum"],"checked":"2026-10","sig":"330a5733","note":"Also goldband lily or mountain lily; Japanese name yamayuri."},
  "sci": {"text":"Lilium auratum","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/lilium/aur.html","https://api.gbif.org/v1/species/2753106"],"checked":"2026-10","sig":"e51f4e10"},
  "wiki": "Lilium_auratum",
  "range": {"text":"Honshu, Japan, from the Kinki region north to Tohoku","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/lilium/aur.html","https://www.rinya.maff.go.jp/tohoku/syo/huzisato/zukan/yamayuri.html"],"checked":"2026-10","sig":"04eb7e99"},
  "moisture": "mesic",
  "habitat": {"text":"Golden-rayed lilies grow on grassy, shrubby hillsides and dappled wood edges, often on slopes.","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/lilium/aur.html","https://ja.wikipedia.org/wiki/%E3%83%A4%E3%83%9E%E3%83%A6%E3%83%AA"],"checked":"2026-10","sig":"d101b40a","note":"A Pacific-side plant, so it is a range stretch in a Japan Sea-side beech forest."},
  "light": "part",
  "openings": true,
  "with": []
 },
 "sankayou": {
  "name": {"text":"Skeleton flower","src":["https://en.wikipedia.org/wiki/Diphylleia_grayi"],"checked":"2026-10","sig":"cfe465cc","note":"So called because its white petals turn see-through when wet. Hokkaido University's pages call it umbrella leaf; Japanese name sankayo."},
  "sci": {"text":"Diphylleia grayi","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/barberry/diphylleia/gra.html","https://api.gbif.org/v1/species/5634432"],"checked":"2026-10","sig":"4c7d81a0"},
  "wiki": "Diphylleia_grayi",
  "range": {"text":"Hokkaido and northern and central Honshu, Japan, and Sakhalin","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/barberry/diphylleia/gra.html","https://www.rinya.maff.go.jp/tohoku/syo/huzisato/zukan/sankayou.html"],"checked":"2026-10","sig":"9a8501e4"},
  "moisture": "moist",
  "habitat": {"text":"Skeleton flowers grow in cool, damp mountain woods and half-shady edges; rain turns their petals see-through.","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/barberry/diphylleia/gra.html","https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%B3%E3%82%AB%E3%83%A8%E3%82%A6","https://www.rinya.maff.go.jp/tohoku/syo/asahi/shasinkan/kusabana.html"],"checked":"2026-10","sig":"2b708ccf"},
  "light": "part",
  "openings": false,
  "with": []
 },
 "yamaajisai": {
  "name": {"text":"Mountain hydrangea","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/saxifrage/hydrangea/ser.html","https://en.wikipedia.org/wiki/Hydrangea_serrata"],"checked":"2026-10","sig":"b0cc27c0","note":"Japanese name yama-ajisai; the beech-forest form on the Sea of Japan side is ezo-ajisai."},
  "sci": {"text":"Hydrangea serrata","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/saxifrage/hydrangea/ser.html","https://api.gbif.org/v1/species/7319016"],"checked":"2026-10","sig":"12e97e88","note":"The Shirakami plant is var. yesoensis (ezo-ajisai), accepted by GBIF (https://api.gbif.org/v1/species/3645548); also published as subspecies yezoensis."},
  "wiki": "Hydrangea_serrata",
  "range": {"text":"Mountains of Japan and Korea","src":["https://en.wikipedia.org/wiki/Hydrangea_serrata","https://www.rinya.maff.go.jp/tohoku/syo/huzisato/zukan/ezoajisai.html"],"checked":"2026-10","sig":"4e09c746"},
  "moisture": "moist",
  "habitat": {"text":"Mountain hydrangea grows in half-shady, damp mountain woods, especially along streams.","src":["https://weathernews.jp/news/202506/110176/","https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/ajisai.html"],"checked":"2026-10","sig":"12ee1dba","note":"Mainly Pacific-side; the Japan Sea form in northern Honshu is a different variety, so this is a range stretch."},
  "light": "part",
  "openings": false,
  "with": []
 },
 "toadlily": {
  "name": {"text":"Toad lily","src":["https://en.wikipedia.org/wiki/Tricyrtis_latifolia"],"checked":"2026-10","sig":"1fac44ea","note":"Yellow-flowered toad lily; Japanese name tamagawa-hototogisu. Weak-ish: only Wikipedia gives an English name for this exact species."},
  "sci": {"text":"Tricyrtis latifolia","src":["https://www.pref.kyoto.jp/kankyo/rdb/bio/db/flo0724.html","https://api.gbif.org/v1/species/2752139"],"checked":"2026-10","sig":"c01685ef"},
  "wiki": "Tricyrtis_latifolia",
  "range": {"text":"Hokkaido, Honshu, Shikoku and Kyushu, Japan","src":["https://www.pref.kyoto.jp/kankyo/rdb/bio/db/flo0724.html","https://en.wikipedia.org/wiki/Tricyrtis_latifolia"],"checked":"2026-10","sig":"dd3c31a4"},
  "moisture": "moist",
  "habitat": {"text":"Toad lilies grow on damp, rocky, half-shady spots and forest edges in the mountains.","src":["https://www.pref.oita.jp/10550/reddata2011/pdf/rdb/02/ss170.pdf","https://www.rinya.maff.go.jp/tohoku/syo/asahi/shasinkan/kusabana.html"],"checked":"2026-10","sig":"5ff9d323"},
  "light": "part",
  "openings": true,
  "with": []
 },
 "enreiso": {
  "name": {"text":"Japanese trillium","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/trillium/ape.html"],"checked":"2026-10","sig":"c5b5ee7c","note":"Japanese name enreiso."},
  "sci": {"text":"Trillium apetalon","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/trillium/ape.html","https://api.gbif.org/v1/species/2742312"],"checked":"2026-10","sig":"6ff960d5","note":"Older Japanese lists (e.g. Forestry Agency Asahi-Shonai page) use 'Trillium smallii' for enreiso, but that name belongs to a different species (Kojima-enreiso, Sakhalin-Hokkaido)."},
  "wiki": "Trillium",
  "range": {"text":"Japan, Sakhalin and the southern Kuril Islands","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/trillium/ape.html","https://www.rinya.maff.go.jp/tohoku/syo/huzisato/zukan/enreisou.html"],"checked":"2026-10","sig":"4503d1b3"},
  "moisture": "moist",
  "habitat": {"text":"Japanese trillium grows on the shady, somewhat damp floor of deciduous forests.","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/trillium/ape.html","https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%B3%E3%83%AC%E3%82%A4%E3%82%BD%E3%82%A6"],"checked":"2026-10","sig":"5574f5fa"},
  "light": "shade",
  "openings": false,
  "with": []
 },
 "royalfuchsia": {
  "name": {"text":"Royal fuchsia","src":["https://www.rhs.org.uk/plants/7516/fuchsia-regia/details"],"checked":"2026-10","sig":"f8a3d8bf","note":"Portuguese: brinco-de-princesa (princess's earring), listed by Flora e Funga do Brasil and GBIF (https://api.gbif.org/v1/species/114748016/vernacularNames?limit=100, https://api.gbif.org/v1/species/7322827/vernacularNames?limit=100)."},
  "sci": {"text":"Fuchsia regia","src":["https://api.gbif.org/v1/species/114748016","https://api.gbif.org/v1/species/114748016/speciesProfiles"],"checked":"2026-10","sig":"610e1078","note":"Flora e Funga do Brasil FB3955. Southern araucaria-forest plants belong mostly to subsp. reitzii (Smithsonian Onagraceae account)."},
  "range": {"text":"Southeastern and southern Brazil, from Minas Gerais to Rio Grande do Sul","src":["https://api.gbif.org/v1/species/114748016/distributions","https://api.gbif.org/v1/species/207340789/distributions?limit=100","https://naturalhistory2.si.edu/botany/onagraceae/speciesdescr.cfm?myID=3651"],"checked":"2026-10","sig":"9e84692a","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. The Smithsonian Onagraceae account ties subsp. reitzii to Araucaria forests of the southern plateau (Paraná to Rio Grande do Sul). Terrestrial shrub that often scrambles; flowers hang low."},
  "moisture": "moist",
  "habitat": {"text":"This climbing fuchsia scrambles over bushes at the edges of cool, damp mountain forests with araucaria pines, often near streams.","src":["https://naturalhistory2.si.edu/botany/onagraceae/speciesdescr.cfm?myID=3651","https://api.gbif.org/v1/occurrence/2237752007","https://api.gbif.org/v1/occurrence/1077341220"],"checked":"2026-10","sig":"28338226"},
  "light": "part",
  "openings": true,
  "with": ["paranapine"]
 },
 "anisesage": {
  "name": {"text":"Anise-scented sage","src":["https://en.wikipedia.org/wiki/Salvia_guaranitica","https://api.gbif.org/v1/species/114635103/vernacularNames?limit=100"],"checked":"2026-10","sig":"326ed5c5","note":"Also called hummingbird sage. Portuguese: sálvia-azul (Flora e Funga do Brasil vernacular list)."},
  "sci": {"text":"Salvia guaranitica","src":["https://api.gbif.org/v1/species/114635103","https://api.gbif.org/v1/species/114635103/speciesProfiles"],"checked":"2026-10","sig":"643ee842","note":"Flora e Funga do Brasil FB8322."},
  "range": {"text":"Southern and southeastern Brazil, Paraguay, Uruguay and northern Argentina","src":["https://api.gbif.org/v1/species/114635103/distributions","https://api.gbif.org/v1/species/207221721/distributions?limit=100","https://en.wikipedia.org/wiki/Salvia_guaranitica"],"checked":"2026-10","sig":"ef270bf0","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. Also listed for gallery forest and disturbed ground."},
  "moisture": "moist",
  "habitat": {"text":"This blue sage grows at the shady edges of araucaria pine forests and along forest roads and streams.","src":["https://api.gbif.org/v1/occurrence/1086634013","https://api.gbif.org/v1/occurrence/5830176326","https://api.gbif.org/v1/occurrence/2464879569"],"checked":"2026-10","sig":"57a43f97"},
  "light": "part",
  "openings": true,
  "with": ["paranapine"]
 },
 "flowerofsouls": {
  "name": {"text":"Flower-of-souls","src":["https://en.wikipedia.org/wiki/Senecio_brasiliensis"],"checked":"2026-10","sig":"b3dd1c04","note":"The English name translates Portuguese flor-das-almas; 'hemp-leaf ragwort' is also listed (GBIF https://api.gbif.org/v1/species/3107780/vernacularNames?limit=100). Other Portuguese names: maria-mole, malmequer-amarelo. Its Guarani name means 'August flower'. Toxic to livestock."},
  "sci": {"text":"Senecio brasiliensis","src":["https://api.gbif.org/v1/species/114695824","https://api.gbif.org/v1/species/114695824/speciesProfiles"],"checked":"2026-10","sig":"bd1b98d6","note":"Flora e Funga do Brasil FB27354."},
  "range": {"text":"Southern and southeastern Brazil to Paraguay, Uruguay, Bolivia and northern Argentina","src":["https://api.gbif.org/v1/species/114695824/distributions","https://api.gbif.org/v1/species/206747432/distributions?limit=100","https://en.wikipedia.org/wiki/Senecio_brasiliensis"],"checked":"2026-10","sig":"7ae8be02","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. A plant of clearings, edges and old pastures rather than deep shade."},
  "moisture": "mesic",
  "habitat": {"text":"Flower-of-souls is a tall yellow daisy-weed of sunny pastures, grasslands, roadsides and forest edges.","src":["https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1083486/1/COT83PlantasToxicasSenecio.pdf","https://www.ufrgs.br/floracampestre/?p=2230","https://api.gbif.org/v1/occurrence/1275056152"],"checked":"2026-10","sig":"b2713696"},
  "light": "sun",
  "openings": true,
  "with": []
 },
 "palacelily": {
  "name": {"text":"Lily-of-the-palace","src":["https://en.wikipedia.org/wiki/Hippeastrum_aulicum","https://api.gbif.org/v1/species/2854386/vernacularNames?limit=100"],"checked":"2026-10","sig":"9c164a2e","note":"Portuguese: açucena, flor-da-imperatriz, cebola-do-mato (UFPR thesis record: https://agris.fao.org/search/en/records/67dab260677d8be0233b1eb9)."},
  "sci": {"text":"Hippeastrum aulicum","src":["https://api.gbif.org/v1/species/114682240","https://api.gbif.org/v1/species/114682240/speciesProfiles"],"checked":"2026-10","sig":"297082c5","note":"Flora e Funga do Brasil FB4355."},
  "formerly": "Amaryllis aulica",
  "range": {"text":"Eastern and southern Brazil and Paraguay","src":["https://api.gbif.org/v1/species/114682240/distributions","https://api.gbif.org/v1/species/206499521/distributions?limit=100","https://en.wikipedia.org/wiki/Hippeastrum_aulicum"],"checked":"2026-10","sig":"d44360e0","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. Habit caveat: a UFPR thesis calls it a facultative epiphyte, and Flora e Funga do Brasil lists it as growing on trees, on rocks and on the ground. Show it on the ground, on a mossy rock or low on a trunk."},
  "moisture": "moist",
  "habitat": {"text":"Lily-of-the-palace usually perches on tree trunks or mossy rocks inside humid coastal rainforest, and only sometimes grows on the ground.","src":["https://agris.fao.org/search/en/records/67dab260677d8be0233b1eb9","https://pacificbulbsociety.org/pbswiki/index.php/Hippeastrum_aulicum","https://api.gbif.org/v1/occurrence/1077405797"],"checked":"2026-10","sig":"2bad6851","note":"Its southern records come from coastal dense rainforest, not araucaria forest, so it is only a rare visitor here."},
  "light": "part",
  "openings": false,
  "with": [],
  "epiphyte": true
 },
 "pinksorrel": {
  "name": {"text":"Pink-sorrel","src":["https://en.wikipedia.org/wiki/Oxalis_articulata","https://api.gbif.org/v1/species/2891664/vernacularNames?limit=100"],"checked":"2026-10","sig":"a704976c","note":"Also windowbox wood-sorrel. Brazilians call Oxalis species in general azedinha ('little sour one'); GBIF's vernacular list gives azedinha-de-flores-vermelhas for this species."},
  "sci": {"text":"Oxalis articulata","src":["https://api.gbif.org/v1/species/114759226","https://api.gbif.org/v1/species/114759226/speciesProfiles"],"checked":"2026-10","sig":"9faa3323","note":"Flora e Funga do Brasil FB12444."},
  "formerly": "Oxalis rubra",
  "range": {"text":"Southern Brazil, Uruguay and northern Argentina","src":["https://api.gbif.org/v1/species/114759226/distributions","https://api.gbif.org/v1/species/207451234/distributions?limit=100","https://en.wikipedia.org/wiki/Oxalis_articulata"],"checked":"2026-10","sig":"6eff0cf6","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. Also grows in grassland (campo), so place it in clearings and on sunny edges. Naturalized widely elsewhere."},
  "moisture": "mesic",
  "habitat": {"text":"Pink sorrel is a low clover-like plant of open grassy fields, forest edges, roadsides and damp spots near streams.","src":["https://api.gbif.org/v1/occurrence/2996167492","https://api.gbif.org/v1/occurrence/3827975250","https://api.gbif.org/v1/occurrence/1077431026"],"checked":"2026-10","sig":"8100235d"},
  "light": "sun",
  "openings": true,
  "with": []
 },
 "brazilplume": {
  "name": {"text":"Brazilian plume flower","src":["https://en.wikipedia.org/wiki/Justicia_carnea","https://api.gbif.org/v1/species/3770188/vernacularNames?limit=100"],"checked":"2026-10","sig":"08c80486","note":"Also flamingo flower or jacobinia (Wikipedia)."},
  "sci": {"text":"Justicia carnea","src":["https://api.gbif.org/v1/species/114680007","https://api.gbif.org/v1/species/114680007/speciesProfiles"],"checked":"2026-10","sig":"16f82438","note":"Flora e Funga do Brasil FB4141."},
  "formerly": "Jacobinia carnea",
  "range": {"text":"Eastern and southern Brazil, Paraguay and northeastern Argentina","src":["https://api.gbif.org/v1/species/114680007/distributions","https://api.gbif.org/v1/species/206499720/distributions?limit=100","https://en.wikipedia.org/wiki/Justicia_carnea"],"checked":"2026-10","sig":"7e462df2","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. A forest subshrub."},
  "moisture": "moist",
  "habitat": {"text":"The Brazilian plume flower is a pink-flowered shrub of shady, damp forest floors, including inside araucaria forests.","src":["https://api.gbif.org/v1/occurrence/3013421581","https://api.gbif.org/v1/occurrence/1090163227","https://sweetgum.nybg.org/science/vh/specimen-details/?irn=626288"],"checked":"2026-10","sig":"de9d8416"},
  "light": "shade",
  "openings": false,
  "with": ["paranapine"]
 },
 "wildbanana": {
  "name": {"text":"Wild banana","src":["https://api.gbif.org/v1/species/5287902/vernacularNames?limit=100","https://revistaeletronica.icmbio.gov.br/BioBR/article/download/276/193/1082"],"checked":"2026-10","sig":"75ff2f67","note":"No standard English name; GBIF lists English 'wild banana'. Portuguese: banana-do-mato ('forest banana', for its yellow fruit), caraguatá, gravatá."},
  "sci": {"text":"Bromelia antiacantha","src":["https://api.gbif.org/v1/species/114655459","https://api.gbif.org/v1/species/114655459/speciesProfiles"],"checked":"2026-10","sig":"e7f5238f","note":"Flora e Funga do Brasil FB5956."},
  "range": {"text":"Eastern and southern Brazil and Uruguay","src":["https://api.gbif.org/v1/species/114655459/distributions","https://api.gbif.org/v1/species/206807848/distributions?limit=100","https://ri.uepg.br/bitstreams/8392ba94-aefd-45da-83e7-30b7f6c9bdbb/download"],"checked":"2026-10","sig":"12789e0d","note":"Flora e Funga do Brasil lists only Restinga as its vegetation type. However, a demographic study (ICMBio, Biodiversidade Brasileira 2012, https://revistaeletronica.icmbio.gov.br/BioBR/article/download/276/193/1082) followed a wild population under Floresta Ombrófila Mista at Floresta Nacional de Três Barras, Santa Catarina. It describes the plant as a large terrestrial plant of moist forest soils, so it is ground-dwelling, as requested."},
  "moisture": "moist",
  "habitat": {"text":"Wild banana is a big spiny ground bromeliad that forms clumps on damp soil under araucaria forest and in coastal scrub.","src":["https://revistaeletronica.icmbio.gov.br/BioBR/article/download/276/193/1082","https://www.ufrgs.br/floracampestre/bromelia-anthiacantha/","https://ilhaviva.eba.ufrj.br/wp-content/uploads/2023/04/bromeliaantiacantha.pdf"],"checked":"2026-10","sig":"4bc9eef8"},
  "light": "part",
  "openings": false,
  "with": ["paranapine"]
 },
 "woollybegonia": {
  "name": {"text":"Woolly bear begonia","src":["https://api.gbif.org/v1/species/7303195/vernacularNames?limit=100"],"checked":"2026-10","sig":"a77fe602","note":"Also sold as Schmidt's begonia (https://arthurleej.com/plant-of-month/p-o-m-Mar14.html). Portuguese: generic begônia; no species-specific name verified."},
  "sci": {"text":"Begonia subvillosa","src":["https://api.gbif.org/v1/species/114698344","https://api.gbif.org/v1/species/114698344/speciesProfiles"],"checked":"2026-10","sig":"91cccc19","note":"Flora e Funga do Brasil FB5728."},
  "formerly": "Begonia schmidtiana",
  "wiki": "Begonia",
  "range": {"text":"Southern and southeastern Brazil, Paraguay and northeastern Argentina","src":["https://api.gbif.org/v1/species/114698344/distributions","https://api.gbif.org/v1/species/206766336/distributions?limit=100"],"checked":"2026-10","sig":"dd1a1a6d","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. Terrestrial or rock-dwelling herb."},
  "moisture": "moist",
  "habitat": {"text":"This hairy begonia grows in deep shade on wet, rocky banks and forest floors, often beside streams.","src":["https://api.gbif.org/v1/occurrence/4974624363","https://api.gbif.org/v1/occurrence/1086654379","https://api.gbif.org/v1/occurrence/6184274335"],"checked":"2026-10","sig":"6c3fc6bc"},
  "light": "shade",
  "openings": false,
  "with": ["paranapine"]
 },
 "smallspiderwort": {
  "name": {"text":"Small-leaf spiderwort","src":["https://en.wikipedia.org/wiki/Tradescantia_fluminensis","https://api.gbif.org/v1/species/2765156/vernacularNames?limit=100"],"checked":"2026-10","sig":"1a08875b","note":"Deliberately avoids its other common English name, which uses an old slur. Portuguese: trapoeraba, erva-das-galinhas (Flora e Funga do Brasil vernacular list)."},
  "sci": {"text":"Tradescantia fluminensis","src":["https://api.gbif.org/v1/species/114706866","https://api.gbif.org/v1/species/114706866/speciesProfiles"],"checked":"2026-10","sig":"c0d18e81","note":"Flora e Funga do Brasil FB126857."},
  "range": {"text":"Southeastern and southern Brazil, Paraguay and northern Argentina","src":["https://api.gbif.org/v1/species/114706866/distributions","https://api.gbif.org/v1/species/206911752/distributions?limit=100"],"checked":"2026-10","sig":"38339208","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. Strongest habitat evidence in this set: it was found in all 30 plots of the herb-layer survey of araucaria forest in Aparados da Serra National Park (https://seer.ufrgs.br/rbrasbioci/article/download/115401/62696/0) and is listed in a Guarapuava araucaria-forest survey (https://www.anchietano.unisinos.br/publicacoes/botanica/volumes/062/14.pdf). It is invasive outside South America but native here."},
  "moisture": "moist",
  "habitat": {"text":"Small-leaf spiderwort is a creeping white-flowered herb that carpets damp, shady forest floors under araucaria and imbuia trees.","src":["https://api.gbif.org/v1/occurrence/2427812247","https://api.gbif.org/v1/occurrence/4439734802","https://api.gbif.org/v1/occurrence/1423897832"],"checked":"2026-10","sig":"186428f6"},
  "light": "shade",
  "openings": false,
  "with": ["paranapine","imbuia"]
 },
 "mossverbena": {
  "name": {"text":"Moss verbena","src":["https://en.wikipedia.org/wiki/Glandularia_aristigera","https://api.gbif.org/v1/species/5667614/vernacularNames?limit=100"],"checked":"2026-10","sig":"a38cf354","note":"No Portuguese name verified for this species."},
  "sci": {"text":"Glandularia aristigera","src":["https://api.gbif.org/v1/species/114643367","https://api.gbif.org/v1/species/114643367/speciesProfiles"],"checked":"2026-10","sig":"30785e93","note":"Flora e Funga do Brasil FB15141."},
  "formerly": "Verbena tenuisecta",
  "range": {"text":"Southern Brazil, Bolivia, Paraguay, Uruguay and northern Argentina","src":["https://api.gbif.org/v1/species/114643367/distributions","https://api.gbif.org/v1/species/207856590/distributions?limit=100","https://en.wikipedia.org/wiki/Glandularia_aristigera"],"checked":"2026-10","sig":"f634945b","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. Also grows in high grassland. It loves sun, so place it in clearings and on sunny edges, not deep shade."},
  "moisture": "dry",
  "habitat": {"text":"Moss verbena is a low purple-flowered plant of sunny, dry grasslands and flat rocky outcrops near the forest.","src":["https://api.gbif.org/v1/occurrence/3868130309","https://api.gbif.org/v1/occurrence/6160797481","https://api.gbif.org/v1/occurrence/1095349101"],"checked":"2026-10","sig":"81aa3e89"},
  "light": "sun",
  "openings": true,
  "with": []
 },
 "tropmilkweed": {
  "name": {"text":"Tropical milkweed","src":["https://en.wikipedia.org/wiki/Asclepias_curassavica","https://api.gbif.org/v1/species/3170241/vernacularNames?limit=100"],"checked":"2026-10","sig":"af829b3a","note":"Also called bloodflower or scarlet milkweed. Portuguese names in the Flora e Funga do Brasil list include oficial-de-sala, paina-de-sapo and cega-olho (https://api.gbif.org/v1/species/114684378/vernacularNames?limit=100). Milky sap is poisonous and irritates eyes."},
  "sci": {"text":"Asclepias curassavica","src":["https://api.gbif.org/v1/species/114684378","https://api.gbif.org/v1/species/114684378/speciesProfiles"],"checked":"2026-10","sig":"49f4b9be","note":"Flora e Funga do Brasil FB4517. It lists the plant as native, a terrestrial herb, with vegetation types that include 'Floresta Ombrófila Mista' (araucaria forest), as well as many other forest and open types."},
  "range": {"text":"Tropical and subtropical Americas, from Mexico and the Caribbean to Bolivia and southern Brazil","src":["https://api.gbif.org/v1/species/206554517/distributions?limit=100","https://api.gbif.org/v1/species/114684378/distributions","https://en.wikipedia.org/wiki/Asclepias_curassavica"],"checked":"2026-10","sig":"563b4557","note":"Flora e Funga do Brasil marks it native in Paraná and Rio Grande do Sul. Kew's WCVP lists it as native across Brazil (including the South) and Bolivia, but introduced in Argentina and Paraguay. A weedy plant of sunny clearings, edges and roadsides, not deep shade. Widely introduced elsewhere in the tropics."},
  "moisture": "moist",
  "habitat": {"text":"Tropical milkweed is a sun-loving red-and-orange flower of pastures, roadsides, forest edges and damp riverbanks.","src":["https://api.gbif.org/v1/occurrence/2973748428","https://api.gbif.org/v1/occurrence/3069788373","https://api.gbif.org/v1/occurrence/6392814510"],"checked":"2026-10","sig":"b11a79f9"},
  "light": "sun",
  "openings": true,
  "with": []
 }
};
