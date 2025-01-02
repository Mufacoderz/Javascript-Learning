// console.log(this)

// var a = 10;
// console.log(this.a);


//1 function
function halo(){
    console.log(this);
    console.log('halo');
}
this.halo();
//this mengembalikan nilai objek global


//2 object literal
var obj = {};
obj.halo = function(){
    console.log(this);
    console.log('halo');
}
obj.halo();
//this hanya mengembalikan objek yang bersangkutan


//3 consturctor
function hola(){
    console.log(this);
    console.log('hola');
}
var obj1 = new hola();
//this mengembailikan objek yang baru dibuat