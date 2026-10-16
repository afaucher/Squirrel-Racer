// Squirrel Ranger species facts: Forests: which trees make up each one.
// Every claim on a card is {"text", "src": [urls], "checked": "YYYY-MM", "sig", "note"?}.
// "sig" fingerprints the text when it was checked; edit the text and the check flags it for a re-check.
// How to add or fix a fact: docs/ADDING-A-FOREST.md. Validate with: node tools/check_facts.mjs

(window.SPECIES_DATA ||= {}).forests = {
 "east": {
  "composition": {"text":"In oak-hickory woods, white oak and red oak are the main trees and hickories are present but less common. In beech-maple woods, sugar maple usually dominates, with American beech as its important partner.","src":["https://msaf.forest.mtu.edu/Business/MSAFguide-2010/1-4b-Upland.html","https://research.fs.usda.gov/silvics/shagbark-hickory","https://www.fs.usda.gov/database/feis/plants/tree/quealb/all.html"],"checked":"2026-10","sig":"3d9a20a6","note":"The weights blend oak-hickory and beech-maple woods, so they are an estimate, not figures from one survey."},
  "weights": {"whiteoak":6,"redoak":5,"sugarmaple":6,"beech":4,"hickory":2}
 },
 "boreal": {
  "composition": {"text":"White spruce and black spruce are the main trees of the boreal forest, and black spruce is often the most common of all. Jack pine, balsam fir, trembling aspen and white (paper) birch are also widespread, especially in the southern boreal.","src":["https://www.ccfm.org/?p=109","https://www.ontario.ca/document/forest-resources-ontario-2021/common-trees","https://research.fs.usda.gov/silvics/black-spruce"],"checked":"2026-10","sig":"36af47a5","note":"The ranking follows the national summary and Ontario forest-area shares; the weights are an approximation."},
  "weights": {"blackspruce":7,"whitespruce":5,"aspen":4,"jackpine":4,"paperbirch":3,"balsamfir":3}
 },
 "sw": {
  "composition": {"text":"Ponderosa pine makes up the canopy, with Gambel oak as a tall shrub layer underneath. Douglas-fir and aspen join in on higher, moister ground, and pinyon only mixes in at the dry lower edge, where the pines give way to pinyon-juniper woodland.","src":["https://fs.usda.gov/database/feis/pdfs/PNVGs/Southwest/R3PPGO.pdf","https://www.fs.usda.gov/database/feis/plants/tree/pinpons/all.html","https://www.fs.usda.gov/database/feis/plants/tree/pinedu/all.html"],"checked":"2026-10","sig":"5560442c","note":"The weights are estimates from the sources' dominant, common and minor wording."},
  "weights": {"ponderosa":8,"gambeloak":3,"douglasfir":2,"aspen":2,"pinyon":2}
 },
 "pnw": {
  "composition": {"text":"Douglas-fir and western hemlock dominate, and western redcedar is a common partner. Red alder fills disturbed ground, bigleaf maple and hazel are minor, and Sitka spruce stays near the foggy coast and floodplains.","src":["https://research.fs.usda.gov/sites/default/files/feis/bps/10390_1_2_3_7.pdf","https://cfcg.forestry.ubc.ca/?p=2447","https://www.fs.usda.gov/database/feis/plants/tree/picsit/all.html"],"checked":"2026-10","sig":"d852114b","note":"The weights are estimates from the sources' dominant, common and minor wording."},
  "weights": {"douglasfir":8,"westernhemlock":7,"westernredcedar":5,"redalder":4,"bigleafmaple":3,"sitkaspruce":2,"beakedhazel":2}
 },
 "cal": {
  "composition": {"text":"Scots pine dominates and is the backbone of the forest, and birches are the next most common, often in big stands among the pines. Rowan, hazel and oak are minor trees that turn up singly or in small groups, and beech is not a native pinewood tree at all; it was planted in Scotland by people.","src":["https://treesforlife.org.uk/into-the-forest/habitats-and-ecology/habitats/native-pinewoods/","https://sac.jncc.gov.uk/habitat/H91C0/","https://stories.rbge.org.uk/archives/5831"],"checked":"2026-10","sig":"8dc75fcb","note":"Beech stays at the lowest weight as a planted tree; the weights are estimates from the sources' wording."},
  "weights": {"scotspine":8,"silverbirch":6,"rowan":3,"hazel":2,"pedoak":1,"eubeech":1}
 },
 "jp": {
  "composition": {"text":"Siebold's beech dominates, making up 80 to 90% of the treetops in Japan Sea-side forests (78% of basal area on Mt. Kurikoma). Japanese oak, painted maple and bigleaf magnolia are mixed in as minor trees, while horse chestnut and Japanese walnut mostly grow in the stream valleys.","src":["https://www.env.go.jp/content/900491077.pdf","https://tohoku.repo.nii.ac.jp/record/35175/files/10.1111-j.1654-1103.2004.tb02275.x.pdf","https://taffrc.pref.toyama.jp/nsgc/shinrin/wp-content/uploads/sites/9/2024/09/No.23%EF%BC%882021.12.28%EF%BC%89%E7%9B%B8%E6%B5%A6%E8%8B%B1%E6%98%A5%E3%80%80%E6%A4%8D%E6%9E%97%E3%81%AB%E3%82%88%E3%82%8B%E6%B2%B3%E7%95%94%E6%9E%97%E3%81%AE%E9%80%A0%E6%88%90-1.pdf"],"checked":"2026-10","sig":"95071bde"},
  "weights": {"buna":8,"mizunara":3,"itaya":2,"hoonoki":2,"tochi":2,"jwalnut":1}
 },
 "atl": {
  "composition": {"text":"Paraná pine is the boss of the araucaria forest: it has the highest importance score in surveys and forms the top layer, and erva-mate is usually one of the most common trees beneath it. Imbuia is a regular companion in Paraná and Santa Catarina, pinheiro-bravo is common in some places, and queen palms and cedros are minor members.","src":["https://pfb.sede.embrapa.br/pfb/article/download/104/140/834","https://revistas.unicentro.br/index.php/ambiencia/article/download/1357/1932","https://www.redalyc.org/pdf/449/44922150035.pdf"],"checked":"2026-10","sig":"7eff2b1b","note":"The weights are rounded from survey importance values, which differ between sites."},
  "weights": {"paranapine":8,"yerbamate":6,"imbuia":4,"pinheirobravo":3,"queenpalm":2,"argcedar":2}
 }
};
