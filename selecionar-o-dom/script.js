// // selecionar o dom

// // id -> getElementById seleciona e retorna elementos do DOM

// const animaisSection = document.getElementById('animais')

// const contatoSection = document.getElementById('contato')

// // retorna null caso não exista

// const naoExiste = document.getElementById('teste')

// console.log(animaisSection.innerText)

// console.log(contatoSection)

// console.log(naoExiste)

// // classe e tag -> getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM, a lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada

// // seleciona pela classe, retorna uma HTMLCollection

// const gridSection = document.getElementsByClassName('grid-section')

// const contato = document.getElementsByClassName('grid-section contato')

// // selectiona todas as UL's, retorna uma HTMLCollection

// const ul = document.getElementsByTagName('ul')

// // retorna o primeiro elemento

// console.log(gridSection[0])

// console.log(gridSection)

// console.log(gridSection.length)

// // seletor geral único -> querySelector -> retorna o primeiro elemento que combinar com o seu seletor css

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('#contato')
// const ultimoItem = document.querySelector('.animais-lista li:last-child')
// const linkCSS = document.querySelector('[href^="https://"]')
// const primeiroUl = document.querySelector('ul')

// // busca dentro da Ul apenas

// const navItem = primeiroUl.querySelector('li')

// console.log(primeiroUl.innerText)

// console.log(navItem.innerHTML)

// const linkInterno = document.querySelector('[href^="#"]')

// console.log(linkInterno.innerHTML)

// // seletor geral lista -> querySelectorAll -> retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

// const gridSection = document.querySelectorAll('.grid-section')

// console.log(gridSection)

// // retorna o segundo elemento

// console.log(gridSection[1])

// // diferente do getElementsByClassName, a lista aqui é estática

// const animaisImg = document.querySelectorAll('.animais img')

// console.log(animaisImg)

// // HTMLCollection vs NodeList -> a diferença está nos métodos e propriedades de ambas, além disso a NodeList retornada com querySelectorAll é estática

// const titulo = document.querySelector('.titulo')
// const gridSectionHTML = document.getElementsByClassName('grid-section')
// const gridSectionNode = document.querySelectorAll('.grid-section')

// titulo.classList.add('grid-section')

// console.log(gridSectionHTML) // 4 itens
// console.log(gridSectionNode) // 3 itens

// // array-like -> HTMLCollection e NodeList são array-like, parecem uma array mas não são, o método de array forEach() por exemplo, existe apenas em NodeList

// const gridSection = document.querySelectorAll('.grid-section')

// gridSection.forEach((gridItem, index, array) => {
//     gridItem.classList.add('azul')
//     console.log(index) // index do item na array
//     console.log(array) // a array completa
// })

// // é possível transformar array-like em uma array real, utilizando o método Array.from(gridSection)

// const realArray = Array.from(gridSection)

// console.log(realArray)

// realArray.forEach((item, index) => {
//     console.log(item, index)
// })

// gridSectionHTML.forEach((item, index) => {
//     console.log(item, index)
// }) // erro -> gridSectionHTML diferente da NodeList não funciona forEach()

// const gridSectionNode = document.querySelectorAll('.grid-section')

// gridSectionNode.forEach((item, index) => {
//     console.log(item, index)
// }) // NodeList funciona forEach()

// transformando array-like em array

const gridSectionHTML = document.getElementsByClassName('grid-section')

const arrayGrid = Array.from(gridSectionHTML)

// a array é estática

arrayGrid.forEach((item) => {
    console.log(item)
})