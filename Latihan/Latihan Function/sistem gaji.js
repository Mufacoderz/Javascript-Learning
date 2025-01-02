let nama = prompt('Masukkan nama anda');
let gajiPerhari = prompt('Berapa gaji perhari anda');
let jumlahHariMasukKerja = prompt('jumlah hari masuk kerja');

function totalGajiSebulan(nama, gajiPerhari, jumlahHariMasukKerja){
    let totalGaji = gajiPerhari * jumlahHariMasukKerja;
    return totalGaji;
}
alert('Atas nama '+ nama + ', memiliki gaji perhari = Rp.'+ gajiPerhari + ' dan total gajinya ialah = Rp.' + totalGajiSebulan(nama, gajiPerhari, jumlahHariMasukKerja));


//Belum Selesai