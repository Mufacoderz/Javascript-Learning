// let myArr = ['satu', 1, true, [1, 2, 3, 4, 'enam']]

// console.log(myArr);

// // namaArray.length untuk melihat total elemen yang ada di dalam array
// console.log(myArr.length);

// //setiap array di awali index 0
// console.log(myArr[0]);
// //ketika saya memasukkan myArr[0] maka muncul index ke 0 yaitu 'satu' dan begitu juga jika index seterusnya

// //bisa juga memanggil array dalam array
// console.log(myArr[3][2]);

// //cara manggil array dengan benar
// console.log('cara yang benar');//abaikan ini


// for(let i = 0; i < myArr.length; i++){
//     console.log(myArr[i]);
// }


// //Cara nambahkan array manual
// // let myArr2 = [];
// // myArr2[0] = 'ucup';
// // myArr2[1] = 'sugeng';
// // myArr2[3] = 'yanto';
// // myArr2[5] = 'ujang';
// // //jika indexnya ada yang terlewat maka nilainya undefined


// //Cara hapus nilai array manual / kurang bagus
// // let myArr3 = [1, 2, 3, 4, 5];
// // myArr3[2] = undefined;


// let mhs = ['sugeng', 'ajeng', 'jono', 'yanto', 'agus'];
// for(let i = 1; i < mhs.length; i++){
//     console.log('Mahasiswa ke-' + i + ' bernama ' + mhs[i]);
// }



let myArr = ['satu', 1, true, [1, 2, 3, 4, 'enam']]; // Array dapat berisi berbagai tipe data
console.log(myArr);
// Output: ['satu', 1, true, [1, 2, 3, 4, 'enam']]

// 1. **Melihat panjang array dengan `.length`**
console.log(myArr.length); 
// Output: 4 (karena ada 4 elemen dalam `myArr`)

// 2. **Akses elemen array berdasarkan indeks**
console.log(myArr[0]); 
// Output: 'satu' (elemen pertama di indeks 0)

// 3. **Akses elemen array dalam array (nested array)**
console.log(myArr[3][2]); 
// Output: 3 (elemen ketiga dalam array [1, 2, 3, 4, 'enam'])

// 4. **Looping elemen array menggunakan `for`**
for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}
// Output:
// satu
// 1
// true
// [1, 2, 3, 4, 'enam']

// 5. **Looping array mahasiswa**
let mhs = ['sugeng', 'ajeng', 'jono', 'yanto', 'agus'];
for (let i = 1; i < mhs.length; i++) {
  console.log('Mahasiswa ke-' + i + ' bernama ' + mhs[i]);
}
// Output:
// Mahasiswa ke-1 bernama ajeng
// Mahasiswa ke-2 bernama jono
// Mahasiswa ke-3 bernama yanto
// Mahasiswa ke-4 bernama agus
