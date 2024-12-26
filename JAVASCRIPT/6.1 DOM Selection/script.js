// getElemenById()
//memanggil sebuah elemen berdasarkan Id nya
//hasilnya element

//getElementsByTagName()
//memanggil beberapa elemen berdasarkan tag nya
//hasilnya HTMLCollection

//getElementsByClassName()
//memanggil beberapa elemen berdasarkan nama class nya
//hasilnya HTMLCollection

//querySelector()
//hasilnya element

//querySelectorAll()
//memanggil elemen berdasarkan selectornya
//hasilnya nodelist

//DOM SELECTION

const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'DOM Selection';


const paragraf = document.getElementsByTagName('p');
for(let i = 0; i < paragraf.length; i++)
paragraf[i].style.backgroundColor = 'lightgrey';


const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize ='50px';

//kalau dia masih HTMLCollection, maka harus di kasih index [] supaya bisa di edit

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini adalah paragraf 1';
