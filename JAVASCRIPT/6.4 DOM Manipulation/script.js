//manipulasi node atau nambah/hapus/ganti elemen

//tambah elemen

//document.createElement()
//document.createTextNode()
//node.appendChild()

//contoh : membuat paragraf baru pada section a
const newP = document.createElement('p'); //bikin elemennya
const textPBaru = document.createTextNode('paragraf baru'); //isi elemennya
newP.appendChild(textPBaru); //simpan tulisan ke dalam paragraf
//simpan p baru di akhir section a /elemen parentnya
const sectionA = document.getElementById('a');
sectionA.appendChild(newP);


//contoh : membuat item baru disection B , posisinya setelah item 1
const newLi = document.createElement('li');
const textLiBaru = document.createTextNode('item baru');
newLi.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul'); //tangkap elemen parentnya
const li2 = ul.querySelector('li:nth-child(2)'); // tangkap elemen setelahnya (karena pakai before)

ul.insertBefore(newLi, li2); //keterangan didalam kurungnya : parameter pertama = elemen baru(newLI), kedua sebelum elemen apa(yaitu sebelum li2)



//remove child/hapus elemen
//parentNode.removeChild()

//contoh : hapus tag a / link instagramnya
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


//replace / mengganti
//parentNode.replaceChild()

//contoh : mengganti paragraf 4 jadi h2 judul

const sectionB = document.getElementById('b'); //nangkap elemen parent
const p4 = sectionB.querySelector('p'); //nangkap elemen yg mau diganti

const newH2 = document.createElement('h2'); //bikin elemen barunya
const textH2Baru = document.createTextNode('Judul baru'); //bikin isi teks elemen barunya

newH2.appendChild(textH2Baru);

sectionB.replaceChild(newH2, p4); //keterangan parameternya = elemenBaru, elemenLamaYgMauDiganti


//masih ada method lain , dan juga method di atas juga ada yg versi barunya