function addName(name){
    return name;
}
console.log(addName('Muhammad Fadil'))



function penjumlahanBilangan(bil1, bil2){
    let hasil;
    hasil = bil1 + bil2;
    return hasil;
}
console.log(penjumlahanBilangan(15, 40))

function rumusKubus(sisi){
    let volume = sisi * 3;
    return volume;
}
console.log(rumusKubus(7))



//refactoring atau di persingkat... bandingkan aja yang rumusKubus dngan rumusCube
function rumusCube(s){
    return s * 3;
}
console.log(rumusCube(3))