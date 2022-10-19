const DB = [
    './images/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-30942.jpg',
    './images/images.jfif',
    './images/Zugpsitze_mountain.jpg',
    './images/завантаження (1).jfif',
    './images/завантаження.jfif',
];

const img = document.querySelector('.img');

const [prevBtn, nextBtn] = document.querySelectorAll('.slider-wrapper > .btn')

const slider = new Slider(DB);

function updateView() {
    img.setAttribute('src', slider.currentSlide);
}

const buttonHandler = (direction = 'next') => {
    return function () {
        slider.currentIndex = slider[direction]
        updateView();
    }
}

prevBtn.addEventListener('click', buttonHandler('prev'));

nextBtn.addEventListener('click', buttonHandler('next'));

updateView();