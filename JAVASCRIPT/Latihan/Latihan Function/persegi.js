let panjang = prompt('Masukkan panjang dari persegi ');
let lebar = prompt('Masukkan lebar dari persegi ');

function luasPersegi(panjang, lebar){
    let luas;
    luas = panjang * lebar;

    return luas;
}
alert('luas dari persegi dengan panjang '+ panjang +' dan lebar ' + lebar +' adalah ' +  luasPersegi(panjang, lebar))