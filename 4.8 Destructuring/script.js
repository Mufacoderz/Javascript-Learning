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





// // Array Destructuring: Mengambil nilai dari array dan menyimpannya dalam variabel baru.
// const num = [1, 2, 3, 4, 5];

// // Mengambil elemen-elemen dari array `num` ke dalam variabel `first`, `second`, dll.
// const [first, second, third, fourth, fifth] = num;

// // Menampilkan nilai dari variabel `second` (nilai elemen kedua dari array `num`).
// console.log(second); // Output: 2

// // Object Destructuring: Mengambil nilai dari objek ke dalam variabel baru.
// const person = {
//   name: 'ucup', // Key `name` memiliki nilai 'ucup'
//   age: 111,     // Key `age` memiliki nilai 111
//   city: 'united' // Key `city` memiliki nilai 'united'
// };

// // Mengambil nilai dari key dalam objek `person` ke variabel baru.
// // - `name`, `age` sesuai dengan nama key.
// // - `city` dirubah menjadi variabel `kota` menggunakan sintaks `city:kota`.
// const { name, age, city: kota } = person;

// // Menampilkan




// **1. Array Destructuring**
const numbers = [10, 20, 30, 40, 50];
// Destructuring elemen array ke dalam variabel
const [first, second, third] = numbers;
console.log(`First: ${first}, Second: ${second}, Third: ${third}`);
// Output: First: 10, Second: 20, Third: 30

// **2. Object Destructuring**
const person = {
  name: 'Fadil',
  age: 25,
  city: 'Jakarta'
};
// Destructuring properti objek ke dalam variabel
const { name, age, city: kota } = person;
console.log(`Nama: ${name}, Umur: ${age}, Kota: ${kota}`);
// Output: Nama: Fadil, Umur: 25, Kota: Jakarta

// **3. Function Destructuring dengan Array**
function sumArray([num1, num2]) {
  return num1 + num2; // Akses elemen array melalui parameter
}
console.log(`Sum of array: ${sumArray([5, 15])}`);
// Output: Sum of array: 20

// **4. Function Destructuring dengan Object**
function introduce({ name, age, city }) {
  return `Hello, my name is ${name}, I am ${age} years old and I live in ${city}.`;
}
console.log(introduce(person));
// Output: Hello, my name is Fadil, I am 25 years old and I live in Jakarta.

// **5. Function Destructuring dengan Default Value**
function getConfig({ host = 'localhost', port = 8080 } = {}) {
  return `Server is running at ${host}:${port}`;
}
console.log(getConfig({ host: '127.0.0.1', port: 3000 }));
// Output: Server is running at 127.0.0.1:3000
console.log(getConfig()); 
// Output: Server is running at localhost:8080

// **6. Destructuring Kombinasi (Array dan Object)**
function processOrder([id, quantity], { productName, price }) {
  const total = quantity * price;
  return `Order ID: ${id}, Product: ${productName}, Quantity: ${quantity}, Total: ${total}`;
}

const order = [101, 3];
const product = { productName: 'Laptop', price: 5000 };
console.log(processOrder(order, product));
// Output: Order ID: 101, Product: Laptop, Quantity: 3, Total: 15000
