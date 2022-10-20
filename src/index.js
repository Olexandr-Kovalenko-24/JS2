// const [clouseBtn, openBtn] = document.querySelectorAll('btn');

// clouseBtn.addEventListener('mouseover', changeContent);
// openBtn.addEventListener('mouseover', changeContent);

// clouseBtn.addEventListener('mouseleave', changeContent);
// openBtn.addEventListener('mouseleave', changeContent);

// function changeContent () {
// let tmp = clouseBtn.textContent;
// clouseBtn.textContent = openBtn.textContent;
// openBtn.textContent = tmp;
// }


const btnCollection = document.querySelectorAll('section > button');

for (const btn of btnCollection) {
    btn.addEventListener('click', clickHandler);
}

function clickHandler() {
    const parent = event.target.parentNode;
    const color = event.target.textContent;
    parent.style.backgroundColor = color;
}