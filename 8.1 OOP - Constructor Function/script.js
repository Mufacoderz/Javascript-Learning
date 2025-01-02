
//cara buat objek dari constructor function

function Person() {
    this.firstName = "";
    this.lastName = "";
}

const eko = new Person();
eko.firstName = "eko";
eko.lastName = "sanjaya";

const jono = new Person();
jono.firstName = "jono";
jono.lastName = "mipopo";

console.log(eko);
console.log(jono);
//cara nambahkan properti dalam constructor function yaitu dengan this.nama = "value"




//cara buat method di  constr func

function Person2(){
    this.firstName = "";
    this.lastName = "";
    this.sayHello = function (name){   //method di constructor function
        console.log(`hello ${name}, my name is ${this.lastName}`);
    }
}

const fadil = new Person2();
fadil.firstName = "muh";
fadil.lastName = "fadil";
fadil.sayHello("messaldo");

console.log(fadil);




//parameter di constuctor function

function Person3(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name){   
        console.log(`hello ${name}, my name is ${this.lastName}`);
    }
}
const saskeh = new Person3("uciwa", "saskeh");
saskeh.sayHello("narto")
console.log(saskeh);




