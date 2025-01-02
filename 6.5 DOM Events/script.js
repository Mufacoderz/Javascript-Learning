//cara 1 /inline html
const p3 = document.querySelector('.p3');
function ubahWarna3(){
    p3.style.backgroundColor = 'lightblue';
}
//di html p3 kasih onclick='namaFunction()'


//cara 2 /method event handler
const p2 = document.querySelector('.p2');
function ubahWarna2(){
    p2.style.backgroundColor = 'lightblue';
}
p2.onclick = ubahWarna2;


//cara 3 /addEventListener //cara yg direkomendasikan
//contoh kasus jika di klik paragraf 4 maka nambah li item baru
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){ 
    const ul = document.querySelector('section#b ul');
    const newLi = document.createElement('li');
    const textLi = document.createTextNode('Item baru');
    newLi.appendChild(textLi);
    ul.appendChild(newLi);
});


const p1 = document.querySelector('.p1');
p1.addEventListener('mouseenter', function(){
    p1.style.color = 'red';
    p1.style.backgroundColor = 'lightblue';
});
p1.addEventListener('mouseleave', function(){
    p1.style.color = 'black';
    p1.style.backgroundColor = 'white';
});