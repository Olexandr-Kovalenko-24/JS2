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
    PLN: 7.47,
    UAH: 1
}

form.addEventListener('submit', submitHandler);


function submitHandler (event) {
    event.preventDefault();
    const {target: {amount: {value: amount},
            currencyInput: {value: currencyInput},
            currencyOutput: {value: currencyOutput}}} = event;
    if(Number.isNaN(Number(amount))){
        returnValue.innerText = 'Amount must be a number';
    } else {
        const res = amount * KOEFFICIENT[currencyInput] / KOEFFICIENT[currencyOutput]
        returnValue.innerText = res.toFixed(2);
    }
}


// function submitHandler (event) {
//     event.preventDefault();
//     const currency = event.target.currency.value
//     const currencyOutput = event.target.currencyOutput.value
//     const amount = event.target.amount.value;
//     if (KOEFFICIENT[currency] === KOEFFICIENT[currencyOutput]){
//         returnValue.innerText = amount
//     } else if (KOEFFICIENT[currency] > KOEFFICIENT[currencyOutput]) {
//         returnValue.innerText = (amount * KOEFFICIENT[currency]) / KOEFFICIENT[currencyOutput]
//     } else if (KOEFFICIENT[currency] < KOEFFICIENT[currencyOutput]){
//         returnValue.innerText = (amount * KOEFFICIENT[currency]) / KOEFFICIENT[currencyOutput]
//     }
// }




// function submitHandler (event) {
//     event.preventDefault();
//     const {target: {returnValue: {value}}} = event;
//     if(Number.isNaN(Number(value))){
//         returnValue.innerText = 'Amount must be a number';
//     } else {
//         returnValue.innerText = value * KOEFFICIENT;
//     }
// }