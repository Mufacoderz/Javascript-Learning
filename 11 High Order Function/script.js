// `kerjakanTugas` adalah high-order function karena menerima fungsi `selesai` sebagai argumen.
function kerjakanTugas(matkul, selesai) {
    console.log(`Mulai mengerjakan tugas matkul ${matkul}`); // Menampilkan pesan awal
    selesai(); // Memanggil callback function `selesai`
  }
  
  // `selesai` adalah callback function yang dijalankan oleh high-order function `kerjakanTugas`.
  function selesai() {
    alert('selesai mengerjakan tugas'); // Menampilkan alert saat tugas selesai
  }
  
  // Memanggil `kerjakanTugas` dengan parameter nama mata kuliah dan fungsi `selesai`.
  kerjakanTugas('algoritma', selesai);
  


  
 // `ucapkanSalam` adalah high-order function karena mengembalikan fungsi lain.
function ucapkanSalam(waktu) {
    // Fungsi yang dikembalikan memiliki akses ke parameter `waktu` (closure).
    return function (nama) {
      // Fungsi ini menggunakan parameter `waktu` dan `nama`.
      console.log(`halo ${nama}, selamat ${waktu}, semoga harimu seninn terus!`);
    };
  }
  
  // `ucapkanSalam('malam')` mengembalikan fungsi yang "mengingat" nilai `waktu = 'malam'`.
  // Fungsi ini disimpan dalam variabel `selamatMalam`.
  let selamatMalam = ucapkanSalam('malam');
  
  // Memanggil fungsi `selamatMalam` dengan parameter `nama = 'fadil'`.
  console.dir(selamatMalam('fadil'));
  // Output: "halo fadil, selamat malam, semoga harimu seninn terus!"
  