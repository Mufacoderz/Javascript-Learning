// **1. for..of pada Array**
const mhs = ['fadil', 'ucup', 'asep']; // Array mahasiswa

for (const m of mhs) { 
    console.log(m); // Iterasi setiap elemen array dan mencetak nilainya
}
// Output: fadil, ucup, asep

// **2. for..of pada String**
const nama = 'violet'; // String sebagai iterable

for (const n of nama) {
    console.log(n); // Iterasi setiap karakter string dan mencetaknya
}
// Output: v, i, o, l, e, t

// **3. for..of dengan Method entries()**
// Method `entries()` menghasilkan pasangan indeks dan nilai
for (const [i, m] of mhs.entries()) {
    console.log(`${m} adalah mahasiswa ke ${i + 1}`);
}
// Output: 
// fadil adalah mahasiswa ke 1
// ucup adalah mahasiswa ke 2
// asep adalah mahasiswa ke 3

// **4. for..of pada NodeList**
// Misalnya, kita memiliki elemen HTML <ul> dengan class `.name`
// const liName = document.querySelectorAll('.name'); 
// NodeList adalah kumpulan elemen DOM yang bisa diiterasi

// for (const n of liName) {
//     console.log(n.innerHTML); // Mencetak konten teks dari setiap elemen dalam NodeList
// }

// **5. for..of pada Arguments (Iterable)**
function jumlahkanAngka() {
    let total = 0; // Inisialisasi total
    for (const angka of arguments) { 
        // arguments adalah iterable yang berisi semua argumen fungsi
        total += angka; // Menjumlahkan semua argumen
    }
    return total; // Mengembalikan total
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5)); 
// Output: 15 (penjumlahan semua angka)
