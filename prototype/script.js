// prototype

// function Pessoa(nome, idade) {
//     this.nome = nome
//     this.idade = idade
// }

// const gabriel = new Pessoa('Gabriel', 26)

// console.log(Pessoa.prototype) // Object
// console.log(gabriel.prototype) // undefined pois gabriel é um objeto e não uma função

// funcao.prototype -> é possível adicionar novas propriedades e métodos ao objeto prototype

// Pessoa.prototype.andar = function() {
//     return this.nome + ' andou'
// }

// const gabriel = new Pessoa('Gabriel', 26)

// console.log(Pessoa.prototype)
// console.log(gabriel.prototype)

// acesso ao protótipo -> o objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor

// lembrando -> o prototype é uma propriedade de funções apenas

// __proto__ -> propriedade de busca utilizada pela engine, nunca usaremos no código

// herança de protótipo -> o objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object

// Object.prototype
// gabriel.toString()
// gabriel.isPrototypeOf()
// gabriel.valueOf()

// Construtores Nativos -> Objetos, Funções, Números, String e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.

// const pais = 'Brasil'
// const cidade = new String('Rio')

// Transformar em uma array

// const lista = document.querySelectorAll('li')

// const listaArray = Array.prototype.slice.call(lista)

// Método do Objeto vs Protótipo -> Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.

// const listaArray = Array.from(lista) // melhor do que o método acima

// console.log(Object.getOwnPropertyNames(Array)) // nos mostra no console as propriedades do objeto Array, incluindo o prototype com os seus próprios métodos e propriedades

// Apenas os Métodos do Protótipo são Herdados

// console.log([1, 2, 3].slice()) // existe
// console.log([1, 2, 3].from()) // não existe

// Entenda o Que Está Sendo Retornado -> os métodos e propriedades acessados com o . são referentes ao tipo de dado que é retornado antes desse .

const Carro = {
    marca: 'Ford',
    preco: 2000,
    acelerar() {
        return true
    }
}

console.log(typeof Carro, typeof Carro.marca, typeof Carro.preco, typeof Carro.acelerar, typeof Carro.acelerar(), typeof Carro.marca.charAt, typeof Carro.marca.charAt(0))
// object, string, number, function, boolean, function, string