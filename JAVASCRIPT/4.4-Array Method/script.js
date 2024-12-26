//.filter = untuk mencari beberapa nilai dalam array dan mengengembalikan nilainya menjadi array tersendiri

let angka = [1, 2, 3, 4, 5, 6];

// let angka2 = angka.filter(e => {
//     return e == 5;
// });
// console.log(angka2);

let angka3 = angka.filter(e =>{
    return e < 4;
})
console.log(angka3.join(' , '));

//.find = seperti filter tapi hanya mencari satu nilai tidak lebih dan juga tidak menghasilkan/mengembalikan nilainya menjadi array baru

let angka4 = angka.find(e => {
    return e > 3;
});
console.log(angka4);