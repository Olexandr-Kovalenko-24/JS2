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

form.addEventListener('submit', submitHandler);

function submitHandler (event) {
    event.preventDefault();
    returnValue.innerText = (event.target.number.value) * 37;
}