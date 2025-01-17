//  class Shape {
//             paint(){
//                 console.info("Paint Shape")
//             }
//         }

//         class Circle extends Shape{
//             paint(){    //jika paint dideklarasikan ulang maka methodnya yg ada dicircle akan menutupi method parent/shape, sehingga jika paintnya dipanggil maka paint yg circle yg akan terpanggil, bukan shape
//                 super.paint();   //memanggil paint() method parent class //untuk memanggil method parent menggunakan kata kunci super.
//                 console.info("paint Circle")
//             }
//         }

//         const circle = new Circle();
//         circle.paint();





// Parent class `Shape` dengan satu method `paint`.
class Shape {
    paint() {
      console.info("Paint Shape"); // Menampilkan pesan dari method `paint` di parent class.
    }
  }
  
  // Child class `Circle` yang mewarisi dari class `Shape`.
  class Circle extends Shape {
    // Override method `paint` di class `Circle`.
    paint() {
      // Memanggil method `paint` dari parent class `Shape` menggunakan `super`.
      super.paint(); 
      console.info("paint Circle"); // Menampilkan pesan dari method `paint` di class `Circle`.
    }
  }
  
  // Membuat instance dari class `Circle`.
  const circle = new Circle();
  
  // Memanggil method `paint` pada instance `circle`.
  // Karena method `paint` di class `Circle` menimpa method parent-nya (override),
  // method yang ada di class `Circle` akan dipanggil.
  circle.paint();
  