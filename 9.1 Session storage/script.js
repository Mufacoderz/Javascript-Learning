// Menyimpan data ke sessionStorage
sessionStorage.setItem("username", "MufaCoderz"); // Menyimpan string
sessionStorage.setItem("theme", "dark"); // Menyimpan string

// Menyimpan objek ke sessionStorage (harus dikonversi ke string JSON terlebih dahulu)
const user = {
    name: "MufaCoderz",
    age: 20,
    role: "Developer"
};
sessionStorage.setItem("user", JSON.stringify(user)); // Menyimpan objek sebagai JSON

// Mengambil data dari sessionStorage
let username = sessionStorage.getItem("username"); // Mengambil string
console.log("Username dari sessionStorage:", username);

// Mengambil dan mengonversi kembali objek dari JSON
let userData = sessionStorage.getItem("user");
if (userData) {
    userData = JSON.parse(userData); // Mengonversi JSON ke objek JavaScript
    console.log("User Data dari sessionStorage:", userData);
}

// Menghapus item tertentu dari sessionStorage
sessionStorage.removeItem("theme");

// Menghapus semua item dari sessionStorage
// sessionStorage.clear(); // Uncomment untuk menghapus semua data dari sessionStorage

/*
    Penjelasan tentang sessionStorage:
    ----------------------------------
    1. sessionStorage adalah bagian dari Web Storage API yang memungkinkan penyimpanan data secara sementara di browser.
    2. Data yang disimpan di sessionStorage akan hilang setelah tab atau jendela browser ditutup.
    3. sessionStorage hanya bisa menyimpan data dalam bentuk string.
    4. Jika ingin menyimpan objek atau array, data harus dikonversi ke format JSON dengan JSON.stringify().
    5. Data bisa diambil kembali dengan sessionStorage.getItem() dan jika berupa objek, perlu dikonversi kembali dengan JSON.parse().
    6. Untuk menghapus data, bisa menggunakan sessionStorage.removeItem("key") untuk menghapus item tertentu,
       atau sessionStorage.clear() untuk menghapus semua data yang tersimpan.
    7. sessionStorage memiliki kapasitas penyimpanan sekitar 5MB per origin (domain).
    8. sessionStorage hanya bisa diakses oleh halaman dengan domain yang sama karena mengikuti aturan Same-Origin Policy.
*/
