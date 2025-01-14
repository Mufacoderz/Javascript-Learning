
// // const methodMahasiwa = {
// //     makan : function (porsi){
// //         this.energi += porsi;
// //         console.log(`halo ${this.nama}, selamat makan`)
// //     },

// //     main : function (jam){
// //         this.energi -= jam;
// //         console.log(`halo ${this.nama}, selamat bermain`)
// //     },
// //     tidur : function (jam){
// //         this.energi += jam * 2;
// //         console.log(`halo ${this.nama}, selamat tidur`)
// //     }
// // }

// // function Mahasiswa (nama, energi){
// //     let mahasiswa = Object.create(methodMahasiwa);
// //     mahasiswa.nama = nama;
// //     mahasiswa.energi = energi;

// //     return mahasiswa;
// // }

// // let ucup = Mahasiswa('ucup', 10);
// // let asep = Mahasiswa('asep', 20);




// function Mahasiswa (nama, energi){
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `halo ${this.nama}, selamat bermain`
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat mangan`
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam * 2;
//     return `halo ${this.nama}, selamat turu`
// }
// let fadil = new Mahasiswa('fadil', 100)


//versi class
class Mhs {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    main = function(jam){
        this.energi -= jam;
        return `halo ${this.nama}, selamat bermain`
    }
    makan = function(porsi){
        this.energi += porsi;
        return `halo ${this.nama}, selamat mangan`
    }
    tidur = function(jam){
        this.energi += jam * 2;
        return `halo ${this.nama}, selamat turu`
    }
}

let fadil = new Mhs('fadil', 10)
let fadul = new Mhs('fadul', 50)

