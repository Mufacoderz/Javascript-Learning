//DOM Traversal atau penelusuran DOM

//tanpa dom traversal
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });


//menggunakan traversal
const close = document.querySelectorAll('.close');

// for(let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function(e){
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// };
close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    })
})

//dom traversal method :
// parentNode > menghasilkan node
// parentElement > menghasilkan element
// nextSibling > menghasilkan node
// nextElementSibling > menghasilkan element
// previousSibling > menghasilkan node
// previousElemenSibling > menghasilkan element