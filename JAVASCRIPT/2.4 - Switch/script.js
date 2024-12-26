var item = prompt('pilih satu makanan atau minuman dibawah ini \n (Nasi, sayur, daging, susu, burger, cola, beer atau genderuwo panggang )');
//versi ringkas
switch(item){
    case 'nasi':
    case 'sayur':
    case 'daging':
    case 'susu':
        alert('Anda memilih makanan/minuman SEHAT');
        break;
    case 'burger':
    case 'cola':
    case 'beer':
        alert('anda memilih makanan/minuman TIDAK SEHAT');
        break;
    case 'genderuwo panggang':
        alert('bjir');
        break;
    default:
        alert('anda memasukkan pilihan yang salah')
}

//versi panjang

// switch(item){
//     case 'nasi':
//         alert('Anda memilih makanan/minuman SEHAT');
//         break;
//     case 'sayur':
//         alert('Anda memilih makanan/minuman SEHAT');
//         break;
//     case 'daging':
//         alert('Anda memilih makanan/minuman SEHAT');
//         break;
//     case 'susu':
//         alert('Anda memilih makanan/minuman SEHAT');
//         break;
//     case 'burger':
//         alert('anda memilih makanan/minuman TIDAK SEHAT');
//         break;
//     case 'cola':
//         alert('anda memilih makanan/minuman TIDAK SEHAT');
//         break;
//     case 'beer':
//         alert('anda memilih makanan/minuman TIDAK SEHAT');
//         break;
//     case 'genderuwo panggang':
//         alert('bjir');
//         break;
//     default:
//         alert('anda memasukkan pilihan yang salah')
// }