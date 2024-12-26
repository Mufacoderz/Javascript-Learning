// cara membuat object

//1. object literal
let dataMahasiswa = {
    nama : 'Muhammad Fadil',
    nim : '2441919016',
    prodi : 'Sistem Informasi',
    email : 'Mufacoders@gmail.com'
}
console.log(dataMahasiswa)

//2. Menggunakan function
function objectDataMahasiswa(nama, nim, prodi, email){
    let data = {};
    data.nama = nama;
    data.nim = nim;
    data.prodi = prodi;
    data.email = email;
    return data;
}
console.log(objectDataMahasiswa('Muhammad Fadil', '2441919016', 'sistem informasi', 'mufacoders@gmail.com'))
console.log(objectDataMahasiswa('Ucup Kidal', '2441919000', 'informatika', 'ucupcoders@gmail.com'))

//3. constructor
function dataMhs(nama, nim, prodi, email){
    this.nama = nama;
    this.nim = nim;
    this.prodi = prodi;
    this.email = email;
}
// console.log(new dataMhs('Uciha Yanto', '2441919000', 'gfdvafdg@gmail.com'))
let mahasiswa = new dataMhs('Uciha Yanto', '2441919000', 'gfdvafdg@gmail.com');
console.log(mahasiswa)