const root = document.querySelector('#root');

const article = document.createElement('article');
const header = document.createElement('h1');
const paragraph = document.createElement('p');

article.textContent = 'Article';
header.textContent = 'I`m header';
article.append(header);
article.append(paragraph);
// header.append('Header');
paragraph.textContent = 'i am text';

root.append(article);


const array = [
    './images/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-30942.jpg',
    './images/images.jfif',
    './images/Zugpsitze_mountain.jpg',
    './images/завантаження (1).jfif',
    './images/завантаження.jfif',
];


function createImage(imgSrc){
    const img = document.createElement('img');
    img.setAttribute('src', imgSrc);
    img.classList.add('img');
    return img;
}

const imageArray = array.map(createImage);

root.append(...imageArray);