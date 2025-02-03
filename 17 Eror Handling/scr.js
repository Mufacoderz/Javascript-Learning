//errors javascript

try{
    const result = prompt('masukkan angka: ')
    if(result > 10){
        throw "angka terlalu banyak"
    }
}catch(err){
    console.log(err)
}