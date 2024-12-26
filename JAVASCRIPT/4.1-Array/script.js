let myArr = ['satu', 1, true, [1, 2, 3, 4, 'enam']]

console.log(myArr);

// namaArray.length untuk melihat total elemen yang ada di dalam array
console.log(myArr.length);

//setiap array di awali index 0
console.log(myArr[0]);
//ketika saya memasukkan myArr[0] maka muncul index ke 0 yaitu 'satu' dan begitu juga jika index seterusnya

//bisa juga memanggil array dalam array
console.log(myArr[3][2]);

//cara manggil array dengan benar
console.log('cara yang benar');//abaikan ini


for(let i = 0; i < myArr.length; i++){
    console.log(myArr[i]);
}


//Cara nambahkan array manual
// let myArr2 = [];
// myArr2[0] = 'ucup';
// myArr2[1] = 'sugeng';
// myArr2[3] = 'yanto';
// myArr2[5] = 'ujang';
// //jika indexnya ada yang terlewat maka nilainya undefined


//Cara hapus nilai array manual / kurang bagus
// let myArr3 = [1, 2, 3, 4, 5];
// myArr3[2] = undefined;


let mhs = ['sugeng', 'ajeng', 'jono', 'yanto', 'agus'];
for(let i = 1; i < mhs.length; i++){
    console.log('Mahasiswa ke-' + i + ' bernama ' + mhs[i]);
}