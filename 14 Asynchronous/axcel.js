// Contoh penggunaan asynchronous programming di JavaScript

// 1. Menggunakan setTimeout untuk simulasi operasi asynchronous
console.log("Mulai"); // Baris ini akan dieksekusi lebih dulu

setTimeout(() => {
  console.log("Ini dijalankan setelah 2 detik (asynchronous)");
}, 2000); // Fungsi ini akan dieksekusi setelah 2 detik

console.log("Selesai"); // Baris ini akan dieksekusi sebelum setTimeout selesai

// 2. Menggunakan Promise untuk menghandle asynchronous operation
const fetchData = () => {
  // Promise digunakan untuk mengelola operasi asynchronous dengan dua kemungkinan hasil: resolve (berhasil) atau reject (gagal).
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulasi kondisi berhasil atau gagal
      if (success) {
        resolve("Data berhasil diambil!");
      } else {
        reject("Gagal mengambil data.");
      }
    }, 2000);
  });
};

// Menggunakan .then() dan .catch() untuk menangani Promise
fetchData()
  .then((message) => {
    console.log(message); // Output jika Promise berhasil
  })
  .catch((error) => {
    console.error(error); // Output jika Promise gagal
  });

// 3. Menggunakan async/await untuk menulis kode asynchronous secara lebih mudah dibaca
const fetchDataAsync = async () => {
  try {
    const result = await fetchData(); // Tunggu hingga Promise selesai
    console.log(result); // Output jika Promise berhasil
  } catch (error) {
    console.error(error); // Output jika Promise gagal
  }
};

fetchDataAsync();

// Penjelasan:
// - "setTimeout" digunakan untuk menunda eksekusi kode selama beberapa waktu.
// - "Promise" adalah cara modern untuk menangani operasi asynchronous.
// - "async/await" adalah syntax yang lebih mudah dibaca untuk menangani Promise.
// Latihan ini menunjukkan urutan eksekusi asynchronous dan bagaimana menangani hasilnya.