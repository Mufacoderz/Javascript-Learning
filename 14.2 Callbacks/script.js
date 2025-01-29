// Callback adalah fungsi yang dikirimkan sebagai argumen ke fungsi lain,
// kemudian dipanggil di dalam fungsi tersebut untuk menjalankan aksi tertentu.


//synchronous callback

// function halo(nama) {
//     alert(`Halo, ${nama}!`);
// }

function tampilkanPesan(callback) {
    // Meminta pengguna memasukkan nama
    const nama = prompt('Masukkan nama:');
    // Memanggil fungsi callback dengan argumen nama
    callback(nama);
}

tampilkanPesan(nama => alert(`Halo, ${nama}!`));


//contoh lain
function greet(name, callback) {
    console.log("Halo, " + name);
    callback();
}

function done() {
    console.log("Selesai!");
}

greet("Fadil", done);
// Output:
// Halo, Fadil
// Selesai!


//Asynchronous callback
// Data mahasiswa
const mhs = [
    {
        "nama": "Muhammad Fadil",
        "nim": "2441919016",
        "email": "mufacoderz@example.com",
        "jurusan": "Sistem Informasi"
    },
    {
        "nama": "Aisyah Putri",
        "nim": "2441919023",
        "email": "aisyah.putri@example.com",
        "jurusan": "Teknik Informatika"
    },
    {
        "nama": "Budi Santoso",
        "nim": "2441919034",
        "email": "budi.santoso@example.com",
        "jurusan": "Manajemen Informatika"
    },
    {
        "nama": "Rina Sari",
        "nim": "2441919041",
        "email": "rina.sari@example.com",
        "jurusan": "Sistem Informasi"
    },
    {
        "nama": "Dian Saputra",
        "nim": "2441919056",
        "email": "dian.saputra@example.com",
        "jurusan": "Teknik Komputer"
    }
];

// Fungsi async yang menampilkan nama mahasiswa dengan delay
const showName = async (m) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(m.nama);
            resolve();
        }, 1000); // Simulasi proses asynchronous dengan delay 1 detik
    });
};

// Fungsi async yang memproses setiap mahasiswa secara asynchronous
const processMahasiswa = async () => {
    for (const m of mhs) {
        await showName(m);
    }
};

// Panggil fungsi async untuk mengeksekusi callback
processMahasiswa();

/*
Penjelasan:
1. `showName` adalah fungsi asynchronous yang mengembalikan `Promise` dan menggunakan `setTimeout` untuk mensimulasikan proses async.
2. `processMahasiswa` menggunakan `for...of` untuk mengiterasi setiap mahasiswa dan menunggu (`await`) eksekusi `showName` selesai sebelum melanjutkan ke mahasiswa berikutnya.
3. `await` digunakan agar proses berjalan satu per satu dengan jeda 1 detik, meniru perilaku asynchronous seperti pengambilan data dari API.
*/


//contoh lain
function greet(name, callback) {
    setTimeout(() => {
        console.log("Halo, " + name);
        callback();
    }, 2000); // Simulasi delay 2 detik
}

function done() {
    console.log("Selesai!");
}

greet("Fadil", done);
// Output setelah 2 detik:
// Halo, Fadil
// Selesai!
