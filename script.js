'use strict';
const translate = text => window.PortfolioI18n?.t(text) ?? text;
const profile = { name: 'Ömer Asaf Karasu', email: 'omerasafkarasu06@gmail.com' };
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const chapters = [...document.querySelectorAll('[data-scene]')];
const navLinks = [...document.querySelectorAll('.chapter-nav a')];
const sceneNames = ['SINGULARITY', 'STRUCTURE', 'NEURAL FIELD', 'INTERSECTION', 'NEXT CONNECTION'];
const details = {
  backend: { eyebrow: '01 / BACKEND DEVELOPMENT', title: 'Görünmeyen mimari.', body: 'Full-stack geliştirme deneyimim Lojipark ve Newky’deki görevlerimi kapsıyor. AYESAŞ’ta Eylül 2024–Haziran 2025 arasında BT stajyeri olarak çalıştım. Backend & ML Developer olarak yazılım geliştirmeye odaklanıyorum.', note: 'Lojipark: Aralık 2022–Aralık 2023 · Newky: Şubat 2024–Ağustos 2024.' },
  ml: { eyebrow: '02 / MACHINE LEARNING', title: 'Noktaları birleştirmek.', body: 'Backend & ML Developer olarak makine öğrenmesi alanında çalışıyorum. Bu bölüm, model geliştirme süreçleri ve veriyle yapılan çalışmalar için ayrıldı.', note: 'Proje, kullanılan modeller ve değerlendirme sonuçları henüz eklenmedi. Görsel sinir ağı, bu çalışma alanının sanatsal bir temsilidir.' },
  niafix: { eyebrow: '03 / NIAFIX LTD.', title: 'Kurucu ortak.', body: 'Kasım 2025’ten bu yana Niafix’te ortak kurucuyum. Backend & ML Developer olarak yazılım geliştirme ve makine öğrenmesi alanlarında çalışıyorum.', note: 'Ankara, Türkiye · Kasım 2025 — Günümüz' }
};
const dialog = document.getElementById('detail-dialog');
let selectedDetail = null;
function updateDetail(){ if(!selectedDetail)return;const d=details[selectedDetail];['eyebrow','title','body','note'].forEach(key=>document.getElementById(`detail-${key}`).textContent=translate(d[key])); }
document.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => {
  selectedDetail=button.dataset.detail;
  updateDetail();
  dialog.showModal();
}));
document.querySelectorAll('.close-dialog,.close-bottom').forEach(b => b.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', e => { if (e.target !== dialog) return; const r = dialog.getBoundingClientRect(); if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); });
// GPU üzerinde perspektif, döndürme, ışıklı parçacıklar ve geometriler arası geçiş.
// Harici kitaplık, CDN veya derleme adımı kullanılmaz.
const canvas = document.getElementById('universe');
const gl = canvas.getContext('webgl', { alpha: true, antialias: true, powerPreference: 'low-power' });
let running = !reduced.matches, spread = false, active = 0, targetScene = 0, currentScene = 0;
let rx = -.22, ry = .1, px = 0, py = 0, targetPX = 0, targetPY = 0, explosion = 0;
let frame = 0, previousTime = 0, time = 0, width = 1, height = 1, dragging = false, pointerX = 0, pointerY = 0;
let renderScene = () => {}, available = Boolean(gl);
const motion = document.getElementById('motion'), explode = document.getElementById('explode');
function updateMotion() { motion.textContent = running ? 'Ⅱ' : '▶'; motion.setAttribute('aria-label', translate(running ? 'Animasyonu duraklat' : 'Animasyonu başlat')); motion.setAttribute('aria-pressed', String(!running)); }
function requestFrame(){ if(!frame && !document.hidden && available) frame = requestAnimationFrame(tick); }
function tick(now) {
  frame = 0;
  if(document.hidden || !available) return;
  const dt = Math.min((now - previousTime) || 16, 40) / 1000; previousTime = now;
  if(running) { time += dt; if(!dragging) ry += dt * .1; }
  const ease = reduced.matches ? 1 : 1-Math.exp(-dt*7);
  currentScene += (targetScene-currentScene)*ease;
  explosion += ((spread?1:0)-explosion)*ease;
  px += (targetPX-px)*ease; py += (targetPY-py)*ease;
  renderScene();
  if(running || Math.abs(currentScene-targetScene)>.001 || Math.abs(explosion-(spread?1:0))>.001 || Math.abs(targetPX-px)>.001 || Math.abs(targetPY-py)>.001) requestFrame();
}
function onScroll() {
  const y = scrollY;
  let index = 0;
  while(index < chapters.length-1 && y >= chapters[index+1].offsetTop) index++;
  const next = chapters[index+1];
  const fraction = next ? Math.min(1, Math.max(0,(y-chapters[index].offsetTop)/(next.offsetTop-chapters[index].offsetTop))) : 0;
  targetScene = index+fraction;
  const selected = Math.min(4,Math.round(targetScene));
  if(selected !== active) { active=selected; navLinks.forEach((a,i)=>{a.classList.toggle('active',i===active); if(i===active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}); document.getElementById('scene-name').textContent = sceneLabel(); }
  document.getElementById('progress').style.width = `${Math.min(100,y/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100)}%`;
  requestFrame();
}
window.addEventListener('scroll',onScroll,{passive:true});
motion.addEventListener('click',()=>{running=!running;updateMotion();requestFrame();});
explode.addEventListener('click',()=>{spread=!spread;updateSpread();explode.setAttribute('aria-pressed',String(spread));requestFrame();});
reduced.addEventListener('change',()=>{running=!reduced.matches;updateMotion();requestFrame();});
window.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;targetPX=(e.clientX/innerWidth-.5)*.18;targetPY=(e.clientY/innerHeight-.5)*.12;requestFrame();},{passive:true});
canvas.addEventListener('pointerdown',e=>{dragging=true;pointerX=e.clientX;pointerY=e.clientY;canvas.setPointerCapture(e.pointerId);});
canvas.addEventListener('pointermove',e=>{if(!dragging)return;ry+=(e.clientX-pointerX)*.006;rx+=(e.clientY-pointerY)*.006;pointerX=e.clientX;pointerY=e.clientY;document.getElementById('coordinates').textContent=`X ${rx.toFixed(2)} / Y ${ry.toFixed(2)}`;requestFrame();});
canvas.addEventListener('pointerup',()=>dragging=false);canvas.addEventListener('pointercancel',()=>dragging=false);
document.addEventListener('visibilitychange',()=>{previousTime=0;requestFrame();});

if(gl) {
  try {
    const vertexSource = `
      attribute vec3 position;
      attribute float seed;
      uniform vec2 resolution;
      uniform vec2 rotation;
      uniform vec2 pointer;
      uniform float clock;
      uniform float dispersion;
      uniform float stars;
      uniform float lines;
      varying float intensity;
      varying float tone;
      void main(){
        vec3 p = position;
        float breath = 1.0 + sin(clock*.65)*.018;
        vec3 direction = normalize(p + vec3(.01));
        p = p * breath + direction * dispersion * (1.0 + fract(seed*47.13)*2.5);
        float ax=rotation.x+pointer.y, ay=rotation.y+pointer.x;
        if(stars>.5){ax*=.14;ay*=.14;}
        p.xz=mat2(cos(ay),-sin(ay),sin(ay),cos(ay))*p.xz;
        p.yz=mat2(cos(ax),-sin(ax),sin(ax),cos(ax))*p.yz;
        float depth=8.0-p.z;
        float aspect=resolution.x/resolution.y;
        float mobile=1.0-step(600.0,resolution.x);
        float scale=mix(2.05,1.05,mobile);
        vec2 origin=mix(vec2(.30,.035),vec2(0.0,.40),mobile);
        if(stars>.5){scale=1.8;origin=vec2(0.0);}
        gl_Position=vec4(p.x*scale/aspect+origin.x*depth,p.y*scale+origin.y*depth,(depth-5.0)*.08,depth);
        gl_PointSize=mix(2.0+7.0*pow(fract(seed*19.41),9.0),1.7,stars)*min(2.0,1200.0/resolution.x)*7.0/depth;
        intensity=clamp(.55+p.z*.16,.15,1.0);
        intensity*=.78+.22*sin(clock*.8+seed*73.0);
        tone=step(.77,fract(seed*13.13));
      }`;
    const fragmentSource = `
      precision mediump float;
      uniform float lines;
      uniform float stars;
      varying float intensity;
      varying float tone;
      void main(){
        vec3 color=mix(vec3(.55,.81,.88),vec3(1.0,.30,.09),tone);
        float alpha;
        if(lines>.5){alpha=intensity*.14;color=mix(vec3(.30,.57,.64),vec3(.8,.26,.08),tone*.6);}
        else {float d=length(gl_PointCoord-.5)*2.0; if(d>1.0)discard;alpha=(exp(-d*d*5.0)*.82+.18*(1.0-d))*intensity;}
        if(stars>.5){color=vec3(.50,.64,.69);alpha*=.43;}
        gl_FragColor=vec4(color,alpha);
      }`;
    function compile(type,source){const shader=gl.createShader(type);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(shader));return shader;}
    const program=gl.createProgram();gl.attachShader(program,compile(gl.VERTEX_SHADER,vertexSource));gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fragmentSource));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));gl.useProgram(program);
    const uniforms=Object.fromEntries(['resolution','rotation','pointer','clock','dispersion','stars','lines'].map(n=>[n,gl.getUniformLocation(program,n)]));
    const position=gl.getAttribLocation(program,'position'), seed=gl.getAttribLocation(program,'seed');
    gl.enableVertexAttribArray(position);gl.enableVertexAttribArray(seed);gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE);gl.disable(gl.DEPTH_TEST);
    const N=3840,U=160,V=24,TAU=Math.PI*2;
    const shapes=Array.from({length:5},()=>new Float32Array(N*3));
    const positions=new Float32Array(N*3),seeds=new Float32Array(N);
    const normalize=a=>{const d=Math.hypot(...a)||1;return a.map(x=>x/d);};
    const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
    const knot=t=>[(1.65+.58*Math.cos(3*t))*Math.cos(2*t),(1.65+.58*Math.cos(3*t))*Math.sin(2*t),.70*Math.sin(3*t)];
    for(let i=0;i<N;i++){
      seeds[i]=(i*.61803398875)%1;
      const u=Math.floor(i/V),v=i%V,t=u/U*TAU,a=v/V*TAU;
      const c=knot(t),nxt=knot(t+.001),tangent=normalize(nxt.map((x,k)=>x-c[k]));
      const normal=normalize(cross(tangent,[0,0,1])),binormal=cross(tangent,normal);
      const tube=c.map((x,k)=>x+.35*(normal[k]*Math.cos(a)+binormal[k]*Math.sin(a)));
      shapes[0].set(tube,i*3);
      const face=Math.floor(i/640),j=i%640,s=(j%32)/31*3.4-1.7,q=Math.floor(j/32)/19*3.4-1.7;
      const cube=face===0?[1.7,s,q]:face===1?[-1.7,s,q]:face===2?[s,1.7,q]:face===3?[s,-1.7,q]:face===4?[s,q,1.7]:[s,q,-1.7];
      shapes[1].set(cube,i*3);
      const phi=(v+.5)/V*Math.PI;
      shapes[2].set([2.25*Math.sin(phi)*Math.cos(t),2.25*Math.cos(phi),2.25*Math.sin(phi)*Math.sin(t)],i*3);
      const ring=Math.floor(i/1280),angle=(i%1280)/1280*TAU*8,thickness=((i%13)/12-.5)*.25;
      const ringP=[(2.1+thickness)*Math.cos(angle),(2.1+thickness)*Math.sin(angle),Math.sin(i*2.4)*.07];
      if(ring===1) shapes[3].set([ringP[0]*.5-ringP[2]*.866,ringP[1]*.5,ringP[0]*.866+ringP[1]*.75],i*3);
      else if(ring===2) shapes[3].set([ringP[0]*.5,ringP[1]*.5-ringP[2]*.866,-ringP[1]*.866+ringP[0]*.75],i*3);
      else shapes[3].set(ringP,i*3);
      const r=.25+Math.sqrt(i/N)*2.45, theta=i*.064+(i%3)*TAU/3;
      shapes[4].set([Math.cos(theta)*r,Math.sin(theta)*r*.65,Math.sin(r*2.6)*.65+Math.sin(i*3)*.1],i*3);
    }
    const topology=[];
    for(let mode=0;mode<5;mode++){
      const edges=[];
      if(mode===1){for(let i=0;i<N;i++){if(i%32<31)edges.push(i,i+1);if(i%640<608)edges.push(i,i+32);}}
      else if(mode===3||mode===4){for(let i=0;i<N-1;i++)if(i%3===0)edges.push(i,i+1);}
      else {for(let u=0;u<U;u++)for(let v=0;v<V;v++){const i=u*V+v;edges.push(i,((u+1)%U)*V+v);if(u%4===0 && v<V-1)edges.push(i,i+1);}}
      const buffer=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,buffer);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(edges),gl.STATIC_DRAW);topology.push({buffer,count:edges.length});
    }
    const vertexBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);gl.bufferData(gl.ARRAY_BUFFER,positions.byteLength,gl.DYNAMIC_DRAW);
    const seedBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,seedBuffer);gl.bufferData(gl.ARRAY_BUFFER,seeds,gl.STATIC_DRAW);
    const starPositions=new Float32Array(480*3), starSeeds=new Float32Array(480);
    let randSeed=721;const random=()=>{randSeed=(randSeed*1664525+1013904223)>>>0;return randSeed/4294967296;};
    for(let i=0;i<480;i++){starPositions.set([(random()-.5)*22,(random()-.5)*15,-4-random()*10],i*3);starSeeds[i]=random();}
    const starBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,starBuffer);gl.bufferData(gl.ARRAY_BUFFER,starPositions,gl.STATIC_DRAW);
    const starSeedBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,starSeedBuffer);gl.bufferData(gl.ARRAY_BUFFER,starSeeds,gl.STATIC_DRAW);
    function bind(vertex,seedB){gl.bindBuffer(gl.ARRAY_BUFFER,vertex);gl.vertexAttribPointer(position,3,gl.FLOAT,false,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,seedB);gl.vertexAttribPointer(seed,1,gl.FLOAT,false,0,0);}
    renderScene=()=>{
      gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(uniforms.resolution,width,height);gl.uniform2f(uniforms.rotation,rx,ry);gl.uniform2f(uniforms.pointer,px,py);gl.uniform1f(uniforms.clock,time);
      gl.uniform1f(uniforms.dispersion,0);gl.uniform1f(uniforms.stars,1);gl.uniform1f(uniforms.lines,0);bind(starBuffer,starSeedBuffer);gl.drawArrays(gl.POINTS,0,480);
      const a=Math.max(0,Math.min(4,Math.floor(currentScene))),b=Math.min(a+1,4),f=currentScene-a,blend=f*f*(3-2*f);
      for(let i=0;i<positions.length;i++)positions[i]=shapes[a][i]*(1-blend)+shapes[b][i]*blend;
      gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);gl.bufferSubData(gl.ARRAY_BUFFER,0,positions);bind(vertexBuffer,seedBuffer);
      gl.uniform1f(uniforms.stars,0);gl.uniform1f(uniforms.dispersion,explosion);
      gl.uniform1f(uniforms.lines,1);const edge=topology[Math.min(4,Math.round(currentScene))];gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,edge.buffer);gl.drawElements(gl.LINES,edge.count,gl.UNSIGNED_SHORT,0);
      gl.uniform1f(uniforms.lines,0);gl.drawArrays(gl.POINTS,0,N);
    };
  } catch(error) { available=false; console.error('3D sahne başlatılamadı:',error); }
}
let fallbackCanvas = null;
function fallback(){
  if(fallbackCanvas){available=true;requestFrame();return;}
  // Ayrı yüzey: WebGL bağlamı alınmış bir canvas sonradan 2D bağlama geçemez.
  fallbackCanvas=document.createElement('canvas');
  fallbackCanvas.id='universe-fallback';
  fallbackCanvas.setAttribute('aria-hidden','true');
  Object.assign(fallbackCanvas.style,{position:'absolute',inset:'0',width:'100%',height:'100%',pointerEvents:'none'});
  canvas.insertAdjacentElement('afterend',fallbackCanvas);
  const ctx=fallbackCanvas.getContext('2d');
  if(!ctx){available=false;motion.disabled=true;explode.disabled=true;document.querySelector('.interaction-hint').textContent=translate('SAHNE BAŞLATILAMADI');return;}
  available=true;
  motion.disabled=false;explode.disabled=false;
  const N=1920,V=16,U=N/V,TAU=Math.PI*2;
  const forms=Array.from({length:5},()=>new Float32Array(N*3));
  const norm=a=>{const d=Math.hypot(...a)||1;return a.map(v=>v/d);};
  const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  const knot=t=>[(1.65+.58*Math.cos(3*t))*Math.cos(2*t),(1.65+.58*Math.cos(3*t))*Math.sin(2*t),.7*Math.sin(3*t)];
  for(let i=0;i<N;i++){
    const t=Math.floor(i/V)/U*TAU,a=(i%V)/V*TAU,c=knot(t),next=knot(t+.001);
    const tangent=norm(next.map((x,k)=>x-c[k])),n=norm(cross(tangent,[0,0,1])),b=cross(tangent,n);
    forms[0].set(c.map((x,k)=>x+.35*(n[k]*Math.cos(a)+b[k]*Math.sin(a))),i*3);
    const face=Math.floor(i/320),j=i%320,s=(j%20)/19*3.4-1.7,q=Math.floor(j/20)/15*3.4-1.7;
    forms[1].set(face===0?[1.7,s,q]:face===1?[-1.7,s,q]:face===2?[s,1.7,q]:face===3?[s,-1.7,q]:face===4?[s,q,1.7]:[s,q,-1.7],i*3);
    const phi=((i%V)+.5)/V*Math.PI;
    forms[2].set([2.25*Math.sin(phi)*Math.cos(t),2.25*Math.cos(phi),2.25*Math.sin(phi)*Math.sin(t)],i*3);
    const ring=Math.floor(i/640),angle=(i%640)/640*TAU*4,radius=2.1+((i%11)/10-.5)*.22;
    const x=radius*Math.cos(angle),y=radius*Math.sin(angle),z=Math.sin(i*2.4)*.07;
    forms[3].set(ring===0?[x,y,z]:ring===1?[x*.5-z*.866,y*.5,x*.866+y*.75]:[x*.5,y*.5-z*.866,-y*.866+x*.75],i*3);
    const r=.25+Math.sqrt(i/N)*2.45,theta=i*.128+(i%3)*TAU/3;
    forms[4].set([Math.cos(theta)*r,Math.sin(theta)*r*.65,Math.sin(r*2.6)*.65+Math.sin(i*3)*.1],i*3);
  }
  const stars=Array.from({length:180},(_,i)=>({x:(Math.sin(i*127.1)*43758.5453)%1,y:(Math.sin(i*311.7)*19341.331)%1,r:.4+(i%4)*.25}));
  let lastWidth=0,lastHeight=0;
  renderScene=()=>{
    if(width!==lastWidth||height!==lastHeight){
      const d=Math.min(devicePixelRatio||1,1.5);
      fallbackCanvas.width=Math.round(width*d);fallbackCanvas.height=Math.round(height*d);
      ctx.setTransform(d,0,0,d,0,0);lastWidth=width;lastHeight=height;
    }
    ctx.clearRect(0,0,width,height);
    ctx.globalCompositeOperation='source-over';ctx.fillStyle='#a8d6df';
    for(const s of stars){ctx.globalAlpha=.12+.12*(1+Math.sin(time*.6+s.x*40));ctx.fillRect(Math.abs(s.x)*width,Math.abs(s.y)*height,s.r,s.r);}
    const mobile=width<=600,scale=height*(mobile?.525:1.025),ox=width*(mobile?.5:.65),oy=height*(mobile?.30:.4825);
    const ax=rx+py,ay=ry+px,cx=Math.cos(ax),sx=Math.sin(ax),cy=Math.cos(ay),sy=Math.sin(ay);
    const mode=Math.max(0,Math.min(4,Math.floor(currentScene))),next=Math.min(mode+1,4),fraction=currentScene-mode,blend=fraction*fraction*(3-2*fraction);
    const points=[];
    for(let i=0;i<N;i++){
      const k=i*3,seed=(i*.61803398875)%1;
      let x=forms[mode][k]*(1-blend)+forms[next][k]*blend,y=forms[mode][k+1]*(1-blend)+forms[next][k+1]*blend,z=forms[mode][k+2]*(1-blend)+forms[next][k+2]*blend;
      const length=Math.hypot(x,y,z)||1,expand=1+Math.sin(time*.65)*.018+explosion*(1+((seed*47.13)%1)*2.5)/length;
      x*=expand;y*=expand;z*=expand;
      const xx=x*cy+z*sy,zz=-x*sy+z*cy,yy=y*cx-zz*sx,depth=y*sx+zz*cx,perspective=scale/Math.max(1,8-depth);
      points.push({x:ox+xx*perspective,y:oy-yy*perspective,z:depth,orange:(seed*13.13)%1>.77,size:(.6+Math.pow((seed*19.41)%1,9)*1.9)*8/Math.max(1,8-depth)});
    }
    ctx.globalCompositeOperation='lighter';
    const edgeMode=Math.min(4,Math.round(currentScene));
    ctx.lineWidth=.6;ctx.strokeStyle='#679eae';ctx.globalAlpha=.19;ctx.beginPath();
    for(let i=0;i<N;i++){
      const neighbors=edgeMode===1?[(i%20<19)?i+1:-1,(i%320<300)?i+20:-1]:(edgeMode===3||edgeMode===4)?[i%3===0?i+1:-1]:[((i+V)%N),i%64<16&&i%V<V-1?i+1:-1];
      for(const j of neighbors){if(j<0||j>=N)continue;const a=points[i],b=points[j];ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);}
    }
    ctx.stroke();
    points.sort((a,b)=>a.z-b.z);
    for(const p of points){
      const alpha=Math.max(.12,Math.min(1,.55+p.z*.16));ctx.fillStyle=p.orange?'#ff743d':'#b0e7f4';
      if(p.size>1.3){ctx.globalAlpha=alpha*.10;ctx.beginPath();ctx.arc(p.x,p.y,p.size*3,0,TAU);ctx.fill();}
      ctx.globalAlpha=alpha;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,TAU);ctx.fill();
    }
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';
  };
  requestFrame();
}
if(!available)fallback();
canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();available=false;fallback();});
function resize(){width=innerWidth;height=innerHeight;const d=Math.min(devicePixelRatio||1,1.75);canvas.width=Math.round(width*d);canvas.height=Math.round(height*d);if(gl)gl.viewport(0,0,canvas.width,canvas.height);onScroll();requestFrame();}
window.addEventListener('resize',resize,{passive:true});
updateMotion();resize();

function sceneLabel(){const names=window.PortfolioI18n?.language==='en'?sceneNames:['TEKİLLİK','YAPI','SİNİR AĞI','KESİŞİM','SIRADAKİ BAĞLANTI'];return `0${active+1} / ${names[active]}`;}
function updateSpread(){explode.innerHTML=`${translate(spread?'TOPLA':'DAĞIT')} <span>⊹</span>`;explode.title=translate(spread?'TOPLA':'Parçacıkları dağıt');}
function updateLocalizedControls(){updateMotion();updateSpread();updateDetail();document.getElementById('scene-name').textContent=sceneLabel();if(!available)document.querySelector('.interaction-hint').textContent=translate('SAHNE BAŞLATILAMADI');onScroll();}
window.addEventListener('portfolio-languagechange',updateLocalizedControls);
updateLocalizedControls();
