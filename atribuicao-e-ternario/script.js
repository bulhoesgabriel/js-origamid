// operadores de atribuição

// podem funcionar como formas abreviadas

var x = 5
var y = 10
console.log(x += y) // x = x + y
console.log(x -= y) // x = x - y
console.log(x *= y) // x = x * y
console.log(x /= y) // valor não bateu com o do slide
console.log(x %= y) // valor não bateu com o do slide
console.log(x **= y) // x = x ** y

var numero = 20

var numero2 = 10

console.log(numero /= numero2)

// operador ternário

// abreviação de condicionais com if e else

var idade = 18

var naoPossuiDiabetes = false

var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber'

console.log(podeBeber)

// condição ? true : false

// geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição

// if abreviado -> não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

var possuiFaculdade = true

if(possuiFaculdade) console.log('Possui faculdade')
else console.log('Não possui faculdade')

// ou

// if(possuiFaculdade)
//     console.log('Possui faculdade')
// else
//     console.log('Não possui faculdade')