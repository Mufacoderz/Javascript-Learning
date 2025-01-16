// Closure adalah sebuah fungsi yang "mengingat" lingkungan (lexical scope) tempat ia didefinisikan
// bahkan setelah lingkungan tersebut tidak lagi aktif.

function createCounter() {
    // Variabel `count` berada di dalam scope fungsi `createCounter`
    let count = 0;
  
    // Fungsi `increment` adalah closure karena ia memiliki akses ke variabel `count`
    // meskipun `createCounter` sudah selesai dieksekusi
    return function increment() {
      count++; // `increment` dapat mengakses dan mengubah variabel `count`
      return count;
    };
  }
  
  // Ketika kita memanggil `createCounter`, ia mengembalikan fungsi `increment`
  // dan "mengikat" variabel `count` ke fungsi tersebut
  const counter1 = createCounter();
  const counter2 = createCounter();
  
  console.log(counter1()); // Output: 1 (count di dalam `counter1` meningkat)
  console.log(counter1()); // Output: 2 (count di dalam `counter1` meningkat lagi)
  
  console.log(counter2()); // Output: 1 (count di dalam `counter2` terpisah dari `counter1`)
  console.log(counter2()); // Output: 2 (count di dalam `counter2` meningkat)
  
  