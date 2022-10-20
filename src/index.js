// const DB = [
//     './images/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-30942.jpg',
//     './images/images.jfif',
//     './images/Zugpsitze_mountain.jpg',
//     './images/завантаження (1).jfif',
//     './images/завантаження.jfif',
// ];

// const img = document.querySelector('.img');

// const [prevBtn, nextBtn] = document.querySelectorAll('.slider-wrapper > .btn')

// const slider = new Slider(DB);

// function updateView() {
//     img.setAttribute('src', slider.currentSlide);
// }

// const buttonHandler = (direction = 'next') => {
//     return function () {
//         slider.currentIndex = slider[direction]
//         updateView();
//     }
// }

// prevBtn.addEventListener('click', buttonHandler('prev'));

// nextBtn.addEventListener('click', buttonHandler('next'));

// updateView();





const userDataBase = [
    {
        firstName: 'John',
        lastName: ' Snow',
        avatar: './images/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-30942.jpg',
        email: 'test@mail.com'
    },
    {
        firstName: 'Alex',
        lastName: ' Doe',
        avatar: './images/images.jfif',
        email: 'test@mail.com'
    },
    {
        firstName: 'Gram',
        lastName: ' How',
        avatar: './images/Zugpsitze_mountain.jpg',
        email: 'test@mail.com'
    },
    {
        firstName: 'Nike',
        lastName: ' Bow',
        avatar: './images/завантаження (1).jfif',
        email: 'test@mail.com'
    },
    {
        firstName: 'Pond',
        lastName: ' Gow',
        avatar: './images/завантаження.jfif',
        email: 'testssd@mail.com',
    }
];


class Slider {
    constructor (arrayOfObject, index = 0){
        this._object = arrayOfObject;
        this._currentIndex = index;
    }

    get currentSlide () {
        return this._object[this._currentIndex]
    }

    set currentIndex(v) {
        if (typeof v !== 'number'){
            throw new TypeError('Index must be a number')
        }
        this._currentIndex = v;
    }

    get currentIndex() {
        return this._currentIndex;
    }

    get prev(){
        return ((this.currentIndex-1 + this._object.length) % this._object.length)
    }
    
    get next(){
        return ((this.currentIndex+1) % this._object.length)
    }
}


const img = document.querySelector('.img');
const fullName = document.querySelector('h1');
const emailAdress = document.querySelector('p');
// const [first] = userDataBase;
// const {avatar, firstName, lastName, email} = first;


const [prevBtn, nextBtn] = document.querySelectorAll('.btn')

const slider = new Slider(userDataBase);


function updateUser() {
    img.setAttribute('src', slider.currentSlide.avatar);
    fullName.innerText = `${slider.currentSlide.firstName} ${slider.currentSlide.lastName}`;
    emailAdress.innerText = `${slider.currentSlide.email}`
}


prevBtn.addEventListener('click', () => {
    slider.currentIndex = slider.prev;
    updateUser();
});


nextBtn.addEventListener('click', () => {
    slider.currentIndex = slider.next;
    updateUser();
});

updateUser()