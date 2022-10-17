function clickHandler () {
    console.log('Click on button')
}

const btn = document.querySelector('#btnthree');

btn.addEventListener('click', clickHandler)

function logger() {
    prompt('How old are you?')
}

btn.addEventListener('click', logger)

btn.removeEventListener('click', logger)
