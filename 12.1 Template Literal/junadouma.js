// 1. Template literal dengan Interpolation: Menyisipkan variabel ke dalam string menggunakan `${}`
const name = "Fadil";
const age = 20;
console.log(`Nama saya adalah ${name} dan saya berumur ${age} tahun.`);
// Output: "Nama saya adalah Fadil dan saya berumur 20 tahun."

// 2. Multiline String: Menggunakan backticks untuk membuat string dengan banyak baris tanpa perlu `\n`
const message = `
  Halo, selamat datang!
  Ini adalah contoh penggunaan template literal.
  Semoga bermanfaat.
`;
console.log(message);
// Output:
// Halo, selamat datang!
// Ini adalah contoh penggunaan template literal.
// Semoga bermanfaat.

// 3. Expression Embedding: Menyisipkan ekspresi dalam template literal
const a = 5;
const b = 10;
console.log(`Jumlah dari ${a} dan ${b} adalah ${a + b}.`);
// Output: "Jumlah dari 5 dan 10 adalah 15."
