// Constructor Functions

// são responsáveis por construir novos objetos sempre que chamamos a mesma

// function Carro() {
//     this.marca = 'Marca'
//     this.preco = 0
// }

// const honda = new Carro()
// honda.marca = 'Honda'
// honda.preco = 4000

// const fiat = new Carro()
// fiat.marca = 'Fiat'
// fiat.preco = 3000

// new Keyword -> a palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela

// const honda = new Carro() // abaixo o passo a passo do new

// 1 cria um novo objeto
// honda = {}

// 2 define o protótipo
// honda.prototype = Carro.prototype

// 3 aponta a variável this para o objeto
// this = honda

// 4 executa a função, substituindo this pelo objeto
// honda.marca = 'Marca'
// honda.preco = 0

// é uma função que retorna um valor, mas este valor a ser retornado é um objeto, com propriedades e métodos que podem ser definidos dentro dela

// Parâmetros e Argumentos

function Carro(marca, preco) {
    this.marca = marca
    this.preco = preco
}

const honda = new Carro('Honda', 4000)
const fiat = new Carro('Fiat', 3000)

// this Keyword -> o this faz referência ao próprio objeto construído com a Constructor Function

function Carro2(marca, precoInicial) {
    const taxa = 1.2
    const precoFinal = precoInicial * taxa
    this.marca = marca
    this.preco = precoFinal
    console.log(this)
}

const mazda = new Carro2('Mazda', 5000)

// variáveis dentro da Constructor estão "protegidas"