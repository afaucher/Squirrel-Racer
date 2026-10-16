// Squirrel Ranger mushroom artwork: the mushroom art table (FUNGI), the code that draws each shape and growth habit, and the
// fallen logs and stumps that wood-rotting fungi grow on. Loaded before the game script; uses TAU, rng and shadeHex (art/plants.js)
// only while drawing. The facts on each card, and where each one grows, live in data/fungi.js and are merged into FUNGI by the game script.
"use strict";

/* ================= MUSHROOMS =================
   Each entry is one species' look. s: width of one fruit body in world pixels.
   shape: convex, flat, funnel, conical, bell (a cap on a stem), shelf, hoof (brackets), coral, puffball, earthstar, cup, stinkhorn,
          jelly, truffle, oyster (shelving caps with gills underneath).
   cap, cap2 (edge or shade), under (gills or pores), stem, ring, bulb, spots, scales, bands (bracket zones), glow, n (fruit bodies in a cluster) */
const FUNGI={
 chickenofthewoods:{shape:'shelf',bands:['#f7d23e','#f5a62a','#f28c1e'],under:'#f5e04a',rim:'#f7d23e',s:15,n:4},
 henofthewoods:{shape:'rosette',cap:'#7d6e62',cap2:'#5e5248',under:'#f2efe6',stem:'#efebe3',s:18},
 turkeytail:{shape:'shelf',bands:['#ede6d6','#c9b79c','#5e6b7a','#d98b3a','#3e3a36'],under:'#f1ecdf',s:9,n:4},
 bearsheadtooth:{shape:'tooth',cap:'#f8f6ef',cap2:'#e8d9a8',s:14},
 indigomilkcap:{shape:'funnel',cap:'#3e5ea8',cap2:'#2f4f9e',under:'#3c5da8',stem:'#5b78b5',s:11,sh:0.55,sw:0.24},
 birchpolypore:{shape:'shelf',bands:['#efe8da','#d9c9ad','#cdb99a'],under:'#f6f3ea',rim:'#efe8da',s:15},
 chaga:{shape:'conk',cap:'#1e1a17',cap2:'#b5651d',s:14},
 redbeltedconk:{shape:'hoof',bands:['#f2ebd8','#c8442a','#5a3a2e','#3e2a22'],under:'#f3ebd2',s:14},
 aspenoyster:{shape:'oyster',cap:'#e9e1d3',under:'#f7f4ec',stem:'#f2eee4',s:12,n:3},
 whitebirchbolete:{shape:'convex',cap:'#ede7da',cap2:'#c9b99b',under:'#f4eedf',stem:'#f1ede4',stemDots:'#4a3b30',s:11,sh:1.25,sw:0.22,dome:0.48},
 deertruffle:{shape:'truffle',cap:'#8b5e34',cap2:'#5c4a3a',warts:'#5e3e22',s:9},
 flyagaric:{shape:'convex',cap:'#d62718',cap2:'#b01f12',under:'#faf7f0',stem:'#f5f2ea',ring:true,bulb:true,spots:'#fffaf0',s:13,sh:1},
 whiteking:{shape:'convex',cap:'#ede6d6',cap2:'#d9c8a8',under:'#d8c55a',stem:'#efe9dc',bulb:true,s:13,sh:0.75,sw:0.32,dome:0.5},
 rustygill:{shape:'shelf',bands:['#e8a33a','#b8732f','#8a5a2b','#3e2a1a'],under:'#c9a27a',rim:'#f0b84a',s:11,n:3},
 aspenbracket:{shape:'hoof',bands:['#9c7a55','#2a2522','#3a332e'],under:'#6b4a3f',s:12},
 rhizopogon:{shape:'truffle',cap:'#e6dccd',cap2:'#8e2f3a',s:10},
 chanterelle:{shape:'funnel',cap:'#f2a81d',cap2:'#e08f12',stem:'#f2b84f',s:10,sh:0.7,sw:0.26},
 dyerspolypore:{shape:'rosette',cap:'#6b3a1f',cap2:'#5a3218',rim:'#f2c230',under:'#c9b83a',stem:'#5a3a1e',s:16},
 ochrebrittlegill:{shape:'flat',cap:'#d9b23a',cap2:'#c29a28',under:'#f3ebd2',stem:'#f2f0ea',s:11,sh:0.6,sw:0.24},
 hooffungus:{shape:'hoof',bands:['#a39a8c','#6e6a66','#4a4744','#6e6a66'],under:'#c9b48f',s:14},
 porcelain:{shape:'convex',cap:'#f4f1e8',cap2:'#d9c79a',under:'#fbfaf6',stem:'#eeebe3',ring:true,s:9,sh:1,sw:0.13,n:4},
 tsukiyotake:{shape:'oyster',cap:'#b8783a',under:'#f3ebc8',stem:'#e9dfc6',glow:'rgba(190,240,255,.55)',s:14,n:3},
 bunaharitake:{shape:'shelf',bands:['#faf8f2','#f6f0e0','#f1e3b5'],under:'#f6f1e2',teeth:'#f2ead2',s:11,n:4},
 panthercap:{shape:'convex',cap:'#8a7356',cap2:'#6e5a42',under:'#ffffff',stem:'#f4f1ea',ring:true,bulb:true,spots:'#fffaf0',s:12,sh:0.95},
 redbracket:{shape:'shelf',bands:['#f4b183','#f07a2a','#e8501e','#d9411c'],under:'#e8501e',s:10,n:3},
 birdsnest:{shape:'nest',cap:'#c9a44a',cap2:'#8b6b3e',inner:'#d9d9d6',eggs:'#e3d3b0',s:8},
 crosscage:{shape:'cage',cap:'#f5f2ea',cap2:'#5b5a2e',bulb:'#d9b23a',s:12},
 sulphurtuft:{shape:'convex',cap:'#e8d21f',cap2:'#d0a51a',under:'#b8a23a',stem:'#e6d44a',s:7,sh:1.6,sw:0.13,dome:0.45,n:6},
 fringedstar:{shape:'earthstar',cap:'#7a6a3a',cap2:'#cdbf9a',s:11}
};

// one fruit body, growing up from (0,0), or for brackets out to +x from a surface at x=0
function fungusBody(g,a,s,r,lean){g.lineCap='round';g.lineJoin='round';const ol='rgba(40,24,12,.45)';g.lineWidth=Math.max(.5,s*.05);
 const sh=a.shape;
 if(sh==='shelf'||sh==='hoof'||sh==='oyster'){const w=s,t=sh==='hoof'?s*.55:sh==='oyster'?s*.28:s*.26;
  g.save();if(lean)g.rotate(lean);
  // the top surface, banded in zones, then the pore or gill face underneath
  const band=a.bands||[a.cap,a.cap2||shadeHex(a.cap,-.2)];
  if(sh==='oyster'){g.strokeStyle=a.stem||a.cap;g.lineWidth=s*.12;g.beginPath();g.moveTo(0,0);g.lineTo(w*.18,-t*.3);g.stroke();g.lineWidth=Math.max(.5,s*.05);}
  g.fillStyle=a.under||shadeHex(band[0],.35);g.beginPath();g.moveTo(0,t*.15);g.quadraticCurveTo(w*.95,t*.35,w,-t*.1);g.quadraticCurveTo(w*.6,t*.7,0,t*.55);g.closePath();g.fill();
  for(let k=band.length-1;k>=0;k--){const f=(k+1)/band.length;g.fillStyle=band[k];g.beginPath();g.moveTo(0,-t);g.quadraticCurveTo(w*f*.85,-t*1.05,w*f,-t*.05*f);g.quadraticCurveTo(w*f*.7,t*.25,0,t*.2);g.closePath();g.fill();}
  // soft spines hanging under the shelf instead of pores (tooth fungi)
  if(a.teeth){g.strokeStyle=a.teeth;g.lineWidth=Math.max(.4,s*.035);for(let k=1;k<9;k++){const x=w*k/9.5;g.beginPath();g.moveTo(x,t*.3);g.lineTo(x,t*.3+s*.14);g.stroke();}}
  if(a.rim){g.strokeStyle=a.rim;g.lineWidth=s*.07;g.beginPath();g.moveTo(w*.2,t*.2);g.quadraticCurveTo(w*.8,t*.3,w,-t*.08);g.stroke();}
  g.strokeStyle=ol;g.lineWidth=Math.max(.5,s*.04);g.beginPath();g.moveTo(0,-t);g.quadraticCurveTo(w*.85,-t*1.05,w,-t*.05);g.quadraticCurveTo(w*.6,t*.7,0,t*.55);g.stroke();
  if(sh==='oyster'){g.strokeStyle=a.under?shadeHex(a.under,-.25):ol;g.lineWidth=Math.max(.3,s*.025);for(let k=1;k<6;k++){const f=k/6;g.beginPath();g.moveTo(w*.12,t*.25);g.lineTo(w*f,t*(.5-.25*f));g.stroke();}}
  g.restore();return;}
 // many overlapping spoon-shaped caps fanned into a dome from one base (hen of the woods, dyer's polypore); rim colours the margins
 if(sh==='rosette'){const rows=[[5,.62,.55],[6,.42,.8],[5,.2,1]];g.fillStyle=a.stem||'#efebe3';g.beginPath();g.ellipse(0,-s*.05,s*.2,s*.08,0,0,TAU);g.fill();
  for(const[n,h,sc]of rows)for(let k=0;k<n;k++){const f=n>1?k/(n-1):.5,x=(f-.5)*s*1.05*sc+(r()-.5)*s*.05,y=-s*h-(1-Math.abs(f-.5)*2)*s*.08,w=s*(.3+r()*.06)*(.8+sc*.3),an=(f-.5)*.9;
   g.save();g.translate(x,y);g.rotate(an);
   g.fillStyle=a.under||'#f2efe6';g.beginPath();g.ellipse(0,w*.08,w*.5,w*.16,0,0,Math.PI);g.fill();
   g.fillStyle=(k+n)%2?a.cap:(a.cap2||shadeHex(a.cap,-.15));g.beginPath();g.ellipse(0,0,w*.52,w*.3,0,Math.PI,0);g.lineTo(w*.52,w*.05);g.quadraticCurveTo(0,w*.16,-w*.52,w*.05);g.closePath();g.fill();
   if(a.rim){g.strokeStyle=a.rim;g.lineWidth=Math.max(.6,w*.12);g.beginPath();g.ellipse(0,0,w*.48,w*.27,0,Math.PI*1.05,Math.PI*1.95);g.stroke();}
   g.strokeStyle='rgba(40,24,12,.35)';g.lineWidth=Math.max(.4,s*.025);g.beginPath();g.ellipse(0,0,w*.52,w*.3,0,Math.PI,0);g.stroke();g.restore();}
  return;}
 // a white clump hung with icicle-like spines (tooth fungi)
 if(sh==='tooth'){const R=s*.42;g.fillStyle=a.cap;g.beginPath();g.ellipse(0,-R*1.15,R,R*.75,0,0,TAU);g.fill();
  g.strokeStyle=a.cap;g.lineCap='round';for(let k=0;k<22;k++){const x=(r()-.5)*R*1.9,y0=-R*1.4+r()*R*.9,L=s*(.18+r()*.3);g.lineWidth=s*.055;g.beginPath();g.moveTo(x,y0);g.lineTo(x+(r()-.5)*s*.04,y0+L);g.stroke();}
  g.fillStyle=a.cap2||shadeHex(a.cap,-.1);g.globalAlpha=.5;g.beginPath();g.ellipse(R*.2,-R*1.35,R*.5,R*.3,0,0,TAU);g.fill();g.globalAlpha=1;return;}
 // a hard, black, cracked lump bursting from the bark, rusty where it splits (chaga)
 if(sh==='conk'){const R=s*.5;g.fillStyle=a.cap;g.beginPath();for(let k=0;k<=12;k++){const an=-Math.PI/2+k/12*Math.PI,rr=R*(.75+r()*.3);const x=Math.cos(an)*rr*1.2,y=-R*.2+Math.sin(an)*rr;k?g.lineTo(x,y):g.moveTo(x,y);}g.closePath();g.fill();
  g.strokeStyle=a.cap2||'#b5651d';g.lineWidth=Math.max(.5,s*.04);for(let k=0;k<6;k++){const x=r()*R*.9,y=-R*(.8-r()*1.1);g.beginPath();g.moveTo(x,y);g.lineTo(x+R*.25,y+(r()-.5)*R*.3);g.stroke();}return;}
 if(sh==='coral'){const N=7;g.strokeStyle=a.cap;for(let k=0;k<N;k++){const an=-Math.PI/2+(k/(N-1)-.5)*1.3+(r()-.5)*.2,L=s*(.7+r()*.4);g.lineWidth=s*.16;
   const mx=Math.cos(an)*L*.55,my=Math.sin(an)*L*.55;g.beginPath();g.moveTo(0,0);g.lineTo(mx,my);g.stroke();g.lineWidth=s*.1;
   for(const d of[-.35,.35]){g.beginPath();g.moveTo(mx,my);g.lineTo(mx+Math.cos(an+d)*L*.45,my+Math.sin(an+d)*L*.45);g.stroke();}}
  g.fillStyle=a.cap2||shadeHex(a.cap,.3);g.beginPath();g.ellipse(0,-s*.08,s*.22,s*.12,0,0,TAU);g.fill();return;}
 if(sh==='puffball'){const R=s*.5;g.fillStyle=a.cap2||shadeHex(a.cap,-.15);g.beginPath();g.ellipse(0,-R*.35,R*.55,R*.4,0,0,TAU);g.fill();
  g.fillStyle=a.cap;g.beginPath();g.ellipse(0,-R*1.05,R,R*.88,0,0,TAU);g.fill();g.strokeStyle=ol;g.stroke();
  if(a.spots){g.fillStyle=a.spots;for(let k=0;k<16;k++){const an=r()*TAU,rr=Math.sqrt(r())*R*.8;g.beginPath();g.arc(Math.cos(an)*rr,-R*1.05+Math.sin(an)*rr*.85,s*.035+r()*s*.03,0,TAU);g.fill();}}
  g.fillStyle='rgba(255,255,255,.22)';g.beginPath();g.ellipse(-R*.35,-R*1.4,R*.3,R*.2,-.4,0,TAU);g.fill();return;}
 if(sh==='earthstar'){const R=s*.8,N=7;
  // pointed rays splayed out on the ground, seen a little from above, with the spore ball sitting on them
  for(let k=0;k<N;k++){const an=Math.PI*(k/(N-1)),tx=-Math.cos(an)*R,ty=-Math.sin(an)*R*.42+s*.02,bx=-Math.cos(an)*s*.2,by=-s*.16-Math.sin(an)*s*.06;
   g.fillStyle=k%2?(a.cap2||shadeHex(a.cap,-.2)):shadeHex(a.cap2||a.cap,-.32);g.beginPath();g.moveTo(bx-s*.12,by);g.lineTo(tx,ty);g.lineTo(bx+s*.12,by);g.closePath();g.fill();}
  g.fillStyle=a.cap;g.beginPath();g.ellipse(0,-s*.32,s*.26,s*.24,0,0,TAU);g.fill();g.strokeStyle=ol;g.stroke();
  g.fillStyle=shadeHex(a.cap,-.35);g.beginPath();g.arc(0,-s*.55,s*.04,0,TAU);g.fill();return;}
 if(sh==='cup'){const R=s*.5;g.fillStyle=a.cap2||shadeHex(a.cap,.25);g.beginPath();g.moveTo(-R,-R*.75);g.quadraticCurveTo(-R*.9,0,0,0);g.quadraticCurveTo(R*.9,0,R,-R*.75);g.closePath();g.fill();
  g.fillStyle=a.cap;g.beginPath();g.ellipse(0,-R*.75,R,R*.32,0,0,TAU);g.fill();g.strokeStyle=ol;g.stroke();
  g.fillStyle=shadeHex(a.cap,-.25);g.beginPath();g.ellipse(0,-R*.7,R*.75,R*.2,0,0,TAU);g.fill();return;}
 // a tiny cup holding flat 'eggs' that raindrops splash out (bird's nest fungi)
 if(sh==='nest'){const R=s*.5;g.fillStyle=a.cap;g.beginPath();g.moveTo(-R,-R*.9);g.quadraticCurveTo(-R*.75,0,0,0);g.quadraticCurveTo(R*.75,0,R,-R*.9);g.closePath();g.fill();g.strokeStyle=ol;g.stroke();
  g.fillStyle=a.inner||'#d9d9d6';g.beginPath();g.ellipse(0,-R*.9,R*.92,R*.3,0,0,TAU);g.fill();g.fillStyle=a.eggs||'#e3d3b0';
  for(const[x,y]of[[-R*.35,-R*.86],[R*.3,-R*.9],[0,-R*.8]]){g.beginPath();g.ellipse(x,y,R*.2,R*.11,0,0,TAU);g.fill();}g.strokeStyle=a.cap2||shadeHex(a.cap,-.25);g.beginPath();g.ellipse(0,-R*.9,R*.92,R*.3,0,0,TAU);g.stroke();return;}
 // a white cage of arms joined at the top, rising from an egg-like cup (cage stinkhorns)
 if(sh==='cage'){const H=s*1.2;if(a.bulb){g.fillStyle=a.bulb;g.beginPath();g.ellipse(0,-s*.1,s*.32,s*.16,0,0,TAU);g.fill();}
  g.strokeStyle=a.cap;g.lineCap='round';for(const k of[-1,-.35,.35,1]){g.lineWidth=s*.11;g.beginPath();g.moveTo(k*s*.3,-s*.12);g.bezierCurveTo(k*s*.55,-H*.55,k*s*.25,-H*.9,0,-H);g.stroke();}
  g.fillStyle=a.cap2||'#5b5a2e';g.beginPath();g.ellipse(0,-H,s*.16,s*.1,0,0,TAU);g.fill();return;}
 if(sh==='stinkhorn'){const H=s*1.6;if(a.bulb){g.fillStyle=a.bulb;g.beginPath();g.ellipse(0,-s*.12,s*.3,s*.18,0,0,TAU);g.fill();}
  g.fillStyle=a.stem||'#f4efe2';g.beginPath();g.moveTo(-s*.12,0);g.lineTo(-s*.1,-H*.75);g.lineTo(s*.1,-H*.75);g.lineTo(s*.12,0);g.fill();
  g.fillStyle=a.cap;g.beginPath();g.ellipse(0,-H*.85,s*.16,s*.24,0,0,TAU);g.fill();g.strokeStyle=ol;g.stroke();
  if(a.under){g.strokeStyle=a.under;g.lineWidth=s*.04;for(let k=0;k<6;k++){const an=k/6*TAU;g.beginPath();g.moveTo(0,-H*.85);g.lineTo(Math.cos(an)*s*.4,-H*.6+Math.sin(an)*s*.15);g.stroke();}}return;}
 if(sh==='jelly'){g.fillStyle=a.cap;g.globalAlpha=.88;for(let k=0;k<5;k++){const an=-Math.PI/2+(k-2)*.55,d=s*.22;g.beginPath();g.ellipse(Math.cos(an)*d,-s*.25+Math.sin(an)*d*.6,s*.24,s*.18,an,0,TAU);g.fill();}
  g.globalAlpha=1;g.fillStyle='rgba(255,255,255,.3)';g.beginPath();g.ellipse(-s*.1,-s*.38,s*.08,s*.05,0,0,TAU);g.fill();return;}
 if(sh==='truffle'){const R=s*.42;g.fillStyle='#6a5136';g.beginPath();g.ellipse(0,0,R*1.6,R*.45,0,0,TAU);g.fill();
  g.fillStyle=a.cap;g.beginPath();for(let k=0;k<=14;k++){const an=Math.PI+k/14*Math.PI,rr=R*(.9+r()*.15);k?g.lineTo(Math.cos(an)*rr,-R*.2+Math.sin(an)*rr):g.moveTo(Math.cos(an)*rr,-R*.2+Math.sin(an)*rr);}g.closePath();g.fill();g.strokeStyle=ol;g.stroke();
  // blushing where the soil was scraped off (cap2), then a few specks of earth
  if(a.warts){g.fillStyle=a.warts;for(let k=0;k<12;k++){g.beginPath();g.arc((r()-.5)*R*1.5,-R*.2-r()*R*.85,Math.max(.3,s*.03),0,TAU);g.fill();}}
  if(a.cap2){g.save();g.globalAlpha=.6;g.fillStyle=a.cap2;g.beginPath();g.ellipse(R*.25,-R*.75,R*.45,R*.32,.3,0,TAU);g.fill();g.restore();}
  g.fillStyle='rgba(60,40,20,.35)';for(let k=0;k<4;k++){g.beginPath();g.arc((r()-.5)*R,-R*.4-r()*R*.5,s*.04,0,TAU);g.fill();}return;}
 // a cap on a stem: convex, flat, funnel, conical or bell
 const W=s*(sh==='conical'||sh==='bell'?.72:1),sH=s*(a.sh!=null?a.sh:.85),sw=s*(a.sw||.16);
 g.save();if(lean)g.rotate(lean);
 if(a.bulb){g.fillStyle=a.bulb===true?(a.stem||'#efe8d8'):a.bulb;g.beginPath();g.ellipse(0,-sw*.4,sw*.95,sw*.6,0,0,TAU);g.fill();}
 g.fillStyle=a.stem||'#efe8d8';g.beginPath();g.moveTo(-sw*.55,0);g.lineTo(-sw*.45,-sH);g.lineTo(sw*.45,-sH);g.lineTo(sw*.55,0);g.closePath();g.fill();
 g.strokeStyle='rgba(40,24,12,.18)';g.lineWidth=Math.max(.4,s*.03);g.beginPath();g.moveTo(-sw*.3,-sH*.1);g.lineTo(-sw*.25,-sH*.9);g.stroke();
 // dark flecks (scabers) on the stem, as on birch boletes
 if(a.stemDots){g.fillStyle=a.stemDots;for(let k=0;k<14;k++){g.beginPath();g.arc((r()-.5)*sw*.8,-sH*(.05+r()*.88),Math.max(.3,s*.022),0,TAU);g.fill();}}
 if(a.ring){g.fillStyle=a.ring===true?(a.stem||'#efe8d8'):a.ring;g.beginPath();g.moveTo(-sw*.5,-sH*.72);g.quadraticCurveTo(-sw*1.15,-sH*.62,-sw*.9,-sH*.58);g.lineTo(sw*.9,-sH*.58);g.quadraticCurveTo(sw*1.15,-sH*.62,sw*.5,-sH*.72);g.closePath();g.fill();}
 g.translate(0,-sH);
 if(sh==='funnel'){const H=W*.42,body=()=>{g.beginPath();g.moveTo(-sw*.5,W*.02);g.quadraticCurveTo(-W*.18,-H*.35,-W*.5,-H);g.quadraticCurveTo(0,-H*.72,W*.5,-H);g.quadraticCurveTo(W*.18,-H*.35,sw*.5,W*.02);g.closePath();};
  g.fillStyle=a.under||shadeHex(a.cap,.15);body();g.fill();
  g.strokeStyle=shadeHex(a.under||a.cap,-.18);g.lineWidth=Math.max(.35,s*.025);for(let k=-3;k<=3;k++){g.beginPath();g.moveTo(k*sw*.12,0);g.quadraticCurveTo(k*W*.05,-H*.4,k*W*.15,-H*.9);g.stroke();}
  g.fillStyle=a.cap;g.beginPath();g.ellipse(0,-H,W*.5,W*.13,0,0,TAU);g.fill();g.fillStyle=a.cap2||shadeHex(a.cap,-.2);g.beginPath();g.ellipse(0,-H+W*.015,W*.36,W*.08,0,0,TAU);g.fill();
  g.strokeStyle=ol;g.lineWidth=Math.max(.5,s*.045);body();g.stroke();g.beginPath();g.ellipse(0,-H,W*.5,W*.13,0,0,TAU);g.stroke();g.restore();return;}
 if(a.glow){g.save();g.globalCompositeOperation='lighter';const gl=g.createRadialGradient(0,0,0,0,0,W*.9);gl.addColorStop(0,a.glow);gl.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gl;g.beginPath();g.arc(0,0,W*.9,0,TAU);g.fill();g.restore();}
 const cap=()=>{g.beginPath();
  if(sh==='funnel'){g.moveTo(-W*.5,-W*.32);g.quadraticCurveTo(-W*.25,-W*.05,0,-W*.02);g.quadraticCurveTo(W*.25,-W*.05,W*.5,-W*.32);g.quadraticCurveTo(W*.35,-W*.04,W*.14,W*.04);g.lineTo(-W*.14,W*.04);g.quadraticCurveTo(-W*.35,-W*.04,-W*.5,-W*.32);}
  else if(sh==='conical'){g.moveTo(-W*.5,0);g.quadraticCurveTo(-W*.35,-W*.55,0,-W*.95);g.quadraticCurveTo(W*.35,-W*.55,W*.5,0);g.quadraticCurveTo(0,W*.08,-W*.5,0);}
  else if(sh==='bell'){g.moveTo(-W*.5,W*.05);g.quadraticCurveTo(-W*.55,-W*.75,0,-W*.78);g.quadraticCurveTo(W*.55,-W*.75,W*.5,W*.05);g.quadraticCurveTo(0,-W*.05,-W*.5,W*.05);}
  else{const hgt=sh==='flat'?W*.2:W*(a.dome||.4);g.moveTo(-W*.5,0);g.bezierCurveTo(-W*.5,-hgt*1.1,W*.5,-hgt*1.1,W*.5,0);g.quadraticCurveTo(0,W*.07,-W*.5,0);}};
 // gills or pores, seen just under the rim
 if(sh!=='funnel'){g.fillStyle=a.under||shadeHex(a.cap,.45);g.beginPath();g.ellipse(0,W*.02,W*.47,W*.07,0,0,TAU);g.fill();}
 g.fillStyle=a.cap;cap();g.fill();
 g.save();cap();g.clip();g.fillStyle=a.cap2||shadeHex(a.cap,-.18);g.beginPath();g.ellipse(0,W*.1,W*.62,W*.16,0,0,TAU);g.fill();
 g.fillStyle='rgba(255,255,255,.2)';g.beginPath();g.ellipse(-W*.17,-W*(sh==='flat'?.13:sh==='conical'?.45:.26),W*.15,W*.07,-.35,0,TAU);g.fill();
 if(a.spots){g.fillStyle=a.spots;for(let k=0;k<11;k++){const x=(r()-.5)*W*.85,y=-W*(.05+r()*.32);g.beginPath();g.arc(x,y,s*.04+r()*s*.03,0,TAU);g.fill();}}
 if(a.scales){g.fillStyle=a.scales;for(let k=0;k<14;k++){const x=(r()-.5)*W*.85,y=-W*(.03+r()*.3);g.beginPath();g.ellipse(x,y,s*.05,s*.025,(r()-.5),0,TAU);g.fill();}}
 g.restore();
 g.strokeStyle=ol;g.lineWidth=Math.max(.5,s*.045);cap();g.stroke();
 g.restore();}

// a species where it grows: alone, scattered, in a cluster from one base, or as tiers of shelves. side: -1 grows out to the left.
function drawFungus(g,id,x,y,opt){const F=FUNGI[id];if(!F)return;const a=F.art||F;opt=opt||{};const r=rng(opt.seed||7),s=(a.s||10)*(opt.scale||1),habit=opt.habit||'single',side=opt.side||1;
 g.save();g.translate(x,y);if(side<0)g.scale(-1,1);
 const shelf=a.shape==='shelf'||a.shape==='hoof'||a.shape==='oyster';
 if(shelf){const n=habit==='tiers'||habit==='cluster'?Math.max(2,a.n||3):1;for(let k=0;k<n;k++){const f=1-k*.16;g.save();g.translate(0,-k*s*(a.shape==='hoof'?.55:.42));fungusBody(g,a,s*f*(.9+r()*.2),r,(r()-.5)*.12);g.restore();}}
 else if(habit==='cluster'){const n=a.n||5;const parts=[];for(let k=0;k<n;k++)parts.push({x:(k-(n-1)/2)*s*.28+(r()-.5)*s*.1,f:.6+r()*.45,l:((k-(n-1)/2)/n)*.6});
  parts.sort((p,q)=>p.f-q.f);for(const p of parts){g.save();g.translate(p.x,0);fungusBody(g,a,s*p.f,r,p.l);g.restore();}}
 else if(habit==='scattered'||habit==='ring'){const n=2+((r()*2)|0);for(let k=0;k<n;k++){g.save();g.translate((k-(n-1)/2)*s*1.15+(r()-.5)*s*.3,r()*2);fungusBody(g,a,s*(.65+r()*.45),r,(r()-.5)*.15);g.restore();}}
 else fungusBody(g,a,s,r,(r()-.5)*.1);
 g.restore();}

/* ================= DEAD WOOD: fallen logs and stumps, in their own tree species' bark ================= */
// a log lying on the ground, centred at (x,y) on its underside, length L and radius R; the cut end shows growth rings
function drawLog(g,sp,x,y,L,R,seed){const r=rng(seed||3);g.save();g.translate(x,y);g.lineCap='round';
 g.fillStyle='rgba(20,14,8,.18)';g.beginPath();g.ellipse(0,1,L*.55,R*.35,0,0,TAU);g.fill();
 g.fillStyle=sp.bark;g.beginPath();g.moveTo(-L/2,-R*2);g.lineTo(L/2,-R*2);g.quadraticCurveTo(L/2+R*.5,-R,L/2,0);g.lineTo(-L/2,0);g.closePath();g.fill();
 g.fillStyle=sp.barkLo||shadeHex(sp.bark,-.25);g.beginPath();g.moveTo(-L/2,-R*.55);g.lineTo(L/2,-R*.55);g.quadraticCurveTo(L/2+R*.2,-R*.3,L/2,0);g.lineTo(-L/2,0);g.closePath();g.fill();
 g.strokeStyle=sp.barkHi||shadeHex(sp.bark,.25);g.lineWidth=Math.max(1,R*.16);g.globalAlpha=.6;g.beginPath();g.moveTo(-L/2+R*.4,-R*1.7);g.lineTo(L/2-R*.3,-R*1.72);g.stroke();g.globalAlpha=1;
 g.strokeStyle=sp.mark||sp.strips||sp.barkLo||shadeHex(sp.bark,-.3);g.lineWidth=sp.mark?1.4:1;g.globalAlpha=.75;
 for(let k=0;k<Math.floor(L/9);k++){const px=-L/2+R*.6+r()*(L-R*1.2),py=-R*(.5+r()*1.3);g.beginPath();g.moveTo(px,py);g.lineTo(px+(sp.mark?2.5:6+r()*6),py+(r()-.5)*.8);g.stroke();}g.globalAlpha=1;
 // a broken end on the right, a sawn-looking cut end on the left with rings
 g.fillStyle=shadeHex(sp.barkLo||sp.bark,-.2);g.beginPath();g.moveTo(L/2,-R*2);for(let k=0;k<=5;k++)g.lineTo(L/2+R*.25+(k%2?R*.35:0),-R*2+k*R*.4);g.lineTo(L/2,0);g.fill();
 g.fillStyle='#c8a77a';g.beginPath();g.ellipse(-L/2,-R,R*.55,R,0,0,TAU);g.fill();g.strokeStyle='#9c7a52';g.lineWidth=.7;
 for(let k=1;k<4;k++){g.beginPath();g.ellipse(-L/2,-R,R*.55*k/4,R*k/4,0,0,TAU);g.stroke();}
 g.strokeStyle=sp.bark;g.lineWidth=Math.max(1,R*.14);g.beginPath();g.ellipse(-L/2,-R,R*.55,R,0,0,TAU);g.stroke();
 g.strokeStyle='rgba(28,20,14,.45)';g.lineWidth=1.2;g.beginPath();g.moveTo(-L/2,-R*2);g.lineTo(L/2,-R*2);g.moveTo(-L/2,0);g.lineTo(L/2,0);g.stroke();
 // a little moss on top
 g.fillStyle='rgba(98,138,58,.8)';for(let k=0;k<3;k++){const px=-L/2+R+r()*(L-R*2);g.beginPath();g.ellipse(px,-R*2+.5,R*(.5+r()*.6),R*.22,0,0,TAU);g.fill();}
 g.restore();}
// a stump: a short trunk with a flat cut top
function drawStump(g,sp,x,y,R,H,seed){g.save();g.translate(x,y);
 g.fillStyle='rgba(20,14,8,.18)';g.beginPath();g.ellipse(0,1,R*1.4,R*.3,0,0,TAU);g.fill();
 g.fillStyle=sp.bark;g.beginPath();g.moveTo(-R*1.25,0);g.quadraticCurveTo(-R,-H*.3,-R,-H);g.lineTo(R,-H);g.quadraticCurveTo(R,-H*.3,R*1.25,0);g.closePath();g.fill();
 g.fillStyle=sp.barkLo||shadeHex(sp.bark,-.25);g.beginPath();g.moveTo(R*.35,-H);g.lineTo(R,-H);g.quadraticCurveTo(R,-H*.3,R*1.25,0);g.lineTo(R*.45,0);g.closePath();g.fill();
 if(sp.mark){g.strokeStyle=sp.mark;g.lineWidth=1.3;const r=rng(seed||5);for(let k=0;k<4;k++){const py=-H*(.2+r()*.7);g.beginPath();g.moveTo(-R*.8,py);g.lineTo(-R*.8+3,py);g.stroke();}}
 g.fillStyle='#c8a77a';g.beginPath();g.ellipse(0,-H,R,R*.32,0,0,TAU);g.fill();g.strokeStyle='#9c7a52';g.lineWidth=.6;for(let k=1;k<4;k++){g.beginPath();g.ellipse(0,-H,R*k/4,R*.32*k/4,0,0,TAU);g.stroke();}
 g.strokeStyle='rgba(28,20,14,.45)';g.lineWidth=1.2;g.beginPath();g.ellipse(0,-H,R,R*.32,0,0,TAU);g.stroke();
 g.restore();}
