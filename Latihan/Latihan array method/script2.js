let angka = [1, -1, 2, -3, -4, 5, 6, 7, -9];

let angkaPositif = angka.filter( num => {
    return num > 0;
});
console.log(angkaPositif.join(' , '));

let angkaNegatif = angka.filter( num => {
    return num < 0;
});
console.log(angkaNegatif.join(' , '));




let namaMahasiswa = ['ageng', 'ajeng', 'ujang', 'Sumanto', 'sugeng', 'ucup', 'asep', 'josep'];

let namaAwalA = namaMahasiswa.filter( nameA => {
    return nameA.startsWith('a');
});
console.log(namaAwalA.join(' - '));

let namaLimaHuruf = namaMahasiswa.filter( name5 => {
    return name5.length == 5;
});
console.log(namaLimaHuruf.join(' , '));