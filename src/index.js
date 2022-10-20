// const [clouseBtn, openBtn] = document.querySelectorAll('button');

// clouseBtn.addEventListener('mouseover', changeContent);
// openBtn.addEventListener('mouseover', changeContent);

// clouseBtn.addEventListener('mouseleave', changeContent);
// openBtn.addEventListener('mouseleave', changeContent);

// function changeContent () {
// let tmp = clouseBtn.textContent;
// clouseBtn.textContent = openBtn.textContent;
// openBtn.textContent = tmp;
// }


// const btnCollection = document.querySelectorAll('section > button');

// for (const btn of btnCollection) {
//     btn.addEventListener('click', clickHandler);
// }

// function clickHandler({target, target: {parentNode, dataset: {color}}}) {
//     parentNode.style.backgroundColor = color;

// }


// const btnCollection = document.querySelectorAll('button');

// for (const btn of btnCollection) {
//     btn.addEventListener('click', clickHandler);
// }

// const img = document.querySelector('.img');


// function clickHandler({target: {dataset}}) {
//     img.setAttribute('src', dataset.src)
// }

// const form = document.querySelector('form');

// form.addEventListener('submit', submitHandler);

// function submitHandler (event) {
//     event.preventDefault();
//     console.dir(event.target.email.value);
// }


const form = document.querySelector('form');
const returnValue = document.querySelector('article');

const KOEFFICIENT = {
    USD: 36.6,
    EUR: 35.76,
    PLN: 7.47
}

form.addEventListener('submit', submitHandler);

function submitHandler (event) {
    event.preventDefault();
    const currency = event.target.currency.value
    const amount = event.target.amount.value;
    returnValue.innerText = amount * KOEFFICIENT[currency];
}


// function submitHandler (event) {
//     event.preventDefault();
//     const {target: {returnValue: {value}}} = event;
//     if(Number.isNaN(Number(value))){
//         returnValue.innerText = 'Amount must be a number';
//     } else {
//         returnValue.innerText = value * KOEFFICIENT;
//     }
// }