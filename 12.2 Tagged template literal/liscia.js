// 1. Tagged Template Literal: Fungsi yang "menandai" template literal dan memodifikasi output-nya
// Fungsi tagTemplate menerima string array dan ekspresi sebagai parameter
function tagTemplate(strings, ...expressions) {
    // Menggabungkan semua bagian string dan ekspresi
    let result = strings[0]; // Mulai dengan bagian pertama string
    
    // Iterasi untuk setiap ekspresi dan gabungkan dengan string
    for (let i = 0; i < expressions.length; i++) {
      result += expressions[i] + strings[i + 1];
    }
    
    // Mengembalikan hasil akhir
    return result;
  }
  
  // Menggunakan tagged template literal
  const name = "Fadil";
  const age = 20;
  const greeting = tagTemplate`Nama saya adalah ${name} dan saya berumur ${age} tahun.`;
  
  console.log(greeting);
  // Output: "Nama saya adalah Fadil dan saya berumur 20 tahun."
  
  // 2. Tagged Template Literal dengan manipulasi ekspresi
  function calc(strings, ...values) {
    return strings.reduce((result, str, i) => {
      return result + str + (values[i] * 2); // Kalikan setiap ekspresi dengan 2
    }, '');
  }
  
  const x = 5;
  const y = 10;
  const calculation = calc`Hasil dari ${x} dan ${y} setelah dikali 2 adalah:`;
  console.log(calculation);
  // Output: "Hasil dari 10 dan 20 setelah dikali 2 adalah:"
  