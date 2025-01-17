// class Employee {

//     constructor(firstName){
//         this.firstName = firstName;
//     }
//     sayHello(firstName){
//         console.log(`Hi ${firstName}, my name is employee ${this.firstName}`);
//     }

// }
// class Manager extends Employee{
    
//     constructor(firstName, lastName){
//         super(firstName);   //jika membuat constructor di childnya wajib menggunakan super, walaupun diparentnya tidak ada consturctor   //tidak perlu this.firstname lgi karena sudah dideklarasikan di constructor parentnya, yaitu employee
//         this.lastName = lastName;
//     }
//     sayHello(firstName){
//         console.log(`Hi ${firstName}, my name is employee ${this.firstName} ${this.lastName}`);
//     }

// }
//         const budi = new Employee("budi");
//         budi.sayHello("joko")

//         const eko = new Manager("eko", "gunawan");
//         eko.sayHello("joko")

//         console.log(budi);
//         console.log(eko);




// Class `Employee` sebagai parent class
class Employee {
    constructor(firstName) {
      // Properti `firstName` diinisialisasi melalui constructor
      this.firstName = firstName;
    }
  
    // Method `sayHello` untuk menyapa
    sayHello(firstName) {
      console.log(`Hi ${firstName}, my name is employee ${this.firstName}`);
    }
  }
  
  // Class `Manager` sebagai child class yang mewarisi dari `Employee`
  class Manager extends Employee {
    constructor(firstName, lastName) {
      // Memanggil constructor dari parent class `Employee`
      super(firstName); // Wajib memanggil `super()` karena ada constructor di child class
  
      // Properti `lastName` diinisialisasi hanya di class `Manager`
      this.lastName = lastName;
    }
  
    // Override method `sayHello` untuk menambahkan fitur menyapa dengan nama lengkap
    sayHello(firstName) {
      console.log(
        `Hi ${firstName}, my name is employee ${this.firstName} ${this.lastName}`
      );
    }
  }
  
  // Membuat instance dari class `Employee` dan memanggil method-nya
  const budi = new Employee("budi");
  budi.sayHello("joko"); // Output: "Hi joko, my name is employee budi"
  
  // Membuat instance dari class `Manager` dan memanggil method-nya
  const eko = new Manager("eko", "gunawan");
  eko.sayHello("joko"); // Output: "Hi joko, my name is employee eko gunawan"
  
  // Menampilkan objek `budi` dan `eko`
  console.log(budi); // Output: Employee { firstName: 'budi' }
  console.log(eko);  // Output: Manager { firstName: 'eko', lastName: 'gunawan' }
  

