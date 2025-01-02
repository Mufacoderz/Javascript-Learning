let buah = ['apel', 'anggur', 'durian', 'mangga', 'pepaya']

//.length = mentotalkan jumlah elemen di dalam array

console.log(buah.length);

//.join = menggabungkan seluruh isi array dan menjadikan string

console.log(buah.join(' - '));
//buah.join('tanda pemisah')

//.push = menambah elemen array di akhir array
//.pop = menghapus elemen array terakhir


buah.push('nangka', 'manggis');
console.log(buah.join(', '));

buah.pop();
console.log(buah.join(', '));

//.unshift = menambah elemen di awal array
//.shift = menghapus elemen di awal array

buah.unshift('salak', 'lengkeng', 'gomu-gomu no mi', 'mera-mera no mi', 'ban bekas');
console.log(buah.join(', '));

buah.shift();
console.log(buah.join(', '));

//.splice = menambah elemen array ditengah tengah
//rumusnya array.splice(indexAwal, mauDiHapusBerapa, elemenbaru, elemenBaru,....)

buah.splice(2, 0, 'pisang', 'jambu');
console.log(buah.join(', '));



