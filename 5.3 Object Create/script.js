// // cara membuat object

// //1. object literal
// let dataMahasiswa = {
//     nama : 'Muhammad Fadil',
//     nim : '2441919016',
//     prodi : 'Sistem Informasi',
//     email : 'Mufacoders@gmail.com'
// }
// console.log(dataMahasiswa)

//2. Menggunakan function



const methodMahasiwa = {
    makan : function (porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`)
    },

    main : function (jam){
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat bermain`)
    },
    tidur : function (jam){
        this.energi += jam * 2;
        console.log(`halo ${this.nama}, selamat tidur`)
    }
}

function Mahasiswa (nama, energi){
    let mahasiswa = Object.create(methodMahasiwa);//kalau ditambahkan object create ini, maka tidak perlu menghubungkan method secara manual seperti di komentar bawah
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    // mahasiswa.makan = methodMahasiwa.makan;
    // mahasiswa.main = methodMahasiwa.main;
    // mahasiswa.tidur = methodMahasiwa.tidur;

    return mahasiswa;
}

let ucup = Mahasiswa('ucup', 10);
let asep = Mahasiswa('asep', 20);