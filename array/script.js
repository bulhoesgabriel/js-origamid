// Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

// const instrumentos = ['Guitarra', 'Baixo', 'Violão']

// const precos = [49, 99, 69, 89]

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }]

// Construção de Arrays -> toda array herda os métodos e propriedades do protótipo do construtor Array.

// const carros = new Array('Corola', 'Mustang', 'Honda')

// console.log(carros[1]) // Mustang

// carros[2] = 'Ferrari'

// console.log(carros)

// carros[10] = 'Parati'

// console.log(carros.length) // 11

// Os valores das array's não são estáticos.

// Array.from() -> é um método utilizado para transformaar array-like objects em uma array

// const li = document.querySelectorAll('li')

// console.log(li)

// const arrayLi = Array.from(li)

// console.log(arrayLi)

// const obj = {
//     0: 'Andre',
//     1: 'Rafael',
//     2: 'Teste',
//     length: 3,
// }

// console.log(obj)

// const objArray = Array.from(obj)

// console.log(objArray)

// Array.isArray() -> verifica se o valor passado é uma array e retorna um valor booleano.

// console.log(Array.isArray(li))
// console.log(Array.isArray(arrayLi))
// console.log(Array.isArray(obj))
// console.log(Array.isArray(objArray))


// Array.of(), Array() e new Array() -> verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave new não é necessária para utilizar o construtor Array.

// console.log(Array.of(10), Array.of(1,2,3,4), new Array(5), Array(5), Array(1,2,3,4)) // [10], [1,2,3,4], [,,,,], [,,,,], [1,2,3,4]


// Métodos modificadores [].sort() -> retornam um valor e modificam a array original. [].sort() organiza pelo unicode.

// const instrumentos = ['Guitarra', 'Baixo', 'Violão']
// const idades = [32, 21, 33, 43, 1, 12, 8]

// instrumentos.sort()
// idades.sort()

// console.log(instrumentos, idades)

// [].unshift() -> adiciona elementos ao ínicio da array e retorna o length da mesma.

// [].push() -> adiciona elementos ao final da array e retorna o length da mesma.

// const carros = ['Ford', 'Fiat', 'VW']

// console.log(carros.unshift('Honda', 'Kia'))
// console.log(carros)
// console.log(carros.push('Ferrari'))
// console.log(carros)

// [].shift() -> remove o primeiro elemento da array e retorna o mesmo.

// [].pop() -> remove o último elemento da array e retorna o mesmo.

// const primeiroCarro = carros.shift()

// console.log(primeiroCarro, carros)

// const ultimoCarro = carros.pop()

// console.log(ultimoCarro, carros)

// [].reverse() -> inverte os itens da array e retorna a nova array.

// const carros = ['Ford', 'Fiat', 'VW', 'Honda']

// console.log(carros.reverse())

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(numeros.reverse())

// [].splice(index, remover, item1, item2, ...) -> adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).

// console.log(carros.splice(2, 1, 'Fusca')) // []

// console.log(carros)

// [].copyWithin(alvo, inicio, final) -> a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de ínicio e final, ele irá utilizar como início o 0 e final o valor total da arary.

const itens = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']

// console.log(itens)

// console.log(itens.copyWithin(2, 0, 2)) // ["Item 1", "Item 2", "Item 1", "Item 2", "Item 5"]

// console.log(itens.copyWithin(-1)) // ["Item 1", "Item 2", "Item 3", "Item 4", "Item 1"]

// [].fill(valor, inicio, final) -> preenche a array com o valor, do início até o fim.

// console.log(itens.fill('Banana')) // ["Banana", "Banana", "Banana", "Banana", "Banana"]

// console.log(itens.fill('Banana', 1)) // ["Item 1", "Banana", "Banana", "Banana", "Banana"]

// console.log(itens.fill('Banana', 0, 2)) // ["Banana", "Banana", "Item 3", "Item 4", "Item 5"]

// Métodos de Acesso -> não modificam a array original, apenas retornam uma array modificada.

// [].concat() -> irá concatenar a array com o valor passado.

// const transporte1 = ['Barco', 'Avião']
// const transporte2 = ['Carro', 'Moto']
// const transportes = transporte1.concat(transporte2)

// console.log(transportes) // ["Barco", "Avião", "Carro", "Moto"]

// const maisTransportes = [].concat(transporte1, transporte2, 'Van')

// console.log(maisTransportes) // ["Barco", "Avião", "Carro", "Moto", "Van"]

// [].includes(valor) -> verifica se a array possui o valor e retorna true ou false.

// [].indexOf(valor) -> verifica se a array possui o valor e retorna o index do primeiro valor na array.

// [].lastIndexOf(valor) -> retorna o index do último.

// const linguagens = ['html', 'css', 'js', 'php', 'python', 'js']

// console.log(linguagens.includes('css')) // true
// console.log(linguagens.includes('ruby')) // false
// console.log(linguagens.indexOf('python')) // 4
// console.log(linguagens.indexOf('js')) // 2
// console.log(linguagens.lastIndexOf('js')) // 5

// [].join(separador) -> junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

const linguagens = ['html', 'css', 'js', 'php', 'python']

// console.log(linguagens.join()) // 'html,css,js,php,python'
// console.log(linguagens.join('')) // 'htmlcssjsphppython'
// console.log(linguagens.join(' ')) // 'html css js php python'
// console.log(linguagens.join('-_-')) // 'html-_-css-_-js-_-php-_-python'

// let htmlString = '<h2>Título Principal</h2>'

// htmlString = htmlString.split('h2')

// console.log(htmlString) // ["<", ">Título Principal</", ">"]

// htmlString = htmlString.join('h1')

// console.log(htmlString) // '<h1>Título Principal</h1>'

// [].slice(inicio, final) -> retorna os itens da array começando pelo início e indo até o valor de final.

console.log(linguagens.slice(3)) // ["php", "python"]
console.log(linguagens.slice(1, 4)) // ["css", "js", "php"]

const cloneLinguagens = linguagens.slice()

console.log(cloneLinguagens) // ["html", "css", "js", "php", "python"]