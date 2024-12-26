//querySelector()
//hasilnya element
//hanya mengembalikan 1 nilai
//selectornya seperti selector css

const p4 = document.querySelector('#b p')
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('#b ul li:nth-child(2)')
li2.style.backgroundColor = 'orange';


//querySelectorAll()
//hasilnya node list
//klau mau di edit harus dikasih index

const p = document.querySelectorAll('p')

for(i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

//nood root
//untuk memperkecil scope, jadi nggk perlu document.xxxx
const sectB = document.querySelector('#b')

//liat dibawah ini,  nge-scope/mencari elemen di sectB saja, bukan document keseluruhan
const li3 = sectB.querySelector('li:nth-child(3)')
li3.style.color = 'red';

const sectA = document.querySelector('#a')
const a = sectA.querySelector('a')
a.style.backgroundColor = 'red';
a.style.color = 'black';