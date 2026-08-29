// Loader
window.addEventListener('load', function(){
  setTimeout(function(){
    var l = document.getElementById('loader');
    if(l) {
      l.style.opacity = '0';
      setTimeout(function(){ l.style.display = 'none'; cntStart(); }, 600);
    } else {
      cntStart();
    }
  }, 2000);
});

// Canvas Animation
function initBgCanvas(canvasId) {
  var cv = document.getElementById(canvasId);
  if (!cv) return;
  var cx = cv.getContext('2d');
  var cW, cH, pts = [];
  function rsz(){ cW = cv.width = window.innerWidth; cH = cv.height = window.innerHeight; }
  rsz(); window.addEventListener('resize', rsz);
  function Pt(){ this.x=Math.random()*cW; this.y=Math.random()*cH; this.vx=(Math.random()-0.5)*0.4; this.vy=(Math.random()-0.5)*0.4; this.r=Math.random()*1.5+0.5; this.a=Math.random()*0.5+0.1; }
  Pt.prototype.upd = function(){ this.x+=this.vx; this.y+=this.vy; if(this.x<0||this.x>cW||this.y<0||this.y>cH){ this.x=Math.random()*cW; this.y=Math.random()*cH; } };
  Pt.prototype.drw = function(){ cx.save(); cx.globalAlpha=this.a; cx.fillStyle='#00D4FF'; cx.beginPath(); cx.arc(this.x,this.y,this.r,0,Math.PI*2); cx.fill(); cx.restore(); };
  for(var i=0;i<80;i++) pts.push(new Pt());
  function drwCon(){ for(var i=0;i<pts.length;i++) for(var j=i+1;j<pts.length;j++){ var dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy); if(d<120){ cx.save(); cx.globalAlpha=(1-d/120)*0.12; cx.strokeStyle='#00D4FF'; cx.lineWidth=0.5; cx.beginPath(); cx.moveTo(pts[i].x,pts[i].y); cx.lineTo(pts[j].x,pts[j].y); cx.stroke(); cx.restore(); } } }
  function anBg(){ cx.clearRect(0,0,cW,cH); pts.forEach(function(p){p.upd();p.drw();}); drwCon(); requestAnimationFrame(anBg); }
  anBg();
}

initBgCanvas('bgc');
initBgCanvas('loader-bgc');

// Nav scroll
window.addEventListener('scroll', function(){ var n=document.getElementById('nav'); if(n) n.classList.toggle('scrolled', window.scrollY>50); });

// Menu toggle
function tm(){ 
  var nl=document.getElementById('nl'),hbg=document.getElementById('hbg'); 
  nl.classList.toggle('open'); 
  hbg.classList.toggle('open');
  document.body.style.overflow = nl.classList.contains('open') ? 'hidden' : '';
}
function cm(){ 
  document.getElementById('nl').classList.remove('open'); 
  document.getElementById('hbg').classList.remove('open');
  document.body.style.overflow = '';
}

// Multi-page navigation
function cm(){
  var nl=document.getElementById('nl'),hbg=document.getElementById('hbg');
  if(nl) nl.classList.remove('open');
  if(hbg) hbg.classList.remove('open');
  document.body.style.overflow='';
}
// Reveal
function ra(){ document.querySelectorAll('.rev').forEach(function(el){ el.classList.add('vis'); }); }
setTimeout(ra, 2500);

// Counters
var csDone = false;
function cntStart(){
  if(csDone) return; csDone = true;
  document.querySelectorAll('.cnt').forEach(function(el){
    var t = parseInt(el.getAttribute('data-t')), cur = 0, step = t/60;
    var lbl = el.nextSibling ? (el.nextSibling.textContent||'') : '';
    var isPct = lbl.indexOf('%') > -1;
    var tmr = setInterval(function(){
      cur += step;
      if(cur >= t){ cur = t; clearInterval(tmr); }
      el.textContent = Math.floor(cur) + (isPct ? '' : '+');
    }, 25);
  });
}

// Testimonials
var tci = 0, tcn = document.querySelectorAll('.tslide').length || 4;
function st(d){ tcn = document.querySelectorAll('.tslide').length || 4; tci=(tci+d+tcn)%tcn; ut(); }
function gt(i){ tcn = document.querySelectorAll('.tslide').length || 4; tci=i; ut(); }
function ut(){ var tr=document.getElementById('ttrack'); if(tr) tr.style.transform='translateX(-'+tci*100+'%)'; document.querySelectorAll('.tdot').forEach(function(d,i){ d.classList.toggle('active',i===tci); }); }
setInterval(function(){ st(1); }, 5000);

// Blog filter
var bcat = 'all';
function sc(el,cat){ bcat=cat; document.querySelectorAll('.bcat').forEach(function(c){c.classList.remove('active');}); el.classList.add('active'); fb(); }
function fb(){ var q=(document.getElementById('bsinp')?document.getElementById('bsinp').value:'').toLowerCase(); document.querySelectorAll('.bcard').forEach(function(c){ var ok=(bcat==='all'||c.getAttribute('data-cat')===bcat)&&(!q||c.textContent.toLowerCase().indexOf(q)>-1); c.style.display=ok?'block':'none'; }); }

// Form submit
function sf(){
  var v=true,
      n=document.getElementById('fn').value.trim(),
      p=document.getElementById('fp').value.trim(),
      e=document.getElementById('fe').value.trim(),
      m=document.getElementById('fm').value.trim();

  // Clear all errors
  document.querySelectorAll('.ferr').forEach(function(x){ x.style.display='none'; });

  // Validate
  if(!n){ document.getElementById('fne').style.display='block'; v=false; }
  if(!p||p.length<10){ document.getElementById('fpe').style.display='block'; v=false; }
  if(!e||e.indexOf('@')<0){ document.getElementById('fee').style.display='block'; v=false; }
  if(!m){ document.getElementById('fme').style.display='block'; v=false; }

  if(v){
    // Build WhatsApp message
    var waMsg = '🙏 Hello FanKO AI Digital Solutions!%0A%0A'
              + '👤 *Name:* ' + encodeURIComponent(n) + '%0A'
              + '📞 *Phone:* ' + encodeURIComponent(p) + '%0A'
              + '📧 *Email:* ' + encodeURIComponent(e) + '%0A%0A'
              + '💬 *Message:*%0A' + encodeURIComponent(m);

    // Open WhatsApp immediately
    window.open('https://wa.me/918825996702?text=' + waMsg, '_blank');

    // Show success message
    document.getElementById('fcon').style.display='none';
    document.getElementById('fsuc').style.display='block';
  }
}

// Init
var tsec = document.getElementById('tsec');
if(tsec) tsec.style.display = 'block';
ra();
