// Menyimpan data ke localStorage
localStorage.setItem("username", "MufaCoderz"); // Menyimpan string
localStorage.setItem("theme", "dark"); // Menyimpan string

// Menyimpan objek ke localStorage (harus dikonversi ke string JSON terlebih dahulu)
const user = {
    name: "MufaCoderz",
    age: 20,
    role: "Developer"
};
localStorage.setItem("user", JSON.stringify(user)); // Menyimpan objek sebagai JSON

// Mengambil data dari localStorage
let username = localStorage.getItem("username"); // Mengambil string
console.log("Username dari localStorage:", username);

// Mengambil dan mengonversi kembali objek dari JSON
let userData = localStorage.getItem("user");
if (userData) {
    userData = JSON.parse(userData); // Mengonversi JSON ke objek JavaScript
    console.log("User Data dari localStorage:", userData);
}

// Menghapus item tertentu dari localStorage
localStorage.removeItem("theme");

// Menghapus semua item dari localStorage
// localStorage.clear(); // Uncomment untuk menghapus semua data dari localStorage

/*
    Penjelasan tentang localStorage:
    ----------------------------------
    1. localStorage adalah bagian dari Web Storage API yang memungkinkan penyimpanan data secara lokal di browser.
    2. Data yang disimpan di localStorage tidak akan terhapus meskipun halaman dimuat ulang atau browser ditutup.
    3. localStorage hanya bisa menyimpan data dalam bentuk string.
    4. Jika ingin menyimpan objek atau array, data harus dikonversi ke format JSON dengan JSON.stringify().
    5. Data bisa diambil kembali dengan localStorage.getItem() dan jika berupa objek, perlu dikonversi kembali dengan JSON.parse().
    6. Untuk menghapus data, bisa menggunakan localStorage.removeItem("key") untuk menghapus item tertentu,
       atau localStorage.clear() untuk menghapus semua data yang tersimpan.
    7. localStorage memiliki kapasitas penyimpanan sekitar 5-10MB per origin (domain).
    8. localStorage hanya bisa diakses oleh halaman dengan domain yang sama karena mengikuti aturan Same-Origin Policy.
*/
