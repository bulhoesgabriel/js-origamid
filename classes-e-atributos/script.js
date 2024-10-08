// classes e atributos

// classList -> retorna uma lista com as classes do elemento, permite adicoinar, remover e verificar se contém

const menu = document.querySelector('.menu')

// console.log(typeof(menu.className))

// console.log(menu.classList)

menu.classList.add('ativo')
menu.classList.add('ativo', 'mobile') // duas classes
menu.classList.remove('ativo')
menu.classList.toggle('ativo') // adiciona / remove a classe
// console.log(menu.classList.contains('ativo')) // true ou false
menu.classList.replace('ativo', 'inativo') // substituir a classe
menu.className += ' azul' // também funciona

// attributes -> retorna uma array-like com os atributos do elemento

const animais = document.querySelector('.animais')

// console.log(animais.attributes) // retorna todos os atributos
// console.log(animais.attributes[0]) // retorna o primeiro atributo
// console.log(animais.attributes['data-texto'])

// getAttribue e setAttribute -> métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img')

// console.log(img.getAttribute('src')) // valor do src
img.setAttribute('alt', 'Texto Alternativo') // muda o alt
// console.log(img.getAttribute('alt')) // deve retornar Texto Alternativo
// console.log(img.hasAttribute('id')) // true ou false
img.removeAttribute('alt') // remove o alt
// console.log(img.attributes)
// console.log(img.hasAttributes()) // true ou false se tem algum atributo

// é muito comum métodos de get e set

// Read Only vs Writable -> existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura

// console.log(animais.className) // string com o nome das classes
animais.className = 'azul' // substitui completamente a string
// console.log(animais.className)
animais.attributes = 'class="ativo"' // não funciona, Ready Only

// lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''

const carro = {
    portas: 4,
    andar: (km) => {
        console.log(`Andou ${km}`)
    }
}

carro.portas = 2
console.log(carro)