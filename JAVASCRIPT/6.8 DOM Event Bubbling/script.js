
// const close = document.querySelectorAll('.close');

// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         e.stopPropagation(); // supaya event dari card tidak jalan saat meng-klik close /x
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok'); //ketika saya klik x / close, maka event card ini akan jalan juga
//     });
// });


//script di atas bisa di rubah jadi =
const container = document.querySelector('.container');

container.addEventListener('click', function(e){
   if(e.target.className =='close'){
    e.target.parentElement.style.display = 'none';
   }
})