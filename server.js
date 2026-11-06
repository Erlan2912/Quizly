'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const PUBLIC = path.join(ROOT, 'public');
const DATA_FILE = process.env.QUIZLY_DATA_FILE ||
  (fs.existsSync('/data') && fs.statSync('/data').isDirectory()
    ? '/data/data.json'
    : path.join(ROOT, 'data', 'data.json'));
const SECRET = process.env.QUIZLY_JWT_SECRET ||
  (process.env.NODE_ENV === 'production'
    ? null
    : 'local-only-' + crypto.randomBytes(32).toString('hex'));
if (!SECRET) {
  console.error('QUIZLY_JWT_SECRET environment variable is required in production.');
  process.exit(1);
}
const DEFAULT_SETTINGS = {
  theme: 'dark', sound: true, vibration: true, animations: true, dailyReminder: false,
  language: 'uz', difficulty: 'mixed', questionCount: 8, showHints: true,
  compactMode: false, reduceMotion: false, accent: 'lime'
};
const response = await fetch('/questions.json');
const QUESTIONS = await response.json();

fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify({ users: [] }, null, 2), { mode: 0o600 });
let writeQueue = Promise.resolve();
function readDb() {
  const parsed = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  if (!parsed || !Array.isArray(parsed.users)) throw new Error('Database formati noto‘g‘ri. data.json faylini tekshiring.');
  return parsed;
}
function writeDb(db) {
  const tmp = DATA_FILE + '.' + process.pid + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(db, null, 2), { mode: 0o600 });
  fs.renameSync(tmp, DATA_FILE);
}
function serialized(fn) {
  const job = writeQueue.then(fn);
  writeQueue = job.catch(() => { });
  return job;
}
function json(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'Content-Length': Buffer.byteLength(body) });
  res.end(body);
}
function b64(v) { return Buffer.from(v).toString('base64url'); }
function token(id) {
  const h = b64('{"alg":"HS256","typ":"JWT"}'), p = b64(JSON.stringify({ sub: id, exp: Date.now() / 1000 + 2592000 }));
  return h + '.' + p + '.' + crypto.createHmac('sha256', SECRET).update(h + '.' + p).digest('base64url');
}
function userId(t) {
  try {
    const [h, p, s] = String(t || '').split('.');
    if (!h || !p || !s) return null;
    const expected = crypto.createHmac('sha256', SECRET).update(h + '.' + p).digest(), got = Buffer.from(s, 'base64url');
    if (got.length !== expected.length || !crypto.timingSafeEqual(got, expected)) return null;
    const payload = JSON.parse(Buffer.from(p, 'base64url'));
    return payload.exp > Date.now() / 1000 ? payload.sub : null;
  } catch { return null; }
}
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  return salt + ':' + crypto.scryptSync(password, salt, 64).toString('hex');
}
function verifyPassword(password, stored) {
  try {
    const [salt, hash] = String(stored).split(':');
    if (!salt || !hash) return false;
    const a = crypto.scryptSync(password, salt, 64), b = Buffer.from(hash, 'hex');
    return a.length === b.length && crypto.timingSafeEqual(a, b);
  } catch { return false; }
}
function safeUser(u) {
  return { id: u.id, username: u.username, firstName: u.firstName || '', lastName: u.lastName || '', avatar: u.avatar || '', xp: u.xp, level: u.level, answers: u.answers, correct: u.correct, quizHistory: u.quizHistory || [], settings: { ...DEFAULT_SETTINGS, ...u.settings } };
}
async function readBody(req) {
  let raw = '';
  for await (const chunk of req) { raw += chunk; if (raw.length > 1e6) throw Object.assign(new Error('So‘rov hajmi juda katta.'), { status: 413 }); }
  try { return raw ? JSON.parse(raw) : {}; } catch { throw Object.assign(new Error('JSON formati noto‘g‘ri.'), { status: 400 }); }
}
function levelFor(xp) { return Math.floor(xp / 100) + 1; }
function publicQuestion(q) { return { id: q.id, d: q.d, q: q.q, a: q.a, hint: q.hint }; }
function serveStatic(req, res, url) {
  let pathname;
  try { pathname = decodeURIComponent(url.pathname); } catch { return json(res, 400, { error: 'URL noto‘g‘ri.' }); }
  if (pathname === '/') pathname = '/index.html';
  const file = path.resolve(PUBLIC, '.' + pathname);
  if (file !== PUBLIC && !file.startsWith(PUBLIC + path.sep)) return json(res, 403, { error: 'Forbidden' });
  fs.readFile(file, (err, data) => {
    if (err) return json(res, 404, { error: 'Not found' });
    const ext = path.extname(file).toLowerCase();
    const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };
    res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' });
    res.end(data);
  });
}
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (!url.pathname.startsWith('/api/')) {
    if (req.method !== 'GET' && req.method !== 'HEAD') return json(res, 405, { error: 'Method not allowed' });
    return serveStatic(req, res, url);
  }
  try {
    const data = await readBody(req), route = url.pathname.slice(4);
    if (req.method === 'POST' && route === '/signup') return await serialized(() => {
      const username = String(data.username || '').trim().toLowerCase(), password = String(data.password || '');
      if (!/^[a-z0-9_]{3,20}$/.test(username)) return json(res, 400, { error: 'Username 3–20 belgi: a-z, 0-9 va _.' });
      if (password.length < 8 || password.length > 72) return json(res, 400, { error: 'Parol 8–72 belgi bo‘lishi kerak.' });
      const db = readDb();
      if (db.users.some(u => u.username === username)) return json(res, 409, { error: 'Bu username band.' });
      const u = { id: crypto.randomUUID(), username, password_hash: hashPassword(password), firstName: String(data.firstName || '').trim().slice(0, 40), lastName: '', avatar: '', xp: 0, level: 1, answers: 0, correct: 0, quizHistory: [], activeQuiz: null, settings: { ...DEFAULT_SETTINGS }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), lastLogin: new Date().toISOString() };
      db.users.push(u); writeDb(db);
      return json(res, 201, { token: token(u.id), user: safeUser(u) });
    });
    if (req.method === 'POST' && route === '/login') return await serialized(() => {
      const username = String(data.username || '').trim().toLowerCase(), password = String(data.password || '');
      const db = readDb(), u = db.users.find(x => x.username === username);
      if (!u || !verifyPassword(password, u.password_hash)) return json(res, 401, { error: 'Username yoki parol noto‘g‘ri.' });
      u.lastLogin = new Date().toISOString(); writeDb(db);
      return json(res, 200, { token: token(u.id), user: safeUser(u) });
    });
    const auth = String(req.headers.authorization || ''), id = userId(auth.startsWith('Bearer ') ? auth.slice(7) : '');
    if (!id) return json(res, 401, { error: 'Sessiya tugagan. Qayta login qiling.' });
    const db = readDb(), user = db.users.find(x => x.id === id);
    if (!user) return json(res, 401, { error: 'Account topilmadi.' });
    if (req.method === 'POST' && route === '/logout') return json(res, 200, { ok: true });
    if (req.method === 'GET' && route === '/me') return json(res, 200, { user: safeUser(user) });
    if (req.method === 'PATCH' && route === '/settings') return await serialized(() => {
      const fresh = readDb(), u = fresh.users.find(x => x.id === id); if (!u) return json(res, 404, { error: 'Account topilmadi.' });
      const s = { ...DEFAULT_SETTINGS, ...u.settings };
      for (const [k, v] of Object.entries(data)) if (k in DEFAULT_SETTINGS) {
        if (k === 'theme' && !['dark', 'light'].includes(v)) continue;
        if (k === 'language' && !['uz', 'en', 'ru'].includes(v)) continue;
        if (k === 'difficulty' && !['mixed', 'easy', 'medium', 'hard'].includes(v)) continue;
        if (k === 'questionCount') s[k] = Math.max(5, Math.min(20, Number(v) || 8));
        else if (typeof DEFAULT_SETTINGS[k] === 'boolean') s[k] = !!v;
        else if (k === 'accent' && !['lime', 'violet', 'blue'].includes(v)) continue;
        else s[k] = v;
      }
      u.settings = s; u.updatedAt = new Date().toISOString(); writeDb(fresh); return json(res, 200, { settings: s });
    });
    if (req.method === 'PATCH' && route === '/profile') return await serialized(() => {
      const fresh = readDb(), u = fresh.users.find(x => x.id === id); if (!u) return json(res, 404, { error: 'Account topilmadi.' });
      if ('firstName' in data) u.firstName = String(data.firstName || '').trim().slice(0, 40);
      if ('lastName' in data) u.lastName = String(data.lastName || '').trim().slice(0, 40);
      u.updatedAt = new Date().toISOString(); writeDb(fresh); return json(res, 200, { user: safeUser(u) });
    });
    if (req.method === 'GET' && route === '/leaderboard') {
      const leaderboard = db.users.slice().sort((a, b) => (b.xp || 0) - (a.xp || 0)).slice(0, 50).map(x => ({ username: x.username, firstName: x.firstName || '', xp: x.xp || 0, level: x.level || 1 }));
      return json(res, 200, { leaderboard });
    }
    if (req.method === 'GET' && route === '/history') return json(res, 200, { history: user.quizHistory || [] });
    if (req.method === 'POST' && route === '/quiz/start') return await serialized(() => {
      const fresh = readDb(), u = fresh.users.find(x => x.id === id); if (!u) return json(res, 404, { error: 'Account topilmadi.' });
      const difficulty = ['easy', 'medium', 'hard'].includes(data.difficulty) ? data.difficulty : 'mixed';
      const count = Math.max(5, Math.min(20, Number(data.count) || 8));
      let pool = QUESTIONS.filter(q => difficulty === 'mixed' || q.d === difficulty);
      if (pool.length < count) pool = QUESTIONS;
      const selected = pool.slice().sort(() => Math.random() - .5).slice(0, Math.min(count, pool.length));
      const quizId = crypto.randomUUID();
      u.activeQuiz = { id: quizId, questionIds: selected.map(q => q.id), answers: [], startedAt: new Date().toISOString() };
      writeDb(fresh);
      return json(res, 200, { quizId, questions: selected.map(publicQuestion) });
    });
    if (req.method === 'POST' && route === '/quiz/answer') return await serialized(() => {
      const fresh = readDb(), u = fresh.users.find(x => x.id === id); if (!u) return json(res, 404, { error: 'Account topilmadi.' });
      const qz = u.activeQuiz;
      if (!qz || qz.id !== data.quizId) return json(res, 409, { error: 'Faol quiz topilmadi. Qaytadan boshlang.' });
      if (qz.answers.length >= qz.questionIds.length) return json(res, 409, { error: 'Quiz allaqachon yakunlangan.' });
      const expected = qz.questionIds[qz.answers.length], question = QUESTIONS.find(q => q.id === expected);
      if (data.questionId !== expected || !Number.isInteger(data.answerIndex) || data.answerIndex < 0 || data.answerIndex >= question.a.length) return json(res, 400, { error: 'Javob formati noto‘g‘ri.' });
      const correct = data.answerIndex === question.c;
      qz.answers.push({ questionId: expected, answerIndex: data.answerIndex, correct, answeredAt: new Date().toISOString() });
      writeDb(fresh);
      return json(res, 200, { correct, correctIndex: question.c, explanation: question.hint, answered: qz.answers.length, total: qz.questionIds.length });
    });
    if (req.method === 'POST' && route === '/quiz/finish') return await serialized(() => {
      const fresh = readDb(), u = fresh.users.find(x => x.id === id); if (!u) return json(res, 404, { error: 'Account topilmadi.' });
      const qz = u.activeQuiz;
      if (!qz || qz.id !== data.quizId) return json(res, 409, { error: 'Quiz topilmadi yoki avval yakunlangan.' });
      if (qz.answers.length !== qz.questionIds.length) return json(res, 409, { error: 'Barcha savollarga javob berilmagan.' });
      const total = qz.answers.length, correct = qz.answers.filter(a => a.correct).length, xpEarned = correct * 10;
      u.answers = (u.answers || 0) + total; u.correct = (u.correct || 0) + correct; u.xp = (u.xp || 0) + xpEarned; u.level = levelFor(u.xp);
      const result = { id: qz.id, total, correct, wrong: total - correct, percent: Math.round(correct / total * 100), xpEarned, level: u.level, finishedAt: new Date().toISOString() };
      u.quizHistory = [result, ...(u.quizHistory || [])].slice(0, 100); u.activeQuiz = null; u.updatedAt = new Date().toISOString(); writeDb(fresh);
      return json(res, 200, { result, user: safeUser(u) });
    });
    return json(res, 404, { error: 'API endpoint topilmadi.' });
  } catch (e) {
    console.error('[API]', e);
    return json(res, e.status || 500, { error: e.status ? e.message : 'Serverda kutilmagan xatolik yuz berdi.' });
  }
});
server.listen(PORT, '0.0.0.0', () => console.log(`Quizly tayyor: http://0.0.0.0:${PORT} | data: ${DATA_FILE}`));
