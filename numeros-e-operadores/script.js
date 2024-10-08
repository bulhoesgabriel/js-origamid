var idade = 26
var gols = 1000
var pi = 3.14 // ponto para decimal
var exp = 2e10 // 20000000000

// precisão para 15 dígitos, depois de 15 ele arredonda

var soma = 100 + 50 // 150
var subtracao = 100 - 50 // 50
var multiplicacao = 100 * 2 // 200
var divisao = 100 / 2 // 50
var expoente = 2 ** 4 // 16
var modulo = 14 % 5 // 4

// lembrando que soma (+) em strings serve para concatenar

// operadores aritméticos (strings)

var somaStrings = '100' + 50 // 10050
var subtracaoStrings = '100' - 50 // 50
var multiplicacaoStrings = '100' * '2' // 200
var divisaoStrings = 'Comprei 10' / 2 // NaN (Not a Number)

// é possível verificar se uma variável é NaN com a função isNaN()

var testeNaN = 'Isso é 100' / 2

console.log(isNaN(testeNaN))

// NaN = Not a Number

var numero = 80
var unidade = 'kg'
var peso = numero + unidade // 80kg
var pesoPorDois = peso / 2 // NaN

console.log(pesoPorDois, isNaN(pesoPorDois))

// a ordem importa, parentêses para priorizar uma expressão

var total1 = 20 + 5 * 2 // 30
var total2 = (20 + 5) * 2 // 50
var total3 = 20 / 2 * 5 // 50
var total4 = 10 + 10 * 2 + 20 / 2 // 40

// operadores aritméticos unários

var incremento = 1

console.log(++incremento)

// diferente de incremento++ que é apenas a ação, o ++incremento já é o resultado da ação

// o +exemplo ou -exemplo tenta transformar o valor seguinte em número

var idade = '26'
var somaIdade = 4

console.log(+idade + somaIdade) // 30