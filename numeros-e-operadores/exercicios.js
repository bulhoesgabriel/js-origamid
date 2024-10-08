// qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20 // 35
console.log(total)

// crie duas expressões que retornem NaN
var frase = "it's on"
console.log(+frase)

var nome = "gabriel"
console.log(-nome)

// somar a string '200' com o número 50 e retornar 250
var string = '200'
var numero = 50
console.log(+string + numero)

// incremente o número 5 e retorne o seu valor incrementado
var incremento = 5
console.log(++incremento)

// como dividir o peso por 2?
var num = '80'
var uni = 'kg'
var peso = num + uni // '80kg'
var pesoPorDois = peso / 2 // NaN
console.log(peso, pesoPorDois)

var pesoPorDois = +num / 2 + uni
console.log(pesoPorDois)