'use strict';

const questions = {
  "history": [
    {
      "id": "history-001",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "XIV asrda Movarounnahrda markazlashgan davlat barpo etgan sarkarda va davlat arbobi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Alisher Navoiy",
        "Ahmad al-Farg‘oniy",
        "Amir Temur",
        "Renessans"
      ],
      "correctAnswer": 2,
      "hint": "XIV asrda Movarounnahrda markazlashgan davlat barpo etgan sarkarda va davlat arbobi.",
      "difficulty": "easy"
    },
    {
      "id": "history-002",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: XIV asrda Movarounnahrda markazlashgan davlat barpo etgan sarkarda va davlat arbobi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Uyg‘onish davri",
        "Imom al-Buxoriy",
        "Ikkinchi jahon urushi",
        "Amir Temur"
      ],
      "correctAnswer": 3,
      "hint": "XIV asrda Movarounnahrda markazlashgan davlat barpo etgan sarkarda va davlat arbobi.",
      "difficulty": "medium"
    },
    {
      "id": "history-003",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: XIV asrda Movarounnahrda markazlashgan davlat barpo etgan sarkarda va davlat arbobi.",
      "options": [
        "Buyuk ipak yo‘li",
        "Birinchi jahon urushi",
        "Zahiriddin Muhammad Bobur",
        "Amir Temur"
      ],
      "correctAnswer": 3,
      "hint": "XIV asrda Movarounnahrda markazlashgan davlat barpo etgan sarkarda va davlat arbobi.",
      "difficulty": "hard"
    },
    {
      "id": "history-004",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — XIV asrda Movarounnahrda markazlashgan davlat barpo etgan sarkarda va davlat arbobi.",
      "options": [
        "Sanoat inqilobi",
        "Amir Temur",
        "Jaloliddin Manguberdi",
        "Muhammad al-Xorazmiy"
      ],
      "correctAnswer": 1,
      "hint": "XIV asrda Movarounnahrda markazlashgan davlat barpo etgan sarkarda va davlat arbobi.",
      "difficulty": "mixed"
    },
    {
      "id": "history-005",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Samarqandda rasadxona qurdirgan va yulduzlar jadvalini tuzgan hukmdor-olim. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Mirzo Ulug‘bek",
        "Jaloliddin Manguberdi",
        "Sanoat inqilobi",
        "Muhammad al-Xorazmiy"
      ],
      "correctAnswer": 0,
      "hint": "Samarqandda rasadxona qurdirgan va yulduzlar jadvalini tuzgan hukmdor-olim.",
      "difficulty": "easy"
    },
    {
      "id": "history-006",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: Samarqandda rasadxona qurdirgan va yulduzlar jadvalini tuzgan hukmdor-olim. Qaysi atama nazarda tutilgan?",
      "options": [
        "Mirzo Ulug‘bek",
        "Konstitutsiya",
        "Abu Ali ibn Sino",
        "Amir Temur"
      ],
      "correctAnswer": 0,
      "hint": "Samarqandda rasadxona qurdirgan va yulduzlar jadvalini tuzgan hukmdor-olim.",
      "difficulty": "medium"
    },
    {
      "id": "history-007",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Samarqandda rasadxona qurdirgan va yulduzlar jadvalini tuzgan hukmdor-olim.",
      "options": [
        "Abu Rayhon Beruniy",
        "Mirzo Ulug‘bek",
        "Mustaqillik deklaratsiyasi",
        "Fransuz inqilobi"
      ],
      "correctAnswer": 1,
      "hint": "Samarqandda rasadxona qurdirgan va yulduzlar jadvalini tuzgan hukmdor-olim.",
      "difficulty": "hard"
    },
    {
      "id": "history-008",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — Samarqandda rasadxona qurdirgan va yulduzlar jadvalini tuzgan hukmdor-olim.",
      "options": [
        "Mirzo Ulug‘bek",
        "BMT",
        "Ahmad al-Farg‘oniy",
        "Renessans"
      ],
      "correctAnswer": 0,
      "hint": "Samarqandda rasadxona qurdirgan va yulduzlar jadvalini tuzgan hukmdor-olim.",
      "difficulty": "mixed"
    },
    {
      "id": "history-009",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "XIII asrda mo‘g‘ul bosqiniga qarshi kurashgan Xorazmshohlar sulolasi vakili. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Renessans",
        "BMT",
        "Ahmad al-Farg‘oniy",
        "Jaloliddin Manguberdi"
      ],
      "correctAnswer": 3,
      "hint": "XIII asrda mo‘g‘ul bosqiniga qarshi kurashgan Xorazmshohlar sulolasi vakili.",
      "difficulty": "easy"
    },
    {
      "id": "history-010",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: XIII asrda mo‘g‘ul bosqiniga qarshi kurashgan Xorazmshohlar sulolasi vakili. Qaysi atama nazarda tutilgan?",
      "options": [
        "Ikkinchi jahon urushi",
        "Uyg‘onish davri",
        "Alisher Navoiy",
        "Jaloliddin Manguberdi"
      ],
      "correctAnswer": 3,
      "hint": "XIII asrda mo‘g‘ul bosqiniga qarshi kurashgan Xorazmshohlar sulolasi vakili.",
      "difficulty": "medium"
    },
    {
      "id": "history-011",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: XIII asrda mo‘g‘ul bosqiniga qarshi kurashgan Xorazmshohlar sulolasi vakili.",
      "options": [
        "Birinchi jahon urushi",
        "Jaloliddin Manguberdi",
        "Zahiriddin Muhammad Bobur",
        "Imom al-Buxoriy"
      ],
      "correctAnswer": 1,
      "hint": "XIII asrda mo‘g‘ul bosqiniga qarshi kurashgan Xorazmshohlar sulolasi vakili.",
      "difficulty": "hard"
    },
    {
      "id": "history-012",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — XIII asrda mo‘g‘ul bosqiniga qarshi kurashgan Xorazmshohlar sulolasi vakili.",
      "options": [
        "Mirzo Ulug‘bek",
        "Muhammad al-Xorazmiy",
        "Buyuk ipak yo‘li",
        "Jaloliddin Manguberdi"
      ],
      "correctAnswer": 3,
      "hint": "XIII asrda mo‘g‘ul bosqiniga qarshi kurashgan Xorazmshohlar sulolasi vakili.",
      "difficulty": "mixed"
    },
    {
      "id": "history-013",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Boburnoma asari muallifi va Boburiylar davlatining asoschisi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Buyuk ipak yo‘li",
        "Muhammad al-Xorazmiy",
        "Zahiriddin Muhammad Bobur",
        "Mirzo Ulug‘bek"
      ],
      "correctAnswer": 2,
      "hint": "Boburnoma asari muallifi va Boburiylar davlatining asoschisi.",
      "difficulty": "easy"
    },
    {
      "id": "history-014",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: Boburnoma asari muallifi va Boburiylar davlatining asoschisi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Konstitutsiya",
        "Abu Ali ibn Sino",
        "Zahiriddin Muhammad Bobur",
        "Sanoat inqilobi"
      ],
      "correctAnswer": 2,
      "hint": "Boburnoma asari muallifi va Boburiylar davlatining asoschisi.",
      "difficulty": "medium"
    },
    {
      "id": "history-015",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Boburnoma asari muallifi va Boburiylar davlatining asoschisi.",
      "options": [
        "Fransuz inqilobi",
        "Zahiriddin Muhammad Bobur",
        "Mustaqillik deklaratsiyasi",
        "Amir Temur"
      ],
      "correctAnswer": 1,
      "hint": "Boburnoma asari muallifi va Boburiylar davlatining asoschisi.",
      "difficulty": "hard"
    },
    {
      "id": "history-016",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — Boburnoma asari muallifi va Boburiylar davlatining asoschisi.",
      "options": [
        "Zahiriddin Muhammad Bobur",
        "BMT",
        "Renessans",
        "Abu Rayhon Beruniy"
      ],
      "correctAnswer": 0,
      "hint": "Boburnoma asari muallifi va Boburiylar davlatining asoschisi.",
      "difficulty": "mixed"
    },
    {
      "id": "history-017",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Xamsa asarini turkiy tilda yaratgan buyuk mutafakkir va shoir. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Abu Rayhon Beruniy",
        "BMT",
        "Renessans",
        "Alisher Navoiy"
      ],
      "correctAnswer": 3,
      "hint": "Xamsa asarini turkiy tilda yaratgan buyuk mutafakkir va shoir.",
      "difficulty": "easy"
    },
    {
      "id": "history-018",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: Xamsa asarini turkiy tilda yaratgan buyuk mutafakkir va shoir. Qaysi atama nazarda tutilgan?",
      "options": [
        "Ahmad al-Farg‘oniy",
        "Ikkinchi jahon urushi",
        "Alisher Navoiy",
        "Zahiriddin Muhammad Bobur"
      ],
      "correctAnswer": 2,
      "hint": "Xamsa asarini turkiy tilda yaratgan buyuk mutafakkir va shoir.",
      "difficulty": "medium"
    },
    {
      "id": "history-019",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Xamsa asarini turkiy tilda yaratgan buyuk mutafakkir va shoir.",
      "options": [
        "Uyg‘onish davri",
        "Imom al-Buxoriy",
        "Jaloliddin Manguberdi",
        "Alisher Navoiy"
      ],
      "correctAnswer": 3,
      "hint": "Xamsa asarini turkiy tilda yaratgan buyuk mutafakkir va shoir.",
      "difficulty": "hard"
    },
    {
      "id": "history-020",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — Xamsa asarini turkiy tilda yaratgan buyuk mutafakkir va shoir.",
      "options": [
        "Buyuk ipak yo‘li",
        "Muhammad al-Xorazmiy",
        "Birinchi jahon urushi",
        "Alisher Navoiy"
      ],
      "correctAnswer": 3,
      "hint": "Xamsa asarini turkiy tilda yaratgan buyuk mutafakkir va shoir.",
      "difficulty": "mixed"
    },
    {
      "id": "history-021",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Geodeziya, astronomiya va tabiiy fanlarga katta hissa qo‘shgan alloma. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Buyuk ipak yo‘li",
        "Muhammad al-Xorazmiy",
        "Birinchi jahon urushi",
        "Abu Rayhon Beruniy"
      ],
      "correctAnswer": 3,
      "hint": "Geodeziya, astronomiya va tabiiy fanlarga katta hissa qo‘shgan alloma.",
      "difficulty": "easy"
    },
    {
      "id": "history-022",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: Geodeziya, astronomiya va tabiiy fanlarga katta hissa qo‘shgan alloma. Qaysi atama nazarda tutilgan?",
      "options": [
        "Sanoat inqilobi",
        "Mirzo Ulug‘bek",
        "Abu Rayhon Beruniy",
        "Konstitutsiya"
      ],
      "correctAnswer": 2,
      "hint": "Geodeziya, astronomiya va tabiiy fanlarga katta hissa qo‘shgan alloma.",
      "difficulty": "medium"
    },
    {
      "id": "history-023",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Geodeziya, astronomiya va tabiiy fanlarga katta hissa qo‘shgan alloma.",
      "options": [
        "Abu Ali ibn Sino",
        "Fransuz inqilobi",
        "Amir Temur",
        "Abu Rayhon Beruniy"
      ],
      "correctAnswer": 3,
      "hint": "Geodeziya, astronomiya va tabiiy fanlarga katta hissa qo‘shgan alloma.",
      "difficulty": "hard"
    },
    {
      "id": "history-024",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — Geodeziya, astronomiya va tabiiy fanlarga katta hissa qo‘shgan alloma.",
      "options": [
        "Abu Rayhon Beruniy",
        "Mustaqillik deklaratsiyasi",
        "BMT",
        "Alisher Navoiy"
      ],
      "correctAnswer": 0,
      "hint": "Geodeziya, astronomiya va tabiiy fanlarga katta hissa qo‘shgan alloma.",
      "difficulty": "mixed"
    },
    {
      "id": "history-025",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Tib qonunlari asari bilan mashhur tabib va faylasuf. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Abu Ali ibn Sino",
        "Mustaqillik deklaratsiyasi",
        "Alisher Navoiy",
        "BMT"
      ],
      "correctAnswer": 0,
      "hint": "Tib qonunlari asari bilan mashhur tabib va faylasuf.",
      "difficulty": "easy"
    },
    {
      "id": "history-026",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: Tib qonunlari asari bilan mashhur tabib va faylasuf. Qaysi atama nazarda tutilgan?",
      "options": [
        "Zahiriddin Muhammad Bobur",
        "Abu Ali ibn Sino",
        "Ahmad al-Farg‘oniy",
        "Renessans"
      ],
      "correctAnswer": 1,
      "hint": "Tib qonunlari asari bilan mashhur tabib va faylasuf.",
      "difficulty": "medium"
    },
    {
      "id": "history-027",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Tib qonunlari asari bilan mashhur tabib va faylasuf.",
      "options": [
        "Imom al-Buxoriy",
        "Uyg‘onish davri",
        "Ikkinchi jahon urushi",
        "Abu Ali ibn Sino"
      ],
      "correctAnswer": 3,
      "hint": "Tib qonunlari asari bilan mashhur tabib va faylasuf.",
      "difficulty": "hard"
    },
    {
      "id": "history-028",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — Tib qonunlari asari bilan mashhur tabib va faylasuf.",
      "options": [
        "Birinchi jahon urushi",
        "Buyuk ipak yo‘li",
        "Jaloliddin Manguberdi",
        "Abu Ali ibn Sino"
      ],
      "correctAnswer": 3,
      "hint": "Tib qonunlari asari bilan mashhur tabib va faylasuf.",
      "difficulty": "mixed"
    },
    {
      "id": "history-029",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Algebra fanining rivojiga asos solgan matematik olim. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Buyuk ipak yo‘li",
        "Muhammad al-Xorazmiy",
        "Jaloliddin Manguberdi",
        "Birinchi jahon urushi"
      ],
      "correctAnswer": 1,
      "hint": "Algebra fanining rivojiga asos solgan matematik olim.",
      "difficulty": "easy"
    },
    {
      "id": "history-030",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: Algebra fanining rivojiga asos solgan matematik olim. Qaysi atama nazarda tutilgan?",
      "options": [
        "Abu Ali ibn Sino",
        "Muhammad al-Xorazmiy",
        "Mirzo Ulug‘bek",
        "Sanoat inqilobi"
      ],
      "correctAnswer": 1,
      "hint": "Algebra fanining rivojiga asos solgan matematik olim.",
      "difficulty": "medium"
    },
    {
      "id": "history-031",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Algebra fanining rivojiga asos solgan matematik olim.",
      "options": [
        "Muhammad al-Xorazmiy",
        "Konstitutsiya",
        "Amir Temur",
        "Abu Rayhon Beruniy"
      ],
      "correctAnswer": 0,
      "hint": "Algebra fanining rivojiga asos solgan matematik olim.",
      "difficulty": "hard"
    },
    {
      "id": "history-032",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — Algebra fanining rivojiga asos solgan matematik olim.",
      "options": [
        "Muhammad al-Xorazmiy",
        "Alisher Navoiy",
        "Fransuz inqilobi",
        "Mustaqillik deklaratsiyasi"
      ],
      "correctAnswer": 0,
      "hint": "Algebra fanining rivojiga asos solgan matematik olim.",
      "difficulty": "mixed"
    },
    {
      "id": "history-033",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Al-Jome’ as-sahih hadislar to‘plami bilan mashhur muhaddis. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Mustaqillik deklaratsiyasi",
        "Imom al-Buxoriy",
        "Alisher Navoiy",
        "Fransuz inqilobi"
      ],
      "correctAnswer": 1,
      "hint": "Al-Jome’ as-sahih hadislar to‘plami bilan mashhur muhaddis.",
      "difficulty": "easy"
    },
    {
      "id": "history-034",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: Al-Jome’ as-sahih hadislar to‘plami bilan mashhur muhaddis. Qaysi atama nazarda tutilgan?",
      "options": [
        "Imom al-Buxoriy",
        "BMT",
        "Renessans",
        "Ahmad al-Farg‘oniy"
      ],
      "correctAnswer": 0,
      "hint": "Al-Jome’ as-sahih hadislar to‘plami bilan mashhur muhaddis.",
      "difficulty": "medium"
    },
    {
      "id": "history-035",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Al-Jome’ as-sahih hadislar to‘plami bilan mashhur muhaddis.",
      "options": [
        "Imom al-Buxoriy",
        "Uyg‘onish davri",
        "Zahiriddin Muhammad Bobur",
        "Ikkinchi jahon urushi"
      ],
      "correctAnswer": 0,
      "hint": "Al-Jome’ as-sahih hadislar to‘plami bilan mashhur muhaddis.",
      "difficulty": "hard"
    },
    {
      "id": "history-036",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — Al-Jome’ as-sahih hadislar to‘plami bilan mashhur muhaddis.",
      "options": [
        "Imom al-Buxoriy",
        "Muhammad al-Xorazmiy",
        "Birinchi jahon urushi",
        "Jaloliddin Manguberdi"
      ],
      "correctAnswer": 0,
      "hint": "Al-Jome’ as-sahih hadislar to‘plami bilan mashhur muhaddis.",
      "difficulty": "mixed"
    },
    {
      "id": "history-037",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Astronomiyaga oid asarlari Yevropada ham o‘rganilgan olim. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Muhammad al-Xorazmiy",
        "Birinchi jahon urushi",
        "Jaloliddin Manguberdi",
        "Ahmad al-Farg‘oniy"
      ],
      "correctAnswer": 3,
      "hint": "Astronomiyaga oid asarlari Yevropada ham o‘rganilgan olim.",
      "difficulty": "easy"
    },
    {
      "id": "history-038",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: Astronomiyaga oid asarlari Yevropada ham o‘rganilgan olim. Qaysi atama nazarda tutilgan?",
      "options": [
        "Mirzo Ulug‘bek",
        "Abu Ali ibn Sino",
        "Buyuk ipak yo‘li",
        "Ahmad al-Farg‘oniy"
      ],
      "correctAnswer": 3,
      "hint": "Astronomiyaga oid asarlari Yevropada ham o‘rganilgan olim.",
      "difficulty": "medium"
    },
    {
      "id": "history-039",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Astronomiyaga oid asarlari Yevropada ham o‘rganilgan olim.",
      "options": [
        "Konstitutsiya",
        "Ahmad al-Farg‘oniy",
        "Abu Rayhon Beruniy",
        "Sanoat inqilobi"
      ],
      "correctAnswer": 1,
      "hint": "Astronomiyaga oid asarlari Yevropada ham o‘rganilgan olim.",
      "difficulty": "hard"
    },
    {
      "id": "history-040",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — Astronomiyaga oid asarlari Yevropada ham o‘rganilgan olim.",
      "options": [
        "Mustaqillik deklaratsiyasi",
        "Amir Temur",
        "Fransuz inqilobi",
        "Ahmad al-Farg‘oniy"
      ],
      "correctAnswer": 3,
      "hint": "Astronomiyaga oid asarlari Yevropada ham o‘rganilgan olim.",
      "difficulty": "mixed"
    },
    {
      "id": "history-041",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "O‘zbekiston davlat mustaqilligi e’lon qilingan tarixiy hujjat. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Mustaqillik deklaratsiyasi",
        "Amir Temur",
        "Ahmad al-Farg‘oniy",
        "Fransuz inqilobi"
      ],
      "correctAnswer": 0,
      "hint": "O‘zbekiston davlat mustaqilligi e’lon qilingan tarixiy hujjat.",
      "difficulty": "easy"
    },
    {
      "id": "history-042",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: O‘zbekiston davlat mustaqilligi e’lon qilingan tarixiy hujjat. Qaysi atama nazarda tutilgan?",
      "options": [
        "Renessans",
        "Mustaqillik deklaratsiyasi",
        "Alisher Navoiy",
        "BMT"
      ],
      "correctAnswer": 1,
      "hint": "O‘zbekiston davlat mustaqilligi e’lon qilingan tarixiy hujjat.",
      "difficulty": "medium"
    },
    {
      "id": "history-043",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: O‘zbekiston davlat mustaqilligi e’lon qilingan tarixiy hujjat.",
      "options": [
        "Mustaqillik deklaratsiyasi",
        "Ikkinchi jahon urushi",
        "Zahiriddin Muhammad Bobur",
        "Imom al-Buxoriy"
      ],
      "correctAnswer": 0,
      "hint": "O‘zbekiston davlat mustaqilligi e’lon qilingan tarixiy hujjat.",
      "difficulty": "hard"
    },
    {
      "id": "history-044",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — O‘zbekiston davlat mustaqilligi e’lon qilingan tarixiy hujjat.",
      "options": [
        "Muhammad al-Xorazmiy",
        "Uyg‘onish davri",
        "Mustaqillik deklaratsiyasi",
        "Jaloliddin Manguberdi"
      ],
      "correctAnswer": 2,
      "hint": "O‘zbekiston davlat mustaqilligi e’lon qilingan tarixiy hujjat.",
      "difficulty": "mixed"
    },
    {
      "id": "history-045",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Davlatning asosiy qonuni va huquqiy tizimining poydevori. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Jaloliddin Manguberdi",
        "Uyg‘onish davri",
        "Konstitutsiya",
        "Muhammad al-Xorazmiy"
      ],
      "correctAnswer": 2,
      "hint": "Davlatning asosiy qonuni va huquqiy tizimining poydevori.",
      "difficulty": "easy"
    },
    {
      "id": "history-046",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: Davlatning asosiy qonuni va huquqiy tizimining poydevori. Qaysi atama nazarda tutilgan?",
      "options": [
        "Birinchi jahon urushi",
        "Buyuk ipak yo‘li",
        "Konstitutsiya",
        "Abu Ali ibn Sino"
      ],
      "correctAnswer": 2,
      "hint": "Davlatning asosiy qonuni va huquqiy tizimining poydevori.",
      "difficulty": "medium"
    },
    {
      "id": "history-047",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Davlatning asosiy qonuni va huquqiy tizimining poydevori.",
      "options": [
        "Mirzo Ulug‘bek",
        "Mustaqillik deklaratsiyasi",
        "Konstitutsiya",
        "Sanoat inqilobi"
      ],
      "correctAnswer": 2,
      "hint": "Davlatning asosiy qonuni va huquqiy tizimining poydevori.",
      "difficulty": "hard"
    },
    {
      "id": "history-048",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — Davlatning asosiy qonuni va huquqiy tizimining poydevori.",
      "options": [
        "Abu Rayhon Beruniy",
        "Fransuz inqilobi",
        "Amir Temur",
        "Konstitutsiya"
      ],
      "correctAnswer": 3,
      "hint": "Davlatning asosiy qonuni va huquqiy tizimining poydevori.",
      "difficulty": "mixed"
    },
    {
      "id": "history-049",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Sharq va G‘arbni bog‘lagan qadimiy savdo va madaniy aloqalar tarmog‘i. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Amir Temur",
        "Buyuk ipak yo‘li",
        "Fransuz inqilobi",
        "Abu Rayhon Beruniy"
      ],
      "correctAnswer": 1,
      "hint": "Sharq va G‘arbni bog‘lagan qadimiy savdo va madaniy aloqalar tarmog‘i.",
      "difficulty": "easy"
    },
    {
      "id": "history-050",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: Sharq va G‘arbni bog‘lagan qadimiy savdo va madaniy aloqalar tarmog‘i. Qaysi atama nazarda tutilgan?",
      "options": [
        "Alisher Navoiy",
        "BMT",
        "Ahmad al-Farg‘oniy",
        "Buyuk ipak yo‘li"
      ],
      "correctAnswer": 3,
      "hint": "Sharq va G‘arbni bog‘lagan qadimiy savdo va madaniy aloqalar tarmog‘i.",
      "difficulty": "medium"
    },
    {
      "id": "history-051",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Sharq va G‘arbni bog‘lagan qadimiy savdo va madaniy aloqalar tarmog‘i.",
      "options": [
        "Buyuk ipak yo‘li",
        "Zahiriddin Muhammad Bobur",
        "Imom al-Buxoriy",
        "Renessans"
      ],
      "correctAnswer": 0,
      "hint": "Sharq va G‘arbni bog‘lagan qadimiy savdo va madaniy aloqalar tarmog‘i.",
      "difficulty": "hard"
    },
    {
      "id": "history-052",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — Sharq va G‘arbni bog‘lagan qadimiy savdo va madaniy aloqalar tarmog‘i.",
      "options": [
        "Muhammad al-Xorazmiy",
        "Ikkinchi jahon urushi",
        "Buyuk ipak yo‘li",
        "Uyg‘onish davri"
      ],
      "correctAnswer": 2,
      "hint": "Sharq va G‘arbni bog‘lagan qadimiy savdo va madaniy aloqalar tarmog‘i.",
      "difficulty": "mixed"
    },
    {
      "id": "history-053",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Yevropada san’at, fan va adabiyot yuksalgan tarixiy davr. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Muhammad al-Xorazmiy",
        "Buyuk ipak yo‘li",
        "Ikkinchi jahon urushi",
        "Uyg‘onish davri"
      ],
      "correctAnswer": 3,
      "hint": "Yevropada san’at, fan va adabiyot yuksalgan tarixiy davr.",
      "difficulty": "easy"
    },
    {
      "id": "history-054",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: Yevropada san’at, fan va adabiyot yuksalgan tarixiy davr. Qaysi atama nazarda tutilgan?",
      "options": [
        "Uyg‘onish davri",
        "Birinchi jahon urushi",
        "Jaloliddin Manguberdi",
        "Konstitutsiya"
      ],
      "correctAnswer": 0,
      "hint": "Yevropada san’at, fan va adabiyot yuksalgan tarixiy davr.",
      "difficulty": "medium"
    },
    {
      "id": "history-055",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Yevropada san’at, fan va adabiyot yuksalgan tarixiy davr.",
      "options": [
        "Abu Ali ibn Sino",
        "Mirzo Ulug‘bek",
        "Sanoat inqilobi",
        "Uyg‘onish davri"
      ],
      "correctAnswer": 3,
      "hint": "Yevropada san’at, fan va adabiyot yuksalgan tarixiy davr.",
      "difficulty": "hard"
    },
    {
      "id": "history-056",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — Yevropada san’at, fan va adabiyot yuksalgan tarixiy davr.",
      "options": [
        "Amir Temur",
        "Abu Rayhon Beruniy",
        "Uyg‘onish davri",
        "Mustaqillik deklaratsiyasi"
      ],
      "correctAnswer": 2,
      "hint": "Yevropada san’at, fan va adabiyot yuksalgan tarixiy davr.",
      "difficulty": "mixed"
    },
    {
      "id": "history-057",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Madaniyat va ilm-fanning qayta yuksalishini anglatuvchi atama. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Mustaqillik deklaratsiyasi",
        "Renessans",
        "Abu Rayhon Beruniy",
        "Amir Temur"
      ],
      "correctAnswer": 1,
      "hint": "Madaniyat va ilm-fanning qayta yuksalishini anglatuvchi atama.",
      "difficulty": "easy"
    },
    {
      "id": "history-058",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: Madaniyat va ilm-fanning qayta yuksalishini anglatuvchi atama. Qaysi atama nazarda tutilgan?",
      "options": [
        "Ahmad al-Farg‘oniy",
        "Alisher Navoiy",
        "Fransuz inqilobi",
        "Renessans"
      ],
      "correctAnswer": 3,
      "hint": "Madaniyat va ilm-fanning qayta yuksalishini anglatuvchi atama.",
      "difficulty": "medium"
    },
    {
      "id": "history-059",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Madaniyat va ilm-fanning qayta yuksalishini anglatuvchi atama.",
      "options": [
        "BMT",
        "Imom al-Buxoriy",
        "Renessans",
        "Uyg‘onish davri"
      ],
      "correctAnswer": 2,
      "hint": "Madaniyat va ilm-fanning qayta yuksalishini anglatuvchi atama.",
      "difficulty": "hard"
    },
    {
      "id": "history-060",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — Madaniyat va ilm-fanning qayta yuksalishini anglatuvchi atama.",
      "options": [
        "Buyuk ipak yo‘li",
        "Zahiriddin Muhammad Bobur",
        "Ikkinchi jahon urushi",
        "Renessans"
      ],
      "correctAnswer": 3,
      "hint": "Madaniyat va ilm-fanning qayta yuksalishini anglatuvchi atama.",
      "difficulty": "mixed"
    },
    {
      "id": "history-061",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "1789-yilda boshlangan, monarxiya va jamiyat tuzumini o‘zgartirgan inqilob. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Buyuk ipak yo‘li",
        "Zahiriddin Muhammad Bobur",
        "Ikkinchi jahon urushi",
        "Fransuz inqilobi"
      ],
      "correctAnswer": 3,
      "hint": "1789-yilda boshlangan, monarxiya va jamiyat tuzumini o‘zgartirgan inqilob.",
      "difficulty": "easy"
    },
    {
      "id": "history-062",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: 1789-yilda boshlangan, monarxiya va jamiyat tuzumini o‘zgartirgan inqilob. Qaysi atama nazarda tutilgan?",
      "options": [
        "Muhammad al-Xorazmiy",
        "Fransuz inqilobi",
        "Birinchi jahon urushi",
        "Jaloliddin Manguberdi"
      ],
      "correctAnswer": 1,
      "hint": "1789-yilda boshlangan, monarxiya va jamiyat tuzumini o‘zgartirgan inqilob.",
      "difficulty": "medium"
    },
    {
      "id": "history-063",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: 1789-yilda boshlangan, monarxiya va jamiyat tuzumini o‘zgartirgan inqilob.",
      "options": [
        "Mirzo Ulug‘bek",
        "Fransuz inqilobi",
        "Abu Ali ibn Sino",
        "Konstitutsiya"
      ],
      "correctAnswer": 1,
      "hint": "1789-yilda boshlangan, monarxiya va jamiyat tuzumini o‘zgartirgan inqilob.",
      "difficulty": "hard"
    },
    {
      "id": "history-064",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — 1789-yilda boshlangan, monarxiya va jamiyat tuzumini o‘zgartirgan inqilob.",
      "options": [
        "Fransuz inqilobi",
        "Mustaqillik deklaratsiyasi",
        "Sanoat inqilobi",
        "Abu Rayhon Beruniy"
      ],
      "correctAnswer": 0,
      "hint": "1789-yilda boshlangan, monarxiya va jamiyat tuzumini o‘zgartirgan inqilob.",
      "difficulty": "mixed"
    },
    {
      "id": "history-065",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ishlab chiqarishda mashinalar va fabrikalar keng qo‘llanila boshlagan jarayon. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Mustaqillik deklaratsiyasi",
        "Abu Rayhon Beruniy",
        "Fransuz inqilobi",
        "Sanoat inqilobi"
      ],
      "correctAnswer": 3,
      "hint": "Ishlab chiqarishda mashinalar va fabrikalar keng qo‘llanila boshlagan jarayon.",
      "difficulty": "easy"
    },
    {
      "id": "history-066",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: Ishlab chiqarishda mashinalar va fabrikalar keng qo‘llanila boshlagan jarayon. Qaysi atama nazarda tutilgan?",
      "options": [
        "Amir Temur",
        "Renessans",
        "Sanoat inqilobi",
        "Ahmad al-Farg‘oniy"
      ],
      "correctAnswer": 2,
      "hint": "Ishlab chiqarishda mashinalar va fabrikalar keng qo‘llanila boshlagan jarayon.",
      "difficulty": "medium"
    },
    {
      "id": "history-067",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Ishlab chiqarishda mashinalar va fabrikalar keng qo‘llanila boshlagan jarayon.",
      "options": [
        "Uyg‘onish davri",
        "Alisher Navoiy",
        "BMT",
        "Sanoat inqilobi"
      ],
      "correctAnswer": 3,
      "hint": "Ishlab chiqarishda mashinalar va fabrikalar keng qo‘llanila boshlagan jarayon.",
      "difficulty": "hard"
    },
    {
      "id": "history-068",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — Ishlab chiqarishda mashinalar va fabrikalar keng qo‘llanila boshlagan jarayon.",
      "options": [
        "Imom al-Buxoriy",
        "Ikkinchi jahon urushi",
        "Zahiriddin Muhammad Bobur",
        "Sanoat inqilobi"
      ],
      "correctAnswer": 3,
      "hint": "Ishlab chiqarishda mashinalar va fabrikalar keng qo‘llanila boshlagan jarayon.",
      "difficulty": "mixed"
    },
    {
      "id": "history-069",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "1914–1918-yillarda davom etgan global harbiy mojaro. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Zahiriddin Muhammad Bobur",
        "Imom al-Buxoriy",
        "Birinchi jahon urushi",
        "Ikkinchi jahon urushi"
      ],
      "correctAnswer": 2,
      "hint": "1914–1918-yillarda davom etgan global harbiy mojaro.",
      "difficulty": "easy"
    },
    {
      "id": "history-070",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: 1914–1918-yillarda davom etgan global harbiy mojaro. Qaysi atama nazarda tutilgan?",
      "options": [
        "Jaloliddin Manguberdi",
        "Muhammad al-Xorazmiy",
        "Buyuk ipak yo‘li",
        "Birinchi jahon urushi"
      ],
      "correctAnswer": 3,
      "hint": "1914–1918-yillarda davom etgan global harbiy mojaro.",
      "difficulty": "medium"
    },
    {
      "id": "history-071",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: 1914–1918-yillarda davom etgan global harbiy mojaro.",
      "options": [
        "Sanoat inqilobi",
        "Birinchi jahon urushi",
        "Konstitutsiya",
        "Abu Ali ibn Sino"
      ],
      "correctAnswer": 1,
      "hint": "1914–1918-yillarda davom etgan global harbiy mojaro.",
      "difficulty": "hard"
    },
    {
      "id": "history-072",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — 1914–1918-yillarda davom etgan global harbiy mojaro.",
      "options": [
        "Birinchi jahon urushi",
        "Fransuz inqilobi",
        "Mirzo Ulug‘bek",
        "Mustaqillik deklaratsiyasi"
      ],
      "correctAnswer": 0,
      "hint": "1914–1918-yillarda davom etgan global harbiy mojaro.",
      "difficulty": "mixed"
    },
    {
      "id": "history-073",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "1939–1945-yillarda davom etgan eng yirik global urush. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Mirzo Ulug‘bek",
        "Mustaqillik deklaratsiyasi",
        "Fransuz inqilobi",
        "Ikkinchi jahon urushi"
      ],
      "correctAnswer": 3,
      "hint": "1939–1945-yillarda davom etgan eng yirik global urush.",
      "difficulty": "easy"
    },
    {
      "id": "history-074",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: 1939–1945-yillarda davom etgan eng yirik global urush. Qaysi atama nazarda tutilgan?",
      "options": [
        "Renessans",
        "Ikkinchi jahon urushi",
        "Amir Temur",
        "Abu Rayhon Beruniy"
      ],
      "correctAnswer": 1,
      "hint": "1939–1945-yillarda davom etgan eng yirik global urush.",
      "difficulty": "medium"
    },
    {
      "id": "history-075",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: 1939–1945-yillarda davom etgan eng yirik global urush.",
      "options": [
        "BMT",
        "Alisher Navoiy",
        "Ikkinchi jahon urushi",
        "Ahmad al-Farg‘oniy"
      ],
      "correctAnswer": 2,
      "hint": "1939–1945-yillarda davom etgan eng yirik global urush.",
      "difficulty": "hard"
    },
    {
      "id": "history-076",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — 1939–1945-yillarda davom etgan eng yirik global urush.",
      "options": [
        "Ikkinchi jahon urushi",
        "Zahiriddin Muhammad Bobur",
        "Uyg‘onish davri",
        "Imom al-Buxoriy"
      ],
      "correctAnswer": 0,
      "hint": "1939–1945-yillarda davom etgan eng yirik global urush.",
      "difficulty": "mixed"
    },
    {
      "id": "history-077",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "1945-yilda xalqaro tinchlik va xavfsizlikni qo‘llab-quvvatlash uchun tuzilgan tashkilot. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Uyg‘onish davri",
        "Zahiriddin Muhammad Bobur",
        "Imom al-Buxoriy",
        "BMT"
      ],
      "correctAnswer": 3,
      "hint": "1945-yilda xalqaro tinchlik va xavfsizlikni qo‘llab-quvvatlash uchun tuzilgan tashkilot.",
      "difficulty": "easy"
    },
    {
      "id": "history-078",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Darslikdagi quyidagi izohni o‘qing: 1945-yilda xalqaro tinchlik va xavfsizlikni qo‘llab-quvvatlash uchun tuzilgan tashkilot. Qaysi atama nazarda tutilgan?",
      "options": [
        "BMT",
        "Muhammad al-Xorazmiy",
        "Buyuk ipak yo‘li",
        "Birinchi jahon urushi"
      ],
      "correctAnswer": 0,
      "hint": "1945-yilda xalqaro tinchlik va xavfsizlikni qo‘llab-quvvatlash uchun tuzilgan tashkilot.",
      "difficulty": "medium"
    },
    {
      "id": "history-079",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: 1945-yilda xalqaro tinchlik va xavfsizlikni qo‘llab-quvvatlash uchun tuzilgan tashkilot.",
      "options": [
        "BMT",
        "Jaloliddin Manguberdi",
        "Konstitutsiya",
        "Sanoat inqilobi"
      ],
      "correctAnswer": 0,
      "hint": "1945-yilda xalqaro tinchlik va xavfsizlikni qo‘llab-quvvatlash uchun tuzilgan tashkilot.",
      "difficulty": "hard"
    },
    {
      "id": "history-080",
      "subjectId": "history",
      "subject": "Tarix",
      "question": "Ta’rifga mos atamani toping — 1945-yilda xalqaro tinchlik va xavfsizlikni qo‘llab-quvvatlash uchun tuzilgan tashkilot.",
      "options": [
        "Fransuz inqilobi",
        "Abu Ali ibn Sino",
        "Mirzo Ulug‘bek",
        "BMT"
      ],
      "correctAnswer": 3,
      "hint": "1945-yilda xalqaro tinchlik va xavfsizlikni qo‘llab-quvvatlash uchun tuzilgan tashkilot.",
      "difficulty": "mixed"
    }
  ],
  "english": [
    {
      "id": "english-001",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Odatlar, takroriy ishlar va umumiy haqiqatlarni ifodalovchi zamon. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Countable noun",
        "Pronoun",
        "Future Simple",
        "Present Simple"
      ],
      "correctAnswer": 3,
      "hint": "Odatlar, takroriy ishlar va umumiy haqiqatlarni ifodalovchi zamon.",
      "difficulty": "easy"
    },
    {
      "id": "english-002",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Odatlar, takroriy ishlar va umumiy haqiqatlarni ifodalovchi zamon. Qaysi atama nazarda tutilgan?",
      "options": [
        "Present Simple",
        "Superlative",
        "Adverb",
        "Gerund"
      ],
      "correctAnswer": 0,
      "hint": "Odatlar, takroriy ishlar va umumiy haqiqatlarni ifodalovchi zamon.",
      "difficulty": "medium"
    },
    {
      "id": "english-003",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Odatlar, takroriy ishlar va umumiy haqiqatlarni ifodalovchi zamon.",
      "options": [
        "Present Simple",
        "Comparative",
        "Present Perfect",
        "Infinitive"
      ],
      "correctAnswer": 0,
      "hint": "Odatlar, takroriy ishlar va umumiy haqiqatlarni ifodalovchi zamon.",
      "difficulty": "hard"
    },
    {
      "id": "english-004",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — Odatlar, takroriy ishlar va umumiy haqiqatlarni ifodalovchi zamon.",
      "options": [
        "Present Simple",
        "Past Simple",
        "Passive voice",
        "Adjective"
      ],
      "correctAnswer": 0,
      "hint": "Odatlar, takroriy ishlar va umumiy haqiqatlarni ifodalovchi zamon.",
      "difficulty": "mixed"
    },
    {
      "id": "english-005",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Hozir sodir bo‘layotgan yoki vaqtinchalik davom etayotgan ish-harakat zamoni. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Present Continuous",
        "Adjective",
        "Passive voice",
        "Past Simple"
      ],
      "correctAnswer": 0,
      "hint": "Hozir sodir bo‘layotgan yoki vaqtinchalik davom etayotgan ish-harakat zamoni.",
      "difficulty": "easy"
    },
    {
      "id": "english-006",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Hozir sodir bo‘layotgan yoki vaqtinchalik davom etayotgan ish-harakat zamoni. Qaysi atama nazarda tutilgan?",
      "options": [
        "Present Simple",
        "Conjunction",
        "Present Continuous",
        "Modal verb"
      ],
      "correctAnswer": 2,
      "hint": "Hozir sodir bo‘layotgan yoki vaqtinchalik davom etayotgan ish-harakat zamoni.",
      "difficulty": "medium"
    },
    {
      "id": "english-007",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Hozir sodir bo‘layotgan yoki vaqtinchalik davom etayotgan ish-harakat zamoni.",
      "options": [
        "Past Continuous",
        "Uncountable noun",
        "Preposition",
        "Present Continuous"
      ],
      "correctAnswer": 3,
      "hint": "Hozir sodir bo‘layotgan yoki vaqtinchalik davom etayotgan ish-harakat zamoni.",
      "difficulty": "hard"
    },
    {
      "id": "english-008",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — Hozir sodir bo‘layotgan yoki vaqtinchalik davom etayotgan ish-harakat zamoni.",
      "options": [
        "Present Continuous",
        "Countable noun",
        "Pronoun",
        "Article"
      ],
      "correctAnswer": 0,
      "hint": "Hozir sodir bo‘layotgan yoki vaqtinchalik davom etayotgan ish-harakat zamoni.",
      "difficulty": "mixed"
    },
    {
      "id": "english-009",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "O‘tmishda tugagan ish-harakatni ifodalovchi zamon. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Pronoun",
        "Countable noun",
        "Article",
        "Past Simple"
      ],
      "correctAnswer": 3,
      "hint": "O‘tmishda tugagan ish-harakatni ifodalovchi zamon.",
      "difficulty": "easy"
    },
    {
      "id": "english-010",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: O‘tmishda tugagan ish-harakatni ifodalovchi zamon. Qaysi atama nazarda tutilgan?",
      "options": [
        "Superlative",
        "Gerund",
        "Past Simple",
        "Future Simple"
      ],
      "correctAnswer": 2,
      "hint": "O‘tmishda tugagan ish-harakatni ifodalovchi zamon.",
      "difficulty": "medium"
    },
    {
      "id": "english-011",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: O‘tmishda tugagan ish-harakatni ifodalovchi zamon.",
      "options": [
        "Adverb",
        "Infinitive",
        "Past Simple",
        "Present Perfect"
      ],
      "correctAnswer": 2,
      "hint": "O‘tmishda tugagan ish-harakatni ifodalovchi zamon.",
      "difficulty": "hard"
    },
    {
      "id": "english-012",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — O‘tmishda tugagan ish-harakatni ifodalovchi zamon.",
      "options": [
        "Past Simple",
        "Comparative",
        "Adjective",
        "Present Continuous"
      ],
      "correctAnswer": 0,
      "hint": "O‘tmishda tugagan ish-harakatni ifodalovchi zamon.",
      "difficulty": "mixed"
    },
    {
      "id": "english-013",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "O‘tmishda sodir bo‘lib, hozir bilan aloqasi bor ish-harakat zamoni. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Comparative",
        "Present Perfect",
        "Adjective",
        "Present Continuous"
      ],
      "correctAnswer": 1,
      "hint": "O‘tmishda sodir bo‘lib, hozir bilan aloqasi bor ish-harakat zamoni.",
      "difficulty": "easy"
    },
    {
      "id": "english-014",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: O‘tmishda sodir bo‘lib, hozir bilan aloqasi bor ish-harakat zamoni. Qaysi atama nazarda tutilgan?",
      "options": [
        "Passive voice",
        "Present Perfect",
        "Modal verb",
        "Conjunction"
      ],
      "correctAnswer": 1,
      "hint": "O‘tmishda sodir bo‘lib, hozir bilan aloqasi bor ish-harakat zamoni.",
      "difficulty": "medium"
    },
    {
      "id": "english-015",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: O‘tmishda sodir bo‘lib, hozir bilan aloqasi bor ish-harakat zamoni.",
      "options": [
        "Present Perfect",
        "Uncountable noun",
        "Present Simple",
        "Preposition"
      ],
      "correctAnswer": 0,
      "hint": "O‘tmishda sodir bo‘lib, hozir bilan aloqasi bor ish-harakat zamoni.",
      "difficulty": "hard"
    },
    {
      "id": "english-016",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — O‘tmishda sodir bo‘lib, hozir bilan aloqasi bor ish-harakat zamoni.",
      "options": [
        "Past Continuous",
        "Present Perfect",
        "Countable noun",
        "Article"
      ],
      "correctAnswer": 1,
      "hint": "O‘tmishda sodir bo‘lib, hozir bilan aloqasi bor ish-harakat zamoni.",
      "difficulty": "mixed"
    },
    {
      "id": "english-017",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Will yordamida kelajakdagi qaror, taxmin yoki va’dani ifodalovchi shakl. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Past Continuous",
        "Countable noun",
        "Future Simple",
        "Article"
      ],
      "correctAnswer": 2,
      "hint": "Will yordamida kelajakdagi qaror, taxmin yoki va’dani ifodalovchi shakl.",
      "difficulty": "easy"
    },
    {
      "id": "english-018",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Will yordamida kelajakdagi qaror, taxmin yoki va’dani ifodalovchi shakl. Qaysi atama nazarda tutilgan?",
      "options": [
        "Pronoun",
        "Present Perfect",
        "Future Simple",
        "Gerund"
      ],
      "correctAnswer": 2,
      "hint": "Will yordamida kelajakdagi qaror, taxmin yoki va’dani ifodalovchi shakl.",
      "difficulty": "medium"
    },
    {
      "id": "english-019",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Will yordamida kelajakdagi qaror, taxmin yoki va’dani ifodalovchi shakl.",
      "options": [
        "Superlative",
        "Adverb",
        "Past Simple",
        "Future Simple"
      ],
      "correctAnswer": 3,
      "hint": "Will yordamida kelajakdagi qaror, taxmin yoki va’dani ifodalovchi shakl.",
      "difficulty": "hard"
    },
    {
      "id": "english-020",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — Will yordamida kelajakdagi qaror, taxmin yoki va’dani ifodalovchi shakl.",
      "options": [
        "Adjective",
        "Comparative",
        "Infinitive",
        "Future Simple"
      ],
      "correctAnswer": 3,
      "hint": "Will yordamida kelajakdagi qaror, taxmin yoki va’dani ifodalovchi shakl.",
      "difficulty": "mixed"
    },
    {
      "id": "english-021",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "O‘tmishdagi muayyan vaqtda davom etayotgan ish-harakat zamoni. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Infinitive",
        "Adjective",
        "Past Continuous",
        "Comparative"
      ],
      "correctAnswer": 2,
      "hint": "O‘tmishdagi muayyan vaqtda davom etayotgan ish-harakat zamoni.",
      "difficulty": "easy"
    },
    {
      "id": "english-022",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: O‘tmishdagi muayyan vaqtda davom etayotgan ish-harakat zamoni. Qaysi atama nazarda tutilgan?",
      "options": [
        "Conjunction",
        "Present Continuous",
        "Passive voice",
        "Past Continuous"
      ],
      "correctAnswer": 3,
      "hint": "O‘tmishdagi muayyan vaqtda davom etayotgan ish-harakat zamoni.",
      "difficulty": "medium"
    },
    {
      "id": "english-023",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: O‘tmishdagi muayyan vaqtda davom etayotgan ish-harakat zamoni.",
      "options": [
        "Present Simple",
        "Modal verb",
        "Past Continuous",
        "Uncountable noun"
      ],
      "correctAnswer": 2,
      "hint": "O‘tmishdagi muayyan vaqtda davom etayotgan ish-harakat zamoni.",
      "difficulty": "hard"
    },
    {
      "id": "english-024",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — O‘tmishdagi muayyan vaqtda davom etayotgan ish-harakat zamoni.",
      "options": [
        "Preposition",
        "Article",
        "Future Simple",
        "Past Continuous"
      ],
      "correctAnswer": 3,
      "hint": "O‘tmishdagi muayyan vaqtda davom etayotgan ish-harakat zamoni.",
      "difficulty": "mixed"
    },
    {
      "id": "english-025",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Can, must, should kabi imkoniyat, majburiyat yoki maslahatni bildiruvchi fe’l. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Modal verb",
        "Future Simple",
        "Preposition",
        "Article"
      ],
      "correctAnswer": 0,
      "hint": "Can, must, should kabi imkoniyat, majburiyat yoki maslahatni bildiruvchi fe’l.",
      "difficulty": "easy"
    },
    {
      "id": "english-026",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Can, must, should kabi imkoniyat, majburiyat yoki maslahatni bildiruvchi fe’l. Qaysi atama nazarda tutilgan?",
      "options": [
        "Countable noun",
        "Pronoun",
        "Modal verb",
        "Present Perfect"
      ],
      "correctAnswer": 2,
      "hint": "Can, must, should kabi imkoniyat, majburiyat yoki maslahatni bildiruvchi fe’l.",
      "difficulty": "medium"
    },
    {
      "id": "english-027",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Can, must, should kabi imkoniyat, majburiyat yoki maslahatni bildiruvchi fe’l.",
      "options": [
        "Modal verb",
        "Adverb",
        "Gerund",
        "Superlative"
      ],
      "correctAnswer": 0,
      "hint": "Can, must, should kabi imkoniyat, majburiyat yoki maslahatni bildiruvchi fe’l.",
      "difficulty": "hard"
    },
    {
      "id": "english-028",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — Can, must, should kabi imkoniyat, majburiyat yoki maslahatni bildiruvchi fe’l.",
      "options": [
        "Comparative",
        "Modal verb",
        "Infinitive",
        "Past Simple"
      ],
      "correctAnswer": 1,
      "hint": "Can, must, should kabi imkoniyat, majburiyat yoki maslahatni bildiruvchi fe’l.",
      "difficulty": "mixed"
    },
    {
      "id": "english-029",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Otning belgisini yoki xususiyatini bildiruvchi so‘z turkumi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Past Simple",
        "Comparative",
        "Infinitive",
        "Adjective"
      ],
      "correctAnswer": 3,
      "hint": "Otning belgisini yoki xususiyatini bildiruvchi so‘z turkumi.",
      "difficulty": "easy"
    },
    {
      "id": "english-030",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Otning belgisini yoki xususiyatini bildiruvchi so‘z turkumi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Modal verb",
        "Adjective",
        "Present Continuous",
        "Passive voice"
      ],
      "correctAnswer": 1,
      "hint": "Otning belgisini yoki xususiyatini bildiruvchi so‘z turkumi.",
      "difficulty": "medium"
    },
    {
      "id": "english-031",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Otning belgisini yoki xususiyatini bildiruvchi so‘z turkumi.",
      "options": [
        "Past Continuous",
        "Present Simple",
        "Adjective",
        "Conjunction"
      ],
      "correctAnswer": 2,
      "hint": "Otning belgisini yoki xususiyatini bildiruvchi so‘z turkumi.",
      "difficulty": "hard"
    },
    {
      "id": "english-032",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — Otning belgisini yoki xususiyatini bildiruvchi so‘z turkumi.",
      "options": [
        "Preposition",
        "Uncountable noun",
        "Adjective",
        "Future Simple"
      ],
      "correctAnswer": 2,
      "hint": "Otning belgisini yoki xususiyatini bildiruvchi so‘z turkumi.",
      "difficulty": "mixed"
    },
    {
      "id": "english-033",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Fe’l, sifat yoki boshqa ravishning belgisini bildiruvchi so‘z. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Uncountable noun",
        "Adverb",
        "Future Simple",
        "Preposition"
      ],
      "correctAnswer": 1,
      "hint": "Fe’l, sifat yoki boshqa ravishning belgisini bildiruvchi so‘z.",
      "difficulty": "easy"
    },
    {
      "id": "english-034",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Fe’l, sifat yoki boshqa ravishning belgisini bildiruvchi so‘z. Qaysi atama nazarda tutilgan?",
      "options": [
        "Adverb",
        "Countable noun",
        "Pronoun",
        "Article"
      ],
      "correctAnswer": 0,
      "hint": "Fe’l, sifat yoki boshqa ravishning belgisini bildiruvchi so‘z.",
      "difficulty": "medium"
    },
    {
      "id": "english-035",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Fe’l, sifat yoki boshqa ravishning belgisini bildiruvchi so‘z.",
      "options": [
        "Present Perfect",
        "Gerund",
        "Adverb",
        "Superlative"
      ],
      "correctAnswer": 2,
      "hint": "Fe’l, sifat yoki boshqa ravishning belgisini bildiruvchi so‘z.",
      "difficulty": "hard"
    },
    {
      "id": "english-036",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — Fe’l, sifat yoki boshqa ravishning belgisini bildiruvchi so‘z.",
      "options": [
        "Adverb",
        "Adjective",
        "Past Simple",
        "Infinitive"
      ],
      "correctAnswer": 0,
      "hint": "Fe’l, sifat yoki boshqa ravishning belgisini bildiruvchi so‘z.",
      "difficulty": "mixed"
    },
    {
      "id": "english-037",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ot o‘rnida qo‘llanadigan olmosh. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Pronoun",
        "Infinitive",
        "Past Simple",
        "Adjective"
      ],
      "correctAnswer": 0,
      "hint": "Ot o‘rnida qo‘llanadigan olmosh.",
      "difficulty": "easy"
    },
    {
      "id": "english-038",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Ot o‘rnida qo‘llanadigan olmosh. Qaysi atama nazarda tutilgan?",
      "options": [
        "Pronoun",
        "Comparative",
        "Present Continuous",
        "Modal verb"
      ],
      "correctAnswer": 0,
      "hint": "Ot o‘rnida qo‘llanadigan olmosh.",
      "difficulty": "medium"
    },
    {
      "id": "english-039",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Ot o‘rnida qo‘llanadigan olmosh.",
      "options": [
        "Past Continuous",
        "Pronoun",
        "Passive voice",
        "Conjunction"
      ],
      "correctAnswer": 1,
      "hint": "Ot o‘rnida qo‘llanadigan olmosh.",
      "difficulty": "hard"
    },
    {
      "id": "english-040",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — Ot o‘rnida qo‘llanadigan olmosh.",
      "options": [
        "Preposition",
        "Pronoun",
        "Uncountable noun",
        "Present Simple"
      ],
      "correctAnswer": 1,
      "hint": "Ot o‘rnida qo‘llanadigan olmosh.",
      "difficulty": "mixed"
    },
    {
      "id": "english-041",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "So‘zlar orasidagi joy, vaqt yoki yo‘nalish munosabatini bildiruvchi predlog. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Present Simple",
        "Preposition",
        "Pronoun",
        "Uncountable noun"
      ],
      "correctAnswer": 1,
      "hint": "So‘zlar orasidagi joy, vaqt yoki yo‘nalish munosabatini bildiruvchi predlog.",
      "difficulty": "easy"
    },
    {
      "id": "english-042",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: So‘zlar orasidagi joy, vaqt yoki yo‘nalish munosabatini bildiruvchi predlog. Qaysi atama nazarda tutilgan?",
      "options": [
        "Future Simple",
        "Article",
        "Countable noun",
        "Preposition"
      ],
      "correctAnswer": 3,
      "hint": "So‘zlar orasidagi joy, vaqt yoki yo‘nalish munosabatini bildiruvchi predlog.",
      "difficulty": "medium"
    },
    {
      "id": "english-043",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: So‘zlar orasidagi joy, vaqt yoki yo‘nalish munosabatini bildiruvchi predlog.",
      "options": [
        "Adverb",
        "Gerund",
        "Preposition",
        "Present Perfect"
      ],
      "correctAnswer": 2,
      "hint": "So‘zlar orasidagi joy, vaqt yoki yo‘nalish munosabatini bildiruvchi predlog.",
      "difficulty": "hard"
    },
    {
      "id": "english-044",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — So‘zlar orasidagi joy, vaqt yoki yo‘nalish munosabatini bildiruvchi predlog.",
      "options": [
        "Adjective",
        "Preposition",
        "Past Simple",
        "Superlative"
      ],
      "correctAnswer": 1,
      "hint": "So‘zlar orasidagi joy, vaqt yoki yo‘nalish munosabatini bildiruvchi predlog.",
      "difficulty": "mixed"
    },
    {
      "id": "english-045",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "So‘z, ibora yoki gaplarni bog‘lovchi birlik. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Conjunction",
        "Superlative",
        "Past Simple",
        "Adjective"
      ],
      "correctAnswer": 0,
      "hint": "So‘z, ibora yoki gaplarni bog‘lovchi birlik.",
      "difficulty": "easy"
    },
    {
      "id": "english-046",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: So‘z, ibora yoki gaplarni bog‘lovchi birlik. Qaysi atama nazarda tutilgan?",
      "options": [
        "Conjunction",
        "Infinitive",
        "Comparative",
        "Modal verb"
      ],
      "correctAnswer": 0,
      "hint": "So‘z, ibora yoki gaplarni bog‘lovchi birlik.",
      "difficulty": "medium"
    },
    {
      "id": "english-047",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: So‘z, ibora yoki gaplarni bog‘lovchi birlik.",
      "options": [
        "Conjunction",
        "Preposition",
        "Passive voice",
        "Present Continuous"
      ],
      "correctAnswer": 0,
      "hint": "So‘z, ibora yoki gaplarni bog‘lovchi birlik.",
      "difficulty": "hard"
    },
    {
      "id": "english-048",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — So‘z, ibora yoki gaplarni bog‘lovchi birlik.",
      "options": [
        "Uncountable noun",
        "Conjunction",
        "Present Simple",
        "Past Continuous"
      ],
      "correctAnswer": 1,
      "hint": "So‘z, ibora yoki gaplarni bog‘lovchi birlik.",
      "difficulty": "mixed"
    },
    {
      "id": "english-049",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ikki narsa yoki shaxsni qiyoslash uchun ishlatiladigan sifat darajasi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Past Continuous",
        "Present Simple",
        "Uncountable noun",
        "Comparative"
      ],
      "correctAnswer": 3,
      "hint": "Ikki narsa yoki shaxsni qiyoslash uchun ishlatiladigan sifat darajasi.",
      "difficulty": "easy"
    },
    {
      "id": "english-050",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Ikki narsa yoki shaxsni qiyoslash uchun ishlatiladigan sifat darajasi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Comparative",
        "Future Simple",
        "Pronoun",
        "Article"
      ],
      "correctAnswer": 0,
      "hint": "Ikki narsa yoki shaxsni qiyoslash uchun ishlatiladigan sifat darajasi.",
      "difficulty": "medium"
    },
    {
      "id": "english-051",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Ikki narsa yoki shaxsni qiyoslash uchun ishlatiladigan sifat darajasi.",
      "options": [
        "Countable noun",
        "Adverb",
        "Present Perfect",
        "Comparative"
      ],
      "correctAnswer": 3,
      "hint": "Ikki narsa yoki shaxsni qiyoslash uchun ishlatiladigan sifat darajasi.",
      "difficulty": "hard"
    },
    {
      "id": "english-052",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — Ikki narsa yoki shaxsni qiyoslash uchun ishlatiladigan sifat darajasi.",
      "options": [
        "Comparative",
        "Adjective",
        "Superlative",
        "Gerund"
      ],
      "correctAnswer": 0,
      "hint": "Ikki narsa yoki shaxsni qiyoslash uchun ishlatiladigan sifat darajasi.",
      "difficulty": "mixed"
    },
    {
      "id": "english-053",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Uch yoki undan ortiq narsa orasida eng yuqori darajani bildiruvchi shakl. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Comparative",
        "Superlative",
        "Adjective",
        "Gerund"
      ],
      "correctAnswer": 1,
      "hint": "Uch yoki undan ortiq narsa orasida eng yuqori darajani bildiruvchi shakl.",
      "difficulty": "easy"
    },
    {
      "id": "english-054",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Uch yoki undan ortiq narsa orasida eng yuqori darajani bildiruvchi shakl. Qaysi atama nazarda tutilgan?",
      "options": [
        "Past Simple",
        "Conjunction",
        "Infinitive",
        "Superlative"
      ],
      "correctAnswer": 3,
      "hint": "Uch yoki undan ortiq narsa orasida eng yuqori darajani bildiruvchi shakl.",
      "difficulty": "medium"
    },
    {
      "id": "english-055",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Uch yoki undan ortiq narsa orasida eng yuqori darajani bildiruvchi shakl.",
      "options": [
        "Passive voice",
        "Present Continuous",
        "Modal verb",
        "Superlative"
      ],
      "correctAnswer": 3,
      "hint": "Uch yoki undan ortiq narsa orasida eng yuqori darajani bildiruvchi shakl.",
      "difficulty": "hard"
    },
    {
      "id": "english-056",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — Uch yoki undan ortiq narsa orasida eng yuqori darajani bildiruvchi shakl.",
      "options": [
        "Past Continuous",
        "Superlative",
        "Preposition",
        "Present Simple"
      ],
      "correctAnswer": 1,
      "hint": "Uch yoki undan ortiq narsa orasida eng yuqori darajani bildiruvchi shakl.",
      "difficulty": "mixed"
    },
    {
      "id": "english-057",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Sanash mumkin bo‘lgan, birlik va ko‘plik shakliga ega ot. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Countable noun",
        "Past Continuous",
        "Preposition",
        "Present Simple"
      ],
      "correctAnswer": 0,
      "hint": "Sanash mumkin bo‘lgan, birlik va ko‘plik shakliga ega ot.",
      "difficulty": "easy"
    },
    {
      "id": "english-058",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Sanash mumkin bo‘lgan, birlik va ko‘plik shakliga ega ot. Qaysi atama nazarda tutilgan?",
      "options": [
        "Pronoun",
        "Future Simple",
        "Countable noun",
        "Uncountable noun"
      ],
      "correctAnswer": 2,
      "hint": "Sanash mumkin bo‘lgan, birlik va ko‘plik shakliga ega ot.",
      "difficulty": "medium"
    },
    {
      "id": "english-059",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Sanash mumkin bo‘lgan, birlik va ko‘plik shakliga ega ot.",
      "options": [
        "Superlative",
        "Adverb",
        "Article",
        "Countable noun"
      ],
      "correctAnswer": 3,
      "hint": "Sanash mumkin bo‘lgan, birlik va ko‘plik shakliga ega ot.",
      "difficulty": "hard"
    },
    {
      "id": "english-060",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — Sanash mumkin bo‘lgan, birlik va ko‘plik shakliga ega ot.",
      "options": [
        "Gerund",
        "Present Perfect",
        "Countable noun",
        "Comparative"
      ],
      "correctAnswer": 2,
      "hint": "Sanash mumkin bo‘lgan, birlik va ko‘plik shakliga ega ot.",
      "difficulty": "mixed"
    },
    {
      "id": "english-061",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Odatda dona-dona sanalmaydigan modda yoki tushunchani bildiruvchi ot. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Comparative",
        "Gerund",
        "Uncountable noun",
        "Present Perfect"
      ],
      "correctAnswer": 2,
      "hint": "Odatda dona-dona sanalmaydigan modda yoki tushunchani bildiruvchi ot.",
      "difficulty": "easy"
    },
    {
      "id": "english-062",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Odatda dona-dona sanalmaydigan modda yoki tushunchani bildiruvchi ot. Qaysi atama nazarda tutilgan?",
      "options": [
        "Uncountable noun",
        "Infinitive",
        "Past Simple",
        "Adjective"
      ],
      "correctAnswer": 0,
      "hint": "Odatda dona-dona sanalmaydigan modda yoki tushunchani bildiruvchi ot.",
      "difficulty": "medium"
    },
    {
      "id": "english-063",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Odatda dona-dona sanalmaydigan modda yoki tushunchani bildiruvchi ot.",
      "options": [
        "Present Continuous",
        "Modal verb",
        "Uncountable noun",
        "Conjunction"
      ],
      "correctAnswer": 2,
      "hint": "Odatda dona-dona sanalmaydigan modda yoki tushunchani bildiruvchi ot.",
      "difficulty": "hard"
    },
    {
      "id": "english-064",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — Odatda dona-dona sanalmaydigan modda yoki tushunchani bildiruvchi ot.",
      "options": [
        "Past Continuous",
        "Passive voice",
        "Uncountable noun",
        "Preposition"
      ],
      "correctAnswer": 2,
      "hint": "Odatda dona-dona sanalmaydigan modda yoki tushunchani bildiruvchi ot.",
      "difficulty": "mixed"
    },
    {
      "id": "english-065",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Harakat bajaruvchisidan ko‘ra harakat ta’siridagi predmetga urg‘u beruvchi nisbat. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Uncountable noun",
        "Passive voice",
        "Preposition",
        "Past Continuous"
      ],
      "correctAnswer": 1,
      "hint": "Harakat bajaruvchisidan ko‘ra harakat ta’siridagi predmetga urg‘u beruvchi nisbat.",
      "difficulty": "easy"
    },
    {
      "id": "english-066",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Harakat bajaruvchisidan ko‘ra harakat ta’siridagi predmetga urg‘u beruvchi nisbat. Qaysi atama nazarda tutilgan?",
      "options": [
        "Pronoun",
        "Passive voice",
        "Countable noun",
        "Present Simple"
      ],
      "correctAnswer": 1,
      "hint": "Harakat bajaruvchisidan ko‘ra harakat ta’siridagi predmetga urg‘u beruvchi nisbat.",
      "difficulty": "medium"
    },
    {
      "id": "english-067",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Harakat bajaruvchisidan ko‘ra harakat ta’siridagi predmetga urg‘u beruvchi nisbat.",
      "options": [
        "Superlative",
        "Passive voice",
        "Article",
        "Future Simple"
      ],
      "correctAnswer": 1,
      "hint": "Harakat bajaruvchisidan ko‘ra harakat ta’siridagi predmetga urg‘u beruvchi nisbat.",
      "difficulty": "hard"
    },
    {
      "id": "english-068",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — Harakat bajaruvchisidan ko‘ra harakat ta’siridagi predmetga urg‘u beruvchi nisbat.",
      "options": [
        "Adverb",
        "Present Perfect",
        "Passive voice",
        "Gerund"
      ],
      "correctAnswer": 2,
      "hint": "Harakat bajaruvchisidan ko‘ra harakat ta’siridagi predmetga urg‘u beruvchi nisbat.",
      "difficulty": "mixed"
    },
    {
      "id": "english-069",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Fe’lning odatda to bilan keladigan boshlang‘ich shakli. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Present Perfect",
        "Gerund",
        "Adverb",
        "Infinitive"
      ],
      "correctAnswer": 3,
      "hint": "Fe’lning odatda to bilan keladigan boshlang‘ich shakli.",
      "difficulty": "easy"
    },
    {
      "id": "english-070",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Fe’lning odatda to bilan keladigan boshlang‘ich shakli. Qaysi atama nazarda tutilgan?",
      "options": [
        "Adjective",
        "Past Simple",
        "Comparative",
        "Infinitive"
      ],
      "correctAnswer": 3,
      "hint": "Fe’lning odatda to bilan keladigan boshlang‘ich shakli.",
      "difficulty": "medium"
    },
    {
      "id": "english-071",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Fe’lning odatda to bilan keladigan boshlang‘ich shakli.",
      "options": [
        "Passive voice",
        "Conjunction",
        "Infinitive",
        "Modal verb"
      ],
      "correctAnswer": 2,
      "hint": "Fe’lning odatda to bilan keladigan boshlang‘ich shakli.",
      "difficulty": "hard"
    },
    {
      "id": "english-072",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — Fe’lning odatda to bilan keladigan boshlang‘ich shakli.",
      "options": [
        "Preposition",
        "Uncountable noun",
        "Present Continuous",
        "Infinitive"
      ],
      "correctAnswer": 3,
      "hint": "Fe’lning odatda to bilan keladigan boshlang‘ich shakli.",
      "difficulty": "mixed"
    },
    {
      "id": "english-073",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "-ing qo‘shimchasi bilan ot vazifasida ishlatiladigan fe’l shakli. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Uncountable noun",
        "Preposition",
        "Present Continuous",
        "Gerund"
      ],
      "correctAnswer": 3,
      "hint": "-ing qo‘shimchasi bilan ot vazifasida ishlatiladigan fe’l shakli.",
      "difficulty": "easy"
    },
    {
      "id": "english-074",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: -ing qo‘shimchasi bilan ot vazifasida ishlatiladigan fe’l shakli. Qaysi atama nazarda tutilgan?",
      "options": [
        "Past Continuous",
        "Countable noun",
        "Gerund",
        "Present Simple"
      ],
      "correctAnswer": 2,
      "hint": "-ing qo‘shimchasi bilan ot vazifasida ishlatiladigan fe’l shakli.",
      "difficulty": "medium"
    },
    {
      "id": "english-075",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: -ing qo‘shimchasi bilan ot vazifasida ishlatiladigan fe’l shakli.",
      "options": [
        "Pronoun",
        "Gerund",
        "Article",
        "Future Simple"
      ],
      "correctAnswer": 1,
      "hint": "-ing qo‘shimchasi bilan ot vazifasida ishlatiladigan fe’l shakli.",
      "difficulty": "hard"
    },
    {
      "id": "english-076",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — -ing qo‘shimchasi bilan ot vazifasida ishlatiladigan fe’l shakli.",
      "options": [
        "Superlative",
        "Gerund",
        "Present Perfect",
        "Adverb"
      ],
      "correctAnswer": 1,
      "hint": "-ing qo‘shimchasi bilan ot vazifasida ishlatiladigan fe’l shakli.",
      "difficulty": "mixed"
    },
    {
      "id": "english-077",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "A, an yoki the orqali otni aniqlovchi grammatik birlik. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Superlative",
        "Article",
        "Adverb",
        "Present Perfect"
      ],
      "correctAnswer": 1,
      "hint": "A, an yoki the orqali otni aniqlovchi grammatik birlik.",
      "difficulty": "easy"
    },
    {
      "id": "english-078",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: A, an yoki the orqali otni aniqlovchi grammatik birlik. Qaysi atama nazarda tutilgan?",
      "options": [
        "Infinitive",
        "Adjective",
        "Article",
        "Comparative"
      ],
      "correctAnswer": 2,
      "hint": "A, an yoki the orqali otni aniqlovchi grammatik birlik.",
      "difficulty": "medium"
    },
    {
      "id": "english-079",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: A, an yoki the orqali otni aniqlovchi grammatik birlik.",
      "options": [
        "Passive voice",
        "Article",
        "Past Simple",
        "Conjunction"
      ],
      "correctAnswer": 1,
      "hint": "A, an yoki the orqali otni aniqlovchi grammatik birlik.",
      "difficulty": "hard"
    },
    {
      "id": "english-080",
      "subjectId": "english",
      "subject": "Ingliz tili",
      "question": "Ta’rifga mos atamani toping — A, an yoki the orqali otni aniqlovchi grammatik birlik.",
      "options": [
        "Present Continuous",
        "Modal verb",
        "Article",
        "Uncountable noun"
      ],
      "correctAnswer": 2,
      "hint": "A, an yoki the orqali otni aniqlovchi grammatik birlik.",
      "difficulty": "mixed"
    }
  ],
  "russian": [
    {
      "id": "russian-001",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Предмет, лицо или явление обозначает эта часть речи. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Женский род",
        "Существительное",
        "Наречие",
        "Винительный падеж"
      ],
      "correctAnswer": 1,
      "hint": "Предмет, лицо или явление обозначает эта часть речи.",
      "difficulty": "easy"
    },
    {
      "id": "russian-002",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Предмет, лицо или явление обозначает эта часть речи. Qaysi atama nazarda tutilgan?",
      "options": [
        "Существительное",
        "Дательный падеж",
        "Мужской род",
        "Настоящее время"
      ],
      "correctAnswer": 0,
      "hint": "Предмет, лицо или явление обозначает эта часть речи.",
      "difficulty": "medium"
    },
    {
      "id": "russian-003",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Предмет, лицо или явление обозначает эта часть речи.",
      "options": [
        "Родительный падеж",
        "Местоимение",
        "Существительное",
        "Прошедшее время"
      ],
      "correctAnswer": 2,
      "hint": "Предмет, лицо или явление обозначает эта часть речи.",
      "difficulty": "hard"
    },
    {
      "id": "russian-004",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Предмет, лицо или явление обозначает эта часть речи.",
      "options": [
        "Существительное",
        "Числительное",
        "Предложный падеж",
        "Глагол"
      ],
      "correctAnswer": 0,
      "hint": "Предмет, лицо или явление обозначает эта часть речи.",
      "difficulty": "mixed"
    },
    {
      "id": "russian-005",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Признак предмета обозначает эта часть речи. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Числительное",
        "Предложный падеж",
        "Прилагательное",
        "Глагол"
      ],
      "correctAnswer": 2,
      "hint": "Признак предмета обозначает эта часть речи.",
      "difficulty": "easy"
    },
    {
      "id": "russian-006",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Признак предмета обозначает эта часть речи. Qaysi atama nazarda tutilgan?",
      "options": [
        "Именительный падеж",
        "Существительное",
        "Союз",
        "Прилагательное"
      ],
      "correctAnswer": 3,
      "hint": "Признак предмета обозначает эта часть речи.",
      "difficulty": "medium"
    },
    {
      "id": "russian-007",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Признак предмета обозначает эта часть речи.",
      "options": [
        "Творительный падеж",
        "Прилагательное",
        "Средний род",
        "Предлог"
      ],
      "correctAnswer": 1,
      "hint": "Признак предмета обозначает эта часть речи.",
      "difficulty": "hard"
    },
    {
      "id": "russian-008",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Признак предмета обозначает эта часть речи.",
      "options": [
        "Винительный падеж",
        "Женский род",
        "Будущее время",
        "Прилагательное"
      ],
      "correctAnswer": 3,
      "hint": "Признак предмета обозначает эта часть речи.",
      "difficulty": "mixed"
    },
    {
      "id": "russian-009",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Действие или состояние обозначает эта часть речи. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Глагол",
        "Винительный падеж",
        "Будущее время",
        "Женский род"
      ],
      "correctAnswer": 0,
      "hint": "Действие или состояние обозначает эта часть речи.",
      "difficulty": "easy"
    },
    {
      "id": "russian-010",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Действие или состояние обозначает эта часть речи. Qaysi atama nazarda tutilgan?",
      "options": [
        "Глагол",
        "Дательный падеж",
        "Наречие",
        "Настоящее время"
      ],
      "correctAnswer": 0,
      "hint": "Действие или состояние обозначает эта часть речи.",
      "difficulty": "medium"
    },
    {
      "id": "russian-011",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Действие или состояние обозначает эта часть речи.",
      "options": [
        "Прошедшее время",
        "Мужской род",
        "Местоимение",
        "Глагол"
      ],
      "correctAnswer": 3,
      "hint": "Действие или состояние обозначает эта часть речи.",
      "difficulty": "hard"
    },
    {
      "id": "russian-012",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Действие или состояние обозначает эта часть речи.",
      "options": [
        "Родительный падеж",
        "Числительное",
        "Глагол",
        "Прилагательное"
      ],
      "correctAnswer": 2,
      "hint": "Действие или состояние обозначает эта часть речи.",
      "difficulty": "mixed"
    },
    {
      "id": "russian-013",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Указывает на предмет, признак или количество, не называя их. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Местоимение",
        "Числительное",
        "Прилагательное",
        "Родительный падеж"
      ],
      "correctAnswer": 0,
      "hint": "Указывает на предмет, признак или количество, не называя их.",
      "difficulty": "easy"
    },
    {
      "id": "russian-014",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Указывает на предмет, признак или количество, не называя их. Qaysi atama nazarda tutilgan?",
      "options": [
        "Предложный падеж",
        "Именительный падеж",
        "Местоимение",
        "Союз"
      ],
      "correctAnswer": 2,
      "hint": "Указывает на предмет, признак или количество, не называя их.",
      "difficulty": "medium"
    },
    {
      "id": "russian-015",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Указывает на предмет, признак или количество, не называя их.",
      "options": [
        "Творительный падеж",
        "Средний род",
        "Местоимение",
        "Существительное"
      ],
      "correctAnswer": 2,
      "hint": "Указывает на предмет, признак или количество, не называя их.",
      "difficulty": "hard"
    },
    {
      "id": "russian-016",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Указывает на предмет, признак или количество, не называя их.",
      "options": [
        "Местоимение",
        "Винительный падеж",
        "Предлог",
        "Будущее время"
      ],
      "correctAnswer": 0,
      "hint": "Указывает на предмет, признак или количество, не называя их.",
      "difficulty": "mixed"
    },
    {
      "id": "russian-017",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Обозначает признак действия или другого признака. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Наречие",
        "Предлог",
        "Винительный падеж",
        "Будущее время"
      ],
      "correctAnswer": 0,
      "hint": "Обозначает признак действия или другого признака.",
      "difficulty": "easy"
    },
    {
      "id": "russian-018",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Обозначает признак действия или другого признака. Qaysi atama nazarda tutilgan?",
      "options": [
        "Местоимение",
        "Настоящее время",
        "Наречие",
        "Женский род"
      ],
      "correctAnswer": 2,
      "hint": "Обозначает признак действия или другого признака.",
      "difficulty": "medium"
    },
    {
      "id": "russian-019",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Обозначает признак действия или другого признака.",
      "options": [
        "Глагол",
        "Дательный падеж",
        "Мужской род",
        "Наречие"
      ],
      "correctAnswer": 3,
      "hint": "Обозначает признак действия или другого признака.",
      "difficulty": "hard"
    },
    {
      "id": "russian-020",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Обозначает признак действия или другого признака.",
      "options": [
        "Числительное",
        "Прошедшее время",
        "Наречие",
        "Родительный падеж"
      ],
      "correctAnswer": 2,
      "hint": "Обозначает признак действия или другого признака.",
      "difficulty": "mixed"
    },
    {
      "id": "russian-021",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Служебная часть речи, выражающая отношения между словами. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Прошедшее время",
        "Числительное",
        "Родительный падеж",
        "Предлог"
      ],
      "correctAnswer": 3,
      "hint": "Служебная часть речи, выражающая отношения между словами.",
      "difficulty": "easy"
    },
    {
      "id": "russian-022",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Служебная часть речи, выражающая отношения между словами. Qaysi atama nazarda tutilgan?",
      "options": [
        "Прилагательное",
        "Именительный падеж",
        "Предлог",
        "Предложный падеж"
      ],
      "correctAnswer": 2,
      "hint": "Служебная часть речи, выражающая отношения между словами.",
      "difficulty": "medium"
    },
    {
      "id": "russian-023",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Служебная часть речи, выражающая отношения между словами.",
      "options": [
        "Творительный падеж",
        "Предлог",
        "Союз",
        "Существительное"
      ],
      "correctAnswer": 1,
      "hint": "Служебная часть речи, выражающая отношения между словами.",
      "difficulty": "hard"
    },
    {
      "id": "russian-024",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Служебная часть речи, выражающая отношения между словами.",
      "options": [
        "Наречие",
        "Будущее время",
        "Предлог",
        "Средний род"
      ],
      "correctAnswer": 2,
      "hint": "Служебная часть речи, выражающая отношения между словами.",
      "difficulty": "mixed"
    },
    {
      "id": "russian-025",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Служебная часть речи, связывающая однородные члены и части предложения. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Средний род",
        "Союз",
        "Наречие",
        "Будущее время"
      ],
      "correctAnswer": 1,
      "hint": "Служебная часть речи, связывающая однородные члены и части предложения.",
      "difficulty": "easy"
    },
    {
      "id": "russian-026",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Служебная часть речи, связывающая однородные члены и части предложения. Qaysi atama nazarda tutilgan?",
      "options": [
        "Женский род",
        "Местоимение",
        "Союз",
        "Винительный падеж"
      ],
      "correctAnswer": 2,
      "hint": "Служебная часть речи, связывающая однородные члены и части предложения.",
      "difficulty": "medium"
    },
    {
      "id": "russian-027",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Служебная часть речи, связывающая однородные члены и части предложения.",
      "options": [
        "Дательный падеж",
        "Настоящее время",
        "Союз",
        "Мужской род"
      ],
      "correctAnswer": 2,
      "hint": "Служебная часть речи, связывающая однородные члены и части предложения.",
      "difficulty": "hard"
    },
    {
      "id": "russian-028",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Служебная часть речи, связывающая однородные члены и части предложения.",
      "options": [
        "Прошедшее время",
        "Родительный падеж",
        "Глагол",
        "Союз"
      ],
      "correctAnswer": 3,
      "hint": "Служебная часть речи, связывающая однородные члены и части предложения.",
      "difficulty": "mixed"
    },
    {
      "id": "russian-029",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Обозначает количество или порядок при счёте. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Числительное",
        "Родительный падеж",
        "Прошедшее время",
        "Глагол"
      ],
      "correctAnswer": 0,
      "hint": "Обозначает количество или порядок при счёте.",
      "difficulty": "easy"
    },
    {
      "id": "russian-030",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Обозначает количество или порядок при счёте. Qaysi atama nazarda tutilgan?",
      "options": [
        "Прилагательное",
        "Союз",
        "Числительное",
        "Предложный падеж"
      ],
      "correctAnswer": 2,
      "hint": "Обозначает количество или порядок при счёте.",
      "difficulty": "medium"
    },
    {
      "id": "russian-031",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Обозначает количество или порядок при счёте.",
      "options": [
        "Именительный падеж",
        "Существительное",
        "Числительное",
        "Предлог"
      ],
      "correctAnswer": 2,
      "hint": "Обозначает количество или порядок при счёте.",
      "difficulty": "hard"
    },
    {
      "id": "russian-032",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Обозначает количество или порядок при счёте.",
      "options": [
        "Числительное",
        "Средний род",
        "Наречие",
        "Творительный падеж"
      ],
      "correctAnswer": 0,
      "hint": "Обозначает количество или порядок при счёте.",
      "difficulty": "mixed"
    },
    {
      "id": "russian-033",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Род слова «стол». Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Средний род",
        "Мужской род",
        "Творительный падеж",
        "Наречие"
      ],
      "correctAnswer": 1,
      "hint": "Род слова «стол».",
      "difficulty": "easy"
    },
    {
      "id": "russian-034",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Род слова «стол». Qaysi atama nazarda tutilgan?",
      "options": [
        "Мужской род",
        "Женский род",
        "Винительный падеж",
        "Будущее время"
      ],
      "correctAnswer": 0,
      "hint": "Род слова «стол».",
      "difficulty": "medium"
    },
    {
      "id": "russian-035",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Род слова «стол».",
      "options": [
        "Мужской род",
        "Настоящее время",
        "Местоимение",
        "Дательный падеж"
      ],
      "correctAnswer": 0,
      "hint": "Род слова «стол».",
      "difficulty": "hard"
    },
    {
      "id": "russian-036",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Род слова «стол».",
      "options": [
        "Мужской род",
        "Прошедшее время",
        "Числительное",
        "Глагол"
      ],
      "correctAnswer": 0,
      "hint": "Род слова «стол».",
      "difficulty": "mixed"
    },
    {
      "id": "russian-037",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Род слова «книга». Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Глагол",
        "Прошедшее время",
        "Числительное",
        "Женский род"
      ],
      "correctAnswer": 3,
      "hint": "Род слова «книга».",
      "difficulty": "easy"
    },
    {
      "id": "russian-038",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Род слова «книга». Qaysi atama nazarda tutilgan?",
      "options": [
        "Родительный падеж",
        "Союз",
        "Женский род",
        "Прилагательное"
      ],
      "correctAnswer": 2,
      "hint": "Род слова «книга».",
      "difficulty": "medium"
    },
    {
      "id": "russian-039",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Род слова «книга».",
      "options": [
        "Предложный падеж",
        "Предлог",
        "Именительный падеж",
        "Женский род"
      ],
      "correctAnswer": 3,
      "hint": "Род слова «книга».",
      "difficulty": "hard"
    },
    {
      "id": "russian-040",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Род слова «книга».",
      "options": [
        "Средний род",
        "Существительное",
        "Творительный падеж",
        "Женский род"
      ],
      "correctAnswer": 3,
      "hint": "Род слова «книга».",
      "difficulty": "mixed"
    },
    {
      "id": "russian-041",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Род слова «окно». Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Женский род",
        "Творительный падеж",
        "Средний род",
        "Существительное"
      ],
      "correctAnswer": 2,
      "hint": "Род слова «окно».",
      "difficulty": "easy"
    },
    {
      "id": "russian-042",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Род слова «окно». Qaysi atama nazarda tutilgan?",
      "options": [
        "Наречие",
        "Средний род",
        "Винительный падеж",
        "Будущее время"
      ],
      "correctAnswer": 1,
      "hint": "Род слова «окно».",
      "difficulty": "medium"
    },
    {
      "id": "russian-043",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Род слова «окно».",
      "options": [
        "Мужской род",
        "Настоящее время",
        "Средний род",
        "Местоимение"
      ],
      "correctAnswer": 2,
      "hint": "Род слова «окно».",
      "difficulty": "hard"
    },
    {
      "id": "russian-044",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Род слова «окно».",
      "options": [
        "Дательный падеж",
        "Числительное",
        "Глагол",
        "Средний род"
      ],
      "correctAnswer": 3,
      "hint": "Род слова «окно».",
      "difficulty": "mixed"
    },
    {
      "id": "russian-045",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Падеж, отвечающий на вопросы кто? что? в роли подлежащего. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Именительный падеж",
        "Глагол",
        "Числительное",
        "Дательный падеж"
      ],
      "correctAnswer": 0,
      "hint": "Падеж, отвечающий на вопросы кто? что? в роли подлежащего.",
      "difficulty": "easy"
    },
    {
      "id": "russian-046",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Падеж, отвечающий на вопросы кто? что? в роли подлежащего. Qaysi atama nazarda tutilgan?",
      "options": [
        "Союз",
        "Родительный падеж",
        "Именительный падеж",
        "Прошедшее время"
      ],
      "correctAnswer": 2,
      "hint": "Падеж, отвечающий на вопросы кто? что? в роли подлежащего.",
      "difficulty": "medium"
    },
    {
      "id": "russian-047",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Падеж, отвечающий на вопросы кто? что? в роли подлежащего.",
      "options": [
        "Прилагательное",
        "Предложный падеж",
        "Средний род",
        "Именительный падеж"
      ],
      "correctAnswer": 3,
      "hint": "Падеж, отвечающий на вопросы кто? что? в роли подлежащего.",
      "difficulty": "hard"
    },
    {
      "id": "russian-048",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Падеж, отвечающий на вопросы кто? что? в роли подлежащего.",
      "options": [
        "Именительный падеж",
        "Предлог",
        "Существительное",
        "Творительный падеж"
      ],
      "correctAnswer": 0,
      "hint": "Падеж, отвечающий на вопросы кто? что? в роли подлежащего.",
      "difficulty": "mixed"
    },
    {
      "id": "russian-049",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Падеж, часто отвечающий на вопросы кого? чего? Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Существительное",
        "Родительный падеж",
        "Предлог",
        "Творительный падеж"
      ],
      "correctAnswer": 1,
      "hint": "Падеж, часто отвечающий на вопросы кого? чего?",
      "difficulty": "easy"
    },
    {
      "id": "russian-050",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Падеж, часто отвечающий на вопросы кого? чего? Qaysi atama nazarda tutilgan?",
      "options": [
        "Наречие",
        "Будущее время",
        "Женский род",
        "Родительный падеж"
      ],
      "correctAnswer": 3,
      "hint": "Падеж, часто отвечающий на вопросы кого? чего?",
      "difficulty": "medium"
    },
    {
      "id": "russian-051",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Падеж, часто отвечающий на вопросы кого? чего?",
      "options": [
        "Винительный падеж",
        "Мужской род",
        "Местоимение",
        "Родительный падеж"
      ],
      "correctAnswer": 3,
      "hint": "Падеж, часто отвечающий на вопросы кого? чего?",
      "difficulty": "hard"
    },
    {
      "id": "russian-052",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Падеж, часто отвечающий на вопросы кого? чего?",
      "options": [
        "Настоящее время",
        "Дательный падеж",
        "Числительное",
        "Родительный падеж"
      ],
      "correctAnswer": 3,
      "hint": "Падеж, часто отвечающий на вопросы кого? чего?",
      "difficulty": "mixed"
    },
    {
      "id": "russian-053",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Падеж, отвечающий на вопросы кому? чему? Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Числительное",
        "Родительный падеж",
        "Дательный падеж",
        "Настоящее время"
      ],
      "correctAnswer": 2,
      "hint": "Падеж, отвечающий на вопросы кому? чему?",
      "difficulty": "easy"
    },
    {
      "id": "russian-054",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Падеж, отвечающий на вопросы кому? чему? Qaysi atama nazarda tutilgan?",
      "options": [
        "Именительный падеж",
        "Дательный падеж",
        "Глагол",
        "Прошедшее время"
      ],
      "correctAnswer": 1,
      "hint": "Падеж, отвечающий на вопросы кому? чему?",
      "difficulty": "medium"
    },
    {
      "id": "russian-055",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Падеж, отвечающий на вопросы кому? чему?",
      "options": [
        "Прилагательное",
        "Предложный падеж",
        "Союз",
        "Дательный падеж"
      ],
      "correctAnswer": 3,
      "hint": "Падеж, отвечающий на вопросы кому? чему?",
      "difficulty": "hard"
    },
    {
      "id": "russian-056",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Падеж, отвечающий на вопросы кому? чему?",
      "options": [
        "Существительное",
        "Предлог",
        "Средний род",
        "Дательный падеж"
      ],
      "correctAnswer": 3,
      "hint": "Падеж, отвечающий на вопросы кому? чему?",
      "difficulty": "mixed"
    },
    {
      "id": "russian-057",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Падеж, отвечающий на вопросы кого? что? Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Предлог",
        "Винительный падеж",
        "Средний род",
        "Существительное"
      ],
      "correctAnswer": 1,
      "hint": "Падеж, отвечающий на вопросы кого? что?",
      "difficulty": "easy"
    },
    {
      "id": "russian-058",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Падеж, отвечающий на вопросы кого? что? Qaysi atama nazarda tutilgan?",
      "options": [
        "Наречие",
        "Винительный падеж",
        "Женский род",
        "Творительный падеж"
      ],
      "correctAnswer": 1,
      "hint": "Падеж, отвечающий на вопросы кого? что?",
      "difficulty": "medium"
    },
    {
      "id": "russian-059",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Падеж, отвечающий на вопросы кого? что?",
      "options": [
        "Будущее время",
        "Дательный падеж",
        "Мужской род",
        "Винительный падеж"
      ],
      "correctAnswer": 3,
      "hint": "Падеж, отвечающий на вопросы кого? что?",
      "difficulty": "hard"
    },
    {
      "id": "russian-060",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Падеж, отвечающий на вопросы кого? что?",
      "options": [
        "Настоящее время",
        "Местоимение",
        "Винительный падеж",
        "Родительный падеж"
      ],
      "correctAnswer": 2,
      "hint": "Падеж, отвечающий на вопросы кого? что?",
      "difficulty": "mixed"
    },
    {
      "id": "russian-061",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Падеж, отвечающий на вопросы кем? чем? Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Творительный падеж",
        "Местоимение",
        "Родительный падеж",
        "Настоящее время"
      ],
      "correctAnswer": 0,
      "hint": "Падеж, отвечающий на вопросы кем? чем?",
      "difficulty": "easy"
    },
    {
      "id": "russian-062",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Падеж, отвечающий на вопросы кем? чем? Qaysi atama nazarda tutilgan?",
      "options": [
        "Творительный падеж",
        "Прошедшее время",
        "Числительное",
        "Глагол"
      ],
      "correctAnswer": 0,
      "hint": "Падеж, отвечающий на вопросы кем? чем?",
      "difficulty": "medium"
    },
    {
      "id": "russian-063",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Падеж, отвечающий на вопросы кем? чем?",
      "options": [
        "Творительный падеж",
        "Союз",
        "Прилагательное",
        "Именительный падеж"
      ],
      "correctAnswer": 0,
      "hint": "Падеж, отвечающий на вопросы кем? чем?",
      "difficulty": "hard"
    },
    {
      "id": "russian-064",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Падеж, отвечающий на вопросы кем? чем?",
      "options": [
        "Творительный падеж",
        "Предложный падеж",
        "Средний род",
        "Предлог"
      ],
      "correctAnswer": 0,
      "hint": "Падеж, отвечающий на вопросы кем? чем?",
      "difficulty": "mixed"
    },
    {
      "id": "russian-065",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Падеж, употребляемый с предлогами и отвечающий на вопросы о ком? о чём? Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Творительный падеж",
        "Предлог",
        "Средний род",
        "Предложный падеж"
      ],
      "correctAnswer": 3,
      "hint": "Падеж, употребляемый с предлогами и отвечающий на вопросы о ком? о чём?",
      "difficulty": "easy"
    },
    {
      "id": "russian-066",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Падеж, употребляемый с предлогами и отвечающий на вопросы о ком? о чём? Qaysi atama nazarda tutilgan?",
      "options": [
        "Винительный падеж",
        "Существительное",
        "Предложный падеж",
        "Женский род"
      ],
      "correctAnswer": 2,
      "hint": "Падеж, употребляемый с предлогами и отвечающий на вопросы о ком? о чём?",
      "difficulty": "medium"
    },
    {
      "id": "russian-067",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Падеж, употребляемый с предлогами и отвечающий на вопросы о ком? о чём?",
      "options": [
        "Наречие",
        "Предложный падеж",
        "Дательный падеж",
        "Будущее время"
      ],
      "correctAnswer": 1,
      "hint": "Падеж, употребляемый с предлогами и отвечающий на вопросы о ком? о чём?",
      "difficulty": "hard"
    },
    {
      "id": "russian-068",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Падеж, употребляемый с предлогами и отвечающий на вопросы о ком? о чём?",
      "options": [
        "Настоящее время",
        "Мужской род",
        "Местоимение",
        "Предложный падеж"
      ],
      "correctAnswer": 3,
      "hint": "Падеж, употребляемый с предлогами и отвечающий на вопросы о ком? о чём?",
      "difficulty": "mixed"
    },
    {
      "id": "russian-069",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Время глагола, обозначающее действие до момента речи. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Мужской род",
        "Прошедшее время",
        "Местоимение",
        "Настоящее время"
      ],
      "correctAnswer": 1,
      "hint": "Время глагола, обозначающее действие до момента речи.",
      "difficulty": "easy"
    },
    {
      "id": "russian-070",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Время глагола, обозначающее действие до момента речи. Qaysi atama nazarda tutilgan?",
      "options": [
        "Родительный падеж",
        "Прошедшее время",
        "Глагол",
        "Числительное"
      ],
      "correctAnswer": 1,
      "hint": "Время глагола, обозначающее действие до момента речи.",
      "difficulty": "medium"
    },
    {
      "id": "russian-071",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Время глагола, обозначающее действие до момента речи.",
      "options": [
        "Прошедшее время",
        "Союз",
        "Именительный падеж",
        "Предложный падеж"
      ],
      "correctAnswer": 0,
      "hint": "Время глагола, обозначающее действие до момента речи.",
      "difficulty": "hard"
    },
    {
      "id": "russian-072",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Время глагола, обозначающее действие до момента речи.",
      "options": [
        "Творительный падеж",
        "Прилагательное",
        "Прошедшее время",
        "Средний род"
      ],
      "correctAnswer": 2,
      "hint": "Время глагола, обозначающее действие до момента речи.",
      "difficulty": "mixed"
    },
    {
      "id": "russian-073",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Время глагола, обозначающее действие в момент речи. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Творительный падеж",
        "Настоящее время",
        "Средний род",
        "Прилагательное"
      ],
      "correctAnswer": 1,
      "hint": "Время глагола, обозначающее действие в момент речи.",
      "difficulty": "easy"
    },
    {
      "id": "russian-074",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Время глагола, обозначающее действие в момент речи. Qaysi atama nazarda tutilgan?",
      "options": [
        "Настоящее время",
        "Предлог",
        "Существительное",
        "Винительный падеж"
      ],
      "correctAnswer": 0,
      "hint": "Время глагола, обозначающее действие в момент речи.",
      "difficulty": "medium"
    },
    {
      "id": "russian-075",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Время глагола, обозначающее действие в момент речи.",
      "options": [
        "Будущее время",
        "Наречие",
        "Настоящее время",
        "Женский род"
      ],
      "correctAnswer": 2,
      "hint": "Время глагола, обозначающее действие в момент речи.",
      "difficulty": "hard"
    },
    {
      "id": "russian-076",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Время глагола, обозначающее действие в момент речи.",
      "options": [
        "Мужской род",
        "Настоящее время",
        "Местоимение",
        "Дательный падеж"
      ],
      "correctAnswer": 1,
      "hint": "Время глагола, обозначающее действие в момент речи.",
      "difficulty": "mixed"
    },
    {
      "id": "russian-077",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Время глагола, обозначающее действие после момента речи. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Дательный падеж",
        "Мужской род",
        "Будущее время",
        "Местоимение"
      ],
      "correctAnswer": 2,
      "hint": "Время глагола, обозначающее действие после момента речи.",
      "difficulty": "easy"
    },
    {
      "id": "russian-078",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Время глагола, обозначающее действие после момента речи. Qaysi atama nazarda tutilgan?",
      "options": [
        "Будущее время",
        "Прошедшее время",
        "Родительный падеж",
        "Числительное"
      ],
      "correctAnswer": 0,
      "hint": "Время глагола, обозначающее действие после момента речи.",
      "difficulty": "medium"
    },
    {
      "id": "russian-079",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Время глагола, обозначающее действие после момента речи.",
      "options": [
        "Будущее время",
        "Глагол",
        "Именительный падеж",
        "Предложный падеж"
      ],
      "correctAnswer": 0,
      "hint": "Время глагола, обозначающее действие после момента речи.",
      "difficulty": "hard"
    },
    {
      "id": "russian-080",
      "subjectId": "russian",
      "subject": "Rus tili",
      "question": "Ta’rifga mos atamani toping — Время глагола, обозначающее действие после момента речи.",
      "options": [
        "Будущее время",
        "Творительный падеж",
        "Прилагательное",
        "Союз"
      ],
      "correctAnswer": 0,
      "hint": "Время глагола, обозначающее действие после момента речи.",
      "difficulty": "mixed"
    }
  ],
  "math": [
    {
      "id": "math-001",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Faqat 1 ga va o‘ziga bo‘linadigan, 1 dan katta natural son. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Tub son",
        "Maxraj",
        "Radius",
        "Tenglama"
      ],
      "correctAnswer": 0,
      "hint": "Faqat 1 ga va o‘ziga bo‘linadigan, 1 dan katta natural son.",
      "difficulty": "easy"
    },
    {
      "id": "math-002",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Faqat 1 ga va o‘ziga bo‘linadigan, 1 dan katta natural son. Qaysi atama nazarda tutilgan?",
      "options": [
        "Pifagor teoremasi",
        "Diametr",
        "Tub son",
        "Modul"
      ],
      "correctAnswer": 2,
      "hint": "Faqat 1 ga va o‘ziga bo‘linadigan, 1 dan katta natural son.",
      "difficulty": "medium"
    },
    {
      "id": "math-003",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Faqat 1 ga va o‘ziga bo‘linadigan, 1 dan katta natural son.",
      "options": [
        "O‘rtacha arifmetik",
        "Tub son",
        "Surat",
        "To‘g‘ri to‘rtburchak"
      ],
      "correctAnswer": 1,
      "hint": "Faqat 1 ga va o‘ziga bo‘linadigan, 1 dan katta natural son.",
      "difficulty": "hard"
    },
    {
      "id": "math-004",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Faqat 1 ga va o‘ziga bo‘linadigan, 1 dan katta natural son.",
      "options": [
        "Kasr",
        "Yuza",
        "Tub son",
        "Koordinata boshi"
      ],
      "correctAnswer": 2,
      "hint": "Faqat 1 ga va o‘ziga bo‘linadigan, 1 dan katta natural son.",
      "difficulty": "mixed"
    },
    {
      "id": "math-005",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ikkitadan ortiq natural bo‘luvchiga ega son. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Yuza",
        "Kasr",
        "Murakkab son",
        "Koordinata boshi"
      ],
      "correctAnswer": 2,
      "hint": "Ikkitadan ortiq natural bo‘luvchiga ega son.",
      "difficulty": "easy"
    },
    {
      "id": "math-006",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Ikkitadan ortiq natural bo‘luvchiga ega son. Qaysi atama nazarda tutilgan?",
      "options": [
        "Murakkab son",
        "Kvadrat",
        "Tub son",
        "Perimetr"
      ],
      "correctAnswer": 0,
      "hint": "Ikkitadan ortiq natural bo‘luvchiga ega son.",
      "difficulty": "medium"
    },
    {
      "id": "math-007",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Ikkitadan ortiq natural bo‘luvchiga ega son.",
      "options": [
        "Funksiya",
        "Murakkab son",
        "Foiz",
        "Uchburchak"
      ],
      "correctAnswer": 1,
      "hint": "Ikkitadan ortiq natural bo‘luvchiga ega son.",
      "difficulty": "hard"
    },
    {
      "id": "math-008",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Ikkitadan ortiq natural bo‘luvchiga ega son.",
      "options": [
        "Murakkab son",
        "Daraja",
        "Radius",
        "Tenglama"
      ],
      "correctAnswer": 0,
      "hint": "Ikkitadan ortiq natural bo‘luvchiga ega son.",
      "difficulty": "mixed"
    },
    {
      "id": "math-009",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Butunning teng qismlaridan birini yoki bir nechtasini ifodalovchi son. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Kasr",
        "Tenglama",
        "Daraja",
        "Radius"
      ],
      "correctAnswer": 0,
      "hint": "Butunning teng qismlaridan birini yoki bir nechtasini ifodalovchi son.",
      "difficulty": "easy"
    },
    {
      "id": "math-010",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Butunning teng qismlaridan birini yoki bir nechtasini ifodalovchi son. Qaysi atama nazarda tutilgan?",
      "options": [
        "Pifagor teoremasi",
        "Maxraj",
        "Kasr",
        "Modul"
      ],
      "correctAnswer": 2,
      "hint": "Butunning teng qismlaridan birini yoki bir nechtasini ifodalovchi son.",
      "difficulty": "medium"
    },
    {
      "id": "math-011",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Butunning teng qismlaridan birini yoki bir nechtasini ifodalovchi son.",
      "options": [
        "Kasr",
        "Diametr",
        "Surat",
        "O‘rtacha arifmetik"
      ],
      "correctAnswer": 0,
      "hint": "Butunning teng qismlaridan birini yoki bir nechtasini ifodalovchi son.",
      "difficulty": "hard"
    },
    {
      "id": "math-012",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Butunning teng qismlaridan birini yoki bir nechtasini ifodalovchi son.",
      "options": [
        "To‘g‘ri to‘rtburchak",
        "Kasr",
        "Murakkab son",
        "Yuza"
      ],
      "correctAnswer": 1,
      "hint": "Butunning teng qismlaridan birini yoki bir nechtasini ifodalovchi son.",
      "difficulty": "mixed"
    },
    {
      "id": "math-013",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Oddiy kasr chizig‘ining yuqorisida yoziladigan son. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "To‘g‘ri to‘rtburchak",
        "Surat",
        "Yuza",
        "Murakkab son"
      ],
      "correctAnswer": 1,
      "hint": "Oddiy kasr chizig‘ining yuqorisida yoziladigan son.",
      "difficulty": "easy"
    },
    {
      "id": "math-014",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Oddiy kasr chizig‘ining yuqorisida yoziladigan son. Qaysi atama nazarda tutilgan?",
      "options": [
        "Kvadrat",
        "Surat",
        "Perimetr",
        "Koordinata boshi"
      ],
      "correctAnswer": 1,
      "hint": "Oddiy kasr chizig‘ining yuqorisida yoziladigan son.",
      "difficulty": "medium"
    },
    {
      "id": "math-015",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Oddiy kasr chizig‘ining yuqorisida yoziladigan son.",
      "options": [
        "Uchburchak",
        "Surat",
        "Tub son",
        "Funksiya"
      ],
      "correctAnswer": 1,
      "hint": "Oddiy kasr chizig‘ining yuqorisida yoziladigan son.",
      "difficulty": "hard"
    },
    {
      "id": "math-016",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Oddiy kasr chizig‘ining yuqorisida yoziladigan son.",
      "options": [
        "Daraja",
        "Surat",
        "Foiz",
        "Tenglama"
      ],
      "correctAnswer": 1,
      "hint": "Oddiy kasr chizig‘ining yuqorisida yoziladigan son.",
      "difficulty": "mixed"
    },
    {
      "id": "math-017",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Oddiy kasr chizig‘ining pastida yozilib, butun nechta teng qismga bo‘linganini ko‘rsatadi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Maxraj",
        "Foiz",
        "Daraja",
        "Tenglama"
      ],
      "correctAnswer": 0,
      "hint": "Oddiy kasr chizig‘ining pastida yozilib, butun nechta teng qismga bo‘linganini ko‘rsatadi.",
      "difficulty": "easy"
    },
    {
      "id": "math-018",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Oddiy kasr chizig‘ining pastida yozilib, butun nechta teng qismga bo‘linganini ko‘rsatadi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Maxraj",
        "Modul",
        "Radius",
        "Surat"
      ],
      "correctAnswer": 0,
      "hint": "Oddiy kasr chizig‘ining pastida yozilib, butun nechta teng qismga bo‘linganini ko‘rsatadi.",
      "difficulty": "medium"
    },
    {
      "id": "math-019",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Oddiy kasr chizig‘ining pastida yozilib, butun nechta teng qismga bo‘linganini ko‘rsatadi.",
      "options": [
        "Maxraj",
        "Diametr",
        "Pifagor teoremasi",
        "Kasr"
      ],
      "correctAnswer": 0,
      "hint": "Oddiy kasr chizig‘ining pastida yozilib, butun nechta teng qismga bo‘linganini ko‘rsatadi.",
      "difficulty": "hard"
    },
    {
      "id": "math-020",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Oddiy kasr chizig‘ining pastida yozilib, butun nechta teng qismga bo‘linganini ko‘rsatadi.",
      "options": [
        "O‘rtacha arifmetik",
        "Maxraj",
        "To‘g‘ri to‘rtburchak",
        "Yuza"
      ],
      "correctAnswer": 1,
      "hint": "Oddiy kasr chizig‘ining pastida yozilib, butun nechta teng qismga bo‘linganini ko‘rsatadi.",
      "difficulty": "mixed"
    },
    {
      "id": "math-021",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Yuzdan bir ulushni ifodalovchi miqdor. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "O‘rtacha arifmetik",
        "To‘g‘ri to‘rtburchak",
        "Foiz",
        "Yuza"
      ],
      "correctAnswer": 2,
      "hint": "Yuzdan bir ulushni ifodalovchi miqdor.",
      "difficulty": "easy"
    },
    {
      "id": "math-022",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Yuzdan bir ulushni ifodalovchi miqdor. Qaysi atama nazarda tutilgan?",
      "options": [
        "Murakkab son",
        "Foiz",
        "Koordinata boshi",
        "Kvadrat"
      ],
      "correctAnswer": 1,
      "hint": "Yuzdan bir ulushni ifodalovchi miqdor.",
      "difficulty": "medium"
    },
    {
      "id": "math-023",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Yuzdan bir ulushni ifodalovchi miqdor.",
      "options": [
        "Perimetr",
        "Tub son",
        "Foiz",
        "Funksiya"
      ],
      "correctAnswer": 2,
      "hint": "Yuzdan bir ulushni ifodalovchi miqdor.",
      "difficulty": "hard"
    },
    {
      "id": "math-024",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Yuzdan bir ulushni ifodalovchi miqdor.",
      "options": [
        "Daraja",
        "Foiz",
        "Uchburchak",
        "Maxraj"
      ],
      "correctAnswer": 1,
      "hint": "Yuzdan bir ulushni ifodalovchi miqdor.",
      "difficulty": "mixed"
    },
    {
      "id": "math-025",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ko‘pburchak barcha tomonlari uzunliklari yig‘indisi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Daraja",
        "Maxraj",
        "Uchburchak",
        "Perimetr"
      ],
      "correctAnswer": 3,
      "hint": "Ko‘pburchak barcha tomonlari uzunliklari yig‘indisi.",
      "difficulty": "easy"
    },
    {
      "id": "math-026",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Ko‘pburchak barcha tomonlari uzunliklari yig‘indisi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Surat",
        "Tenglama",
        "Perimetr",
        "Radius"
      ],
      "correctAnswer": 2,
      "hint": "Ko‘pburchak barcha tomonlari uzunliklari yig‘indisi.",
      "difficulty": "medium"
    },
    {
      "id": "math-027",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Ko‘pburchak barcha tomonlari uzunliklari yig‘indisi.",
      "options": [
        "Diametr",
        "Pifagor teoremasi",
        "Perimetr",
        "Modul"
      ],
      "correctAnswer": 2,
      "hint": "Ko‘pburchak barcha tomonlari uzunliklari yig‘indisi.",
      "difficulty": "hard"
    },
    {
      "id": "math-028",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Ko‘pburchak barcha tomonlari uzunliklari yig‘indisi.",
      "options": [
        "O‘rtacha arifmetik",
        "Kasr",
        "Perimetr",
        "To‘g‘ri to‘rtburchak"
      ],
      "correctAnswer": 2,
      "hint": "Ko‘pburchak barcha tomonlari uzunliklari yig‘indisi.",
      "difficulty": "mixed"
    },
    {
      "id": "math-029",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Tekis shakl egallagan sirt o‘lchovi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "To‘g‘ri to‘rtburchak",
        "Kasr",
        "O‘rtacha arifmetik",
        "Yuza"
      ],
      "correctAnswer": 3,
      "hint": "Tekis shakl egallagan sirt o‘lchovi.",
      "difficulty": "easy"
    },
    {
      "id": "math-030",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Tekis shakl egallagan sirt o‘lchovi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Murakkab son",
        "Yuza",
        "Koordinata boshi",
        "Perimetr"
      ],
      "correctAnswer": 1,
      "hint": "Tekis shakl egallagan sirt o‘lchovi.",
      "difficulty": "medium"
    },
    {
      "id": "math-031",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Tekis shakl egallagan sirt o‘lchovi.",
      "options": [
        "Kvadrat",
        "Foiz",
        "Yuza",
        "Tub son"
      ],
      "correctAnswer": 2,
      "hint": "Tekis shakl egallagan sirt o‘lchovi.",
      "difficulty": "hard"
    },
    {
      "id": "math-032",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Tekis shakl egallagan sirt o‘lchovi.",
      "options": [
        "Yuza",
        "Funksiya",
        "Uchburchak",
        "Maxraj"
      ],
      "correctAnswer": 0,
      "hint": "Tekis shakl egallagan sirt o‘lchovi.",
      "difficulty": "mixed"
    },
    {
      "id": "math-033",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Aylana markazidan o‘tib, uning ikki nuqtasini tutashtiruvchi kesma. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Maxraj",
        "Uchburchak",
        "Funksiya",
        "Diametr"
      ],
      "correctAnswer": 3,
      "hint": "Aylana markazidan o‘tib, uning ikki nuqtasini tutashtiruvchi kesma.",
      "difficulty": "easy"
    },
    {
      "id": "math-034",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Aylana markazidan o‘tib, uning ikki nuqtasini tutashtiruvchi kesma. Qaysi atama nazarda tutilgan?",
      "options": [
        "Diametr",
        "Tenglama",
        "Radius",
        "Daraja"
      ],
      "correctAnswer": 0,
      "hint": "Aylana markazidan o‘tib, uning ikki nuqtasini tutashtiruvchi kesma.",
      "difficulty": "medium"
    },
    {
      "id": "math-035",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Aylana markazidan o‘tib, uning ikki nuqtasini tutashtiruvchi kesma.",
      "options": [
        "Pifagor teoremasi",
        "Surat",
        "Modul",
        "Diametr"
      ],
      "correctAnswer": 3,
      "hint": "Aylana markazidan o‘tib, uning ikki nuqtasini tutashtiruvchi kesma.",
      "difficulty": "hard"
    },
    {
      "id": "math-036",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Aylana markazidan o‘tib, uning ikki nuqtasini tutashtiruvchi kesma.",
      "options": [
        "Yuza",
        "Diametr",
        "Kasr",
        "O‘rtacha arifmetik"
      ],
      "correctAnswer": 1,
      "hint": "Aylana markazidan o‘tib, uning ikki nuqtasini tutashtiruvchi kesma.",
      "difficulty": "mixed"
    },
    {
      "id": "math-037",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Aylana markazidan aylana nuqtasigacha bo‘lgan kesma. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Radius",
        "Kasr",
        "Yuza",
        "O‘rtacha arifmetik"
      ],
      "correctAnswer": 0,
      "hint": "Aylana markazidan aylana nuqtasigacha bo‘lgan kesma.",
      "difficulty": "easy"
    },
    {
      "id": "math-038",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Aylana markazidan aylana nuqtasigacha bo‘lgan kesma. Qaysi atama nazarda tutilgan?",
      "options": [
        "To‘g‘ri to‘rtburchak",
        "Murakkab son",
        "Radius",
        "Perimetr"
      ],
      "correctAnswer": 2,
      "hint": "Aylana markazidan aylana nuqtasigacha bo‘lgan kesma.",
      "difficulty": "medium"
    },
    {
      "id": "math-039",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Aylana markazidan aylana nuqtasigacha bo‘lgan kesma.",
      "options": [
        "Foiz",
        "Radius",
        "Kvadrat",
        "Koordinata boshi"
      ],
      "correctAnswer": 1,
      "hint": "Aylana markazidan aylana nuqtasigacha bo‘lgan kesma.",
      "difficulty": "hard"
    },
    {
      "id": "math-040",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Aylana markazidan aylana nuqtasigacha bo‘lgan kesma.",
      "options": [
        "Funksiya",
        "Radius",
        "Uchburchak",
        "Tub son"
      ],
      "correctAnswer": 1,
      "hint": "Aylana markazidan aylana nuqtasigacha bo‘lgan kesma.",
      "difficulty": "mixed"
    },
    {
      "id": "math-041",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Uchta tomon va uchta burchakka ega ko‘pburchak. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Uchburchak",
        "Tub son",
        "Radius",
        "Funksiya"
      ],
      "correctAnswer": 0,
      "hint": "Uchta tomon va uchta burchakka ega ko‘pburchak.",
      "difficulty": "easy"
    },
    {
      "id": "math-042",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Uchta tomon va uchta burchakka ega ko‘pburchak. Qaysi atama nazarda tutilgan?",
      "options": [
        "Maxraj",
        "Uchburchak",
        "Daraja",
        "Tenglama"
      ],
      "correctAnswer": 1,
      "hint": "Uchta tomon va uchta burchakka ega ko‘pburchak.",
      "difficulty": "medium"
    },
    {
      "id": "math-043",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Uchta tomon va uchta burchakka ega ko‘pburchak.",
      "options": [
        "Modul",
        "Uchburchak",
        "Surat",
        "Diametr"
      ],
      "correctAnswer": 1,
      "hint": "Uchta tomon va uchta burchakka ega ko‘pburchak.",
      "difficulty": "hard"
    },
    {
      "id": "math-044",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Uchta tomon va uchta burchakka ega ko‘pburchak.",
      "options": [
        "Pifagor teoremasi",
        "Uchburchak",
        "Yuza",
        "Kasr"
      ],
      "correctAnswer": 1,
      "hint": "Uchta tomon va uchta burchakka ega ko‘pburchak.",
      "difficulty": "mixed"
    },
    {
      "id": "math-045",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Barcha tomonlari teng va barcha burchaklari 90° bo‘lgan to‘rtburchak. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Kasr",
        "Pifagor teoremasi",
        "Kvadrat",
        "Yuza"
      ],
      "correctAnswer": 2,
      "hint": "Barcha tomonlari teng va barcha burchaklari 90° bo‘lgan to‘rtburchak.",
      "difficulty": "easy"
    },
    {
      "id": "math-046",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Barcha tomonlari teng va barcha burchaklari 90° bo‘lgan to‘rtburchak. Qaysi atama nazarda tutilgan?",
      "options": [
        "O‘rtacha arifmetik",
        "To‘g‘ri to‘rtburchak",
        "Kvadrat",
        "Perimetr"
      ],
      "correctAnswer": 2,
      "hint": "Barcha tomonlari teng va barcha burchaklari 90° bo‘lgan to‘rtburchak.",
      "difficulty": "medium"
    },
    {
      "id": "math-047",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Barcha tomonlari teng va barcha burchaklari 90° bo‘lgan to‘rtburchak.",
      "options": [
        "Koordinata boshi",
        "Murakkab son",
        "Uchburchak",
        "Kvadrat"
      ],
      "correctAnswer": 3,
      "hint": "Barcha tomonlari teng va barcha burchaklari 90° bo‘lgan to‘rtburchak.",
      "difficulty": "hard"
    },
    {
      "id": "math-048",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Barcha tomonlari teng va barcha burchaklari 90° bo‘lgan to‘rtburchak.",
      "options": [
        "Tub son",
        "Kvadrat",
        "Funksiya",
        "Foiz"
      ],
      "correctAnswer": 1,
      "hint": "Barcha tomonlari teng va barcha burchaklari 90° bo‘lgan to‘rtburchak.",
      "difficulty": "mixed"
    },
    {
      "id": "math-049",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Barcha burchaklari 90° bo‘lgan to‘rtburchak. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Tub son",
        "Funksiya",
        "Foiz",
        "To‘g‘ri to‘rtburchak"
      ],
      "correctAnswer": 3,
      "hint": "Barcha burchaklari 90° bo‘lgan to‘rtburchak.",
      "difficulty": "easy"
    },
    {
      "id": "math-050",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Barcha burchaklari 90° bo‘lgan to‘rtburchak. Qaysi atama nazarda tutilgan?",
      "options": [
        "To‘g‘ri to‘rtburchak",
        "Maxraj",
        "Daraja",
        "Radius"
      ],
      "correctAnswer": 0,
      "hint": "Barcha burchaklari 90° bo‘lgan to‘rtburchak.",
      "difficulty": "medium"
    },
    {
      "id": "math-051",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Barcha burchaklari 90° bo‘lgan to‘rtburchak.",
      "options": [
        "Surat",
        "Diametr",
        "Tenglama",
        "To‘g‘ri to‘rtburchak"
      ],
      "correctAnswer": 3,
      "hint": "Barcha burchaklari 90° bo‘lgan to‘rtburchak.",
      "difficulty": "hard"
    },
    {
      "id": "math-052",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Barcha burchaklari 90° bo‘lgan to‘rtburchak.",
      "options": [
        "Yuza",
        "Modul",
        "Pifagor teoremasi",
        "To‘g‘ri to‘rtburchak"
      ],
      "correctAnswer": 3,
      "hint": "Barcha burchaklari 90° bo‘lgan to‘rtburchak.",
      "difficulty": "mixed"
    },
    {
      "id": "math-053",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "To‘g‘ri burchakli uchburchakda gipotenuza kvadrati katetlar kvadratlari yig‘indisiga tengligini bildiradi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Modul",
        "Yuza",
        "Pifagor teoremasi",
        "To‘g‘ri to‘rtburchak"
      ],
      "correctAnswer": 2,
      "hint": "To‘g‘ri burchakli uchburchakda gipotenuza kvadrati katetlar kvadratlari yig‘indisiga tengligini bildiradi.",
      "difficulty": "easy"
    },
    {
      "id": "math-054",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: To‘g‘ri burchakli uchburchakda gipotenuza kvadrati katetlar kvadratlari yig‘indisiga tengligini bildiradi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Kvadrat",
        "O‘rtacha arifmetik",
        "Pifagor teoremasi",
        "Kasr"
      ],
      "correctAnswer": 2,
      "hint": "To‘g‘ri burchakli uchburchakda gipotenuza kvadrati katetlar kvadratlari yig‘indisiga tengligini bildiradi.",
      "difficulty": "medium"
    },
    {
      "id": "math-055",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: To‘g‘ri burchakli uchburchakda gipotenuza kvadrati katetlar kvadratlari yig‘indisiga tengligini bildiradi.",
      "options": [
        "Perimetr",
        "Murakkab son",
        "Pifagor teoremasi",
        "Koordinata boshi"
      ],
      "correctAnswer": 2,
      "hint": "To‘g‘ri burchakli uchburchakda gipotenuza kvadrati katetlar kvadratlari yig‘indisiga tengligini bildiradi.",
      "difficulty": "hard"
    },
    {
      "id": "math-056",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — To‘g‘ri burchakli uchburchakda gipotenuza kvadrati katetlar kvadratlari yig‘indisiga tengligini bildiradi.",
      "options": [
        "Foiz",
        "Pifagor teoremasi",
        "Uchburchak",
        "Tub son"
      ],
      "correctAnswer": 1,
      "hint": "To‘g‘ri burchakli uchburchakda gipotenuza kvadrati katetlar kvadratlari yig‘indisiga tengligini bildiradi.",
      "difficulty": "mixed"
    },
    {
      "id": "math-057",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Noma’lum qiymat qatnashgan matematik tenglik. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Tenglama",
        "Uchburchak",
        "Tub son",
        "Foiz"
      ],
      "correctAnswer": 0,
      "hint": "Noma’lum qiymat qatnashgan matematik tenglik.",
      "difficulty": "easy"
    },
    {
      "id": "math-058",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Noma’lum qiymat qatnashgan matematik tenglik. Qaysi atama nazarda tutilgan?",
      "options": [
        "Tenglama",
        "Radius",
        "Funksiya",
        "Maxraj"
      ],
      "correctAnswer": 0,
      "hint": "Noma’lum qiymat qatnashgan matematik tenglik.",
      "difficulty": "medium"
    },
    {
      "id": "math-059",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Noma’lum qiymat qatnashgan matematik tenglik.",
      "options": [
        "Tenglama",
        "Daraja",
        "Diametr",
        "Pifagor teoremasi"
      ],
      "correctAnswer": 0,
      "hint": "Noma’lum qiymat qatnashgan matematik tenglik.",
      "difficulty": "hard"
    },
    {
      "id": "math-060",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Noma’lum qiymat qatnashgan matematik tenglik.",
      "options": [
        "Surat",
        "Tenglama",
        "To‘g‘ri to‘rtburchak",
        "Modul"
      ],
      "correctAnswer": 1,
      "hint": "Noma’lum qiymat qatnashgan matematik tenglik.",
      "difficulty": "mixed"
    },
    {
      "id": "math-061",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Har bir argument qiymatiga yagona qiymat mos qo‘yuvchi bog‘lanish. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Modul",
        "Funksiya",
        "Surat",
        "To‘g‘ri to‘rtburchak"
      ],
      "correctAnswer": 1,
      "hint": "Har bir argument qiymatiga yagona qiymat mos qo‘yuvchi bog‘lanish.",
      "difficulty": "easy"
    },
    {
      "id": "math-062",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Har bir argument qiymatiga yagona qiymat mos qo‘yuvchi bog‘lanish. Qaysi atama nazarda tutilgan?",
      "options": [
        "O‘rtacha arifmetik",
        "Funksiya",
        "Yuza",
        "Kasr"
      ],
      "correctAnswer": 1,
      "hint": "Har bir argument qiymatiga yagona qiymat mos qo‘yuvchi bog‘lanish.",
      "difficulty": "medium"
    },
    {
      "id": "math-063",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Har bir argument qiymatiga yagona qiymat mos qo‘yuvchi bog‘lanish.",
      "options": [
        "Murakkab son",
        "Perimetr",
        "Kvadrat",
        "Funksiya"
      ],
      "correctAnswer": 3,
      "hint": "Har bir argument qiymatiga yagona qiymat mos qo‘yuvchi bog‘lanish.",
      "difficulty": "hard"
    },
    {
      "id": "math-064",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Har bir argument qiymatiga yagona qiymat mos qo‘yuvchi bog‘lanish.",
      "options": [
        "Foiz",
        "Funksiya",
        "Koordinata boshi",
        "Uchburchak"
      ],
      "correctAnswer": 1,
      "hint": "Har bir argument qiymatiga yagona qiymat mos qo‘yuvchi bog‘lanish.",
      "difficulty": "mixed"
    },
    {
      "id": "math-065",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Koordinata o‘qlarining kesishish nuqtasi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Koordinata boshi",
        "Uchburchak",
        "Foiz",
        "Funksiya"
      ],
      "correctAnswer": 0,
      "hint": "Koordinata o‘qlarining kesishish nuqtasi.",
      "difficulty": "easy"
    },
    {
      "id": "math-066",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Koordinata o‘qlarining kesishish nuqtasi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Tenglama",
        "Radius",
        "Koordinata boshi",
        "Tub son"
      ],
      "correctAnswer": 2,
      "hint": "Koordinata o‘qlarining kesishish nuqtasi.",
      "difficulty": "medium"
    },
    {
      "id": "math-067",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Koordinata o‘qlarining kesishish nuqtasi.",
      "options": [
        "Pifagor teoremasi",
        "Daraja",
        "Maxraj",
        "Koordinata boshi"
      ],
      "correctAnswer": 3,
      "hint": "Koordinata o‘qlarining kesishish nuqtasi.",
      "difficulty": "hard"
    },
    {
      "id": "math-068",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Koordinata o‘qlarining kesishish nuqtasi.",
      "options": [
        "Modul",
        "Koordinata boshi",
        "Surat",
        "Diametr"
      ],
      "correctAnswer": 1,
      "hint": "Koordinata o‘qlarining kesishish nuqtasi.",
      "difficulty": "mixed"
    },
    {
      "id": "math-069",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Sonlar yig‘indisini ularning soniga bo‘lish orqali topiladigan qiymat. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Modul",
        "Surat",
        "Diametr",
        "O‘rtacha arifmetik"
      ],
      "correctAnswer": 3,
      "hint": "Sonlar yig‘indisini ularning soniga bo‘lish orqali topiladigan qiymat.",
      "difficulty": "easy"
    },
    {
      "id": "math-070",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Sonlar yig‘indisini ularning soniga bo‘lish orqali topiladigan qiymat. Qaysi atama nazarda tutilgan?",
      "options": [
        "O‘rtacha arifmetik",
        "To‘g‘ri to‘rtburchak",
        "Kasr",
        "Yuza"
      ],
      "correctAnswer": 0,
      "hint": "Sonlar yig‘indisini ularning soniga bo‘lish orqali topiladigan qiymat.",
      "difficulty": "medium"
    },
    {
      "id": "math-071",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Sonlar yig‘indisini ularning soniga bo‘lish orqali topiladigan qiymat.",
      "options": [
        "Perimetr",
        "Koordinata boshi",
        "O‘rtacha arifmetik",
        "Kvadrat"
      ],
      "correctAnswer": 2,
      "hint": "Sonlar yig‘indisini ularning soniga bo‘lish orqali topiladigan qiymat.",
      "difficulty": "hard"
    },
    {
      "id": "math-072",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Sonlar yig‘indisini ularning soniga bo‘lish orqali topiladigan qiymat.",
      "options": [
        "Uchburchak",
        "Murakkab son",
        "O‘rtacha arifmetik",
        "Funksiya"
      ],
      "correctAnswer": 2,
      "hint": "Sonlar yig‘indisini ularning soniga bo‘lish orqali topiladigan qiymat.",
      "difficulty": "mixed"
    },
    {
      "id": "math-073",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Sonning noldan uzoqligini ifodalovchi manfiy bo‘lmagan qiymat. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Funksiya",
        "Modul",
        "Uchburchak",
        "Murakkab son"
      ],
      "correctAnswer": 1,
      "hint": "Sonning noldan uzoqligini ifodalovchi manfiy bo‘lmagan qiymat.",
      "difficulty": "easy"
    },
    {
      "id": "math-074",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Sonning noldan uzoqligini ifodalovchi manfiy bo‘lmagan qiymat. Qaysi atama nazarda tutilgan?",
      "options": [
        "Tub son",
        "Foiz",
        "Tenglama",
        "Modul"
      ],
      "correctAnswer": 3,
      "hint": "Sonning noldan uzoqligini ifodalovchi manfiy bo‘lmagan qiymat.",
      "difficulty": "medium"
    },
    {
      "id": "math-075",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Sonning noldan uzoqligini ifodalovchi manfiy bo‘lmagan qiymat.",
      "options": [
        "Modul",
        "Maxraj",
        "Radius",
        "Daraja"
      ],
      "correctAnswer": 0,
      "hint": "Sonning noldan uzoqligini ifodalovchi manfiy bo‘lmagan qiymat.",
      "difficulty": "hard"
    },
    {
      "id": "math-076",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Sonning noldan uzoqligini ifodalovchi manfiy bo‘lmagan qiymat.",
      "options": [
        "Pifagor teoremasi",
        "Modul",
        "Diametr",
        "Surat"
      ],
      "correctAnswer": 1,
      "hint": "Sonning noldan uzoqligini ifodalovchi manfiy bo‘lmagan qiymat.",
      "difficulty": "mixed"
    },
    {
      "id": "math-077",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Sonni o‘ziga bir necha marta ko‘paytirishni qisqa yozish usuli. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Pifagor teoremasi",
        "Diametr",
        "Surat",
        "Daraja"
      ],
      "correctAnswer": 3,
      "hint": "Sonni o‘ziga bir necha marta ko‘paytirishni qisqa yozish usuli.",
      "difficulty": "easy"
    },
    {
      "id": "math-078",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Darslikdagi quyidagi izohni o‘qing: Sonni o‘ziga bir necha marta ko‘paytirishni qisqa yozish usuli. Qaysi atama nazarda tutilgan?",
      "options": [
        "Daraja",
        "Yuza",
        "O‘rtacha arifmetik",
        "To‘g‘ri to‘rtburchak"
      ],
      "correctAnswer": 0,
      "hint": "Sonni o‘ziga bir necha marta ko‘paytirishni qisqa yozish usuli.",
      "difficulty": "medium"
    },
    {
      "id": "math-079",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Sonni o‘ziga bir necha marta ko‘paytirishni qisqa yozish usuli.",
      "options": [
        "Koordinata boshi",
        "Kasr",
        "Daraja",
        "Kvadrat"
      ],
      "correctAnswer": 2,
      "hint": "Sonni o‘ziga bir necha marta ko‘paytirishni qisqa yozish usuli.",
      "difficulty": "hard"
    },
    {
      "id": "math-080",
      "subjectId": "math",
      "subject": "Matematika",
      "question": "Ta’rifga mos atamani toping — Sonni o‘ziga bir necha marta ko‘paytirishni qisqa yozish usuli.",
      "options": [
        "Daraja",
        "Murakkab son",
        "Perimetr",
        "Funksiya"
      ],
      "correctAnswer": 0,
      "hint": "Sonni o‘ziga bir necha marta ko‘paytirishni qisqa yozish usuli.",
      "difficulty": "mixed"
    }
  ],
  "biology": [
    {
      "id": "biology-001",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Tirik organizmlarning tuzilish va funksional eng kichik birligi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Konsument",
        "Hujayra",
        "Xromosoma",
        "Xloroplast"
      ],
      "correctAnswer": 1,
      "hint": "Tirik organizmlarning tuzilish va funksional eng kichik birligi.",
      "difficulty": "easy"
    },
    {
      "id": "biology-002",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Tirik organizmlarning tuzilish va funksional eng kichik birligi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Produtsent",
        "Gen",
        "Hujayra",
        "Neyron"
      ],
      "correctAnswer": 2,
      "hint": "Tirik organizmlarning tuzilish va funksional eng kichik birligi.",
      "difficulty": "medium"
    },
    {
      "id": "biology-003",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Tirik organizmlarning tuzilish va funksional eng kichik birligi.",
      "options": [
        "Ekosistema",
        "Hujayra",
        "Ribosoma",
        "Amfibiya"
      ],
      "correctAnswer": 1,
      "hint": "Tirik organizmlarning tuzilish va funksional eng kichik birligi.",
      "difficulty": "hard"
    },
    {
      "id": "biology-004",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Tirik organizmlarning tuzilish va funksional eng kichik birligi.",
      "options": [
        "DNK",
        "Mitoxondriya",
        "Umurtqali hayvon",
        "Hujayra"
      ],
      "correctAnswer": 3,
      "hint": "Tirik organizmlarning tuzilish va funksional eng kichik birligi.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-005",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Hujayrada irsiy axborotning asosiy qismi saqlanadigan organoid. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Yadro",
        "Umurtqali hayvon",
        "DNK",
        "Mitoxondriya"
      ],
      "correctAnswer": 0,
      "hint": "Hujayrada irsiy axborotning asosiy qismi saqlanadigan organoid.",
      "difficulty": "easy"
    },
    {
      "id": "biology-006",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Hujayrada irsiy axborotning asosiy qismi saqlanadigan organoid. Qaysi atama nazarda tutilgan?",
      "options": [
        "Xlorofill",
        "Diffuziya",
        "Hujayra",
        "Yadro"
      ],
      "correctAnswer": 3,
      "hint": "Hujayrada irsiy axborotning asosiy qismi saqlanadigan organoid.",
      "difficulty": "medium"
    },
    {
      "id": "biology-007",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Hujayrada irsiy axborotning asosiy qismi saqlanadigan organoid.",
      "options": [
        "Yadro",
        "Osmos",
        "Fotosintez",
        "Redutsent"
      ],
      "correctAnswer": 0,
      "hint": "Hujayrada irsiy axborotning asosiy qismi saqlanadigan organoid.",
      "difficulty": "hard"
    },
    {
      "id": "biology-008",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Hujayrada irsiy axborotning asosiy qismi saqlanadigan organoid.",
      "options": [
        "Xromosoma",
        "Konsument",
        "Gomeostaz",
        "Yadro"
      ],
      "correctAnswer": 3,
      "hint": "Hujayrada irsiy axborotning asosiy qismi saqlanadigan organoid.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-009",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Hujayrada energiya ishlab chiqarishda muhim rol o‘ynaydigan organoid. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Konsument",
        "Mitoxondriya",
        "Gomeostaz",
        "Xromosoma"
      ],
      "correctAnswer": 1,
      "hint": "Hujayrada energiya ishlab chiqarishda muhim rol o‘ynaydigan organoid.",
      "difficulty": "easy"
    },
    {
      "id": "biology-010",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Hujayrada energiya ishlab chiqarishda muhim rol o‘ynaydigan organoid. Qaysi atama nazarda tutilgan?",
      "options": [
        "Xloroplast",
        "Mitoxondriya",
        "Neyron",
        "Produtsent"
      ],
      "correctAnswer": 1,
      "hint": "Hujayrada energiya ishlab chiqarishda muhim rol o‘ynaydigan organoid.",
      "difficulty": "medium"
    },
    {
      "id": "biology-011",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Hujayrada energiya ishlab chiqarishda muhim rol o‘ynaydigan organoid.",
      "options": [
        "Amfibiya",
        "Mitoxondriya",
        "Ribosoma",
        "Gen"
      ],
      "correctAnswer": 1,
      "hint": "Hujayrada energiya ishlab chiqarishda muhim rol o‘ynaydigan organoid.",
      "difficulty": "hard"
    },
    {
      "id": "biology-012",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Hujayrada energiya ishlab chiqarishda muhim rol o‘ynaydigan organoid.",
      "options": [
        "Ekosistema",
        "DNK",
        "Yadro",
        "Mitoxondriya"
      ],
      "correctAnswer": 3,
      "hint": "Hujayrada energiya ishlab chiqarishda muhim rol o‘ynaydigan organoid.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-013",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Oqsil sintezi amalga oshadigan hujayra tuzilmasi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ekosistema",
        "DNK",
        "Yadro",
        "Ribosoma"
      ],
      "correctAnswer": 3,
      "hint": "Oqsil sintezi amalga oshadigan hujayra tuzilmasi.",
      "difficulty": "easy"
    },
    {
      "id": "biology-014",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Oqsil sintezi amalga oshadigan hujayra tuzilmasi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Xlorofill",
        "Umurtqali hayvon",
        "Ribosoma",
        "Diffuziya"
      ],
      "correctAnswer": 2,
      "hint": "Oqsil sintezi amalga oshadigan hujayra tuzilmasi.",
      "difficulty": "medium"
    },
    {
      "id": "biology-015",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Oqsil sintezi amalga oshadigan hujayra tuzilmasi.",
      "options": [
        "Osmos",
        "Redutsent",
        "Ribosoma",
        "Hujayra"
      ],
      "correctAnswer": 2,
      "hint": "Oqsil sintezi amalga oshadigan hujayra tuzilmasi.",
      "difficulty": "hard"
    },
    {
      "id": "biology-016",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Oqsil sintezi amalga oshadigan hujayra tuzilmasi.",
      "options": [
        "Fotosintez",
        "Ribosoma",
        "Gomeostaz",
        "Konsument"
      ],
      "correctAnswer": 1,
      "hint": "Oqsil sintezi amalga oshadigan hujayra tuzilmasi.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-017",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "O‘simlik hujayrasida fotosintez sodir bo‘ladigan organoid. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Gomeostaz",
        "Fotosintez",
        "Xloroplast",
        "Konsument"
      ],
      "correctAnswer": 2,
      "hint": "O‘simlik hujayrasida fotosintez sodir bo‘ladigan organoid.",
      "difficulty": "easy"
    },
    {
      "id": "biology-018",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: O‘simlik hujayrasida fotosintez sodir bo‘ladigan organoid. Qaysi atama nazarda tutilgan?",
      "options": [
        "Xloroplast",
        "Ribosoma",
        "Xromosoma",
        "Neyron"
      ],
      "correctAnswer": 0,
      "hint": "O‘simlik hujayrasida fotosintez sodir bo‘ladigan organoid.",
      "difficulty": "medium"
    },
    {
      "id": "biology-019",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: O‘simlik hujayrasida fotosintez sodir bo‘ladigan organoid.",
      "options": [
        "Produtsent",
        "Gen",
        "Xloroplast",
        "Mitoxondriya"
      ],
      "correctAnswer": 2,
      "hint": "O‘simlik hujayrasida fotosintez sodir bo‘ladigan organoid.",
      "difficulty": "hard"
    },
    {
      "id": "biology-020",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — O‘simlik hujayrasida fotosintez sodir bo‘ladigan organoid.",
      "options": [
        "Amfibiya",
        "Xloroplast",
        "Ekosistema",
        "DNK"
      ],
      "correctAnswer": 1,
      "hint": "O‘simlik hujayrasida fotosintez sodir bo‘ladigan organoid.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-021",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Yorug‘lik energiyasi yordamida organik modda hosil bo‘lish jarayoni. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ekosistema",
        "Amfibiya",
        "DNK",
        "Fotosintez"
      ],
      "correctAnswer": 3,
      "hint": "Yorug‘lik energiyasi yordamida organik modda hosil bo‘lish jarayoni.",
      "difficulty": "easy"
    },
    {
      "id": "biology-022",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Yorug‘lik energiyasi yordamida organik modda hosil bo‘lish jarayoni. Qaysi atama nazarda tutilgan?",
      "options": [
        "Fotosintez",
        "Yadro",
        "Umurtqali hayvon",
        "Diffuziya"
      ],
      "correctAnswer": 0,
      "hint": "Yorug‘lik energiyasi yordamida organik modda hosil bo‘lish jarayoni.",
      "difficulty": "medium"
    },
    {
      "id": "biology-023",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Yorug‘lik energiyasi yordamida organik modda hosil bo‘lish jarayoni.",
      "options": [
        "Xlorofill",
        "Hujayra",
        "Fotosintez",
        "Redutsent"
      ],
      "correctAnswer": 2,
      "hint": "Yorug‘lik energiyasi yordamida organik modda hosil bo‘lish jarayoni.",
      "difficulty": "hard"
    },
    {
      "id": "biology-024",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Yorug‘lik energiyasi yordamida organik modda hosil bo‘lish jarayoni.",
      "options": [
        "Gomeostaz",
        "Fotosintez",
        "Xloroplast",
        "Osmos"
      ],
      "correctAnswer": 1,
      "hint": "Yorug‘lik energiyasi yordamida organik modda hosil bo‘lish jarayoni.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-025",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "O‘simliklarga yashil rang beruvchi va yorug‘likni yutuvchi pigment. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Xloroplast",
        "Xlorofill",
        "Osmos",
        "Gomeostaz"
      ],
      "correctAnswer": 1,
      "hint": "O‘simliklarga yashil rang beruvchi va yorug‘likni yutuvchi pigment.",
      "difficulty": "easy"
    },
    {
      "id": "biology-026",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: O‘simliklarga yashil rang beruvchi va yorug‘likni yutuvchi pigment. Qaysi atama nazarda tutilgan?",
      "options": [
        "Konsument",
        "Xromosoma",
        "Xlorofill",
        "Ribosoma"
      ],
      "correctAnswer": 2,
      "hint": "O‘simliklarga yashil rang beruvchi va yorug‘likni yutuvchi pigment.",
      "difficulty": "medium"
    },
    {
      "id": "biology-027",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: O‘simliklarga yashil rang beruvchi va yorug‘likni yutuvchi pigment.",
      "options": [
        "Xlorofill",
        "Gen",
        "Produtsent",
        "Neyron"
      ],
      "correctAnswer": 0,
      "hint": "O‘simliklarga yashil rang beruvchi va yorug‘likni yutuvchi pigment.",
      "difficulty": "hard"
    },
    {
      "id": "biology-028",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — O‘simliklarga yashil rang beruvchi va yorug‘likni yutuvchi pigment.",
      "options": [
        "Mitoxondriya",
        "Amfibiya",
        "Xlorofill",
        "Ekosistema"
      ],
      "correctAnswer": 2,
      "hint": "O‘simliklarga yashil rang beruvchi va yorug‘likni yutuvchi pigment.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-029",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Irsiy axborotni saqlovchi dezoksiribonuklein kislota. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ekosistema",
        "Amfibiya",
        "Mitoxondriya",
        "DNK"
      ],
      "correctAnswer": 3,
      "hint": "Irsiy axborotni saqlovchi dezoksiribonuklein kislota.",
      "difficulty": "easy"
    },
    {
      "id": "biology-030",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Irsiy axborotni saqlovchi dezoksiribonuklein kislota. Qaysi atama nazarda tutilgan?",
      "options": [
        "Umurtqali hayvon",
        "Yadro",
        "DNK",
        "Xlorofill"
      ],
      "correctAnswer": 2,
      "hint": "Irsiy axborotni saqlovchi dezoksiribonuklein kislota.",
      "difficulty": "medium"
    },
    {
      "id": "biology-031",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Irsiy axborotni saqlovchi dezoksiribonuklein kislota.",
      "options": [
        "Fotosintez",
        "Diffuziya",
        "DNK",
        "Hujayra"
      ],
      "correctAnswer": 2,
      "hint": "Irsiy axborotni saqlovchi dezoksiribonuklein kislota.",
      "difficulty": "hard"
    },
    {
      "id": "biology-032",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Irsiy axborotni saqlovchi dezoksiribonuklein kislota.",
      "options": [
        "Redutsent",
        "Osmos",
        "Xloroplast",
        "DNK"
      ],
      "correctAnswer": 3,
      "hint": "Irsiy axborotni saqlovchi dezoksiribonuklein kislota.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-033",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Irsiy axborotning muayyan belgiga taalluqli qismi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Gen",
        "Xloroplast",
        "Redutsent",
        "Osmos"
      ],
      "correctAnswer": 0,
      "hint": "Irsiy axborotning muayyan belgiga taalluqli qismi.",
      "difficulty": "easy"
    },
    {
      "id": "biology-034",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Irsiy axborotning muayyan belgiga taalluqli qismi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Gomeostaz",
        "Konsument",
        "Gen",
        "Xromosoma"
      ],
      "correctAnswer": 2,
      "hint": "Irsiy axborotning muayyan belgiga taalluqli qismi.",
      "difficulty": "medium"
    },
    {
      "id": "biology-035",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Irsiy axborotning muayyan belgiga taalluqli qismi.",
      "options": [
        "Neyron",
        "Gen",
        "Produtsent",
        "Ribosoma"
      ],
      "correctAnswer": 1,
      "hint": "Irsiy axborotning muayyan belgiga taalluqli qismi.",
      "difficulty": "hard"
    },
    {
      "id": "biology-036",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Irsiy axborotning muayyan belgiga taalluqli qismi.",
      "options": [
        "Mitoxondriya",
        "Gen",
        "Amfibiya",
        "DNK"
      ],
      "correctAnswer": 1,
      "hint": "Irsiy axborotning muayyan belgiga taalluqli qismi.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-037",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "DNK va oqsillardan tashkil topgan, genlarni tashuvchi tuzilma. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Xromosoma",
        "Mitoxondriya",
        "DNK",
        "Amfibiya"
      ],
      "correctAnswer": 0,
      "hint": "DNK va oqsillardan tashkil topgan, genlarni tashuvchi tuzilma.",
      "difficulty": "easy"
    },
    {
      "id": "biology-038",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: DNK va oqsillardan tashkil topgan, genlarni tashuvchi tuzilma. Qaysi atama nazarda tutilgan?",
      "options": [
        "Ekosistema",
        "Xlorofill",
        "Xromosoma",
        "Yadro"
      ],
      "correctAnswer": 2,
      "hint": "DNK va oqsillardan tashkil topgan, genlarni tashuvchi tuzilma.",
      "difficulty": "medium"
    },
    {
      "id": "biology-039",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: DNK va oqsillardan tashkil topgan, genlarni tashuvchi tuzilma.",
      "options": [
        "Diffuziya",
        "Umurtqali hayvon",
        "Xromosoma",
        "Fotosintez"
      ],
      "correctAnswer": 2,
      "hint": "DNK va oqsillardan tashkil topgan, genlarni tashuvchi tuzilma.",
      "difficulty": "hard"
    },
    {
      "id": "biology-040",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — DNK va oqsillardan tashkil topgan, genlarni tashuvchi tuzilma.",
      "options": [
        "Redutsent",
        "Hujayra",
        "Xromosoma",
        "Osmos"
      ],
      "correctAnswer": 2,
      "hint": "DNK va oqsillardan tashkil topgan, genlarni tashuvchi tuzilma.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-041",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Suvning yarim o‘tkazuvchan membrana orqali konsentratsiya farqi bo‘yicha o‘tishi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Redutsent",
        "Hujayra",
        "Osmos",
        "Xromosoma"
      ],
      "correctAnswer": 2,
      "hint": "Suvning yarim o‘tkazuvchan membrana orqali konsentratsiya farqi bo‘yicha o‘tishi.",
      "difficulty": "easy"
    },
    {
      "id": "biology-042",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Suvning yarim o‘tkazuvchan membrana orqali konsentratsiya farqi bo‘yicha o‘tishi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Konsument",
        "Xloroplast",
        "Gomeostaz",
        "Osmos"
      ],
      "correctAnswer": 3,
      "hint": "Suvning yarim o‘tkazuvchan membrana orqali konsentratsiya farqi bo‘yicha o‘tishi.",
      "difficulty": "medium"
    },
    {
      "id": "biology-043",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Suvning yarim o‘tkazuvchan membrana orqali konsentratsiya farqi bo‘yicha o‘tishi.",
      "options": [
        "Osmos",
        "Gen",
        "Neyron",
        "Ribosoma"
      ],
      "correctAnswer": 0,
      "hint": "Suvning yarim o‘tkazuvchan membrana orqali konsentratsiya farqi bo‘yicha o‘tishi.",
      "difficulty": "hard"
    },
    {
      "id": "biology-044",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Suvning yarim o‘tkazuvchan membrana orqali konsentratsiya farqi bo‘yicha o‘tishi.",
      "options": [
        "Produtsent",
        "Mitoxondriya",
        "Osmos",
        "DNK"
      ],
      "correctAnswer": 2,
      "hint": "Suvning yarim o‘tkazuvchan membrana orqali konsentratsiya farqi bo‘yicha o‘tishi.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-045",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Zarralarning yuqori konsentratsiyadan past konsentratsiyaga tarqalishi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Produtsent",
        "Diffuziya",
        "DNK",
        "Mitoxondriya"
      ],
      "correctAnswer": 1,
      "hint": "Zarralarning yuqori konsentratsiyadan past konsentratsiyaga tarqalishi.",
      "difficulty": "easy"
    },
    {
      "id": "biology-046",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Zarralarning yuqori konsentratsiyadan past konsentratsiyaga tarqalishi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Ekosistema",
        "Diffuziya",
        "Amfibiya",
        "Xlorofill"
      ],
      "correctAnswer": 1,
      "hint": "Zarralarning yuqori konsentratsiyadan past konsentratsiyaga tarqalishi.",
      "difficulty": "medium"
    },
    {
      "id": "biology-047",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Zarralarning yuqori konsentratsiyadan past konsentratsiyaga tarqalishi.",
      "options": [
        "Diffuziya",
        "Umurtqali hayvon",
        "Osmos",
        "Yadro"
      ],
      "correctAnswer": 0,
      "hint": "Zarralarning yuqori konsentratsiyadan past konsentratsiyaga tarqalishi.",
      "difficulty": "hard"
    },
    {
      "id": "biology-048",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Zarralarning yuqori konsentratsiyadan past konsentratsiyaga tarqalishi.",
      "options": [
        "Hujayra",
        "Fotosintez",
        "Redutsent",
        "Diffuziya"
      ],
      "correctAnswer": 3,
      "hint": "Zarralarning yuqori konsentratsiyadan past konsentratsiyaga tarqalishi.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-049",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Tirik organizmlar va ularning yashash muhiti o‘zaro ta’sir qiladigan tizim. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Redutsent",
        "Ekosistema",
        "Fotosintez",
        "Hujayra"
      ],
      "correctAnswer": 1,
      "hint": "Tirik organizmlar va ularning yashash muhiti o‘zaro ta’sir qiladigan tizim.",
      "difficulty": "easy"
    },
    {
      "id": "biology-050",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Tirik organizmlar va ularning yashash muhiti o‘zaro ta’sir qiladigan tizim. Qaysi atama nazarda tutilgan?",
      "options": [
        "Xloroplast",
        "Gomeostaz",
        "Ekosistema",
        "Xromosoma"
      ],
      "correctAnswer": 2,
      "hint": "Tirik organizmlar va ularning yashash muhiti o‘zaro ta’sir qiladigan tizim.",
      "difficulty": "medium"
    },
    {
      "id": "biology-051",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Tirik organizmlar va ularning yashash muhiti o‘zaro ta’sir qiladigan tizim.",
      "options": [
        "Ribosoma",
        "Ekosistema",
        "Gen",
        "Konsument"
      ],
      "correctAnswer": 1,
      "hint": "Tirik organizmlar va ularning yashash muhiti o‘zaro ta’sir qiladigan tizim.",
      "difficulty": "hard"
    },
    {
      "id": "biology-052",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Tirik organizmlar va ularning yashash muhiti o‘zaro ta’sir qiladigan tizim.",
      "options": [
        "Produtsent",
        "Ekosistema",
        "Neyron",
        "DNK"
      ],
      "correctAnswer": 1,
      "hint": "Tirik organizmlar va ularning yashash muhiti o‘zaro ta’sir qiladigan tizim.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-053",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Fotosintez yoki xemosintez orqali organik modda hosil qiluvchi organizm. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ekosistema",
        "Produtsent",
        "DNK",
        "Neyron"
      ],
      "correctAnswer": 1,
      "hint": "Fotosintez yoki xemosintez orqali organik modda hosil qiluvchi organizm.",
      "difficulty": "easy"
    },
    {
      "id": "biology-054",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Fotosintez yoki xemosintez orqali organik modda hosil qiluvchi organizm. Qaysi atama nazarda tutilgan?",
      "options": [
        "Diffuziya",
        "Produtsent",
        "Mitoxondriya",
        "Amfibiya"
      ],
      "correctAnswer": 1,
      "hint": "Fotosintez yoki xemosintez orqali organik modda hosil qiluvchi organizm.",
      "difficulty": "medium"
    },
    {
      "id": "biology-055",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Fotosintez yoki xemosintez orqali organik modda hosil qiluvchi organizm.",
      "options": [
        "Xlorofill",
        "Umurtqali hayvon",
        "Produtsent",
        "Yadro"
      ],
      "correctAnswer": 2,
      "hint": "Fotosintez yoki xemosintez orqali organik modda hosil qiluvchi organizm.",
      "difficulty": "hard"
    },
    {
      "id": "biology-056",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Fotosintez yoki xemosintez orqali organik modda hosil qiluvchi organizm.",
      "options": [
        "Osmos",
        "Hujayra",
        "Fotosintez",
        "Produtsent"
      ],
      "correctAnswer": 3,
      "hint": "Fotosintez yoki xemosintez orqali organik modda hosil qiluvchi organizm.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-057",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Tayyor organik moddalar bilan oziqlanadigan organizm. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Konsument",
        "Fotosintez",
        "Osmos",
        "Hujayra"
      ],
      "correctAnswer": 0,
      "hint": "Tayyor organik moddalar bilan oziqlanadigan organizm.",
      "difficulty": "easy"
    },
    {
      "id": "biology-058",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Tayyor organik moddalar bilan oziqlanadigan organizm. Qaysi atama nazarda tutilgan?",
      "options": [
        "Konsument",
        "Xloroplast",
        "Xromosoma",
        "Redutsent"
      ],
      "correctAnswer": 0,
      "hint": "Tayyor organik moddalar bilan oziqlanadigan organizm.",
      "difficulty": "medium"
    },
    {
      "id": "biology-059",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Tayyor organik moddalar bilan oziqlanadigan organizm.",
      "options": [
        "Gen",
        "Konsument",
        "Gomeostaz",
        "Produtsent"
      ],
      "correctAnswer": 1,
      "hint": "Tayyor organik moddalar bilan oziqlanadigan organizm.",
      "difficulty": "hard"
    },
    {
      "id": "biology-060",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Tayyor organik moddalar bilan oziqlanadigan organizm.",
      "options": [
        "Ekosistema",
        "Konsument",
        "Neyron",
        "Ribosoma"
      ],
      "correctAnswer": 1,
      "hint": "Tayyor organik moddalar bilan oziqlanadigan organizm.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-061",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Organik qoldiqlarni oddiy moddalarga parchalovchi organizm. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ekosistema",
        "Ribosoma",
        "Neyron",
        "Redutsent"
      ],
      "correctAnswer": 3,
      "hint": "Organik qoldiqlarni oddiy moddalarga parchalovchi organizm.",
      "difficulty": "easy"
    },
    {
      "id": "biology-062",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Organik qoldiqlarni oddiy moddalarga parchalovchi organizm. Qaysi atama nazarda tutilgan?",
      "options": [
        "Mitoxondriya",
        "Amfibiya",
        "Redutsent",
        "DNK"
      ],
      "correctAnswer": 2,
      "hint": "Organik qoldiqlarni oddiy moddalarga parchalovchi organizm.",
      "difficulty": "medium"
    },
    {
      "id": "biology-063",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Organik qoldiqlarni oddiy moddalarga parchalovchi organizm.",
      "options": [
        "Yadro",
        "Xlorofill",
        "Diffuziya",
        "Redutsent"
      ],
      "correctAnswer": 3,
      "hint": "Organik qoldiqlarni oddiy moddalarga parchalovchi organizm.",
      "difficulty": "hard"
    },
    {
      "id": "biology-064",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Organik qoldiqlarni oddiy moddalarga parchalovchi organizm.",
      "options": [
        "Umurtqali hayvon",
        "Redutsent",
        "Fotosintez",
        "Osmos"
      ],
      "correctAnswer": 1,
      "hint": "Organik qoldiqlarni oddiy moddalarga parchalovchi organizm.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-065",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ichki skeleti va umurtqa pog‘onasi mavjud hayvon. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Umurtqali hayvon",
        "Redutsent",
        "Osmos",
        "Fotosintez"
      ],
      "correctAnswer": 0,
      "hint": "Ichki skeleti va umurtqa pog‘onasi mavjud hayvon.",
      "difficulty": "easy"
    },
    {
      "id": "biology-066",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Ichki skeleti va umurtqa pog‘onasi mavjud hayvon. Qaysi atama nazarda tutilgan?",
      "options": [
        "Hujayra",
        "Konsument",
        "Xromosoma",
        "Umurtqali hayvon"
      ],
      "correctAnswer": 3,
      "hint": "Ichki skeleti va umurtqa pog‘onasi mavjud hayvon.",
      "difficulty": "medium"
    },
    {
      "id": "biology-067",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Ichki skeleti va umurtqa pog‘onasi mavjud hayvon.",
      "options": [
        "Produtsent",
        "Gomeostaz",
        "Xloroplast",
        "Umurtqali hayvon"
      ],
      "correctAnswer": 3,
      "hint": "Ichki skeleti va umurtqa pog‘onasi mavjud hayvon.",
      "difficulty": "hard"
    },
    {
      "id": "biology-068",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Ichki skeleti va umurtqa pog‘onasi mavjud hayvon.",
      "options": [
        "Ribosoma",
        "Umurtqali hayvon",
        "Gen",
        "Neyron"
      ],
      "correctAnswer": 1,
      "hint": "Ichki skeleti va umurtqa pog‘onasi mavjud hayvon.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-069",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Hayotining bir qismini suvda, bir qismini quruqlikda o‘tkazadigan umurtqali. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Gen",
        "Amfibiya",
        "Ribosoma",
        "Neyron"
      ],
      "correctAnswer": 1,
      "hint": "Hayotining bir qismini suvda, bir qismini quruqlikda o‘tkazadigan umurtqali.",
      "difficulty": "easy"
    },
    {
      "id": "biology-070",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Hayotining bir qismini suvda, bir qismini quruqlikda o‘tkazadigan umurtqali. Qaysi atama nazarda tutilgan?",
      "options": [
        "Ekosistema",
        "Amfibiya",
        "Mitoxondriya",
        "DNK"
      ],
      "correctAnswer": 1,
      "hint": "Hayotining bir qismini suvda, bir qismini quruqlikda o‘tkazadigan umurtqali.",
      "difficulty": "medium"
    },
    {
      "id": "biology-071",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Hayotining bir qismini suvda, bir qismini quruqlikda o‘tkazadigan umurtqali.",
      "options": [
        "Xlorofill",
        "Diffuziya",
        "Umurtqali hayvon",
        "Amfibiya"
      ],
      "correctAnswer": 3,
      "hint": "Hayotining bir qismini suvda, bir qismini quruqlikda o‘tkazadigan umurtqali.",
      "difficulty": "hard"
    },
    {
      "id": "biology-072",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Hayotining bir qismini suvda, bir qismini quruqlikda o‘tkazadigan umurtqali.",
      "options": [
        "Yadro",
        "Amfibiya",
        "Osmos",
        "Redutsent"
      ],
      "correctAnswer": 1,
      "hint": "Hayotining bir qismini suvda, bir qismini quruqlikda o‘tkazadigan umurtqali.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-073",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Nerv impulslarini qabul qiluvchi va uzatuvchi nerv hujayrasi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Redutsent",
        "Yadro",
        "Neyron",
        "Osmos"
      ],
      "correctAnswer": 2,
      "hint": "Nerv impulslarini qabul qiluvchi va uzatuvchi nerv hujayrasi.",
      "difficulty": "easy"
    },
    {
      "id": "biology-074",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Nerv impulslarini qabul qiluvchi va uzatuvchi nerv hujayrasi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Konsument",
        "Neyron",
        "Hujayra",
        "Fotosintez"
      ],
      "correctAnswer": 1,
      "hint": "Nerv impulslarini qabul qiluvchi va uzatuvchi nerv hujayrasi.",
      "difficulty": "medium"
    },
    {
      "id": "biology-075",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Nerv impulslarini qabul qiluvchi va uzatuvchi nerv hujayrasi.",
      "options": [
        "Xromosoma",
        "Neyron",
        "Xloroplast",
        "Gomeostaz"
      ],
      "correctAnswer": 1,
      "hint": "Nerv impulslarini qabul qiluvchi va uzatuvchi nerv hujayrasi.",
      "difficulty": "hard"
    },
    {
      "id": "biology-076",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Nerv impulslarini qabul qiluvchi va uzatuvchi nerv hujayrasi.",
      "options": [
        "Ribosoma",
        "Produtsent",
        "Neyron",
        "Gen"
      ],
      "correctAnswer": 2,
      "hint": "Nerv impulslarini qabul qiluvchi va uzatuvchi nerv hujayrasi.",
      "difficulty": "mixed"
    },
    {
      "id": "biology-077",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Organizm ichki muhitining nisbatan barqaror saqlanishi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Gomeostaz",
        "Gen",
        "Ribosoma",
        "Produtsent"
      ],
      "correctAnswer": 0,
      "hint": "Organizm ichki muhitining nisbatan barqaror saqlanishi.",
      "difficulty": "easy"
    },
    {
      "id": "biology-078",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Darslikdagi quyidagi izohni o‘qing: Organizm ichki muhitining nisbatan barqaror saqlanishi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Amfibiya",
        "DNK",
        "Gomeostaz",
        "Ekosistema"
      ],
      "correctAnswer": 2,
      "hint": "Organizm ichki muhitining nisbatan barqaror saqlanishi.",
      "difficulty": "medium"
    },
    {
      "id": "biology-079",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Organizm ichki muhitining nisbatan barqaror saqlanishi.",
      "options": [
        "Mitoxondriya",
        "Umurtqali hayvon",
        "Gomeostaz",
        "Diffuziya"
      ],
      "correctAnswer": 2,
      "hint": "Organizm ichki muhitining nisbatan barqaror saqlanishi.",
      "difficulty": "hard"
    },
    {
      "id": "biology-080",
      "subjectId": "biology",
      "subject": "Biologiya",
      "question": "Ta’rifga mos atamani toping — Organizm ichki muhitining nisbatan barqaror saqlanishi.",
      "options": [
        "Redutsent",
        "Gomeostaz",
        "Yadro",
        "Xlorofill"
      ],
      "correctAnswer": 1,
      "hint": "Organizm ichki muhitining nisbatan barqaror saqlanishi.",
      "difficulty": "mixed"
    }
  ],
  "chemistry": [
    {
      "id": "chemistry-001",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Kimyoviy element xossalarini saqlovchi eng kichik zarracha. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Atom",
        "Kation",
        "Elektron",
        "Asos"
      ],
      "correctAnswer": 0,
      "hint": "Kimyoviy element xossalarini saqlovchi eng kichik zarracha.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-002",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Kimyoviy element xossalarini saqlovchi eng kichik zarracha. Qaysi atama nazarda tutilgan?",
      "options": [
        "Ekzotermik reaksiya",
        "Ion",
        "Kislota",
        "Atom"
      ],
      "correctAnswer": 3,
      "hint": "Kimyoviy element xossalarini saqlovchi eng kichik zarracha.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-003",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Kimyoviy element xossalarini saqlovchi eng kichik zarracha.",
      "options": [
        "Katalizator",
        "Neytron",
        "Ion bog‘",
        "Atom"
      ],
      "correctAnswer": 3,
      "hint": "Kimyoviy element xossalarini saqlovchi eng kichik zarracha.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-004",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Kimyoviy element xossalarini saqlovchi eng kichik zarracha.",
      "options": [
        "Oksid",
        "Atom",
        "Izotop",
        "Proton"
      ],
      "correctAnswer": 1,
      "hint": "Kimyoviy element xossalarini saqlovchi eng kichik zarracha.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-005",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Moddaning kimyoviy xossalarini saqlovchi, atomlardan tuzilgan zarracha. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Molekula",
        "Proton",
        "Izotop",
        "Oksid"
      ],
      "correctAnswer": 0,
      "hint": "Moddaning kimyoviy xossalarini saqlovchi, atomlardan tuzilgan zarracha.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-006",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Moddaning kimyoviy xossalarini saqlovchi, atomlardan tuzilgan zarracha. Qaysi atama nazarda tutilgan?",
      "options": [
        "Davriy jadval",
        "Molekula",
        "Atom",
        "Kovalent bog‘"
      ],
      "correctAnswer": 1,
      "hint": "Moddaning kimyoviy xossalarini saqlovchi, atomlardan tuzilgan zarracha.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-007",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Moddaning kimyoviy xossalarini saqlovchi, atomlardan tuzilgan zarracha.",
      "options": [
        "Anion",
        "Kimyoviy element",
        "Tuz",
        "Molekula"
      ],
      "correctAnswer": 3,
      "hint": "Moddaning kimyoviy xossalarini saqlovchi, atomlardan tuzilgan zarracha.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-008",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Moddaning kimyoviy xossalarini saqlovchi, atomlardan tuzilgan zarracha.",
      "options": [
        "Kation",
        "Molekula",
        "Endotermik reaksiya",
        "Asos"
      ],
      "correctAnswer": 1,
      "hint": "Moddaning kimyoviy xossalarini saqlovchi, atomlardan tuzilgan zarracha.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-009",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Musbat elektr zaryadiga ega yadro zarrachasi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Endotermik reaksiya",
        "Kation",
        "Proton",
        "Asos"
      ],
      "correctAnswer": 2,
      "hint": "Musbat elektr zaryadiga ega yadro zarrachasi.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-010",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Musbat elektr zaryadiga ega yadro zarrachasi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Elektron",
        "Proton",
        "Ekzotermik reaksiya",
        "Kislota"
      ],
      "correctAnswer": 1,
      "hint": "Musbat elektr zaryadiga ega yadro zarrachasi.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-011",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Musbat elektr zaryadiga ega yadro zarrachasi.",
      "options": [
        "Neytron",
        "Ion",
        "Katalizator",
        "Proton"
      ],
      "correctAnswer": 3,
      "hint": "Musbat elektr zaryadiga ega yadro zarrachasi.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-012",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Musbat elektr zaryadiga ega yadro zarrachasi.",
      "options": [
        "Izotop",
        "Molekula",
        "Ion bog‘",
        "Proton"
      ],
      "correctAnswer": 3,
      "hint": "Musbat elektr zaryadiga ega yadro zarrachasi.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-013",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Elektr zaryadi bo‘lmagan yadro zarrachasi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ion bog‘",
        "Neytron",
        "Izotop",
        "Molekula"
      ],
      "correctAnswer": 1,
      "hint": "Elektr zaryadi bo‘lmagan yadro zarrachasi.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-014",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Elektr zaryadi bo‘lmagan yadro zarrachasi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Oksid",
        "Kovalent bog‘",
        "Neytron",
        "Davriy jadval"
      ],
      "correctAnswer": 2,
      "hint": "Elektr zaryadi bo‘lmagan yadro zarrachasi.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-015",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Elektr zaryadi bo‘lmagan yadro zarrachasi.",
      "options": [
        "Atom",
        "Neytron",
        "Anion",
        "Tuz"
      ],
      "correctAnswer": 1,
      "hint": "Elektr zaryadi bo‘lmagan yadro zarrachasi.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-016",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Elektr zaryadi bo‘lmagan yadro zarrachasi.",
      "options": [
        "Asos",
        "Endotermik reaksiya",
        "Kimyoviy element",
        "Neytron"
      ],
      "correctAnswer": 3,
      "hint": "Elektr zaryadi bo‘lmagan yadro zarrachasi.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-017",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Manfiy elektr zaryadiga ega zarracha. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Endotermik reaksiya",
        "Kimyoviy element",
        "Asos",
        "Elektron"
      ],
      "correctAnswer": 3,
      "hint": "Manfiy elektr zaryadiga ega zarracha.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-018",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Manfiy elektr zaryadiga ega zarracha. Qaysi atama nazarda tutilgan?",
      "options": [
        "Kation",
        "Neytron",
        "Ekzotermik reaksiya",
        "Elektron"
      ],
      "correctAnswer": 3,
      "hint": "Manfiy elektr zaryadiga ega zarracha.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-019",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Manfiy elektr zaryadiga ega zarracha.",
      "options": [
        "Kislota",
        "Elektron",
        "Proton",
        "Ion"
      ],
      "correctAnswer": 1,
      "hint": "Manfiy elektr zaryadiga ega zarracha.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-020",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Manfiy elektr zaryadiga ega zarracha.",
      "options": [
        "Ion bog‘",
        "Katalizator",
        "Elektron",
        "Izotop"
      ],
      "correctAnswer": 2,
      "hint": "Manfiy elektr zaryadiga ega zarracha.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-021",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Yadro zaryadi, ya’ni protonlar soni bir xil atomlar turi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Katalizator",
        "Ion bog‘",
        "Izotop",
        "Kimyoviy element"
      ],
      "correctAnswer": 3,
      "hint": "Yadro zaryadi, ya’ni protonlar soni bir xil atomlar turi.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-022",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Yadro zaryadi, ya’ni protonlar soni bir xil atomlar turi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Kovalent bog‘",
        "Oksid",
        "Molekula",
        "Kimyoviy element"
      ],
      "correctAnswer": 3,
      "hint": "Yadro zaryadi, ya’ni protonlar soni bir xil atomlar turi.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-023",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Yadro zaryadi, ya’ni protonlar soni bir xil atomlar turi.",
      "options": [
        "Davriy jadval",
        "Kimyoviy element",
        "Tuz",
        "Atom"
      ],
      "correctAnswer": 1,
      "hint": "Yadro zaryadi, ya’ni protonlar soni bir xil atomlar turi.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-024",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Yadro zaryadi, ya’ni protonlar soni bir xil atomlar turi.",
      "options": [
        "Anion",
        "Endotermik reaksiya",
        "Elektron",
        "Kimyoviy element"
      ],
      "correctAnswer": 3,
      "hint": "Yadro zaryadi, ya’ni protonlar soni bir xil atomlar turi.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-025",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Kimyoviy elementlar atom raqami ortib borishiga ko‘ra joylashtirilgan jadval. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Endotermik reaksiya",
        "Anion",
        "Davriy jadval",
        "Elektron"
      ],
      "correctAnswer": 2,
      "hint": "Kimyoviy elementlar atom raqami ortib borishiga ko‘ra joylashtirilgan jadval.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-026",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Kimyoviy elementlar atom raqami ortib borishiga ko‘ra joylashtirilgan jadval. Qaysi atama nazarda tutilgan?",
      "options": [
        "Kation",
        "Asos",
        "Neytron",
        "Davriy jadval"
      ],
      "correctAnswer": 3,
      "hint": "Kimyoviy elementlar atom raqami ortib borishiga ko‘ra joylashtirilgan jadval.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-027",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Kimyoviy elementlar atom raqami ortib borishiga ko‘ra joylashtirilgan jadval.",
      "options": [
        "Davriy jadval",
        "Ion",
        "Ekzotermik reaksiya",
        "Kislota"
      ],
      "correctAnswer": 0,
      "hint": "Kimyoviy elementlar atom raqami ortib borishiga ko‘ra joylashtirilgan jadval.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-028",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Kimyoviy elementlar atom raqami ortib borishiga ko‘ra joylashtirilgan jadval.",
      "options": [
        "Katalizator",
        "Davriy jadval",
        "Ion bog‘",
        "Proton"
      ],
      "correctAnswer": 1,
      "hint": "Kimyoviy elementlar atom raqami ortib borishiga ko‘ra joylashtirilgan jadval.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-029",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Protonlar soni bir xil, neytronlar soni turlicha bo‘lgan atomlar. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Proton",
        "Izotop",
        "Ion bog‘",
        "Katalizator"
      ],
      "correctAnswer": 1,
      "hint": "Protonlar soni bir xil, neytronlar soni turlicha bo‘lgan atomlar.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-030",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Protonlar soni bir xil, neytronlar soni turlicha bo‘lgan atomlar. Qaysi atama nazarda tutilgan?",
      "options": [
        "Oksid",
        "Izotop",
        "Molekula",
        "Davriy jadval"
      ],
      "correctAnswer": 1,
      "hint": "Protonlar soni bir xil, neytronlar soni turlicha bo‘lgan atomlar.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-031",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Protonlar soni bir xil, neytronlar soni turlicha bo‘lgan atomlar.",
      "options": [
        "Kimyoviy element",
        "Kovalent bog‘",
        "Izotop",
        "Atom"
      ],
      "correctAnswer": 2,
      "hint": "Protonlar soni bir xil, neytronlar soni turlicha bo‘lgan atomlar.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-032",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Protonlar soni bir xil, neytronlar soni turlicha bo‘lgan atomlar.",
      "options": [
        "Elektron",
        "Tuz",
        "Anion",
        "Izotop"
      ],
      "correctAnswer": 3,
      "hint": "Protonlar soni bir xil, neytronlar soni turlicha bo‘lgan atomlar.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-033",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Elektron yo‘qotish yoki qabul qilish natijasida zaryadlangan zarracha. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Anion",
        "Ion",
        "Elektron",
        "Tuz"
      ],
      "correctAnswer": 1,
      "hint": "Elektron yo‘qotish yoki qabul qilish natijasida zaryadlangan zarracha.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-034",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Elektron yo‘qotish yoki qabul qilish natijasida zaryadlangan zarracha. Qaysi atama nazarda tutilgan?",
      "options": [
        "Ion",
        "Endotermik reaksiya",
        "Asos",
        "Kation"
      ],
      "correctAnswer": 0,
      "hint": "Elektron yo‘qotish yoki qabul qilish natijasida zaryadlangan zarracha.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-035",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Elektron yo‘qotish yoki qabul qilish natijasida zaryadlangan zarracha.",
      "options": [
        "Neytron",
        "Ekzotermik reaksiya",
        "Ion",
        "Kislota"
      ],
      "correctAnswer": 2,
      "hint": "Elektron yo‘qotish yoki qabul qilish natijasida zaryadlangan zarracha.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-036",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Elektron yo‘qotish yoki qabul qilish natijasida zaryadlangan zarracha.",
      "options": [
        "Proton",
        "Izotop",
        "Ion",
        "Katalizator"
      ],
      "correctAnswer": 2,
      "hint": "Elektron yo‘qotish yoki qabul qilish natijasida zaryadlangan zarracha.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-037",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Elektron yo‘qotgan musbat zaryadli ion. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Kation",
        "Izotop",
        "Katalizator",
        "Proton"
      ],
      "correctAnswer": 0,
      "hint": "Elektron yo‘qotgan musbat zaryadli ion.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-038",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Elektron yo‘qotgan musbat zaryadli ion. Qaysi atama nazarda tutilgan?",
      "options": [
        "Kation",
        "Molekula",
        "Ion bog‘",
        "Davriy jadval"
      ],
      "correctAnswer": 0,
      "hint": "Elektron yo‘qotgan musbat zaryadli ion.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-039",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Elektron yo‘qotgan musbat zaryadli ion.",
      "options": [
        "Kimyoviy element",
        "Oksid",
        "Kation",
        "Kovalent bog‘"
      ],
      "correctAnswer": 2,
      "hint": "Elektron yo‘qotgan musbat zaryadli ion.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-040",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Elektron yo‘qotgan musbat zaryadli ion.",
      "options": [
        "Tuz",
        "Kation",
        "Atom",
        "Anion"
      ],
      "correctAnswer": 1,
      "hint": "Elektron yo‘qotgan musbat zaryadli ion.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-041",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Elektron qabul qilgan manfiy zaryadli ion. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Tuz",
        "Anion",
        "Atom",
        "Kation"
      ],
      "correctAnswer": 1,
      "hint": "Elektron qabul qilgan manfiy zaryadli ion.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-042",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Elektron qabul qilgan manfiy zaryadli ion. Qaysi atama nazarda tutilgan?",
      "options": [
        "Asos",
        "Anion",
        "Elektron",
        "Endotermik reaksiya"
      ],
      "correctAnswer": 1,
      "hint": "Elektron qabul qilgan manfiy zaryadli ion.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-043",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Elektron qabul qilgan manfiy zaryadli ion.",
      "options": [
        "Ekzotermik reaksiya",
        "Neytron",
        "Anion",
        "Ion"
      ],
      "correctAnswer": 2,
      "hint": "Elektron qabul qilgan manfiy zaryadli ion.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-044",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Elektron qabul qilgan manfiy zaryadli ion.",
      "options": [
        "Proton",
        "Izotop",
        "Anion",
        "Kislota"
      ],
      "correctAnswer": 2,
      "hint": "Elektron qabul qilgan manfiy zaryadli ion.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-045",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Atomlar orasida elektron juftlari umumiylashishi orqali hosil bo‘ladigan bog‘. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Proton",
        "Kislota",
        "Kovalent bog‘",
        "Izotop"
      ],
      "correctAnswer": 2,
      "hint": "Atomlar orasida elektron juftlari umumiylashishi orqali hosil bo‘ladigan bog‘.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-046",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Atomlar orasida elektron juftlari umumiylashishi orqali hosil bo‘ladigan bog‘. Qaysi atama nazarda tutilgan?",
      "options": [
        "Ion bog‘",
        "Kovalent bog‘",
        "Katalizator",
        "Davriy jadval"
      ],
      "correctAnswer": 1,
      "hint": "Atomlar orasida elektron juftlari umumiylashishi orqali hosil bo‘ladigan bog‘.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-047",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Atomlar orasida elektron juftlari umumiylashishi orqali hosil bo‘ladigan bog‘.",
      "options": [
        "Kovalent bog‘",
        "Oksid",
        "Molekula",
        "Anion"
      ],
      "correctAnswer": 0,
      "hint": "Atomlar orasida elektron juftlari umumiylashishi orqali hosil bo‘ladigan bog‘.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-048",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Atomlar orasida elektron juftlari umumiylashishi orqali hosil bo‘ladigan bog‘.",
      "options": [
        "Tuz",
        "Atom",
        "Kimyoviy element",
        "Kovalent bog‘"
      ],
      "correctAnswer": 3,
      "hint": "Atomlar orasida elektron juftlari umumiylashishi orqali hosil bo‘ladigan bog‘.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-049",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qarama-qarshi zaryadlangan ionlar tortishishi natijasida hosil bo‘ladigan bog‘. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ion bog‘",
        "Kimyoviy element",
        "Atom",
        "Tuz"
      ],
      "correctAnswer": 0,
      "hint": "Qarama-qarshi zaryadlangan ionlar tortishishi natijasida hosil bo‘ladigan bog‘.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-050",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Qarama-qarshi zaryadlangan ionlar tortishishi natijasida hosil bo‘ladigan bog‘. Qaysi atama nazarda tutilgan?",
      "options": [
        "Endotermik reaksiya",
        "Ion bog‘",
        "Kation",
        "Elektron"
      ],
      "correctAnswer": 1,
      "hint": "Qarama-qarshi zaryadlangan ionlar tortishishi natijasida hosil bo‘ladigan bog‘.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-051",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Qarama-qarshi zaryadlangan ionlar tortishishi natijasida hosil bo‘ladigan bog‘.",
      "options": [
        "Ion bog‘",
        "Asos",
        "Neytron",
        "Ion"
      ],
      "correctAnswer": 0,
      "hint": "Qarama-qarshi zaryadlangan ionlar tortishishi natijasida hosil bo‘ladigan bog‘.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-052",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Qarama-qarshi zaryadlangan ionlar tortishishi natijasida hosil bo‘ladigan bog‘.",
      "options": [
        "Izotop",
        "Kislota",
        "Ion bog‘",
        "Ekzotermik reaksiya"
      ],
      "correctAnswer": 2,
      "hint": "Qarama-qarshi zaryadlangan ionlar tortishishi natijasida hosil bo‘ladigan bog‘.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-053",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Suvli eritmada vodorod ionlarini hosil qiladigan modda. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Kislota",
        "Ion bog‘",
        "Izotop",
        "Ekzotermik reaksiya"
      ],
      "correctAnswer": 0,
      "hint": "Suvli eritmada vodorod ionlarini hosil qiladigan modda.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-054",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Suvli eritmada vodorod ionlarini hosil qiladigan modda. Qaysi atama nazarda tutilgan?",
      "options": [
        "Kovalent bog‘",
        "Proton",
        "Katalizator",
        "Kislota"
      ],
      "correctAnswer": 3,
      "hint": "Suvli eritmada vodorod ionlarini hosil qiladigan modda.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-055",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Suvli eritmada vodorod ionlarini hosil qiladigan modda.",
      "options": [
        "Kislota",
        "Molekula",
        "Davriy jadval",
        "Oksid"
      ],
      "correctAnswer": 0,
      "hint": "Suvli eritmada vodorod ionlarini hosil qiladigan modda.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-056",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Suvli eritmada vodorod ionlarini hosil qiladigan modda.",
      "options": [
        "Kislota",
        "Atom",
        "Anion",
        "Kimyoviy element"
      ],
      "correctAnswer": 0,
      "hint": "Suvli eritmada vodorod ionlarini hosil qiladigan modda.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-057",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Kislota bilan reaksiyada tuz va suv hosil qilishi mumkin bo‘lgan modda. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Anion",
        "Asos",
        "Kimyoviy element",
        "Atom"
      ],
      "correctAnswer": 1,
      "hint": "Kislota bilan reaksiyada tuz va suv hosil qilishi mumkin bo‘lgan modda.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-058",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Kislota bilan reaksiyada tuz va suv hosil qilishi mumkin bo‘lgan modda. Qaysi atama nazarda tutilgan?",
      "options": [
        "Elektron",
        "Kation",
        "Tuz",
        "Asos"
      ],
      "correctAnswer": 3,
      "hint": "Kislota bilan reaksiyada tuz va suv hosil qilishi mumkin bo‘lgan modda.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-059",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Kislota bilan reaksiyada tuz va suv hosil qilishi mumkin bo‘lgan modda.",
      "options": [
        "Endotermik reaksiya",
        "Ion",
        "Asos",
        "Kislota"
      ],
      "correctAnswer": 2,
      "hint": "Kislota bilan reaksiyada tuz va suv hosil qilishi mumkin bo‘lgan modda.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-060",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Kislota bilan reaksiyada tuz va suv hosil qilishi mumkin bo‘lgan modda.",
      "options": [
        "Asos",
        "Ekzotermik reaksiya",
        "Ion bog‘",
        "Neytron"
      ],
      "correctAnswer": 0,
      "hint": "Kislota bilan reaksiyada tuz va suv hosil qilishi mumkin bo‘lgan modda.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-061",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Kislota tarkibidagi vodorod o‘rnini metall yoki ammoniy egallagan birikma. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ekzotermik reaksiya",
        "Neytron",
        "Tuz",
        "Ion bog‘"
      ],
      "correctAnswer": 2,
      "hint": "Kislota tarkibidagi vodorod o‘rnini metall yoki ammoniy egallagan birikma.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-062",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Kislota tarkibidagi vodorod o‘rnini metall yoki ammoniy egallagan birikma. Qaysi atama nazarda tutilgan?",
      "options": [
        "Izotop",
        "Tuz",
        "Katalizator",
        "Proton"
      ],
      "correctAnswer": 1,
      "hint": "Kislota tarkibidagi vodorod o‘rnini metall yoki ammoniy egallagan birikma.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-063",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Kislota tarkibidagi vodorod o‘rnini metall yoki ammoniy egallagan birikma.",
      "options": [
        "Tuz",
        "Davriy jadval",
        "Molekula",
        "Kovalent bog‘"
      ],
      "correctAnswer": 0,
      "hint": "Kislota tarkibidagi vodorod o‘rnini metall yoki ammoniy egallagan birikma.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-064",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Kislota tarkibidagi vodorod o‘rnini metall yoki ammoniy egallagan birikma.",
      "options": [
        "Anion",
        "Kimyoviy element",
        "Tuz",
        "Oksid"
      ],
      "correctAnswer": 2,
      "hint": "Kislota tarkibidagi vodorod o‘rnini metall yoki ammoniy egallagan birikma.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-065",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ikki elementdan biri kislorod bo‘lgan ikki elementli birikma. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Oksid",
        "Kimyoviy element",
        "Anion",
        "Tuz"
      ],
      "correctAnswer": 0,
      "hint": "Ikki elementdan biri kislorod bo‘lgan ikki elementli birikma.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-066",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Ikki elementdan biri kislorod bo‘lgan ikki elementli birikma. Qaysi atama nazarda tutilgan?",
      "options": [
        "Kation",
        "Asos",
        "Atom",
        "Oksid"
      ],
      "correctAnswer": 3,
      "hint": "Ikki elementdan biri kislorod bo‘lgan ikki elementli birikma.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-067",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Ikki elementdan biri kislorod bo‘lgan ikki elementli birikma.",
      "options": [
        "Elektron",
        "Oksid",
        "Kislota",
        "Endotermik reaksiya"
      ],
      "correctAnswer": 1,
      "hint": "Ikki elementdan biri kislorod bo‘lgan ikki elementli birikma.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-068",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Ikki elementdan biri kislorod bo‘lgan ikki elementli birikma.",
      "options": [
        "Ion",
        "Oksid",
        "Neytron",
        "Ekzotermik reaksiya"
      ],
      "correctAnswer": 1,
      "hint": "Ikki elementdan biri kislorod bo‘lgan ikki elementli birikma.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-069",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Reaksiya tezligini o‘zgartirib, jarayonda sarflanmaydigan modda. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Neytron",
        "Ion",
        "Katalizator",
        "Ekzotermik reaksiya"
      ],
      "correctAnswer": 2,
      "hint": "Reaksiya tezligini o‘zgartirib, jarayonda sarflanmaydigan modda.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-070",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Reaksiya tezligini o‘zgartirib, jarayonda sarflanmaydigan modda. Qaysi atama nazarda tutilgan?",
      "options": [
        "Katalizator",
        "Proton",
        "Ion bog‘",
        "Izotop"
      ],
      "correctAnswer": 0,
      "hint": "Reaksiya tezligini o‘zgartirib, jarayonda sarflanmaydigan modda.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-071",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Reaksiya tezligini o‘zgartirib, jarayonda sarflanmaydigan modda.",
      "options": [
        "Davriy jadval",
        "Katalizator",
        "Kovalent bog‘",
        "Oksid"
      ],
      "correctAnswer": 1,
      "hint": "Reaksiya tezligini o‘zgartirib, jarayonda sarflanmaydigan modda.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-072",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Reaksiya tezligini o‘zgartirib, jarayonda sarflanmaydigan modda.",
      "options": [
        "Tuz",
        "Molekula",
        "Anion",
        "Katalizator"
      ],
      "correctAnswer": 3,
      "hint": "Reaksiya tezligini o‘zgartirib, jarayonda sarflanmaydigan modda.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-073",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Atrof-muhitga issiqlik ajratadigan kimyoviy reaksiya. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Molekula",
        "Tuz",
        "Ekzotermik reaksiya",
        "Anion"
      ],
      "correctAnswer": 2,
      "hint": "Atrof-muhitga issiqlik ajratadigan kimyoviy reaksiya.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-074",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Atrof-muhitga issiqlik ajratadigan kimyoviy reaksiya. Qaysi atama nazarda tutilgan?",
      "options": [
        "Asos",
        "Ekzotermik reaksiya",
        "Atom",
        "Kimyoviy element"
      ],
      "correctAnswer": 1,
      "hint": "Atrof-muhitga issiqlik ajratadigan kimyoviy reaksiya.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-075",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Atrof-muhitga issiqlik ajratadigan kimyoviy reaksiya.",
      "options": [
        "Kation",
        "Elektron",
        "Endotermik reaksiya",
        "Ekzotermik reaksiya"
      ],
      "correctAnswer": 3,
      "hint": "Atrof-muhitga issiqlik ajratadigan kimyoviy reaksiya.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-076",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Atrof-muhitga issiqlik ajratadigan kimyoviy reaksiya.",
      "options": [
        "Neytron",
        "Ekzotermik reaksiya",
        "Kislota",
        "Ion"
      ],
      "correctAnswer": 1,
      "hint": "Atrof-muhitga issiqlik ajratadigan kimyoviy reaksiya.",
      "difficulty": "mixed"
    },
    {
      "id": "chemistry-077",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Tashqi muhitdan issiqlik yutadigan kimyoviy reaksiya. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Endotermik reaksiya",
        "Kislota",
        "Neytron",
        "Ion"
      ],
      "correctAnswer": 0,
      "hint": "Tashqi muhitdan issiqlik yutadigan kimyoviy reaksiya.",
      "difficulty": "easy"
    },
    {
      "id": "chemistry-078",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Darslikdagi quyidagi izohni o‘qing: Tashqi muhitdan issiqlik yutadigan kimyoviy reaksiya. Qaysi atama nazarda tutilgan?",
      "options": [
        "Izotop",
        "Ion bog‘",
        "Endotermik reaksiya",
        "Katalizator"
      ],
      "correctAnswer": 2,
      "hint": "Tashqi muhitdan issiqlik yutadigan kimyoviy reaksiya.",
      "difficulty": "medium"
    },
    {
      "id": "chemistry-079",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Tashqi muhitdan issiqlik yutadigan kimyoviy reaksiya.",
      "options": [
        "Proton",
        "Kovalent bog‘",
        "Oksid",
        "Endotermik reaksiya"
      ],
      "correctAnswer": 3,
      "hint": "Tashqi muhitdan issiqlik yutadigan kimyoviy reaksiya.",
      "difficulty": "hard"
    },
    {
      "id": "chemistry-080",
      "subjectId": "chemistry",
      "subject": "Kimyo",
      "question": "Ta’rifga mos atamani toping — Tashqi muhitdan issiqlik yutadigan kimyoviy reaksiya.",
      "options": [
        "Davriy jadval",
        "Tuz",
        "Endotermik reaksiya",
        "Molekula"
      ],
      "correctAnswer": 2,
      "hint": "Tashqi muhitdan issiqlik yutadigan kimyoviy reaksiya.",
      "difficulty": "mixed"
    }
  ],
  "uzbek": [
    {
      "id": "uzbek-001",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Shaxs, narsa, joy yoki tushuncha nomini bildiruvchi so‘z turkumi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Hol",
        "Fe’l",
        "Undov so‘z",
        "Ot"
      ],
      "correctAnswer": 3,
      "hint": "Shaxs, narsa, joy yoki tushuncha nomini bildiruvchi so‘z turkumi.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-002",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Shaxs, narsa, joy yoki tushuncha nomini bildiruvchi so‘z turkumi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Paronim",
        "Yuklama",
        "Ot",
        "To‘ldiruvchi"
      ],
      "correctAnswer": 2,
      "hint": "Shaxs, narsa, joy yoki tushuncha nomini bildiruvchi so‘z turkumi.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-003",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Shaxs, narsa, joy yoki tushuncha nomini bildiruvchi so‘z turkumi.",
      "options": [
        "Ot",
        "Omonim",
        "Olmosh",
        "Aniqlovchi"
      ],
      "correctAnswer": 0,
      "hint": "Shaxs, narsa, joy yoki tushuncha nomini bildiruvchi so‘z turkumi.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-004",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Shaxs, narsa, joy yoki tushuncha nomini bildiruvchi so‘z turkumi.",
      "options": [
        "Son",
        "Ot",
        "Bog‘lovchi",
        "Antonim"
      ],
      "correctAnswer": 1,
      "hint": "Shaxs, narsa, joy yoki tushuncha nomini bildiruvchi so‘z turkumi.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-005",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Predmetning belgi-xususiyatini bildiruvchi so‘z turkumi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Antonim",
        "Sifat",
        "Bog‘lovchi",
        "Son"
      ],
      "correctAnswer": 1,
      "hint": "Predmetning belgi-xususiyatini bildiruvchi so‘z turkumi.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-006",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Predmetning belgi-xususiyatini bildiruvchi so‘z turkumi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Kesim",
        "Sifat",
        "Ko‘makchi",
        "Ot"
      ],
      "correctAnswer": 1,
      "hint": "Predmetning belgi-xususiyatini bildiruvchi so‘z turkumi.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-007",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Predmetning belgi-xususiyatini bildiruvchi so‘z turkumi.",
      "options": [
        "Sinonim",
        "Sifat",
        "Ega",
        "Ravish"
      ],
      "correctAnswer": 1,
      "hint": "Predmetning belgi-xususiyatini bildiruvchi so‘z turkumi.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-008",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Predmetning belgi-xususiyatini bildiruvchi so‘z turkumi.",
      "options": [
        "Morfema",
        "Undov so‘z",
        "Sifat",
        "Hol"
      ],
      "correctAnswer": 2,
      "hint": "Predmetning belgi-xususiyatini bildiruvchi so‘z turkumi.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-009",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Predmetning miqdori yoki tartibini bildiruvchi so‘z turkumi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Morfema",
        "Hol",
        "Son",
        "Undov so‘z"
      ],
      "correctAnswer": 2,
      "hint": "Predmetning miqdori yoki tartibini bildiruvchi so‘z turkumi.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-010",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Predmetning miqdori yoki tartibini bildiruvchi so‘z turkumi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Son",
        "To‘ldiruvchi",
        "Fe’l",
        "Paronim"
      ],
      "correctAnswer": 0,
      "hint": "Predmetning miqdori yoki tartibini bildiruvchi so‘z turkumi.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-011",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Predmetning miqdori yoki tartibini bildiruvchi so‘z turkumi.",
      "options": [
        "Yuklama",
        "Son",
        "Omonim",
        "Olmosh"
      ],
      "correctAnswer": 1,
      "hint": "Predmetning miqdori yoki tartibini bildiruvchi so‘z turkumi.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-012",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Predmetning miqdori yoki tartibini bildiruvchi so‘z turkumi.",
      "options": [
        "Son",
        "Bog‘lovchi",
        "Sifat",
        "Aniqlovchi"
      ],
      "correctAnswer": 0,
      "hint": "Predmetning miqdori yoki tartibini bildiruvchi so‘z turkumi.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-013",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ot, sifat, son o‘rnida qo‘llanadigan so‘z turkumi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Bog‘lovchi",
        "Olmosh",
        "Aniqlovchi",
        "Sifat"
      ],
      "correctAnswer": 1,
      "hint": "Ot, sifat, son o‘rnida qo‘llanadigan so‘z turkumi.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-014",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Ot, sifat, son o‘rnida qo‘llanadigan so‘z turkumi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Antonim",
        "Olmosh",
        "Kesim",
        "Ko‘makchi"
      ],
      "correctAnswer": 1,
      "hint": "Ot, sifat, son o‘rnida qo‘llanadigan so‘z turkumi.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-015",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Ot, sifat, son o‘rnida qo‘llanadigan so‘z turkumi.",
      "options": [
        "Olmosh",
        "Ot",
        "Ega",
        "Sinonim"
      ],
      "correctAnswer": 0,
      "hint": "Ot, sifat, son o‘rnida qo‘llanadigan so‘z turkumi.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-016",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Ot, sifat, son o‘rnida qo‘llanadigan so‘z turkumi.",
      "options": [
        "Olmosh",
        "Hol",
        "Ravish",
        "Morfema"
      ],
      "correctAnswer": 0,
      "hint": "Ot, sifat, son o‘rnida qo‘llanadigan so‘z turkumi.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-017",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Harakat yoki holatni bildiruvchi so‘z turkumi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ravish",
        "Fe’l",
        "Morfema",
        "Hol"
      ],
      "correctAnswer": 1,
      "hint": "Harakat yoki holatni bildiruvchi so‘z turkumi.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-018",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Harakat yoki holatni bildiruvchi so‘z turkumi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Fe’l",
        "Undov so‘z",
        "Paronim",
        "Olmosh"
      ],
      "correctAnswer": 0,
      "hint": "Harakat yoki holatni bildiruvchi so‘z turkumi.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-019",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Harakat yoki holatni bildiruvchi so‘z turkumi.",
      "options": [
        "Yuklama",
        "To‘ldiruvchi",
        "Son",
        "Fe’l"
      ],
      "correctAnswer": 3,
      "hint": "Harakat yoki holatni bildiruvchi so‘z turkumi.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-020",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Harakat yoki holatni bildiruvchi so‘z turkumi.",
      "options": [
        "Omonim",
        "Aniqlovchi",
        "Bog‘lovchi",
        "Fe’l"
      ],
      "correctAnswer": 3,
      "hint": "Harakat yoki holatni bildiruvchi so‘z turkumi.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-021",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Harakatning belgisi, payti, o‘rni yoki tarzini bildiruvchi so‘z turkumi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Bog‘lovchi",
        "Omonim",
        "Aniqlovchi",
        "Ravish"
      ],
      "correctAnswer": 3,
      "hint": "Harakatning belgisi, payti, o‘rni yoki tarzini bildiruvchi so‘z turkumi.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-022",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Harakatning belgisi, payti, o‘rni yoki tarzini bildiruvchi so‘z turkumi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Ravish",
        "Kesim",
        "Sifat",
        "Antonim"
      ],
      "correctAnswer": 0,
      "hint": "Harakatning belgisi, payti, o‘rni yoki tarzini bildiruvchi so‘z turkumi.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-023",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Harakatning belgisi, payti, o‘rni yoki tarzini bildiruvchi so‘z turkumi.",
      "options": [
        "Sinonim",
        "Ko‘makchi",
        "Ot",
        "Ravish"
      ],
      "correctAnswer": 3,
      "hint": "Harakatning belgisi, payti, o‘rni yoki tarzini bildiruvchi so‘z turkumi.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-024",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Harakatning belgisi, payti, o‘rni yoki tarzini bildiruvchi so‘z turkumi.",
      "options": [
        "Fe’l",
        "Ega",
        "Ravish",
        "Morfema"
      ],
      "correctAnswer": 2,
      "hint": "Harakatning belgisi, payti, o‘rni yoki tarzini bildiruvchi so‘z turkumi.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-025",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "So‘zlarning grammatik munosabatini ifodalashga xizmat qiluvchi yordamchi so‘z. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ega",
        "Fe’l",
        "Ko‘makchi",
        "Morfema"
      ],
      "correctAnswer": 2,
      "hint": "So‘zlarning grammatik munosabatini ifodalashga xizmat qiluvchi yordamchi so‘z.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-026",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: So‘zlarning grammatik munosabatini ifodalashga xizmat qiluvchi yordamchi so‘z. Qaysi atama nazarda tutilgan?",
      "options": [
        "Olmosh",
        "Hol",
        "Ko‘makchi",
        "Undov so‘z"
      ],
      "correctAnswer": 2,
      "hint": "So‘zlarning grammatik munosabatini ifodalashga xizmat qiluvchi yordamchi so‘z.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-027",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: So‘zlarning grammatik munosabatini ifodalashga xizmat qiluvchi yordamchi so‘z.",
      "options": [
        "Paronim",
        "Yuklama",
        "To‘ldiruvchi",
        "Ko‘makchi"
      ],
      "correctAnswer": 3,
      "hint": "So‘zlarning grammatik munosabatini ifodalashga xizmat qiluvchi yordamchi so‘z.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-028",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — So‘zlarning grammatik munosabatini ifodalashga xizmat qiluvchi yordamchi so‘z.",
      "options": [
        "Ko‘makchi",
        "Aniqlovchi",
        "Son",
        "Omonim"
      ],
      "correctAnswer": 0,
      "hint": "So‘zlarning grammatik munosabatini ifodalashga xizmat qiluvchi yordamchi so‘z.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-029",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Uyushiq bo‘laklar yoki qo‘shma gap qismlarini bog‘laydigan yordamchi so‘z. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Bog‘lovchi",
        "Aniqlovchi",
        "Omonim",
        "Son"
      ],
      "correctAnswer": 0,
      "hint": "Uyushiq bo‘laklar yoki qo‘shma gap qismlarini bog‘laydigan yordamchi so‘z.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-030",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Uyushiq bo‘laklar yoki qo‘shma gap qismlarini bog‘laydigan yordamchi so‘z. Qaysi atama nazarda tutilgan?",
      "options": [
        "Bog‘lovchi",
        "Antonim",
        "Ko‘makchi",
        "Sifat"
      ],
      "correctAnswer": 0,
      "hint": "Uyushiq bo‘laklar yoki qo‘shma gap qismlarini bog‘laydigan yordamchi so‘z.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-031",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Uyushiq bo‘laklar yoki qo‘shma gap qismlarini bog‘laydigan yordamchi so‘z.",
      "options": [
        "Ot",
        "Kesim",
        "Bog‘lovchi",
        "Ravish"
      ],
      "correctAnswer": 2,
      "hint": "Uyushiq bo‘laklar yoki qo‘shma gap qismlarini bog‘laydigan yordamchi so‘z.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-032",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Uyushiq bo‘laklar yoki qo‘shma gap qismlarini bog‘laydigan yordamchi so‘z.",
      "options": [
        "Fe’l",
        "Ega",
        "Bog‘lovchi",
        "Sinonim"
      ],
      "correctAnswer": 2,
      "hint": "Uyushiq bo‘laklar yoki qo‘shma gap qismlarini bog‘laydigan yordamchi so‘z.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-033",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "So‘z yoki gapga qo‘shimcha ma’no, ta’kid yoki so‘roq ma’nosini yuklaydigan birlik. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Sinonim",
        "Yuklama",
        "Ega",
        "Fe’l"
      ],
      "correctAnswer": 1,
      "hint": "So‘z yoki gapga qo‘shimcha ma’no, ta’kid yoki so‘roq ma’nosini yuklaydigan birlik.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-034",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: So‘z yoki gapga qo‘shimcha ma’no, ta’kid yoki so‘roq ma’nosini yuklaydigan birlik. Qaysi atama nazarda tutilgan?",
      "options": [
        "Morfema",
        "Hol",
        "Undov so‘z",
        "Yuklama"
      ],
      "correctAnswer": 3,
      "hint": "So‘z yoki gapga qo‘shimcha ma’no, ta’kid yoki so‘roq ma’nosini yuklaydigan birlik.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-035",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: So‘z yoki gapga qo‘shimcha ma’no, ta’kid yoki so‘roq ma’nosini yuklaydigan birlik.",
      "options": [
        "Yuklama",
        "Paronim",
        "To‘ldiruvchi",
        "Olmosh"
      ],
      "correctAnswer": 0,
      "hint": "So‘z yoki gapga qo‘shimcha ma’no, ta’kid yoki so‘roq ma’nosini yuklaydigan birlik.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-036",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — So‘z yoki gapga qo‘shimcha ma’no, ta’kid yoki so‘roq ma’nosini yuklaydigan birlik.",
      "options": [
        "Yuklama",
        "Omonim",
        "Bog‘lovchi",
        "Son"
      ],
      "correctAnswer": 0,
      "hint": "So‘z yoki gapga qo‘shimcha ma’no, ta’kid yoki so‘roq ma’nosini yuklaydigan birlik.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-037",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "His-hayajon, buyruq-xitob yoki tovushga taqlidni bildiruvchi so‘z. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Undov so‘z",
        "Son",
        "Bog‘lovchi",
        "Omonim"
      ],
      "correctAnswer": 0,
      "hint": "His-hayajon, buyruq-xitob yoki tovushga taqlidni bildiruvchi so‘z.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-038",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: His-hayajon, buyruq-xitob yoki tovushga taqlidni bildiruvchi so‘z. Qaysi atama nazarda tutilgan?",
      "options": [
        "Aniqlovchi",
        "Sifat",
        "Undov so‘z",
        "Ko‘makchi"
      ],
      "correctAnswer": 2,
      "hint": "His-hayajon, buyruq-xitob yoki tovushga taqlidni bildiruvchi so‘z.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-039",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: His-hayajon, buyruq-xitob yoki tovushga taqlidni bildiruvchi so‘z.",
      "options": [
        "Kesim",
        "Ravish",
        "Antonim",
        "Undov so‘z"
      ],
      "correctAnswer": 3,
      "hint": "His-hayajon, buyruq-xitob yoki tovushga taqlidni bildiruvchi so‘z.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-040",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — His-hayajon, buyruq-xitob yoki tovushga taqlidni bildiruvchi so‘z.",
      "options": [
        "Ot",
        "Undov so‘z",
        "Ega",
        "Sinonim"
      ],
      "correctAnswer": 1,
      "hint": "His-hayajon, buyruq-xitob yoki tovushga taqlidni bildiruvchi so‘z.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-041",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Gapda fikr kim yoki nima haqida ekanini bildiruvchi bosh bo‘lak. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ega",
        "Ot",
        "Undov so‘z",
        "Sinonim"
      ],
      "correctAnswer": 0,
      "hint": "Gapda fikr kim yoki nima haqida ekanini bildiruvchi bosh bo‘lak.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-042",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Gapda fikr kim yoki nima haqida ekanini bildiruvchi bosh bo‘lak. Qaysi atama nazarda tutilgan?",
      "options": [
        "Fe’l",
        "Ega",
        "Hol",
        "Morfema"
      ],
      "correctAnswer": 1,
      "hint": "Gapda fikr kim yoki nima haqida ekanini bildiruvchi bosh bo‘lak.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-043",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Gapda fikr kim yoki nima haqida ekanini bildiruvchi bosh bo‘lak.",
      "options": [
        "Yuklama",
        "Ega",
        "Paronim",
        "Olmosh"
      ],
      "correctAnswer": 1,
      "hint": "Gapda fikr kim yoki nima haqida ekanini bildiruvchi bosh bo‘lak.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-044",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Gapda fikr kim yoki nima haqida ekanini bildiruvchi bosh bo‘lak.",
      "options": [
        "Bog‘lovchi",
        "Son",
        "To‘ldiruvchi",
        "Ega"
      ],
      "correctAnswer": 3,
      "hint": "Gapda fikr kim yoki nima haqida ekanini bildiruvchi bosh bo‘lak.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-045",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ega haqida xabar beruvchi, gapning asosiy mazmunini ifodalovchi bosh bo‘lak. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Bog‘lovchi",
        "To‘ldiruvchi",
        "Kesim",
        "Son"
      ],
      "correctAnswer": 2,
      "hint": "Ega haqida xabar beruvchi, gapning asosiy mazmunini ifodalovchi bosh bo‘lak.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-046",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Ega haqida xabar beruvchi, gapning asosiy mazmunini ifodalovchi bosh bo‘lak. Qaysi atama nazarda tutilgan?",
      "options": [
        "Kesim",
        "Omonim",
        "Ko‘makchi",
        "Aniqlovchi"
      ],
      "correctAnswer": 0,
      "hint": "Ega haqida xabar beruvchi, gapning asosiy mazmunini ifodalovchi bosh bo‘lak.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-047",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Ega haqida xabar beruvchi, gapning asosiy mazmunini ifodalovchi bosh bo‘lak.",
      "options": [
        "Ega",
        "Kesim",
        "Sifat",
        "Antonim"
      ],
      "correctAnswer": 1,
      "hint": "Ega haqida xabar beruvchi, gapning asosiy mazmunini ifodalovchi bosh bo‘lak.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-048",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Ega haqida xabar beruvchi, gapning asosiy mazmunini ifodalovchi bosh bo‘lak.",
      "options": [
        "Ravish",
        "Sinonim",
        "Ot",
        "Kesim"
      ],
      "correctAnswer": 3,
      "hint": "Ega haqida xabar beruvchi, gapning asosiy mazmunini ifodalovchi bosh bo‘lak.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-049",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Predmetning belgisini yoki qarashliligini bildirib, aniqlab keluvchi ikkinchi darajali bo‘lak. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ravish",
        "Sinonim",
        "Ot",
        "Aniqlovchi"
      ],
      "correctAnswer": 3,
      "hint": "Predmetning belgisini yoki qarashliligini bildirib, aniqlab keluvchi ikkinchi darajali bo‘lak.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-050",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Predmetning belgisini yoki qarashliligini bildirib, aniqlab keluvchi ikkinchi darajali bo‘lak. Qaysi atama nazarda tutilgan?",
      "options": [
        "Aniqlovchi",
        "Morfema",
        "Undov so‘z",
        "Fe’l"
      ],
      "correctAnswer": 0,
      "hint": "Predmetning belgisini yoki qarashliligini bildirib, aniqlab keluvchi ikkinchi darajali bo‘lak.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-051",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Predmetning belgisini yoki qarashliligini bildirib, aniqlab keluvchi ikkinchi darajali bo‘lak.",
      "options": [
        "Olmosh",
        "Yuklama",
        "Hol",
        "Aniqlovchi"
      ],
      "correctAnswer": 3,
      "hint": "Predmetning belgisini yoki qarashliligini bildirib, aniqlab keluvchi ikkinchi darajali bo‘lak.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-052",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Predmetning belgisini yoki qarashliligini bildirib, aniqlab keluvchi ikkinchi darajali bo‘lak.",
      "options": [
        "Paronim",
        "Aniqlovchi",
        "Bog‘lovchi",
        "To‘ldiruvchi"
      ],
      "correctAnswer": 1,
      "hint": "Predmetning belgisini yoki qarashliligini bildirib, aniqlab keluvchi ikkinchi darajali bo‘lak.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-053",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Kesim anglatgan harakat yo‘naltirilgan predmetni bildiruvchi bo‘lak. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Bog‘lovchi",
        "Aniqlovchi",
        "To‘ldiruvchi",
        "Paronim"
      ],
      "correctAnswer": 2,
      "hint": "Kesim anglatgan harakat yo‘naltirilgan predmetni bildiruvchi bo‘lak.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-054",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Kesim anglatgan harakat yo‘naltirilgan predmetni bildiruvchi bo‘lak. Qaysi atama nazarda tutilgan?",
      "options": [
        "Omonim",
        "Kesim",
        "Son",
        "To‘ldiruvchi"
      ],
      "correctAnswer": 3,
      "hint": "Kesim anglatgan harakat yo‘naltirilgan predmetni bildiruvchi bo‘lak.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-055",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Kesim anglatgan harakat yo‘naltirilgan predmetni bildiruvchi bo‘lak.",
      "options": [
        "Ko‘makchi",
        "To‘ldiruvchi",
        "Sifat",
        "Antonim"
      ],
      "correctAnswer": 1,
      "hint": "Kesim anglatgan harakat yo‘naltirilgan predmetni bildiruvchi bo‘lak.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-056",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Kesim anglatgan harakat yo‘naltirilgan predmetni bildiruvchi bo‘lak.",
      "options": [
        "Ega",
        "To‘ldiruvchi",
        "Ot",
        "Ravish"
      ],
      "correctAnswer": 1,
      "hint": "Kesim anglatgan harakat yo‘naltirilgan predmetni bildiruvchi bo‘lak.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-057",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Harakatning bajarilish tarzi, o‘rni, payti yoki sababini bildiruvchi bo‘lak. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ravish",
        "Ega",
        "Ot",
        "Hol"
      ],
      "correctAnswer": 3,
      "hint": "Harakatning bajarilish tarzi, o‘rni, payti yoki sababini bildiruvchi bo‘lak.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-058",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Harakatning bajarilish tarzi, o‘rni, payti yoki sababini bildiruvchi bo‘lak. Qaysi atama nazarda tutilgan?",
      "options": [
        "Sinonim",
        "Fe’l",
        "Undov so‘z",
        "Hol"
      ],
      "correctAnswer": 3,
      "hint": "Harakatning bajarilish tarzi, o‘rni, payti yoki sababini bildiruvchi bo‘lak.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-059",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Harakatning bajarilish tarzi, o‘rni, payti yoki sababini bildiruvchi bo‘lak.",
      "options": [
        "Yuklama",
        "Morfema",
        "To‘ldiruvchi",
        "Hol"
      ],
      "correctAnswer": 3,
      "hint": "Harakatning bajarilish tarzi, o‘rni, payti yoki sababini bildiruvchi bo‘lak.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-060",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Harakatning bajarilish tarzi, o‘rni, payti yoki sababini bildiruvchi bo‘lak.",
      "options": [
        "Olmosh",
        "Hol",
        "Paronim",
        "Aniqlovchi"
      ],
      "correctAnswer": 1,
      "hint": "Harakatning bajarilish tarzi, o‘rni, payti yoki sababini bildiruvchi bo‘lak.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-061",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Shakli har xil, ma’nosi bir-biriga yaqin so‘zlar. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Aniqlovchi",
        "Sinonim",
        "Olmosh",
        "Paronim"
      ],
      "correctAnswer": 1,
      "hint": "Shakli har xil, ma’nosi bir-biriga yaqin so‘zlar.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-062",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Shakli har xil, ma’nosi bir-biriga yaqin so‘zlar. Qaysi atama nazarda tutilgan?",
      "options": [
        "Son",
        "Omonim",
        "Sinonim",
        "Bog‘lovchi"
      ],
      "correctAnswer": 2,
      "hint": "Shakli har xil, ma’nosi bir-biriga yaqin so‘zlar.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-063",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Shakli har xil, ma’nosi bir-biriga yaqin so‘zlar.",
      "options": [
        "Sifat",
        "Kesim",
        "Ko‘makchi",
        "Sinonim"
      ],
      "correctAnswer": 3,
      "hint": "Shakli har xil, ma’nosi bir-biriga yaqin so‘zlar.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-064",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Shakli har xil, ma’nosi bir-biriga yaqin so‘zlar.",
      "options": [
        "Sinonim",
        "Ravish",
        "Antonim",
        "Ega"
      ],
      "correctAnswer": 0,
      "hint": "Shakli har xil, ma’nosi bir-biriga yaqin so‘zlar.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-065",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ma’nosi o‘zaro zid bo‘lgan so‘zlar. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ravish",
        "Ega",
        "Sinonim",
        "Antonim"
      ],
      "correctAnswer": 3,
      "hint": "Ma’nosi o‘zaro zid bo‘lgan so‘zlar.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-066",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Ma’nosi o‘zaro zid bo‘lgan so‘zlar. Qaysi atama nazarda tutilgan?",
      "options": [
        "Undov so‘z",
        "Antonim",
        "Hol",
        "Ot"
      ],
      "correctAnswer": 1,
      "hint": "Ma’nosi o‘zaro zid bo‘lgan so‘zlar.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-067",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Ma’nosi o‘zaro zid bo‘lgan so‘zlar.",
      "options": [
        "Morfema",
        "Fe’l",
        "Antonim",
        "To‘ldiruvchi"
      ],
      "correctAnswer": 2,
      "hint": "Ma’nosi o‘zaro zid bo‘lgan so‘zlar.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-068",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Ma’nosi o‘zaro zid bo‘lgan so‘zlar.",
      "options": [
        "Olmosh",
        "Yuklama",
        "Antonim",
        "Paronim"
      ],
      "correctAnswer": 2,
      "hint": "Ma’nosi o‘zaro zid bo‘lgan so‘zlar.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-069",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Shakli bir xil, ma’nolari har xil bo‘lgan so‘zlar. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Yuklama",
        "Paronim",
        "Omonim",
        "Olmosh"
      ],
      "correctAnswer": 2,
      "hint": "Shakli bir xil, ma’nolari har xil bo‘lgan so‘zlar.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-070",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Shakli bir xil, ma’nolari har xil bo‘lgan so‘zlar. Qaysi atama nazarda tutilgan?",
      "options": [
        "Son",
        "Aniqlovchi",
        "Omonim",
        "Bog‘lovchi"
      ],
      "correctAnswer": 2,
      "hint": "Shakli bir xil, ma’nolari har xil bo‘lgan so‘zlar.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-071",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Shakli bir xil, ma’nolari har xil bo‘lgan so‘zlar.",
      "options": [
        "Kesim",
        "Antonim",
        "Omonim",
        "Ko‘makchi"
      ],
      "correctAnswer": 2,
      "hint": "Shakli bir xil, ma’nolari har xil bo‘lgan so‘zlar.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-072",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Shakli bir xil, ma’nolari har xil bo‘lgan so‘zlar.",
      "options": [
        "Ega",
        "Sinonim",
        "Omonim",
        "Sifat"
      ],
      "correctAnswer": 2,
      "hint": "Shakli bir xil, ma’nolari har xil bo‘lgan so‘zlar.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-073",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Talaffuzi yaqin, ammo ma’nosi boshqa-boshqa so‘zlar. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ega",
        "Sifat",
        "Sinonim",
        "Paronim"
      ],
      "correctAnswer": 3,
      "hint": "Talaffuzi yaqin, ammo ma’nosi boshqa-boshqa so‘zlar.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-074",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: Talaffuzi yaqin, ammo ma’nosi boshqa-boshqa so‘zlar. Qaysi atama nazarda tutilgan?",
      "options": [
        "Ot",
        "Hol",
        "Ravish",
        "Paronim"
      ],
      "correctAnswer": 3,
      "hint": "Talaffuzi yaqin, ammo ma’nosi boshqa-boshqa so‘zlar.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-075",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Talaffuzi yaqin, ammo ma’nosi boshqa-boshqa so‘zlar.",
      "options": [
        "Fe’l",
        "Morfema",
        "Paronim",
        "Undov so‘z"
      ],
      "correctAnswer": 2,
      "hint": "Talaffuzi yaqin, ammo ma’nosi boshqa-boshqa so‘zlar.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-076",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — Talaffuzi yaqin, ammo ma’nosi boshqa-boshqa so‘zlar.",
      "options": [
        "Yuklama",
        "To‘ldiruvchi",
        "Olmosh",
        "Paronim"
      ],
      "correctAnswer": 3,
      "hint": "Talaffuzi yaqin, ammo ma’nosi boshqa-boshqa so‘zlar.",
      "difficulty": "mixed"
    },
    {
      "id": "uzbek-077",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "So‘zning ma’noli eng kichik qismi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Olmosh",
        "To‘ldiruvchi",
        "Morfema",
        "Yuklama"
      ],
      "correctAnswer": 2,
      "hint": "So‘zning ma’noli eng kichik qismi.",
      "difficulty": "easy"
    },
    {
      "id": "uzbek-078",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Darslikdagi quyidagi izohni o‘qing: So‘zning ma’noli eng kichik qismi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Morfema",
        "Aniqlovchi",
        "Omonim",
        "Bog‘lovchi"
      ],
      "correctAnswer": 0,
      "hint": "So‘zning ma’noli eng kichik qismi.",
      "difficulty": "medium"
    },
    {
      "id": "uzbek-079",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: So‘zning ma’noli eng kichik qismi.",
      "options": [
        "Son",
        "Antonim",
        "Kesim",
        "Morfema"
      ],
      "correctAnswer": 3,
      "hint": "So‘zning ma’noli eng kichik qismi.",
      "difficulty": "hard"
    },
    {
      "id": "uzbek-080",
      "subjectId": "uzbek",
      "subject": "Ona tili",
      "question": "Ta’rifga mos atamani toping — So‘zning ma’noli eng kichik qismi.",
      "options": [
        "Morfema",
        "Ko‘makchi",
        "Sifat",
        "Sinonim"
      ],
      "correctAnswer": 0,
      "hint": "So‘zning ma’noli eng kichik qismi.",
      "difficulty": "mixed"
    }
  ],
  "law": [
    {
      "id": "law-001",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Davlatning oliy yuridik kuchga ega asosiy qonuni. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Fuqarolik",
        "Aybsizlik prezumpsiyasi",
        "Shartnoma",
        "Konstitutsiya"
      ],
      "correctAnswer": 3,
      "hint": "Davlatning oliy yuridik kuchga ega asosiy qonuni.",
      "difficulty": "easy"
    },
    {
      "id": "law-002",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Davlatning oliy yuridik kuchga ega asosiy qonuni. Qaysi atama nazarda tutilgan?",
      "options": [
        "Mediatsiya",
        "Konstitutsiya",
        "Inson huquqlari",
        "Mahalliy davlat hokimiyati"
      ],
      "correctAnswer": 1,
      "hint": "Davlatning oliy yuridik kuchga ega asosiy qonuni.",
      "difficulty": "medium"
    },
    {
      "id": "law-003",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Davlatning oliy yuridik kuchga ega asosiy qonuni.",
      "options": [
        "Ijro etuvchi hokimiyat",
        "Konstitutsiya",
        "Majburiyat",
        "Ma’muriy huquqbuzarlik"
      ],
      "correctAnswer": 1,
      "hint": "Davlatning oliy yuridik kuchga ega asosiy qonuni.",
      "difficulty": "hard"
    },
    {
      "id": "law-004",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Davlatning oliy yuridik kuchga ega asosiy qonuni.",
      "options": [
        "Qonun ustuvorligi",
        "Konstitutsiya",
        "Huquq",
        "Jinoyat"
      ],
      "correctAnswer": 1,
      "hint": "Davlatning oliy yuridik kuchga ega asosiy qonuni.",
      "difficulty": "mixed"
    },
    {
      "id": "law-005",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Vakolatli davlat organi qabul qiladigan, umummajburiy huquqiy norma. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Huquq",
        "Jinoyat",
        "Qonun ustuvorligi",
        "Qonun"
      ],
      "correctAnswer": 3,
      "hint": "Vakolatli davlat organi qabul qiladigan, umummajburiy huquqiy norma.",
      "difficulty": "easy"
    },
    {
      "id": "law-006",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Vakolatli davlat organi qabul qiladigan, umummajburiy huquqiy norma. Qaysi atama nazarda tutilgan?",
      "options": [
        "Qonun chiqaruvchi hokimiyat",
        "Suverenitet",
        "Konstitutsiya",
        "Qonun"
      ],
      "correctAnswer": 3,
      "hint": "Vakolatli davlat organi qabul qiladigan, umummajburiy huquqiy norma.",
      "difficulty": "medium"
    },
    {
      "id": "law-007",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Vakolatli davlat organi qabul qiladigan, umummajburiy huquqiy norma.",
      "options": [
        "Sud hokimiyati",
        "Qonun",
        "Demokratiya",
        "Mehnat shartnomasi"
      ],
      "correctAnswer": 1,
      "hint": "Vakolatli davlat organi qabul qiladigan, umummajburiy huquqiy norma.",
      "difficulty": "hard"
    },
    {
      "id": "law-008",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Vakolatli davlat organi qabul qiladigan, umummajburiy huquqiy norma.",
      "options": [
        "Qonun",
        "Aybsizlik prezumpsiyasi",
        "Shartnoma",
        "Referendum"
      ],
      "correctAnswer": 0,
      "hint": "Vakolatli davlat organi qabul qiladigan, umummajburiy huquqiy norma.",
      "difficulty": "mixed"
    },
    {
      "id": "law-009",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Davlat tomonidan belgilangan yoki tan olingan umummajburiy qoidalar tizimi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Shartnoma",
        "Huquq",
        "Aybsizlik prezumpsiyasi",
        "Referendum"
      ],
      "correctAnswer": 1,
      "hint": "Davlat tomonidan belgilangan yoki tan olingan umummajburiy qoidalar tizimi.",
      "difficulty": "easy"
    },
    {
      "id": "law-010",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Davlat tomonidan belgilangan yoki tan olingan umummajburiy qoidalar tizimi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Mahalliy davlat hokimiyati",
        "Huquq",
        "Fuqarolik",
        "Mediatsiya"
      ],
      "correctAnswer": 1,
      "hint": "Davlat tomonidan belgilangan yoki tan olingan umummajburiy qoidalar tizimi.",
      "difficulty": "medium"
    },
    {
      "id": "law-011",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Davlat tomonidan belgilangan yoki tan olingan umummajburiy qoidalar tizimi.",
      "options": [
        "Majburiyat",
        "Huquq",
        "Inson huquqlari",
        "Ma’muriy huquqbuzarlik"
      ],
      "correctAnswer": 1,
      "hint": "Davlat tomonidan belgilangan yoki tan olingan umummajburiy qoidalar tizimi.",
      "difficulty": "hard"
    },
    {
      "id": "law-012",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Davlat tomonidan belgilangan yoki tan olingan umummajburiy qoidalar tizimi.",
      "options": [
        "Qonun",
        "Huquq",
        "Qonun ustuvorligi",
        "Ijro etuvchi hokimiyat"
      ],
      "correctAnswer": 1,
      "hint": "Davlat tomonidan belgilangan yoki tan olingan umummajburiy qoidalar tizimi.",
      "difficulty": "mixed"
    },
    {
      "id": "law-013",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Shaxs bajarishi lozim bo‘lgan qonuniy xatti-harakat yoki burch. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Majburiyat",
        "Qonun ustuvorligi",
        "Qonun",
        "Ijro etuvchi hokimiyat"
      ],
      "correctAnswer": 0,
      "hint": "Shaxs bajarishi lozim bo‘lgan qonuniy xatti-harakat yoki burch.",
      "difficulty": "easy"
    },
    {
      "id": "law-014",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Shaxs bajarishi lozim bo‘lgan qonuniy xatti-harakat yoki burch. Qaysi atama nazarda tutilgan?",
      "options": [
        "Jinoyat",
        "Qonun chiqaruvchi hokimiyat",
        "Suverenitet",
        "Majburiyat"
      ],
      "correctAnswer": 3,
      "hint": "Shaxs bajarishi lozim bo‘lgan qonuniy xatti-harakat yoki burch.",
      "difficulty": "medium"
    },
    {
      "id": "law-015",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Shaxs bajarishi lozim bo‘lgan qonuniy xatti-harakat yoki burch.",
      "options": [
        "Majburiyat",
        "Mehnat shartnomasi",
        "Konstitutsiya",
        "Sud hokimiyati"
      ],
      "correctAnswer": 0,
      "hint": "Shaxs bajarishi lozim bo‘lgan qonuniy xatti-harakat yoki burch.",
      "difficulty": "hard"
    },
    {
      "id": "law-016",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Shaxs bajarishi lozim bo‘lgan qonuniy xatti-harakat yoki burch.",
      "options": [
        "Shartnoma",
        "Majburiyat",
        "Demokratiya",
        "Referendum"
      ],
      "correctAnswer": 1,
      "hint": "Shaxs bajarishi lozim bo‘lgan qonuniy xatti-harakat yoki burch.",
      "difficulty": "mixed"
    },
    {
      "id": "law-017",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Shaxs va davlat o‘rtasidagi barqaror huquqiy aloqa. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Referendum",
        "Shartnoma",
        "Demokratiya",
        "Fuqarolik"
      ],
      "correctAnswer": 3,
      "hint": "Shaxs va davlat o‘rtasidagi barqaror huquqiy aloqa.",
      "difficulty": "easy"
    },
    {
      "id": "law-018",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Shaxs va davlat o‘rtasidagi barqaror huquqiy aloqa. Qaysi atama nazarda tutilgan?",
      "options": [
        "Fuqarolik",
        "Mediatsiya",
        "Majburiyat",
        "Aybsizlik prezumpsiyasi"
      ],
      "correctAnswer": 0,
      "hint": "Shaxs va davlat o‘rtasidagi barqaror huquqiy aloqa.",
      "difficulty": "medium"
    },
    {
      "id": "law-019",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Shaxs va davlat o‘rtasidagi barqaror huquqiy aloqa.",
      "options": [
        "Mahalliy davlat hokimiyati",
        "Inson huquqlari",
        "Fuqarolik",
        "Huquq"
      ],
      "correctAnswer": 2,
      "hint": "Shaxs va davlat o‘rtasidagi barqaror huquqiy aloqa.",
      "difficulty": "hard"
    },
    {
      "id": "law-020",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Shaxs va davlat o‘rtasidagi barqaror huquqiy aloqa.",
      "options": [
        "Qonun ustuvorligi",
        "Ijro etuvchi hokimiyat",
        "Fuqarolik",
        "Ma’muriy huquqbuzarlik"
      ],
      "correctAnswer": 2,
      "hint": "Shaxs va davlat o‘rtasidagi barqaror huquqiy aloqa.",
      "difficulty": "mixed"
    },
    {
      "id": "law-021",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Xalq davlat hokimiyatining manbai bo‘lgan boshqaruv tamoyili. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Ma’muriy huquqbuzarlik",
        "Qonun ustuvorligi",
        "Ijro etuvchi hokimiyat",
        "Demokratiya"
      ],
      "correctAnswer": 3,
      "hint": "Xalq davlat hokimiyatining manbai bo‘lgan boshqaruv tamoyili.",
      "difficulty": "easy"
    },
    {
      "id": "law-022",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Xalq davlat hokimiyatining manbai bo‘lgan boshqaruv tamoyili. Qaysi atama nazarda tutilgan?",
      "options": [
        "Qonun chiqaruvchi hokimiyat",
        "Demokratiya",
        "Qonun",
        "Jinoyat"
      ],
      "correctAnswer": 1,
      "hint": "Xalq davlat hokimiyatining manbai bo‘lgan boshqaruv tamoyili.",
      "difficulty": "medium"
    },
    {
      "id": "law-023",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Xalq davlat hokimiyatining manbai bo‘lgan boshqaruv tamoyili.",
      "options": [
        "Konstitutsiya",
        "Demokratiya",
        "Suverenitet",
        "Mehnat shartnomasi"
      ],
      "correctAnswer": 1,
      "hint": "Xalq davlat hokimiyatining manbai bo‘lgan boshqaruv tamoyili.",
      "difficulty": "hard"
    },
    {
      "id": "law-024",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Xalq davlat hokimiyatining manbai bo‘lgan boshqaruv tamoyili.",
      "options": [
        "Referendum",
        "Demokratiya",
        "Fuqarolik",
        "Sud hokimiyati"
      ],
      "correctAnswer": 1,
      "hint": "Xalq davlat hokimiyatining manbai bo‘lgan boshqaruv tamoyili.",
      "difficulty": "mixed"
    },
    {
      "id": "law-025",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Davlatning ichki va tashqi siyosatda mustaqilligi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Referendum",
        "Fuqarolik",
        "Suverenitet",
        "Sud hokimiyati"
      ],
      "correctAnswer": 2,
      "hint": "Davlatning ichki va tashqi siyosatda mustaqilligi.",
      "difficulty": "easy"
    },
    {
      "id": "law-026",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Davlatning ichki va tashqi siyosatda mustaqilligi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Aybsizlik prezumpsiyasi",
        "Majburiyat",
        "Shartnoma",
        "Suverenitet"
      ],
      "correctAnswer": 3,
      "hint": "Davlatning ichki va tashqi siyosatda mustaqilligi.",
      "difficulty": "medium"
    },
    {
      "id": "law-027",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Davlatning ichki va tashqi siyosatda mustaqilligi.",
      "options": [
        "Mahalliy davlat hokimiyati",
        "Suverenitet",
        "Inson huquqlari",
        "Mediatsiya"
      ],
      "correctAnswer": 1,
      "hint": "Davlatning ichki va tashqi siyosatda mustaqilligi.",
      "difficulty": "hard"
    },
    {
      "id": "law-028",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Davlatning ichki va tashqi siyosatda mustaqilligi.",
      "options": [
        "Ma’muriy huquqbuzarlik",
        "Huquq",
        "Ijro etuvchi hokimiyat",
        "Suverenitet"
      ],
      "correctAnswer": 3,
      "hint": "Davlatning ichki va tashqi siyosatda mustaqilligi.",
      "difficulty": "mixed"
    },
    {
      "id": "law-029",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Barcha shaxs va davlat organlari qonunga rioya qilishi tamoyili. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Huquq",
        "Ijro etuvchi hokimiyat",
        "Qonun ustuvorligi",
        "Ma’muriy huquqbuzarlik"
      ],
      "correctAnswer": 2,
      "hint": "Barcha shaxs va davlat organlari qonunga rioya qilishi tamoyili.",
      "difficulty": "easy"
    },
    {
      "id": "law-030",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Barcha shaxs va davlat organlari qonunga rioya qilishi tamoyili. Qaysi atama nazarda tutilgan?",
      "options": [
        "Jinoyat",
        "Qonun",
        "Qonun ustuvorligi",
        "Suverenitet"
      ],
      "correctAnswer": 2,
      "hint": "Barcha shaxs va davlat organlari qonunga rioya qilishi tamoyili.",
      "difficulty": "medium"
    },
    {
      "id": "law-031",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Barcha shaxs va davlat organlari qonunga rioya qilishi tamoyili.",
      "options": [
        "Demokratiya",
        "Qonun chiqaruvchi hokimiyat",
        "Qonun ustuvorligi",
        "Konstitutsiya"
      ],
      "correctAnswer": 2,
      "hint": "Barcha shaxs va davlat organlari qonunga rioya qilishi tamoyili.",
      "difficulty": "hard"
    },
    {
      "id": "law-032",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Barcha shaxs va davlat organlari qonunga rioya qilishi tamoyili.",
      "options": [
        "Mehnat shartnomasi",
        "Qonun ustuvorligi",
        "Fuqarolik",
        "Sud hokimiyati"
      ],
      "correctAnswer": 1,
      "hint": "Barcha shaxs va davlat organlari qonunga rioya qilishi tamoyili.",
      "difficulty": "mixed"
    },
    {
      "id": "law-033",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Har bir insonga tug‘ilganidan tegishli asosiy huquq va erkinliklar. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Mehnat shartnomasi",
        "Inson huquqlari",
        "Fuqarolik",
        "Sud hokimiyati"
      ],
      "correctAnswer": 1,
      "hint": "Har bir insonga tug‘ilganidan tegishli asosiy huquq va erkinliklar.",
      "difficulty": "easy"
    },
    {
      "id": "law-034",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Har bir insonga tug‘ilganidan tegishli asosiy huquq va erkinliklar. Qaysi atama nazarda tutilgan?",
      "options": [
        "Referendum",
        "Inson huquqlari",
        "Shartnoma",
        "Aybsizlik prezumpsiyasi"
      ],
      "correctAnswer": 1,
      "hint": "Har bir insonga tug‘ilganidan tegishli asosiy huquq va erkinliklar.",
      "difficulty": "medium"
    },
    {
      "id": "law-035",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Har bir insonga tug‘ilganidan tegishli asosiy huquq va erkinliklar.",
      "options": [
        "Mediatsiya",
        "Mahalliy davlat hokimiyati",
        "Inson huquqlari",
        "Majburiyat"
      ],
      "correctAnswer": 2,
      "hint": "Har bir insonga tug‘ilganidan tegishli asosiy huquq va erkinliklar.",
      "difficulty": "hard"
    },
    {
      "id": "law-036",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Har bir insonga tug‘ilganidan tegishli asosiy huquq va erkinliklar.",
      "options": [
        "Qonun ustuvorligi",
        "Inson huquqlari",
        "Ma’muriy huquqbuzarlik",
        "Huquq"
      ],
      "correctAnswer": 1,
      "hint": "Har bir insonga tug‘ilganidan tegishli asosiy huquq va erkinliklar.",
      "difficulty": "mixed"
    },
    {
      "id": "law-037",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Aybi qonuniy tartibda isbotlanmaguncha shaxs aybsiz hisoblanishi tamoyili. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Huquq",
        "Aybsizlik prezumpsiyasi",
        "Ma’muriy huquqbuzarlik",
        "Qonun ustuvorligi"
      ],
      "correctAnswer": 1,
      "hint": "Aybi qonuniy tartibda isbotlanmaguncha shaxs aybsiz hisoblanishi tamoyili.",
      "difficulty": "easy"
    },
    {
      "id": "law-038",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Aybi qonuniy tartibda isbotlanmaguncha shaxs aybsiz hisoblanishi tamoyili. Qaysi atama nazarda tutilgan?",
      "options": [
        "Qonun",
        "Suverenitet",
        "Aybsizlik prezumpsiyasi",
        "Ijro etuvchi hokimiyat"
      ],
      "correctAnswer": 2,
      "hint": "Aybi qonuniy tartibda isbotlanmaguncha shaxs aybsiz hisoblanishi tamoyili.",
      "difficulty": "medium"
    },
    {
      "id": "law-039",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Aybi qonuniy tartibda isbotlanmaguncha shaxs aybsiz hisoblanishi tamoyili.",
      "options": [
        "Aybsizlik prezumpsiyasi",
        "Qonun chiqaruvchi hokimiyat",
        "Jinoyat",
        "Demokratiya"
      ],
      "correctAnswer": 0,
      "hint": "Aybi qonuniy tartibda isbotlanmaguncha shaxs aybsiz hisoblanishi tamoyili.",
      "difficulty": "hard"
    },
    {
      "id": "law-040",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Aybi qonuniy tartibda isbotlanmaguncha shaxs aybsiz hisoblanishi tamoyili.",
      "options": [
        "Mehnat shartnomasi",
        "Sud hokimiyati",
        "Konstitutsiya",
        "Aybsizlik prezumpsiyasi"
      ],
      "correctAnswer": 3,
      "hint": "Aybi qonuniy tartibda isbotlanmaguncha shaxs aybsiz hisoblanishi tamoyili.",
      "difficulty": "mixed"
    },
    {
      "id": "law-041",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Odil sudlovni amalga oshiruvchi mustaqil davlat hokimiyati tarmog‘i. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Sud hokimiyati",
        "Konstitutsiya",
        "Mehnat shartnomasi",
        "Aybsizlik prezumpsiyasi"
      ],
      "correctAnswer": 0,
      "hint": "Odil sudlovni amalga oshiruvchi mustaqil davlat hokimiyati tarmog‘i.",
      "difficulty": "easy"
    },
    {
      "id": "law-042",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Odil sudlovni amalga oshiruvchi mustaqil davlat hokimiyati tarmog‘i. Qaysi atama nazarda tutilgan?",
      "options": [
        "Fuqarolik",
        "Referendum",
        "Shartnoma",
        "Sud hokimiyati"
      ],
      "correctAnswer": 3,
      "hint": "Odil sudlovni amalga oshiruvchi mustaqil davlat hokimiyati tarmog‘i.",
      "difficulty": "medium"
    },
    {
      "id": "law-043",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Odil sudlovni amalga oshiruvchi mustaqil davlat hokimiyati tarmog‘i.",
      "options": [
        "Inson huquqlari",
        "Sud hokimiyati",
        "Mediatsiya",
        "Majburiyat"
      ],
      "correctAnswer": 1,
      "hint": "Odil sudlovni amalga oshiruvchi mustaqil davlat hokimiyati tarmog‘i.",
      "difficulty": "hard"
    },
    {
      "id": "law-044",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Odil sudlovni amalga oshiruvchi mustaqil davlat hokimiyati tarmog‘i.",
      "options": [
        "Mahalliy davlat hokimiyati",
        "Huquq",
        "Qonun ustuvorligi",
        "Sud hokimiyati"
      ],
      "correctAnswer": 3,
      "hint": "Odil sudlovni amalga oshiruvchi mustaqil davlat hokimiyati tarmog‘i.",
      "difficulty": "mixed"
    },
    {
      "id": "law-045",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qonunlarni qabul qilish vakolatiga ega hokimiyat tarmog‘i. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Mahalliy davlat hokimiyati",
        "Qonun ustuvorligi",
        "Huquq",
        "Qonun chiqaruvchi hokimiyat"
      ],
      "correctAnswer": 3,
      "hint": "Qonunlarni qabul qilish vakolatiga ega hokimiyat tarmog‘i.",
      "difficulty": "easy"
    },
    {
      "id": "law-046",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Qonunlarni qabul qilish vakolatiga ega hokimiyat tarmog‘i. Qaysi atama nazarda tutilgan?",
      "options": [
        "Ijro etuvchi hokimiyat",
        "Qonun chiqaruvchi hokimiyat",
        "Suverenitet",
        "Ma’muriy huquqbuzarlik"
      ],
      "correctAnswer": 1,
      "hint": "Qonunlarni qabul qilish vakolatiga ega hokimiyat tarmog‘i.",
      "difficulty": "medium"
    },
    {
      "id": "law-047",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Qonunlarni qabul qilish vakolatiga ega hokimiyat tarmog‘i.",
      "options": [
        "Sud hokimiyati",
        "Qonun chiqaruvchi hokimiyat",
        "Qonun",
        "Jinoyat"
      ],
      "correctAnswer": 1,
      "hint": "Qonunlarni qabul qilish vakolatiga ega hokimiyat tarmog‘i.",
      "difficulty": "hard"
    },
    {
      "id": "law-048",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Qonunlarni qabul qilish vakolatiga ega hokimiyat tarmog‘i.",
      "options": [
        "Demokratiya",
        "Qonun chiqaruvchi hokimiyat",
        "Konstitutsiya",
        "Mehnat shartnomasi"
      ],
      "correctAnswer": 1,
      "hint": "Qonunlarni qabul qilish vakolatiga ega hokimiyat tarmog‘i.",
      "difficulty": "mixed"
    },
    {
      "id": "law-049",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qonunlar va davlat siyosati ijrosini ta’minlaydigan hokimiyat tarmog‘i. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Mehnat shartnomasi",
        "Ijro etuvchi hokimiyat",
        "Konstitutsiya",
        "Demokratiya"
      ],
      "correctAnswer": 1,
      "hint": "Qonunlar va davlat siyosati ijrosini ta’minlaydigan hokimiyat tarmog‘i.",
      "difficulty": "easy"
    },
    {
      "id": "law-050",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Qonunlar va davlat siyosati ijrosini ta’minlaydigan hokimiyat tarmog‘i. Qaysi atama nazarda tutilgan?",
      "options": [
        "Ijro etuvchi hokimiyat",
        "Referendum",
        "Fuqarolik",
        "Aybsizlik prezumpsiyasi"
      ],
      "correctAnswer": 0,
      "hint": "Qonunlar va davlat siyosati ijrosini ta’minlaydigan hokimiyat tarmog‘i.",
      "difficulty": "medium"
    },
    {
      "id": "law-051",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Qonunlar va davlat siyosati ijrosini ta’minlaydigan hokimiyat tarmog‘i.",
      "options": [
        "Inson huquqlari",
        "Shartnoma",
        "Ijro etuvchi hokimiyat",
        "Majburiyat"
      ],
      "correctAnswer": 2,
      "hint": "Qonunlar va davlat siyosati ijrosini ta’minlaydigan hokimiyat tarmog‘i.",
      "difficulty": "hard"
    },
    {
      "id": "law-052",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Qonunlar va davlat siyosati ijrosini ta’minlaydigan hokimiyat tarmog‘i.",
      "options": [
        "Ijro etuvchi hokimiyat",
        "Mediatsiya",
        "Mahalliy davlat hokimiyati",
        "Qonun ustuvorligi"
      ],
      "correctAnswer": 0,
      "hint": "Qonunlar va davlat siyosati ijrosini ta’minlaydigan hokimiyat tarmog‘i.",
      "difficulty": "mixed"
    },
    {
      "id": "law-053",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Viloyat, tuman va shaharlarda davlat boshqaruvini amalga oshiruvchi organlar tizimi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Mediatsiya",
        "Ijro etuvchi hokimiyat",
        "Qonun ustuvorligi",
        "Mahalliy davlat hokimiyati"
      ],
      "correctAnswer": 3,
      "hint": "Viloyat, tuman va shaharlarda davlat boshqaruvini amalga oshiruvchi organlar tizimi.",
      "difficulty": "easy"
    },
    {
      "id": "law-054",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Viloyat, tuman va shaharlarda davlat boshqaruvini amalga oshiruvchi organlar tizimi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Qonun chiqaruvchi hokimiyat",
        "Huquq",
        "Ma’muriy huquqbuzarlik",
        "Mahalliy davlat hokimiyati"
      ],
      "correctAnswer": 3,
      "hint": "Viloyat, tuman va shaharlarda davlat boshqaruvini amalga oshiruvchi organlar tizimi.",
      "difficulty": "medium"
    },
    {
      "id": "law-055",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Viloyat, tuman va shaharlarda davlat boshqaruvini amalga oshiruvchi organlar tizimi.",
      "options": [
        "Qonun",
        "Mahalliy davlat hokimiyati",
        "Suverenitet",
        "Jinoyat"
      ],
      "correctAnswer": 1,
      "hint": "Viloyat, tuman va shaharlarda davlat boshqaruvini amalga oshiruvchi organlar tizimi.",
      "difficulty": "hard"
    },
    {
      "id": "law-056",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Viloyat, tuman va shaharlarda davlat boshqaruvini amalga oshiruvchi organlar tizimi.",
      "options": [
        "Demokratiya",
        "Konstitutsiya",
        "Sud hokimiyati",
        "Mahalliy davlat hokimiyati"
      ],
      "correctAnswer": 3,
      "hint": "Viloyat, tuman va shaharlarda davlat boshqaruvini amalga oshiruvchi organlar tizimi.",
      "difficulty": "mixed"
    },
    {
      "id": "law-057",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Tomonlarning huquq va majburiyatlarini belgilovchi kelishuv. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Demokratiya",
        "Shartnoma",
        "Konstitutsiya",
        "Sud hokimiyati"
      ],
      "correctAnswer": 1,
      "hint": "Tomonlarning huquq va majburiyatlarini belgilovchi kelishuv.",
      "difficulty": "easy"
    },
    {
      "id": "law-058",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Tomonlarning huquq va majburiyatlarini belgilovchi kelishuv. Qaysi atama nazarda tutilgan?",
      "options": [
        "Shartnoma",
        "Mehnat shartnomasi",
        "Fuqarolik",
        "Aybsizlik prezumpsiyasi"
      ],
      "correctAnswer": 0,
      "hint": "Tomonlarning huquq va majburiyatlarini belgilovchi kelishuv.",
      "difficulty": "medium"
    },
    {
      "id": "law-059",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Tomonlarning huquq va majburiyatlarini belgilovchi kelishuv.",
      "options": [
        "Shartnoma",
        "Referendum",
        "Inson huquqlari",
        "Mahalliy davlat hokimiyati"
      ],
      "correctAnswer": 0,
      "hint": "Tomonlarning huquq va majburiyatlarini belgilovchi kelishuv.",
      "difficulty": "hard"
    },
    {
      "id": "law-060",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Tomonlarning huquq va majburiyatlarini belgilovchi kelishuv.",
      "options": [
        "Mediatsiya",
        "Ijro etuvchi hokimiyat",
        "Shartnoma",
        "Majburiyat"
      ],
      "correctAnswer": 2,
      "hint": "Tomonlarning huquq va majburiyatlarini belgilovchi kelishuv.",
      "difficulty": "mixed"
    },
    {
      "id": "law-061",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Xodim va ish beruvchi o‘rtasidagi mehnat munosabatlarini belgilovchi kelishuv. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Mehnat shartnomasi",
        "Majburiyat",
        "Mediatsiya",
        "Ijro etuvchi hokimiyat"
      ],
      "correctAnswer": 0,
      "hint": "Xodim va ish beruvchi o‘rtasidagi mehnat munosabatlarini belgilovchi kelishuv.",
      "difficulty": "easy"
    },
    {
      "id": "law-062",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Xodim va ish beruvchi o‘rtasidagi mehnat munosabatlarini belgilovchi kelishuv. Qaysi atama nazarda tutilgan?",
      "options": [
        "Qonun ustuvorligi",
        "Huquq",
        "Ma’muriy huquqbuzarlik",
        "Mehnat shartnomasi"
      ],
      "correctAnswer": 3,
      "hint": "Xodim va ish beruvchi o‘rtasidagi mehnat munosabatlarini belgilovchi kelishuv.",
      "difficulty": "medium"
    },
    {
      "id": "law-063",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Xodim va ish beruvchi o‘rtasidagi mehnat munosabatlarini belgilovchi kelishuv.",
      "options": [
        "Suverenitet",
        "Mehnat shartnomasi",
        "Qonun",
        "Qonun chiqaruvchi hokimiyat"
      ],
      "correctAnswer": 1,
      "hint": "Xodim va ish beruvchi o‘rtasidagi mehnat munosabatlarini belgilovchi kelishuv.",
      "difficulty": "hard"
    },
    {
      "id": "law-064",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Xodim va ish beruvchi o‘rtasidagi mehnat munosabatlarini belgilovchi kelishuv.",
      "options": [
        "Demokratiya",
        "Mehnat shartnomasi",
        "Jinoyat",
        "Sud hokimiyati"
      ],
      "correctAnswer": 1,
      "hint": "Xodim va ish beruvchi o‘rtasidagi mehnat munosabatlarini belgilovchi kelishuv.",
      "difficulty": "mixed"
    },
    {
      "id": "law-065",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Jinoyat qonunida taqiqlangan, aybli va ijtimoiy xavfli qilmish. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Jinoyat",
        "Sud hokimiyati",
        "Demokratiya",
        "Mehnat shartnomasi"
      ],
      "correctAnswer": 0,
      "hint": "Jinoyat qonunida taqiqlangan, aybli va ijtimoiy xavfli qilmish.",
      "difficulty": "easy"
    },
    {
      "id": "law-066",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Jinoyat qonunida taqiqlangan, aybli va ijtimoiy xavfli qilmish. Qaysi atama nazarda tutilgan?",
      "options": [
        "Konstitutsiya",
        "Jinoyat",
        "Shartnoma",
        "Aybsizlik prezumpsiyasi"
      ],
      "correctAnswer": 1,
      "hint": "Jinoyat qonunida taqiqlangan, aybli va ijtimoiy xavfli qilmish.",
      "difficulty": "medium"
    },
    {
      "id": "law-067",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Jinoyat qonunida taqiqlangan, aybli va ijtimoiy xavfli qilmish.",
      "options": [
        "Mahalliy davlat hokimiyati",
        "Fuqarolik",
        "Jinoyat",
        "Referendum"
      ],
      "correctAnswer": 2,
      "hint": "Jinoyat qonunida taqiqlangan, aybli va ijtimoiy xavfli qilmish.",
      "difficulty": "hard"
    },
    {
      "id": "law-068",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Jinoyat qonunida taqiqlangan, aybli va ijtimoiy xavfli qilmish.",
      "options": [
        "Mediatsiya",
        "Inson huquqlari",
        "Majburiyat",
        "Jinoyat"
      ],
      "correctAnswer": 3,
      "hint": "Jinoyat qonunida taqiqlangan, aybli va ijtimoiy xavfli qilmish.",
      "difficulty": "mixed"
    },
    {
      "id": "law-069",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qonunchilikda ma’muriy javobgarlik belgilangan g‘ayrihuquqiy qilmish. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Inson huquqlari",
        "Ma’muriy huquqbuzarlik",
        "Majburiyat",
        "Mediatsiya"
      ],
      "correctAnswer": 1,
      "hint": "Qonunchilikda ma’muriy javobgarlik belgilangan g‘ayrihuquqiy qilmish.",
      "difficulty": "easy"
    },
    {
      "id": "law-070",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Qonunchilikda ma’muriy javobgarlik belgilangan g‘ayrihuquqiy qilmish. Qaysi atama nazarda tutilgan?",
      "options": [
        "Huquq",
        "Qonun ustuvorligi",
        "Ijro etuvchi hokimiyat",
        "Ma’muriy huquqbuzarlik"
      ],
      "correctAnswer": 3,
      "hint": "Qonunchilikda ma’muriy javobgarlik belgilangan g‘ayrihuquqiy qilmish.",
      "difficulty": "medium"
    },
    {
      "id": "law-071",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Qonunchilikda ma’muriy javobgarlik belgilangan g‘ayrihuquqiy qilmish.",
      "options": [
        "Suverenitet",
        "Jinoyat",
        "Ma’muriy huquqbuzarlik",
        "Qonun chiqaruvchi hokimiyat"
      ],
      "correctAnswer": 2,
      "hint": "Qonunchilikda ma’muriy javobgarlik belgilangan g‘ayrihuquqiy qilmish.",
      "difficulty": "hard"
    },
    {
      "id": "law-072",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Qonunchilikda ma’muriy javobgarlik belgilangan g‘ayrihuquqiy qilmish.",
      "options": [
        "Qonun",
        "Ma’muriy huquqbuzarlik",
        "Sud hokimiyati",
        "Mehnat shartnomasi"
      ],
      "correctAnswer": 1,
      "hint": "Qonunchilikda ma’muriy javobgarlik belgilangan g‘ayrihuquqiy qilmish.",
      "difficulty": "mixed"
    },
    {
      "id": "law-073",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Nizoni betaraf vositachi ko‘magida kelishuv orqali hal etish usuli. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Sud hokimiyati",
        "Qonun",
        "Mehnat shartnomasi",
        "Mediatsiya"
      ],
      "correctAnswer": 3,
      "hint": "Nizoni betaraf vositachi ko‘magida kelishuv orqali hal etish usuli.",
      "difficulty": "easy"
    },
    {
      "id": "law-074",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Nizoni betaraf vositachi ko‘magida kelishuv orqali hal etish usuli. Qaysi atama nazarda tutilgan?",
      "options": [
        "Shartnoma",
        "Mediatsiya",
        "Demokratiya",
        "Konstitutsiya"
      ],
      "correctAnswer": 1,
      "hint": "Nizoni betaraf vositachi ko‘magida kelishuv orqali hal etish usuli.",
      "difficulty": "medium"
    },
    {
      "id": "law-075",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Nizoni betaraf vositachi ko‘magida kelishuv orqali hal etish usuli.",
      "options": [
        "Referendum",
        "Fuqarolik",
        "Mediatsiya",
        "Aybsizlik prezumpsiyasi"
      ],
      "correctAnswer": 2,
      "hint": "Nizoni betaraf vositachi ko‘magida kelishuv orqali hal etish usuli.",
      "difficulty": "hard"
    },
    {
      "id": "law-076",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Nizoni betaraf vositachi ko‘magida kelishuv orqali hal etish usuli.",
      "options": [
        "Mahalliy davlat hokimiyati",
        "Mediatsiya",
        "Majburiyat",
        "Inson huquqlari"
      ],
      "correctAnswer": 1,
      "hint": "Nizoni betaraf vositachi ko‘magida kelishuv orqali hal etish usuli.",
      "difficulty": "mixed"
    },
    {
      "id": "law-077",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Muhim davlat yoki jamiyat masalasi bo‘yicha xalq ovoz berishi. Bu ta’rif qaysi tushunchaga tegishli?",
      "options": [
        "Mahalliy davlat hokimiyati",
        "Inson huquqlari",
        "Majburiyat",
        "Referendum"
      ],
      "correctAnswer": 3,
      "hint": "Muhim davlat yoki jamiyat masalasi bo‘yicha xalq ovoz berishi.",
      "difficulty": "easy"
    },
    {
      "id": "law-078",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Darslikdagi quyidagi izohni o‘qing: Muhim davlat yoki jamiyat masalasi bo‘yicha xalq ovoz berishi. Qaysi atama nazarda tutilgan?",
      "options": [
        "Ijro etuvchi hokimiyat",
        "Qonun ustuvorligi",
        "Ma’muriy huquqbuzarlik",
        "Referendum"
      ],
      "correctAnswer": 3,
      "hint": "Muhim davlat yoki jamiyat masalasi bo‘yicha xalq ovoz berishi.",
      "difficulty": "medium"
    },
    {
      "id": "law-079",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Qaysi tushuncha aynan mana shu mazmunni anglatadi: Muhim davlat yoki jamiyat masalasi bo‘yicha xalq ovoz berishi.",
      "options": [
        "Referendum",
        "Qonun chiqaruvchi hokimiyat",
        "Huquq",
        "Jinoyat"
      ],
      "correctAnswer": 0,
      "hint": "Muhim davlat yoki jamiyat masalasi bo‘yicha xalq ovoz berishi.",
      "difficulty": "hard"
    },
    {
      "id": "law-080",
      "subjectId": "law",
      "subject": "Huquq",
      "question": "Ta’rifga mos atamani toping — Muhim davlat yoki jamiyat masalasi bo‘yicha xalq ovoz berishi.",
      "options": [
        "Referendum",
        "Qonun",
        "Suverenitet",
        "Mehnat shartnomasi"
      ],
      "correctAnswer": 0,
      "hint": "Muhim davlat yoki jamiyat masalasi bo‘yicha xalq ovoz berishi.",
      "difficulty": "mixed"
    }
  ]
};

const subjects = Object.entries(questions).map(([id, list]) => ({ id, name: list[0].subject, count: list.length }));
export { questions, subjects };
export default questions;
