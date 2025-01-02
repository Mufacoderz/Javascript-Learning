const body = document.querySelector('body');
const text = document.querySelector('.text');
const button = document.querySelector('.switchButton');

button.addEventListener('click', function(){
    body.classList.toggle('darkMode');
    text.classList.toggle('darkMode');
});

