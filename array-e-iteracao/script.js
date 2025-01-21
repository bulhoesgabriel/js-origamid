// Array e Iteração

// [].forEach(calllback(itemAtual, index, array)) -> a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).

// const carros = ['Ford', 'Fiat', 'Honda']

// carros.forEach(function(item, index, array) {
//     console.log(item.toUpperCase())
// })

// com Arrow Function

// carros.forEach((item, index, array) => {
//     array[index] = 'teste'
//     console.log(item, index, array)
// })

// o método sempre retorna undefined

// Arrow Function

// const li = document.querySelectorAll('li')

// li.forEach(i => i.classList.add('ativa')) // assim também funciona

// não precisa de parênteses no parâmetro pois estamos passando apenas um

// console.log(li)

// Modificar a array original -> o terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original

// const carros = ['Ford', 'Fiat', 'Honda']

// carros.forEach((item, index, array) => {
//     array[index] = 'Carro ' + item
// })

// console.log(carros) // ["Carro Ford", "Carro Fiat", "Carro Honda"]

// é melhor utilizarmos o map pra isso

// [].map(callback(itemAtual, index, array)) -> funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração

// const newCarros = carros.map((item) => {
//     return 'Carro ' + item
// })

// console.log(carros, newCarros) // ["Ford", "Fiat", "Honda"], ["Carro Ford", "Carro Fiat", "Carro Honda"]

// Retorno do [].forEach()

// const retornoForEach = li.forEach((i) => {i.classList.add('ativa')})

// console.log(retornoForEach) // undefined

// Retorno do [].map()

// const novaArray = carros.map((item, index, array) => {
//     console.log(item.toUpperCase(), index, array)
// })

// console.log(novaArray) // [undefined, undefined, undefined] pois não definimos o return

// const novaArray = carros.map((item, index, array) => {
//     console.log(item.toUpperCase(), index, array)
//     return item
// })

// console.log(novaArray[1] = 'teste') // teste
// console.log(novaArray) // ["Ford", "teste", "Honda"]
// console.log(carros) // ["Ford", "Fiat", "Honda"]

// o map vai servir para isso, para retornar uma array com os valores modificados

// Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>

// const numeros = [2, 4, 5, 6, 78]

// const numerosX2 = numeros.map(n => n * 2) // quando não tem as chaves {} é retorno direto

// console.log(numerosX2) // [4, 8, 10, 12, 156]

// [].map() vs [].forEach() -> se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.

// const numeros = [2, 4, 6, 8, 10, 12, 14]

// const numerosX3 = numeros.map(n => n * 3)

// console.log(numerosX3) // [6, 12, 18, 24, 30, 36, 42]

// [].map() com Objetos

// const aulas = [
//     {
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 10
//     },
//     {
//         nome: 'CSS 1',
//         min: 20
//     },
//     {
//         nome: 'JS 1',
//         min: 25
//     },
// ]

// const tempoAulas = aulas.map((aula) => aula.min)

// console.log(tempoAulas) // [15, 10, 20, 25]

// const nomeAulas = (aula) => aula.nome // const nomeAulas = function(aula) { return aula.nome }

// const arrayNomeAulas = aulas.map(nomeAulas)

// console.log(arrayNomeAulas) // ["HTML 1", "HTML 2", "CSS 1", "JS 1"]

// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) -> executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

// const aulas = [10, 25, 30]

// const total1 = aulas.reduce((acumulador, atual) => {
//     return acumulador + atual
// })

// console.log(total1) // 65

// const total2 = aulas.reduce((acumulador, atual) => acumulador + atual, 100)

// console.log(total2) // 165

// Maior Valor com [].reduce()

// const numeros = [10, 25, 60, 5, 35, 10]

// const maiorValor = numeros.reduce((anterior, atual) => {
//     return anterior < atual ? atual : anterior
// })

// console.log(maiorValor) // 60

// // seria o mesmo de fazer assim

// const maiorNumero = numeros.reduce((anterior, atual) => {
//     if (anterior < atual) {
//         return atual
//     } else {
//         return anterior
//     }
// })

// console.log(maiorNumero)

// podemos retornar outros valores

// const aulas = [
//     {
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 10
//     },
//     {
//         nome: 'CSS 1',
//         min: 20
//     },
//     {
//         nome: 'JS 1',
//         min: 25
//     },
// ]

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//     console.log(aula)
//     acumulador[index] = aula.nome
//     return acumulador
// }, {})

// [].reduceRight() -> começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

// const frutas = ['Abacaxi', 'Melancia', 'Limão']

// const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta)
// Limão Melancia Abacaxi
// const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta)
// Abacaxi Melancia Limão

// [].some() -> se pelo menos um return da iteração for truthy, ele retorna true

// const temLimao = frutas.some((item) => {
//     console.log(item)
//     return item === 'Limão'
// })

// console.log(temLimao)

// [].every() -> se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for false ele irá retornar false.

// const frutas = ['Banana', 'Pêra', 'Uva', '']

// const every = frutas.every((fruta) => {
//     return fruta
// })

// console.log(every) // false, pois pelo menos uma fruta está vazia '', o que é um valor falsy

// const numeros = [6, 43, 22, 88, 101, 29]

// const maiorQueCinco = numeros.every(x => x > 5)

// console.log(maiorQueCinco) // true

// [].find() -> retorna o valor atual da primeira iteração que retornar um valor truthy.

// const numeros = [6, 43, 22, 88, 101, 29]

// const buscaMaior45 = numeros.find(x => x > 45) // 88

// // [].findIndex() -> ao invés de retornar o valor, retorna o index deste valor na array.

// const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã']

// const buscaUva = frutas.findIndex((fruta) => {
//     return fruta === 'Uva'
// }) // 2

// [].filter() -> retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

// const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã']

// const arrayLimpa = frutas.filter((fruta) => {
//     return fruta
// }) // ['Banana', 'Uva', 'Maçã']

// const numeros = [1, 5, 10, 15, 20, 25, 30]

// const maiorQue10 = numeros.filter(x => x > 10) // [15, 20, 25, 30]

// console.log(maiorQue10)

// filter em objetos

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const maiores15 = aulas.filter(aula => aula.min > 15)

console.log(maiores15)