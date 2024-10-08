// retorne no console todas as imagens do site

const img = document.querySelectorAll('img')

img.forEach((item) => {
    console.log(item)
})

// retorne no console apenas as imagens que começam com a palavra imagem

const imagens = document.querySelectorAll('img[src^="img/imagem"]')

imagens.forEach((item) => {
    console.log(item)
})

// selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('a[href^="#"]')

console.log(linksInternos)

// selecione o primeiro h2 dentro de .animais-descricao

const h2Animais = document.querySelector('.animais-descricao h2')

console.log(h2Animais)

// selecione o último p do site

const ps = document.querySelectorAll('p')

console.log(ps[--ps.length])