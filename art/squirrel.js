// Squirrel Ranger squirrel artwork: the jointed skeleton, pose library, tail and head springs, coats (COATS),
// the species-to-coat map (SQUIRRELS) and the code that draws a squirrel from the side or from above.
// Loaded before the game script; uses TAU, RM, lerp and rainbowOverlay from it only while drawing. The facts on
// each card live in data/squirrels.js and are merged into SQUIRRELS by the game script.
"use strict";

/* ================= SQUIRREL ================= */
const COATS={gray:{back:'#8d8a84',back2:'#67635d',wash:'#a08367',belly:'#f1ece1',tail:'#7b7872',tailEdge:'#e4e0d7',paw:'#504c47',ring:'#f4f0e6',ear:'#b39d86',nose:'#3a2f2a'},
 fox:{back:'#b7743f',back2:'#8d552b',wash:'#c98c52',belly:'#eab37a',tail:'#a7643a',tailEdge:'#efaa62',paw:'#6b4126',ring:'#f2c999',ear:'#c98a52',nose:'#3a2418'},
 red:{back:'#9e4c2b',back2:'#76351c',wash:'#b2603a',belly:'#f3ede2',tail:'#8c4026',tailEdge:'#cf7546',paw:'#5a2c18',ring:'#f6f1e8',ear:'#b45a34',nose:'#2a1810'},
 black:{back:'#34302d',back2:'#1d1b19',wash:'#3e3733',belly:'#45403b',tail:'#2e2b29',tailEdge:'#7d736a',paw:'#191716',ring:'#756b62',ear:'#3e3733',nose:'#0d0d0d'}};
function pose(mode,ph,t){
 const s=Math.sin(ph*TAU),c=Math.cos(ph*TAU);
 const P={pitch:0,flex:0,bob:0,fU:.15,fL:-.05,hA:.65,hS:-.75,hF:1.35,tailBase:.55,curl:-.4,wave:.12,waveSpd:3,head:0,ear:0,far:0};
 switch(mode){
  case'bound':case'cling':{const a=mode==='cling'?.6:1;P.flex=s*a;P.bob=Math.max(0,s)*7*a;P.pitch=-.12*c*a;P.fU=.2+.85*s*a;P.fL=P.fU-.35;P.hA=.35-.95*s*a;P.hS=P.hA-1.3;P.hF=P.hA+.75;P.tailBase=.35+.22*c;P.curl=-.25+.35*s;P.head=-P.pitch*.85-.05*s;P.neck=.6-.9*s*a;P.far=.07;break;}
  case'leap':{P.flex=1;P.pitch=.22-.45*ph;P.fU=1.25;P.fL=1.05;P.hA=-.75;P.hS=-2;P.hF=-.7;P.tailBase=.18+.2*ph;P.curl=.25;P.wave=.05;P.ear=-1;P.neck=2.6;P.head=.1-.4*ph;break;}
  case'glide':{P.flex=.85;P.pitch=-.04;P.fU=.95;P.fL=1.15;P.hA=-.9;P.hS=-1.15;P.hF=-1.0;P.tailBase=.08;P.curl=.08;P.wave=.03;P.ear=-.6;P.neck=2.2;P.head=.05;P.far=.1;break;}
  case'crouch':{P.flex=-1;P.bob=-3;P.pitch=.12;P.fU=-.25;P.fL=-.45;P.hA=1.35;P.hS=-.05;P.hF=1.6;P.tailBase=.6;P.curl=-.5;P.wave=.25;P.waveSpd=18;P.head=.15;P.neck=-1;break;}
  case'land':{const k=ph*ph*(3-2*ph);P.flex=1-2*k;P.pitch=-.3*(1-k);P.fU=.9-1.1*k;P.fL=P.fU-.3*k;P.hA=-.5+1.8*k;P.hS=P.hA-1.3;P.hF=P.hA+.6;P.tailBase=.2+.5*k;P.curl=.2-.6*k;P.neck=2.2-2.8*k;P.head=-P.pitch*.6;break;}
  case'descend':{P.flex=s*.55;P.pitch=-.05;P.fU=.25+.55*s;P.fL=P.fU-.25;P.hA=.3-.6*s;P.hS=P.hA-1.25;P.hF=P.hA-1.9;P.tailBase=.25;P.curl=.15;P.head=.4;P.neck=1.6+.5*s;P.far=.25;break;}
  case'sit':{const nib=Math.sin(t*.9)>0?Math.max(0,Math.sin(t*13)):0;P.pitch=1.25;P.flex=-.3;P.fU=1.25;P.fL=2.5+.18*nib;P.hA=1.45;P.hS=-.9;P.hF=1.57;P.tailBase=1.45;P.curl=-1.7;P.wave=.08;P.head=-1.1-.06*nib;P.neck=.6-.7*nib;break;}
  case'alert':{const burst=Math.sin(t*1.7)>.4?1:0;P.pitch=1.15;P.flex=-.2;P.fU=.35;P.fL=.1;P.hA=1.45;P.hS=-.9;P.hF=1.57;P.tailBase=1.2;P.curl=-1.2;P.wave=.08+burst*.55;P.waveSpd=16;P.head=-1.05+.25*Math.sin(t*.8);P.ear=.3;P.neck=3;break;}
 }
 return P;
}
function skel(P,PF){
 const ba=-P.pitch,dir=[Math.cos(ba),Math.sin(ba)],up=[Math.sin(ba),-Math.cos(ba)];
 const L=22+5*P.flex,cy=-19-P.bob;
 const hip=[-dir[0]*L/2,cy-dir[1]*L/2],sh=[dir[0]*L/2,cy+dir[1]*L/2];
 const arch=4-6*P.flex,ctrl=[up[0]*arch,cy+up[1]*arch];
 const leg=(o,segs)=>{const pts=[o];let p=o;for(const[a,l]of segs){p=[p[0]+Math.sin(a)*l,p[1]+Math.cos(a)*l];pts.push(p);}return pts;};
 const fo=[sh[0]-dir[0]*2,sh[1]+4],ho=[hip[0]+dir[0]*2,hip[1]+3];
 const front=Q=>leg(fo,[[Q.fU,9.5],[Q.fL,9]]),hind=Q=>leg(ho,[[Q.hA,10],[Q.hS,9],[Q.hF,7]]);
 const ha=ba-P.head,hd=[Math.cos(ha),Math.sin(ha)];
 const nl=6+(P.neck==null?1:P.neck),na=ba-P.head*.5,nd=[Math.cos(na),Math.sin(na)];
 const nEnd=[sh[0]+nd[0]*nl+up[0]*2.5,sh[1]+nd[1]*nl+up[1]*2.5],nCtl=[sh[0]+dir[0]*nl*.55+up[0]*1.5,sh[1]+dir[1]*nl*.55+up[1]*1.5];
 const head={x:nEnd[0]+hd[0]*4.5,y:nEnd[1]+hd[1]*4.5,ang:ha};
 return{P,ba,dir,up,hip,sh,ctrl,neck:[sh,nCtl,nEnd],fN:front(P),fF:front(PF),hN:hind(P),hF:hind(PF),head,tailRoot:[hip[0]-dir[0]*5+up[0]*2,hip[1]-dir[1]*5+up[1]*2]};
}
function makeRig(){return{tail:new Array(10).fill(Math.PI+.5),init:false,nk:null,nkV:0,hd:0,hdV:0};}
function springHead(rig,P,dt){const tn=P.neck==null?1:P.neck;if(rig.nk==null||dt<=0||RM){rig.nk=tn;rig.hd=P.head;rig.nkV=rig.hdV=0;return;}const h=Math.min(dt,1/30);rig.nkV+=((tn-rig.nk)*420-rig.nkV*26)*h;rig.nk+=rig.nkV*h;rig.hdV+=((P.head-rig.hd)*520-rig.hdV*30)*h;rig.hd+=rig.hdV*h;P.neck=rig.nk;P.head=rig.hd;}
function updateTail(rig,P,t,dt){const n=rig.tail.length;for(let i=0;i<n;i++){const u=i/(n-1);const tg=Math.PI+P.tailBase+P.curl*u+(RM?0:P.wave*Math.sin(t*P.waveSpd-i*.7)*u);if(!rig.init){rig.tail[i]=tg;continue;}const k=1-Math.pow(1-lerp(.32,.09,u),Math.min(3,dt*60));rig.tail[i]+=(tg-rig.tail[i])*k;}rig.init=true;}
function tailPts(rig,root,seg){const pts=[root];let p=root;for(const a of rig.tail){p=[p[0]+Math.cos(a)*seg,p[1]+Math.sin(a)*seg];pts.push(p);}return pts;}
function limb(ctx,pts,ws,col){ctx.strokeStyle=col;ctx.lineCap='round';for(let i=0;i<pts.length-1;i++){ctx.lineWidth=ws[i];ctx.beginPath();ctx.moveTo(pts[i][0],pts[i][1]);ctx.lineTo(pts[i+1][0],pts[i+1][1]);ctx.stroke();}}
function paw(ctx,p,r,col){ctx.fillStyle=col;ctx.beginPath();ctx.arc(p[0],p[1],r,0,TAU);ctx.fill();}
function bodyPts(sk,prof){const out=[];for(let i=0;i<=12;i++){const u=i/12,a=(1-u)*(1-u),b=2*(1-u)*u,c=u*u;const x=a*sk.hip[0]+b*sk.ctrl[0]+c*sk.sh[0],y=a*sk.hip[1]+b*sk.ctrl[1]+c*sk.sh[1];const tx=2*(1-u)*(sk.ctrl[0]-sk.hip[0])+2*u*(sk.sh[0]-sk.ctrl[0]),ty=2*(1-u)*(sk.ctrl[1]-sk.hip[1])+2*u*(sk.sh[1]-sk.ctrl[1]);const l=Math.hypot(tx,ty)||1;out.push({x,y,nx:ty/l,ny:-tx/l,r:prof(u)});}return out;}
const profB=u=>u<.25?lerp(9.5,10.5,u/.25):u<.7?lerp(10.5,9,(u-.25)/.45):lerp(9,8,(u-.7)/.3);
function fluffyTail(ctx,pts,C,scale){const n=pts.length;for(let pass=0;pass<2;pass++){ctx.fillStyle=pass?C.tail:C.tailEdge;for(let i=1;i<n;i++){for(let h=0;h<2;h++){const u=(i-.5*h)/(n-1);const x=h?(pts[i][0]+pts[i-1][0])/2:pts[i][0],y=h?(pts[i][1]+pts[i-1][1])/2:pts[i][1];const r=(2.5+7.8*Math.pow(u,.55))*scale*(pass?.74:1);ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();}}}
 ctx.strokeStyle=C.tailEdge;ctx.globalAlpha=.5;ctx.lineWidth=.7;for(let i=3;i<n;i++){const u=i/(n-1),r=(2.5+7.8*Math.pow(u,.55))*scale;const a=Math.atan2(pts[i][1]-pts[i-1][1],pts[i][0]-pts[i-1][0]);for(const sd of[-1,1]){const bx=pts[i][0]+Math.cos(a+sd*Math.PI/2)*r*.9,by=pts[i][1]+Math.sin(a+sd*Math.PI/2)*r*.9;ctx.beginPath();ctx.moveTo(bx,by);ctx.lineTo(bx+Math.cos(a+sd*1.2)*3,by+Math.sin(a+sd*1.2)*3);ctx.stroke();}}ctx.globalAlpha=1;}
function headB(ctx,h,C,P){ctx.save();ctx.translate(h.x,h.y);ctx.rotate(h.ang);
 ctx.fillStyle=C.earOut||C.back2;ctx.save();ctx.translate(-4.5,-5.5);ctx.rotate(-.55-(P.ear||0)*.4);ctx.beginPath();ctx.ellipse(0,-3,2.4,4.6,0,0,TAU);ctx.fill();ctx.restore();
 ctx.fillStyle=C.back;ctx.beginPath();ctx.ellipse(0,0,8.5,7,0,0,TAU);ctx.fill();ctx.fillStyle=C.muzzle||C.back;ctx.beginPath();ctx.ellipse(6,1.6,5.6,4.5,.15,0,TAU);ctx.fill();
 ctx.fillStyle=C.belly;ctx.beginPath();ctx.ellipse(3.5,4.2,5.4,2.5,.2,0,TAU);ctx.fill();
 if(C.cheek){ctx.strokeStyle=C.cheek;ctx.lineWidth=2.1;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-5.8,-3);ctx.quadraticCurveTo(-5.4,2,-2.4,5.2);ctx.stroke();}
 ctx.fillStyle=C.ear;ctx.save();ctx.translate(-2,-6);ctx.rotate(-.3-(P.ear||0)*.4);ctx.beginPath();ctx.ellipse(0,-3.4,2.7,5,0,0,TAU);ctx.fill();ctx.fillStyle=C.earIn||C.back;ctx.beginPath();ctx.ellipse(.3,-2.4,1.3,3,0,0,TAU);ctx.fill();if(C.tuft){ctx.fillStyle=C.tuftC||C.back2;for(const o of[-1,0,1]){ctx.beginPath();ctx.moveTo(-1.6+o*.5,-6.6);ctx.quadraticCurveTo(o*.8,-8-C.tuft*.6,o*1.4+.4,-8.4-C.tuft);ctx.quadraticCurveTo(o*.4+1,-8,1.6+o*.5,-6.6);ctx.fill();}}ctx.restore();
 {const e=C.eye||1;ctx.fillStyle=C.ring;ctx.beginPath();ctx.ellipse(2.6,-1.4,3.1*e,2.7*e,0,0,TAU);ctx.fill();
 ctx.fillStyle='#120f0d';ctx.beginPath();ctx.ellipse(2.9,-1.4,2.2*e,2.1*e,0,0,TAU);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(2.9+.7*e,-1.4-.8*e,.75*e,0,TAU);ctx.fill();}
 ctx.fillStyle=C.nose;ctx.beginPath();ctx.arc(11.2,1.1,1.35,0,TAU);ctx.fill();
 ctx.strokeStyle='rgba(30,25,20,.35)';ctx.lineWidth=.5;for(let k=-1;k<=1;k++){ctx.beginPath();ctx.moveTo(10,2);ctx.lineTo(16,1+k*2.5);ctx.stroke();}
 ctx.restore();}
function drawNeck(ctx,sk,C){const[a,c,b]=sk.neck;const pts=[];for(let i=0;i<=8;i++){const u=i/8,k0=(1-u)*(1-u),k1=2*(1-u)*u,k2=u*u;const x=k0*a[0]+k1*c[0]+k2*b[0],y=k0*a[1]+k1*c[1]+k2*b[1];const tx=2*(1-u)*(c[0]-a[0])+2*u*(b[0]-c[0]),ty=2*(1-u)*(c[1]-a[1])+2*u*(b[1]-c[1]);const l=Math.hypot(tx,ty)||1;pts.push({x,y,nx:ty/l,ny:-tx/l,r:lerp(8,5.8,u)});}
 const m=pts[4];const g=ctx.createLinearGradient(m.x+m.nx*8,m.y+m.ny*8,m.x-m.nx*8,m.y-m.ny*8);g.addColorStop(0,C.back2);g.addColorStop(.4,C.back);g.addColorStop(1,C.back);
 ctx.fillStyle=g;ctx.beginPath();pts.forEach((p,i)=>{const x=p.x+p.nx*p.r,y=p.y+p.ny*p.r;i?ctx.lineTo(x,y):ctx.moveTo(x,y);});for(let i=pts.length-1;i>=0;i--){const p=pts[i];ctx.lineTo(p.x-p.nx*p.r,p.y-p.ny*p.r);}ctx.closePath();ctx.fill();
 ctx.beginPath();ctx.arc(pts[0].x,pts[0].y,pts[0].r,0,TAU);ctx.arc(pts[8].x,pts[8].y,pts[8].r,0,TAU);ctx.fill();
 ctx.fillStyle=C.belly;ctx.beginPath();for(let i=1;i<=8;i++){const p=pts[i];const x=p.x-p.nx*p.r*.3,y=p.y-p.ny*p.r*.3;i>1?ctx.lineTo(x,y):ctx.moveTo(x,y);}for(let i=8;i>=1;i--){const p=pts[i];ctx.lineTo(p.x-p.nx*p.r*.97,p.y-p.ny*p.r*.97);}ctx.closePath();ctx.fill();}
// flying squirrels: the furry gliding membrane stretched from wrist to ankle
function membrane(ctx,fore,hind,mid,C,far){const w=fore[fore.length-1],a=hind[2]||hind[hind.length-1];const cx=(w[0]+a[0])/2,cy=(w[1]+a[1])/2;const kx=lerp(cx,mid.x,.42),ky=lerp(cy,mid.y,.42);
 ctx.save();ctx.fillStyle=far?C.back2:C.back;ctx.globalAlpha=far?.8:.95;ctx.beginPath();ctx.moveTo(w[0],w[1]);for(const q of fore.slice(0,-1).reverse())ctx.lineTo(q[0],q[1]);for(const q of hind.slice(0,3))ctx.lineTo(q[0],q[1]);ctx.quadraticCurveTo(kx,ky,w[0],w[1]);ctx.closePath();ctx.fill();
 ctx.globalAlpha=1;ctx.strokeStyle=C.wash;ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.quadraticCurveTo(kx,ky,w[0],w[1]);ctx.stroke();ctx.restore();}
function drawB(ctx,sk,C,tail){
 fluffyTail(ctx,tail,C,C.tailR||1);rainbowOverlay(ctx,tail,u=>(2.5+7.8*Math.pow(u,.55))*.9);
 const pts=bodyPts(sk,profB);const mid=pts[6];
 if(C.glide&&SQ_MODE==='glide')membrane(ctx,sk.fF,sk.hF,mid,C,true);
 limb(ctx,sk.hF,[6.5,4.5,3.4],C.back2);paw(ctx,sk.hF[3],2,C.paw);limb(ctx,sk.fF,[4.5,3.4],C.back2);paw(ctx,sk.fF[2],1.9,C.paw);
 const g=ctx.createLinearGradient(mid.x+mid.nx*11,mid.y+mid.ny*11,mid.x-mid.nx*11,mid.y-mid.ny*11);g.addColorStop(0,C.back2);g.addColorStop(.35,C.back);g.addColorStop(.75,C.wash);g.addColorStop(1,C.wash);
 ctx.fillStyle=g;ctx.beginPath();pts.forEach((p,i)=>{const x=p.x+p.nx*p.r,y=p.y+p.ny*p.r;i?ctx.lineTo(x,y):ctx.moveTo(x,y);});for(let i=pts.length-1;i>=0;i--){const p=pts[i];ctx.lineTo(p.x-p.nx*p.r,p.y-p.ny*p.r);}ctx.closePath();ctx.fill();
 ctx.beginPath();ctx.arc(pts[0].x,pts[0].y,pts[0].r,0,TAU);ctx.fill();
 ctx.fillStyle=C.belly;ctx.beginPath();for(let i=2;i<pts.length;i++){const p=pts[i];const x=p.x-p.nx*p.r*.35,y=p.y-p.ny*p.r*.35;i>2?ctx.lineTo(x,y):ctx.moveTo(x,y);}for(let i=pts.length-1;i>=2;i--){const p=pts[i];ctx.lineTo(p.x-p.nx*p.r*.98,p.y-p.ny*p.r*.98);}ctx.closePath();ctx.fill();
 if(C.stripe){ctx.fillStyle=C.stripe;ctx.globalAlpha=.85;ctx.beginPath();for(let i=1;i<pts.length-1;i++){const p=pts[i];ctx.lineTo(p.x+p.nx*p.r*.92,p.y+p.ny*p.r*.92);}for(let i=pts.length-2;i>=1;i--){const p=pts[i];ctx.lineTo(p.x+p.nx*p.r*.45,p.y+p.ny*p.r*.45);}ctx.closePath();ctx.fill();ctx.globalAlpha=1;}
 if(C.side){ctx.strokeStyle=C.side;ctx.lineWidth=1.8;ctx.lineCap='round';ctx.globalAlpha=.85;ctx.beginPath();for(let i=3;i<pts.length-1;i++){const p=pts[i];const x=p.x-p.nx*p.r*.3,y=p.y-p.ny*p.r*.3;i>3?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.stroke();ctx.globalAlpha=1;}
 if(C.glide){if(SQ_MODE==='glide')membrane(ctx,sk.fN,sk.hN,mid,C,false);else{ctx.strokeStyle=C.back2;ctx.globalAlpha=.75;ctx.lineWidth=2.6;ctx.lineCap='round';ctx.beginPath();for(let i=2;i<pts.length-1;i++){const p=pts[i];const x=p.x-p.nx*p.r*.82,y=p.y-p.ny*p.r*.82;i>2?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.stroke();ctx.globalAlpha=1;}}
 drawNeck(ctx,sk,C);
 const h0=sk.hN[0],h1=sk.hN[1];ctx.fillStyle=C.back;ctx.beginPath();ctx.ellipse((h0[0]+h1[0])/2,(h0[1]+h1[1])/2,8,5.6,Math.atan2(h1[1]-h0[1],h1[0]-h0[0]),0,TAU);ctx.fill();
 limb(ctx,sk.hN.slice(1),[4.8,3.6],C.back);paw(ctx,sk.hN[3],2.2,C.paw);
 limb(ctx,sk.fN,[5,3.8],C.back);paw(ctx,sk.fN[2],2.1,C.paw);
 headB(ctx,sk.head,C,sk.P);
}
function drawDorsal(ctx,C,belly,t,paws,moving,ph){
 const tail=[];for(let i=0;i<=10;i++){const u=i/10;tail.push([-13-u*44,Math.sin(u*2.6+t*3)*4*u]);}
 // tail (behind body)
 for(const[col,k]of[[C.tailEdge,1],[C.tail,.74]]){ctx.fillStyle=col;for(let i=1;i<tail.length;i++){const u=i/10;ctx.beginPath();ctx.arc(tail[i][0],tail[i][1],(2.5+7.8*Math.pow(u,.55))*k,0,TAU);ctx.fill();}}
 rainbowOverlay(ctx,tail,u=>(2.5+7.8*Math.pow(u,.55))*.9);
 // legs reach out to the paw targets on both edges of the branch
 const leg=(o,p,w0,w1,col)=>{const mx=(o[0]+p[0])/2,my=(o[1]+p[1])/2+Math.sign(o[1])*3.5;ctx.strokeStyle=col;ctx.lineCap='round';ctx.lineWidth=w0;ctx.beginPath();ctx.moveTo(o[0],o[1]);ctx.quadraticCurveTo(mx,my,p[0],p[1]);ctx.stroke();ctx.fillStyle=belly?'#c99a8f':C.paw;ctx.beginPath();ctx.arc(p[0],p[1],w1,0,TAU);ctx.fill();};
 const st=moving?Math.sin(ph*TAU)*5:0;
 const P=paws||{fl:[13+st,9],fr:[13-st,-9],hl:[-12-st,10],hr:[-12+st,-10]};
 leg([6,5],P.fl,4.6,2.1,C.back2);leg([6,-5],P.fr,4.6,2.1,C.back2);leg([-8,6.5],P.hl,6,2.4,C.back2);leg([-8,-6.5],P.hr,6,2.4,C.back2);
 // body
 const g=ctx.createLinearGradient(0,-10,0,10);
 if(belly){g.addColorStop(0,C.back);g.addColorStop(.25,C.belly);g.addColorStop(.75,C.belly);g.addColorStop(1,C.back);}
 else{g.addColorStop(0,C.wash);g.addColorStop(.3,C.back);g.addColorStop(.5,C.back2);g.addColorStop(.7,C.back);g.addColorStop(1,C.wash);}
 ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(-1,0,17,9.5,0,0,TAU);ctx.fill();
 ctx.fillStyle=belly?C.belly:C.back;ctx.beginPath();ctx.ellipse(-10,6.5,6.5,4.2,.2,0,TAU);ctx.ellipse(-10,-6.5,6.5,4.2,-.2,0,TAU);ctx.fill();
 // head
 ctx.fillStyle=belly?C.belly:C.back;ctx.beginPath();ctx.ellipse(18,0,8.5,7,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(25,0,5,4,0,0,TAU);ctx.fill();
 if(!belly){ctx.fillStyle=C.ear;ctx.beginPath();ctx.ellipse(13,5.8,2.6,4.2,.5,0,TAU);ctx.ellipse(13,-5.8,2.6,4.2,-.5,0,TAU);ctx.fill();
  ctx.fillStyle=C.back2;ctx.beginPath();ctx.ellipse(16,0,6,1.6,0,0,TAU);ctx.fill();}
 ctx.fillStyle='#120f0d';ctx.beginPath();ctx.arc(19.5,5.6,1.5,0,TAU);ctx.arc(19.5,-5.6,1.5,0,TAU);ctx.fill();
 ctx.fillStyle=C.nose;ctx.beginPath();ctx.arc(29.5,0,1.4,0,TAU);ctx.fill();}
let SQ_MODE='';
function drawSquirrel(ctx,rig,mode,ph,t,dt,C,ik){SQ_MODE=mode;const P=pose(mode,ph,t),PF=pose(mode,ph-(P.far||0),t);updateTail(rig,P,t,dt);springHead(rig,P,dt);const sk=skel(P,PF);if(ik)ik(sk);drawB(ctx,sk,C,tailPts(rig,sk.tailRoot,5));}


/* ---- squirrels ---- */
Object.assign(COATS,{
 egraywhite:{stripe:'#c9c0b2',back:'#f1eee8',back2:'#ddd8cf',wash:'#ece7de',belly:'#ffffff',tail:'#eeeae2',tailEdge:'#ffffff',paw:'#d8d2c8',ring:'#ffffff',ear:'#efe2dc',nose:'#c98a8a',earOut:'#e2ddd4',earIn:'#f2d6d0'},
 efoxdark:{back:'#211d1b',back2:'#141211',wash:'#2e2824',belly:'#2a2420',tail:'#231e1b',tailEdge:'#4a3e36',paw:'#ece6dc',ring:'#3a332e',ear:'#f2eee6',earOut:'#e8e2d8',earIn:'#f6f2ea',muzzle:'#f2eee6',nose:'#2a1e1a'},
 sflying:{back:'#9a8670',back2:'#7a6854',wash:'#a8957f',belly:'#f7f4ec',tail:'#8f7c67',tailEdge:'#b8a690',paw:'#d8cdbd',ring:'#3a302a',ear:'#a8957f',nose:'#3a2a24',eye:1.4,glide:1,tailR:.72},
 nflying:{back:'#8a6a4f',back2:'#6a4f39',wash:'#9a7a5c',belly:'#ece6dc',tail:'#7f6249',tailEdge:'#a88a6c',paw:'#cfc0aa',ring:'#3a2c22',ear:'#9a7a5c',nose:'#2a1e18',eye:1.4,glide:1,tailR:.75},
 humboldt:{back:'#6a4a35',back2:'#4e3424',wash:'#7a5640',belly:'#d9b48a',tail:'#5e4130',tailEdge:'#8a6648',paw:'#c0a080',ring:'#2a1e16',ear:'#7a5640',nose:'#20160f',eye:1.4,glide:1,tailR:.75},
 arizonagray:{back:'#7f8084',back2:'#5f6064',wash:'#9a8f80',belly:'#f3f1ea',tail:'#77787b',tailEdge:'#f4f3ee',paw:'#55565a',ring:'#efeee8',ear:'#8a8b8f',nose:'#2a2a2c'},
 abertblack:{back:'#1f1c1b',back2:'#141211',wash:'#2a2624',belly:'#2a2522',tail:'#26221f',tailEdge:'#3e3632',paw:'#141211',ring:'#3a3430',ear:'#2a2624',nose:'#0e0c0b',tuft:9,tuftC:'#151312'},
 douglas:{back:'#5a4632',back2:'#43331f',wash:'#6a5238',belly:'#e3a25e',tail:'#4a3826',tailEdge:'#c9a070',paw:'#3a2a1c',ring:'#f0d8a8',ear:'#6a5238',nose:'#20160e',side:'#1a1410'},
 westerngray:{back:'#8d9298',back2:'#6f747a',wash:'#a5a9ad',belly:'#fbfaf6',tail:'#868b91',tailEdge:'#ffffff',paw:'#5e6268',ring:'#f4f3ef',ear:'#9a8a80',nose:'#2a2a2c',tailR:1.15},
 amred:{back:'#8a5a35',back2:'#6c4426',wash:'#9b6a3f',belly:'#f2efe6',tail:'#8c5530',tailEdge:'#c98a4e',paw:'#5a3a22',ring:'#fbf8f0',ear:'#9b6a3f',nose:'#2a1a10'},
 abert:{back:'#73767a',back2:'#55585c',wash:'#8a7a6c',belly:'#f4f2ec',tail:'#7a7d80',tailEdge:'#efeee9',paw:'#4a4c50',ring:'#f2f0ea',ear:'#55585c',nose:'#2a2a2c',tuft:9,tuftC:'#3a3c3f',stripe:'#9a5a32'},
 kaibab:{back:'#5a5654',back2:'#3e3b3a',wash:'#6a5a50',belly:'#262220',tail:'#f2f0ea',tailEdge:'#ffffff',paw:'#2a2624',ring:'#e8e4dc',ear:'#3e3b3a',nose:'#141414',tuft:9,tuftC:'#2a2826',stripe:'#7a5034'},
 eured:{back:'#b35a2a',back2:'#8e4320',wash:'#c06a35',belly:'#f3ead9',tail:'#a8501f',tailEdge:'#c96a35',paw:'#6a3216',ring:'#f4e6d4',ear:'#b35a2a',nose:'#2a1408',tuft:7,tuftC:'#8e4320'},
 jsquirrel:{back:'#9a5a32',back2:'#6e3e22',wash:'#c9803f',belly:'#f8f6f1',tail:'#8e5230',tailEdge:'#c9a27a',paw:'#b06a36',ring:'#f3efe6',ear:'#8e5230',nose:'#2a1a10'},
 jgiantfly:{back:'#7a5236',back2:'#4f3322',wash:'#8c7a66',belly:'#efe6d4',tail:'#7a5236',tailEdge:'#9a8670',paw:'#3e2a1d',ring:'#2a1f18',ear:'#6b4630',nose:'#20160f',cheek:'#f4f1ea',eye:1.3,glide:1,tailR:1},
 serelepe:{back:'#6b5a3a',back2:'#4a3d28',wash:'#8c7148',belly:'#d09a5c',tail:'#8a5230',tailEdge:'#d9a066',paw:'#8a6a45',ring:'#d8c08a',ear:'#9a7350',nose:'#2a1f14'},
 jdwarffly:{back:'#8a7d6e',back2:'#6b6054',wash:'#a9a094',belly:'#f4f1ea',tail:'#85786a',tailEdge:'#5e544a',paw:'#b9a79a',ring:'#3a322b',ear:'#7a6e61',nose:'#2a221c',eye:1.5,glide:1,tailR:.7},
 eudark:{back:'#4a3428',back2:'#33231a',wash:'#5a3f2f',belly:'#efe6d6',tail:'#3e2b20',tailEdge:'#6a4a36',paw:'#2a1d16',ring:'#d8ccbc',ear:'#4a3428',nose:'#120c08',tuft:7,tuftC:'#2a1d16'}});
const SQUIRRELS={
 egray:{coat:'gray'},
 eblack:{coat:'black'},
 efox:{coat:'fox'},
 amred:{coat:'amred'},
 abert:{coat:'abert'},
 kaibab:{coat:'kaibab'},
 eured:{coat:'eured'},
 egraywhite:{coat:'egraywhite'},
 efoxdark:{coat:'efoxdark'},
 sflying:{coat:'sflying'},
 nflying:{coat:'nflying'},
 arizonagray:{coat:'arizonagray'},
 abertblack:{coat:'abertblack'},
 douglas:{coat:'douglas'},
 westerngray:{coat:'westerngray'},
 humboldt:{coat:'humboldt'},
 eudark:{coat:'eudark'},
 jsquirrel:{coat:'jsquirrel'},
 jgiantfly:{coat:'jgiantfly'},
 jdwarffly:{coat:'jdwarffly'},
 serelepe:{coat:'serelepe'}};
