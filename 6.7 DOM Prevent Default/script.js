
const close = document.querySelectorAll('.close');

close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();// mencegah aksi defaultnya. yaitu aksi default dari tag a yg jika dklik otomatis menuju ke link, kalau pakai preventDefault maka akan dicegah
    })
});

