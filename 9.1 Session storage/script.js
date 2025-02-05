
// Menyimpan data ke sessionStorage
sessionStorage.setItem("sessionUser", "Fadil");

// Mengambil data dari sessionStorage
let sessionUser = sessionStorage.getItem("sessionUser");
console.log("User dari sessionStorage:", sessionUser);

// Menghapus item tertentu dari sessionStorage
sessionStorage.removeItem("sessionUser");

// Menghapus semua item dari sessionStorage
// sessionStorage.clear(); // Uncomment untuk menghapus semua data
