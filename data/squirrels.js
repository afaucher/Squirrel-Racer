// Squirrel Ranger species facts: Squirrels.
// Every claim on a card is {"text", "src": [urls], "checked": "YYYY-MM", "sig", "note"?}.
// "sig" fingerprints the text when it was checked; edit the text and the check flags it for a re-check.
// How to add or fix a fact: docs/ADDING-A-FOREST.md. Validate with: node tools/check_facts.mjs

(window.SPECIES_DATA ||= {}).squirrels = {
 "egray": {
  "name": {"text":"Eastern gray squirrel","src":["https://animaldiversity.org/accounts/Sciurus_carolinensis/"],"checked":"2026-10","sig":"56707dd3"},
  "sci": {"text":"Sciurus carolinensis","src":["https://animaldiversity.org/accounts/Sciurus_carolinensis/"],"checked":"2026-10","sig":"8eb82fe8"},
  "range": {"text":"Eastern North America; introduced to Britain, Ireland and Italy","src":["https://animaldiversity.org/accounts/Sciurus_carolinensis/"],"checked":"2026-10","sig":"c3421b83"},
  "fact": {"text":"Buries thousands of nuts each autumn; the forgotten ones grow into trees.","src":["https://www.nwf.org/Magazines/National-Wildlife/2008/Science-Sleuths-How-Squirrels-Hide-Nuts","https://www.purdue.edu/uns/html4ever/031125.Swihart.squirrels.html"],"checked":"2026-10","sig":"baea46a0"}
 },
 "eblack": {
  "name": {"text":"Eastern gray squirrel (black form)","src":["https://animaldiversity.org/accounts/Sciurus_carolinensis/"],"checked":"2026-10","sig":"2d791e46"},
  "sci": {"text":"Sciurus carolinensis","src":["https://omia.org/OMIA001199/30640/"],"checked":"2026-10","sig":"8eb82fe8"},
  "range": {"text":"Eastern North America, most common in the north","src":["https://animaldiversity.org/accounts/Sciurus_carolinensis/"],"checked":"2026-10","sig":"5c149239"},
  "fact": {"text":"Same species as the gray; one gene makes the coat black.","src":["https://omia.org/OMIA001199/30640/"],"checked":"2026-10","sig":"f6e0153a"}
 },
 "efox": {
  "name": {"text":"Eastern fox squirrel","src":["https://www.nps.gov/mnrr/learn/nature/squirrels.htm"],"checked":"2026-10","sig":"386794d9"},
  "sci": {"text":"Sciurus niger","src":["https://animaldiversity.org/accounts/Sciurus_niger/"],"checked":"2026-10","sig":"75feb209"},
  "range": {"text":"Eastern and central North America","src":["https://animaldiversity.org/accounts/Sciurus_niger/"],"checked":"2026-10","sig":"e07bb2df"},
  "fact": {"text":"The largest tree squirrel in North America.","src":["https://www.nps.gov/mnrr/learn/nature/squirrels.htm","https://en.wikipedia.org/wiki/Fox_squirrel"],"checked":"2026-10","sig":"7dde9819"}
 },
 "amred": {
  "name": {"text":"American red squirrel","src":["https://animaldiversity.org/accounts/Tamiasciurus_hudsonicus/"],"checked":"2026-10","sig":"1a2c7f8c"},
  "sci": {"text":"Tamiasciurus hudsonicus","src":["https://animaldiversity.org/accounts/Tamiasciurus_hudsonicus/"],"checked":"2026-10","sig":"9622a086"},
  "range": {"text":"Canada, Alaska, the Rockies, the northern US and the Appalachian Mountains","src":["https://conservation.arizona.edu/content/natural-history.html","https://animaldiversity.org/accounts/Tamiasciurus_hudsonicus/"],"checked":"2026-10","sig":"deadadae"},
  "fact": {"text":"Piles spruce cone scales into middens that can be meters wide.","src":["https://conservation.arizona.edu/content/natural-history.html","https://www.adfg.alaska.gov/index.cfm?adfg=redsquirrel.main"],"checked":"2026-10","sig":"05db1608"}
 },
 "abert": {
  "name": {"text":"Abert's squirrel","src":["https://animaldiversity.org/accounts/Sciurus_aberti/"],"checked":"2026-10","sig":"ed7fb9f1"},
  "sci": {"text":"Sciurus aberti","src":["https://animaldiversity.org/accounts/Sciurus_aberti/"],"checked":"2026-10","sig":"0a53acd4"},
  "range": {"text":"Ponderosa pine forests of the Southwest US and northern Mexico","src":["https://animaldiversity.org/accounts/Sciurus_aberti/"],"checked":"2026-10","sig":"db05c5a4"},
  "fact": {"text":"Lives almost entirely in ponderosa pines and eats their inner bark in winter.","src":["https://animaldiversity.org/accounts/Sciurus_aberti/","https://www.arizonahighways.com/archive/issues/chapter/Doc.798.Chapter.4"],"checked":"2026-10","sig":"02edc797"}
 },
 "kaibab": {
  "name": {"text":"Kaibab squirrel","src":["https://irma.nps.gov/NPSpecies/Species/Profile/470678"],"checked":"2026-10","sig":"c1d7699f"},
  "sci": {"text":"Sciurus aberti kaibabensis","src":["https://irma.nps.gov/NPSpecies/Species/Profile/470678"],"checked":"2026-10","sig":"e96032dc"},
  "range": {"text":"Only the Kaibab Plateau, north of the Grand Canyon","src":["https://irma.nps.gov/NPSpecies/Species/Profile/470678","https://animaldiversity.org/accounts/Sciurus_aberti/"],"checked":"2026-10","sig":"24c1ac42"},
  "fact": {"text":"A form of Abert's squirrel found nowhere else, with a black belly and white tail.","src":["https://www.arizonahighways.com/archive/issues/chapter/Doc.798.Chapter.4","https://npshistory.com/nature_notes/grca/vol7-7c.htm"],"checked":"2026-10","sig":"3ab328a4"}
 },
 "eured": {
  "name": {"text":"Eurasian red squirrel","src":["https://animaldiversity.org/accounts/Sciurus_vulgaris/"],"checked":"2026-10","sig":"dd06c918"},
  "sci": {"text":"Sciurus vulgaris","src":["https://www.mammaldiversity.org/taxon/1001701"],"checked":"2026-10","sig":"1a90684a"},
  "range": {"text":"Europe and northern Asia, from Ireland to Japan","src":["https://www.mammaldiversity.org/taxon/1001701","https://en.wikipedia.org/wiki/Red_squirrel"],"checked":"2026-10","sig":"81368ba3"},
  "fact": {"text":"Its ear tufts grow longer in winter.","src":["https://animaldiversity.org/accounts/Sciurus_vulgaris/"],"checked":"2026-10","sig":"a332131e"}
 },
 "egraywhite": {
  "name": {"text":"Eastern gray squirrel (white form)","src":["https://georgiawildlife.com/out-my-backdoor-white-squirrels-close"],"checked":"2026-10","sig":"48e682db"},
  "sci": {"text":"Sciurus carolinensis","src":["https://westboroughlandtrust.org/nn/nn57"],"checked":"2026-10","sig":"8eb82fe8"},
  "wiki": "Eastern_gray_squirrel",
  "range": {"text":"A few towns in the eastern US and Canada","src":["https://westboroughlandtrust.org/nn/nn57","https://georgiawildlife.com/out-my-backdoor-white-squirrels-close"],"checked":"2026-10","sig":"ce22412e"},
  "fact": {"text":"White gray squirrels are rare; Brevard, North Carolina, is famous for them. Most have dark eyes, but Olney, Illinois, has pink-eyed albinos.","src":["https://westboroughlandtrust.org/nn/nn57","https://georgiawildlife.com/out-my-backdoor-white-squirrels-close"],"checked":"2026-10","sig":"1edaf0b4"}
 },
 "efoxdark": {
  "name": {"text":"Eastern fox squirrel (dark form)","src":["https://www.dnr.sc.gov/wildlife/species/foxsquirrel.html"],"checked":"2026-10","sig":"ebccdc04"},
  "sci": {"text":"Sciurus niger","src":["https://animaldiversity.org/accounts/Sciurus_niger/"],"checked":"2026-10","sig":"75feb209"},
  "wiki": "Fox_squirrel",
  "range": {"text":"Pine and oak woods of the southeastern US","src":["https://www.dnr.sc.gov/wildlife/species/foxsquirrel.html","https://animaldiversity.org/accounts/Sciurus_niger/"],"checked":"2026-10","sig":"ac704eef"},
  "fact": {"text":"In the Southeast, fox squirrels often have a black mask with a white nose and white ear tips; in South Carolina, about a third of those spotted are all black.","src":["https://www.dnr.sc.gov/wildlife/species/foxsquirrel.html"],"checked":"2026-10","sig":"5ec0f07e"}
 },
 "sflying": {
  "name": {"text":"Southern flying squirrel","src":["https://animaldiversity.org/accounts/Glaucomys_volans/"],"checked":"2026-10","sig":"aae32211"},
  "sci": {"text":"Glaucomys volans","src":["https://animaldiversity.org/accounts/Glaucomys_volans/"],"checked":"2026-10","sig":"9f61b70c"},
  "wiki": "Southern_flying_squirrel",
  "range": {"text":"Eastern North America from southeastern Canada to Florida, plus highland patches in Mexico and Central America","src":["https://en.wikipedia.org/wiki/Southern_flying_squirrel","https://animaldiversity.org/accounts/Glaucomys_volans/"],"checked":"2026-10","sig":"8a87ab66"},
  "fact": {"text":"Active at night, it can glide up to about 60 metres on a furry membrane stretched from wrist to ankle, though most glides are much shorter.","src":["https://www.wildlifedepartment.com/wildlife/field-guide/mammals/southern-flying-squirrel","https://biokids.umich.edu/critters/Glaucomys_volans","https://dwr.virginia.gov/wildlife/information/southern-flying-squirrel/"],"checked":"2026-10","sig":"0c57e42f","note":"Sources disagree on the maximum: Oklahoma DWC says about 200 ft (61 m), BioKIDS about 80 m, ADW 28 m; most glides are 6-9 m."}
 },
 "nflying": {
  "name": {"text":"Northern flying squirrel","src":["https://animaldiversity.org/accounts/Glaucomys_sabrinus/"],"checked":"2026-10","sig":"aa408288"},
  "sci": {"text":"Glaucomys sabrinus","src":["https://animaldiversity.org/accounts/Glaucomys_sabrinus/"],"checked":"2026-10","sig":"0f113786"},
  "wiki": "Northern_flying_squirrel",
  "range": {"text":"Canada, Alaska and northern and mountain forests of the US","src":["https://animaldiversity.org/accounts/Glaucomys_sabrinus/"],"checked":"2026-10","sig":"19747550"},
  "fact": {"text":"It digs up and eats truffles, spreading their spores and helping the trees those fungi live with.","src":["https://research.fs.usda.gov/treesearch/6129","https://animaldiversity.org/accounts/Glaucomys_sabrinus/"],"checked":"2026-10","sig":"6279b0b7"}
 },
 "arizonagray": {
  "name": {"text":"Arizona gray squirrel","src":["https://animaldiversity.org/accounts/Sciurus_arizonensis/"],"checked":"2026-10","sig":"b8818a6f"},
  "sci": {"text":"Sciurus arizonensis","src":["https://animaldiversity.org/accounts/Sciurus_arizonensis/"],"checked":"2026-10","sig":"cabbe569"},
  "wiki": "Arizona_gray_squirrel",
  "range": {"text":"Mountain canyons of central and southeastern Arizona, western New Mexico and northern Sonora, Mexico","src":["https://animaldiversity.org/accounts/Sciurus_arizonensis/","https://en.wikipedia.org/wiki/Arizona_gray_squirrel"],"checked":"2026-10","sig":"3a775c6a"},
  "fact": {"text":"It lives mostly in streamside canyon woods of sycamore, walnut, cottonwood and oak.","src":["https://animaldiversity.org/accounts/Sciurus_arizonensis/","https://en.wikipedia.org/wiki/Arizona_gray_squirrel"],"checked":"2026-10","sig":"637c8586"}
 },
 "abertblack": {
  "name": {"text":"Abert's squirrel (black form)","src":["https://pmc.ncbi.nlm.nih.gov/articles/PMC10885973/"],"checked":"2026-10","sig":"20343d5f"},
  "sci": {"text":"Sciurus aberti","src":["https://pmc.ncbi.nlm.nih.gov/articles/PMC10885973/"],"checked":"2026-10","sig":"0a53acd4"},
  "wiki": "Abert%27s_squirrel",
  "range": {"text":"Ponderosa pine forests of the southern Rockies; the black form lives mainly in Colorado's Front Range foothills","src":["https://pmc.ncbi.nlm.nih.gov/articles/PMC10885973/","https://animaldiversity.org/accounts/Sciurus_aberti/"],"checked":"2026-10","sig":"66f19b15"},
  "fact": {"text":"In some Colorado forests, many Abert's squirrels are entirely black.","src":["https://pmc.ncbi.nlm.nih.gov/articles/PMC10885973/","https://animaldiversity.org/accounts/Sciurus_aberti/"],"checked":"2026-10","sig":"3ca3d612"}
 },
 "douglas": {
  "name": {"text":"Douglas squirrel","src":["https://animaldiversity.org/accounts/Tamiasciurus_douglasii/"],"checked":"2026-10","sig":"77b47481"},
  "sci": {"text":"Tamiasciurus douglasii","src":["https://animaldiversity.org/accounts/Tamiasciurus_douglasii/"],"checked":"2026-10","sig":"9620421e"},
  "wiki": "Douglas_squirrel",
  "range": {"text":"Coastal, Cascade and Sierra Nevada forests from southwestern British Columbia to central California","src":["https://en.wikipedia.org/wiki/Douglas_squirrel","https://animaldiversity.org/accounts/Tamiasciurus_douglasii/"],"checked":"2026-10","sig":"619c5af8"},
  "fact": {"text":"Its loud chatter fills northwestern forests, and it stores conifer cones in piles like its red squirrel cousin.","src":["https://en.wikipedia.org/wiki/Douglas_squirrel","https://animaldiversity.org/accounts/Tamiasciurus_douglasii/"],"checked":"2026-10","sig":"75deb210"}
 },
 "westerngray": {
  "name": {"text":"Western gray squirrel","src":["https://wdfw.wa.gov/species-habitats/species/sciurus-griseus"],"checked":"2026-10","sig":"f2096a49"},
  "sci": {"text":"Sciurus griseus","src":["https://wdfw.wa.gov/species-habitats/species/sciurus-griseus"],"checked":"2026-10","sig":"3ab7c5bd"},
  "wiki": "Western_gray_squirrel",
  "range": {"text":"Drier oak, pine and Douglas-fir woods from Washington to California","src":["https://animaldiversity.org/accounts/Sciurus_griseus/","https://wdfw.wa.gov/species-habitats/species/sciurus-griseus"],"checked":"2026-10","sig":"65b0f050"},
  "fact": {"text":"The largest tree squirrel native to the Pacific Northwest, with a long, bushy gray tail frosted white along its edges.","src":["https://wdfw.wa.gov/species-habitats/species/sciurus-griseus"],"checked":"2026-10","sig":"001e0a6d"}
 },
 "humboldt": {
  "name": {"text":"Humboldt's flying squirrel","src":["https://www.burkemuseum.org/news/hiding-plain-sight-new-species-flying-squirrel-discovered"],"checked":"2026-10","sig":"1656ac4f"},
  "sci": {"text":"Glaucomys oregonensis","src":["https://www.burkemuseum.org/news/hiding-plain-sight-new-species-flying-squirrel-discovered","https://news.mongabay.com/2017/06/dna-analysis-reveals-a-third-species-of-flying-squirrel-in-north-america/"],"checked":"2026-10","sig":"2fa8d38c"},
  "wiki": "Humboldt%27s_flying_squirrel",
  "range": {"text":"Pacific coast from southern British Columbia to southern California","src":["https://www.burkemuseum.org/news/hiding-plain-sight-new-species-flying-squirrel-discovered"],"checked":"2026-10","sig":"00a35583"},
  "fact": {"text":"Recognised as its own species only in 2017; it glides between trees at night and eats truffles.","src":["https://www.burkemuseum.org/news/hiding-plain-sight-new-species-flying-squirrel-discovered","https://www.yournec.org/creature-feature-humboldts-flying-squirrel/","https://www.northcoastjournal.com/news-2/hello-my-name-is-humboldts-flying-squirrel-5250165/"],"checked":"2026-10","sig":"059e3c90","note":"Truffle diet rests on regional sources, not a species-specific diet study."}
 },
 "eudark": {
  "name": {"text":"Eurasian red squirrel (dark form)","src":["https://animaldiversity.org/accounts/Sciurus_vulgaris/"],"checked":"2026-10","sig":"d4ed56c8"},
  "sci": {"text":"Sciurus vulgaris","src":["https://animaldiversity.org/accounts/Sciurus_vulgaris/"],"checked":"2026-10","sig":"1a90684a"},
  "range": {"text":"Across its range, most often in mountain and northern forests of mainland Europe and Asia","src":["https://en.wikipedia.org/wiki/Red_squirrel"],"checked":"2026-10","sig":"384fe27d"},
  "fact": {"text":"Red squirrels range from fiery orange to nearly black.","src":["https://animaldiversity.org/accounts/Sciurus_vulgaris/","https://en.wikipedia.org/wiki/Red_squirrel"],"checked":"2026-10","sig":"5bc441c4"}
 },
 "jsquirrel": {
  "name": {"text":"Japanese squirrel","src":["https://animaldiversity.org/accounts/Sciurus_lis/","https://en.wikipedia.org/wiki/Japanese_squirrel"],"checked":"2026-10","sig":"e5893930"},
  "sci": {"text":"Sciurus lis","src":["https://kankyojoho.pref.aichi.jp/rdb/pdf/animals/species/honyu/%E3%83%8B%E3%83%9B%E3%83%B3%E3%83%AA%E3%82%B9.pdf","https://animaldiversity.org/accounts/Sciurus_lis/"],"checked":"2026-10","sig":"58f75967","note":"Once treated as a subspecies of the Eurasian red squirrel (Sciurus vulgaris); now a separate species endemic to Japan. Japanese name: ニホンリス (also ホンドリス)."},
  "wiki": "Japanese_squirrel",
  "range": {"text":"Honshu and Shikoku, Japan","src":["https://kankyojoho.pref.aichi.jp/rdb/pdf/animals/species/honyu/%E3%83%8B%E3%83%9B%E3%83%B3%E3%83%AA%E3%82%B9.pdf","https://www.env.go.jp/guide/info/ecojin/quiz/20210818.html"],"checked":"2026-10","sig":"dd3d4848"},
  "fact": {"text":"It splits hard walnuts neatly into two halves, and buries spare nuts in the ground to eat in winter.","src":["https://www.pref.kanagawa.jp/docs/f4y/02yama/kanagawaparkranger/tokubetukikaku/tabeta.html","https://www.env.go.jp/guide/info/ecojin/quiz/20210818.html","https://animaldiversity.org/accounts/Sciurus_lis/"],"checked":"2026-10","sig":"05c3035d"}
 },
 "jgiantfly": {
  "name": {"text":"Japanese giant flying squirrel","src":["https://animaldiversity.org/accounts/Petaurista_leucogenys/","https://en.wikipedia.org/wiki/Japanese_giant_flying_squirrel"],"checked":"2026-10","sig":"02101ad5"},
  "sci": {"text":"Petaurista leucogenys","src":["https://www.pref.kyoto.jp/kankyo/rdb/bio/db/man0018.html","https://animaldiversity.org/accounts/Petaurista_leucogenys/"],"checked":"2026-10","sig":"74514c5a","note":"ADW's range text also mentions mainland Asia (older broad taxonomy); Kyoto Prefecture and Wikipedia treat it as a Japanese species found everywhere except Hokkaido and Okinawa. Japanese name: ムササビ (local name バンドリ in Tadami/Aizu)."},
  "wiki": "Japanese_giant_flying_squirrel",
  "range": {"text":"Honshu, Shikoku and Kyushu, Japan","src":["https://www.pref.kyoto.jp/kankyo/rdb/bio/db/man0018.html","https://en.wikipedia.org/wiki/Japanese_giant_flying_squirrel"],"checked":"2026-10","sig":"74914a4d"},
  "fact": {"text":"At night it glides between trees, once 160 metres in one go, to munch buds, leaves and seeds.","src":["https://animaldiversity.org/accounts/Petaurista_leucogenys/","https://en.wikipedia.org/wiki/Japanese_giant_flying_squirrel","https://www.pref.kyoto.jp/kankyo/rdb/bio/db/man0018.html"],"checked":"2026-10","sig":"b8147062"}
 },
 "jdwarffly": {
  "name": {"text":"Japanese dwarf flying squirrel","src":["https://en.wikipedia.org/wiki/Japanese_dwarf_flying_squirrel"],"checked":"2026-10","sig":"d549ca55","note":"ADW calls it 'Japanese flying squirrel'; 'Japanese dwarf flying squirrel' is the usual English name and avoids confusion with the giant flying squirrel. Japanese name: ニホンモモンガ (ホンドモモンガ)."},
  "sci": {"text":"Pteromys momonga","src":["https://www.pref.kyoto.jp/kisyosyu/1218610259502.html","https://animaldiversity.org/accounts/Pteromys_momonga/"],"checked":"2026-10","sig":"0497a968"},
  "wiki": "Japanese_dwarf_flying_squirrel",
  "range": {"text":"Honshu, Shikoku and Kyushu, Japan","src":["https://www.pref.kyoto.jp/kisyosyu/1218610259502.html","https://en.wikipedia.org/wiki/Japanese_dwarf_flying_squirrel"],"checked":"2026-10","sig":"74914a4d","note":"ADW lists only Honshu and Kyushu; Kyoto Prefecture and Wikipedia include Shikoku."},
  "fact": {"text":"This little night glider has huge eyes and snoozes all day in a tree hole lined with soft moss.","src":["https://www.pref.kyoto.jp/kisyosyu/1218610259502.html","https://en.wikipedia.org/wiki/Japanese_dwarf_flying_squirrel","https://animaldiversity.org/accounts/Pteromys_momonga/"],"checked":"2026-10","sig":"04acb05b"}
 },
 "serelepe": {
  "name": {"text":"Brazilian squirrel","src":["https://www.mammaldiversity.org/taxon/1006709/"],"checked":"2026-10","sig":"fdf9be97","note":"MDD v2.5 main common name 'Brazilian Squirrel'; other names caxinguelê, serelepe, esquilo (SBMz list 2025-1 adds quatipuru-pequeno). The araucaria-forest population (subspecies ingrami) is called 'Ingram's squirrel' in some English papers (Mendes & Cândido-Jr 2014, Zoologia) and on the English Wikipedia page Sciurus_ingrami. Older English sources (and the en.wikipedia 'Brazilian squirrel' page) use 'Brazilian squirrel' for Sciurus aestuans in the old broad sense; MDD now calls S. aestuans the 'Guianan Squirrel'."},
  "sci": {"text":"Guerlinguetus brasiliensis","src":["https://zenodo.org/records/18378485","https://www.mammaldiversity.org/taxon/1006709/"],"checked":"2026-10","sig":"20bbeb82","note":"Brazil's official mammal list (SBMz Lista de Mamíferos do Brasil v2025-1, Zenodo record 18378485, spreadsheet opened) uses Guerlinguetus brasiliensis (Gmelin, 1788), Mata Atlântica, recorded in PR, SC, RS, SP, MG and others. The Mammal Diversity Database v2.5 (2026-07-28) instead keeps Guerlinguetus as a subgenus: Sciurus (Guerlinguetus) brasiliensis, 'split from S. aestuans', and says moving it to genus Guerlinguetus is 'tentatively not followed pending further investigation'. Both agree it is a separate species from Sciurus/Guerlinguetus aestuans (now the Guianan squirrel of Amazonia/Guianas). Older literature (incl. IUCN's Sciurus aestuans account and Embrapa's 2002 Pinheiro-do-paraná circular) lumps it in Sciurus aestuans. The southern form ingrami Thomas, 1901 (with henseli de Miranda-Ribeiro, 1941 and sebastiani Müller & Vesmanis, 1971) is a synonym in MDD; pt.wikipedia (following de Vivo & Carmignotto 2015, Mammals of South America vol. 2) treats it as subspecies G. b. ingrami, from Espírito Santo to Rio Grande do Sul and Misiones; some ecological papers use the binomial Guerlinguetus/Sciurus ingrami. The araucaria-forest squirrel is therefore G. brasiliensis ingrami."},
  "wiki": "Brazilian_squirrel",
  "range": {"text":"Eastern and southern Brazil and southeastern Amazonia to Paraguay and Misiones, Argentina","src":["https://www.mammaldiversity.org/taxon/1006709/","https://zenodo.org/records/18378485"],"checked":"2026-10","sig":"93efcbf7","note":"MDD: Amazonian Brazil east of the Rio Xingu and south of the Amazon, and eastern Brazil from Ceará south to Misiones, Argentina; countries Argentina, Brazil, Paraguay. Habitat in araucaria forest confirmed by Bordignon & Monteiro-Filho (secondary Araucaria forest, Paraná; https://revistas.unipar.br/index.php/veterinaria/article/view/696) and Mendes & Cândido-Jr 2014 (Araucaria moist forest fragment, Paraná; https://www.scielo.br/j/zool/a/MzcVdZNFs9RxYY6y6WS36Bg/)."},
  "fact": {"text":"It carries pinhão seeds away from the parent pine and buries them beside the trunks of other trees.","src":["https://revistas.unipar.br/index.php/veterinaria/article/view/696","https://primate.socgen.ucla.edu/index.php/multivitaminic/article/download/145/103"],"checked":"2026-10","sig":"2f62cdfa","note":"Bordignon & Monteiro-Filho, Arq. Ciênc. Vet. Zool. UNIPAR 3(2) (issue dated 2000; 'how to cite' block says 2008): 17 marked squirrels in a secondary Araucaria forest in Paraná, March-September 1995; most Araucaria seeds were cached March-June when seeds were most plentiful, usually near the trunks of other trees and beyond the zone where seeds just fall from the parent tree. Pagno, Cândido-Jr & Brocardo 2015 (Neotropical Primates 22(1), peer-reviewed; PDF opened) list squirrels (Guerlinguetus ingrami) with agoutis and plush-crested jays as dispersers that scatter-hoard pinhões."}
 }
};
