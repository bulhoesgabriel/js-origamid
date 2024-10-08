// arrays e loops

// array é um grupo de valores geralmente relacionados, servem para guardarmos diferentes valores em uma única variável

var videoGames = ['Switch', 'PS4', 'XBox'] // array de strings

console.log(videoGames)

console.log(videoGames[2], videoGames[0], videoGames[1]) // acesse um elemento da array utilizando [n] -> array[n]

// métodos e propriedades de uma arrayu

var ultimoItem = videoGames.pop() // remove o último item e retorna ele

console.log(ultimoItem)

videoGames.push('3DS') // adiciona ao final da array

console.log(videoGames)

videoGames.length // 3

// existem diversos outros métodos como: map, reduce, foreach e mais

// for loop -> fazem algo repetidamente até que uma condição seja atingida

for (var numero = 1; numero <= 10; numero++) {
    console.log(numero)
}                                               // retorna de 1 a 10 no console

// o for loop possui 3 partes -> (início; condição; incremento)

// cuidado com loops infinitos

// while loop

var i = 0 // nos loops vemos muito a variável i (index ou índice) -> apenas uma boa forma de declarar

while (i <= 12) {
    console.log(i)
    i = i + 2
}                   // retorna de 0 a 12, passo 2

// for loop é o mais comum

// for (var i = 0; i < videoGames.length; i++) {
//     console.log(videoGames[i])
// }

// break -> o loop para caso encontre a palavra break

for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i])
    if (videoGames[i] === 'PS4') {
        break
    }
}

// forEach -> método que executa uma função para cada item da array, é uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

videoGames.forEach(function(item) {  // o argumento item será atribuido dinamicamente
    console.log(item)
})

// podemos passar os seguintes parâmetros item, index e array

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva']

frutas.forEach(function(fruta, index, array) {
    console.log(fruta, index, array)
})

// não se confunda com a sintaxe -> exemplo doido de como não escrever mas que funciona