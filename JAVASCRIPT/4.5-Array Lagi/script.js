let fruit = ['🥑', '🍓', '🍉', '🍎', '🍇']
let fruitChoose = prompt('pilih satu buah 🥑, 🍓, 🍉, 🍎 atau 🍇')
let choose = fruit.includes(fruitChoose)

if(choose){
    let choosePosition = fruit.indexOf(fruitChoose)
    let indexBefore = choosePosition - 1
    let indexAfter = choosePosition + 1

    alert('buah '+ fruitChoose +' berada di dalam array fruit dan berada di posisi index ke ' + choosePosition)
    alert('sebelum buah '+ fruitChoose +' ada buah ' + fruit[indexBefore])
    alert('setelah buah '+ fruitChoose +' ada buah ' + fruit[indexAfter])

    let firstFruit = fruit.shift()
    let lastFruit = fruit.pop()

    alert('buah pertama dalam array fruit adalah ' + firstFruit)
    alert('buah terakhir dalam array fruit adalah ' + lastFruit)
}
else{
    alert('buah '+ fruitChoose +' tidak berada didalam array fruit')
}