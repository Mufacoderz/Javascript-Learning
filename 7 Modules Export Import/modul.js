// export function penjumlahanBilangan(a, b){
//     return a + b;
// }
// export function penguranganBilangan(a, b){
//     return a - b;
// }
// export const name = "ucup";

// //kalau default export tinggal kasih export sebelum func / var nya



//named export

function penjumlahanBilangan(a, b){
    return a + b;
}
function penguranganBilangan(a, b){
    return a - b;
}
const name = "ucup";

export {penjumlahanBilangan, penguranganBilangan, name};
