//   //mengambil nilai dari array atau objk menjadi variabel baru
//   const num = [1,2,3,4,5]
//   const [first, second, third, fourth, fifth] = num
//   console.log(second)

//   const person = {
//       name: 'ucup',
//       age: 111,
//       city: 'united'
//   }
//   const {name, age, city:kota} = person   //deklarase variabelnya harus sesuai keyname di objeknya, kalau mau dirubah maka tinggal keyname:namaVariabelBaru, contohnya city:kota
//   console.log(name)
//   console.log(kota)





// Array Destructuring: Mengambil nilai dari array dan menyimpannya dalam variabel baru.
const num = [1, 2, 3, 4, 5];

// Mengambil elemen-elemen dari array `num` ke dalam variabel `first`, `second`, dll.
const [first, second, third, fourth, fifth] = num;

// Menampilkan nilai dari variabel `second` (nilai elemen kedua dari array `num`).
console.log(second); // Output: 2

// Object Destructuring: Mengambil nilai dari objek ke dalam variabel baru.
const person = {
  name: 'ucup', // Key `name` memiliki nilai 'ucup'
  age: 111,     // Key `age` memiliki nilai 111
  city: 'united' // Key `city` memiliki nilai 'united'
};

// Mengambil nilai dari key dalam objek `person` ke variabel baru.
// - `name`, `age` sesuai dengan nama key.
// - `city` dirubah menjadi variabel `kota` menggunakan sintaks `city:kota`.
const { name, age, city: kota } = person;

// Menampilkan
