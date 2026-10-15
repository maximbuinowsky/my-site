//  Корзина и избранное (хранятся в localStorage) 
function getList(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveList(key, list) {
    localStorage.setItem(key, JSON.stringify(list));
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = getList('cart').length;
}

function addToCart(id) {
    const cart = getList('cart');
    cart.push(id);                       // пока просто запоминаем id игры
    saveList('cart', cart);
    updateCartCount();
}

function toggleFavorite(id) {
    const favorites = getList('favorites');
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);              // не было в избранном — добавляем
    } else {
        favorites.splice(index, 1);      // было — убираем
    }
    saveList('favorites', favorites);
}

//  Горячие предложения: карточки из GAMES 
function showHotGames() {
    const grid = document.getElementById('hot-grid');
    const favorites = getList('favorites');
    let html = '';

    for (const game of GAMES) {
        if (!game.hot) continue;
        const heart = favorites.includes(game.id) ? '♥' : '♡';

        html += `
            <article class="game-card">
                <img src="${game.cover}" alt="Обложка игры ${game.title}">
                <h3>${game.title}</h3>
                <p class="meta">${game.genre} · ${game.year}</p>
                <span class="badge">${PLATFORMS[game.platform]}</span>
                <div class="price-row">
                    <strong>${game.price} $</strong>
                    <button class="heart" data-heart="${game.id}" aria-label="В избранное">${heart}</button>
                </div>
                <button class="btn" data-add="${game.id}">В корзину</button>
            </article>`;
    }
    grid.innerHTML = html;
}

// клики по кнопкам внутри сетки (один обработчик на всю сетку)
document.getElementById('hot-grid').addEventListener('click', function (event) {
    const add = event.target.dataset.add;
    const heart = event.target.dataset.heart;

    if (add) {
        addToCart(Number(add));
    }
    if (heart) {
        toggleFavorite(Number(heart));
        event.target.textContent = event.target.textContent === '♡' ? '♥' : '♡';
    }
});

//  Бургер-меню 
document.getElementById('burger').addEventListener('click', function () {
    document.getElementById('main-nav').classList.toggle('open');
});

//  Поиск с подсказками 
const searchInput = document.getElementById('search-input');
const suggestions = document.getElementById('suggestions');

searchInput.addEventListener('input', function () {
    const text = searchInput.value.trim().toLowerCase();
    suggestions.innerHTML = '';
    if (text === '') return;

    for (const game of GAMES) {
        if (game.title.toLowerCase().includes(text)) {
            suggestions.innerHTML +=
                `<li><a href="catalog.html?q=${game.title}">${game.title}</a></li>`;
        }
    }
});


//  Запуск 
updateCartCount();
showHotGames();
const modal = document.getElementById('gameModal');
const closeBtn = modal.querySelector('.modal__close');

// Функция, которая наполняет окно данными и открывает его
function openGameModal(gameData) {
    document.getElementById('modalImg').src = gameData.image;
    document.getElementById('modalMeta').textContent = `${gameData.genre} · ${gameData.year}`;
    document.getElementById('modalTitle').textContent = gameData.title;
    document.getElementById('modalDesc').textContent = gameData.description;
    document.getElementById('modalBadge').textContent = gameData.platform;
    document.getElementById('modalPrice').textContent = `${gameData.price} ₽`;

    // Показываем окно: добавляем класс .open из CSS
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // отключаем прокрутку сайта под открытым окном
}

// Функция закрытия окна
function closeGameModal() {
    modal.classList.remove('open'); // убираем класс .open, окно снова скрывается (display: none)
    document.body.style.overflow = ''; // возвращаем прокрутку сайту
}

// 1. Закрытие по клику на крестик
closeBtn.addEventListener('click', closeGameModal);

// 2. Закрытие по клику на темную область вокруг карточки
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeGameModal();
    }
});

// 3. Закрытие по нажатию клавиши Esc на клавиатуре
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
        closeGameModal();
    }
});

// Пример: вешаем событие клика на карточки игр на странице
document.querySelectorAll('.game-card').forEach((card) => {
    card.addEventListener('click', () => {
        // Собираем данные из карточки (или берем из твоего массива games.js)
        const clickedGame = {
            title: card.querySelector('h3')?.textContent || 'Игра',
            price: 1199,
            genre: 'RPG',
            year: 2022,
            platform: 'Steam',
            description: 'Здесь будет подробное описание игры...',
            image: card.querySelector('img').src
        };
        
        openGameModal(clickedGame); // Вызываем функцию открытия
    });
});