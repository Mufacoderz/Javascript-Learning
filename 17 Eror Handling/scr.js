//errors javascript

try{
    const result = prompt('masukkan angka: ')
    if(result > 10){
        throw "angka terlalu banyak"
    }
}catch(err){
    console.error(err)
}


try {
    // Meminta pengguna memasukkan angka melalui prompt
    const result = prompt('Masukkan angka: ');

    // Konversi string ke number agar perbandingan valid
    const numberResult = Number(result);

    // Periksa apakah input adalah angka yang valid
    if (isNaN(numberResult)) {
        throw new Error("Input bukan angka!"); // Melempar error jika input bukan angka
    }

    // Jika angka yang dimasukkan lebih besar dari 10, lempar error dengan pesan tertentu
    if (numberResult > 10) {
        throw new Error("Angka terlalu banyak"); // Melempar error dengan objek Error
    }

    console.log("Input valid:", numberResult); // Jika tidak ada error, tampilkan angka yang valid

} catch (err) {
    // Menangkap error yang terjadi dalam blok try dan menjalankan kode penanganannya
    console.error("Terjadi kesalahan:", err.message); // Menampilkan pesan error di console

} finally {
    // Blok finally selalu dijalankan, baik ada error atau tidak
    console.log("Proses selesai.");
}

/*
=========================================
    PENJELASAN LENGKAP ERROR HANDLING
=========================================

1. **try { }** 
   - Blok ini digunakan untuk menulis kode yang mungkin menyebabkan error.
   - Jika terjadi error dalam blok ini, JavaScript akan melompat ke blok `catch`.

2. **throw new Error("Pesan error")**
   - Melempar error secara manual menggunakan `throw`.
   - Sebaiknya gunakan `new Error("Pesan error")` agar lebih deskriptif dibandingkan hanya string biasa.

3. **catch (err) { }**
   - Blok ini menangkap error yang dilempar dalam `try { }`.
   - `err.message` digunakan untuk mengambil pesan error.

4. **finally { }**
   - Blok ini akan selalu dijalankan, baik terjadi error maupun tidak.
   - Biasanya digunakan untuk membersihkan sumber daya seperti koneksi database, file, atau operasi lainnya.

5. **Jenis-Jenis Error dalam JavaScript:**
   - `ReferenceError` → Terjadi ketika mencoba mengakses variabel yang tidak dideklarasikan.
   - `TypeError` → Terjadi ketika melakukan operasi pada tipe data yang tidak sesuai.
   - `SyntaxError` → Terjadi jika kode memiliki kesalahan sintaks (umumnya ditemukan saat parsing).
   - `RangeError` → Terjadi jika angka berada di luar rentang yang diizinkan.

6. **Pentingnya Error Handling**
   - Mencegah crash aplikasi akibat error yang tidak tertangani.
   - Memberikan pesan error yang jelas kepada pengguna.
   - Memungkinkan pemulihan program dari error yang terjadi.

=========================================
*/
