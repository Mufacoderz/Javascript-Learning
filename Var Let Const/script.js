// 'var' digunakan untuk mendeklarasikan variabel dengan cakupan global atau fungsi.
// Dapat dideklarasikan ulang dan nilainya dapat diubah.
var a = 10; // Deklarasi pertama
var a = 20; // Tidak error (bisa deklarasi ulang)
a = 30; // Tidak error (nilainya bisa diubah)
console.log(a); // Output: 30

// 'let' digunakan untuk mendeklarasikan variabel dengan cakupan blok (block scope).
// Tidak dapat dideklarasikan ulang di dalam cakupan yang sama, tetapi nilainya bisa diubah.
let b = 10;
// let b = 20; // Error (tidak bisa deklarasi ulang dalam cakupan yang sama)
b = 20; // Tidak error (nilainya bisa diubah)
console.log(b); // Output: 20

// 'const' digunakan untuk mendeklarasikan variabel yang bersifat konstan.
// Tidak dapat dideklarasikan ulang atau diubah nilainya setelah diinisialisasi.
const c = 10;
// const c = 20; // Error (tidak bisa deklarasi ulang)
c = 30; // Error (nilainya tidak bisa diubah)
console.log(c); // Tidak akan sampai ke sini karena error di atas

// Perbedaan scope
if (true) {
    var x = 100; // 'var' memiliki cakupan fungsi atau global
    let y = 200; // 'let' memiliki cakupan blok
    const z = 300; // 'const' juga memiliki cakupan blok
}
console.log(x); // Output: 100 (masih tersedia di luar blok)
// console.log(y); // Error (y tidak tersedia di luar blok)
// console.log(z); // Error (z tidak tersedia di luar blok)
