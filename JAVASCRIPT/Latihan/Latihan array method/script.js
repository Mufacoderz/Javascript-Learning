//foreach

let namaHewan = ['kuda', 'kucing', 'kelinci', 'naga', 'leviathan', 'kambing'];
namaHewan.forEach(function(e){
    console.log('Nama Hewan: ' + e);
})

let angkaTambahDua = [1, 2, 3, 4, 5, 6];
angkaTambahDua.forEach(function(e){
    console.log(e + 2);
})

//map
let harga = [25000, 40000, 100000, 175000, 299000];
let hargaDiskon = harga.map(function(e){
    return e = (10 / 100) * e;
})
console.log(hargaDiskon.join(' , '));

let panjangSisiPersegi = [5, 10, 15, 18]
let luasPersegi = panjangSisiPersegi.map(function(e){
    return e * 2;
})
console.log(luasPersegi.join(' , '));

let kata = ['code', 'debugging', 'API', 'library']
let jumlahKata = kata.map(function(e){
    return e.length;
})
console.log(jumlahKata.join(' , '))