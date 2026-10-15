// Платформы: из этого объекта берутся названия для бейджей
const PLATFORMS = {
    steam: 'Steam',
    gog: 'GOG',
    epic: 'Epic Games'
};

// Каталог игр. hot: true — игра попадает в «Горячие предложения» на главной
const GAMES = [
    { id: 1,  title: 'Neon Drift',      platform: 'gog',   genre: 'Гонки',       year: 2024, price: 1.99,  cover: 'img/neon drift.png',      hot: true },
    { id: 2,  title: 'Elden Ring',      platform: 'steam', genre: 'RPG',         year: 2022, price: 59.99, cover: 'img/elden ring.webp',      hot: true },
    { id: 3,  title: 'Star Vault',      platform: 'epic',  genre: 'Стратегия',   year: 2022, price: 24.99,  cover: 'img/star vault.jpg',      hot: true },
    { id: 4,  title: 'Arc Raiders',     platform: 'steam', genre: 'Экшен',       year: 2025, price: 39.99,  cover: 'img/arc raiders.jpg',     hot: true },
    { id: 5,  title: 'Nebula Trader',   platform: 'steam', genre: 'Симулятор',   year: 2021, price: 549,  cover: 'img/nebula-trader.jpg',   hot: false },
    { id: 6,  title: 'Nexus Arena',     platform: 'epic',  genre: 'Экшен',       year: 2024, price: 1499, cover: 'img/nexus-arena.jpg',     hot: false },
    { id: 7,  title: 'Pixel Orchard',   platform: 'gog',   genre: 'Головоломка', year: 2020, price: 199,  cover: 'img/pixel-orchard.jpg',   hot: false },
    { id: 8,  title: 'Hollow Lantern',  platform: 'gog',   genre: 'Хоррор',      year: 2023, price: 649,  cover: 'img/hollow-lantern.jpg',  hot: false },
    { id: 9,  title: 'Ember Kingdoms',  platform: 'epic',  genre: 'Стратегия',   year: 2025, price: 899,  cover: 'img/ember-kingdoms.jpg',  hot: false },
    { id: 10, title: 'Mirage Run',      platform: 'epic',  genre: 'Приключения', year: 2022, price: 349,  cover: 'img/mirage-run.jpg',      hot: false },
    { id: 11, title: 'Tidal Tactics',   platform: 'gog',   genre: 'RPG',         year: 2021, price: 999,  cover: 'img/tidal-tactics.jpg',   hot: false },
    { id: 12, title: 'Gearhead Garage', platform: 'steam', genre: 'Гонки',       year: 2024, price: 1299, cover: 'img/gearhead-garage.jpg', hot: false }
];