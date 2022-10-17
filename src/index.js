// function clickHandler () {
//     console.log('Click on button')
// }

// const btn = document.querySelector('#btnthree');

// btn.addEventListener('click', clickHandler)

// function logger() {
//     prompt('How old are you?')
// }

// btn.addEventListener('click', logger)

// btn.removeEventListener('click', logger)

function logger (event) {
    console.log(event.target)
    const currentBut = event.target;
    currentBut.disabled = true;
    currentBut.removeEventListener('click', logger)
}

const btncollection = document.querySelectorAll('button');

for (const btn of btncollection) {
    btn.addEventListener('click', logger)
}