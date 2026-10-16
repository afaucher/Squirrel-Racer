// Squirrel Ranger species facts: Wildflowers.
// Every claim on a card is {"text", "src": [urls], "checked": "YYYY-MM", "sig", "note"?}.
// "sig" fingerprints the text when it was checked; edit the text and the check flags it for a re-check.
// How to add or fix a fact: docs/ADDING-A-FOREST.md. Validate with: node tools/check_facts.mjs

(window.SPECIES_DATA ||= {}).flowers = {
 "bloodroot": {
  "name": {"text":"Bloodroot","src":["https://www.wildflower.org/plants/result.php?id_plant=SACA13"],"checked":"2026-10","sig":"e91d4cec"},
  "sci": {"text":"Sanguinaria canadensis","src":["https://www.wildflower.org/plants/result.php?id_plant=SACA13"],"checked":"2026-10","sig":"48dd00af"},
  "range": {"text":"Eastern North America","src":["https://www.wildflower.org/plants/result.php?id_plant=SACA13"],"checked":"2026-10","sig":"e0a6cbc7"}
 },
 "trillium": {
  "name": {"text":"Large-flowered trillium","src":["https://www.wildflower.org/plants/result.php?id_plant=TRGR4"],"checked":"2026-10","sig":"c5313389"},
  "sci": {"text":"Trillium grandiflorum","src":["https://www.wildflower.org/plants/result.php?id_plant=TRGR4"],"checked":"2026-10","sig":"53c263a5"},
  "range": {"text":"Eastern North America","src":["https://www.wildflower.org/plants/result.php?id_plant=TRGR4"],"checked":"2026-10","sig":"e0a6cbc7"}
 },
 "vabluebells": {
  "name": {"text":"Virginia bluebells","src":["https://www.wildflower.org/plants/result.php?id_plant=MEVI3"],"checked":"2026-10","sig":"311cfb4a"},
  "sci": {"text":"Mertensia virginica","src":["https://www.wildflower.org/plants/result.php?id_plant=MEVI3"],"checked":"2026-10","sig":"d7a6c60e"},
  "range": {"text":"Eastern United States","src":["https://www.wildflower.org/plants/result.php?id_plant=MEVI3"],"checked":"2026-10","sig":"177acfd7","note":"Also native to a small part of southern Ontario."}
 },
 "wildcolumbine": {
  "name": {"text":"Wild columbine","src":["https://www.fs.usda.gov/database/feis/plants/forb/aqucan/all.html"],"checked":"2026-10","sig":"c1c9d0ce"},
  "sci": {"text":"Aquilegia canadensis","src":["https://www.wildflower.org/plants/result.php?id_plant=AQCA","https://www.fs.usda.gov/database/feis/plants/forb/aqucan/all.html"],"checked":"2026-10","sig":"d2ba13b6"},
  "range": {"text":"Eastern North America","src":["https://www.wildflower.org/plants/result.php?id_plant=AQCA","https://www.fs.usda.gov/database/feis/plants/forb/aqucan/all.html"],"checked":"2026-10","sig":"e0a6cbc7"}
 },
 "mayapple": {
  "name": {"text":"Mayapple","src":["https://www.wildflower.org/plants/result.php?id_plant=POPE"],"checked":"2026-10","sig":"52c21c30"},
  "sci": {"text":"Podophyllum peltatum","src":["https://www.wildflower.org/plants/result.php?id_plant=POPE"],"checked":"2026-10","sig":"4d7468bf"},
  "range": {"text":"Eastern North America","src":["https://www.wildflower.org/plants/result.php?id_plant=POPE"],"checked":"2026-10","sig":"e0a6cbc7"}
 },
 "springbeauty": {
  "name": {"text":"Spring beauty","src":["https://www.wildflower.org/plants/result.php?id_plant=CLVI3"],"checked":"2026-10","sig":"126a3739"},
  "sci": {"text":"Claytonia virginica","src":["https://www.wildflower.org/plants/result.php?id_plant=CLVI3"],"checked":"2026-10","sig":"9c7a95d6"},
  "range": {"text":"Eastern United States","src":["https://www.wildflower.org/plants/result.php?id_plant=CLVI3"],"checked":"2026-10","sig":"177acfd7","note":"Also native to a small part of southern Canada."}
 },
 "wildgeranium": {
  "name": {"text":"Wild geranium","src":["https://www.wildflower.org/plants/result.php?id_plant=GEMA"],"checked":"2026-10","sig":"6812ee04"},
  "sci": {"text":"Geranium maculatum","src":["https://www.wildflower.org/plants/result.php?id_plant=GEMA"],"checked":"2026-10","sig":"654907af"},
  "range": {"text":"Eastern North America","src":["https://www.wildflower.org/plants/result.php?id_plant=GEMA"],"checked":"2026-10","sig":"e0a6cbc7"}
 },
 "blackeyedsusan": {
  "name": {"text":"Black-eyed Susan","src":["https://www.wildflower.org/plants/result.php?id_plant=RUHI2"],"checked":"2026-10","sig":"186d5fa1"},
  "sci": {"text":"Rudbeckia hirta","src":["https://www.wildflower.org/plants/result.php?id_plant=RUHI2"],"checked":"2026-10","sig":"552519f6"},
  "range": {"text":"Eastern and central North America","src":["https://www.wildflower.org/plants/result.php?id_plant=RUHI2"],"checked":"2026-10","sig":"e07bb2df"}
 },
 "neaster": {
  "name": {"text":"New England aster","src":["https://www.wildflower.org/plants/result.php?id_plant=SYNO2"],"checked":"2026-10","sig":"c4536629"},
  "sci": {"text":"Symphyotrichum novae-angliae","src":["https://www.wildflower.org/plants/result.php?id_plant=SYNO2"],"checked":"2026-10","sig":"92fedb26"},
  "range": {"text":"Eastern and central North America","src":["https://www.wildflower.org/plants/result.php?id_plant=SYNO2"],"checked":"2026-10","sig":"e07bb2df"}
 },
 "goldenrod": {
  "name": {"text":"Canada goldenrod","src":["https://www.wildflower.org/plants/result.php?id_plant=SOCA6"],"checked":"2026-10","sig":"d21b6b42"},
  "sci": {"text":"Solidago canadensis","src":["https://www.wildflower.org/plants/result.php?id_plant=SOCA6"],"checked":"2026-10","sig":"66e3ff09"},
  "range": {"text":"Across North America","src":["https://www.wildflower.org/plants/result.php?id_plant=SOCA6"],"checked":"2026-10","sig":"5b7bf242"}
 },
 "coneflower": {
  "name": {"text":"Purple coneflower","src":["https://www.wildflower.org/plants/result.php?id_plant=ECPU"],"checked":"2026-10","sig":"378eb1b0"},
  "sci": {"text":"Echinacea purpurea","src":["https://www.wildflower.org/plants/result.php?id_plant=ECPU"],"checked":"2026-10","sig":"9c984d0a"},
  "range": {"text":"Central and eastern United States","src":["https://www.wildflower.org/plants/result.php?id_plant=ECPU"],"checked":"2026-10","sig":"198f98b2"}
 },
 "fireweed": {
  "name": {"text":"Fireweed","src":["https://www.wildflower.org/plants/result.php?id_plant=CHAN9","https://data.canadensys.net/vascan/name/Chamaenerion%20angustifolium"],"checked":"2026-10","sig":"f6ade389"},
  "sci": {"text":"Chamaenerion angustifolium","src":["https://data.canadensys.net/vascan/name/Chamaenerion%20angustifolium","https://en.wikipedia.org/wiki/Chamaenerion_angustifolium"],"checked":"2026-10","sig":"08f03569","note":"Chamaenerion per VASCAN/FNA; Kew may still treat it as Epilobium angustifolium."},
  "range": {"text":"Across the Northern Hemisphere","src":["https://en.wikipedia.org/wiki/Chamaenerion_angustifolium"],"checked":"2026-10","sig":"c4d6300b"}
 },
 "bunchberry": {
  "name": {"text":"Bunchberry","src":["https://www.wildflower.org/plants/result.php?id_plant=COCA13"],"checked":"2026-10","sig":"a23a6369"},
  "sci": {"text":"Cornus canadensis","src":["https://www.wildflower.org/plants/result.php?id_plant=COCA13"],"checked":"2026-10","sig":"15c54480"},
  "range": {"text":"Northern North America and northeast Asia","src":["https://www.wildflower.org/plants/result.php?id_plant=COCA13"],"checked":"2026-10","sig":"4543af55"}
 },
 "twinflower": {
  "name": {"text":"Twinflower","src":["https://www.wildflower.org/plants/result.php?id_plant=LIBO3"],"checked":"2026-10","sig":"1dbc3007"},
  "sci": {"text":"Linnaea borealis","src":["https://www.wildflower.org/plants/result.php?id_plant=LIBO3","https://en.wikipedia.org/wiki/Linnaea_borealis"],"checked":"2026-10","sig":"0d2edbd0"},
  "range": {"text":"Northern forests around the world","src":["https://en.wikipedia.org/wiki/Linnaea_borealis"],"checked":"2026-10","sig":"d2cf74fc"}
 },
 "pricklyrose": {
  "name": {"text":"Prickly wild rose","src":["https://en.wikipedia.org/wiki/Rosa_acicularis"],"checked":"2026-10","sig":"45450c47"},
  "sci": {"text":"Rosa acicularis","src":["https://www.fs.usda.gov/database/feis/plants/shrub/rosaci/all.html","https://www.wildflower.org/plants/result.php?id_plant=ROAC"],"checked":"2026-10","sig":"c4e7a066"},
  "range": {"text":"Northern North America, Europe and Asia","src":["https://en.wikipedia.org/wiki/Rosa_acicularis","https://www.fs.usda.gov/database/feis/plants/shrub/rosaci/all.html"],"checked":"2026-10","sig":"233c3ef9"}
 },
 "ladyslipper": {
  "name": {"text":"Showy lady's-slipper","src":["https://gobotany.nativeplanttrust.org/species/cypripedium/reginae/","https://www.fs.usda.gov/wildflowers/plant-of-the-week/cypripedium_reginae.shtml"],"checked":"2026-10","sig":"42c01a08"},
  "sci": {"text":"Cypripedium reginae","src":["https://gobotany.nativeplanttrust.org/species/cypripedium/reginae/"],"checked":"2026-10","sig":"557c9d66"},
  "range": {"text":"Northeastern North America","src":["https://www.fs.usda.gov/wildflowers/plant-of-the-week/cypripedium_reginae.shtml","https://en.wikipedia.org/wiki/Cypripedium_reginae"],"checked":"2026-10","sig":"27b95d40"}
 },
 "pearly": {
  "name": {"text":"Pearly everlasting","src":["https://www.wildflower.org/plants/result.php?id_plant=ANMA"],"checked":"2026-10","sig":"8a23e1a0"},
  "sci": {"text":"Anaphalis margaritacea","src":["https://www.wildflower.org/plants/result.php?id_plant=ANMA"],"checked":"2026-10","sig":"87fc618a"},
  "range": {"text":"Across North America and Asia","src":["https://en.wikipedia.org/wiki/Anaphalis_margaritacea","https://www.wildflower.org/plants/result.php?id_plant=ANMA"],"checked":"2026-10","sig":"92bd9161"}
 },
 "marshmarigold": {
  "name": {"text":"Marsh marigold","src":["https://en.wikipedia.org/wiki/Caltha_palustris"],"checked":"2026-10","sig":"b28f4bfc"},
  "sci": {"text":"Caltha palustris","src":["https://www.wildflower.org/plants/result.php?id_plant=CAPA5"],"checked":"2026-10","sig":"4eade349"},
  "range": {"text":"Wetlands across the Northern Hemisphere","src":["https://en.wikipedia.org/wiki/Caltha_palustris","https://www.wildflower.org/plants/result.php?id_plant=CAPA5"],"checked":"2026-10","sig":"6ec42716"}
 },
 "labradortea": {
  "name": {"text":"Labrador tea","src":["https://data.canadensys.net/vascan/name/Rhododendron%20groenlandicum"],"checked":"2026-10","sig":"246cb8c2"},
  "sci": {"text":"Rhododendron groenlandicum","src":["https://data.canadensys.net/vascan/name/Rhododendron%20groenlandicum"],"checked":"2026-10","sig":"7ed2d568"},
  "range": {"text":"Northern North America and Greenland","src":["https://data.canadensys.net/vascan/name/Rhododendron%20groenlandicum","https://temperate.theferns.info/plant/Rhododendron+groenlandicum"],"checked":"2026-10","sig":"36b36c80"}
 },
 "arcticlupine": {
  "name": {"text":"Arctic lupine","src":["https://depts.washington.edu/propplnt/Plants/lupinus%20arcticus.htm"],"checked":"2026-10","sig":"0ddfc00b"},
  "sci": {"text":"Lupinus arcticus","src":["https://panarcticflora.org/taxon/630101"],"checked":"2026-10","sig":"21471c49"},
  "range": {"text":"Alaska and northwestern Canada","src":["https://panarcticflora.org/taxon/630101"],"checked":"2026-10","sig":"ca7c65e5"}
 },
 "woodlily": {
  "name": {"text":"Wood lily","src":["https://www.wildflower.org/plants/result.php?id_plant=LIPH"],"checked":"2026-10","sig":"4bedae34"},
  "sci": {"text":"Lilium philadelphicum","src":["https://www.wildflower.org/plants/result.php?id_plant=LIPH"],"checked":"2026-10","sig":"25cb7bc7"},
  "range": {"text":"Across much of North America","src":["https://www.wildflower.org/plants/result.php?id_plant=LIPH"],"checked":"2026-10","sig":"f1181bc7"}
 },
 "harebell": {
  "name": {"text":"Harebell","src":["https://www.wildflower.org/plants/result.php?id_plant=CARO2"],"checked":"2026-10","sig":"04f4d7ec"},
  "sci": {"text":"Campanula rotundifolia","src":["https://www.wildflower.org/plants/result.php?id_plant=CARO2"],"checked":"2026-10","sig":"448fe44f"},
  "range": {"text":"Across the Northern Hemisphere","src":["https://www.wildflower.org/plants/result.php?id_plant=CARO2"],"checked":"2026-10","sig":"c4d6300b"}
 },
 "scarletgilia": {
  "name": {"text":"Scarlet gilia","src":["https://www.wildflower.org/plants/result.php?id_plant=IPAG"],"checked":"2026-10","sig":"8645dedc"},
  "sci": {"text":"Ipomopsis aggregata","src":["https://www.wildflower.org/plants/result.php?id_plant=IPAG"],"checked":"2026-10","sig":"3ad1a828"},
  "range": {"text":"Western North America","src":["https://www.wildflower.org/plants/result.php?id_plant=IPAG"],"checked":"2026-10","sig":"d869cfe0"}
 },
 "paintbrush": {
  "name": {"text":"Wholeleaf Indian paintbrush","src":["https://www.wildflower.org/plants/result.php?id_plant=CAIN14"],"checked":"2026-10","sig":"3e88ec4b"},
  "sci": {"text":"Castilleja integra","src":["https://www.wildflower.org/plants/result.php?id_plant=CAIN14"],"checked":"2026-10","sig":"ac74b0d9"},
  "range": {"text":"Southwest US and northern Mexico","src":["https://www.wildflower.org/plants/result.php?id_plant=CAIN14"],"checked":"2026-10","sig":"2fb1c868"}
 },
 "silverylupine": {
  "name": {"text":"Silvery lupine","src":["https://www.wildflower.org/plants/result.php?id_plant=LUAR3"],"checked":"2026-10","sig":"57cf831c"},
  "sci": {"text":"Lupinus argenteus","src":["https://www.wildflower.org/plants/result.php?id_plant=LUAR3"],"checked":"2026-10","sig":"8cd8860d"},
  "range": {"text":"Western North America","src":["https://www.wildflower.org/plants/result.php?id_plant=LUAR3"],"checked":"2026-10","sig":"d869cfe0"}
 },
 "blueflax": {
  "name": {"text":"Blue flax","src":["https://www.fs.usda.gov/database/feis/plants/forb/linlew/all.html"],"checked":"2026-10","sig":"6ed043ee"},
  "sci": {"text":"Linum lewisii","src":["https://www.fs.usda.gov/database/feis/plants/forb/linlew/all.html","https://www.wildflower.org/plants/result.php?id_plant=LILE3"],"checked":"2026-10","sig":"c8b2e086"},
  "range": {"text":"Western North America","src":["https://www.wildflower.org/plants/result.php?id_plant=LILE3","https://www.fs.usda.gov/database/feis/plants/forb/linlew/all.html"],"checked":"2026-10","sig":"d869cfe0"}
 },
 "rmiris": {
  "name": {"text":"Rocky Mountain iris","src":["https://www.wildflower.org/plants/result.php?id_plant=IRMI"],"checked":"2026-10","sig":"b3bdab5b"},
  "sci": {"text":"Iris missouriensis","src":["https://www.wildflower.org/plants/result.php?id_plant=IRMI"],"checked":"2026-10","sig":"b6a5f381"},
  "range": {"text":"Western North America","src":["https://www.wildflower.org/plants/result.php?id_plant=IRMI"],"checked":"2026-10","sig":"d869cfe0"}
 },
 "bluecolumbine": {
  "name": {"text":"Colorado blue columbine","src":["https://www.wildflower.org/plants/result.php?id_plant=AQCO"],"checked":"2026-10","sig":"8c176e4a"},
  "sci": {"text":"Aquilegia coerulea","src":["https://www.wildflower.org/plants/result.php?id_plant=AQCO"],"checked":"2026-10","sig":"7fa777ae"},
  "range": {"text":"Rocky Mountains from Montana and Idaho to Arizona and New Mexico","src":["https://www.wildflower.org/plants/result.php?id_plant=AQCO"],"checked":"2026-10","sig":"482cb2b0"}
 },
 "goldeneye": {
  "name": {"text":"Showy goldeneye","src":["https://www.wildflower.org/plants/result.php?id_plant=HEMU3"],"checked":"2026-10","sig":"11412e2b"},
  "sci": {"text":"Heliomeris multiflora","src":["https://www.wildflower.org/plants/result.php?id_plant=HEMU3"],"checked":"2026-10","sig":"9a12e725"},
  "range": {"text":"Rocky Mountains, the Southwest and northern Mexico","src":["https://www.wildflower.org/plants/result.php?id_plant=HEMU3"],"checked":"2026-10","sig":"1e2d7894"}
 },
 "globemallow": {
  "name": {"text":"Scarlet globemallow","src":["https://www.wildflower.org/plants/result.php?id_plant=SPCO"],"checked":"2026-10","sig":"03af6ee6"},
  "sci": {"text":"Sphaeralcea coccinea","src":["https://www.wildflower.org/plants/result.php?id_plant=SPCO"],"checked":"2026-10","sig":"aeef5a4e"},
  "range": {"text":"Western and central North America","src":["https://www.wildflower.org/plants/result.php?id_plant=SPCO"],"checked":"2026-10","sig":"5f65c9f5"}
 },
 "mexicanhat": {
  "name": {"text":"Mexican hat","src":["https://www.wildflower.org/plants/result.php?id_plant=RACO3"],"checked":"2026-10","sig":"434e7ed3"},
  "sci": {"text":"Ratibida columnifera","src":["https://www.wildflower.org/plants/result.php?id_plant=RACO3"],"checked":"2026-10","sig":"ecdf052b"},
  "range": {"text":"Central and western North America","src":["https://www.wildflower.org/plants/result.php?id_plant=RACO3"],"checked":"2026-10","sig":"96d1fb97"}
 },
 "blanketflower": {
  "name": {"text":"Common blanketflower","src":["https://en.wikipedia.org/wiki/Gaillardia_aristata"],"checked":"2026-10","sig":"d0d6def6"},
  "sci": {"text":"Gaillardia aristata","src":["https://www.wildflower.org/plants/result.php?id_plant=GAAR","https://en.wikipedia.org/wiki/Gaillardia_aristata"],"checked":"2026-10","sig":"67dc0c5e"},
  "range": {"text":"Western North America","src":["https://www.wildflower.org/plants/result.php?id_plant=GAAR","https://en.wikipedia.org/wiki/Gaillardia_aristata"],"checked":"2026-10","sig":"d869cfe0"}
 },
 "penstemon": {
  "name": {"text":"Beardlip penstemon","src":["https://www.wildflower.org/plants/result.php?id_plant=PEBA2"],"checked":"2026-10","sig":"4504e821"},
  "sci": {"text":"Penstemon barbatus","src":["https://www.wildflower.org/plants/result.php?id_plant=PEBA2"],"checked":"2026-10","sig":"657df7b2"},
  "range": {"text":"Southwest US and Mexico","src":["https://www.wildflower.org/plants/result.php?id_plant=PEBA2"],"checked":"2026-10","sig":"010b10dd"}
 },
 "bluebell": {
  "name": {"text":"Bluebell","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/bluebell/","https://www.plantlife.org.uk/plants-and-fungi/bluebell/"],"checked":"2026-10","sig":"8e64d602"},
  "sci": {"text":"Hyacinthoides non-scripta","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/bluebell/","https://www.plantlife.org.uk/plants-and-fungi/bluebell/"],"checked":"2026-10","sig":"c14e37ef"},
  "range": {"text":"Western Europe; Britain has about half the world's bluebells","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/bluebell/","https://www.plantlife.org.uk/plants-and-fungi/bluebell/"],"checked":"2026-10","sig":"0306c0e0"}
 },
 "woodanemone": {
  "name": {"text":"Wood anemone","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/wood-anemone/"],"checked":"2026-10","sig":"970d27f8"},
  "sci": {"text":"Anemonoides nemorosa","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/wood-anemone/","https://en.wikipedia.org/wiki/Anemonoides_nemorosa"],"checked":"2026-10","sig":"cde680bc"},
  "formerly": "Anemone nemorosa",
  "range": {"text":"Europe","src":["https://en.wikipedia.org/wiki/Anemonoides_nemorosa"],"checked":"2026-10","sig":"e595f45d"}
 },
 "primrose": {
  "name": {"text":"Primrose","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/primrose/"],"checked":"2026-10","sig":"b7b974f0"},
  "sci": {"text":"Primula vulgaris","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/primrose/","https://en.wikipedia.org/wiki/Primula_vulgaris"],"checked":"2026-10","sig":"4b9cfd42"},
  "range": {"text":"Western and southern Europe","src":["https://en.wikipedia.org/wiki/Primula_vulgaris"],"checked":"2026-10","sig":"6b3bee80","note":"Also reaches western Asia and Algeria."}
 },
 "celandine": {
  "name": {"text":"Lesser celandine","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/lesser-celandine/"],"checked":"2026-10","sig":"bed8e5e6"},
  "sci": {"text":"Ficaria verna","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/lesser-celandine/","https://en.wikipedia.org/wiki/Ficaria_verna"],"checked":"2026-10","sig":"962cdf77"},
  "range": {"text":"Europe and western Asia","src":["https://en.wikipedia.org/wiki/Ficaria_verna"],"checked":"2026-10","sig":"4709ea5d"}
 },
 "foxglove": {
  "name": {"text":"Foxglove","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/foxglove/"],"checked":"2026-10","sig":"69a6dcbc"},
  "sci": {"text":"Digitalis purpurea","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/foxglove/","https://en.wikipedia.org/wiki/Digitalis_purpurea"],"checked":"2026-10","sig":"a3ff19ae"},
  "range": {"text":"Western Europe","src":["https://en.wikipedia.org/wiki/Digitalis_purpurea"],"checked":"2026-10","sig":"52f155ee"}
 },
 "woodsorrel": {
  "name": {"text":"Wood sorrel","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/wood-sorrel/"],"checked":"2026-10","sig":"961bd6ab"},
  "sci": {"text":"Oxalis acetosella","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/wood-sorrel/","https://en.wikipedia.org/wiki/Oxalis_acetosella"],"checked":"2026-10","sig":"66c3fbcb"},
  "range": {"text":"Europe and northern Asia","src":["https://en.wikipedia.org/wiki/Oxalis_acetosella"],"checked":"2026-10","sig":"57423290"}
 },
 "heather": {
  "name": {"text":"Heather","src":["https://npgsweb.ars-grin.gov/gringlobal/taxon/taxonomydetail?id=8605"],"checked":"2026-10","sig":"ed140167"},
  "sci": {"text":"Calluna vulgaris","src":["https://npgsweb.ars-grin.gov/gringlobal/taxon/taxonomydetail?id=8605","https://en.wikipedia.org/wiki/Calluna"],"checked":"2026-10","sig":"27f753c0"},
  "range": {"text":"Europe and Asia Minor","src":["https://npgsweb.ars-grin.gov/gringlobal/taxon/taxonomydetail?id=8605"],"checked":"2026-10","sig":"34350193","note":"Also reaches Siberia, Morocco and the Azores."}
 },
 "redcampion": {
  "name": {"text":"Red campion","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/red-campion/"],"checked":"2026-10","sig":"903809f7"},
  "sci": {"text":"Silene dioica","src":["https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/red-campion/","https://en.wikipedia.org/wiki/Silene_dioica"],"checked":"2026-10","sig":"dda25d63"},
  "range": {"text":"Europe","src":["https://en.wikipedia.org/wiki/Silene_dioica"],"checked":"2026-10","sig":"e595f45d"}
 },
 "wintergreen": {
  "name": {"text":"One-flowered wintergreen","src":["https://en.wikipedia.org/wiki/Moneses","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Moneses%20uniflora"],"checked":"2026-10","sig":"b11a76da"},
  "sci": {"text":"Moneses uniflora","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Moneses%20uniflora","https://en.wikipedia.org/wiki/Moneses"],"checked":"2026-10","sig":"60bae6f7"},
  "range": {"text":"Northern forests around the world","src":["https://en.wikipedia.org/wiki/Moneses","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Moneses%20uniflora"],"checked":"2026-10","sig":"d2cf74fc"}
 },
 "westerntrillium": {
  "name": {"text":"Western trillium","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Trillium%20ovatum","https://www.wildflower.org/plants/result.php?id_plant=TROV2"],"checked":"2026-10","sig":"fc512aaf"},
  "sci": {"text":"Trillium ovatum","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Trillium%20ovatum","https://www.wildflower.org/plants/result.php?id_plant=TROV2"],"checked":"2026-10","sig":"b14d4715"},
  "range": {"text":"Southern British Columbia to central California, east to the northern Rockies","src":["https://www.wildflower.org/plants/result.php?id_plant=TROV2"],"checked":"2026-10","sig":"c17a1f8c"}
 },
 "bleedingheart": {
  "name": {"text":"Pacific bleeding heart","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Dicentra%20formosa"],"checked":"2026-10","sig":"5520e267"},
  "sci": {"text":"Dicentra formosa","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Dicentra%20formosa"],"checked":"2026-10","sig":"f79c005c"},
  "range": {"text":"Pacific coast from British Columbia to California","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Dicentra%20formosa"],"checked":"2026-10","sig":"b3a5147d"}
 },
 "dwarforegongrape": {
  "name": {"text":"Dwarf Oregon grape","src":["https://www.wildflower.org/plants/result.php?id_plant=MANE2","https://en.wikipedia.org/wiki/Mahonia_nervosa"],"checked":"2026-10","sig":"842b6b94"},
  "sci": {"text":"Berberis nervosa","src":["https://en.wikipedia.org/wiki/Mahonia_nervosa"],"checked":"2026-10","sig":"99d09ca4","note":"Many sources still say Mahonia nervosa; POWO and WFO now place Mahonia in Berberis."},
  "range": {"text":"Southern British Columbia to central California, plus northern Idaho","src":["https://en.wikipedia.org/wiki/Mahonia_nervosa","https://www.wildflower.org/plants/result.php?id_plant=MANE2"],"checked":"2026-10","sig":"d3ac5c9b"}
 },
 "westerncolumbine": {
  "name": {"text":"Western columbine","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Aquilegia%20formosa"],"checked":"2026-10","sig":"c16ef8ac"},
  "sci": {"text":"Aquilegia formosa","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Aquilegia%20formosa"],"checked":"2026-10","sig":"61f6c5fe"},
  "range": {"text":"Western North America","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Aquilegia%20formosa"],"checked":"2026-10","sig":"d869cfe0"}
 },
 "tigerlily": {
  "name": {"text":"Columbia lily","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Lilium%20columbianum"],"checked":"2026-10","sig":"d31ff7ae"},
  "sci": {"text":"Lilium columbianum","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Lilium%20columbianum"],"checked":"2026-10","sig":"97061b8e"},
  "range": {"text":"British Columbia to northern California, east to Idaho and Montana","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Lilium%20columbianum"],"checked":"2026-10","sig":"a7a57671"}
 },
 "fawnlily": {
  "name": {"text":"Oregon fawn lily","src":["https://en.wikipedia.org/wiki/Erythronium_oregonum"],"checked":"2026-10","sig":"3ee3eb12"},
  "sci": {"text":"Erythronium oregonum","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Erythronium%20oregonum","https://en.wikipedia.org/wiki/Erythronium_oregonum"],"checked":"2026-10","sig":"61000306"},
  "range": {"text":"Southwestern British Columbia to northern California, west of the Cascades","src":["https://en.wikipedia.org/wiki/Erythronium_oregonum"],"checked":"2026-10","sig":"9641f354"}
 },
 "salmonberry": {
  "name": {"text":"Salmonberry","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Rubus%20spectabilis"],"checked":"2026-10","sig":"948e2613"},
  "sci": {"text":"Rubus spectabilis","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Rubus%20spectabilis"],"checked":"2026-10","sig":"517d5f5f"},
  "range": {"text":"Pacific coast from Alaska to California","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Rubus%20spectabilis"],"checked":"2026-10","sig":"bfa8af02"}
 },
 "redcurrant": {
  "name": {"text":"Red-flowering currant","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Ribes%20sanguineum"],"checked":"2026-10","sig":"4a6330f9"},
  "sci": {"text":"Ribes sanguineum","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Ribes%20sanguineum"],"checked":"2026-10","sig":"69f1fb6e"},
  "range": {"text":"Pacific coast from British Columbia to California","src":["https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Ribes%20sanguineum"],"checked":"2026-10","sig":"b3a5147d"}
 },
 "skunkcabbage": {
  "name": {"text":"Western skunk cabbage","src":["https://en.wikipedia.org/wiki/Lysichiton_americanus"],"checked":"2026-10","sig":"dc817ca6"},
  "sci": {"text":"Lysichiton americanus","src":["https://www.wildflower.org/plants/result.php?id_plant=LYAM3","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Lysichiton%20americanus"],"checked":"2026-10","sig":"d015f146"},
  "range": {"text":"Wet forests and swamps from Alaska to central California","src":["https://www.wildflower.org/plants/result.php?id_plant=LYAM3","https://en.wikipedia.org/wiki/Lysichiton_americanus"],"checked":"2026-10","sig":"4fa488ac"}
 },
 "vanillaleaf": {
  "name": {"text":"Vanilla leaf","src":["https://www.wildflower.org/plants/result.php?id_plant=ACTR","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Achlys%20triphylla"],"checked":"2026-10","sig":"d596c5d0"},
  "sci": {"text":"Achlys triphylla","src":["https://www.wildflower.org/plants/result.php?id_plant=ACTR","https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Achlys%20triphylla"],"checked":"2026-10","sig":"b24c633c"},
  "range": {"text":"Coast Ranges and Cascades from British Columbia to northern California","src":["https://www.wildflower.org/plants/result.php?id_plant=ACTR"],"checked":"2026-10","sig":"7cdc4741"}
 },
 "katakuri": {
  "name": {"text":"Japanese fawn lily","src":["https://en.wikipedia.org/wiki/Erythronium_japonicum"],"checked":"2026-10","sig":"1f36cc29","note":"Hokkaido University's plant pages call it Japanese dog-tooth violet; Japanese name katakuri."},
  "sci": {"text":"Erythronium japonicum","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/erythronium/jap.html","https://api.gbif.org/v1/species/2752866"],"checked":"2026-10","sig":"5bd32b58"},
  "wiki": "Erythronium_japonicum",
  "range": {"text":"Japan, Korea, northeast China and the Russian Far East","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/erythronium/jap.html","https://en.wikipedia.org/wiki/Erythronium_japonicum"],"checked":"2026-10","sig":"e73d6691"}
 },
 "nirinso": {
  "name": {"text":"Soft windflower","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/buttercup/anemone/fla.html","https://en.wikipedia.org/wiki/Anemonastrum_flaccidum"],"checked":"2026-10","sig":"0576ec1e","note":"Also called flaccid anemone; Japanese name nirinso ('two-flower plant')."},
  "sci": {"text":"Anemonastrum flaccidum","src":["https://api.gbif.org/v1/species/10305703","https://en.wikipedia.org/wiki/Anemonastrum_flaccidum"],"checked":"2026-10","sig":"d7927930","note":"Moved from Anemone to Anemonastrum by Mosyakin (published 2018); many Japanese sources, incl. Hokkaido Univ. and the Forestry Agency, still use Anemone flaccida."},
  "formerly": "Anemone flaccida",
  "wiki": "Anemonastrum_flaccidum",
  "range": {"text":"Japan, Korea, Sakhalin and northern and eastern China","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/buttercup/anemone/fla.html","https://en.wikipedia.org/wiki/Anemonastrum_flaccidum"],"checked":"2026-10","sig":"00095f4f"}
 },
 "shiraneaoi": {
  "name": {"text":"Japanese wood poppy","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/buttercup/glaucidium/pal.html","https://en.wikipedia.org/wiki/Glaucidium_palmatum"],"checked":"2026-10","sig":"319365fe","note":"Japanese name shirane-aoi. Not a true poppy."},
  "sci": {"text":"Glaucidium palmatum","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/buttercup/glaucidium/pal.html","https://api.gbif.org/v1/species/5579436"],"checked":"2026-10","sig":"57364c77","note":"Only species in its genus; placed in Ranunculaceae (APG), though some Japanese sources keep a separate family Glaucidiaceae."},
  "wiki": "Glaucidium_palmatum",
  "range": {"text":"Mountains of Hokkaido and northern Honshu, Japan","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/buttercup/glaucidium/pal.html","https://www.rinya.maff.go.jp/tohoku/syo/huzisato/zukan/siraneaoi.html"],"checked":"2026-10","sig":"622c91ab"}
 },
 "mizubasho": {
  "name": {"text":"Asian skunk cabbage","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/arum/lysichiton/cam.html","https://en.wikipedia.org/wiki/Lysichiton_camtschatcensis"],"checked":"2026-10","sig":"9a59ee47","note":"Also white skunk cabbage; Japanese name mizubasho."},
  "sci": {"text":"Lysichiton camtschatcensis","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/arum/lysichiton/cam.html","https://api.gbif.org/v1/species/2869301"],"checked":"2026-10","sig":"5ca722ae","note":"Sometimes spelled camtschatcense (e.g. Forestry Agency Asahi-Shonai list)."},
  "wiki": "Lysichiton_camtschatcensis",
  "range": {"text":"Northern Japan to Kamchatka and eastern Siberia","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/arum/lysichiton/cam.html","https://en.wikipedia.org/wiki/Lysichiton_camtschatcensis"],"checked":"2026-10","sig":"041a823b"}
 },
 "cobralily": {
  "name": {"text":"Japanese cobra lily","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/arum/arisaema/ser.html"],"checked":"2026-10","sig":"e49f6e96","note":"A Japanese jack-in-the-pulpit; Japanese name mamushigusa ('viper plant'). Wikipedia calls it Fuji cobra lily."},
  "sci": {"text":"Arisaema serratum","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/arum/arisaema/ser.html","https://api.gbif.org/v1/species/2866950"],"checked":"2026-10","sig":"c8d24cac","note":"Japanese Arisaema taxonomy is messy: some Japanese lists treat mamushigusa under Arisaema japonicum (also accepted by GBIF as a separate species). The Forestry Agency Shirakami page gives only the genus."},
  "wiki": "Arisaema_serratum",
  "range": {"text":"Japan, Korea, China and the Russian Far East","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/arum/arisaema/ser.html","https://en.wikipedia.org/wiki/Arisaema_serratum"],"checked":"2026-10","sig":"0f2a1e3a"}
 },
 "goldenlily": {
  "name": {"text":"Golden-rayed lily","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/lilium/aur.html","https://en.wikipedia.org/wiki/Lilium_auratum"],"checked":"2026-10","sig":"330a5733","note":"Also goldband lily or mountain lily; Japanese name yamayuri."},
  "sci": {"text":"Lilium auratum","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/lilium/aur.html","https://api.gbif.org/v1/species/2753106"],"checked":"2026-10","sig":"e51f4e10"},
  "wiki": "Lilium_auratum",
  "range": {"text":"Honshu, Japan, from the Kinki region north to Tohoku","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/lilium/aur.html","https://www.rinya.maff.go.jp/tohoku/syo/huzisato/zukan/yamayuri.html"],"checked":"2026-10","sig":"04eb7e99"}
 },
 "sankayou": {
  "name": {"text":"Skeleton flower","src":["https://en.wikipedia.org/wiki/Diphylleia_grayi"],"checked":"2026-10","sig":"cfe465cc","note":"So called because its white petals turn see-through when wet. Hokkaido University's pages call it umbrella leaf; Japanese name sankayo."},
  "sci": {"text":"Diphylleia grayi","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/barberry/diphylleia/gra.html","https://api.gbif.org/v1/species/5634432"],"checked":"2026-10","sig":"4c7d81a0"},
  "wiki": "Diphylleia_grayi",
  "range": {"text":"Hokkaido and northern and central Honshu, Japan, and Sakhalin","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/barberry/diphylleia/gra.html","https://www.rinya.maff.go.jp/tohoku/syo/huzisato/zukan/sankayou.html"],"checked":"2026-10","sig":"9a8501e4"}
 },
 "yamaajisai": {
  "name": {"text":"Mountain hydrangea","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/saxifrage/hydrangea/ser.html","https://en.wikipedia.org/wiki/Hydrangea_serrata"],"checked":"2026-10","sig":"b0cc27c0","note":"Japanese name yama-ajisai; the beech-forest form on the Sea of Japan side is ezo-ajisai."},
  "sci": {"text":"Hydrangea serrata","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/saxifrage/hydrangea/ser.html","https://api.gbif.org/v1/species/7319016"],"checked":"2026-10","sig":"12e97e88","note":"The Shirakami plant is var. yesoensis (ezo-ajisai), accepted by GBIF (https://api.gbif.org/v1/species/3645548); also published as subspecies yezoensis."},
  "wiki": "Hydrangea_serrata",
  "range": {"text":"Mountains of Japan and Korea","src":["https://en.wikipedia.org/wiki/Hydrangea_serrata","https://www.rinya.maff.go.jp/tohoku/syo/huzisato/zukan/ezoajisai.html"],"checked":"2026-10","sig":"4e09c746"}
 },
 "toadlily": {
  "name": {"text":"Toad lily","src":["https://en.wikipedia.org/wiki/Tricyrtis_latifolia"],"checked":"2026-10","sig":"1fac44ea","note":"Yellow-flowered toad lily; Japanese name tamagawa-hototogisu. Weak-ish: only Wikipedia gives an English name for this exact species."},
  "sci": {"text":"Tricyrtis latifolia","src":["https://www.pref.kyoto.jp/kankyo/rdb/bio/db/flo0724.html","https://api.gbif.org/v1/species/2752139"],"checked":"2026-10","sig":"c01685ef"},
  "wiki": "Tricyrtis_latifolia",
  "range": {"text":"Hokkaido, Honshu, Shikoku and Kyushu, Japan","src":["https://www.pref.kyoto.jp/kankyo/rdb/bio/db/flo0724.html","https://en.wikipedia.org/wiki/Tricyrtis_latifolia"],"checked":"2026-10","sig":"dd3c31a4"}
 },
 "enreiso": {
  "name": {"text":"Japanese trillium","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/trillium/ape.html"],"checked":"2026-10","sig":"c5b5ee7c","note":"Japanese name enreiso."},
  "sci": {"text":"Trillium apetalon","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/trillium/ape.html","https://api.gbif.org/v1/species/2742312"],"checked":"2026-10","sig":"6ff960d5","note":"Older Japanese lists (e.g. Forestry Agency Asahi-Shonai page) use 'Trillium smallii' for enreiso, but that name belongs to a different species (Kojima-enreiso, Sakhalin-Hokkaido)."},
  "wiki": "Trillium",
  "range": {"text":"Japan, Sakhalin and the southern Kuril Islands","src":["https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/lily/trillium/ape.html","https://www.rinya.maff.go.jp/tohoku/syo/huzisato/zukan/enreisou.html"],"checked":"2026-10","sig":"4503d1b3"}
 },
 "royalfuchsia": {
  "name": {"text":"Royal fuchsia","src":["https://www.rhs.org.uk/plants/7516/fuchsia-regia/details"],"checked":"2026-10","sig":"f8a3d8bf","note":"Portuguese: brinco-de-princesa (princess's earring), listed by Flora e Funga do Brasil and GBIF (https://api.gbif.org/v1/species/114748016/vernacularNames?limit=100, https://api.gbif.org/v1/species/7322827/vernacularNames?limit=100)."},
  "sci": {"text":"Fuchsia regia","src":["https://api.gbif.org/v1/species/114748016","https://api.gbif.org/v1/species/114748016/speciesProfiles"],"checked":"2026-10","sig":"610e1078","note":"Flora e Funga do Brasil FB3955. Southern araucaria-forest plants belong mostly to subsp. reitzii (Smithsonian Onagraceae account)."},
  "range": {"text":"Southeastern and southern Brazil, from Minas Gerais to Rio Grande do Sul","src":["https://api.gbif.org/v1/species/114748016/distributions","https://api.gbif.org/v1/species/207340789/distributions?limit=100","https://naturalhistory2.si.edu/botany/onagraceae/speciesdescr.cfm?myID=3651"],"checked":"2026-10","sig":"9e84692a","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. The Smithsonian Onagraceae account ties subsp. reitzii to Araucaria forests of the southern plateau (Paraná to Rio Grande do Sul). Terrestrial shrub that often scrambles; flowers hang low."}
 },
 "anisesage": {
  "name": {"text":"Anise-scented sage","src":["https://en.wikipedia.org/wiki/Salvia_guaranitica","https://api.gbif.org/v1/species/114635103/vernacularNames?limit=100"],"checked":"2026-10","sig":"326ed5c5","note":"Also called hummingbird sage. Portuguese: sálvia-azul (Flora e Funga do Brasil vernacular list)."},
  "sci": {"text":"Salvia guaranitica","src":["https://api.gbif.org/v1/species/114635103","https://api.gbif.org/v1/species/114635103/speciesProfiles"],"checked":"2026-10","sig":"643ee842","note":"Flora e Funga do Brasil FB8322."},
  "range": {"text":"Southern and southeastern Brazil, Paraguay, Uruguay and northern Argentina","src":["https://api.gbif.org/v1/species/114635103/distributions","https://api.gbif.org/v1/species/207221721/distributions?limit=100","https://en.wikipedia.org/wiki/Salvia_guaranitica"],"checked":"2026-10","sig":"ef270bf0","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. Also listed for gallery forest and disturbed ground."}
 },
 "flowerofsouls": {
  "name": {"text":"Flower-of-souls","src":["https://en.wikipedia.org/wiki/Senecio_brasiliensis"],"checked":"2026-10","sig":"b3dd1c04","note":"The English name translates Portuguese flor-das-almas; 'hemp-leaf ragwort' is also listed (GBIF https://api.gbif.org/v1/species/3107780/vernacularNames?limit=100). Other Portuguese names: maria-mole, malmequer-amarelo. Its Guarani name means 'August flower'. Toxic to livestock."},
  "sci": {"text":"Senecio brasiliensis","src":["https://api.gbif.org/v1/species/114695824","https://api.gbif.org/v1/species/114695824/speciesProfiles"],"checked":"2026-10","sig":"bd1b98d6","note":"Flora e Funga do Brasil FB27354."},
  "range": {"text":"Southern and southeastern Brazil to Paraguay, Uruguay, Bolivia and northern Argentina","src":["https://api.gbif.org/v1/species/114695824/distributions","https://api.gbif.org/v1/species/206747432/distributions?limit=100","https://en.wikipedia.org/wiki/Senecio_brasiliensis"],"checked":"2026-10","sig":"7ae8be02","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. A plant of clearings, edges and old pastures rather than deep shade."}
 },
 "palacelily": {
  "name": {"text":"Lily-of-the-palace","src":["https://en.wikipedia.org/wiki/Hippeastrum_aulicum","https://api.gbif.org/v1/species/2854386/vernacularNames?limit=100"],"checked":"2026-10","sig":"9c164a2e","note":"Portuguese: açucena, flor-da-imperatriz, cebola-do-mato (UFPR thesis record: https://agris.fao.org/search/en/records/67dab260677d8be0233b1eb9)."},
  "sci": {"text":"Hippeastrum aulicum","src":["https://api.gbif.org/v1/species/114682240","https://api.gbif.org/v1/species/114682240/speciesProfiles"],"checked":"2026-10","sig":"297082c5","note":"Flora e Funga do Brasil FB4355."},
  "formerly": "Amaryllis aulica",
  "range": {"text":"Eastern and southern Brazil and Paraguay","src":["https://api.gbif.org/v1/species/114682240/distributions","https://api.gbif.org/v1/species/206499521/distributions?limit=100","https://en.wikipedia.org/wiki/Hippeastrum_aulicum"],"checked":"2026-10","sig":"d44360e0","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. Habit caveat: a UFPR thesis calls it a facultative epiphyte, and Flora e Funga do Brasil lists it as growing on trees, on rocks and on the ground. Show it on the ground, on a mossy rock or low on a trunk."}
 },
 "pinksorrel": {
  "name": {"text":"Pink-sorrel","src":["https://en.wikipedia.org/wiki/Oxalis_articulata","https://api.gbif.org/v1/species/2891664/vernacularNames?limit=100"],"checked":"2026-10","sig":"a704976c","note":"Also windowbox wood-sorrel. Brazilians call Oxalis species in general azedinha ('little sour one'); GBIF's vernacular list gives azedinha-de-flores-vermelhas for this species."},
  "sci": {"text":"Oxalis articulata","src":["https://api.gbif.org/v1/species/114759226","https://api.gbif.org/v1/species/114759226/speciesProfiles"],"checked":"2026-10","sig":"9faa3323","note":"Flora e Funga do Brasil FB12444."},
  "formerly": "Oxalis rubra",
  "range": {"text":"Southern Brazil, Uruguay and northern Argentina","src":["https://api.gbif.org/v1/species/114759226/distributions","https://api.gbif.org/v1/species/207451234/distributions?limit=100","https://en.wikipedia.org/wiki/Oxalis_articulata"],"checked":"2026-10","sig":"6eff0cf6","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. Also grows in grassland (campo), so place it in clearings and on sunny edges. Naturalized widely elsewhere."}
 },
 "brazilplume": {
  "name": {"text":"Brazilian plume flower","src":["https://en.wikipedia.org/wiki/Justicia_carnea","https://api.gbif.org/v1/species/3770188/vernacularNames?limit=100"],"checked":"2026-10","sig":"08c80486","note":"Also flamingo flower or jacobinia (Wikipedia)."},
  "sci": {"text":"Justicia carnea","src":["https://api.gbif.org/v1/species/114680007","https://api.gbif.org/v1/species/114680007/speciesProfiles"],"checked":"2026-10","sig":"16f82438","note":"Flora e Funga do Brasil FB4141."},
  "formerly": "Jacobinia carnea",
  "range": {"text":"Eastern and southern Brazil, Paraguay and northeastern Argentina","src":["https://api.gbif.org/v1/species/114680007/distributions","https://api.gbif.org/v1/species/206499720/distributions?limit=100","https://en.wikipedia.org/wiki/Justicia_carnea"],"checked":"2026-10","sig":"7e462df2","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. A forest subshrub."}
 },
 "wildbanana": {
  "name": {"text":"Wild banana","src":["https://api.gbif.org/v1/species/5287902/vernacularNames?limit=100","https://revistaeletronica.icmbio.gov.br/BioBR/article/download/276/193/1082"],"checked":"2026-10","sig":"75ff2f67","note":"No standard English name; GBIF lists English 'wild banana'. Portuguese: banana-do-mato ('forest banana', for its yellow fruit), caraguatá, gravatá."},
  "sci": {"text":"Bromelia antiacantha","src":["https://api.gbif.org/v1/species/114655459","https://api.gbif.org/v1/species/114655459/speciesProfiles"],"checked":"2026-10","sig":"e7f5238f","note":"Flora e Funga do Brasil FB5956."},
  "range": {"text":"Eastern and southern Brazil and Uruguay","src":["https://api.gbif.org/v1/species/114655459/distributions","https://api.gbif.org/v1/species/206807848/distributions?limit=100","https://ri.uepg.br/bitstreams/8392ba94-aefd-45da-83e7-30b7f6c9bdbb/download"],"checked":"2026-10","sig":"12789e0d","note":"Flora e Funga do Brasil lists only Restinga as its vegetation type. However, a demographic study (ICMBio, Biodiversidade Brasileira 2012, https://revistaeletronica.icmbio.gov.br/BioBR/article/download/276/193/1082) followed a wild population under Floresta Ombrófila Mista at Floresta Nacional de Três Barras, Santa Catarina. It describes the plant as a large terrestrial plant of moist forest soils, so it is ground-dwelling, as requested."}
 },
 "woollybegonia": {
  "name": {"text":"Woolly bear begonia","src":["https://api.gbif.org/v1/species/7303195/vernacularNames?limit=100"],"checked":"2026-10","sig":"a77fe602","note":"Also sold as Schmidt's begonia (https://arthurleej.com/plant-of-month/p-o-m-Mar14.html). Portuguese: generic begônia; no species-specific name verified."},
  "sci": {"text":"Begonia subvillosa","src":["https://api.gbif.org/v1/species/114698344","https://api.gbif.org/v1/species/114698344/speciesProfiles"],"checked":"2026-10","sig":"91cccc19","note":"Flora e Funga do Brasil FB5728."},
  "formerly": "Begonia schmidtiana",
  "wiki": "Begonia",
  "range": {"text":"Southern and southeastern Brazil, Paraguay and northeastern Argentina","src":["https://api.gbif.org/v1/species/114698344/distributions","https://api.gbif.org/v1/species/206766336/distributions?limit=100"],"checked":"2026-10","sig":"dd1a1a6d","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. Terrestrial or rock-dwelling herb."}
 },
 "smallspiderwort": {
  "name": {"text":"Small-leaf spiderwort","src":["https://en.wikipedia.org/wiki/Tradescantia_fluminensis","https://api.gbif.org/v1/species/2765156/vernacularNames?limit=100"],"checked":"2026-10","sig":"1a08875b","note":"Deliberately avoids its other common English name, which uses an old slur. Portuguese: trapoeraba, erva-das-galinhas (Flora e Funga do Brasil vernacular list)."},
  "sci": {"text":"Tradescantia fluminensis","src":["https://api.gbif.org/v1/species/114706866","https://api.gbif.org/v1/species/114706866/speciesProfiles"],"checked":"2026-10","sig":"c0d18e81","note":"Flora e Funga do Brasil FB126857."},
  "range": {"text":"Southeastern and southern Brazil, Paraguay and northern Argentina","src":["https://api.gbif.org/v1/species/114706866/distributions","https://api.gbif.org/v1/species/206911752/distributions?limit=100"],"checked":"2026-10","sig":"38339208","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. Strongest habitat evidence in this set: it was found in all 30 plots of the herb-layer survey of araucaria forest in Aparados da Serra National Park (https://seer.ufrgs.br/rbrasbioci/article/download/115401/62696/0) and is listed in a Guarapuava araucaria-forest survey (https://www.anchietano.unisinos.br/publicacoes/botanica/volumes/062/14.pdf). It is invasive outside South America but native here."}
 },
 "mossverbena": {
  "name": {"text":"Moss verbena","src":["https://en.wikipedia.org/wiki/Glandularia_aristigera","https://api.gbif.org/v1/species/5667614/vernacularNames?limit=100"],"checked":"2026-10","sig":"a38cf354","note":"No Portuguese name verified for this species."},
  "sci": {"text":"Glandularia aristigera","src":["https://api.gbif.org/v1/species/114643367","https://api.gbif.org/v1/species/114643367/speciesProfiles"],"checked":"2026-10","sig":"30785e93","note":"Flora e Funga do Brasil FB15141."},
  "formerly": "Verbena tenuisecta",
  "range": {"text":"Southern Brazil, Bolivia, Paraguay, Uruguay and northern Argentina","src":["https://api.gbif.org/v1/species/114643367/distributions","https://api.gbif.org/v1/species/207856590/distributions?limit=100","https://en.wikipedia.org/wiki/Glandularia_aristigera"],"checked":"2026-10","sig":"f634945b","note":"Flora e Funga do Brasil (official checklist, served through GBIF dataset aacd816d 'Flora e Funga do Brasil - Lista Oficial') lists it as accepted and native, with vegetation type including 'Floresta Ombrófila Mista'. Also grows in high grassland. It loves sun, so place it in clearings and on sunny edges, not deep shade."}
 },
 "tropmilkweed": {
  "name": {"text":"Tropical milkweed","src":["https://en.wikipedia.org/wiki/Asclepias_curassavica","https://api.gbif.org/v1/species/3170241/vernacularNames?limit=100"],"checked":"2026-10","sig":"af829b3a","note":"Also called bloodflower or scarlet milkweed. Portuguese names in the Flora e Funga do Brasil list include oficial-de-sala, paina-de-sapo and cega-olho (https://api.gbif.org/v1/species/114684378/vernacularNames?limit=100). Milky sap is poisonous and irritates eyes."},
  "sci": {"text":"Asclepias curassavica","src":["https://api.gbif.org/v1/species/114684378","https://api.gbif.org/v1/species/114684378/speciesProfiles"],"checked":"2026-10","sig":"49f4b9be","note":"Flora e Funga do Brasil FB4517. It lists the plant as native, a terrestrial herb, with vegetation types that include 'Floresta Ombrófila Mista' (araucaria forest), as well as many other forest and open types."},
  "range": {"text":"Tropical and subtropical Americas, from Mexico and the Caribbean to Bolivia and southern Brazil","src":["https://api.gbif.org/v1/species/206554517/distributions?limit=100","https://api.gbif.org/v1/species/114684378/distributions","https://en.wikipedia.org/wiki/Asclepias_curassavica"],"checked":"2026-10","sig":"563b4557","note":"Flora e Funga do Brasil marks it native in Paraná and Rio Grande do Sul. Kew's WCVP lists it as native across Brazil (including the South) and Bolivia, but introduced in Argentina and Paraguay. A weedy plant of sunny clearings, edges and roadsides, not deep shade. Widely introduced elsewhere in the tropics."}
 }
};
