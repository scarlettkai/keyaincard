javascript:(function(){
if(document.getElementById('GxA_overlay'))return;
var h=location.host;

var playSound=function(type){
    try{
        var ctx=new (window.AudioContext||window.webkitAudioContext)();
        var osc=ctx.createOscillator();
        var gain=ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        if(type==='unlock'){
            osc.frequency.value=880;
            gain.gain.value=0.15;
            osc.start();
            gain.gain.exponentialRampToValueAtTime(0.00001,ctx.currentTime+0.4);
            osc.stop(ctx.currentTime+0.4);
        }else if(type==='grant'){
            osc.frequency.value=1318.52;
            gain.gain.value=0.12;
            osc.start();
            gain.gain.exponentialRampToValueAtTime(0.00001,ctx.currentTime+0.3);
            osc.stop(ctx.currentTime+0.3);
            setTimeout(function(){
                var osc2=ctx.createOscillator();
                var gain2=ctx.createGain();
                osc2.connect(gain2);
                gain2.connect(ctx.destination);
                osc2.frequency.value=1046.50;
                gain2.gain.value=0.1;
                osc2.start();
                gain2.gain.exponentialRampToValueAtTime(0.00001,ctx.currentTime+0.3);
                osc2.stop(ctx.currentTime+0.3);
            },200);
        }else if(type==='error'){
            osc.frequency.value=440;
            gain.gain.value=0.1;
            osc.start();
            gain.gain.exponentialRampToValueAtTime(0.00001,ctx.currentTime+0.2);
            osc.stop(ctx.currentTime+0.2);
        }
        ctx.resume();
    }catch(e){}
};

var style=document.createElement('style');
style.textContent=`
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,600;14..32,800&display=swap');
#GxA_overlay{position:fixed;inset:0;background:rgba(0,0,0,0.85);backdrop-filter:blur(20px);z-index:2147483647;display:flex;align-items:center;justify-content:center;animation:gxaFade 0.4s ease;}
@keyframes gxaFade{from{opacity:0;backdrop-filter:blur(0);}to{opacity:1;backdrop-filter:blur(20px);}}
.gxa-card{background:linear-gradient(145deg,rgba(10,10,20,0.95),rgba(5,5,15,0.98));border-radius:48px;border:1px solid rgba(0,255,255,0.3);box-shadow:0 0 60px rgba(0,255,255,0.2),0 25px 50px -12px black;width:380px;max-width:92vw;padding:32px 28px 36px;text-align:center;animation:gxaSlide 0.5s cubic-bezier(0.2,0.9,0.4,1.1);}
@keyframes gxaSlide{from{transform:translateY(40px) scale(0.96);opacity:0;}to{transform:translateY(0) scale(1);opacity:1;}}
.gxa-badge{font-size:10px;font-weight:600;letter-spacing:3px;color:#0ff;background:rgba(0,255,255,0.1);display:inline-block;padding:5px 14px;border-radius:40px;margin-bottom:18px;}
.gxa-title{font-size:44px;font-weight:800;background:linear-gradient(135deg,#fff,#0ff,#c0f);background-clip:text;-webkit-background-clip:text;color:transparent;margin-bottom:6px;filter:drop-shadow(0 0 15px rgba(0,255,255,0.5));}
.gxa-sub{font-size:11px;color:#8a8ac0;letter-spacing:1.5px;margin-bottom:28px;border-bottom:1px dashed rgba(0,255,255,0.3);display:inline-block;padding-bottom:6px;}
.gxa-input-wrap{margin:20px 0 16px;}
.gxa-input{width:100%;background:#05070f;border:2px solid #1e2a4a;border-radius:60px;padding:15px 22px;font-size:17px;font-family:'Fira Mono',monospace;letter-spacing:4px;text-align:center;color:#0ff;outline:none;transition:all 0.2s;box-sizing:border-box;}
.gxa-input:focus{border-color:#0ff;box-shadow:0 0 20px rgba(0,255,255,0.4);}
.gxa-input::placeholder{color:#2a2a55;letter-spacing:2px;font-size:12px;}
.gxa-btn{width:100%;background:linear-gradient(95deg,#0af,#0cf);border:none;border-radius:60px;padding:14px;font-weight:800;font-size:13px;letter-spacing:2px;color:#000;cursor:pointer;transition:all 0.2s;margin-top:4px;text-transform:uppercase;}
.gxa-btn:hover{transform:scale(0.97);background:linear-gradient(95deg,#0ff,#0af);box-shadow:0 0 25px #0ff;}
.gxa-error{color:#ff3b6f;font-size:12px;margin-top:14px;min-height:28px;font-weight:500;}
.gxa-loader{display:none;flex-direction:column;align-items:center;gap:16px;margin:14px 0;}
.gxa-status{font-size:12px;color:#a0a0e0;background:rgba(0,255,255,0.1);padding:7px 18px;border-radius:50px;backdrop-filter:blur(4px);}
.gxa-footer{display:flex;justify-content:center;gap:24px;margin-top:26px;font-size:9px;color:#4a4a7a;}
.gxa-close{position:absolute;top:16px;right:20px;color:#6a6a99;font-size:22px;cursor:pointer;transition:0.2s;line-height:1;}
.gxa-close:hover{color:#0ff;transform:rotate(90deg);}
`;
document.head.appendChild(style);

var ov=document.createElement('div');
ov.id='GxA_overlay';
ov.innerHTML='<div class="gxa-card" style="position:relative;"><span class="gxa-close" id="gxaClose">✕</span><div class="gxa-badge">⚡ GxA CYBER ENGINE ⚡</div><div class="gxa-title">GxA</div><div class="gxa-sub">SECURE ACCESS / BYPASS v5</div><div class="gxa-input-wrap"><input class="gxa-input" id="gxaInput" type="password" placeholder="•••• ENTER KEY ••••" maxlength="24" autocomplete="off"></div><div class="gxa-error" id="gxaError"></div><button class="gxa-btn" id="gxaBtn">⟡ UNLOCK & BYPASS ⟡</button><div class="gxa-loader" id="gxaLoader"><svg width="130" height="130" viewBox="0 0 140 140"><circle cx="70" cy="70" r="60" fill="#0a0a14" stroke="#1f2a4a" stroke-width="6"/><circle id="gxaArc" cx="70" cy="70" r="60" fill="none" stroke="#0ff" stroke-width="8" stroke-dasharray="377" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 70 70)"/><text id="gxaTimer" x="70" y="82" text-anchor="middle" fill="#0ff" font-size="44" font-weight="bold" font-family="monospace">5</text></svg><div class="gxa-status" id="gxaStatus">⟳ INITIALIZING...</div></div><div class="gxa-footer"><span>✦ GxA ENGINE</span><span>🔒 ENCRYPTED</span></div></div>';
document.body.appendChild(ov);

var inp=document.getElementById('gxaInput');
var btn=document.getElementById('gxaBtn');
var errDiv=document.getElementById('gxaError');
var loaderDiv=document.getElementById('gxaLoader');
var arc=document.getElementById('gxaArc');
var timerEl=document.getElementById('gxaTimer');
var statusEl=document.getElementById('gxaStatus');
var closeBtn=document.getElementById('gxaClose');

closeBtn.onclick=function(){ov.remove();};
ov.onclick=function(e){if(e.target===ov)ov.remove();};

var countdownInt=null;

function showLoader(seconds=5){
    inp.style.display='none';
    btn.style.display='none';
    errDiv.style.display='none';
    loaderDiv.style.display='flex';
    var total=377;
    var s=seconds;
    timerEl.textContent=s;
    arc.setAttribute('stroke-dashoffset','0');
    if(countdownInt)clearInterval(countdownInt);
    countdownInt=setInterval(function(){
        s--;
        timerEl.textContent=s>=0?s:0;
        var offset=(total/seconds)*(seconds-s);
        arc.setAttribute('stroke-dashoffset',offset);
        if(s<=0){
            clearInterval(countdownInt);
            timerEl.textContent='⚡';
            arc.setAttribute('stroke','#4ade80');
            statusEl.textContent='🚀 UNLOCKING...';
        }
    },1000);
}

function hideLoaderAndRedirect(url){
    if(countdownInt)clearInterval(countdownInt);
    statusEl.textContent='✅ REDIRECTING...';
    setTimeout(function(){ov.remove();window.location.href=url;},600);
}

function bypassSite(domain,cb){
    var proto=domain==='rodaemotor.com'?'http':'https';
    fetch(proto+'://'+domain+'/api/session-info',{credentials:'include',headers:{'Accept':'*/*'}})
    .then(function(r){return r.json();})
    .then(function(d){
        if(!d.sessionToken){statusEl.textContent='❌ No session!';return;}
        statusEl.textContent='🔑 FETCHING TOKEN...';
        var progress=(d.totalStage||0)+1;
        var payload=encodeURIComponent(JSON.stringify({"0":{"json":{"token":d.sessionToken,"progress":progress,"stageId":d.stageId}}}));
        fetch(proto+'://'+domain+'/api/trpc/linkSession.nextStage?batch=1&input='+payload,{
            credentials:'include',
            headers:{'trpc-accept':'application/jsonl','x-trpc-source':'nextjs-react','Accept':'*/*'}
        }).then(function(r){return r.text();})
        .then(function(t){
            var dest=null;
            t.trim().split('\n').forEach(function(l){
                try{
                    var j=JSON.parse(l);
                    if(j&&j.json&&Array.isArray(j.json)&&j.json[2]){
                        var dd=j.json[2][0][0];
                        if(dd){if(dd.destinationLink)dest=dd.destinationLink;if(dd.url)dest=dd.url;}
                    }
                }catch(e){}
            });
            cb(dest);
        });
    })
    .catch(function(e){statusEl.textContent='❌ Error: '+e.message;});
}

btn.onclick=function(){
    var val=inp.value.trim().toUpperCase();
    // KEY SEKARANG: GxA (case sensitive, huruf G besar x kecil A besar? pake uppercase aja biar aman)
    if(val !== 'GXA'){
        errDiv.textContent='⛔ INVALID KEY | ACCESS DENIED';
        playSound('error');
        inp.value='';
        inp.focus();
        return;
    }
    errDiv.textContent='';
    playSound('grant');
    
    if(h.includes('tarviral.com')||h.includes('rodaemotor.com')){
        showLoader(6);
        setTimeout(function(){
            if(h.includes('tarviral.com')){
                bypassSite('tarviral.com',function(dest){
                    if(dest) hideLoaderAndRedirect(dest);
                    else statusEl.textContent='❌ BYPASS FAILED';
                });
            }else if(h.includes('rodaemotor.com')){
                bypassSite('rodaemotor.com',function(dest){
                    if(dest) hideLoaderAndRedirect(dest);
                    else statusEl.textContent='❌ FAILED';
                });
            }
        },1200);
    }else if(h.includes('aincradmods.com')){
        showLoader(3);
        fetch('https://aincradmods.com/getkey.data',{method:'POST',credentials:'include',headers:{'content-type':'application/x-www-form-urlencoded'}})
        .then(function(){hideLoaderAndRedirect('https://alpharede.com/aincrad2');})
        .catch(function(){hideLoaderAndRedirect('https://alpharede.com/aincrad2');});
    }else if(h.includes('alpharede.com')){
        showLoader(2);
        setTimeout(function(){hideLoaderAndRedirect('https://alpharede.com/aincrad2');},1000);
    }else if(h.includes('horoscopeonday.com')){
        showLoader(3);
        setTimeout(function(){
            window.location.href = 'https://horoscopeonday.com/padroes-de-movimento-funcionais-por-que-seus-treinos-devem-imitar-a-vida-real/';
            ov.remove();
        },1500);
    }else{
        errDiv.textContent='⚠️ Open supported site first! (aincradmods, tarviral, rodaemotor, alpharede, horoscopeonday)';
        playSound('error');
    }
};

inp.addEventListener('keydown',function(e){if(e.key==='Enter')btn.click();});
inp.focus();
playSound('unlock');
})();    countdownInt=setInterval(function(){
        s--;
        timerEl.textContent=s>=0?s:0;
        var offset=(total/seconds)*(seconds-s);
        arc.setAttribute('stroke-dashoffset',offset);
        if(s<=0){
            clearInterval(countdownInt);
            timerEl.textContent='⚡';
            arc.setAttribute('stroke','#4ade80');
            statusEl.textContent='🚀 UNLOCKING...';
        }
    },1000);
}

function hideLoaderAndRedirect(url){
    if(countdownInt)clearInterval(countdownInt);
    statusEl.textContent='✅ REDIRECTING...';
    setTimeout(function(){ov.remove();window.location.href=url;},600);
}

function bypassSite(domain,cb){
    var proto=domain==='rodaemotor.com'?'http':'https';
    fetch(proto+'://'+domain+'/api/session-info',{credentials:'include',headers:{'Accept':'*/*'}})
    .then(function(r){return r.json();})
    .then(function(d){
        if(!d.sessionToken){statusEl.textContent='❌ No session!';return;}
        statusEl.textContent='🔑 FETCHING TOKEN...';
        var progress=(d.totalStage||0)+1;
        var payload=encodeURIComponent(JSON.stringify({"0":{"json":{"token":d.sessionToken,"progress":progress,"stageId":d.stageId}}}));
        fetch(proto+'://'+domain+'/api/trpc/linkSession.nextStage?batch=1&input='+payload,{
            credentials:'include',
            headers:{'trpc-accept':'application/jsonl','x-trpc-source':'nextjs-react','Accept':'*/*'}
        }).then(function(r){return r.text();})
        .then(function(t){
            var dest=null;
            t.trim().split('\n').forEach(function(l){
                try{
                    var j=JSON.parse(l);
                    if(j&&j.json&&Array.isArray(j.json)&&j.json[2]){
                        var dd=j.json[2][0][0];
                        if(dd){if(dd.destinationLink)dest=dd.destinationLink;if(dd.url)dest=dd.url;}
                    }
                }catch(e){}
            });
            cb(dest);
        });
    })
    .catch(function(e){statusEl.textContent='❌ Error: '+e.message;});
}

btn.onclick=function(){
    var val=inp.value.trim().toUpperCase();
    if(val!=='@AKASHMODER' && val!=='GXA2025'){
        errDiv.textContent='⛔ INVALID KEY | ACCESS DENIED';
        playSound('error');
        inp.value='';
        inp.focus();
        return;
    }
    errDiv.textContent='';
    playSound('grant');
    
    if(h.includes('tarviral.com')||h.includes('rodaemotor.com')){
        showLoader(6);
        setTimeout(function(){
            if(h.includes('tarviral.com')){
                bypassSite('tarviral.com',function(dest){
                    if(dest) hideLoaderAndRedirect(dest);
                    else statusEl.textContent='❌ BYPASS FAILED';
                });
            }else if(h.includes('rodaemotor.com')){
                bypassSite('rodaemotor.com',function(dest){
                    if(dest) hideLoaderAndRedirect(dest);
                    else statusEl.textContent='❌ FAILED';
                });
            }
        },1200);
    }else if(h.includes('aincradmods.com')){
        showLoader(3);
        fetch('https://aincradmods.com/getkey.data',{method:'POST',credentials:'include',headers:{'content-type':'application/x-www-form-urlencoded'}})
        .then(function(){hideLoaderAndRedirect('https://alpharede.com/aincrad2');})
        .catch(function(){hideLoaderAndRedirect('https://alpharede.com/aincrad2');});
    }else if(h.includes('alpharede.com')){
        showLoader(2);
        setTimeout(function(){hideLoaderAndRedirect('https://alpharede.com/aincrad2');},1000);
    }else{
        errDiv.textContent='⚠️ Open aincradmods.com/getkey or target site first!';
        playSound('error');
    }
};

inp.addEventListener('keydown',function(e){if(e.key==='Enter')btn.click();});
inp.focus();
playSound('unlock');
})();
