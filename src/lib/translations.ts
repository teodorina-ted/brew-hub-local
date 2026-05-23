export type Lang = "ro" | "ru";

export const SITE = {
  name: "BEERLOGA",
  domain: "beerloga.online",
  website: "https://beerloga.online",
  tagline_ro: "Craft Brew · Bere Artizanală",
  tagline_ru: "Craft Brew · Крафтовое Пиво",

  phone: "+373 60 988 829",
  phoneHref: "tel:+37360988829",

  whatsapp: "37360988829", // wa.me number, no +

  email: "info@beerloga.online",
  emailHref: "mailto:info@beerloga.online",

  address_ro: "Strada Alexandru cel Bun 14, MD-3112, Bălți, Moldova",
  address_ru: "ул. Александру чел Бун 14, MD-3112, Бельцы, Молдова",
  addressQuery: "Strada Alexandru cel Bun 14, MD-3112 Bălți, Moldova",

  // Bălți — Strada Alexandru cel Bun 14
  lat: 47.7606,
  lng: 27.9295,
};

export const translations = {
  ro: {
    "nav.about": "Despre",
    "nav.why": "De ce noi",
    "nav.beers": "Beri",
    "nav.gallery": "Galerie",
    "nav.contact": "Contact",
    "nav.book": "Programare",

    "hero.eyebrow": "Taproom · Bălți",
    "hero.title": "Bere artizanală.\nAtmosferă primitoare.",
    "hero.subtitle": "Lemn, alamă și lumină caldă. Locul unde berea bună întâlnește prietenii buni.",
    "hero.cta_book": "Rezervă o masă",
    "hero.cta_call": "Sună acum",

    "about.eyebrow": "Cine suntem",
    "about.title": "Un pub mic. O pasiune mare.",
    "about.body": "BEERLOGA este un taproom independent din Bălți, născut din dragostea pentru bere meșteșugărească. Selectăm cu grijă fiecare butoi, lucrăm cu producători locali și construim un loc în care fiecare seară miroase a hamei și povești bune.",

    "why.eyebrow": "De ce noi",
    "why.title": "Mai mult decât o bere.",
    "why.f1.t": "12 robinete rotative",
    "why.f1.d": "Selecții noi în fiecare săptămână, de la pilsner clasic la stout dens.",
    "why.f2.t": "Platouri cu gustări",
    "why.f2.d": "Brânzeturi, mezeluri și covrigei — perfecte alături de o pintă rece.",
    "why.f3.t": "Atmosferă primitoare",
    "why.f3.d": "Lemn cald, lumină ambientală și muzică bună. Doar vibe.",
    "why.f4.t": "Meciuri pe ecran mare",
    "why.f4.d": "Urmărim meciurile împreună. Ecran mare, bere rece, atmosferă de stadion.",

    "beers.eyebrow": "La robinet",
    "beers.title": "Selecția săptămânii",
    "beers.b1.n": "Bere Blondă",
    "beers.b1.s": "Lager · La halba",
    "beers.b1.d": "Clasică, răcoroasă și ușor de băut. Perfectă pentru orice ocazie.",
    "beers.b2.n": "IPA",
    "beers.b2.s": "India Pale Ale · La halba",
    "beers.b2.d": "Aromată, cu note de citrice și hamei. Pentru cei care vor ceva mai intens.",
    "beers.b3.n": "Bere Brună",
    "beers.b3.s": "Brown Ale · La halba",
    "beers.b3.d": "Bogată, cu note de caramel și malț prăjit. Plină și satisfăcătoare.",
    "beers.b4.n": "Radler",
    "beers.b4.s": "Radler · La halba",
    "beers.b4.d": "Răcoritoare și ușoară, cu aromă de citrice. Ideală pe timp de vară.",

    "gallery.eyebrow": "Atmosferă",
    "gallery.title": "Locul nostru",

    "contact.eyebrow": "Contact & Program",
    "contact.title": "Treci pe la noi",
    "contact.hours": "Program",
    "contact.address": "Adresă",
    "contact.phone": "Telefon",
    "contact.email": "Email",
    "contact.directions": "Deschide în Hartă",
    "contact.h_mon_thu": "Lu–Jo: 16:00 – 00:00",
    "contact.h_fri_sat": "Vi–Sâ: 16:00 – 02:00",
    "contact.h_sun": "Du: 16:00 – 23:00",

    "cta.book": "Programare",
    "cta.call": "Sună",
    "cta.whatsapp": "Scrie-ne pe WhatsApp",
    "cta.touch": "Ia legătura",

    "wa.message": "Salut BEERLOGA! Aș vrea să rezerv o masă.",
    "wa.tooltip": "Chat live pe WhatsApp",

    "footer.rights": "Toate drepturile rezervate.",
    "footer.terms": "Termeni și condiții",
    "footer.privacy": "Politica de confidențialitate",
    "footer.cookies": "Politica cookie",
    "footer.legal": "Informații legale",
    "footer.age": "18+ Consumați responsabil.",
  },
  ru: {
    "nav.about": "О нас",
    "nav.why": "Почему мы",
    "nav.beers": "Пиво",
    "nav.gallery": "Галерея",
    "nav.contact": "Контакты",
    "nav.book": "Бронь",

    "hero.eyebrow": "Taproom · Бельцы",
    "hero.title": "Крафтовое пиво.\nУютная атмосфера.",
    "hero.subtitle": "Дерево, латунь и тёплый свет. Место, где хорошее пиво встречает хороших друзей.",
    "hero.cta_book": "Забронировать стол",
    "hero.cta_call": "Позвонить",

    "about.eyebrow": "Кто мы",
    "about.title": "Маленький паб. Большая страсть.",
    "about.body": "BEERLOGA — независимый taproom в Бельцах, рождённый из любви к крафтовому пиву. Мы тщательно отбираем каждый кег, работаем с локальными пивоварами и создаём место, где каждый вечер пахнет хмелем и хорошими историями.",

    "why.eyebrow": "Почему мы",
    "why.title": "Больше, чем просто пиво.",
    "why.f1.t": "12 ротационных кранов",
    "why.f1.d": "Новые позиции каждую неделю — от классического пилснера до плотного стаута.",
    "why.f2.t": "Закусочные доски",
    "why.f2.d": "Сыры, мясные деликатесы и брецели — идеально к холодной пинте.",
    "why.f3.t": "Уютная атмосфера",
    "why.f3.d": "Тёплое дерево, мягкий свет и хорошая музыка. Только вайб.",
    "why.f4.t": "Матчи на большом экране",
    "why.f4.d": "Смотрим матчи вместе. Большой экран, холодное пиво, атмосфера стадиона.",

    "beers.eyebrow": "На кране",
    "beers.title": "Подборка недели",
    "beers.b1.n": "Светлое пиво",
    "beers.b1.s": "Лагер · В кружке",
    "beers.b1.d": "Классическое, освежающее и лёгкое. Идеально для любого случая.",
    "beers.b2.n": "IPA",
    "beers.b2.s": "India Pale Ale · В кружке",
    "beers.b2.d": "Ароматное, с цитрусовыми нотками и хмелем. Для тех, кто хочет чего-то интенсивного.",
    "beers.b3.n": "Тёмное пиво",
    "beers.b3.s": "Brown Ale · В кружке",
    "beers.b3.d": "Насыщенное, с нотками карамели и жареного солода. Полное и приятное.",
    "beers.b4.n": "Радлер",
    "beers.b4.s": "Radler · В кружке",
    "beers.b4.d": "Освежающий и лёгкий, с цитрусовым ароматом. Идеален летом.",

    "gallery.eyebrow": "Атмосфера",
    "gallery.title": "Наше место",

    "contact.eyebrow": "Контакты и график",
    "contact.title": "Заходи, не стесняйся",
    "contact.hours": "График",
    "contact.address": "Адрес",
    "contact.phone": "Телефон",
    "contact.email": "Email",
    "contact.directions": "Открыть в Картах",
    "contact.h_mon_thu": "Пн–Чт: 16:00 – 00:00",
    "contact.h_fri_sat": "Пт–Сб: 16:00 – 02:00",
    "contact.h_sun": "Вс: 16:00 – 23:00",

    "cta.book": "Бронь",
    "cta.call": "Позвонить",
    "cta.whatsapp": "Написать в WhatsApp",
    "cta.touch": "Связаться",

    "wa.message": "Привет BEERLOGA! Хочу забронировать стол.",
    "wa.tooltip": "Живой чат в WhatsApp",

    "footer.rights": "Все права защищены.",
    "footer.terms": "Условия использования",
    "footer.privacy": "Политика конфиденциальности",
    "footer.cookies": "Политика cookie",
    "footer.legal": "Юридическая информация",
    "footer.age": "18+ Употребляйте ответственно.",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["ro"];