// Number -> é a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.

const ano = 2018
// const preco = new Number(99)

// Number.isNaN() -> é um método de Number, ou seja, não faz parte do protótipo.

Number.isNaN(NaN) // true
Number.isNaN(4+5) // false

// Number.isInteger() -> verifica se é uma integral.

Number.isInteger(20) // true
Number.isInteger(23.6) // false

// Number.parseFloat() -> serve para retornarmos um número a partir de uma string. A string deve começar com um número.

parseFloat('99.50') // mesma função sem o Number
Number.parseFloat('99.50') // 99.5
Number.parseFloat('R$ 100') // NaN

// Number.parseInt() -> recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

parseInt('99.50', 10) // 99
parseInt(5.43434355555, 10) // 5
Number.parseInt('100 Reais', 10) // 100

// Decimal em JavaScript se utiliza ponto, não vírgula.

// Float possui decimal, Integer não.

// n.toFixed(decimais) -> arredonda o número com base no total de casas decimais do argumento.

// n -> algum número. Nesse caso não estamos utilizando o Number.

const preco = 2.99
preco.toFixed() // 3

const carro = 1000.455
carro.toFixed(2) // 1000.46

const preco2 = 1499.49
preco2.toFixed() // 1499

console.log((99.999).toFixed()) // 100 -> funciona utilizando parênteses.

// toFixed() retorna uma string, não um número.

// n.toString(radix) -> transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

const num = 2.99
num.toString(10) // '2.99'

// n.toLocaleString(lang, options) -> formata o número de acordo com a língua e opções passadas.

let valor = 59.49
valor.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) // $59.49
valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // R$ 59,49
valor.toLocaleString('en-US', {style: 'currency', currency: 'BRL'}) // R$59.49

// Math -> é um objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

Math.PI // 3.141592653589793
Math.E // 2.718281828459045
Math.LN10 // 2.302585092994046

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

const Matematica = {
    PI: 3.14,                // Math.PI seria isso porém já nativo do JavaScript
}

// Math.abs() -> retorna o valor absoluto, ou seja, transforma negativo em positivo.
// Math.ceil() -> arredonda para cima, retornando sempre uma integral e floor para baixo.
// Math.round() -> arredonda para o número integral mais próximo.

Math.abs(-5.5)// 5.5
Math.ceil(4.8334) // 5
Math.ceil(4.3) // 5
Math.floor(4.8334) // 4(Math.floor(4.3)) // 4
Math.round(4.8334) // 5
Math.round(4.3) // 4

// Math.max() -> retorna o maior número de uma lista de argumentos.
// Math.min() -> retorna o menor.
// Math.random() -> retorna um número aleatório entre 0 e 1.

Math.max(5,3,10,42,2) // 42
Math.min(5,3,10,42,2) // 2
Math.random() // 0.XXX
console.log(Math.floor(Math.random() * 100)) // entre 0 e 100
console.log(Math.floor(Math.random() * 500)) // entre 0 e 500

// Número random entre 72 e 32

Math.floor(Math.random() * (72 - 32 + 1)) + 32 // Math.floor(Math.random() * (max - min + 1)) + min