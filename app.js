(()=>{'use strict';
const $=id=>document.getElementById(id),E={q:$('searchInput'),g:$('genreFilter'),y:$('yearFilter'),t:$('typeFilter'),s:$('sortFilter'),grid:$('animeGrid'),pagination:$('searchPagination'),status:$('statusMessage'),summary:$('resultSummary'),prev:$('prevPage'),next:$('nextPage'),page:$('pageLabel'),clear:$('clearFilters'),watch:$('watchlistGrid'),empty:$('watchlistEmpty'),dialog:$('detailDialog'),detail:$('detailContent'),close:$('closeDialog')};
const rows=[
['One Piece',1997,'Manga','Adventure, Action','A young pirate gathers a crew and sails toward the legendary treasure known as One Piece.','Eiichiro Oda'],
['Berserk',1989,'Manga','Dark Fantasy, Action','A lone swordsman struggles through a brutal world shaped by ambition and supernatural forces.','Kentaro Miura'],
['Sailor Moon',1991,'Manga','Fantasy, Romance','A schoolgirl discovers her identity as a guardian destined to protect the world.','Naoko Takeuchi'],
['Dragon Ball',1984,'Manga','Action, Adventure','A young martial artist begins a journey filled with rivals, friendships and extraordinary challenges.','Akira Toriyama'],
['Akira',1982,'Manga','Sci-Fi, Action','In a turbulent futuristic city, a biker gang becomes entangled in a dangerous experiment.','Katsuhiro Otomo'],
['Nausicaä of the Valley of the Wind',1982,'Manga','Fantasy, Adventure','A compassionate princess seeks balance between human settlements and a toxic natural world.','Hayao Miyazaki'],
['JoJo’s Bizarre Adventure',1987,'Manga','Action, Supernatural','Generations of the Joestar family face unusual enemies and increasingly strange powers.','Hirohiko Araki'],
['Ghost in the Shell',1989,'Manga','Sci-Fi, Thriller','A cybernetic investigator confronts questions of identity in a networked future.','Masamune Shirow'],
['Slam Dunk',1990,'Manga','Sports, Comedy','A high-school student discovers basketball and grows through competition and teamwork.','Takehiko Inoue'],
['Yu Yu Hakusho',1990,'Manga','Action, Supernatural','A teenage delinquent is drawn into the spirit world after an unexpected act of courage.','Yoshihiro Togashi'],
['Sazae-san',1946,'Manga','Comedy, Slice of Life','Everyday family life becomes the setting for gentle humour and familiar moments.','Machiko Hasegawa'],
['Detective Conan',1994,'Manga','Mystery, Adventure','A brilliant young detective solves intricate cases while searching for a way to regain his former life.','Gosho Aoyama'],
['Rurouni Kenshin',1994,'Manga','Action, Historical','A wandering swordsman vows to protect others without returning to his violent past.','Nobuhiro Watsuki'],
['Cardcaptor Sakura',1996,'Manga','Fantasy, Romance','A young girl takes responsibility for recovering magical cards released into the world.','CLAMP'],
['Hunter × Hunter',1998,'Manga','Adventure, Action','A determined boy enters the demanding world of professional Hunters to find his father.','Yoshihiro Togashi'],
['Naruto',1999,'Manga','Action, Adventure','An energetic young ninja works toward recognition and leadership in his village.','Masashi Kishimoto'],
['Fruits Basket',1998,'Manga','Romance, Drama','A kind-hearted student learns about a family whose members are tied to the zodiac.','Natsuki Takaya'],
['Fullmetal Alchemist',2001,'Manga','Fantasy, Adventure','Two brothers search for a way to repair the consequences of a forbidden alchemical act.','Hiromu Arakawa'],
['Death Note',2003,'Manga','Mystery, Supernatural','A student discovers a notebook with deadly powers and becomes locked in a battle of wits.','Tsugumi Ohba'],
['Monster',1994,'Manga','Thriller, Mystery','A surgeon searches for the truth behind a former patient connected to a series of crimes.','Naoki Urasawa'],
['Nana',2000,'Manga','Drama, Romance','Two young women with the same name form a friendship while pursuing very different dreams.','Ai Yazawa'],
['Vagabond',1998,'Manga','Historical, Action','A wandering swordsman confronts rivals and questions what it means to become stronger.','Takehiko Inoue'],
['Bleach',2001,'Manga','Action, Supernatural','A teenager gains the duties of a Soul Reaper and encounters threats from beyond the human world.','Tite Kubo'],
['D.Gray-man',2004,'Manga','Action, Fantasy','An exorcist joins an organisation fighting mysterious weapons that threaten humanity.','Katsura Hoshino'],
['Fairy Tail',2006,'Manga','Fantasy, Adventure','Wizards in a lively guild take on missions and build lasting friendships.','Hiro Mashima'],
['Black Butler',2006,'Manga','Mystery, Supernatural','A young nobleman and his mysterious butler investigate secrets in Victorian England.','Yana Toboso'],
['Attack on Titan',2009,'Manga','Action, Drama','Humanity fights for survival behind enormous walls while uncovering the world beyond them.','Hajime Isayama'],
['The Promised Neverland',2016,'Manga','Thriller, Mystery','Children at an isolated home uncover a secret that forces them to plan an escape.','Kaiu Shirai'],
['My Hero Academia',2014,'Manga','Action, Superhero','A determined student pursues hero training in a society where extraordinary abilities are common.','Kohei Horikoshi'],
['Haikyu!!',2012,'Manga','Sports, Comedy','A passionate volleyball player joins a school team and learns the value of collaboration.','Haruichi Furudate'],
['Demon Slayer',2016,'Manga','Action, Fantasy','A young swordsman searches for a cure for his sister while confronting demons.','Koyoharu Gotouge'],
['Jujutsu Kaisen',2018,'Manga','Action, Supernatural','A student enters a hidden world of curses and sorcerers after a dangerous encounter.','Gege Akutami'],
['Spy × Family',2019,'Manga','Comedy, Action','A spy assembles a pretend family for a mission, unaware that each member has secrets.','Tatsuya Endo'],
['Chainsaw Man',2018,'Manga','Action, Horror','A young devil hunter gains a strange new life after a life-changing encounter.','Tatsuki Fujimoto'],
['Blue Lock',2018,'Manga','Sports, Drama','Strikers compete in an intense programme designed to develop an exceptional forward.','Muneyuki Kaneshiro'],
['The Apothecary Diaries',2017,'Manga','Drama, Mystery','A sharp-minded apothecary uses her knowledge to solve mysteries in an imperial household.','Natsu Hyuuga'],
['Frieren: Beyond Journey’s End',2020,'Manga','Fantasy, Adventure','An elf mage reflects on time, memory and friendship after a great adventure.','Kanehito Yamada'],
['Oshi no Ko',2020,'Manga','Drama, Mystery','A story of ambition, identity and secrets in the entertainment industry.','Aka Akasaka'],
['Dandadan',2021,'Manga','Action, Supernatural','Two teenagers encounter bizarre paranormal events and unexpected friendships.','Yukinobu Tatsu'],
['Kaiju No. 8',2020,'Manga','Action, Sci-Fi','A cleanup worker dreams of joining the defence force protecting people from monsters.','Naoya Matsumoto'],
['Sakamoto Days',2020,'Manga','Action, Comedy','A former legendary hitman tries to protect his peaceful family life.','Yuto Suzuki'],
['Witch Hat Atelier',2016,'Manga','Fantasy, Adventure','A curious girl discovers the hidden craft behind magic and begins an unusual apprenticeship.','Kamome Shirahama'],
['Skip and Loafer',2018,'Manga','Slice of Life, Comedy','A thoughtful student adjusts to city school life and builds new friendships.','Misaki Takamatsu'],
['Vinland Saga',2005,'Manga','Historical, Drama','A young warrior is shaped by conflict and begins questioning the cycle of violence.','Makoto Yukimura'],
['Tokyo Ghoul',2011,'Manga','Horror, Supernatural','A student is drawn into a hidden society after a life-altering transformation.','Sui Ishida'],
['Kingdom',2006,'Manga','Historical, Action','Two young men pursue their ambitions amid the wars of China’s unification era.','Yasuhisa Hara'],
['Real',1999,'Manga','Sports, Drama','Three young men navigate basketball, disability and personal change.','Takehiko Inoue'],
['Yotsuba&!',2003,'Manga','Comedy, Slice of Life','A curious little girl discovers everyday wonders in her new neighbourhood.','Kiyohiko Azuma'],
['A Bride’s Story',2008,'Manga','Historical, Romance','A young woman’s life unfolds in a richly observed nineteenth-century Central Asian community.','Kaoru Mori'],
['Blue Period',2017,'Manga','Drama, Slice of Life','A high-school student discovers a passion for painting and pursues art school.','Tsubasa Yamaguchi'],
['Look Back',2021,'One-shot','Drama','Two young artists form a creative bond through their shared love of drawing manga.','Tatsuki Fujimoto'],
['Solo Leveling',2018,'Manhwa','Action, Fantasy','A low-ranked hunter receives a mysterious opportunity to grow stronger through dangerous challenges.','Chugong'],
['The Beginning After the End',2018,'Manhwa','Fantasy, Adventure','A powerful former king begins a new life in a world shaped by magic and discovery.','TurtleMe'],
['Tower of God',2010,'Manhwa','Fantasy, Adventure','A young climber enters a vast tower where each floor brings new trials and alliances.','SIU'],
['The King’s Avatar',2012,'Manhua','Action, Sports','An expert competitive gamer starts again and works toward returning to the top.','Butterfly Blue']
];
const colors=['#59336f,#21142f','#315b73,#17243d','#85466c,#321b42','#5c4a8c,#211c3b','#8b5a3d,#38233a','#356d68,#1c2e3d','#6d477e,#291c48','#8b5363,#3c203a'];
const list=rows.map((r,i)=>({id:i+1,title:r[0],year:r[1],type:r[2],genres:r[3].split(', '),synopsis:r[4],author:r[5],colors:colors[i%colors.length],tag:i%3===0?'EDITOR PICK':i%3===1?'MANGA CLASSIC':'READER FAVOURITE'}));
let page=1,per=24,saved=[];try{saved=JSON.parse(localStorage.getItem('aniglow-watchlist')||'[]')}catch{}
for(let y=2026;y>=1980;y--){let o=document.createElement('option');o.value=y;o.textContent=y;E.y.append(o)}
const esc=v=>String(v??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function art(a,large=false){return '<div class="poster-art '+(large?'poster-large':'')+'" style="--poster-colors:'+a.colors+'"><span class="poster-spark">✦</span><span class="poster-kicker">ANIGLOW ORIGINAL ART</span><strong>'+esc(a.title)+'</strong><small>'+a.year+' · '+esc(a.genres[0])+'</small><span class="poster-bottom">A STORY TO DISCOVER</span></div>'}
function card(a){return '<article class="anime-card" data-id="'+a.id+'" tabindex="0" role="button" aria-label="Open '+esc(a.title)+'"><div class="poster-wrap">'+art(a)+'<button class="heart-btn '+(saved.includes(a.id)?'saved':'')+'" data-heart="'+a.id+'" aria-label="Toggle watchlist">'+(saved.includes(a.id)?'♥':'♡')+'</button></div><div class="card-info"><h3 class="card-title">'+esc(a.title)+'</h3><div class="card-meta"><span>'+a.type+'</span><span>'+a.year+'</span></div><div class="tag-row">'+a.genres.slice(0,2).map(g=>'<span class="tag">'+esc(g)+'</span>').join('')+'</div></div></article>'}
function filtered(){let q=E.q.value.trim().toLowerCase(),g=({1:'action',2:'adventure',4:'comedy',8:'drama',10:'fantasy',14:'horror',7:'mystery',22:'romance',24:'sci-fi',30:'sports',37:'supernatural',36:'slice of life',41:'suspense',historical:'historical'}[E.g.value]||'');let out=list.filter(a=>(!q||(a.title+' '+a.author+' '+a.genres.join(' ')).toLowerCase().includes(q))&&(!E.y.value||a.year===Number(E.y.value))&&(!E.t.value||a.type.toLowerCase()===E.t.value)&&(!g||a.genres.some(x=>x.toLowerCase()===g)));if(E.s.value==='title')out.sort((a,b)=>a.title.localeCompare(b.title));if(E.s.value==='newest')out.sort((a,b)=>b.year-a.year||a.title.localeCompare(b.title));if(E.s.value==='oldest')out.sort((a,b)=>a.year-b.year||a.title.localeCompare(b.title));return out}
function render(){let out=filtered(),active=!!(E.q.value.trim()||E.g.value||E.y.value||E.t.value||E.s.value!=='newest');E.grid.hidden=!active;E.pagination.hidden=!active;let pages=Math.max(1,Math.ceil(out.length/per));page=Math.min(page,pages);E.grid.innerHTML=out.slice((page-1)*per,page*per).map(card).join('')||'<div class="empty-state"><h3>No matches found</h3><p>Try another title, year or genre.</p></div>';E.summary.textContent=out.length+' titles in this curated library';E.page.textContent='Page '+page+' of '+pages;E.prev.disabled=page===1;E.next.disabled=page===pages;E.status.textContent=active?'Search results · '+out.length+' matching titles':'Choose a collection or search above.'}
function readingOptions(a){
 const providers=[
  {name:'MANGA Plus by SHUEISHA',kind:'Official publisher platform',domain:'mangaplus.shueisha.co.jp',note:'Selected Shueisha titles; country and chapter access vary.'},
  {name:'VIZ Manga',kind:'Official publisher platform',domain:'viz.com',note:'Selected VIZ titles; subscription and regional limits may apply.'},
  {name:'K MANGA',kind:'Official Kodansha platform',domain:'kmanga.kodansha.com',note:'Selected Kodansha titles; regional availability varies.'},
  {name:'BOOK☆WALKER',kind:'Digital manga store',domain:'global.bookwalker.jp',note:'Digital volumes for purchase; catalogue varies by territory.'},
  {name:'Comikey',kind:'Licensed digital comics platform',domain:'comikey.com',note:'Selected licensed manga and comics; check availability.'},
  {name:'WEBTOON',kind:'Official webcomics platform',domain:'webtoons.com',note:'Primarily webcomics and manhwa; not every manga is listed.'},
  {name:'Tapas',kind:'Digital comics platform',domain:'tapas.io',note:'Selected licensed comics and manhwa; check availability.'}
 ];
 return '<section class="reader-panel"><h3>Find '+esc(a.title)+' on reading platforms</h3><p>Each button searches for this exact title on the named provider’s website domain. Search results do not guarantee that the provider carries the title or that it is available in your country.</p><div class="provider-list">'+providers.map(p=>{let q='site:'+p.domain+' "'+a.title+'"';let url='https://www.google.com/search?q='+encodeURIComponent(q);return '<a class="provider-link" href="'+url+'" target="_blank" rel="noopener noreferrer"><span><strong>'+esc(p.name)+'</strong><small>'+esc(p.kind)+'</small><small>'+esc(p.note)+'</small></span><b>Find title ↗</b></a>'}).join('')+'</div><p class="reader-note">AniGlow does not host chapters. Confirm the exact title, publisher, edition, volume and chapter order on the provider’s official page.</p></section>';
}
function communityMarkup(a){
 let key='aniglow-community-'+a.id,items=[];try{items=JSON.parse(localStorage.getItem(key)||'[]')}catch{}
 return '<details class="community-dropdown"><summary><span>Community corner</span><small>'+items.length+' comments on this device</small><b>⌄</b></summary><div class="community-dropdown-body"><p class="community-intro">Comments saved in this browser only. They are not public or shared between visitors.</p><form class="community-form" data-community-form="'+a.id+'"><label>Your display name<input name="nickname" maxlength="30" placeholder="Name (optional)"></label><label>Your comment<textarea name="comment" maxlength="500" rows="3" required placeholder="What did you think of this manga?"></textarea></label><button type="submit">Save my comment</button></form><div class="community-posts">'+(items.length?items.slice().reverse().map(x=>'<article class="community-post"><strong>'+esc(x.name||'Reader')+'</strong><p>'+esc(x.comment)+'</p><small>Saved on this device</small></article>').join(''):'<p class="no-posts">No comments on this device yet. Be the first to add one.</p>')+'</div></div></details>';
}
function details(id){
 let a=list.find(x=>x.id===id);if(!a)return;
 let related=list.filter(x=>x.id!==id&&x.genres.some(g=>a.genres.includes(g))).slice(0,3);
 E.detail.innerHTML='<div class="detail-layout">'+art(a,true)+'<div><div class="eyebrow">'+a.tag+'</div><h2>'+esc(a.title)+'</h2><div class="card-meta"><span>'+a.year+'</span><span>'+a.type+'</span><span>'+a.genres.join(' · ')+'</span></div><p><strong>Author:</strong> '+esc(a.author)+'</p><p>'+esc(a.synopsis)+'</p><p class="detail-disclaimer">Independent editorial guide. Publication status and volume/chapter numbering should be confirmed with the publisher.</p><div class="detail-actions"><button data-heart="'+id+'">'+(saved.includes(id)?'♥ Saved':'♡ Add to reading list')+'</button></div>'+readingOptions(a)+communityMarkup(a)+'<section class="community-reviews"><h3>You might also like</h3><div class="anime-grid">'+related.map(card).join('')+'</div></section></div></div>';
 if(!E.dialog.open)E.dialog.showModal();
}

function watchRender(){let arr=list.filter(a=>saved.includes(a.id));E.watch.innerHTML=arr.map(card).join('');E.empty.hidden=arr.length>0}
function toggle(id){saved=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];try{localStorage.setItem('aniglow-watchlist',JSON.stringify(saved))}catch{}render();watchRender();if(E.dialog.open)details(id)}
E.detail.addEventListener('submit',ev=>{let form=ev.target.closest('[data-community-form]');if(!form)return;ev.preventDefault();let id=Number(form.dataset.communityForm),fd=new FormData(form),comment=String(fd.get('comment')||'').trim(),name=String(fd.get('nickname')||'').trim();if(!comment)return;let key='aniglow-community-'+id,items=[];try{items=JSON.parse(localStorage.getItem(key)||'[]')}catch{}items.push({name:name.slice(0,30),comment:comment.slice(0,500)});try{localStorage.setItem(key,JSON.stringify(items));details(id)}catch{alert('This browser could not save your comment. Please check device storage settings.')}});
E.detail.addEventListener('click',ev=>{let h=ev.target.closest('[data-heart]');if(h){ev.stopPropagation();toggle(Number(h.dataset.heart));return}let c=ev.target.closest('[data-id]');if(c)details(Number(c.dataset.id))});
function click(ev){let h=ev.target.closest('[data-heart]');if(h){ev.stopPropagation();toggle(Number(h.dataset.heart));return}let c=ev.target.closest('[data-id]');if(c)details(Number(c.dataset.id))}
['animeGrid','popularTrack','classicTrack','watchlistGrid'].forEach(id=>$(id)?.addEventListener('click',click));
['animeGrid','popularGrid','airingGrid','episodesGrid','upcomingGrid','watchlistGrid'].forEach(id=>$(id)?.addEventListener('keydown',ev=>{if((ev.key==='Enter'||ev.key===' ')&&ev.target.matches('[data-id]')){ev.preventDefault();details(Number(ev.target.dataset.id))}}));
E.q.addEventListener('input',()=>{page=1;render()});[E.g,E.y,E.t,E.s].forEach(x=>x.addEventListener('change',()=>{page=1;render()}));E.prev.addEventListener('click',()=>{page=Math.max(1,page-1);render()});E.next.addEventListener('click',()=>{page++;render()});E.clear.addEventListener('click',()=>{E.q.value=E.g.value=E.y.value=E.t.value='';E.s.value='newest';page=1;render()});E.close.addEventListener('click',()=>E.dialog.close());E.dialog.addEventListener('click',ev=>{if(ev.target===E.dialog)E.dialog.close()});
const picks=['One Piece','Naruto','Death Note','Attack on Titan','Demon Slayer','Frieren: Beyond Journey’s End','Berserk','Fullmetal Alchemist','Slam Dunk','Monster','Vinland Saga','Dragon Ball'];
const popular=list.filter(a=>picks.includes(a.title));
const classics=list.filter(a=>a.year<=2000).sort((a,b)=>a.year-b.year||a.title.localeCompare(b.title));
$('popularTrack').innerHTML=popular.map(card).join('');
$('classicTrack').innerHTML=classics.map(card).join('');
$('popularStatus').textContent='Curated selection · use the round arrows to browse more titles';
$('upcomingStatus').textContent='Classic titles from earlier decades · use the round arrows to browse';
document.querySelectorAll('[data-scroll]').forEach(btn=>btn.addEventListener('click',()=>{const track=$(btn.dataset.scroll);track?.scrollBy({left:(btn.classList.contains('shelf-prev')?-1:1)*Math.max(260,track.clientWidth*.8),behavior:'smooth'})}));

render();watchRender();
})();