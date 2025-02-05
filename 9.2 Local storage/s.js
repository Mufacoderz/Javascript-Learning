// Menyimpan data ke localStorage
localStorage.setItem("username", "MufaCoderz");
localStorage.setItem("theme", "dark");

// Mengambil data dari localStorage
let username = localStorage.getItem("username");
console.log("Username dari localStorage:", username);

// Menghapus item tertentu dari localStorage
localStorage.removeItem("theme");

// Menghapus semua item dari localStorage
// localStorage.clear(); // Uncomment untuk menghapus semua data
