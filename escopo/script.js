// escopo de função

// variáveis declaradas dentro de funções não sõo acessadas fora das mesmas

// function mostrarCarro() {
//     var carro = 'Fusca'
//     console.log(carro)
// }

// mostrarCarro() // Fusca

// console.log(carro) // erro, carro is not defined

// escopo evita o conflito entre nomes

// variável global (erro)

// declarar variáveis sem a palavra var, const ou let cria uma variável que pode se acessar em qualquer escopo (global), isso é um erro

// 'use strict'

// function mostrarCarro() {
//     carro = 'Fusca'
//     console.log(carro)
// }

// mostrarCarro() // Fusca

// console.log(carro) // Fusca

// 'use strict' impede isso, da erro

// escopo de função (pai)

// variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções

// var carro = 'Fusca'

// function mostrarCarro() {
//     var frase = `Meu carro é um ${carro}`
//     console.log(frase)
// }

// mostrarCarro()
// console.log(carro)

// escopo de bloco

// variáveis criadas com var vazam o bloco, por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco

// if (true) {
//     var carro = 'Fusca' // var vaza o bloco
//     console.log(carro)
// }

// console.log(carro) // Fusca

// if (true) {
//     let mes = 'Dezembro' // let não vaza o bloco
//     console.log(mes)
// }

// console.log(mes) // erro, mes is not defined

// var vaza o bloco -> mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined

// if (false) {
//     var carro = 'Fusca'
//     console.log(carro)
// }

// console.log(carro) // undefined

// const e let no lugar de var

// a partir de agora vamos utilizar apenas const e let para declararmos variáveis

// if (true) {
//     const carro = 'Fusca'
//     console.log(carro)
// }

// console.log(carro) // erro, carro is not defined

// {} cria um bloco

// chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

// {
//     var carro = 'Fusca'
//     const ano = 2018
// }

// console.log(carro) // Fusca
// console.log(ano) // erro, ano is not defined

// for loop

// ao utilizar var dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e existir fora do loop

// for (var i = 1; i <= 10; i ++) {
//     console.log(`Número ${i}`)
// }

// console.log(i) // 11

// for loop com let -> com o let evitamos que o número vaze

// for (let i = 0; i <= 10; i++) {
//     console.log(`Número ${i}`)
// }

// console.log(i) // erro, i is not defined

// const -> mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código

// const mes = 'Dezembro'

// mes = 'Janeiro' // erro, invalid assignment to const, tentou modificar o valor

// const semana // erro, declarou sem valor

// const data = {
//     dia: 28,
//     mes: 'Dezembro',
//     ano: 2018,
// }

// data.dia = 29 // funcionou

// console.log(data.dia)

// data = 'Janeiro' // erro, invalid assignment to const

// const -> variáveis com valores constantes

// let -> mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável

// let ano
// ano = 2018
// ano++
// console.log(ano) // 2019

// let ano = 2020 // erro, redeclarou a variável

// o ideal é mudar tudo de var para const, e para let apenas aquilo que se modifica

// geralmente vamos utilizar o const