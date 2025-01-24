// Rest Parameter adalah fitur ES6 yang digunakan untuk menggabungkan sejumlah argumen menjadi sebuah array.
// Rest parameter ditandai dengan tiga titik (...).
// Rest parameter harus menjadi parameter terakhir dalam sebuah fungsi, karena semua argumen setelahnya akan dimasukkan ke dalam array.

function myFunc(...myArgs) {
    // Rest parameter (...myArgs) akan menangkap semua argumen yang dikirim ke fungsi ini
    // dan menggabungkannya menjadi sebuah array bernama 'myArgs'.

    // Jika ingin mengakses seluruh argumen tanpa menggunakan rest parameter,
    // kita dapat menggunakan 'arguments', tetapi 'arguments' hanya tersedia dalam fungsi berbasis deklarasi/ekspresi, bukan arrow function.

    // Contoh:
    // return arguments;            // Mengembalikan semua argumen dalam bentuk "array-like object".
    // return Array.from(arguments) // Mengubah "array-like object" arguments menjadi array asli.

    return [...arguments]; // Menggunakan spread operator untuk mengubah 'arguments' menjadi array.
}

console.log(myFunc(1, 2, 3, 4, 5)); // Output: [1, 2, 3, 4, 5]


// Fungsi lain untuk menjelaskan cara kerja rest parameter:
function jumlahkan(...angka) {
    // Dalam fungsi ini, rest parameter '...angka' akan menggabungkan semua argumen yang diterima
    // ke dalam sebuah array bernama 'angka'.

    let total = 0; // Inisialisasi variabel 'total' dengan nilai 0.

    for (const a of angka) {
        // Loop melalui setiap elemen dalam array 'angka'
        // dan tambahkan elemen tersebut ke variabel 'total'.
        total += a;
    }

    return total; // Kembalikan hasil penjumlahan semua elemen.
}

console.log(jumlahkan(1, 2, 3, 4, 5)); // Output: 15


// ---------- Penjelasan Tambahan tentang Rest Parameter ----------

// 1. Perbedaan Rest Parameter vs Spread Operator:
//    - Rest Parameter digunakan dalam definisi fungsi untuk menangkap argumen menjadi array.
//    - Spread Operator digunakan untuk memecah array atau objek menjadi elemen/proporsi terpisah.

// Contoh Rest Parameter:
function contohRest(...args) {
    console.log(args); // Output: Array dari semua argumen
}
contohRest(1, 2, 3); // Output: [1, 2, 3]

// Contoh Spread Operator:
const angka = [1, 2, 3];
console.log(...angka); // Output: 1 2 3 (elemen array dipisah)

// 2. Rest Parameter dan Argumen Lainnya:
//    - Kita bisa memiliki argumen biasa sebelum rest parameter, tetapi tidak setelahnya.
function argumenCampuran(a, b, ...rest) {
    console.log(`a = ${a}, b = ${b}, sisanya = ${rest}`);
}
argumenCampuran(10, 20, 30, 40, 50); // Output: a = 10, b = 20, sisanya = [30, 40, 50]

// 3. Rest Parameter vs 'arguments':
//    - 'arguments' adalah objek mirip array yang berisi semua argumen fungsi (tidak tersedia di arrow function).
//    - Rest Parameter adalah array asli yang fleksibel untuk manipulasi data.

// Contoh 'arguments':
function contohArguments() {
    console.log(arguments); // Output: Objek mirip array dari semua argumen
}
contohArguments(1, 2, 3); // Output: [1, 2, 3]

// 4. Kombinasi dengan Destructuring:
//    - Rest Parameter dapat digunakan bersama destructuring untuk mendapatkan elemen tertentu dan sisanya.
const [pertama, kedua, ...sisanya] = [1, 2, 3, 4, 5];
console.log(pertama); // Output: 1
console.log(kedua);   // Output: 2
console.log(sisanya); // Output: [3, 4, 5]
