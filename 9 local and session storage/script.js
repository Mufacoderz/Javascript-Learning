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

// Menyimpan data ke sessionStorage
sessionStorage.setItem("sessionUser", "Fadil");

// Mengambil data dari sessionStorage
let sessionUser = sessionStorage.getItem("sessionUser");
console.log("User dari sessionStorage:", sessionUser);

// Menghapus item tertentu dari sessionStorage
sessionStorage.removeItem("sessionUser");

// Menghapus semua item dari sessionStorage
// sessionStorage.clear(); // Uncomment untuk menghapus semua data
