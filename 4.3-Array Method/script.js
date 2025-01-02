let buah = ['apel', 'anggur', 'durian', 'mangga', 'pepaya']

//.splice = menambah elemen array ditengah tengah
//rumusnya array.splice(indexAwal, mauDiHapusBerapa, elemenbaru, elemenBaru,....)

buah.splice(2, 0, 'pisang', 'jambu');
console.log(buah.join(', '));

//.slice = mengiris array menjadi array baru
//rumusnya = array.slice(indexAwalYangDiBawa,indexAkhir)

let buah2 = buah.slice(1, 3);
console.log(buah2.join(', '));

//forEach = untuk melakukan sesuatu ke stiap elemen didalam array

buah.forEach(function(e) {
    console.log(e);
})

// //contoh dibawah tanpa menggunakan forEach
// for(let i = 0; i < buah.length; i++){
//     console.log(buah[i]);
// }

let namaMahasiswa = ['agung', 'jono', 'sugeng'];
namaMahasiswa.forEach(function(e, i){
    console.log('mahasiwa ke-' + (i+1) + ' bernama ' + e)
})

//.map mirip forEach
//.map membuat elemen baru dengan hasil operasi pada setiap elemen array asli


let angka = [1, 2, 4, 9, 5, 7, 6];
let angka2 = angka.map(function(e){
    return e * 2
})
console.log(angka2.join(' - '))
//map mengembalikan nilai array

//.sort = mengurutkan elemen didalam arraynya
angka.sort();
console.log(angka.join(' - '));
//setelah di sort maka elemennya dimulai dari urutan terkecil

//kalau angkanya puluhan maka =
let angkaPuluhan = [1, 2, 4, 8, 16, 32, 64];
angka.sort(function(a, b){
    return a-b;
});
console.log(angkaPuluhan.join(' - '));
//kalau tidak seperti diatas maka hasilnya 1, 16, 2, , 3, 32, 4, 64, 8