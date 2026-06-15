(function(){
if(document.getElementById('_akg_overlay'))return;
var h=location.host;
var style=document.createElement('style');
style.textContent='@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;600&display=swap");#_akg_overlay{position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:2147483647;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);}#_akg_box{background:linear-gradient(135deg,#0d0d1a,#111128);border:1px solid #6c47ff44;border-radius:20px;padding:28px 24px 20px;width:320px;max-width:94vw;box-shadow:0 0 60px #6c47ff22,0 0 0 1px #6c47ff22;text-align:center;font-family:"Rajdhani",sans-serif;}#_akg_title{font-family:"Orbitron",sans-serif;font-size:13px;font-weight:900;letter-spacing:3px;color:#6c47ff;text-transform:uppercase;margin-bottom:2px;}#_akg_sub{font-size:12px;color:#555;letter-spacing:1px;margin-bottom:20px;}#_akg_inp_wrap{position:relative;margin-bottom:14px;}#_akg_inp{width:100%;background:#0a0a18;border:1.5px solid #6c47ff55;border-radius:10px;padding:12px 16px;color:#fff;font-size:16px;font-family:"Orbitron",sans-serif;letter-spacing:4px;text-align:center;outline:none;box-sizing:border-box;transition:border .3s;}#_akg_inp:focus{border-color:#6c47ff;}#_akg_inp::placeholder{color:#333;letter-spacing:2px;font-size:13px;}#_akg_btn{width:100%;background:linear-gradient(135deg,#6c47ff,#a855f7);border:none;border-radius:10px;padding:13px;color:#fff;font-family:"Orbitron",sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;cursor:pointer;transition:opacity .2s;margin-bottom:16px;}#_akg_btn:hover{opacity:.85;}#_akg_btn:disabled{opacity:.4;cursor:not-allowed;}#_akg_err{color:#f87171;font-size:12px;margin-bottom:10px;min-height:16px;letter-spacing:1px;}#_akg_circle_wrap{display:none;flex-direction:column;align-items:center;margin-bottom:16px;}#_akg_status{font-size:12px;color:#888;letter-spacing:1px;margin-top:12px;}#_akg_tg{display:flex;align-items:center;justify-content:center;gap:6px;color:#555;font-size:11px;text-decoration:none;letter-spacing:1px;transition:color .2s;margin-top:4px;}#_akg_tg:hover{color:#6c47ff;}#_akg_close{position:absolute;top:14px;right:16px;color:#333;font-size:18px;cursor:pointer;line-height:1;}#_akg_close:hover{color:#888;}';
document.head.appendChild(style);
var ov=document.createElement('div');
ov.id='_akg_overlay';
ov.innerHTML='<div id="_akg_box" style="position:relative;"><span id="_akg_close">\u2715<\/span><div id="_akg_title">\u2694 AKASH MODS <\/div><div id="_akg_sub"> POWER BY\ AKASH MODS<\/div><div id="_akg_inp_wrap"><input id="_akg_inp" type="password" placeholder="ENTER ACCESS KEY" maxlength="20"\/><\/div><div id="_akg_err"><\/div><button id="_akg_btn">UNLOCK & GENERATE<\/button><div id="_akg_circle_wrap"><svg width="140" height="140" viewBox="0 0 140 140"><circle cx="70" cy="70" r="60" fill="#0d0d1a" stroke="#1a1a3a" stroke-width="8"\/><circle id="_akg_arc" cx="70" cy="70" r="60" fill="none" stroke="#6c47ff" stroke-width="8" stroke-dasharray="377" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 70 70)"\/><text id="_akg_num" x="70" y="78" text-anchor="middle" fill="#fff" font-size="42" font-weight="bold" font-family="Orbitron,sans-serif">25<\/text><\/svg><div id="_akg_status">\u23f3 Waiting...<\/div><\/div><a id="_akg_tg" href="https:\/\/t.me\/AKASHMODER" target="_blank"><svg width="14" height="14" viewBox="0 0 24 24" fill="#6c47ff"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.26l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.3z"\/><\/svg>t.me\/AKASHMODER<\/a><\/div>';
document.body.appendChild(ov);
var inp=document.getElementById('_akg_inp');
var btn=document.getElementById('_akg_btn');
var err=document.getElementById('_akg_err');
var circleWrap=document.getElementById('_akg_circle_wrap');
var arc=document.getElementById('_akg_arc');
var numEl=document.getElementById('_akg_num');
var statusEl=document.getElementById('_akg_status');
document.getElementById('_akg_close').onclick=function(){ov.remove();};
ov.onclick=function(e){if(e.target===ov)ov.remove();};

function showCircle(status){
  circleWrap.style.display='flex';
  btn.style.display='none';
  inp.style.display='none';
  document.getElementById('_akg_inp_wrap').style.display='none';
  err.style.display='none';
  statusEl.textContent=status||'\u23f3 Processing...';
}

function startCountdown(onDone){
  showCircle('\u23f3 Please wait...');
  var s=25;var total=377;
  numEl.textContent=s;
  arc.setAttribute('stroke','#6c47ff');
  arc.setAttribute('stroke-dashoffset','0');
  var iv=setInterval(function(){
    s--;
    numEl.textContent=s;
    var offset=(total/25)*(25-s);
    arc.setAttribute('stroke-dashoffset',offset);
    if(s<=0){
      clearInterval(iv);
      numEl.textContent='\u26a1';
      arc.setAttribute('stroke','#4ade80');
      statusEl.textContent='\ud83d\ude80 Bypassing...';
      onDone();
    }
  },1000);
}

function bypassSite(domain,cb){
  var proto=domain==='rodaemotor.com'?'http':'https';
  fetch(proto+'://'+domain+'/api/session-info',{credentials:'include',headers:{'Accept':'application/json'}})
  .then(function(r){
    if(!r.ok) throw new Error('HTTP '+r.status);
    return r.json();
  })
  .then(function(d){
    if(!d.sessionToken){statusEl.textContent='\u274c No session found!';return;}
    statusEl.textContent='\ud83d\udd11 Fetching key...';
    var progress=(d.totalStage||0)+1;
    var inp2=encodeURIComponent(JSON.stringify({"0":{"json":{"token":d.sessionToken,"progress":progress,"stageId":d.stageId||1}}}));
    fetch(proto+'://'+domain+'/api/trpc/linkSession.nextStage?batch=1&input='+inp2,{
      credentials:'include',
      headers:{'trpc-accept':'application/jsonl','x-trpc-source':'nextjs-react','Accept':'application/json'}
    }).then(function(r){return r.text();})
    .then(function(t){
      var dest=null;
      try{
        t.trim().split('\n').forEach(function(l){
          if(!l.trim()) return;
          var j=JSON.parse(l);
          if(j&&j.json&&Array.isArray(j.json)&&j.json[2]){
            var dd=j.json[2][0][0];
            if(dd){if(dd.destinationLink)dest=dd.destinationLink;if(dd.url)dest=dd.url;}
          }
        });
      }catch(e){console.warn('Parse error:',e);}
      cb(dest);
    }).catch(function(e){statusEl.textContent='\u274c Fetch error: '+e.message;});
  })
  .catch(function(e){statusEl.textContent='\u274c Error: '+e.message;});
}

function runFullBypass(){
  startCountdown(function(){
    if(h.includes('tarviral.com')){
      bypassSite('tarviral.com',function(dest){
        if(dest){
          statusEl.textContent='\u2705 Done! Redirecting...';
          setTimeout(function(){ov.remove();window.location.href=dest;},800);
        }else{statusEl.textContent='\u274c Bypass failed! Try again.';}
      });
    }else if(h.includes('rodaemotor.com')){
      bypassSite('rodaemotor.com',function(dest){
        if(dest){
          statusEl.textContent='\u2705 Jumping to next stage...';
          setTimeout(function(){ov.remove();window.location.href=dest;},800);
        }else{statusEl.textContent='\u274c Failed! Try again.';}
      });
    }
  });
}

btn.onclick=function(){
  var val=inp.value.trim().toUpperCase();
  if(val!=='@AKASHMODER' && val!=='GXA2025'){
    err.textContent='\u274c Wrong key! Access denied.';
    inp.value='';
    inp.focus();
    return;
  }
  err.textContent='';
  if(h.includes('tarviral.com')||h.includes('rodaemotor.com')){
    runFullBypass();
  }else if(h.includes('aincradmods.com')){
    ov.remove();
    fetch('https://aincradmods.com/getkey.data',{method:'POST',credentials:'include',headers:{'content-type':'application/x-www-form-urlencoded'}})
    .then(function(){window.location.href='https://alpharede.com/aincrad2';})
    .catch(function(){window.location.href='https://alpharede.com/aincrad2';});
  }else if(h.includes('alpharede.com')){
    ov.remove();
    window.location.href='https://alpharede.com/aincrad2';
  }else{
    err.textContent='\u26a0 Open aincradmods.com/getkey or target site first!';
  }
};
inp.addEventListener('keydown',function(e){if(e.key==='Enter')btn.click();});
inp.focus();
})();
