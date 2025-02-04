// Fungsi umum untuk melakukan fetch dengan penanganan error
async function fetchData(url, options = {}) {
    try {
        // Melakukan fetch dengan URL dan opsi tambahan (default kosong)
        const response = await fetch(url, options);

        // Memeriksa apakah response sukses
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Mengonversi response ke JSON dan mengembalikan hasilnya
        return await response.json();

    } catch (error) {
        // Menangani error yang terjadi selama proses fetch
        console.error("Fetch error:", error.message);
        throw error; // Melempar ulang error agar bisa ditangani di tempat lain
    }
}

// Contoh penggunaan untuk mengambil data (GET request)
async function getPost(postId) {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    try {
        const data = await fetchData(url);
        console.log("Data post:", data);
    } catch (error) {
        console.error("Gagal mengambil data post:", error.message);
    }
}

// Contoh penggunaan untuk mengirim data (POST request)
async function createPost(newPost) {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const data = await fetchData(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost),
        });
        console.log("Post berhasil dibuat:", data);
    } catch (error) {
        console.error("Gagal membuat post:", error.message);
    }
}

// Contoh pemanggilan fungsi
getPost(1); // Mengambil data post dengan ID 1
createPost({ title: "Belajar Fetch Refactor", body: "Modular dan reusable", userId: 1 });

/*
=========================================
          PENJELASAN FETCH REFACTOR
=========================================

1. **Apa Itu Refactoring?**
   - Refactoring adalah proses merapikan dan meningkatkan kualitas kode tanpa mengubah fungsionalitasnya.
   - Tujuannya untuk membuat kode lebih modular, reusable, dan mudah dipahami.

2. **Mengapa Perlu Refactor `fetch`?**
   - **Mengurangi duplikasi kode**: Menggunakan satu fungsi `fetchData()` untuk menangani semua request.
   - **Mudah digunakan kembali**: Bisa dipakai untuk berbagai jenis request (GET, POST, PUT, DELETE).
   - **Error handling yang lebih baik**: Semua error ditangani di satu tempat.

3. **Struktur Kode Setelah Refactor**
   - **`fetchData(url, options)`**
     - Fungsi utama untuk melakukan fetch.
     - Bisa menangani berbagai metode HTTP.
     - Menangani error dengan `try...catch`.
   - **`getPost(postId)`**
     - Mengambil data post berdasarkan ID.
     - Memanggil `fetchData()` dengan metode GET.
   - **`createPost(newPost)`**
     - Mengirim data baru ke server.
     - Memanggil `fetchData()` dengan metode POST dan mengirimkan `body`.

4. **Keuntungan Refactor Fetch**
   - **Konsistensi** → Semua request mengikuti pola yang sama.
   - **Mudah diperluas** → Bisa ditambahkan fitur lain (misal autentikasi).
   - **Lebih bersih** → Mengurangi kode berulang (DRY - Don't Repeat Yourself).
   - **Error handling terpusat** → Semua error ditangani di satu tempat.

5. **Menambahkan Fitur Tambahan**
   - **Autentikasi Token**
     ```javascript
     async function fetchData(url, options = {}) {
         const token = "your-auth-token"; // Simpan token di sini
         options.headers = {
             ...options.headers,
             Authorization: `Bearer ${token}`, // Tambahkan header Authorization
         };
         return fetchData(url, options);
     }
     ```
   - **Loading Indicator**
     ```javascript
     async function getPost(postId) {
         console.log("Loading...");
         try {
             const data = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}`);
             console.log("Data post:", data);
         } finally {
             console.log("Selesai loading.");
         }
     }
     ```

=========================================
*/
