//Latihan 1.1

//var jumlahAngkot = 20;
//var noAngkot = 1;
//while(noAngkot <= jumlahAngkot){
//    console.log("Angkot No." + noAngkot + " beroperasi dengan baik");
//noAngkot++;
//}


//Latihan 1.2 

//var noAngkot = 1; 
//var jumlahAngkot = 20;
//var angkotBeroperasi =8;
//while(noAngkot <= angkotBeroperasi){    //pakai while
//    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
//noAngkot++
//}
//for(noAngkot; noAngkot <= jumlahAngkot; noAngkot++){    //pakai for
//    console.log("Angkot No. "+ noAngkot + " sedang tidak beroperasi") 
//}

//Latihan 1.3

// var noAngkot = 1;
// var jumlahAngkot = 15;
// var angkotBeroperasi =13;

// for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
//     if(noAngkot <= angkotBeroperasi){
//         console.log("Angkot No. " + noAngkot + " beroperasi dengan baik")
//     }
//     else{
//         console.log("Angkot No. "+ noAngkot + " sedang tidak beroperasi")
//     }
// }


//Latihan 1.4

var noAngkot = 1;
var jumlahAngkot = 10;
var angkotBeroperasi =6;

for(noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi && noAngkot !==5){
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
    }
    else if(noAngkot == 7 || noAngkot == 9 || noAngkot == 5){
        console.log("Angkot No. "+ noAngkot + " sedang lembur");
    }
    else{
        console.log("Angkot No. "+ noAngkot + " sedang tidak beroperasi")
    }
}