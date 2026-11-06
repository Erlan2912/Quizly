const $ = s => document.querySelector(s);
const view = $('#view');

const DEFAULT_SETTINGS={theme:'dark',sound:true,vibration:true,animations:true,dailyReminder:false,language:'uz',difficulty:'mixed',questionCount:8,showHints:true,compactMode:false,reduceMotion:false,accent:'lime'};
let state={user:{username:'',xp:0,level:1,answers:0,correct:0,settings:{...DEFAULT_SETTINGS}},leaderboard:[]};
let token=localStorage.getItem('quizly_token')||'',authMode='login';
let page='home', quizIndex=0, quizScore=0, answered=false, questions=[], activeQuizId=null;
function persist(){}
async function api(path,opts={}){let q=await fetch('/api'+path,{...opts,headers:{'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{}),...(opts.headers||{})}}),d=await q.json();if(!q.ok)throw Error(d.error||'Request failed');return d}
function showAuth(mode='login',err=''){authMode=mode;$('#authGate').classList.remove('hidden');$('#view').classList.add('hidden');document.querySelector('.dock').classList.add('hidden');$('#authTitle').textContent=mode==='login'?'Welcome back':'Create your account';$('#authSubmit').textContent=mode==='login'?'Login':'Create account';$('#authSwitch').textContent=mode==='login'?'Create account':'I already have an account';$('#firstNameWrap').classList.toggle('hidden',mode==='login');$('#confirmWrap').classList.toggle('hidden',mode==='login');$('#authPassword').autocomplete=mode==='login'?'current-password':'new-password';$('#authError').textContent=err}
function enterApp(u){state.user={...u,settings:{...DEFAULT_SETTINGS,...u.settings}};$('#authGate').classList.add('hidden');$('#view').classList.remove('hidden');document.querySelector('.dock').classList.remove('hidden');applyPrefs();render()}
async function load(){if(!token){showAuth();return}try{let d=await api('/me');state.leaderboard=(await api('/leaderboard')).leaderboard||[];enterApp(d.user)}catch(e){token='';localStorage.removeItem('quizly_token');showAuth('login',e.message)}}
$('#authSwitch').onclick=()=>showAuth(authMode==='login'?'signup':'login');
$('#authForm').onsubmit=async e=>{e.preventDefault();$('#authSubmit').disabled=true;$('#authError').textContent='Please wait…';try{if(authMode==='signup'&&$('#authPassword').value!==$('#authPasswordConfirm').value)throw Error('Parollar mos kelmadi.');let d=await api('/'+(authMode==='login'?'login':'signup'),{method:'POST',body:JSON.stringify({username:$('#authUsername').value.trim(),password:$('#authPassword').value,firstName:$('#authFirstName').value.trim()})});token=d.token;localStorage.setItem('quizly_token',token);state.leaderboard=(await api('/leaderboard')).leaderboard||[];enterApp(d.user)}catch(x){$('#authError').textContent=x.message}finally{$('#authSubmit').disabled=false}};
function settings(){return state.user.settings||{}}
function applyPrefs(){
 const s=settings();
 document.body.classList.toggle('light',s.theme==='light');
 document.body.classList.toggle('compact',!!s.compactMode);
 document.body.classList.toggle('reduce-motion',!!s.reduceMotion||!s.animations);
 document.documentElement.style.setProperty('--accent', s.accent==='violet'?'#b69cff':s.accent==='blue'?'#83c9ff':'#e7ff3f');
 $('#themeIcon').textContent=s.theme==='light'?'☾':'☼';
 document.documentElement.lang=s.language==='en'?'en':s.language==='ru'?'ru':'uz';
}
function playTone(kind='tap'){
 if(!settings().sound)return;
 try{const Ctx=window.AudioContext||window.webkitAudioContext;if(!Ctx)return;const c=new Ctx(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=kind==='good'?660:kind==='bad'?190:420;g.gain.setValueAtTime(.045,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.11);o.start();o.stop(c.currentTime+.12);o.onended=()=>c.close()}catch(e){}
}
function vibrate(ms=18){if(settings().vibration&&navigator.vibrate)navigator.vibrate(ms)}
function checkDailyReminder(){
 const s=settings();if(!s.dailyReminder)return;
 const today=new Date().toDateString();
 if(localStorage.getItem('quizly_reminder_day')===today)return;
 localStorage.setItem('quizly_reminder_day',today);
 if('Notification' in window && Notification.permission==='granted'){
   setTimeout(()=>new Notification('Quizly daily challenge',{body:'Bugun ham bilimlaringizni sinab ko‘ring!'}),1200);
 } else toast('Bugungi Quizly mashqingizga vaqt ajrating ✨');
}
const translations={
 uz:{home:'Home',quiz:'Quiz',rank:'Rank',profile:'Profile',more:'More',settings:'Sozlamalar & boshqaruv',saved:'O‘zgarishlar avtomatik saqlanadi'},
 en:{home:'Home',quiz:'Quiz',rank:'Rank',profile:'Profile',more:'More',settings:'Settings & controls',saved:'Changes are saved automatically'},
 ru:{home:'Главная',quiz:'Тест',rank:'Рейтинг',profile:'Профиль',more:'Ещё',settings:'Настройки',saved:'Изменения сохраняются автоматически'}
};
function tr(key){return (translations[settings().language]||translations.uz)[key]||key}

function applyLanguage(){
 const lang=settings().language||'uz';
 const dict={
  uz:{home:'Bosh sahifa',quiz:'Test',rank:'Reyting',profile:'Profil',more:'Sozlamalar',settings:'Sozlamalar va boshqalar',ready:'Darajangni oshirishga tayyormisan?',learning:'BILIM MAYDONING',quick:'Tezkor o‘yin',daily:'Kunlik sinov',play:'Boshlash ↗',arena:'Test maydoni',yourprofile:'Profiling',leader:'Reyting jadvali',appearance:'Tashqi ko‘rinish',experience:'Tajriba',preferences:'Test sozlamalari',account:'Hisob va ma’lumotlar'},
  en:{home:'Home',quiz:'Quiz',rank:'Rank',profile:'Profile',more:'Settings',settings:'Settings & more',ready:'Ready to level up?',learning:'YOUR LEARNING SPACE',quick:'Quick play',daily:'Daily challenge',play:'Play now ↗',arena:'Quiz arena',yourprofile:'Your profile',leader:'Leaderboard',appearance:'Appearance',experience:'Experience',preferences:'Quiz preferences',account:'Account & data'},
  ru:{home:'Главная',quiz:'Тест',rank:'Рейтинг',profile:'Профиль',more:'Настройки',settings:'Настройки',ready:'Готов повысить уровень?',learning:'ТВОЁ ПРОСТРАНСТВО',quick:'Быстрая игра',daily:'Ежедневный вызов',play:'Играть ↗',arena:'Арена викторин',yourprofile:'Твой профиль',leader:'Таблица лидеров',appearance:'Внешний вид',experience:'Опыт',preferences:'Настройки теста',account:'Аккаунт и данные'}
 };
 const d=dict[lang]||dict.uz;
 document.querySelectorAll('.nav-item').forEach(b=>{const k=b.dataset.page;b.querySelector('small').textContent=d[k]||d.home});
 document.documentElement.lang=lang;
}
function playFeedback(correct){
 const s=settings();
 if(s.sound){try{const C=window.AudioContext||window.webkitAudioContext;if(C){const c=new C(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=correct?660:220;g.gain.setValueAtTime(.06,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.16);o.start();o.stop(c.currentTime+.17);o.onended=()=>c.close()}}catch(e){}}
 if(s.vibration&&navigator.vibrate) navigator.vibrate(correct?35:[25,35,25]);
}
function checkDailyReminder(){
 const s=settings();
 if(!s.dailyReminder || !('Notification' in window) || Notification.permission!=='granted') return;
 const today=new Date().toISOString().slice(0,10);
 if(localStorage.getItem('quizly_reminder_seen')!==today){
  localStorage.setItem('quizly_reminder_seen',today);
  setTimeout(()=>{try{new Notification('Quizly — kunlik mashq',{body:'Bugun ham bilimingni sinab ko‘r!'});}catch(e){}},1200);
 }
}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),1900)}
function setPage(p){playTone('tap');vibrate();page=p;document.querySelectorAll('.nav-item').forEach((b,i)=>{b.classList.toggle('active',b.dataset.page===p);if(b.dataset.page===p)$('#glider').style.transform=`translateX(${i*100}%)`});render()}
document.querySelectorAll('.nav-item').forEach(b=>b.addEventListener('click',()=>setPage(b.dataset.page)));
$('#themeQuick').onclick=()=>saveSetting('theme',settings().theme==='light'?'dark':'light');
async function saveSetting(k,v){
 const y=window.scrollY;
 if(k==='dailyReminder'&&v&&'Notification'in window&&Notification.permission==='default'){
   try{await Notification.requestPermission()}catch(e){}
 }
 state.user.settings[k]=v;persist();applyPrefs();
 try{await api('/settings',{method:'PATCH',body:JSON.stringify({[k]:v})})}catch(e){toast('Saqlashda xatolik')}
 if(k==='dailyReminder'&&v)checkDailyReminder();
 if(k==='theme')toast(v==='light'?'Light mode yoqildi':'Dark mode yoqildi');
 else if(k==='sound'||k==='vibration'||k==='animations'||k==='reduceMotion'||k==='compactMode'||k==='showHints'||k==='dailyReminder')toast('Sozlama saqlandi ✓');
 if(k==='accent')toast('Accent color yangilandi ✓');
 requestAnimationFrame(()=>window.scrollTo({top:y,behavior:'instant'}));
}
function render(){if(page==='home')home();if(page==='quiz')quizPage();if(page==='rank')rankPage();if(page==='profile')profilePage();if(page==='more')morePage();applyLanguage()}
function home(){const u=state.user;view.innerHTML=`
<section class="hero"><div><div class="eyebrow">YOUR LEARNING SPACE</div><h1>Ready to<br>level up?</h1><p>Bilimingni sinab ko'r. XP to'pla. Reytingda ko'taril.</p></div><div class="hero-watermark">Q⁺</div></section>
<div class="stats"><div class="stat"><span>YOUR XP</span><strong>${u.xp||0}</strong></div><div class="stat"><span>YOUR PLACE</span><strong>#${rankOfUser()}</strong></div><div class="stat"><span>LEVEL</span><strong>${u.level||1}</strong></div></div>
<div class="section-head"><h2>Quick play</h2><small>01 / QUIZ</small></div>
<div class="challenge"><div><span class="pill">SOLO MODE</span><h3>Daily challenge</h3><p>${settings().questionCount||8} ta savol · XP yutib ol</p></div><button class="primary" onclick="startQuiz()">Play now ↗</button></div>
<div class="card-grid"><div class="topic-card" onclick="setPage('quiz')"><span class="emoji">⚡</span><h3>Quick quiz</h3><p>Tezkor bilim sinovi</p></div><div class="topic-card" onclick="setPage('rank')"><span class="emoji">♛</span><h3>Leaderboard</h3><p>Eng kuchlilar safi</p></div></div>`}
function rankOfUser(){const i=state.leaderboard.findIndex(x=>x.username===state.user.username);return i<0?'—':i+1}
function quizPage(){view.innerHTML=`<h1 class="page-title">Quiz arena</h1><p class="page-sub">Bilimingni sinab ko'r va XP yig'.</p><div class="card-grid"><div class="topic-card" onclick="startQuiz()"><span class="emoji">⚡</span><h3>Daily challenge</h3><p>${settings().questionCount||8} savol · XP gacha</p></div><div class="topic-card" onclick="startQuiz()"><span class="emoji">🎯</span><h3>Mixed practice</h3><p>Turli mavzulardan</p></div></div><div class="panel" style="margin-top:16px"><span class="muted-label">YOUR PROGRESS</span><h2>${state.user.answers||0} answered</h2><p class="page-sub" style="margin:0">To'g'ri javoblar: ${state.user.correct||0}</p></div>`}
async function startQuiz(){
 try{const d=await api('/quiz/start',{method:'POST',body:JSON.stringify({difficulty:settings().difficulty||'mixed',count:Number(settings().questionCount)||8})});activeQuizId=d.quizId;questions=d.questions||[];quizIndex=0;quizScore=0;answered=false;if(!questions.length)throw Error('Savollar mavjud emas.');showQuestion()}catch(e){toast(e.message)}
}
function showQuestion(){
 const q=questions[quizIndex];
 view.innerHTML=`<div class="section-head"><span class="pill">QUIZLY CHALLENGE</span><small>${quizIndex+1} / ${questions.length}</small></div><div class="progress"><span style="width:${quizIndex/questions.length*100}%"></span></div><div class="panel"><span class="muted-label">QUESTION ${String(quizIndex+1).padStart(2,'0')}</span><h2 style="font-size:25px;line-height:1.3">${escapeHtml(q.q)}</h2><div id="options">${q.a.map((a,i)=>`<button class="quiz-option" data-i="${i}">${String.fromCharCode(65+i)}. &nbsp;${escapeHtml(a)}</button>`).join('')}</div>${settings().showHints?`<details style="margin-top:14px;color:var(--muted)"><summary style="cursor:pointer;font-size:13px">💡 Hint / Maslahat</summary><p style="font-size:13px;line-height:1.5">${escapeHtml(q.hint||'Savolni diqqat bilan o‘qing.')}</p></details>`:''}<p id="feedback" class="page-sub" style="margin:12px 0 0"></p><button id="nextQ" class="dark-btn" style="width:100%;margin-top:18px;display:none">${quizIndex===questions.length-1?'Natijani ko‘rish':'Keyingi savol →'}</button></div><button class="ghost-btn" style="margin-top:15px" onclick="setPage('quiz')">← Testdan chiqish</button>`;
 document.querySelectorAll('.quiz-option').forEach(b=>b.onclick=()=>chooseAnswer(Number(b.dataset.i)));$('#nextQ').onclick=()=>{quizIndex++;if(quizIndex>=questions.length)finishQuiz();else showQuestion()};
}
async function chooseAnswer(i){
 if(answered)return;answered=true;const q=questions[quizIndex];document.querySelectorAll('.quiz-option').forEach(b=>b.disabled=true);
 try{const d=await api('/quiz/answer',{method:'POST',body:JSON.stringify({quizId:activeQuizId,questionId:q.id,answerIndex:i})});if(d.correct)quizScore++;playTone(d.correct?'good':'bad');vibrate(d.correct?35:[25,35,25]);document.querySelectorAll('.quiz-option').forEach((b,n)=>{if(n===d.correctIndex)b.classList.add('correct');else if(n===i)b.classList.add('wrong')});$('#feedback').textContent=d.correct?'Ajoyib! To‘g‘ri javob.':'Bu safar noto‘g‘ri. '+(settings().showHints?(d.explanation||''):'');$('#nextQ').style.display='block'}catch(e){answered=false;document.querySelectorAll('.quiz-option').forEach(b=>b.disabled=false);toast(e.message)}
}
async function finishQuiz(){
 try{const d=await api('/quiz/finish',{method:'POST',body:JSON.stringify({quizId:activeQuizId})});state.user=d.user;state.leaderboard=(await api('/leaderboard')).leaderboard||[];const r=d.result;view.innerHTML=`<div class="panel" style="text-align:center;padding:42px 24px"><div style="font-size:54px">🏆</div><h1 class="page-title">Test yakunlandi!</h1><p class="page-sub">Natijang: ${r.correct} / ${r.total} (${r.percent}%)</p><div class="stats"><div class="stat"><span>TO‘G‘RI</span><strong>${r.correct}</strong></div><div class="stat"><span>NOTO‘G‘RI</span><strong>${r.wrong}</strong></div><div class="stat"><span>XP</span><strong>+${r.xpEarned}</strong></div></div><h2 style="font-size:24px;color:var(--lime)">Level ${r.level}</h2><button class="dark-btn" onclick="setPage('home')">Bosh sahifaga qaytish</button></div>`;activeQuizId=null}catch(e){toast(e.message)}
}
function rankPage(){let rows=state.leaderboard||[];view.innerHTML=`<h1 class="page-title">Leaderboard</h1><p class="page-sub">Global Quizly players</p><div class="panel"><div class="section-head"><h2>Top players</h2><small>GLOBAL</small></div>${rows.map((x,i)=>`<div class="rank-row"><span class="rank-num">#${i+1}</span><div class="avatar">${(x.username||'Q')[0].toUpperCase()}</div><div class="grow"><b>${escapeHtml(x.username)}</b><small style="display:block">Level ${x.level}</small></div><b>${x.xp} XP</b></div>`).join('')}</div>`}
async function profilePage(){
 const u=state.user;let history=[];try{history=(await api('/history')).history||[]}catch(e){}
 view.innerHTML=`<h1 class="page-title">Profil</h1><p class="page-sub">Quizly'dagi natijalaring.</p><div class="profile-head"><div class="avatar">${(u.firstName||u.username||'Q')[0].toUpperCase()}</div><div><h2>${escapeHtml(u.firstName||'Player')}</h2><p>@${escapeHtml(u.username||'quizly_player')} · Level ${u.level||1}</p></div></div><div class="stats"><div class="stat"><span>XP</span><strong>${u.xp||0}</strong></div><div class="stat"><span>TESTLAR</span><strong>${history.length}</strong></div><div class="stat"><span>TO‘G‘RI</span><strong>${u.correct||0}</strong></div></div><div class="panel"><span class="muted-label">LEVEL PROGRESS</span><h2>Level ${u.level||1}</h2><div class="progress"><span style="width:${(u.xp||0)%100}%"></span></div><small class="page-sub">${(u.xp||0)%100} / 100 XP to next level</small></div><div class="panel" style="margin-top:16px"><h2>Profilni tahrirlash</h2><label>Ism<input id="profileFirstName" maxlength="40" value="${escapeHtml(u.firstName||'')}" placeholder="Ismingiz"></label><button id="saveProfile" class="dark-btn" style="margin-top:12px">Saqlash</button></div><div class="panel" style="margin-top:16px"><h2>Oxirgi testlar</h2>${history.length?history.slice(0,8).map(x=>`<div class="rank-row"><div class="grow"><b>${x.correct}/${x.total} to‘g‘ri</b><small style="display:block">${new Date(x.finishedAt).toLocaleDateString()}</small></div><b>+${x.xpEarned} XP</b></div>`).join(''):'<p class="page-sub">Hozircha test tarixi yo‘q.</p>'}</div>`;
 $('#saveProfile').onclick=async()=>{try{const d=await api('/profile',{method:'PATCH',body:JSON.stringify({firstName:$('#profileFirstName').value})});state.user=d.user;toast('Profil saqlandi ✓');profilePage()}catch(e){toast(e.message)}};
}
function row(label,desc,key,type='switch',options=[]){const s=settings(),val=s[key];let control='';if(type==='switch')control=`<input class="switch" type="checkbox" ${val?'checked':''} onchange="saveSetting('${key}',this.checked)">`;if(type==='select')control=`<select class="select" onchange="saveSetting('${key}',this.value)">${options.map(o=>`<option value="${o[0]}" ${val===o[0]?'selected':''}>${o[1]}</option>`).join('')}</select>`;if(type==='range')control=`<input class="range" type="range" min="5" max="20" step="1" value="${val||8}" oninput="this.nextElementSibling.textContent=this.value" onchange="saveSetting('${key}',Number(this.value))"><b>${val||8}</b>`;return `<div class="setting-row"><div><b>${label}</b><small>${desc}</small></div>${control}</div>`}
function morePage(){view.innerHTML=`<h1 class="page-title">${tr('settings')}</h1><p class="page-sub">${tr('saved')}</p>
<div class="setting-group"><h3>Appearance</h3>${row('Theme','Dark yoki light ko‘rinish','theme','select',[['dark','Dark'],['light','Light']])}${row('Animations','Sahifa va element animatsiyalari','animations')}${row('Reduce motion','Harakatlarni kamaytirish','reduceMotion')}${row('Compact mode','Ixchamroq interfeys','compactMode')}${row('Accent color','Ilova aksent rangini o‘zgartirish','accent','select',[['lime','Lime'],['violet','Violet'],['blue','Blue']])}</div>
<div class="setting-group"><h3>Experience</h3>${row('Sound effects','Javob va tugma tovushlari','sound')}${row('Vibration','Mos qurilmalarda tebranish','vibration')}${row('Show hints','Savollarda maslahatlarni ko‘rsatish','showHints')}${row('Daily reminder','Ruxsat berilsa, kuniga bir marta sayt ochilganda bildirishnoma','dailyReminder')}</div>
<div class="setting-group"><h3>Quiz preferences</h3>${row('Language','Asosiy navigatsiya va sahifa sarlavhalari tili','language','select',[['uz','O‘zbekcha'],['en','English'],['ru','Русский']])}${row('Difficulty','Savollar murakkabligi','difficulty','select',[['mixed','Mixed'],['easy','Easy'],['medium','Medium'],['hard','Hard']])}${row('Questions per quiz','Har bir testdagi savollar','questionCount','range')}</div>
<div class="setting-group"><h3>Account & data</h3><div class="setting-row"><div><b>Website account</b><small>Quizly hisobingiz</small></div><span class="pill">ACTIVE</span></div><div class="setting-row"><div><b>Data storage</b><small>Ma’lumotlar serverdagi JSON bazada saqlanadi</small></div><span>✓</span></div><div class="setting-row"><div><b>About Quizly</b><small>Knowledge Arena · Version 1.0</small></div><b>Q</b></div></div>
<button class="ghost-btn" id="logoutBtn">Hisobdan chiqish</button>`}
document.addEventListener('click',async e=>{if(e.target&&e.target.id==='logoutBtn'){try{await api('/logout',{method:'POST'})}catch(_){}token='';localStorage.removeItem('quizly_token');state.user={username:'',xp:0,level:1,answers:0,correct:0,settings:{...DEFAULT_SETTINGS}};showAuth('login','Hisobdan chiqdingiz.')}});
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

load();