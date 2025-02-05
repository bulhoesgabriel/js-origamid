// Crie uma função que verifique corretamente o tipo de dado

const frutas = ['Banana']

const carro = {
    ano: 2014,
    marca: 'Toyota',
}

const nome = 'Gabriel'

function verificarTipo(dado) {
    return Object.prototype.toString.call(dado)
}

console.log(verificarTipo(frutas), verificarTipo(carro), verificarTipo(nome))

// Crie um objeto quadrado com a propriedade lados e torne ela imutável

const quadrado = {}

Object.defineProperties(quadrado, {
    lados: {
        value: 4,
    }
})

// Previna qualquer mudança no objeto abaixo

const configuracao = {
    width: 800,
    height: 600,
    background: '#333',
}

Object.freeze(configuracao)

// Liste o nome de todas as propriedades do protótipo de String e Array

console.log(Object.getOwnPropertyNames(Array.prototype))
console.log(Object.getOwnPropertyNames(String.prototype))