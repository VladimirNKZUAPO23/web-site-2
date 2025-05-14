// Ждём полной загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
    // Получаем кнопки "Применить фильтры" и "Сбросить фильтры"
    const applyFiltersBtn = document.querySelector('.apply-filters');
    const resetFiltersBtn = document.querySelector('.reset-filters');

    // Получаем все карточки товаров
    const itemCards = document.querySelectorAll('.item-card');

    // Назначаем обработчики событий
    applyFiltersBtn.addEventListener('click', applyFilters);
    resetFiltersBtn.addEventListener('click', resetFilters);

    // === ФУНКЦИЯ: Применение фильтров ===
    function applyFilters() {
        // Получаем значения фильтров
        const weaponType = document.getElementById('weapon-type').value;
        const rarity = document.getElementById('rarity-filter').value;
        const quality = document.getElementById('quality-filter').value;

        // Преобразуем цену в числа, по умолчанию: 0 и бесконечность
        const minPrice = parseInt(document.getElementById('min-price').value) || 0;
        const maxPrice = parseInt(document.getElementById('max-price').value) || Infinity;

        // Проходимся по всем карточкам и применяем фильтрацию
        itemCards.forEach(card => {
            // Получаем значения из data-атрибутов
            const cardType = card.getAttribute('data-type');
            const cardRarity = card.getAttribute('data-rarity');
            const cardQuality = card.getAttribute('data-quality');
            const cardPrice = parseInt(card.getAttribute('data-price'));

            // Проверка условий фильтрации
            const typeMatch = weaponType === 'all' || cardType === weaponType;
            const rarityMatch = rarity === 'all' || cardRarity === rarity;
            const qualityMatch = quality === 'all' || cardQuality === quality;
            const priceMatch = cardPrice >= minPrice && cardPrice <= maxPrice;

            // Отображаем или скрываем карточку в зависимости от соответствия фильтрам
            if (typeMatch && rarityMatch && qualityMatch && priceMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // === ФУНКЦИЯ: Сброс фильтров ===
    function resetFilters() {
        // Сброс значений всех фильтров на дефолтные
        document.getElementById('weapon-type').value = 'all';
        document.getElementById('rarity-filter').value = 'all';
        document.getElementById('quality-filter').value = 'all';
        document.getElementById('min-price').value = '';
        document.getElementById('max-price').value = '';

        // Показываем все карточки
        itemCards.forEach(card => {
            card.style.display = 'block';
        });
    }
});
