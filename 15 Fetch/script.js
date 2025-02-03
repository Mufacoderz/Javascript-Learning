// Menggunakan fetch untuk mengambil data dari API
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        // Mengecek apakah response sukses (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Mengonversi response ke format JSON
    })
    .then(data => {
        console.log("Data yang diambil:", data); // Menampilkan data yang diperoleh
    })
    .catch(error => {
        console.error("Terjadi kesalahan saat mengambil data:", error.message);
    })
    .finally(() => {
        console.log("Proses fetch selesai.");
    });

/*
=========================================
          PENJELASAN FETCH API
=========================================

1. **Apa Itu Fetch?**
   - `fetch()` adalah metode bawaan JavaScript untuk mengambil data dari server melalui HTTP request.
   - Menggunakan Promise sehingga bersifat asynchronous.

2. **Struktur Dasar Fetch**
   ```javascript
   fetch(url)
       .then(response => response.json()) // Mengonversi response ke JSON
       .then(data => console.log(data))  // Menggunakan data yang diperoleh
       .catch(error => console.error("Error:", error));
