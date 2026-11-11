(() => {
'use strict';
const API='https://api.jikan.moe/v4';
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const weekday=new Intl.DateTimeFormat('en-US',{weekday:'long',timeZone:'Asia/Karachi'}).format(new Date()).toLowerCase();
const fmtDate=v=>{if(!v)return 'Date TBA';let d=new Date(v);return Number.isNaN(d.getTime())?'Date TBA':d.toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'})};
function card(a,extra=''){const id=Number(a.mal_id),title=a.title_english||a.title||'Anime';const img=a.images?.webp?.large_image_url||a.images?.jpg?.large_image_url;return '<article class="anime-card"><a href="'+esc(a.url||'https://myanimelist.net/anime/'+id)+'" target="_blank" rel="noopener noreferrer"><div class="poster-wrap">'+(img?'<img src="'+esc(img)+'" alt="'+esc(title)+' poster" loading="lazy">':'<div class="poster-fallback">✦</div>')+(a.score?'<span class="score">★ '+esc(a.score)+'</span>':'')+'</div><div class="card-info"><h3 class="card-title">'+esc(title)+'</h3><div class="card-meta"><span>'+esc(a.type||'Anime')+'</span><span>'+esc(a.year||a.aired?.prop?.from?.year||'Year TBA')+'</span></div><div class="tag-row">'+(a.genres||[]).slice(0,2).map(g=>'<span class="tag">'+esc(g.name)+'</span>').join('')+'</div><div class="episode-meta">'+extra+'</div></div></a></article>'}
async function get(path){const r=await fetch(API+path,{headers:{Accept:'application/json'}});if(!r.ok)throw Error('API '+r.status);const j=await r.json();return j.data||[]}
async function section(path,gridId,statusId,emptyText,extra){const status=$(statusId),grid=$(gridId);try{const data=await get(path);grid.innerHTML=data.length?data.slice(0,12).map(a=>card(a,extra?extra(a):'')).join(''):'<p class="data-note">'+emptyText+'</p>';status.textContent=data.length?'Updated '+new Date().toLocaleString():'No entries returned right now.'}catch(err){status.textContent='Could not load this live section right now. Please refresh in a little while.'}}
async function refresh(){const tasks=[section('/seasons/now?limit=12&sfw=true','airingGrid','airingStatus','No current-season listings were returned.'),section('/schedules?filter='+weekday+'&limit=12&sfw=true','episodesGrid','episodesStatus','No schedule entries were returned today.',a=>{const b=a.broadcast||{};return b.string?'Broadcast: '+b.string:'Broadcast time not supplied'}),section('/seasons/upcoming?limit=12&sfw=true','upcomingGrid','upcomingStatus','No upcoming listings were returned.',a=>'Release: '+fmtDate(a.aired?.from))];await Promise.all(tasks)}
const btn=$('refreshLive');if(btn)btn.addEventListener('click',refresh);
refresh();
setInterval(refresh,30*60*1000);
})();