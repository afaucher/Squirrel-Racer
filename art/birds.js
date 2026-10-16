// Squirrel Ranger bird artwork (from the Bird Sketchbook): every bird is painted from its field marks on one shared body.
// Loaded before the game script; uses TAU and RM from it only while drawing. The facts shown on each bird card live in data/birds.js.
"use strict";

/* ---- bird artwork (from the Bird Sketchbook) ---- */
const BirdArt=(function(){
const BIRDS=[
 {id:'cardinal',zone:'east',sex:1,pose:'perch',size:.95,
  up:'#b3202a',low:'#cf2b33',head:'#cf2b33',wing:'#97202a',tail:{c:'#8c1d25',len:17},crest:{len:8,c:'#cf2b33'},bill:{t:'cone',c:'#f0703c',len:5.2,d:4.6},leg:'#8b5a4a',
  hp:[['mask','#141114']]},
 {id:'bluejay',zone:'east',pose:'perch',size:1.15,bw:1.08,bh:.95,
  up:'#4a82cf',low:'#eceef0',head:'#eceef0',wing:'#3f78c8',tail:{c:'#3f74c4',len:22,p:[['bars','#14203a'],['tip','#ffffff']]},crest:{len:8,c:'#4a86d2'},bill:{t:'jay',c:'#16181c',len:5.4,d:2.8},leg:'#22252b',
  hp:[['cap','#4a86d2',-1.6],['eyeline','#16181d'],['necklace','#16181d']],wp:[['bars','#14203a'],['wingbar','#ffffff'],['tips','#ffffff']]},
 {id:'titmouse',zone:'east',pose:'horiz',size:.8,bh:1.05,hs:1.08,
  up:'#8b9198',low:'#eceeec',head:'#8f959c',wing:'#848a91',tail:{c:'#7f858c',len:15},crest:{len:6,c:'#8f959c'},bill:{t:'short',c:'#1c1d20',len:2.8,d:2.4},leg:'#5d6168',
  hp:[['face','#eef0ee',1],['forehead','#18181b']],bp:[['flank','#e7a774']]},
 {id:'wbnut',zone:'east',pose:'headdown',size:.85,
  up:'#7d91a6',low:'#f3f4f2',head:'#f3f4f2',wing:'#6f8297',tail:{c:'#5f7186',len:9,p:[['tip','#e9ecef']]},bill:{t:'thin',c:'#3a3f46',len:6,d:1.7,up:1},leg:'#4b4f55',
  hp:[['capback','#15171a']],bp:[['vent','#a5532c']],wp:[['edge','#2a2f36']]},
 {id:'rbwood',zone:'east',sex:1,pose:'cling',size:1.0,bh:.92,
  up:'#f4f1e8',low:'#e9e1d2',head:'#ece6da',wing:'#f4f1e8',tail:{c:'#1a1a1c',len:14,p:[['bars','#f1ede4']]},bill:{t:'chisel',c:'#1b1b1d',len:6.5,d:2.3},leg:'#5d5a55',
  hp:[['crown','#d8262c'],['nape','#d8262c']],bp:[['backbars','#1a1a1c'],['wash','rgba(225,90,80,.5)']],wp:[['bars','#1a1a1c']]},

 {id:'canjay',zone:'boreal',pose:'perch',size:1.05,bw:1.05,bh:1.06,hs:1.05,
  up:'#7d8085',low:'#c9cac6',head:'#f2f2ee',wing:'#6e7176',tail:{c:'#6e7176',len:19,p:[['tip','#d9dad6']]},bill:{t:'jay',c:'#18191b',len:4,d:2.4},leg:'#25262a',
  hp:[['hood','#2f3135']],wp:[['tips','#c8c9c6']]},
 {id:'borchick',zone:'boreal',pose:'horiz',size:.72,bw:.95,bh:1.05,hs:1.08,
  up:'#7a6a58',low:'#dad7d0',head:'#cfcfca',wing:'#6f6457',tail:{c:'#6c635a',len:14},bill:{t:'short',c:'#1a1a1c',len:2.4,d:2},leg:'#4b4c50',
  hp:[['cap','#6b4a30',-.3],['cheek','#f3f3ef'],['bib','#141416']],bp:[['flank','#b5793f']],wp:[['edge','#b9b0a3']]},
 {id:'rbnut',zone:'boreal',pose:'headdown',size:.72,
  up:'#7489a6',low:'#d98a4f',head:'#f2efe8',wing:'#667b98',tail:{c:'#5d6f88',len:8},bill:{t:'thin',c:'#2d3238',len:5,d:1.5,up:1},leg:'#4b4f55',
  hp:[['cap','#151618',-1.4],['brow','#ffffff'],['eyeline','#151618']]},
 {id:'wwcross',zone:'boreal',sex:1,pose:'perch',size:.82,
  up:'#d24b67',low:'#e2637d',head:'#d85570',wing:'#1c1b1f',tail:{c:'#1c1b1f',len:13},bill:{t:'cross',c:'#3a3436',len:4.6,d:3},leg:'#3a3436',
  wp:[['wingbars2','#ffffff']]},
 {id:'sgrouse',zone:'boreal',sex:1,pose:'ground',size:1.5,bw:1.25,bh:1.12,hs:.9,
  up:'#5a5650',low:'#1d1c1d',head:'#4f4c48',wing:'#57534c',tail:{c:'#1c1c1e',len:9,p:[['tip','#c88a4a']]},bill:{t:'grouse',c:'#1c1c1e',len:2.8,d:2.6},leg:'#8a7c6a',
  hp:[['bib','#141416',1.4],['comb','#e1302b']],bp:[['scallop','#45423d'],['spots','#ffffff']],wp:[['edge','#7b766e']]},
 {id:'junco',zone:'boreal',pose:'ground',size:.8,
  up:'#4f5560',low:'#f2f2f0',head:'#4f5560',wing:'#4a4f58',tail:{c:'#3e434b',len:15,p:[['outer','#ffffff']]},bill:{t:'cone',c:'#ecbcb3',len:3.4,d:2.7},leg:'#a4877c',
  bp:[['breast','#4f5560']]},

 {id:'stjay',zone:'sw',pose:'perch',size:1.15,bw:1.08,bh:.95,
  up:'#2f3a52',low:'#2b4f9e',head:'#16171b',wing:'#2a55b0',tail:{c:'#2a52a8',len:22,p:[['bars','#121a33']]},crest:{len:9,c:'#16171b'},bill:{t:'jay',c:'#121316',len:5.4,d:2.8},leg:'#1c1d21',
  hp:[['fstreaks','#a9c6ec']],bp:[['breast','#20263a']],wp:[['bars','#121a33']]},
 {id:'pygnut',zone:'sw',pose:'perch',size:.6,
  up:'#7a8ea8',low:'#efe7d6',head:'#efe7d6',wing:'#6e8099',tail:{c:'#5f7088',len:7},bill:{t:'thin',c:'#2d3238',len:4.4,d:1.5},leg:'#4b4f55',
  hp:[['capback2','#8a6c55'],['eyeline','#3a2f28'],['napespot','#f2ece0']]},
 {id:'mtnchick',zone:'sw',pose:'horiz',size:.72,bw:.95,bh:1.05,hs:1.08,
  up:'#8b8e8f',low:'#dcddd9',head:'#f2f2ee',wing:'#7f8283',tail:{c:'#7c7f81',len:14},bill:{t:'short',c:'#1a1a1c',len:2.4,d:2},leg:'#4b4c50',
  hp:[['cap','#141416',-.2],['brow','#ffffff'],['bib','#141416']],bp:[['flank','#d3cbbd']],wp:[['edge','#c7c9c9']]},
 {id:'acornwp',zone:'sw',sex:1,pose:'cling',size:.95,bh:.94,
  up:'#15161a',low:'#f1ece1',head:'#16161a',wing:'#15161a',tail:{c:'#15161a',len:13},bill:{t:'chisel',c:'#161618',len:6,d:2.2},leg:'#4f4d4a',
  hp:[['clown','#f2e6b0'],['crown','#d5232c'],['iris','#f4f2ea']],bp:[['breastband','#16161a'],['streaks','#16161a']],wp:[['patch','#ffffff']]},
 {id:'wbluebird',zone:'sw',sex:1,pose:'perch',size:.85,
  up:'#2a4fbd',low:'#a6adba',head:'#2a4fbd',wing:'#2a4fbd',tail:{c:'#284cb8',len:13},bill:{t:'thin',c:'#1d1d22',len:3.4,d:1.9},leg:'#25262a',
  bp:[['breast','#c8682e']],sp:[['shoulder','#b8632f']]},
 {id:'rfwarbler',zone:'sw',pose:'perch',size:.66,
  up:'#8e9399',low:'#f2f2f0',head:'#e0272f',wing:'#80868d',tail:{c:'#7a8087',len:15},bill:{t:'thin',c:'#2a2a2e',len:3.6,d:1.6},leg:'#6f6560',
  hp:[['helmet','#141416'],['napespot','#ffffff']],bp:[['breast','#e0272f',.7],['rump','#f5f5f3']],wp:[['wingbar','#d9dcdf']]},

 {id:'eujay',zone:'cal',pose:'perch',size:1.15,bw:1.08,bh:.98,
  up:'#b8907e',low:'#cba693',head:'#c4a291',wing:'#1d1c20',tail:{c:'#141416',len:19},crest:{len:4,c:'#e6dbd2',streak:'#2a2422'},bill:{t:'jay',c:'#1b1b1d',len:5,d:2.8},leg:'#b29a8a',
  hp:[['streakcrown','#ece4dc'],['chin','#f5f2ee'],['moustache','#141416'],['iris','#b8d2ee']],bp:[['rump','#ffffff']],wp:[['panel','#3f86d6'],['patch','#ffffff']]},
 {id:'crestit',zone:'cal',pose:'perch',size:.72,bh:1.04,hs:1.06,
  up:'#8b6e52',low:'#e3d6c2',head:'#f1ede6',wing:'#7d644c',tail:{c:'#7b6249',len:14},crest:{len:8,c:'#f1ede6',barred:'#141416'},bill:{t:'short',c:'#1a1a1c',len:2.4,d:2},leg:'#5d5a57',
  hp:[['ccurve','#141416'],['bib','#141416'],['collar','#141416']],bp:[['flank','#c9a985']]},
 {id:'gspot',zone:'cal',sex:1,pose:'cling',size:.95,bh:.94,
  up:'#141416',low:'#f0ece2',head:'#f3efe6',wing:'#141416',tail:{c:'#141416',len:13,p:[['outer','#f3efe6']]},bill:{t:'chisel',c:'#1b1b1d',len:6.3,d:2.2},leg:'#5d5a55',
  hp:[['cap','#141416',-3.4],['napered','#d8202a'],['moustache3','#141416']],bp:[['vent','#d8202a']],wp:[['spots','#ffffff']],sp:[['shoulder','#ffffff']]},
 {id:'coaltit',zone:'cal',pose:'perch',size:.62,bh:1.04,hs:1.08,
  up:'#7d8079',low:'#ddd1bd',head:'#f1ede4',wing:'#6f736d',tail:{c:'#696c66',len:13},bill:{t:'short',c:'#1a1a1c',len:2.4,d:1.9},leg:'#4b4c50',
  hp:[['cap','#141416',.6],['cheek','#f3f1ea'],['bib','#141416'],['napespot','#f3f1ea']],wp:[['wingbars2','#f1efe8']]},
 {id:'robin',zone:'cal',pose:'ground',size:.78,bw:.95,bh:1.12,
  up:'#7a6650',low:'#f0ece3',head:'#7a6650',wing:'#6f5d49',tail:{c:'#6e5b47',len:13},bill:{t:'thin',c:'#2a2522',len:3.6,d:1.8},leg:'#7b6a5d',
  hp:[['face','#e2683a']],bp:[['breast','#e2683a'],['breastedge','#a9aaa7']]},
 {id:'chaffinch',zone:'cal',sex:1,pose:'perch',size:.8,
  up:'#8a5a3c',low:'#d9a08a',head:'#6f86a8',wing:'#1d1b1d',tail:{c:'#1f1d20',len:15,p:[['outer','#ffffff']]},bill:{t:'cone',c:'#8d9aa8',len:4,d:3.2},leg:'#8a7a70',
  hp:[['face','#d48e7a']],bp:[['breast','#d48e7a'],['rump','#93a55a'],['belly','#efe6df']],wp:[['patch','#ffffff'],['wingbar','#f3e9c0']]},
 {id:'varthrush',zone:'pnw',sex:1,pose:'ground',size:.95,bh:1.04,
  up:'#4c5866',low:'#e8892e',head:'#4c5866',wing:'#46525e',tail:{c:'#3f4a55',len:17},bill:{t:'thin',c:'#2a2a2c',len:4.4,d:2.6},leg:'#d6a283',
  hp:[['brow','#ea8b30'],['eyeline','#22262c']],bp:[['breastband','#1f2328'],['vent','#eceae4']],wp:[['wingbars2','#ea8b30']]},
 {id:'chbchick',zone:'pnw',pose:'horiz',size:.7,bw:.95,bh:1.05,hs:1.08,
  up:'#8a4426',low:'#e9e7e2',head:'#efefea',wing:'#6e6a66',tail:{c:'#6a6764',len:14},bill:{t:'short',c:'#1a1a1c',len:2.4,d:2},leg:'#4b4c50',
  hp:[['cap','#2a221e',-.3],['cheek','#f6f6f2'],['bib','#141416']],bp:[['flank','#9a4f2a']],wp:[['edge','#bdb8b0']]},
 {id:'pileated',zone:'pnw',sex:1,pose:'cling',size:1.4,bh:.95,
  up:'#18181b',low:'#1d1d20',head:'#1d1d20',wing:'#18181b',tail:{c:'#151517',len:17},crest:{len:10,c:'#d8202a'},bill:{t:'chisel',c:'#4a4a4e',len:7.5,d:2.6},leg:'#5d5a55',
  hp:[['crown','#d8202a'],['brow','#ffffff'],['ccurve','#ffffff'],['moustache','#d8202a']]},
 {id:'pacwren',zone:'pnw',pose:'horiz',size:.55,bw:.95,bh:1.12,
  up:'#7a4e30',low:'#b08860',head:'#7a4e30',wing:'#6a4430',tail:{c:'#5a3f2c',len:6,p:[['bars','#3a2a1e']]},bill:{t:'thin',c:'#2a2420',len:3.4,d:1.4},leg:'#8a6a58',
  hp:[['brow','#b8926e']],bp:[['backbars','#3e2c20'],['scallop','#5a3e2c']],wp:[['bars','#3a2a1e']]},
];

/* ---------- renderer: canonical frame, bird faces +x, belly toward +y ---------- */
function E(g,x,y,rx,ry,r){g.beginPath();g.ellipse(x,y,rx,ry,r||0,0,TAU);}
function poly(g,pts){g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);g.closePath();}
function strokePts(g,pts,w,c){g.strokeStyle=c;g.lineWidth=w;g.lineCap='round';g.lineJoin='round';g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);g.stroke();}
function curve(g,pts,w,c){g.strokeStyle=c;g.lineWidth=w;g.lineCap='round';g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length-1;i++){const mx=(pts[i][0]+pts[i+1][0])/2,my=(pts[i][1]+pts[i+1][1])/2;g.quadraticCurveTo(pts[i][0],pts[i][1],i===pts.length-2?pts[i+1][0]:mx,i===pts.length-2?pts[i+1][1]:my);}g.stroke();}

function headPattern(g,[k,c,o]){g.fillStyle=c;switch(k){
 case'cap':g.fillRect(-10,-10,20,10+(o==null?-1.5:o));break;
 case'capback':poly(g,[[-9,-9],[9,-9],[9,-2.2],[3,-2.6],[.3,-1.6],[-2.2,2],[-4.2,6],[-9,6]]);g.fill();break;
 case'capback2':poly(g,[[-9,-9],[9,-9],[9,-.3],[4.2,.3],[1,.9],[-3,2.2],[-9,3]]);g.fill();break;
 case'helmet':poly(g,[[-9,-9],[9,-9],[9,-3.2],[4,-3.6],[2.2,-2.2],[1.4,1.6],[-1.4,4],[-4,4.6],[-9,4]]);g.fill();break;
 case'hood':poly(g,[[-9,-9],[.6,-9],[-.4,-3.6],[-2.4,1.2],[-4,5.4],[-9,5.4]]);g.fill();break;
 case'mask':poly(g,[[7.6,-2.9],[2.4,-3.1],[.6,-.8],[1.1,2.3],[3,5.4],[6.2,6.8],[7.8,3]]);g.fill();break;
 case'bib':E(g,3,5.4,3.9*(o||1),2.7*(o||1));g.fill();break;
 case'cheek':E(g,.6,1.7,4.4,2.5);g.fill();break;
 case'face':E(g,2.2,1.4,5.6,4.7);g.fill();break;
 case'eyeline':strokePts(g,[[6.2,-.6],[2.4,-1.1],[-5.6,-.3]],1.2,c);break;
 case'brow':curve(g,[[5.4,-3.1],[1,-3.6],[-4.8,-2.5]],1.2,c);break;
 case'forehead':E(g,5.3,-3,2.3,1.8);g.fill();break;
 case'crown':E(g,.2,-5,5.6,2.9);g.fill();break;
 case'nape':case'napered':E(g,-4.6,-2.6,2.7,2.3);g.fill();break;
 case'napespot':E(g,-5.4,-1.4,1.8,1.6);g.fill();break;
 case'moustache':curve(g,[[5.8,1.6],[3.6,3.6],[2,5.6]],1.9,c);break;
 case'moustache3':curve(g,[[5.8,1.8],[1,3.4],[-3.6,1.8],[-5.6,-1.4]],1.5,c);break;
 case'necklace':curve(g,[[-4.6,-2.2],[-2.4,3.9],[2,6.1],[5.6,5]],1.25,c);break;
 case'comb':E(g,2.4,-3.1,2.4,1);g.fill();break;
 case'chin':E(g,4,4.5,3.3,2.1);g.fill();break;
 case'ccurve':curve(g,[[3.6,-.1],[-1.6,.5],[-2.8,3.4],[.6,4.9]],1.15,c);break;
 case'collar':curve(g,[[-5.8,.8],[-3.2,5.8],[1,6.6]],1.25,c);break;
 case'clown':E(g,4.4,-3.4,2.8,1.7);g.fill();E(g,1.6,4,4.2,1.7);g.fill();g.fillStyle='#16161a';E(g,5.6,2.6,1.7,1.3);g.fill();break;
 case'streakcrown':g.fillRect(-10,-10,20,7.6);g.strokeStyle='#2a2422';g.lineWidth=.6;for(let i=0;i<7;i++){const x=4.8-i*1.6;g.beginPath();g.moveTo(x,-6.2+Math.abs(i-3)*.25);g.lineTo(x-.7,-3.6);g.stroke();}break;
 case'fstreaks':g.strokeStyle=c;g.lineWidth=.55;for(let i=0;i<3;i++){g.beginPath();g.moveTo(5.4-i*.9,-2.4-i*.5);g.lineTo(4.6-i*.9,-4.4-i*.4);g.stroke();}break;
}}
function bodyPattern(g,sp,[k,c,o]){const bw=sp.bw||1,bh=sp.bh||1;g.fillStyle=c;switch(k){
 case'breast':E(g,7*bw,3.2,7.6,6.6*(o||1));g.fill();break;
 case'breastedge':g.strokeStyle=c;g.lineWidth=1.1;g.beginPath();g.ellipse(7*bw,3.2,7.8,6.8,0,-1.9,.9);g.stroke();break;
 case'flank':E(g,-3,6,7.2,4);g.fill();break;
 case'belly':E(g,-1,8.4*bh,9,3.6);g.fill();break;
 case'vent':E(g,-10.4*bw,7.6*bh,4.6,3.1);g.fill();break;
 case'wash':E(g,1,8*bh,7,3);g.fill();break;
 case'rump':E(g,-11.2*bw,.4,3.6,2.6);g.fill();break;
 case'breastband':E(g,8.4*bw,2.4,5.2,6.6);g.fill();break;
 case'streaks':g.strokeStyle=c;g.lineWidth=.9;for(let i=0;i<6;i++){const x=6-i*2.2,y=6+((i*37)%5)*.5;g.beginPath();g.moveTo(x,y);g.lineTo(x-1.2,y+2.4);g.stroke();}break;
 case'spots':for(let i=0;i<12;i++){const x=8-i*1.9,y=4.5+((i*53)%7)*.75;E(g,x,y,.9,.6);g.fill();}break;
 case'scallop':g.strokeStyle=c;g.lineWidth=.7;for(let i=0;i<14;i++){const x=12-i*2,y=-5+((i*31)%5);g.beginPath();g.arc(x,y,1.6,0,Math.PI);g.stroke();}break;
 case'backbars':g.save();g.beginPath();g.moveTo(-40,-40);g.lineTo(40,-40);g.lineTo(40,-1.5);g.bezierCurveTo(5,1,-5,2.5,-16,5);g.lineTo(-40,5);g.closePath();g.clip();
  g.strokeStyle=c;g.lineWidth=1.2;for(let x=14;x>-18;x-=2.7){g.beginPath();g.moveTo(x,-12);g.lineTo(x-2.2,7);g.stroke();}g.restore();break;
}}
function wingPath(g,sp){const bw=sp.bw||1;g.beginPath();g.moveTo(9*bw,-3.2);g.quadraticCurveTo(0,-7,-15.5*bw,2.8);g.quadraticCurveTo(-3,8,9*bw,2.6);g.quadraticCurveTo(11*bw,-.4,9*bw,-3.2);g.closePath();}
function wingPattern(g,sp,[k,c]){g.fillStyle=c;switch(k){
 case'bars':g.strokeStyle=c;g.lineWidth=.7;for(let x=7;x>-16;x-=3.6){g.beginPath();g.moveTo(x,-7);g.lineTo(x-2.6,8);g.stroke();}break;
 case'wingbar':g.strokeStyle=c;g.lineWidth=1.5;g.beginPath();g.moveTo(4.2,-5.6);g.lineTo(2.2,6.5);g.stroke();break;
 case'wingbars2':g.strokeStyle=c;g.lineWidth=1.6;for(const x of[5,1.2]){g.beginPath();g.moveTo(x,-6);g.lineTo(x-2,6.6);g.stroke();}break;
 case'tips':for(let x=1;x>-14;x-=2.4){E(g,x,5.8-((1-x)/15)*3,1.1,.75);g.fill();}break;
 case'edge':g.strokeStyle=c;g.lineWidth=.7;for(let x=-2;x>-14;x-=2.6){g.beginPath();g.moveTo(x,-3);g.lineTo(x-3,6);g.stroke();}break;
 case'panel':g.fillRect(1.5,-8,8,17);g.strokeStyle='#141420';g.lineWidth=.8;for(let x=9;x>1.5;x-=1.6){g.beginPath();g.moveTo(x,-8);g.lineTo(x-1.5,9);g.stroke();}break;
 case'patch':E(g,-1.2,2.2,3.2,2.2,-.3);g.fill();break;
 case'spots':for(let r=0;r<3;r++)for(let x=2-r*1.5;x>-14;x-=2.6){E(g,x,-1+r*2.6+(x/-14)*2.4,.95,.55);g.fill();}break;
}}
function tailPath(g,sp,droop){const bw=sp.bw||1,L=sp.tail.len,x0=-10.5*bw;g.beginPath();g.moveTo(x0,-.6);g.lineTo(x0-L,1.6+droop-2.6);g.quadraticCurveTo(x0-L-1.5,droop+2.6,x0-L,droop+4.6);g.lineTo(x0,5);g.closePath();}
function billPath(g,b,open){const x=5.7;g.beginPath();switch(b.t){
 case'cone':g.moveTo(x,-b.d*.5);g.quadraticCurveTo(x+b.len*.6,-b.d*.45,x+b.len,.3);g.quadraticCurveTo(x+b.len*.6,b.d*.5,x,b.d*.55);break;
 case'short':g.moveTo(x,-b.d*.5);g.lineTo(x+b.len,.2);g.lineTo(x,b.d*.5);break;
 case'thin':g.moveTo(x,-b.d*.5);g.quadraticCurveTo(x+b.len*.6,-b.d*.4-(b.up?.3:0),x+b.len,-(b.up?.6:0)+.1);g.lineTo(x+b.len,.35-(b.up?.6:0));g.quadraticCurveTo(x+b.len*.5,b.d*.45,x,b.d*.5);break;
 case'chisel':g.moveTo(x,-b.d*.5);g.lineTo(x+b.len,-.15);g.lineTo(x+b.len,.35);g.lineTo(x,b.d*.5);break;
 case'jay':g.moveTo(x,-b.d*.5);g.quadraticCurveTo(x+b.len*.7,-b.d*.5,x+b.len,.5);g.quadraticCurveTo(x+b.len*.6,b.d*.45,x,b.d*.5);break;
 case'grouse':g.moveTo(x,-b.d*.5);g.quadraticCurveTo(x+b.len,-b.d*.5,x+b.len,.9);g.quadraticCurveTo(x+b.len*.4,b.d*.5,x,b.d*.5);break;
 case'cross':g.moveTo(x,-b.d*.5);g.quadraticCurveTo(x+b.len*.8,-b.d*.6,x+b.len,1.6);g.quadraticCurveTo(x+b.len*.5,-.2,x,.2);g.moveTo(x,.1);g.quadraticCurveTo(x+b.len*.8,b.d*.6,x+b.len*.85,-1.4);g.quadraticCurveTo(x+b.len*.5,.6,x,b.d*.5);break;}
 g.closePath();}
function drawHead(g,sp,st){const hs=sp.hs||1;g.save();g.scale(hs,hs);
 const cr=sp.crest;if(cr){const L=cr.len*(st.crest||1);g.save();g.beginPath();g.moveTo(3.2,-5.4);g.quadraticCurveTo(.6,-6.6-L*.5,-2.6-L*.55,-5.6-L*.85);g.quadraticCurveTo(-3.2-L*.2,-5.2-L*.3,-5.6,-3.2);g.lineTo(-2,-5.2);g.closePath();g.fillStyle=cr.c;g.fill();
  if(cr.barred){g.clip();g.strokeStyle=cr.barred;g.lineWidth=.7;for(let i=0;i<9;i++){g.beginPath();g.moveTo(-8+i*1.4,-14);g.lineTo(-6+i*1.4,-2);g.stroke();}}
  if(cr.streak){g.clip();g.strokeStyle=cr.streak;g.lineWidth=.55;for(let i=0;i<5;i++){g.beginPath();g.moveTo(1-i*1.4,-6);g.lineTo(-.6-i*1.4,-8.4);g.stroke();}}g.restore();}
 g.fillStyle=sp.head;E(g,0,0,6.6,6.6);g.fill();
 g.save();E(g,0,0,6.6,6.6);g.clip();for(const p of sp.hp||[])if(p[0]!=='iris')headPattern(g,p);g.restore();
 // bill
 g.fillStyle=sp.bill.c;billPath(g,sp.bill);g.fill();g.strokeStyle='rgba(0,0,0,.25)';g.lineWidth=.35;g.beginPath();g.moveTo(5.8,.3);g.lineTo(5.8+sp.bill.len*.85,.3);g.stroke();
 // eye
 const iris=(sp.hp||[]).find(p=>p[0]==='iris');const ex=2.5,ey=-1.1;
 if(st.blink){g.strokeStyle='#121214';g.lineWidth=.8;g.beginPath();g.arc(ex,ey-.2,1.3,.2,Math.PI-.2);g.stroke();}
 else{if(iris){g.fillStyle=iris[1];E(g,ex,ey,1.55,1.55);g.fill();g.fillStyle='#0d0d0f';E(g,ex+.1,ey,.75,.75);g.fill();}
  else{g.fillStyle='#0d0d0f';E(g,ex,ey,1.45,1.45);g.fill();}g.fillStyle='#fff';E(g,ex+.45,ey-.5,.42,.42);g.fill();}
 g.restore();}
function drawBirdCanon(g,sp,st){const bw=sp.bw||1,bh=sp.bh||1,cling=sp.pose==='cling';
 const droop=(cling?9:sp.pose==='ground'?-1:1.4)+(st.tail||0);
 // legs
 const trunk=sp.pose==='cling'||sp.pose==='headdown';
 if(!st.fly){g.strokeStyle=sp.leg;g.lineWidth=1.1;g.lineCap='round';const ly=(trunk?10.2:sp.pose==='ground'?12.6:13.6)*bh;
  for(const lx of[2.2,-.6]){g.beginPath();g.moveTo(lx,7.6*bh);g.lineTo(lx+.5,ly);g.stroke();g.beginPath();g.moveTo(lx-1.6,ly);g.lineTo(lx+2.8,ly);g.stroke();}}
 // tail
 g.fillStyle=sp.tail.c;tailPath(g,sp,droop);g.fill();
 if(sp.tail.p){g.save();tailPath(g,sp,droop);g.clip();const L=sp.tail.len,x0=-10.5*bw;for(const[k,c]of sp.tail.p){g.fillStyle=c;g.strokeStyle=c;
   if(k==='bars'){g.lineWidth=.7;for(let x=x0-3;x>x0-L;x-=3.2){g.beginPath();g.moveTo(x,-6);g.lineTo(x-1,12);g.stroke();}}
   if(k==='tip'){g.fillRect(x0-L-4,-10,4.2,24);}
   if(k==='outer'){g.lineWidth=1.3;g.beginPath();g.moveTo(x0,4.6);g.lineTo(x0-L,droop+4.4);g.stroke();}}g.restore();}
 // body
 g.fillStyle=sp.low;E(g,0,2,13*bw,9*bh);g.fill();
 g.save();E(g,0,2,13*bw,9*bh);g.clip();
 g.fillStyle=sp.up;g.beginPath();g.moveTo(-40,-40);g.lineTo(40,-40);g.lineTo(40,-1.5);g.lineTo(14*bw,-1.5);g.bezierCurveTo(5,1,-5,2.5,-16*bw,5);g.lineTo(-40,5);g.closePath();g.fill();
 for(const p of sp.bp||[])bodyPattern(g,sp,p);g.restore();
 // folded wing
 if(!st.fly){g.save();g.translate(0,-(st.wing||0));g.fillStyle=sp.wing;wingPath(g,sp);g.fill();g.save();wingPath(g,sp);g.clip();for(const p of sp.wp||[])wingPattern(g,sp,p);g.restore();
  g.strokeStyle='rgba(0,0,0,.18)';g.lineWidth=.5;wingPath(g,sp);g.stroke();g.restore();}
 for(const[k,c]of sp.sp||[]){g.fillStyle=c;if(k==='shoulder'){E(g,4.2*bw,-3.4,4.6,2.4,-.15);g.fill();}}
 // head
 g.save();g.translate(11.6*bw,-6.2*bh+(st.headY||0));g.rotate((st.tilt||0)+(cling?.5:sp.pose==='headdown'?-.25:0));drawHead(g,sp,st);g.restore();}
function wingSpread(g,sp,ang,far){g.save();g.translate(3,-3);g.rotate(ang);g.beginPath();g.moveTo(5,0);g.quadraticCurveTo(4,-14,-2,-27);g.quadraticCurveTo(-9,-25,-15,-14);g.quadraticCurveTo(-11,-6,-6,0);g.closePath();
 g.fillStyle=far?shade(sp.wing,-.25):sp.wing;g.fill();if(!far){g.save();g.clip();for(const[k,c]of sp.wp||[]){g.strokeStyle=c;g.fillStyle=c;
   if(k==='bars'){g.lineWidth=1;for(let y=-4;y>-27;y-=3){g.beginPath();g.moveTo(-16,y);g.lineTo(6,y+2);g.stroke();}}
   if(k==='wingbar'||k==='wingbars2'){g.lineWidth=1.6;for(const y of(k==='wingbars2'?[-5,-9]:[-6])){g.beginPath();g.moveTo(-14,y);g.lineTo(6,y+1);g.stroke();}}
   if(k==='patch'){E(g,-6,-10,4,3);g.fill();}if(k==='panel'){g.fillRect(-16,-6,22,5);}if(k==='spots'){for(let y=-4;y>-24;y-=3.4)for(let x=-12;x<2;x+=3.4){E(g,x,y,.9,.6);g.fill();}}
   if(k==='tips'){for(let y=-3;y>-24;y-=2.6){E(g,-14+(-y)*.06,y,1,.7);g.fill();}}}g.restore();}
 g.strokeStyle='rgba(0,0,0,.2)';g.lineWidth=.5;g.stroke();g.restore();}
function shade(hex,k){const n=parseInt(hex.slice(1),16);let r=n>>16,gg=n>>8&255,b=n&255;const f=k<0?0:255,a=Math.abs(k);r=Math.round(r+(f-r)*a);gg=Math.round(gg+(f-gg)*a);b=Math.round(b+(f-b)*a);return'rgb('+r+','+gg+','+b+')';}
const POSE={perch:-.42,horiz:-.14,ground:-.1,cling:-1.5,headdown:1.35};
// draw a bird with its feet at (x,y) in the current canvas transform
function drawBird(g,sp,x,y,scale,st){g.save();g.translate(x,y);
 if(st.fly){g.rotate(-.12);g.scale(scale*sp.size,scale*sp.size);const a=Math.sin(st.t*14)*1.1;wingSpread(g,sp,-.2-a*.6,true);drawBirdCanon(g,sp,st);wingSpread(g,sp,.15+a,false);g.restore();return;}
 g.rotate(POSE[sp.pose]);g.scale(scale*sp.size,scale*sp.size);g.translate(-.8,-((sp.pose==='cling'||sp.pose==='headdown')?10.2:13.6)*(sp.bh||1)+(st.hop||0));drawBirdCanon(g,sp,st);g.restore();}

/* ---------- idle behaviour ---------- */
function idle(sp,t,seed){const st={t};const r=(a)=>Math.sin(t*a+seed);
 st.blink=((t*.37+seed)%3)<.09;st.tilt=r(.9)>.75?.22:r(.7)<-.8?-.18:0;
 if(sp.pose==='perch'||sp.pose==='horiz'){st.tail=Math.max(0,r(2.3))>.93?-3:0;st.hop=Math.max(0,Math.sin(t*5.2+seed))*(((t*.21+seed)%4)<.2?-4:0);st.crest=sp.crest&&/jay/.test(sp.id)?1+.25*Math.max(0,r(.6)):1;}
 if(sp.pose==='ground'){const ph=(t*.5+seed)%3;if(ph<.6){st.tilt=.75;st.headY=1.5;}else if(ph<1){st.hop=-Math.sin((ph-.6)/.4*Math.PI)*5;}}
 if(sp.pose==='cling'){const ph=(t*.45+seed)%3.2;if(ph<.7){st.tilt=.35*Math.max(0,Math.sin(t*38));}else if(ph<1.1){st.hop=-Math.sin((ph-.7)/.4*Math.PI)*4;}}
 if(sp.pose==='headdown'){const ph=(t*.55+seed)%2.6;if(ph<.35)st.hop=Math.sin(ph/.35*Math.PI)*3;st.tilt=-.35+(ph>1.4&&ph<2?-.25:0);}
 if(sp.id==='wwcross')st.wing=Math.max(0,r(3))>.97?2:0;
 if(RM){st.hop=0;st.tail=0;}
 return st;}

return{drawBird,idle,BIRDS};})();
