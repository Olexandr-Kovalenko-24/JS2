const root = document.querySelector('#root');
const lamp = document.createElement('div');
const toggler = document.querySelector('.toggler');
root.append(lamp);
// square.style.width = '100px';
// square.style.height = '100px';


lamp.classList.add('lamp-off', 'lamp')

// lamp.id = 'testID'

toggler.addEventListener('click', toggle)

function toggle(){
    lamp.classList.toggle('lamp-off');
    lamp.classList.toggle('lamp-on')
}