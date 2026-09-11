'use strict';
/* A small, deterministic preference matcher. No network calls or clock lookups. */
const TIMES = Object.freeze({'sunrise':'Sunrise','morning':'Morning','midday':'Midday','golden-hour':'Golden hour','sunset':'Sunset'});
const VIBES = Object.freeze({'surf':'Surf','relax':'Relax','coastal-walk':'Coastal walk','scenery':'Scenery'});
const TIME_NOTES = Object.freeze({
  sunrise:'For your sunrise mood, think early coastal light, not a promise of an ocean sunrise. Verify early access first.',
  morning:'For a morning outing, we lean toward a simple place to begin the day. This is an editorial preference.',
  midday:'For a midday pause, we favor a beach or cove setting. Bring sun protection and check access.',
  'golden-hour':'For a golden-hour mood, we favor a broad coastal view. Light and visibility are never guaranteed.',
  sunset:'For a sunset mood, we favor an ocean-view landmark. Check access and plan your return before dark.'
});
function validPlace(p){
  return p && ['id','name','fact','detail','note'].every(k=>typeof p[k]==='string'&&p[k].trim())
    && typeof p.source==='string' && /^https:\/\/(www\.)?(parks\.ca\.gov|pismobeach\.org|morrobayca\.gov|experiencepismobeach\.com|visitavilabeach\.com)\//.test(p.source)
    && Array.isArray(p.vibes)&&p.vibes.length>0&&p.vibes.every(v=>Object.hasOwn(VIBES,v))
    && Array.isArray(p.times)&&p.times.length>0&&p.times.every(t=>Object.hasOwn(TIMES,t));
}
function recommend(data,time,vibe){
  if(!Object.hasOwn(TIMES,time)||!Object.hasOwn(VIBES,vibe)) return {error:'Choose a listed time and vibe, then try again.'};
  if(!Array.isArray(data)||data.length===0||!data.every(validPlace)||new Set(data.map(p=>p.id)).size!==data.length) return {error:'The local place list is unavailable. Reload the page, or read the sources below.'};
  const candidates=data.filter(p=>p.vibes.includes(vibe));
  if(!candidates.length) return {error:'No supported pick for this vibe in our small collection. Try another vibe.'};
  // A supported vibe is required. Time preference breaks ties; stable file order resolves equal scores.
  const place=candidates.reduce((best,p)=>Number(p.times.includes(time))>Number(best.times.includes(time))?p:best);
  const partial=!place.times.includes(time);
  const surf=vibe==='surf'?'Surf interest only: this is a place to consider, not a recommendation to enter the water. No swell, skill suitability or safety is assessed. ':'';
  return {place,time,vibe,partial,reason:`${place.detail} ${TIME_NOTES[time]}${partial?' Your vibe fits; we do not have a distinct time match in this small collection.':''}`,note:surf+place.note};
}
if(typeof module!=='undefined'&&module.exports) module.exports={TIMES,VIBES,recommend,validPlace};
if(typeof document!=='undefined'){
  const form=document.getElementById('coast-form');
  const result=document.getElementById('result'),status=document.getElementById('status');
  const resultStage=result.parentElement;
  const spotName=document.getElementById('spot-name');
  const moodLabel=document.getElementById('mood-label');
  const scenePhase=document.getElementById('scene-phase');
  const changePick=document.getElementById('change-pick');
  let waveTimer,revealTimer,resetMidpoint,resetEnd;
  const reducedMotion=()=>typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  const selected=(name)=>form.querySelector(`input[name="${name}"]:checked`);
  const value=(name)=>selected(name)?.value;
  function clearReset(){
    clearTimeout(resetMidpoint);clearTimeout(resetEnd);
    resetMidpoint=resetEnd=undefined;
    document.body.classList.remove('is-resetting');
    resultStage.style.minHeight='';
  }
  function updateMood(time){
    document.body.dataset.time=time;
    const label=TIMES[time]||'Coastal light';
    moodLabel.textContent=label;
    if(scenePhase) scenePhase.textContent=label;
  }
  function pulseWave(){
    clearTimeout(waveTimer);
    document.body.classList.remove('wave-response');
    if(reducedMotion()) return;
    void document.body.offsetWidth;
    document.body.classList.add('wave-response');
    waveTimer=setTimeout(()=>document.body.classList.remove('wave-response'),900);
  }
  function hideStaleResult(){
    clearTimeout(revealTimer);
    result.hidden=true;
    result.classList.remove('revealing');
  }
  function synchronize(){
    clearReset();
    hideStaleResult();
    updateMood(value('time'));
    status.textContent='Choices updated. Find your spot to see this pick.';
    pulseWave();
  }
  form.querySelectorAll('input[type="radio"][name="time"], input[type="radio"][name="vibe"]').forEach(input=>input.addEventListener('change',synchronize));
  updateMood(value('time'));
  form.addEventListener('submit',event=>{
    event.preventDefault();
    clearReset();
    clearTimeout(revealTimer);
    result.classList.remove('revealing');
    const pick=recommend(globalThis.COAST_DATA,value('time'),value('vibe'));
    if(pick.error){result.hidden=true;status.textContent=pick.error;return;}
    document.getElementById('selection-label').textContent=`Your pick / ${TIMES[pick.time]} + ${VIBES[pick.vibe]}`;
    spotName.textContent=pick.place.name;
    document.getElementById('spot-reason').textContent=pick.reason;
    document.getElementById('spot-fact').textContent=`Place fact: ${pick.place.fact}`;
    document.getElementById('spot-note').textContent=pick.note;
    document.getElementById('spot-source').href=pick.place.source;
    result.hidden=false;
    if(!reducedMotion()){
      void result.offsetWidth;
      result.classList.add('revealing');
      revealTimer=setTimeout(()=>result.classList.remove('revealing'),650);
    }
    status.textContent=`${pick.place.name}. ${pick.partial?'Vibe match; no distinct time match.':'A curated preference match.'}`;
    spotName.setAttribute('tabindex','-1');
    spotName.focus({preventScroll:true});
    const bounds=result.getBoundingClientRect();
    if(bounds.top<0||bounds.bottom>innerHeight) result.scrollIntoView({behavior:reducedMotion()?'auto':'smooth',block:'nearest'});
  });
  changePick.addEventListener('click',()=>{
    clearReset();
    clearTimeout(waveTimer);document.body.classList.remove('wave-response');
    clearTimeout(revealTimer);result.classList.remove('revealing');
    const finish=()=>{
      document.body.classList.remove('is-resetting');
      resultStage.style.minHeight='';
      selected('time')?.focus();
    };
    const midpoint=()=>{
      result.hidden=true;
      status.textContent='Choose a time and vibe, then find your next spot.';
    };
    if(reducedMotion()){
      midpoint();finish();return;
    }
    resultStage.style.minHeight=`${Math.ceil(resultStage.getBoundingClientRect().height)}px`;
    document.body.classList.add('is-resetting');
    resetMidpoint=setTimeout(midpoint,450);
    resetEnd=setTimeout(finish,900);
  });
}
