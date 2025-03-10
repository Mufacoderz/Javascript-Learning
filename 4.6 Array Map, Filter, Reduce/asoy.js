//         // map() melakukan transformasi setiap elemen array dan menyimpannya ke array baru
//         // filter() melakukan array filter degn kondisi tertentu
//         // reduce() menghasilkan satu akumulasi nilai dengan iterasi setiap elemen array

//         const numbers = [1,2,3,4,5,6,7,8,9];

//         //map
//         const doubleNumbers = numbers.map(number => number * 2);
//         console.log(doubleNumbers)

//         //filter
//         const genap = numbers.filter(num => num %2 === 0);
//         console.log(genap)
        
//         //reduce
//         const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
//         console.log(sum)




// Array `numbers` berisi angka 1 sampai 9
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// **map()**: Transformasi setiap elemen dalam array `numbers` dengan mengalikannya dengan 2.
// Hasilnya disimpan di array baru `doubleNumbers`.
const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18]

// **filter()**: Memfilter elemen dalam array `numbers` yang genap (`num % 2 === 0`).
// Hasilnya adalah array baru `genap` yang hanya berisi angka genap.
const genap = numbers.filter(num => num % 2 === 0);
console.log(genap); // Output: [2, 4, 6, 8]

// **reduce()**: Mengakumulasi semua elemen dalam array `numbers` menjadi satu nilai (jumlah total).
// `accumulator` adalah nilai yang terus bertambah, dan `currentValue` adalah elemen saat ini.
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 45
