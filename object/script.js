// Object

// Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.

// const carro = {
//     marca: 'Ford',
//     ano: 2018,
// }

// const pessoa = new Object({
//     nome: 'André',
//     idade: 28,
// })

// console.log(carro, pessoa)

// Métodos de Object

// Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

// const carro = {
//     rodas: 4,
//     init(marca) {
//         this.marca = marca
//         return this
//     },
//     acelerar() {
//         return `${this.marca} acelerou as ${this.rodas} rodas`
//     },
//     buzinar() {
//         return this.marca + ' buzinou'
//     }
// }

// const honda = Object.create(carro)

// console.log(honda.init('Honda').acelerar())

// const ferrari = Object.create(carro).init('Ferrari')

// console.log(ferrari.init('Ferrari').buzinar())

// Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

// const funcaoAutomovel = {
//     acelerar() {
//         return 'acelerou'
//     },
//     buzinar() {
//         return 'buzinou'
//     },
// }

// const moto = {
//     rodas: 2,
//     capacete: true,
// }

// const carro = {
//     rodas: 4,
//     mala: true,
// }

// Object.assign(moto, funcaoAutomovel)
// Object.assign(carro, funcaoAutomovel)

// console.log(moto)
// console.log(carro)

// Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

// const moto = {}

// Object.defineProperties(moto, {
//     rodas: {
//         value: 2,
//         configurable: false, // impede de deletar e mudança de valor
//         enumarable: true, // torna enumerável
//     },
//     capacete: {
//         value: true,
//         configurable: true,
//         writable: false, // impede mudança de valor
//     },
// })

// moto.rodas = 4 // não funciona pois deixamos essa propriedade inconfigurável

// console.log(moto)

// Get e Set

// É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos obj.propriedade = 'Valor' a função de set é ativada.

// const moto = {}

// Object.defineProperties(moto, {
//     velocidade: {
//         get() {
//             return this._velocidade // o _ é necessário para não conflitar com a propriedade velocidade
//         },
//         set(valor) {
//             this._velocidade = 'Velocidade ' + valor
//         }
//     },
// })

// moto.velocidade = 200

// console.log(moto)

// Object.getOwnPropertyDescriptors(obj)

// Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.

// Object.getOwnPropertyDescriptors(Array) // Lista com métodos e propriedades de Array

// Object.getOwnPropertyDescriptors(Array.prototype) // Lista com métodos e propriedades do protótipo de Array

// Object.getOwnPropertyDescriptors(window, 'innerHeight') // Puxa de uma única propriedade

// const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight')

// console.log(innerHeightConfig.configurable) // true

// Object.keys(obj) -> Retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto.

// Object.values(obj) -> Retorna uma array com os valores do objeto.

// Object.entries(obj) -> Retorna uma array com array's contendo a chave e o valor.

// console.log(Object.keys(Array)) // [] vazia, pois não possui propriedades enumeráveis

// const carro = {
//     marca: 'Ford',
//     ano: 2018,
// }

// console.log(Object.keys(carro)) // ["marca", "ano"]

// console.log(Object.values(carro)) // ["Ford", "2018"]

// console.log(Object.entries(carro)) // [["marca", "ano"], ["Ford", "2018"]]

// Object.getOwnPropertyNames(obj) -> Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

// console.log(Object.getOwnPropertyNames(Array)) // ["isArray", "from", "fromAsync", "of", "prototype", "length", "name"]

// console.log(Object.getOwnPropertyNames(Array.prototype)) // [..., 'filter, 'map', 'every', 'some', 'reduce', ...]

// console.log(Object.getOwnPropertyNames(carro)) // ["marca", "ano"]

// Object.getPrototypeOf() -> Retorna o protótipo do objeto.

// Object.is(obj1, obj2) -> Verifica se os objetos são iguais e retorna true ou false.

// const frutas = ['Banana', 'Pêra']

// console.log(Object.getPrototypeOf(frutas)) // Array, mesma coisa de console.log(Array.prototype)

// console.log(Object.getPrototypeOf('')) // String

// const frutas1 = ['Banana', 'Pêra']
// const frutas2 = ['Banana', 'Pêra']

// console.log(Object.is(frutas1, frutas2)) // false, apesar dos valores iguais não são referências ao mesmo objeto

// const novaFrutas1 = frutas1

// console.log(Object.is(frutas1, novaFrutas1)) // true

// Object.freeze() -> Impede qualquer mudança nas propriedades.

// Object.seal() -> Previne a adição de novas propriedades e impede que as atuais sejam deletadas.

// Object.preventExtensions() -> Previne a adição de novas propriedades.

// const carro = {
//     marca: 'Ford',
//     ano: '2018',
// }

// Object.freeze(carro)
// Object.seal(carro)
// Object.preventExtensions(carro)

// carro.portas = 4 // não funciona

// console.log(carro, Object.isFrozen(carro), Object.isSealed(carro), Object.isExtensible(carro)) // {"marca: Ford", "ano: 2018"}, true, true, false

// Propriedades e Métodos do Protótipo

// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.

// const frutas = ['Banana', 'Uva']

// console.log(frutas.constructor) // Array

// const frase = 'Isso é uma String'

// console.log(frase.constructor) // String

// {}.hasOwnProperty('prop') -> Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo.

// {}.propertyIsEnumerable('prop') -> Verifica se a propriedade é enumerável.

// const frutas = ['Banana', 'Uva']

// console.log(frutas.hasOwnProperty('map')) // false
// console.log(Array.hasOwnProperty('map')) // false
// console.log(Array.prototype.hasOwnProperty('map')) // true
// console.log(Array.prototype.propertyIsEnumerable('map')) // false
// console.log(window.propertyIsEnumerable('innerHeight')) // true

// {}.isPrototypeOf(valor) -> Verifica se é o protótipo do valor passado.

// const frutas = ['Banana', 'Uva']

// console.log(Array.prototype.isPrototypeOf(frutas)) // true

// {}.toString() -> Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).

const frutas = ['Banana', 'Uva']
console.log(frutas.toString()) // 'Banana,Uva'
console.log(typeof frutas) // object
console.log(Object.prototype.toString.call(frutas)) // [object Array]

const frase = 'Uma String'
console.log(frase.toString()) // 'Uma String'
console.log(typeof frase) // string
console.log(Object.prototype.toString.call(frase)) // [object String]

const carro = {marca: 'Ford'}
console.log(carro.toString()) // [object Object]
console.log(typeof carro) // object
console.log(Object.prototype.toString.call(carro)) // [object Object]

const somar = function(a, b) {
    return a + b
}
console.log(somar.toString()) // 'function(a, b) { return a + b }'
console.log(typeof somar) // function
console.log(Object.prototype.toString.call(somar)) // [Object Function]

const li = document.querySelectorAll('li')
console.log(li.toString()) // [object NodeList]
console.log(typeof li) // object
console.log(Object.prototype.toString.call(li)) // [object NodeList]