// forEach e Arrow Function

const imgs = document.querySelectorAll('img')

imgs.forEach((item, index, array) => {
    // console.log(item, index, array)
})

// o forEach é um método de array, quando o objeto não possuir o ideal é transformá-lo em uma

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos) // o Array.from transforma este objeto em array

// console.log(titulos)
// console.log(titulosArray)

titulosArray.forEach((item) => {
    // console.log(item)
})

// Arrow Function

// => (Fat Arrow)

// argumento único não precisa de parênteses

imgs.forEach(item => {
    // console.log(item)
})

// múltiplos argumentos precisa de parênteses

imgs.forEach((item, index) => {
    // console.log(item, index)
})

// sem argumentos precisa de parênteses, mesmo vazio

let i = 0
imgs.forEach(() => {
    // console.log(i++)
})

// pode ser abreviado

imgs.forEach(() => console.log(i++))