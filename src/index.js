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

// function logger(event) {
//     console.log(event.target)
//     const currentBut = event.target;
//     currentBut.disabled = true;
//     currentBut.removeEventListener('click', logger)
// }

// const btncollection = document.querySelectorAll('button');

// for (const btn of btncollection) {
//     btn.addEventListener('click', logger)
// }





// document.addEventListener('keydown', handler)
// document.addEventListener('click', handler)

// function handler(event) {
//     console.log(event)
// }

// const ev = new PointerEvent('click')
// document.dispatchEvent(ev);




// document.addEventListener('click', clickHandler);
// document.body.addEventListener('click', clickHandler);

// const section = document.querySelector('#parent');
// parent.addEventListener('click', clickHandler);

// const btn = document.querySelector('button');
// btn.addEventListener('click', clickHandler);

// function clickHandler(event){
//     console.dir(event.currentTarget)
// }



// const form = document.querySelector('form')

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(event);
// })


const div = document.querySelector('.field');

div.addEventListener('click', (event) => {
    const box = document.querySelector('#box');
    box.style.left = `${event.clientX - (box.offsetWidth/2)}px`;
    box.style.top = `${event.clientY- (box.offsetHeight/2)}px`;
})

