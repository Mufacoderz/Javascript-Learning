// JavaScript memiliki dua fase eksekusi kode:
// 1. Creation Phase (Fase Pembuatan)
// 2. Execution Phase (Fase Eksekusi)

// Penjelasan fase:

// 1. Creation Phase (Global Context):
// - JavaScript mempersiapkan ruang memori untuk semua variabel dan fungsi.
// - Variabel yang dideklarasikan dengan `var` diatur ke nilai awal `undefined`.
// - Fungsi dideklarasikan sepenuhnya (hoisted) sebagai objek yang dapat langsung dipanggil.

// 2. Execution Phase:
// - JavaScript mulai menjalankan kode baris demi baris.
// - Variabel mendapatkan nilai yang di-assign, dan fungsi dapat dipanggil sesuai alur kode.

// Contoh di bawah ini menjelaskan konsep tersebut:
console.log(nama); // Output: undefined
var nama = "mf";

// Penjelasan:
// - Pada creation phase, `var nama` dibuat dan diatur ke nilai `undefined`.
// - Pada execution phase:
//   - Baris `console.log(nama)` dijalankan terlebih dahulu. Karena nilai `nama` belum di-assign, hasilnya `undefined`.
//   - Setelah itu, baris `var nama = "mf";` dijalankan, sehingga `nama` diberi nilai "mf".

// Hal ini disebut HOISTING:
// - Deklarasi variabel dan fungsi diangkat ke bagian atas (hoisted) dalam scope-nya masing-masing.
// - Namun, variabel dengan `var` hanya diangkat dengan nilai `undefined`.
// - Fungsi diangkat sepenuhnya sebagai objek yang dapat langsung dipanggil.

// Perbedaan dengan fungsi:
// Fungsi juga melalui creation dan execution phase. Namun, fungsi memiliki **local execution context**.
// Di dalamnya, berlaku creation dan execution phase untuk variabel/fungsi lokal.

// Contoh dengan fungsi:
var name = "muhammad fadil";
var username = "@mfadil";

function cetakURL(username) {
    var instaURL = "http://instagram.com/"; // Dibuat di local execution context
    return instaURL + username; // Local `username` digunakan di sini
}

console.log(cetakURL(username)); // Output: "http://instagram.com/@mfadil"

// Penjelasan:
// - Pada creation phase:
//   - Global context: `var name`, `var username`, dan `function cetakURL` dibuat.
//   - `name` dan `username` diatur ke `undefined`.
//   - `function cetakURL` diangkat sepenuhnya.
// - Pada execution phase:
//   - `name` diberi nilai "muhammad fadil".
//   - `username` diberi nilai "@mfadil".
//   - `console.log(cetakURL(username))` memanggil fungsi `cetakURL`.
//   - Local execution context untuk `cetakURL` dibuat:
//     - `instaURL` dibuat dengan nilai "http://instagram.com/".
//     - Parameter `username` berisi nilai "@mfadil" (nilai dari variabel global `username`).
//     - Fungsi mengembalikan "http://instagram.com/@mfadil".

// Tips untuk memahami:
// - Gunakan tools seperti [JavaScript Visualizer](http://pythontutor.com/javascript.html) untuk melihat proses hoisting secara visual.
// - Selalu ingat bahwa variabel `var` hanya di-hoist dengan nilai `undefined` di creation phase.
