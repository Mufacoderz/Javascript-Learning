// Array `num1` berisi angka 1, 2, dan 3
const num1 = [1, 2, 3];

// Array `num2` berisi angka 4, 5, dan 6
const num2 = [4, 5, 6];

// Menggunakan spread operator (`...`) untuk menggabungkan `num1` dan `num2`
// Spread operator mengambil elemen dari array dan memasukkannya ke dalam array baru
const allNums = [...num1, ...num2];

// Menampilkan array hasil penggabungan ke dalam console
console.log(allNums); // Output: [1, 2, 3, 4, 5, 6]
