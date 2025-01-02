// element.innerHTML

const judul = document.getElementById('judul');
judul.innerHTML = 'Muhammad Fadil'


// element.style.....

const sectionA = document.querySelector('#a');

const p = sectionA.getElementsByTagName('p');

for(let i = 0; i < p.length; i++){
    p[i].style.color = 'teal';
}


// element.setAttribute()

const section = document.getElementsByTagName('section')[0];
section.setAttribute('name', 'ini-section')
//kode diatas menambahkan attr name pada section pertama/section a

const a = document.querySelector('#a a');
a.setAttribute('id', 'link-ig');

a.removeAttribute('href');
//ini menghapus attr

const p2 = document.querySelector('.p2');
    // element.classList.add() menambah class baru

    // element.classList.remove() mengjhilangkan class yg ada

    // element.classList.toggle() jika belum ada class tertentu maka akan ditambahkan, jika udah ada class maka akan menghilangkan class tsb
    p2.classList.toggle('biru-muda');
    // element.classList.item()

    // element.classList.contains() mengecek apakah elemen memiliki class tertentu

    // element.classList.replace() mengganti class yg ada ke class baru

    


// element.classList



