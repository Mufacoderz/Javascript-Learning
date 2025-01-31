// Async/Await: Cara modern menangani operasi asynchronous dengan lebih bersih dan mudah dibaca

// Fungsi async memungkinkan kita menggunakan kata kunci await di dalamnya
async function fetchData() {
    // Menggunakan fetch untuk mengambil data dari server
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    // Mengonversi response ke format JSON
    let data = await response.json();
    
    // Menampilkan data yang berhasil diambil
    console.log("Async/Await Data:", data);
}

// Memanggil fungsi async
fetchData();

// Fungsi async lainnya untuk mengambil data dari URL yang diberikan
async function fetchDataFromUrl(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log("Data dari URL:", data);
}

// Contoh pemanggilan fungsi dengan URL lain
fetchDataFromUrl('https://jsonplaceholder.typicode.com/posts/2');
