// Promise adalah objek yang mewakili operasi yang sedang berjalan atau akan selesai di masa depan
// Promise memiliki tiga status utama:
// 1. Pending  -> Saat proses masih berjalan
// 2. Fulfilled -> Saat proses berhasil (resolve terpanggil)
// 3. Rejected -> Saat proses gagal (reject terpanggil)

// Membuat sebuah Promise dasar
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Ubah ke false untuk mensimulasikan error
    
    setTimeout(() => {
        if (success) {
            resolve("Data berhasil diambil"); // Jika sukses, panggil resolve
        } else {
            reject("Terjadi kesalahan"); // Jika gagal, panggil reject
        }
    }, 2000); // Simulasi delay 2 detik
});
