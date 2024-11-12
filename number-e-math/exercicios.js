// retorne um número aleatório entre 1050 e 2000

const min = 1050
const max = 2000

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// retorne o maior número da lista abaixo

const numeros = '4, 5, 20, 8, 9'

const numerosArray = numeros.split(', ')

// MINHA TENTATIVA (não sabia dos 3 pontinhos)

// let maiorNumero = 0

// numerosArray.forEach((item) => {
//     let numero = +item
//     if (numero > maiorNumero) {
//         maiorNumero = numero
//     }
// })

// console.log(maiorNumero)

console.log(Math.max(...numerosArray))

// crie uma função para limpar os preços e retornar os números com centavos arredondados, depois retorne a soma total

const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230, ', 'r$ 200']

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
    preco = +preco.toFixed(2)
    return preco
}

let soma = 0

listaPrecos.forEach((preco) => {
    soma += limparPreco(preco)
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))