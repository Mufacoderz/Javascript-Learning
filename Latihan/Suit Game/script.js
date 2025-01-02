let ulang = true;
while(ulang) {
//Menetukan pilihan
    let player = prompt('Pilih gunting, batu, atau kertas');
    let botCompt = Math.random();

    if(botCompt < 0.33){
        botCompt = 'gunting';
    }
    else if(botCompt >= 0.33 && botCompt <0.77){
        botCompt = 'batu';
    }
    else{
        botCompt = 'kertas';
    }

    //Menentukan rules
    let hasil = '';
    if(player == botCompt){
        hasil = 'Seri';
    }
    else if(player == 'gunting'){
        hasil =(botCompt == 'kertas') ? 'Menang' : 'Kalah';
    }
    else if(player == 'kertas'){
        hasil =(botCompt == 'batu') ? 'Menang' : 'Kalah';
    }
    else if (player == 'batu'){
        hasil =(botCompt == 'gunting') ? 'Menang' : 'Kalah';
    }
    else {
        hasil = 'Kamu memasukkan pilihan yang salah';
    }


    //Menentukan hasil
    alert('Kamu memilih ' + player + ' dan komputer memilih ' + botCompt + '\n Maka hasilnya kamu ' + hasil);

    ulang = confirm('main lagi?');

}

alert('Terima Kasih sudah bermain');