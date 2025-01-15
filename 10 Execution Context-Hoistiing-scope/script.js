// eksekusi context adsa 2 fase

//1 creation
//2 excetution

console.log(nama)
var nama = "mf"

//creation phase pada global context
//js mengecek duluan apakah ada variabel atau function di codingan
//nama var = undefined
//nama function = fn()
//hal di atas disebut hoisting



//execution phase
//ketika console log nama maka hasilnya undefined, ketika di load ulang baru nilainya "mf", karena console duluan sebelum deklarasi var...urutan eksekusinya yaitu console log nama (nama masiih belum ada nilai maka undefined), lalu nama nya di dkelarasi kan menjadi "mf" maka saat di load ulang bsudah tersimpan var nama = "mf" sehingga saat di console baru hasilnya mf bukan undefined
// tapi kalau function... funcction membuat local execution context...yg didalamnya terdapat creation dan execution phase juga




