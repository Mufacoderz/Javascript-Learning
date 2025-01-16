// Arrow function adalah cara menulis fungsi dengan sintaks yang lebih singkat.
// Contoh fungsi biasa:
function add(a, b) {
    return a + b;
  }
  
  // Arrow function menulis fungsi yang sama dengan sintaks lebih singkat:
  const addArrow = (a, b) => a + b;
  
  // Penjelasan sintaks arrow function:
  // 1. `(a, b)` adalah parameter yang diterima oleh fungsi.
  // 2. `=>` menunjukkan bahwa ini adalah arrow function.
  // 3. `a + b` adalah nilai yang dikembalikan secara langsung (implicit return) jika tidak menggunakan `{}`.
  
  // Jika arrow function memiliki satu parameter, tanda kurung () dapat dihilangkan:
  const square = x => x * x; // Sama dengan: function square(x) { return x * x; }
  
  // Jika ada lebih dari satu baris di dalam fungsi, gunakan `{}` dan tambahkan `return` secara eksplisit:
  const multiply = (a, b) => {
    const result = a * b; // Baris tambahan
    return result; // Perlu ditulis secara eksplisit
  };
  
  // Arrow function TIDAK memiliki `this` sendiri:
  // Di dalam arrow function, `this` merujuk pada konteks di mana fungsi itu didefinisikan, bukan di mana fungsi itu dipanggil.
  const obj = {
    value: 42,
    regularFunction: function () {
      console.log(this.value); // `this` merujuk ke `obj`
    },
    arrowFunction: () => {
      console.log(this.value); // `this` merujuk ke konteks luar dari `obj`, bukan ke `obj` itu sendiri
    },
  };
  
  obj.regularFunction(); // Output: 42
  obj.arrowFunction(); // Output: undefined (karena `this` merujuk ke konteks luar)
  
  // Contoh penggunaan umum arrow function (misalnya, di array method):
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map(num => num * 2); // Menggandakan setiap angka dalam array
  console.log(doubled); // Output: [2, 4, 6, 8]
  