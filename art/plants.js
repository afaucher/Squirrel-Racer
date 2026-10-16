// Squirrel Ranger plant artwork: scenery flowers and their sprite cache, the flower shapes shared by scenery and
// species flowers, the nut, cone and wildflower art tables (NUTS, FLW), and the code that draws them.
// Loaded before the game script; uses TAU, RM, rng, lerp and ART_HI from it only while drawing. The facts on each card live in
// data/trees.js and data/flowers.js and are merged into NUTS and FLW by the game script.
"use strict";

/* ================= FLOWERS ================= */
const PHYLLO={sunflower:{p:'#f2b81f',p2:'#d98f10',d:['#3a2410','#6b3f16'],n:21,len:1,wid:.3},daisy:{p:'#fbfaf5',p2:'#dcd8cc',d:['#d99a16','#f4c63b'],n:21,len:.85,wid:.2},aster:{p:'#a183db',p2:'#7556bc',d:['#cf9218','#f2c24a'],n:34,len:.8,wid:.11},susan:{p:'#f0a81c',p2:'#cf7a14',d:['#24160c','#4d2e15'],n:13,len:1.05,wid:.32}};
function drawPhyllo(ctx,v,R,seed){const r=rng(seed),V=PHYLLO[v];
 for(let layer=0;layer<2;layer++){for(let i=0;i<V.n;i++){const a=i*TAU/V.n+layer*Math.PI/V.n+(r()-.5)*.1;const L=R*V.len*(.88+r()*.24)*(layer?.9:1);ctx.save();ctx.rotate(a);ctx.fillStyle=layer?V.p:V.p2;ctx.beginPath();ctx.ellipse(R*.34+L*.5,0,L*.5,Math.max(.6,L*V.wid*.9),0,0,TAU);ctx.fill();ctx.restore();}}
 const DR=R*.42;ctx.fillStyle=V.d[0];ctx.beginPath();ctx.arc(0,0,DR*1.06,0,TAU);ctx.fill();
 const N=Math.max(20,Math.floor(DR*DR*1.1)),c=DR/Math.sqrt(N);
 for(let k=1;k<N;k++){const a=k*2.39996323,rr=c*Math.sqrt(k);ctx.fillStyle=k<N*.3?V.d[1]:(k%3?V.d[0]:V.d[1]);ctx.beginPath();ctx.arc(Math.cos(a)*rr,Math.sin(a)*rr,c*.48,0,TAU);ctx.fill();}
}
const POLAR={rose:{k:5,p:.5,notch:.06,c1:'#e2577c',c2:'#f9c3d0',center:'#f0c64a',layers:2},cherry:{k:5,p:.62,notch:.3,c1:'#f3b7c7',c2:'#fff0f3',center:'#cf3f63',layers:1},dogwood:{k:4,p:.42,notch:.34,c1:'#eee8da',c2:'#ffffff',tip:'#b9566e',center:'#97a844',layers:1},bloodroot:{k:8,p:.75,notch:0,c1:'#f2f0e8',c2:'#ffffff',center:'#efbe2c',layers:1}};
function polarPath(ctx,R,V,rot){ctx.beginPath();for(let i=0;i<=200;i++){const th=i/200*TAU;const b=Math.abs(Math.cos(V.k*th/2));const rr=R*(.18+.82*Math.pow(b,V.p))*(1-V.notch*Math.exp(-Math.pow((1-b)*80,2)));const x=Math.cos(th+rot)*rr,y=Math.sin(th+rot)*rr;i?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.closePath();}
function drawPolar(ctx,v,R,rot){const V=POLAR[v];rot=rot||0;
 if(V.layers===2){ctx.fillStyle=V.c1;polarPath(ctx,R,V,rot+Math.PI/V.k);ctx.fill();}
 const RR=V.layers===2?R*.74:R;const g=ctx.createRadialGradient(0,0,R*.05,0,0,RR);g.addColorStop(0,V.c2);g.addColorStop(1,V.c1);ctx.fillStyle=g;polarPath(ctx,RR,V,rot);ctx.fill();
 ctx.strokeStyle='rgba(60,20,30,.18)';ctx.lineWidth=Math.max(.5,R*.025);ctx.stroke();
 if(V.tip){ctx.fillStyle=V.tip;for(let j=0;j<V.k;j++){const a=rot+j*TAU/V.k;ctx.beginPath();ctx.arc(Math.cos(a)*RR*.84,Math.sin(a)*RR*.84,R*.07,0,TAU);ctx.fill();}}
 ctx.fillStyle=V.center;ctx.beginPath();ctx.arc(0,0,R*.15,0,TAU);ctx.fill();
 ctx.fillStyle='#f3d35a';for(let j=0;j<16;j++){const a=j*2.39996,rr=R*(.17+.07*((j*7)%3)/2);ctx.beginPath();ctx.arc(Math.cos(a)*rr,Math.sin(a)*rr,R*.03+.4,0,TAU);ctx.fill();}
}
const RACEME={lupine:{c:['#3f45a8','#6870d4','#b2baf0'],shape:'pea',n:16},foxglove:{c:['#b0427a','#d46fa1','#efb6d0'],shape:'bell',n:9},goldenrod:{c:['#c99a12','#e3bd32','#f2db7c'],shape:'plume',n:11}};
function drawRaceme(ctx,x,y,v,H,t,seed){const V=RACEME[v],r=rng(seed);const sway=RM?0:Math.sin(t*1.3+x*.05)*H*.06;
 const P0=[x,y],P1=[x+(v==='goldenrod'?H*.08:0),y-H*.55],P2=[x+sway+(v==='goldenrod'?H*.18:0),y-H];
 const q=u=>{const a=(1-u)*(1-u),b=2*(1-u)*u,c=u*u;return[a*P0[0]+b*P1[0]+c*P2[0],a*P0[1]+b*P1[1]+c*P2[1]];};
 ctx.strokeStyle='#4b7432';ctx.lineWidth=Math.max(1.2,H*.02);ctx.lineCap='round';ctx.beginPath();ctx.moveTo(P0[0],P0[1]);ctx.quadraticCurveTo(P1[0],P1[1],P2[0],P2[1]);ctx.stroke();
 if(v==='lupine'){const b=q(.12);ctx.fillStyle='#5b8a3a';for(let i=0;i<7;i++){const a=-Math.PI+i/6*Math.PI;ctx.save();ctx.translate(b[0],b[1]);ctx.rotate(a);ctx.beginPath();ctx.ellipse(H*.08,0,H*.08,H*.018,0,0,TAU);ctx.fill();ctx.restore();}}
 else{ctx.fillStyle='#5b8a3a';for(let i=0;i<3;i++){const b=q(.1+i*.12),sd=i%2?1:-1;ctx.save();ctx.translate(b[0],b[1]);ctx.rotate(sd*.9-Math.PI/2);ctx.beginPath();ctx.ellipse(H*.09,0,H*.1,H*.025,0,0,TAU);ctx.fill();ctx.restore();}}
 for(let i=0;i<V.n;i++){const f=i/V.n,u=.42+.58*f;const p=q(u);const sz=lerp(H*.065,H*.022,f);const col=V.c[Math.min(2,Math.floor(f*3))];const sd=i%2?1:-1;
  if(V.shape==='pea'){ctx.fillStyle=col;ctx.beginPath();ctx.ellipse(p[0]+sd*sz*.55,p[1],sz*.75,sz*.6,sd*.4,0,TAU);ctx.fill();ctx.fillStyle=V.c[2];ctx.beginPath();ctx.ellipse(p[0]+sd*sz*.9,p[1]+sz*.15,sz*.35,sz*.25,0,0,TAU);ctx.fill();}
  else if(V.shape==='bell'){if(i%3===2)continue;ctx.save();ctx.translate(p[0]+sz*.4,p[1]);ctx.rotate(.5+(r()-.5)*.2);ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(0,-sz*.3);ctx.quadraticCurveTo(sz*1.6,-sz*.4,sz*2,sz*.1);ctx.lineTo(sz*2,sz*.9);ctx.quadraticCurveTo(sz*1.6,sz*1.1,0,sz*.45);ctx.closePath();ctx.fill();ctx.fillStyle='rgba(80,10,40,.55)';for(let k=0;k<3;k++){ctx.beginPath();ctx.arc(sz*(1.2+k*.25),sz*(.3+k*.12),sz*.08,0,TAU);ctx.fill();}ctx.restore();}
  else{ctx.strokeStyle='#5d7a2c';ctx.lineWidth=Math.max(.8,sz*.18);const len=sz*4*(1-f*.5);ctx.beginPath();ctx.moveTo(p[0],p[1]);ctx.quadraticCurveTo(p[0]+len*.6,p[1]-len*.2,p[0]+len,p[1]+len*.35);ctx.stroke();ctx.fillStyle=col;for(let k=1;k<=6;k++){const tt=k/6,bx=lerp(lerp(p[0],p[0]+len*.6,tt),lerp(p[0]+len*.6,p[0]+len,tt),tt),by=lerp(lerp(p[1],p[1]-len*.2,tt),lerp(p[1]-len*.2,p[1]+len*.35,tt),tt);ctx.beginPath();ctx.arc(bx,by-sz*.2,sz*.32,0,TAU);ctx.fill();}}
 }
}
function stem(ctx,x,y,h,sway,w){const tx=x+sway,ty=y-h;ctx.strokeStyle='#4b7432';ctx.lineWidth=w||2;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x,y-h*.6,tx,ty);ctx.stroke();ctx.fillStyle='#5b8a3a';ctx.save();ctx.translate(x+sway*.25,y-h*.35);ctx.rotate(-.6);ctx.beginPath();ctx.ellipse(h*.09,0,h*.1,h*.03,0,0,TAU);ctx.fill();ctx.restore();return[tx,ty];}
const spriteCache=new Map();
function sprite(key,R,draw){let c=spriteCache.get(key);if(c)return c;const S=Math.ceil(R*2.8*2);c=document.createElement('canvas');c.width=c.height=S;const g=c.getContext('2d');g.translate(S/2,S/2);g.scale(2,2);draw(g);spriteCache.set(key,c);return c;}
function drawSprite(ctx,c,R,x,y,rot){ctx.save();ctx.translate(x,y);if(rot)ctx.rotate(rot);ctx.drawImage(c,-R*1.4,-R*1.4,R*2.8,R*2.8);ctx.restore();}
function drawBloomSprite(ctx,v,x,y,R,rot){drawSprite(ctx,sprite('b'+v,10,g=>drawPolar(g,v,10,0)),R,x,y,rot);}
function drawPhylloSprite(ctx,v,seed,x,y,R,rot){drawSprite(ctx,sprite('p'+v+(seed%3),14,g=>drawPhyllo(g,v,14,seed%3+1)),R,x,y,rot);}


/* ---- nuts and cones ---- */
const NUTS={
 whiteacorn:{art:{t:'acorn',nut:'#a8743c',cap:'#8a7a55',capD:.3,w:4.2,h:8.6,warty:1}},
 redacorn:{art:{t:'acorn',nut:'#8e5a2e',cap:'#6f5a3e',capD:.2,w:5,h:7.2,flat:1}},
 hickorynut:{art:{t:'hickory'}},
 beechnut:{art:{t:'beech',col:'#8a6a44'}},
 whitesprucecone:{art:{t:'cone',len:13,wid:4.2,col:'#a17a4e',hi:'#c49a68'}},
 blacksprucecone:{art:{t:'cone',len:7.5,wid:4.2,col:'#6e4a46',hi:'#8e6660',egg:1}},
 balsamfircone:{art:{t:'cone',len:10,wid:4.4,col:'#5a3f62',hi:'#7d5f86',upright:1,barrel:1}},
 jackpinecone:{art:{t:'cone',len:8.5,wid:4.2,col:'#8a6a44',hi:'#a8885c',curve:.5}},
 ponderosacone:{art:{t:'cone',len:12,wid:7.4,col:'#8a5232',hi:'#b07450',egg:1,open:1,prickle:1}},
 gambelacorn:{art:{t:'acorn',nut:'#a07040',cap:'#7a6a4a',capD:.45,w:4.4,h:7.4,warty:1}},
 douglascone:{art:{t:'cone',len:10.5,wid:4.6,col:'#9a6e44',hi:'#b88c5c',bract:'#c9b48a'}},
 pinyonnut:{art:{t:'cone',len:6.5,wid:6.2,col:'#8a5e3a',hi:'#a87a52',open:1,nuts:'#6a4428',egg:1}},
 scotscone:{art:{t:'cone',len:7.6,wid:4.4,col:'#8a7a66',hi:'#a8998a',egg:1,bosses:1}},
 hazelnut:{art:{t:'hazel'}},
 eubeechnut:{art:{t:'beech',col:'#7a5a3a'}},
 pedacorn:{art:{t:'acorn',nut:'#9a6a36',cap:'#7a6a4a',capD:.28,w:4.2,h:8.2,stalk:7,warty:1}},
 hemlockcone:{art:{t:'cone',len:5.5,wid:3.4,col:'#9a7450',hi:'#b8926a',egg:1}},
 sitkacone:{art:{t:'cone',len:10,wid:4.2,col:'#c09060',hi:'#dcb07c'}},
 beakednut:{art:{t:'hazel',beak:1}},
 bunanut:{art:{t:'beech',col:'#8b5a2b'}},
 mizunaraacorn:{art:{t:'acorn',nut:'#9c6b33',cap:'#7e6a50',capD:.36,w:5,h:9.4,warty:1}},
 jwalnutnut:{art:{t:'walnut',col:'#7b5a3c',husk:'#7fa046'}},
 tochinut:{art:{t:'conker',col:'#5c3317',hilum:'#b8a57e',husk:'#8a7350',inner:'#e2d6b8'}},
 pinhao:{art:{t:'pinhao',col:'#8b3a2b',tip:'#e8c9b0',cone:'#86683e',hi:'#b8955e',R:8}},
 palmnut:{art:{t:'drupes',col:'#e6a23c',hi:'#f8d68a',stalk:'#a08a50',n:5,r:2.3,egg:1}},
 podoseed:{art:{t:'podocarp',col:'#5e1a46',seed:'#6f8a4a',bloom:'#b4c4a8'}},
 cedarpod:{art:{t:'capsule',col:'#4e3426',dots:'#c8b49a',wing:'#c9a57a'}}
};

/* ---- wildflowers ---- */
const FLW={
 bloodroot:{k:'polar',v:{k:8,p:.75,notch:0,c1:'#f2f0e8',c2:'#ffffff',center:'#efbe2c',layers:1}},
 trillium:{k:'polar',v:{k:3,p:.55,notch:0,c1:'#efece4',c2:'#ffffff',center:'#e8d36a',layers:1},R:9},
 vabluebells:{k:'bells',c:'#6f8fe0',bud:'#e08ab0',n:5,cluster:1},
 wildcolumbine:{k:'columbine',c1:'#d8302c',c2:'#f4d040',nod:1},
 mayapple:{k:'mayapple'},
 springbeauty:{k:'polar',v:{k:5,p:.6,notch:0,c1:'#f5dbe6',c2:'#ffffff',center:'#f0c0d0',layers:1,stripe:'#d86a9a'},R:5},
 wildgeranium:{k:'polar',v:{k:5,p:.7,notch:0,c1:'#c79bd6',c2:'#ecdcf2',center:'#f4ecf6',layers:1,stripe:'#a77ab8'},R:7},
 blackeyedsusan:{k:'phyllo',v:'susan'},
 neaster:{k:'phyllo',v:'aster'},
 goldenrod:{k:'raceme',v:'goldenrod'},
 coneflower:{k:'droop',ray:'#c45a9a',ray2:'#a8407e',cone:'#a8541e',coneH:.5},
 fireweed:{k:'raceme',v:'fireweed'},
 bunchberry:{k:'polar',v:{k:4,p:.45,notch:.2,c1:'#eee9dc',c2:'#ffffff',center:'#7a8a3a',layers:1},R:7,low:1},
 twinflower:{k:'bells',c:'#f0a8c4',n:2,twin:1},
 pricklyrose:{k:'polar',v:{k:5,p:.5,notch:.08,c1:'#e5739a',c2:'#f8c4d6',center:'#f0c64a',layers:1},R:9},
 ladyslipper:{k:'slipper'},
 pearly:{k:'cluster',c:'#f4f2ea',eye:'#e6c64a'},
 marshmarigold:{k:'polar',v:{k:6,p:.45,notch:0,c1:'#f2c018',c2:'#ffe46a',center:'#e0a000',layers:1},R:7,low:1},
 labradortea:{k:'cluster',c:'#fbfaf4',eye:'#f2ecd0',dome:1},
 arcticlupine:{k:'raceme',v:'lupine'},
 woodlily:{k:'polar',v:{k:6,p:.55,notch:0,c1:'#e2562a',c2:'#f49a3a',center:'#f2c040',layers:1,spots:'#4a1e10'},R:9},
 harebell:{k:'bells',c:'#7d84d8',n:2},
 scarletgilia:{k:'raceme',v:'gilia'},
 paintbrush:{k:'raceme',v:'paintbrush'},
 silverylupine:{k:'raceme',v:'silverlupine'},
 blueflax:{k:'polar',v:{k:5,p:.6,notch:0,c1:'#7fa8e0',c2:'#c4d8f4',center:'#f0e08a',layers:1,stripe:'#5a80c8'},R:7},
 rmiris:{k:'iris'},
 bluecolumbine:{k:'columbine',c1:'#7d9ae0',c2:'#fbfaf4'},
 goldeneye:{k:'phyllo',v:'goldeneye'},
 globemallow:{k:'polar',v:{k:5,p:.5,notch:.05,c1:'#e2683a',c2:'#f3a36a',center:'#f0c66a',layers:1},R:6},
 mexicanhat:{k:'droop',ray:'#c8402a',ray2:'#f2b62a',cone:'#5a3a22',coneH:1.4},
 blanketflower:{k:'phyllo',v:'blanket'},
 penstemon:{k:'raceme',v:'penstemon'},
 bluebell:{k:'bells',c:'#5a5ad0',n:6,oneSide:1},
 woodanemone:{k:'polar',v:{k:6,p:.55,notch:0,c1:'#f6eef0',c2:'#ffffff',center:'#e8d36a',layers:1},R:6},
 primrose:{k:'polar',v:{k:5,p:.6,notch:.28,c1:'#f2e49a',c2:'#fbf3c8',center:'#e0a83a',layers:1},R:7,low:1},
 celandine:{k:'polar',v:{k:8,p:.9,notch:0,c1:'#f6cc20',c2:'#ffe873',center:'#e0a800',layers:1},R:6,low:1},
 foxglove:{k:'raceme',v:'foxglove'},
 woodsorrel:{k:'polar',v:{k:5,p:.6,notch:.1,c1:'#f4eef6',c2:'#ffffff',center:'#f2e6a0',layers:1,stripe:'#b58ac8'},R:5,low:1},
 heather:{k:'raceme',v:'heather'},
 redcampion:{k:'polar',v:{k:5,p:.55,notch:.45,c1:'#d8487a',c2:'#ef8ab0',center:'#f2c6d6',layers:1},R:7},
 wintergreen:{k:'polar',v:{k:5,p:.55,notch:0,c1:'#f4f2ec',c2:'#ffffff',center:'#b8c86a',layers:1},R:6,nod:1,low:1},
 westerntrillium:{k:'polar',v:{k:3,p:.55,notch:0,c1:'#f3efe6',c2:'#ffffff',center:'#e8c84a',layers:1},R:9},
 bleedingheart:{k:'hearts',c:'#e27aa6',tip:'#f8dfea',n:5},
 dwarforegongrape:{k:'cluster',c:'#f2cf2a',eye:'#d8a000',dome:1},
 westerncolumbine:{k:'columbine',c1:'#e2442a',c2:'#f6dc4a',nod:1},
 tigerlily:{k:'polar',v:{k:6,p:.5,notch:0,c1:'#f07a22',c2:'#f9a84a',center:'#c8501a',layers:1,spots:'#5a1e0c'},R:9,nod:1},
 fawnlily:{k:'polar',v:{k:6,p:.5,notch:0,c1:'#f6f2e6',c2:'#fff6d0',center:'#f0c840',layers:1},R:8,nod:1},
 salmonberry:{k:'polar',v:{k:5,p:.55,notch:.05,c1:'#cf3a78',c2:'#ec7aa8',center:'#f2d06a',layers:1},R:8},
 redcurrant:{k:'raceme',v:'currant'},
 skunkcabbage:{k:'spathe'},
 vanillaleaf:{k:'raceme',v:'vanilla',leaf3:1},
 katakuri:{k:'polar',v:{k:6,p:.45,notch:0,c1:'#a9579e',c2:'#d89ad0',center:'#5e2a55',layers:1},R:8,nod:1},
 nirinso:{k:'polar',v:{k:5,p:.7,notch:0,c1:'#f6eef2',c2:'#ffffff',center:'#e3d85a',layers:1},R:5},
 shiraneaoi:{k:'polar',v:{k:4,p:.9,notch:.04,c1:'#c9a9e2',c2:'#ecdff4',center:'#e5c84a',layers:1},R:10},
 mizubasho:{k:'spathe',c:'#fafaf4',c2:'#e4e6d6',sp:'#c8c24a'},
 enreiso:{k:'polar',v:{k:3,p:.6,notch:0,c1:'#6b2a35',c2:'#8e4452',center:'#d8c870',layers:1},R:5},
 cobralily:{k:'spathe',c:'#5b3a4e',c2:'#e5e2c8',sp:'#3e2a36'},
 goldenlily:{k:'polar',v:{k:6,p:.55,notch:0,c1:'#fbfaf4',c2:'#ffffff',center:'#e8b830',layers:1,stripe:'#e8b830',spots:'#c24e2a'},R:11},
 sankayou:{k:'cluster',c:'#ffffff',eye:'#e8e0a0'},
 yamaajisai:{k:'cluster',c:'#7fa6e0',eye:'#4f6fc4'},
 toadlily:{k:'polar',v:{k:6,p:.5,notch:0,c1:'#f0c93a',c2:'#f8e07a',center:'#6b3a5a',layers:1,spots:'#6b3a5a'},R:6},
 royalfuchsia:{k:'fuchsia',c1:'#d7263d',c2:'#6b2d8f',st:'#a3204f',n:3},
 anisesage:{k:'raceme',v:'sage'},
 flowerofsouls:{k:'cluster',c:'#f6c324',eye:'#e09a12'},
 palacelily:{k:'polar',v:{k:6,p:.55,notch:0,c1:'#c8102e',c2:'#9cc84a',center:'#8cc63f',layers:1},R:10},
 pinksorrel:{k:'polar',v:{k:5,p:.75,notch:0,c1:'#e06aae',c2:'#f6c2de',center:'#cfe07a',layers:1},R:5,low:1},
 brazilplume:{k:'raceme',v:'justicia'},
 wildbanana:{k:'bromeliad',c:'#4f7d3a',c2:'#d62828',wool:'#f1ede4',fl:'#7a2b6e'},
 woollybegonia:{k:'polar',v:{k:4,p:.9,notch:0,c1:'#e58fa6',c2:'#fbeef2',center:'#f2d04b',layers:1},R:5,low:1},
 smallspiderwort:{k:'polar',v:{k:3,p:.7,notch:0,c1:'#ecece8',c2:'#ffffff',center:'#f5d33a',layers:1},R:5,low:1},
 mossverbena:{k:'cluster',c:'#9b5fc0',eye:'#f3eaf7',dome:1},
 tropmilkweed:{k:'cluster',c:'#e2402b',eye:'#f7a41d',dome:1},
};

Object.assign(PHYLLO,{goldeneye:{p:'#f2c21a',p2:'#d8a010',d:['#8a5a14','#b07a1a'],n:13,len:.95,wid:.3},blanket:{p:'#f2b62a',p2:'#c8402a',d:['#7a2a14','#a8401e'],n:13,len:1,wid:.36,tip:1}});
Object.assign(RACEME,{fireweed:{c:['#c23a8a','#d85aa4','#f0a0cc'],shape:'spike4',n:14},gilia:{c:['#d8282c','#e8503a','#f39a6a'],shape:'trumpet',n:10},paintbrush:{c:['#d8402a','#e86a3a','#7a8a3a'],shape:'bract',n:12},
 silverlupine:{c:['#6a5ab8','#8a7ad0','#c8c0ec'],shape:'pea',n:14},vanilla:{c:['#e6e2cc','#f6f4e8','#d8d4bc'],shape:'spike4',n:16},currant:{c:['#c8305e','#de5a80','#f2a0bc'],shape:'trumpet',n:12},penstemon:{c:['#c8202a','#e0403a','#f08a6a'],shape:'trumpet',n:8,slim:1},heather:{c:['#b25aa8','#c97ac0','#e0b0d8'],shape:'spike4',n:16,small:1},
 sage:{c:['#2a36a8','#3442c4','#5a72e0'],shape:'pea',n:12},justicia:{c:['#d9437a','#f06a9f','#f8a8c8'],shape:'spike4',n:18}});

/* ---- nut and cone artwork: attach point at (0,0), hanging toward +y ---- */
const shadeHex=(h,k)=>{const n=parseInt(h.slice(1),16),f=k<0?0:255,a=Math.abs(k),m=v=>Math.round(v+(f-v)*a);return'rgb('+m(n>>16)+','+m(n>>8&255)+','+m(n&255)+')';};
// onTree: the nut is drawn where it grows (only the pinhão differs: a whole pinha cone on the branch, loose seeds elsewhere)
function drawNutArt(g,id,onTree){const a=NUTS[id].art;g.lineCap='round';g.lineJoin='round';
 if(a.t==='pinhao'){if(onTree){const R=a.R||8;g.fillStyle='#5a4a32';g.fillRect(-.8,-1.6,1.6,2);g.fillStyle=a.cone;g.beginPath();g.arc(0,-R,R,0,TAU);g.fill();
   g.fillStyle=a.cone;for(let k=0;k<22;k++){const an=k/22*TAU;g.beginPath();g.moveTo(Math.cos(an-.13)*R*.92,-R+Math.sin(an-.13)*R*.92);g.lineTo(Math.cos(an)*R*1.22,-R+Math.sin(an)*R*1.22);g.lineTo(Math.cos(an+.13)*R*.92,-R+Math.sin(an+.13)*R*.92);g.fill();}
   g.fillStyle=a.hi;const N=46;for(let k=3;k<N;k++){const an=k*2.39996,rr=R*.9*Math.sqrt(k/N),px=Math.cos(an)*rr,py=-R+Math.sin(an)*rr,o=an;g.beginPath();g.moveTo(px-Math.sin(o)*.55,py+Math.cos(o)*.55);g.lineTo(px+Math.cos(o)*1.4,py+Math.sin(o)*1.4);g.lineTo(px+Math.sin(o)*.55,py-Math.cos(o)*.55);g.fill();}
   g.fillStyle='rgba(255,255,255,.14)';g.beginPath();g.arc(-R*.35,-R*1.35,R*.35,0,TAU);g.fill();return;}
  g.strokeStyle='#5a4a32';g.lineWidth=.8;g.beginPath();g.moveTo(0,0);g.lineTo(0,1.2);g.stroke();
  for(const an of[.62,-.62,0]){g.save();g.translate(0,1);g.rotate(an);const sd=()=>{g.beginPath();g.moveTo(0,.6);g.quadraticCurveTo(1.9,2,1.7,6.6);g.quadraticCurveTo(1.4,9.8,0,10.4);g.quadraticCurveTo(-1.4,9.8,-1.7,6.6);g.quadraticCurveTo(-1.9,2,0,.6);};
   g.fillStyle=a.col;sd();g.fill();g.save();sd();g.clip();g.fillStyle=a.tip;g.beginPath();g.ellipse(0,10.2,2,1.8,0,0,TAU);g.fill();g.restore();
   g.strokeStyle='rgba(50,20,10,.55)';g.lineWidth=.35;sd();g.stroke();g.fillStyle='rgba(255,235,210,.3)';g.beginPath();g.ellipse(-.6,5,.4,2.4,.05,0,TAU);g.fill();g.restore();}return;}
 if(a.t==='podocarp'){g.strokeStyle='#5a6a3a';g.lineWidth=.7;g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(.6,2,0,3.6);g.stroke();
  g.fillStyle=a.col;g.beginPath();g.ellipse(0,6.6,2.7,3.4,0,0,TAU);g.fill();g.fillStyle='rgba(255,200,230,.25)';g.beginPath();g.ellipse(-.9,5.6,.7,1.4,.2,0,TAU);g.fill();
  g.fillStyle=a.seed;g.beginPath();g.arc(0,11.4,2.2,0,TAU);g.fill();g.fillStyle=a.bloom;g.globalAlpha=.55;g.beginPath();g.arc(-.6,10.8,1.1,0,TAU);g.fill();g.globalAlpha=1;return;}
 if(a.t==='capsule'){g.strokeStyle='#5a4a32';g.lineWidth=.9;g.beginPath();g.moveTo(0,0);g.lineTo(0,2.6);g.stroke();
  g.fillStyle=a.wing;for(const s of[-1,1]){g.save();g.translate(s*1.2,7);g.rotate(s*.25);g.beginPath();g.ellipse(0,3.6,1.3,3.6,0,0,TAU);g.fill();g.fillStyle='#8a5a3a';g.beginPath();g.ellipse(0,.6,1,1.2,0,0,TAU);g.fill();g.fillStyle=a.wing;g.restore();}
  g.fillStyle='#d8c8a8';g.fillRect(-.6,2.6,1.2,7.4);
  const valve=(an,dk)=>{g.save();g.translate(0,3);g.rotate(an);g.fillStyle=dk?shadeHex(a.col,-.25):a.col;g.beginPath();g.moveTo(-1.6,0);g.quadraticCurveTo(-2.6,5,-.2,9.6);g.quadraticCurveTo(.8,9.8,1.4,8.6);g.quadraticCurveTo(2.4,4.6,1.6,0);g.closePath();g.fill();
   g.fillStyle=a.dots;for(let k=0;k<3;k++){g.beginPath();g.arc((k%2?.5:-.5),2.4+k*2.2,.32,0,TAU);g.fill();}g.restore();};
  valve(-.95,1);valve(.95,1);g.fillStyle='#d8c8a8';g.fillRect(-.7,2.6,1.4,8);valve(-.4,0);valve(.4,0);
  g.fillStyle='rgba(255,255,255,.12)';g.beginPath();g.ellipse(-.4,6,.5,2,0,0,TAU);g.fill();return;}
 if(a.t==='drupes'){const n=a.n||5,r0=a.r||2.2;g.strokeStyle=a.stalk||'#a08a50';g.lineWidth=1;g.beginPath();g.moveTo(0,0);g.lineTo(0,3);g.stroke();
  const fr=[];for(let i=0;i<n;i++){const u=n>1?i/(n-1)-.5:0,ex=u*12,ey=12+(1-Math.abs(u)*2)*3;g.lineWidth=.5;g.beginPath();g.moveTo(0,3);g.quadraticCurveTo(ex*.2,7,ex,ey);g.stroke();
   for(let k=0;k<3;k++){const t=.45+k*.27;fr.push([lerp(0,ex,t*t)+(k%2?.6:-.6),lerp(3,ey,t)+r0*.4]);}}
  for(const[fx,fy]of fr){g.fillStyle=a.col;g.beginPath();g.ellipse(fx,fy,r0*.92,r0*(a.egg?1.15:1),0,0,TAU);g.fill();g.fillStyle=a.hi;g.beginPath();g.arc(fx-r0*.3,fy-r0*.35,r0*.32,0,TAU);g.fill();}return;}
 if(a.t==='acorn'){const st=a.stalk||1.6;g.strokeStyle='#6a5a3a';g.lineWidth=.9;g.beginPath();g.moveTo(0,0);g.lineTo(0,st);g.stroke();
  const capH=a.h*a.capD,cy=st+capH;g.fillStyle=a.nut;g.beginPath();g.ellipse(0,cy+(a.h-capH)*.45,a.w*(a.flat?1.05:.92),(a.h-capH)*.62+capH*.4,0,0,TAU);g.fill();
  g.fillStyle='rgba(255,255,255,.18)';g.beginPath();g.ellipse(-a.w*.35,cy+a.h*.3,a.w*.22,a.h*.22,-.2,0,TAU);g.fill();g.fillStyle='#4a3420';g.beginPath();g.arc(0,cy+a.h*.95-capH*.2,.6,0,TAU);g.fill();
  g.fillStyle=a.cap;g.beginPath();g.ellipse(0,cy,a.w*(a.flat?1.25:1.08),capH*(a.flat?.8:1),0,Math.PI,TAU);g.lineTo(a.w*1.08,cy+capH*.25);g.quadraticCurveTo(0,cy+capH*.55,-a.w*1.08,cy+capH*.25);g.closePath();g.fill();
  if(a.warty){g.fillStyle='rgba(0,0,0,.18)';for(let i=0;i<9;i++){const x=-a.w*.8+(i%5)*a.w*.4,y=cy-capH*.5+Math.floor(i/5)*capH*.45;g.beginPath();g.arc(x,y,.45,0,TAU);g.fill();}}
  else{g.strokeStyle='rgba(0,0,0,.22)';g.lineWidth=.4;for(let i=0;i<3;i++){g.beginPath();g.ellipse(0,cy+i*.6-.6,a.w*(1.1-i*.15),capH*.4,0,Math.PI,TAU);g.stroke();}}return;}
 if(a.t==='hickory'){g.strokeStyle='#5a4a32';g.lineWidth=.9;g.beginPath();g.moveTo(0,0);g.lineTo(0,1.5);g.stroke();
  g.fillStyle='#e8dcc0';g.beginPath();g.ellipse(0,7,4,4.6,0,0,TAU);g.fill();
  for(const[s,c]of[[-1,'#4a5a2a'],[1,'#56682f']]){g.fillStyle=c;g.beginPath();g.moveTo(0,1.6);g.quadraticCurveTo(s*7,3,s*5.6,9.5);g.quadraticCurveTo(s*3,12.5,s*1.2,11);g.quadraticCurveTo(s*3.6,6,0,1.6);g.fill();}
  g.strokeStyle='rgba(0,0,0,.25)';g.lineWidth=.4;g.beginPath();g.moveTo(-1.5,4);g.lineTo(-1.2,9.5);g.moveTo(1.4,4);g.lineTo(1.1,9.5);g.stroke();return;}
 if(a.t==='beech'){g.strokeStyle='#5a4a32';g.lineWidth=.9;g.beginPath();g.moveTo(0,0);g.lineTo(0,1.5);g.stroke();
  for(const s of[-1,1]){g.fillStyle='#b88a54';g.beginPath();g.moveTo(s*.6,4);g.lineTo(s*3,10.5);g.lineTo(s*.2,11);g.closePath();g.fill();}
  for(let v=0;v<4;v++){const an=-.8+v*.53,s=v<2?-1:1;g.save();g.translate(0,2.6);g.rotate(an*.9);g.fillStyle=a.col;g.beginPath();g.ellipse(0,4.6,1.9,4.4,0,0,TAU);g.fill();g.strokeStyle='#5a4228';g.lineWidth=.45;for(let k=0;k<6;k++){g.beginPath();g.moveTo(-1.4+(k%2)*2.8,1.6+k*1.2);g.lineTo(-2.4+(k%2)*4.8,1.2+k*1.2);g.stroke();}g.restore();}return;}
 if(a.t==='hazel'&&a.beak){g.strokeStyle='#5a4a32';g.lineWidth=.9;g.beginPath();g.moveTo(0,0);g.lineTo(0,1.6);g.stroke();
  g.fillStyle='#8aa64a';g.beginPath();g.moveTo(-3.4,4.5);g.quadraticCurveTo(-3.8,1.4,0,1.4);g.quadraticCurveTo(3.8,1.4,3.4,4.5);g.quadraticCurveTo(3.2,8.5,1.2,10.5);g.lineTo(1,16.5);g.lineTo(1.9,17.6);g.lineTo(-1.9,17.6);g.lineTo(-1,16.5);g.lineTo(-1.2,10.5);g.quadraticCurveTo(-3.2,8.5,-3.4,4.5);g.fill();
  g.fillStyle='rgba(168,106,52,.55)';g.beginPath();g.ellipse(0,5.2,2.3,2.8,0,0,TAU);g.fill();g.strokeStyle='rgba(60,80,30,.5)';g.lineWidth=.35;for(let k=0;k<9;k++){const y=6+k*1.2,x=k%2?1.3:-1.3;g.beginPath();g.moveTo(x*.6,y);g.lineTo(x*1.4,y-.6);g.stroke();}return;}
 if(a.t==='hazel'){g.strokeStyle='#5a4a32';g.lineWidth=.9;g.beginPath();g.moveTo(0,0);g.lineTo(0,1.6);g.stroke();
  g.fillStyle='#a86a34';g.beginPath();g.ellipse(0,7.4,3.6,4,0,0,TAU);g.fill();g.fillStyle='#d8b88a';g.beginPath();g.ellipse(0,4.3,2.6,1.3,0,0,TAU);g.fill();
  g.fillStyle='#7a9a3a';g.beginPath();g.moveTo(-4,2.2);for(let i=0;i<=8;i++){const x=-4+i,y=2.2+(i%2?4.2:6.2)+(i===0||i===8?-2:0);g.lineTo(x,y);}g.lineTo(4,2.2);g.quadraticCurveTo(0,.8,-4,2.2);g.fill();
  g.fillStyle='rgba(255,255,255,.2)';g.beginPath();g.ellipse(-1.3,8.4,.9,1.5,-.3,0,TAU);g.fill();return;}
 if(a.t==='walnut'){g.strokeStyle='#5a4a32';g.lineWidth=.9;g.beginPath();g.moveTo(0,0);g.lineTo(0,1.6);g.stroke();
  for(const s of[-1,1]){g.fillStyle=a.husk;g.beginPath();g.moveTo(0,1.6);g.quadraticCurveTo(s*5.6,1.8,s*5.4,6.4);g.quadraticCurveTo(s*4.6,9,s*2.6,8.2);g.quadraticCurveTo(s*2.2,4,0,1.6);g.fill();
   g.fillStyle='rgba(255,255,255,.35)';for(let k=0;k<3;k++){g.beginPath();g.arc(s*(3.4+k*.5),3.4+k*1.4,.35,0,TAU);g.fill();}}
  g.fillStyle=a.col;g.beginPath();g.moveTo(0,2.6);g.quadraticCurveTo(3.8,2.8,3.6,7.2);g.quadraticCurveTo(3.2,10.8,0,12.8);g.quadraticCurveTo(-3.2,10.8,-3.6,7.2);g.quadraticCurveTo(-3.8,2.8,0,2.6);g.fill();
  g.strokeStyle='rgba(40,25,12,.55)';g.lineWidth=.45;g.beginPath();g.moveTo(0,2.8);g.lineTo(0,12.6);g.stroke();
  g.lineWidth=.35;for(const s of[-1,1])for(let k=0;k<2;k++){g.beginPath();g.moveTo(s*(1.1+k*1.1),3.4+k*.4);g.quadraticCurveTo(s*(1.9+k*1.1),7,s*(.9+k*.9),11.2-k*.8);g.stroke();}
  g.fillStyle='rgba(255,255,255,.18)';g.beginPath();g.ellipse(-1.6,6,.7,1.8,.15,0,TAU);g.fill();return;}
 if(a.t==='conker'){g.strokeStyle='#5a4a32';g.lineWidth=1;g.beginPath();g.moveTo(0,0);g.lineTo(0,1.8);g.stroke();
  for(const an of[-1.1,0,1.1]){g.save();g.translate(0,3.4);g.rotate(an);g.fillStyle=a.husk;g.beginPath();g.moveTo(-2.4,-1.4);g.quadraticCurveTo(-3.6,4,0,6.6);g.quadraticCurveTo(3.6,4,2.4,-1.4);g.quadraticCurveTo(0,-2.4,-2.4,-1.4);g.fill();
   g.fillStyle=a.inner;g.beginPath();g.moveTo(-1.6,-.6);g.quadraticCurveTo(-2.4,3.6,0,5.4);g.quadraticCurveTo(2.4,3.6,1.6,-.6);g.closePath();g.fill();g.restore();}
  g.fillStyle=a.col;g.beginPath();g.ellipse(0,7.4,4.4,4.1,0,0,TAU);g.fill();
  g.save();g.beginPath();g.ellipse(0,7.4,4.4,4.1,0,0,TAU);g.clip();g.fillStyle=a.hilum;g.beginPath();g.ellipse(0,11.4,4.6,3.3,0,0,TAU);g.fill();g.restore();
  g.fillStyle='rgba(255,255,255,.3)';g.beginPath();g.ellipse(-1.6,5.6,1.1,.7,-.5,0,TAU);g.fill();return;}
 // cones
 const L=a.len,Wd=a.wid;g.save();if(a.upright){g.translate(0,0);g.scale(1,-1);}
 g.strokeStyle='#5a4a32';g.lineWidth=.9;g.beginPath();g.moveTo(0,0);g.lineTo(0,1.2);g.stroke();
 const shape=(y)=>{const u=(y-1.2)/L;if(u<0||u>1)return 0;if(a.barrel)return Wd*.5*(.85+.15*Math.sin(u*Math.PI));if(a.egg)return Wd*.5*Math.sin(Math.PI*Math.pow(u,.8))*(1-.2*u);return Wd*.5*Math.sin(Math.PI*Math.min(1,u*1.15))*(1-.35*u);};
 g.save();if(a.curve)g.transform(1,0,a.curve*.35,1,0,0);
 g.fillStyle=a.col;g.beginPath();for(let y=1.2;y<=1.2+L;y+=.4)g.lineTo(shape(y)*(a.open?1.15:1),y);for(let y=1.2+L;y>=1.2;y-=.4)g.lineTo(-shape(y)*(a.open?1.15:1),y);g.closePath();g.fill();g.save();g.clip();
 // scale rows
 const rows=Math.round(L/(a.open?2.1:1.5));for(let r=0;r<rows;r++){const y=1.6+r*(L/rows),hw=shape(y+.6);const n=Math.max(2,Math.round(hw/1.3));for(let k=0;k<n;k++){const x=-hw+((k+(r%2)*.5)/n)*hw*2;
   g.fillStyle=a.hi;g.beginPath();g.ellipse(x+.3,y+.5,a.open?1.35:1.05,a.open?1:.7,0,0,Math.PI);g.fill();
   if(a.bosses){g.fillStyle='rgba(60,40,30,.45)';g.beginPath();g.arc(x+.3,y+.75,.32,0,TAU);g.fill();}
   if(a.prickle){g.strokeStyle='#4a2a16';g.lineWidth=.4;g.beginPath();g.moveTo(x+.3,y+1.1);g.lineTo(x+.5,y+1.8);g.stroke();}
   if(a.nuts&&r>rows*.3&&r<rows*.8&&k%2===0){g.fillStyle=a.nuts;g.beginPath();g.ellipse(x+.3,y+.2,.75,.55,0,0,TAU);g.fill();}
   if(a.bract){g.fillStyle=a.bract;g.beginPath();g.moveTo(x-.3,y+.8);g.lineTo(x-.5,y+2.4);g.lineTo(x+.1,y+1.5);g.lineTo(x+.4,y+2.6);g.lineTo(x+.7,y+1.5);g.lineTo(x+1.2,y+2.3);g.lineTo(x+1,y+.8);g.closePath();g.fill();}}}
 g.restore();g.restore();g.restore();}

/* ---- wildflower artwork: stem base at (x,y) ---- */
function leafPair(g,x,y,h,c){g.fillStyle=c||'#5b8a3a';for(const s of[-1,1]){g.save();g.translate(x,y-h*.18);g.rotate(s*1.05);g.beginPath();g.ellipse(0,-h*.12,h*.05,h*.13,0,0,TAU);g.fill();g.restore();}}
function bellShape(g,x,y,s,c,ang){g.save();g.translate(x,y);g.rotate(ang||0);g.fillStyle=c;g.beginPath();g.moveTo(-s*.45,0);g.quadraticCurveTo(-s*.55,s*.9,-s*.75,s*1.25);g.lineTo(-s*.35,s*1.1);g.lineTo(0,s*1.3);g.lineTo(s*.35,s*1.1);g.lineTo(s*.75,s*1.25);g.quadraticCurveTo(s*.55,s*.9,s*.45,0);g.quadraticCurveTo(0,-s*.25,-s*.45,0);g.fill();g.restore();}
function drawFlowerSp(g,id,x,y,h,t,seed){const F=FLW[id],a=F.art;const sw=RM?0:Math.sin(t*1.3+x*.03)*h*.04;
 if(a.k==='raceme'){if(a.leaf3){const ly=y-h*.45;g.strokeStyle='#4b7432';g.lineWidth=1;g.beginPath();g.moveTo(x-1,y);g.lineTo(x-4,ly);g.stroke();g.fillStyle='#5f9a3e';for(const an of[-1.05,0,1.05]){g.save();g.translate(x-4,ly);g.rotate(an-Math.PI/2);g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(h*.12,-h*.12,h*.26,-h*.06);g.lineTo(h*.27,h*.03);g.quadraticCurveTo(h*.14,h*.1,0,0);g.fill();g.restore();}}drawRaceme(g,x,y,a.v,h*1.25,t,seed);return;}
 const H=a.low?h*.55:h;
 if(a.k==='phyllo'){const R=6.5;const tp=stem(g,x,y,H,sw,1.6);if(ART_HI){g.save();g.translate(tp[0],tp[1]);g.scale(R/14,R/14);drawPhyllo(g,a.v,14,seed%3+1);g.restore();}else drawPhylloSprite(g,a.v,seed,tp[0],tp[1],R,sw*.03);return;}
 if(a.k==='polar'){const R=a.R||6;g.strokeStyle='#4b7432';g.lineWidth=1.4;g.lineCap='round';g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x,y-H*.6,x+sw,y-H);g.stroke();leafPair(g,x,y,H);
  g.save();g.translate(x+sw,y-H);if(a.nod){g.rotate(Math.PI*.85);g.scale(1,.55);}else if(id==='bunchberry'||id==='marshmarigold'||id==='celandine'||id==='primrose'||id==='woodsorrel'){g.scale(1,.8);}
  if(!POLAR[id])POLAR[id]=a.v;if(ART_HI)drawPolar(g,id,R,seed*.7);else drawBloomSprite(g,id,0,0,R,seed*.7);g.restore();return;}
 if(a.k==='droop'){const tp=[x+sw,y-H];g.strokeStyle='#4b7432';g.lineWidth=1.5;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x,y-H*.6,tp[0],tp[1]);g.stroke();leafPair(g,x,y,H);
  const n=11;for(let i=0;i<n;i++){const u=i/(n-1)-.5,ang=Math.PI/2+u*2.4;g.fillStyle=i%2?a.ray:a.ray2;g.save();g.translate(tp[0],tp[1]+1);g.rotate(ang-Math.PI/2);g.beginPath();g.ellipse(0,5,1.3,5,0,0,TAU);g.fill();g.restore();}
  g.fillStyle=a.cone;g.beginPath();g.ellipse(tp[0],tp[1]-a.coneH*2,3.4,3.2+a.coneH*2.4,0,0,TAU);g.fill();g.fillStyle='rgba(255,200,80,.35)';for(let k=0;k<8;k++){g.beginPath();g.arc(tp[0]-2+((k*7)%5),tp[1]-a.coneH*3-1+((k*3)%4)*1.2,.5,0,TAU);g.fill();}return;}
 if(a.k==='bells'){g.strokeStyle='#4b7432';g.lineWidth=1.2;g.lineCap='round';const top=[x+sw+(a.oneSide?H*.25:0),y-H];g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x,y-H*.7,top[0],top[1]);g.stroke();
  if(a.twin){g.beginPath();g.moveTo(top[0],top[1]);g.lineTo(top[0]-3,top[1]+3);g.moveTo(top[0],top[1]);g.lineTo(top[0]+3,top[1]+3);g.stroke();bellShape(g,top[0]-3,top[1]+3,3,a.c,.15);bellShape(g,top[0]+3,top[1]+3,3,a.c,-.15);return;}
  for(let i=0;i<a.n;i++){const u=i/Math.max(1,a.n-1);let bx,by,ang;if(a.oneSide){bx=lerp(x,top[0],.5+u*.5)+u*2;by=lerp(y-H*.5,top[1],u);ang=-.5-u*.3;}else if(a.cluster){bx=top[0]-4+i*2;by=top[1]+((i*5)%3)*1.6;ang=(i-2)*.25;}else{bx=top[0]+i*4-2;by=top[1]+i*2;ang=-.2+i*.3;g.beginPath();g.moveTo(top[0],top[1]);g.lineTo(bx,by);g.stroke();}
   bellShape(g,bx,by,a.cluster?2.8:4,(a.bud&&i%3===0)?a.bud:a.c,ang);}
  if(!a.oneSide&&!a.cluster)leafPair(g,x,y,H*.6,'#5b8a3a');return;}
 if(a.k==='columbine'){g.strokeStyle='#4b7432';g.lineWidth=1.2;const top=[x+sw,y-H];g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+3,y-H*.7,top[0],top[1]);g.stroke();leafPair(g,x,y,H*.7,'#6a8a4a');
  g.save();g.translate(top[0],top[1]);if(a.nod)g.rotate(Math.PI);
  g.fillStyle=a.c1;for(let i=0;i<5;i++){g.save();g.rotate(-1.2+i*.6);g.beginPath();g.ellipse(0,-4.2,1.1,3.4,0,0,TAU);g.fill();g.restore();}
  for(let i=0;i<5;i++){g.save();g.rotate(-1+i*.5);g.strokeStyle=a.c1;g.lineWidth=1.1;g.beginPath();g.moveTo(0,-1);g.quadraticCurveTo(0,-8,1.8,-9.5);g.stroke();g.restore();}
  g.fillStyle=a.c2;g.beginPath();g.ellipse(0,-.8,2.8,2.2,0,0,TAU);g.fill();g.fillStyle='#f2d24a';for(let i=0;i<5;i++){g.beginPath();g.moveTo(-1+i*.5,1);g.lineTo(-1.2+i*.6,3.6);g.lineWidth=.5;g.strokeStyle='#e8c030';g.stroke();}g.restore();return;}
 if(a.k==='mayapple'){g.strokeStyle='#5b8a3a';g.lineWidth=1.6;const top=[x+sw,y-H*.75];g.beginPath();g.moveTo(x,y);g.lineTo(top[0],top[1]);g.stroke();
  for(const s of[-1,1]){g.fillStyle=s<0?'#5f9a3a':'#6aa842';g.beginPath();g.ellipse(top[0]+s*5,top[1]-1.5,7,2.4,s*.12,Math.PI,TAU);g.fill();g.strokeStyle='#4b7a2e';g.lineWidth=.5;for(let k=-2;k<=2;k++){g.beginPath();g.moveTo(top[0]+s*5,top[1]-1.5);g.lineTo(top[0]+s*5+k*2.8,top[1]-.6);g.stroke();}}
  g.save();g.translate(top[0],top[1]+3.4);g.scale(1,.7);if(ART_HI)drawPolar(g,'bloodroot',3.4,.3);else drawBloomSprite(g,'bloodroot',0,0,3.4,.3);g.restore();return;}
 if(a.k==='slipper'){g.strokeStyle='#4b7432';g.lineWidth=1.4;const top=[x+sw,y-H];g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x,y-H*.6,top[0],top[1]);g.stroke();g.fillStyle='#6a9a3a';for(const s of[-1,1]){g.beginPath();g.ellipse(x+s*3,y-H*.35,2.2,6,s*.4,0,TAU);g.fill();}
  g.fillStyle='#fbfaf4';g.beginPath();g.ellipse(top[0],top[1]-3,2,4.2,0,0,TAU);g.fill();for(const s of[-1,1]){g.beginPath();g.ellipse(top[0]+s*3.4,top[1]+.5,1.4,3.6,s*1.1,0,TAU);g.fill();}
  const gr=g.createRadialGradient(top[0],top[1]+3.4,.5,top[0],top[1]+3.4,4.2);gr.addColorStop(0,'#fbe4ee');gr.addColorStop(1,'#de6a9a');g.fillStyle=gr;g.beginPath();g.ellipse(top[0],top[1]+3.6,3.4,3.8,0,0,TAU);g.fill();return;}
 if(a.k==='fuchsia'){const P0=[x,y],P1=[x+sw,y-H*1.15],P2=[x+H*.5+sw,y-H*.72];const q=u=>{const A=(1-u)*(1-u),B=2*(1-u)*u,C2=u*u;return[A*P0[0]+B*P1[0]+C2*P2[0],A*P0[1]+B*P1[1]+C2*P2[1]];};
  g.strokeStyle='#7a2a3a';g.lineWidth=1.3;g.lineCap='round';g.beginPath();g.moveTo(P0[0],P0[1]);g.quadraticCurveTo(P1[0],P1[1],P2[0],P2[1]);g.stroke();
  g.fillStyle='#3e6b2f';for(const u of[.3,.5,.68]){const p=q(u);for(const sd of[-1,1]){g.save();g.translate(p[0],p[1]);g.rotate(sd*.9-.3);g.beginPath();g.ellipse(0,-3.4,1.5,3.6,0,0,TAU);g.fill();g.restore();}}
  for(let i=0;i<a.n;i++){const[fx,fy]=q(.55+.45*i/Math.max(1,a.n-1));g.strokeStyle='#7a2a3a';g.lineWidth=.6;g.beginPath();g.moveTo(fx,fy);g.lineTo(fx,fy+3);g.stroke();
   g.fillStyle=a.c1;g.beginPath();g.ellipse(fx,fy+5,.9,2.2,0,0,TAU);g.fill();for(const sd of[-1,1]){g.beginPath();g.moveTo(fx,fy+6.6);g.lineTo(fx+sd*4.4,fy+5.4);g.lineTo(fx+sd*1.3,fy+8.4);g.fill();}
   g.fillStyle=a.c2;g.beginPath();g.ellipse(fx,fy+9.4,2,2.7,0,0,TAU);g.fill();g.strokeStyle=a.st;g.lineWidth=.4;for(const sd of[-.8,0,.8]){g.beginPath();g.moveTo(fx,fy+11);g.lineTo(fx+sd,fy+15.4);g.stroke();}g.fillStyle='#f2e6c8';g.beginPath();g.arc(fx,fy+15.6,.5,0,TAU);g.fill();}return;}
 if(a.k==='bromeliad'){const L=H*.75,leaf=(an,len,c,w)=>{g.save();g.translate(x,y);g.rotate(an);g.fillStyle=c;g.beginPath();g.moveTo(-w,0);g.quadraticCurveTo(-w*.6,-len*.6,len*.12,-len);g.quadraticCurveTo(w*.6,-len*.6,w,0);g.closePath();g.fill();g.restore();};
  for(let i=0;i<11;i++){const u=i/10-.5;leaf(u*2.6+(i%2?.05:-.05),L*(.75+.25*Math.cos(u*2)),i%3?a.c:'#3f6a2e',2.2);}
  for(let i=0;i<5;i++){const u=i/4-.5;leaf(u*1.3,L*.42,a.c2,2);}
  g.fillStyle=a.wool;g.beginPath();g.ellipse(x,y-L*.38,L*.12,L*.2,0,0,TAU);g.fill();g.fillStyle=a.fl;for(let k=0;k<9;k++){g.beginPath();g.arc(x+((k*5)%5-2)*L*.04,y-L*.24-k*L*.032,.8,0,TAU);g.fill();}return;}
 if(a.k==='cluster'){g.strokeStyle='#6a8a5a';g.lineWidth=1.3;const top=[x+sw,y-H*.85];g.beginPath();g.moveTo(x,y);g.lineTo(top[0],top[1]);g.stroke();leafPair(g,x,y,H*.8,'#7a9a6a');
  for(let i=0;i<9;i++){const an=i*2.39,rr=Math.sqrt(i)*1.9;const cx=top[0]+Math.cos(an)*rr*1.3,cy=top[1]+Math.sin(an)*rr*(a.dome?.6:.8)-(a.dome?1:0);g.fillStyle=a.c;g.beginPath();g.arc(cx,cy,1.7,0,TAU);g.fill();g.fillStyle=a.eye;g.beginPath();g.arc(cx,cy,.7,0,TAU);g.fill();}return;}
 if(a.k==='hearts'){const P0=[x,y],P1=[x+sw,y-H*1.15],P2=[x+H*.55+sw,y-H*.62];const q=u=>{const A=(1-u)*(1-u),B=2*(1-u)*u,C2=u*u;return[A*P0[0]+B*P1[0]+C2*P2[0],A*P0[1]+B*P1[1]+C2*P2[1]];};
  g.fillStyle='#7aa86a';for(const sd of[-1,1]){g.save();g.translate(x+sd*3,y-H*.18);g.rotate(sd*.5);g.beginPath();g.ellipse(0,-H*.12,H*.1,H*.14,0,0,TAU);g.fill();g.restore();}
  g.strokeStyle='#8a6a7a';g.lineWidth=1.1;g.lineCap='round';g.beginPath();g.moveTo(P0[0],P0[1]);g.quadraticCurveTo(P1[0],P1[1],P2[0],P2[1]);g.stroke();
  for(let i=0;i<a.n;i++){const u=.5+.5*i/(a.n-1),pp=q(u),hy=pp[1]+3.2,s2=2.4-i*.15;g.strokeStyle='#8a6a7a';g.lineWidth=.6;g.beginPath();g.moveTo(pp[0],pp[1]);g.lineTo(pp[0],hy-s2);g.stroke();
   g.fillStyle=a.c;g.beginPath();g.arc(pp[0]-s2*.5,hy,s2*.62,0,TAU);g.arc(pp[0]+s2*.5,hy,s2*.62,0,TAU);g.fill();g.beginPath();g.moveTo(pp[0]-s2*1.1,hy+.2);g.lineTo(pp[0],hy+s2*1.5);g.lineTo(pp[0]+s2*1.1,hy+.2);g.fill();g.fillStyle=a.tip;g.beginPath();g.ellipse(pp[0],hy+s2*1.35,s2*.28,s2*.4,0,0,TAU);g.fill();}return;}
 if(a.k==='spathe'){const Hs=H*.9;g.fillStyle='#4f8a3a';for(const[sd,an]of[[-1,-.38],[1,.42],[0,.08]]){g.save();g.translate(x+sd*2,y);g.rotate(an);g.beginPath();g.ellipse(0,-Hs*.42,Hs*.17,Hs*.44,0,0,TAU);g.fill();g.strokeStyle='#3e7030';g.lineWidth=.6;g.beginPath();g.moveTo(0,0);g.lineTo(0,-Hs*.8);g.stroke();g.restore();}
  const bx=x+sw*.5+1,by=y-Hs*.2;g.fillStyle=a.c||'#f4d02a';g.beginPath();g.moveTo(bx-Hs*.12,by);g.quadraticCurveTo(bx-Hs*.2,by-Hs*.38,bx+Hs*.02,by-Hs*.62);g.quadraticCurveTo(bx+Hs*.18,by-Hs*.36,bx+Hs*.12,by);g.closePath();g.fill();
  g.fillStyle=a.c2||'#d8b018';g.beginPath();g.moveTo(bx-Hs*.05,by-Hs*.05);g.quadraticCurveTo(bx-Hs*.08,by-Hs*.3,bx+Hs*.02,by-Hs*.5);g.quadraticCurveTo(bx+Hs*.07,by-Hs*.3,bx+Hs*.05,by-Hs*.05);g.fill();
  g.fillStyle=a.sp||'#8aa83a';g.beginPath();g.ellipse(bx,by-Hs*.22,Hs*.045,Hs*.15,0,0,TAU);g.fill();return;}
 if(a.k==='iris'){g.strokeStyle='#4b7432';g.lineWidth=1.4;const top=[x+sw,y-H];g.beginPath();g.moveTo(x,y);g.lineTo(top[0],top[1]);g.stroke();g.fillStyle='#5f8a4a';for(const s of[-1,1]){g.beginPath();g.ellipse(x+s*2,y-H*.4,1.4,H*.38,s*.12,0,TAU);g.fill();}
  g.save();g.translate(top[0],top[1]);g.fillStyle='#8a86d8';for(const s of[-1,0,1]){g.save();g.rotate(s*1.1+Math.PI);g.beginPath();g.ellipse(0,-4.2,2.3,4.2,0,0,TAU);g.fill();g.fillStyle='#f2d24a';g.beginPath();g.ellipse(0,-2.6,.6,1.6,0,0,TAU);g.fill();g.fillStyle='#8a86d8';g.restore();}
  g.fillStyle='#a8a4ec';for(const s of[-1,1]){g.save();g.rotate(s*.35);g.beginPath();g.ellipse(0,-4,1.6,3.6,0,0,TAU);g.fill();g.restore();}g.restore();return;}}
// raceme shapes that the original renderer lacks
const _drawRacemeBase=drawRaceme;
drawRaceme=function(ctx,x,y,v,H,t,seed){const V=RACEME[v];if(!V||!['spike4','trumpet','bract','star'].includes(V.shape))return _drawRacemeBase(ctx,x,y,v,H,t,seed);
 const sway=RM?0:Math.sin(t*1.3+x*.05)*H*.05;const P0=[x,y],P1=[x,y-H*.55],P2=[x+sway,y-H];const q=u=>{const a=(1-u)*(1-u),b=2*(1-u)*u,c=u*u;return[a*P0[0]+b*P1[0]+c*P2[0],a*P0[1]+b*P1[1]+c*P2[1]];};
 ctx.strokeStyle='#4b7432';ctx.lineWidth=Math.max(1.1,H*.018);ctx.lineCap='round';ctx.beginPath();ctx.moveTo(P0[0],P0[1]);ctx.quadraticCurveTo(P1[0],P1[1],P2[0],P2[1]);ctx.stroke();
 ctx.fillStyle='#5b8a3a';for(let i=0;i<4;i++){const b=q(.12+i*.1),sd=i%2?1:-1;ctx.save();ctx.translate(b[0],b[1]);ctx.rotate(sd*(V.shape==='bract'?.6:1)-Math.PI/2);ctx.beginPath();ctx.ellipse(H*.06,0,H*.07,H*(V.small?.012:.02),0,0,TAU);ctx.fill();ctx.restore();}
 for(let i=0;i<V.n;i++){const f=i/V.n,u=.45+.55*f,p=q(u),sz=lerp(H*(V.small?.035:.05),H*.02,f),col=V.c[Math.min(2,Math.floor(f*3))],sd=i%2?1:-1;
  if(V.shape==='spike4'){ctx.fillStyle=col;for(let k=0;k<4;k++){ctx.beginPath();ctx.ellipse(p[0]+sd*sz*.7+Math.cos(k*1.57)*sz*.45,p[1]+Math.sin(k*1.57)*sz*.45,sz*.42,sz*.3,k*1.57,0,TAU);ctx.fill();}}
  else if(V.shape==='star'){ctx.save();ctx.translate(p[0]+sd*sz*.8,p[1]);ctx.fillStyle=col;for(let k=0;k<6;k++){ctx.rotate(TAU/6);ctx.beginPath();ctx.ellipse(sz*.55,0,sz*.55,sz*.2,0,0,TAU);ctx.fill();}ctx.fillStyle='#f2e08a';ctx.beginPath();ctx.arc(0,0,sz*.18,0,TAU);ctx.fill();ctx.restore();}
  else if(V.shape==='trumpet'){ctx.save();ctx.translate(p[0],p[1]);ctx.rotate(sd*(V.slim?.9:1.1));ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(sz*(V.slim?2.6:2.2),-sz*.25);ctx.lineTo(sz*(V.slim?2.9:2.6),-sz*.7);ctx.lineTo(sz*(V.slim?3:2.8),sz*.5);ctx.lineTo(sz*(V.slim?2.6:2.2),sz*.3);ctx.closePath();ctx.fill();ctx.restore();}
  else{ctx.fillStyle=f>.4?col:'#7a8a3a';ctx.beginPath();ctx.ellipse(p[0]+sd*sz*.6,p[1],sz*.9,sz*.55,sd*.6,0,TAU);ctx.fill();ctx.fillStyle=V.c[0];ctx.beginPath();ctx.ellipse(p[0]+sd*sz*1.1,p[1]-sz*.2,sz*.45,sz*.35,sd*.6,0,TAU);ctx.fill();}}};
// polar extras: veins and spots
const _drawPolarBase=drawPolar;
drawPolar=function(ctx,v,R,rot){_drawPolarBase(ctx,v,R,rot);const V=POLAR[v];if(!V)return;rot=rot||0;
 if(V.stripe){ctx.strokeStyle=V.stripe;ctx.lineWidth=Math.max(.35,R*.04);for(let j=0;j<V.k;j++){const a=rot+j*TAU/V.k;for(const o of[-.12,0,.12]){ctx.beginPath();ctx.moveTo(Math.cos(a)*R*.2,Math.sin(a)*R*.2);ctx.lineTo(Math.cos(a+o)*R*.72,Math.sin(a+o)*R*.72);ctx.stroke();}}}
 if(V.spots){ctx.fillStyle=V.spots;for(let j=0;j<V.k*3;j++){const a=rot+j*TAU/(V.k*3),rr=R*(.3+.12*(j%3));ctx.beginPath();ctx.arc(Math.cos(a)*rr,Math.sin(a)*rr,R*.04+.2,0,TAU);ctx.fill();}}};
// blanketflower: red petals with yellow tips
const _drawPhylloBase=drawPhyllo;
drawPhyllo=function(ctx,v,R,seed){_drawPhylloBase(ctx,v,R,seed);const V=PHYLLO[v];if(!V||!V.tip)return;ctx.fillStyle=V.p;const r=rng(seed);for(let i=0;i<V.n;i++){const a=i*TAU/V.n+(r()-.5)*.1;ctx.beginPath();ctx.ellipse(Math.cos(a)*R*1.15,Math.sin(a)*R*1.15,R*.2,R*.13,a,0,TAU);ctx.fill();}};


/* ================= TREE GROWTH FORMS =================
   Growth forms beyond the four bases in SPECIES (oak, maple, birch, pine). A species picks one with `form` and gets
   the same tree genSplineTree builds: a climbable trunk and limbs, plus leaves behind the limbs and in front of the
   squirrel. makePath, pathAt, wAt and leafBlob come from the game script. */
const TREE_FORMS={
 // An unbranched, ringed trunk under a crown of arching feather-leaved fronds. Each frond is a climbable limb.
 palm(sp,seed,x,gy,s){const r=rng(seed);
  const H=430*s*(sp.H||1),lean=(r()-.5)*(sp.lean||40)*s;const tc=[];for(let i=0;i<=5;i++){const t=i/5;tc.push([x+lean*t*t+(i&&i<5?(r()-.5)*4*s:0),gy-H*t]);}
  const w0=sp.trunk*1.25*s+4*s,trunk=makePath(tc,w0,w0*(sp.taper||.72),{kind:'trunk',sp,taper:1});
  const fsp=Object.assign({},sp,{bark:sp.rachis[0],barkHi:sp.rachis[1],barkLo:sp.rachis[2],mark:null,strips:null,rings:null,shaft:null});
  const limbs=[],leaves=[],leavesF=[],back=[],backLv=[];
  const frond=(e,side,at,L,P0,fl)=>{const pts=[[P0.x,P0.y]];let a=e,px=P0.x,py=P0.y;const bend=(sp.arch||.24)*(e<0?1.35:1);
   for(let j=1;j<=5;j++){px+=side*Math.cos(a)*L/5;py-=Math.sin(a)*L/5;pts.push([px,Math.min(gy-30*s,py)]);a=Math.max(-1.45,a-bend);}
   return makePath(pts,(fl?4.6:7)*s*(sp.rachisW||1),1.3*s,{kind:'limb',sp:fsp,emerge:.3});};
  // leaflets: narrow blades either side of the midrib, tipped toward the frond tip and hanging by sp.hang (0 stiff, 1 limp)
  const leaflets=(P,out,outF,fF,scale)=>{const step=6*s*(scale||1);for(let os=P.len*.1;os<=P.len;os+=step){const u=os/P.len,q=pathAt(P,os),ll=(sp.leaflet||30)*s*(scale||1)*(.3+.8*Math.sin(Math.PI*Math.min(1,u*1.05)));const blobs=[];
    const nb=sp.plume?3:2;for(let k=0;k<nb;k++){const sd=k%2?1:-1,a=q.ang+sd*(Math.PI/2-.55)+(sp.plume&&k===2?(r()-.5)*2.4:(r()-.5)*.25);let vx=Math.cos(a),vy=Math.sin(a);const h=sp.hang==null?.45:sp.hang;vx*=1-h;vy=vy*(1-h)+h;const l=Math.hypot(vx,vy)||1;vx/=l;vy/=l;
     const len=ll*(.8+r()*.35);blobs.push({dx:vx*len/2,dy:vy*len/2,rx:len/2,ry:(sp.leafletW||1.5)*s*(scale||1),rot:Math.atan2(vy,vx),c:sp.leaf[(r()*sp.leaf.length)|0]});}
    const o={x:q.x,y:q.y,blobs,own:P,os};((outF&&r()<fF)?outF:out).push(o);}};
  const n=sp.fronds||10,top=pathAt(trunk,trunk.len);
  for(let k=0;k<n;k++){const side=k%2?1:-1,i=k>>1,m=Math.ceil(n/2),e=1.3-2.05*i/Math.max(1,m-1)+(r()-.5)*.2;
   const fore=r()<.22,L=(sp.frondL||1)*(150+60*r())*s*(e>1.1?.72:1)*(fore?.6:1);
   const at=trunk.len-Math.max(0,-e)*12*s-r()*4*s,P0=pathAt(trunk,at),P=frond(e,side,at,L,P0,false);
   const behind=!fore&&r()<.42;limbs.push({path:P,at,behind});leaflets(P,leaves,behind?null:leavesF,.3);}
  // fronds behind the crown, blurred into the back layer
  for(let k=0;k<3;k++){const side=r()<.5?-1:1,e=.9-k*.7+(r()-.5)*.3,P=frond(e,side,trunk.len,(sp.frondL||1)*(110+40*r())*s,top,true);back.push(P);leaflets(P,backLv,null,0,.85);}
  leafBlob(r,{leaf:sp.leaf},top.x,top.y-4*s,10*s,leaves);
  return{sp,trunk,limbs,twigs:[],leaves,blooms:[],twigsF:[],leavesF,x,back,backTw:[],backLv};},

 // Araucaria: a tall bare trunk, then whorls of limbs that run out and curve up to one flat, umbrella-like top,
 // with brushy tufts of branchlets clustered toward the limb tips.
 araucaria(sp,seed,x,gy,s){const r=rng(seed);
  const H=470*s*1.22*(sp.H||1),tc=[];for(let i=0;i<=5;i++){const t=i/5;tc.push([x+(i?(r()-.5)*6*s:0),gy-H*t]);}
  const trunk=makePath(tc,sp.trunk*1.25*s+6*s,2.6*s,{kind:'trunk',sp,taper:1.6});const yTop=gy-H;
  const limbs=[],leaves=[],leavesF=[],back=[],backLv=[];
  const tuft=(qx,qy,size,out)=>{const blobs=[];const c=()=>sp.leaf[(r()*sp.leaf.length)|0];
   for(let k=0;k<3;k++)blobs.push({dx:(r()-.5)*size*.7,dy:-size*.2+(r()-.5)*size*.3,rx:size*.45,ry:size*.32,rot:r()*TAU,c:c()});
   const nb=12+((r()*6)|0);for(let k=0;k<nb;k++){const a=-Math.PI/2+(r()-.5)*3.4,l=size*(.8+r()*.7);blobs.push({dx:Math.cos(a)*l/2,dy:Math.sin(a)*l/2,rx:l/2,ry:size*.13,rot:a,c:c()});}
   out.push({x:qx,y:qy,blobs});return out[out.length-1];};
  const tufts=(P,out,outF,lr)=>{const step=11*s;for(let os=P.len*.32;os<=P.len+1;os+=step){const u=(os-P.len*.32)/(P.len*.68),q=pathAt(P,Math.min(os,P.len));
    Object.assign(tuft(q.x,q.y-5*s,lr*(.8+.6*u),(outF&&r()<.3)?outF:out),{own:P,os:Math.min(os,P.len)});}};
  const lr=(sp.leafR||9)*s*1.6,n=sp.whorlN||8,w0=sp.wStart||.64;let side=r()<.5?-1:1;
  const limb=(st,R,yTip)=>{const P=pathAt(trunk,st),pts=[[P.x,P.y]];yTip=Math.min(yTip,P.y-18*s);
   for(let j=1;j<=5;j++){const t=j/5;pts.push([P.x+side*R*t+(j<5?(r()-.5)*6*s:0),P.y+(yTip-P.y)*Math.pow(t,2.3)+7*s*Math.sin(Math.PI*t)*(1-t)]);}return{P,pts};};
  for(let k=0;k<n;k++){const st=trunk.len*(w0+(.96-w0)*(k+.5)/n);side=-side;const R=((sp.wL||1)*(235-125*k/n)+(r()-.5)*30)*s;
   const{P,pts}=limb(st,R,yTop+(r()-.4)*22*s);const path=makePath(pts,wAt(trunk,st)*.5,2.4*s,{kind:'limb',sp,emerge:.3+.3*r()});
   const behind=k>0&&r()<.36;limbs.push({path,at:st,behind});tufts(path,leaves,behind?null:leavesF,lr);}
  for(let k=0;k<4;k++){const st=trunk.len*(w0+(.92-w0)*r());side=r()<.5?-1:1;const{pts}=limb(st,(120+r()*90)*s,yTop+(r()-.2)*30*s);const P=makePath(pts,wAt(trunk,st)*.36,1.8*s);back.push(P);tufts(P,backLv,null,lr*.9);}
  const top=pathAt(trunk,trunk.len);tuft(top.x,top.y-6*s,lr*1.5,leaves);
  return{sp,trunk,limbs,twigs:[],leaves,blooms:[],twigsF:[],leavesF,x,back,backTw:[],backLv};}};
// pictures and the distant tree layer have room for a tree about as tall as a pine, so the tall araucaria is drawn smaller there
TREE_FORMS.araucaria.flat=.62;
// the same trees as flat segments and leaves, for pictures and the distant tree layer (see genRecursive)
function formSegs(T){const segs=[],add=(P,c)=>{const p=P.pts,n=p.length-1;for(let i=0;i<n;i+=3){const j=Math.min(n,i+3);segs.push({x1:p[i][0],y1:p[i][1],x2:p[j][0],y2:p[j][1],w1:wAt(P,P.cum[i]),w2:wAt(P,P.cum[j]),c});}};
 for(const P of T.back)add(P,P.sp&&P.sp.bark);add(T.trunk);for(const lb of T.limbs)add(lb.path,lb.path.sp!==T.sp&&lb.path.sp.bark);
 return{segs,leaves:[...T.backLv,...T.leaves,...T.leavesF].map(L=>({x:L.x,y:L.y,blobs:L.blobs}))};}
