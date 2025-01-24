// Meminta pengguna untuk memasukkan angka menggunakan prompt.
// Input dari prompt selalu berupa string, jadi jika ingin memastikan angka, perlu dilakukan konversi (contohnya: Number(prompt(...))).
var angka = prompt("Masukkan angka");

// Memeriksa apakah angka yang dimasukkan merupakan bilangan genap, ganjil, atau bukan angka.

// Jika angka habis dibagi 2 (sisa bagi == 0), maka angka tersebut adalah bilangan genap.
if (angka % 2 == 0) {
    alert("Angka " + angka + " adalah bilangan genap"); // Menampilkan pesan bahwa angka adalah bilangan genap.
} 
// Jika angka tidak habis dibagi 2 (sisa bagi == 1), maka angka tersebut adalah bilangan ganjil.
else if (angka % 2 == 1) {
    alert("Angka " + angka + " adalah bilangan ganjil"); // Menampilkan pesan bahwa angka adalah bilangan ganjil.
} 
// Jika input bukan angka (misalnya pengguna memasukkan teks atau angka desimal), maka program masuk ke kondisi ini.
else {
    alert(angka + " bukan angka"); // Menampilkan pesan bahwa input bukan angka.
}

// ---------- Penjelasan Tambahan ----------

// 1. Fungsi prompt:
//    - prompt() digunakan untuk menerima input dari pengguna dalam bentuk string.
//    - Jika input berupa angka, tetapi tidak dikonversi (misalnya Number(prompt())), hasilnya tetap dianggap string.

// 2. Operasi Modulus (%):
//    - Operator modulus (%) digunakan untuk mendapatkan sisa hasil bagi.
//    - Jika hasil dari angka % 2 adalah 0, maka angka tersebut habis dibagi 2 (bilangan genap).
//    - Jika hasil dari angka % 2 adalah 1, maka angka tersebut tidak habis dibagi 2 (bilangan ganjil).

// 3. Validasi Input:
//    - Kondisi terakhir (`else`) menangani kasus ketika input bukan angka, seperti string atau karakter khusus.
//    - Untuk validasi lebih ketat, Anda dapat menggunakan fungsi `isNaN()` untuk memeriksa apakah input adalah angka.
//      Contoh:
//      if (isNaN(angka)) {
//          alert(angka + " bukan angka");
//      }
