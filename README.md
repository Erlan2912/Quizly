# Quizly — Knowledge Arena

Quizly — foydalanuvchi ro‘yxatdan o‘tishi, quiz bajarishi, XP yig‘ishi va reytingda qatnashishi mumkin bo‘lgan Node.js web-ilova.

## Lokal ishga tushirish (Windows / macOS / Linux)

1. Node.js 20 yoki undan yangiroq versiyasini o‘rnating.
2. ZIP faylni oching va loyiha papkasida terminal oching.
3. Quyidagini bajaring:

```bash
npm start
```

4. Brauzerda `http://localhost:3000` manzilini oching.

Qo‘shimcha dependency kerak emas. Server birinchi ishga tushganda `data/data.json` faylini avtomatik yaratadi.

## FadeHost’ga joylashtirish

Quizly FadeHost App Hosting uchun Node.js web app sifatida tayyorlangan.

1. Loyihani GitHub repository’ga yuklang.
2. FadeHost panelida **Apps → Host an app → Web app or API** ni tanlang va repository’ni ulang.
3. Runtime: Node.js. Start command: `npm start`.
4. Environment variables bo‘limida `QUIZLY_JWT_SECRET` nomli qiymat yarating. Kamida 32 belgili, taxmin qilib bo‘lmaydigan maxfiy qiymatdan foydalaning.
5. Web address va portni sozlang. Ilova `process.env.PORT` orqali portni oladi va `0.0.0.0` manziliga tinglaydi.
6. Deploy qiling.

### Ma’lumotlar saqlanishi

FadeHost’da deploy va restartlardan keyin saqlanishi kerak bo‘lgan fayllar `/data` volume ichida bo‘lishi kerak. Quizly FadeHost muhitida avtomatik ravishda `/data/data.json` dan foydalanadi. Lokal kompyuterda esa loyiha ichidagi `data/data.json` ishlatiladi.

**Muhim:** `data/data.json` GitHub’ga yuklanmaydi. Unda foydalanuvchi ma’lumotlari va parol hash’lari bor. FadeHost panelida `/data` papkasi saqlanadigan volume ekanini tekshiring va zarur bo‘lsa backup yoqing.

## Funksiyalar

- Signup va login; parollar `crypto.scrypt` bilan hash qilinadi.
- Session token HMAC-SHA256 bilan imzolanadi.
- Quiz savollari va javoblar serverda tekshiriladi.
- XP faqat quiz to‘liq yakunlanganda bir marta beriladi.
- Level: har 100 XP uchun 1 level.
- Leaderboard, profil tahriri, test tarixi va avtomatik sozlama saqlash.
- JSON faylga yozishlar navbatga qo‘yiladi va vaqtinchalik fayl orqali atomik almashtiriladi.
- Responsive dizayn, pastki Liquid Glass navigation, dark/light theme.

## API

- `POST /api/signup`
- `POST /api/login`
- `POST /api/logout`
- `GET /api/me`
- `PATCH /api/settings`
- `PATCH /api/profile`
- `GET /api/leaderboard`
- `GET /api/history`
- `POST /api/quiz/start`
- `POST /api/quiz/answer`
- `POST /api/quiz/finish`

## Xavfsizlik eslatmalari

- `QUIZLY_JWT_SECRET` production muhitida majburiy.
- `data/data.json` ni ommaviy repository’ga yuklamang.
- JSON faylga parallel yozishlar server ichida navbatlanadi. Bitta ilova nusxasi uchun mos; juda katta trafik yoki bir nechta server nusxasi uchun keyinchalik haqiqiy database kerak bo‘lishi mumkin.
