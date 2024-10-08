// quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma, previna o comportamento padrão desses links

// const links = document.querySelectorAll('a[href^="#"]')

// function callback(e) {
//     e.preventDefault()
//     links.forEach((link) => {
//         link.classList.remove('ativo')
//     })
//     e.currentTarget.classList.add('ativo')
// }

// links.forEach((link) => {
//     link.addEventListener('click', callback)
// })

// selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados

// const elements = document.querySelectorAll('body *')

// function showElement(e) {
//     console.log(e.currentTarget)
// }

// elements.forEach((element) => {
//     element.addEventListener('click', showElement)
// })

// utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento

// const elements = document.querySelectorAll('body *')

// function removeElement(e) {
//     e.currentTarget.remove()
// }

// elements.forEach((element) => {
//     element.addEventListener('click', removeElement)
// })

// se o usuário clicar na tecla (t), aumente todo o texto do site

function handleKeyboard(e) {
    if (e.key === 't') {
        document.documentElement.classList.toggle('texto-maior') // document.documentElement é o elemento html
    }
}

window.addEventListener('keydown', handleKeyboard)