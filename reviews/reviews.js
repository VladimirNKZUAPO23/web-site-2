document.addEventListener('DOMContentLoaded', () => {
    const sampleReviews = [
        {
            id: 1,
            userName: "Алексей",
            avatar: "img avatars user1.jpg",
            rating: 5,
            date: "15 мая 2025",
            text: "Отличный сервис! Продал скин за 5 минут по хорошей цене. Деньги пришли моментально. Буду пользоваться еще!"
        },
        {
            id: 2,
            userName: "Мария",
            avatar: "img avatars user2.jpg",
            rating: 4,
            date: "12 мая 2025",
            text: "Хорошая площадка, но комиссия немного великовата. В остальном все отлично - поддержка отвечает быстро, выплаты вовремя."
        },
        {
            id: 3,
            userName: "Дмитрий",
            avatar: "img avatars user3.jpg",
            rating: 5,
            date: "8 мая 2025",
            text: "Пользуюсь уже больше года. Лучший маркетплейс для CS2! Ни разу не было проблем с транзакциями. Рекомендую всем."
        }
    ];

    const reviewsList = document.getElementById('reviewsList');
    const reviewForm = document.getElementById('reviewForm');

    const getRatingStars = (rating) => {
        return '★★★★★☆☆☆☆☆'.slice(5 - rating, 10 - rating);
    };

    const displayReviews = (reviews) => {
        reviewsList.innerHTML = '';
        reviews.forEach(({ avatar, userName, date, rating, text }) => {
            const div = document.createElement('div');
            div.className = 'review-card';
            div.innerHTML = `
                <div class="review-header">
                    <img src="${avatar}" alt="${userName}" class="review-avatar">
                    <div>
                        <div class="review-user">${userName}</div>
                        <div class="review-date">${date}</div>
                    </div>
                    <div class="review-rating" title="Оценка: ${rating}/5">${getRatingStars(rating)}</div>
                </div>
                <div class="review-text">${text}</div>
            `;
            reviewsList.appendChild(div);
        });
    };

    displayReviews(sampleReviews);

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userName = document.getElementById('userName').value.trim();
        const rating = parseInt(document.getElementById('rating').value);
        const reviewText = document.getElementById('reviewText').value.trim();

        if (!userName || !rating || !reviewText) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        const newReview = {
            id: sampleReviews.length + 1,
            userName,
            avatar: "img/avatars/default.jpg",
            rating,
            date: new Date().toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }),
            text: reviewText
        };

        sampleReviews.unshift(newReview);
        displayReviews(sampleReviews);
        reviewForm.reset();

        window.scrollTo({ top: 0, behavior: 'smooth' });
        alert('Спасибо за ваш отзыв!');
    });
});
