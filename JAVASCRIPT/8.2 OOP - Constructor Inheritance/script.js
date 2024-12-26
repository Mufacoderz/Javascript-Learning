//consturctor inheritance / pewarisan

function Employee(firstName){
    this.firstName = firstName;
    this.sayHello = function (name){
        console.log(`hi ${name}, my name is ${firstName}`)
    }
}

function Manager(firstName, lastName){
    this.lastName = lastName;
    Employee.call(this, firstName); //memanggil employee dan di send ke manager, kalau tanpa ini maka consolelog yg muncul hanya lastName sahaja
}

const eko = new Manager('eko', 'santoso');
console.log(eko);