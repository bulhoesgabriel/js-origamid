// existem dois valores booleanos: false ou true

// var possuiGraduacao = true
// var possuiDoutorado = false

// condicionais: if e else

// if(possuiGraduacao) {                  // o valor dentro do parênteses sempre será avaliado em false ou true
//     console.log('Possui graduação')
// } else {
//     console.log('Não possui graduação')
// }

// if(possuiDoutorado) {
//     console.log('Possui doutorado')
// } else {
//     console.log('Não possui doutorado')
// }

// condicionais else if

// if(possuiDoutorado) {
//     console.log('Possui graduação e doutorado')
// } else if(possuiGraduacao) {
//     console.log('Possui graduação, mas não possui doutorado')
// } else {
//     console.log('Não possui graduação')
// }

// truthy

// var nome = 'Gabriel'

// if(nome) {
//     console.log(nome)
// }

// falsy (retorna false) -> if(false) , if(0) , if(NaN) , if(null) , if(undefined) , if('') ou "" ou ''

// todo o resto é truthy (retorna true) -> if(true) , if(1) , if(' ') , if('gabriel') , if(-5) , if({})

// operador lógico de negação !

// if(!true) // false
// if(!1) // false
// if (!'') // true
// if(!undefined) // true

// utilizamos o !! para verificar se uma expressão é truthy ou falsy

// if(!!' ') // true
// if(!!'') {} // false

// operadores de comparação -> vão sempre retornar um valor booleano (true ou false)

// > , < , >= , <=

// == (faz uma comparação não tão estrita) , === faz uma comparação estrita, o tipo de dado deve ser o mesmo

// var x = '10'
// x == 10 // true
// x === 10 // false

// tem também o diferente -> != e !===

// 10 == '10' // true
// 10 == 10 // true
// 10 === '10' // false
// 10 === 10 // true
// 10 != 15 // true
// 10 != '10' // false
// 10 !== '10' // true

// operador lógico && (e) -> compara se uma expressão e a outra é verdadeira

// true && true // true
// true && false // false
// false && true // false
// 'Gato' && 'Cão' // 'Cão'
// (5 - 5) && (5 + 5) // 0 -> pq 5 - 5 = 0 e 0 é false, então já vai retornar o valor false
// 'Gato' && false // false
// (5 >= 5) && (3 < 6) // true

// se ambos os valores forem true ele irá retornar o último valor verificado, se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

// if((5 - 10) && (5 + 5)) {
//     console.log('Verdadeiro')
// } else {
//     console.log('Falso')
// }

// operador lógico || (ou) -> compara se uma expressão ou outra é verdadeira

// true || true // true
// true || false // true
// false || true // true
// 'Gato' || 'Cão' // 'Gato'
// (5 - 5) || (5 + 5) // 10
// 'Gato' || false // 'Gato'
// (5 >= 5) || (3 < 6) // true

// retorna o primeiro valor true que encontrar

// var condicional = (5 -5) || (5 + 5) && (10 - 2)
// console.log(condicional)

// operador switch

var cor = 'Verde'

switch (cor) {
    case 'Azul':
        console.log('Mar')
        break
    case 'Amarelo':
        console.log('Sol')
        break
    case 'Verde':
        console.log('Planta')
        break
    default:
        console.log('Default')
}