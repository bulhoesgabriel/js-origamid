// height e width

// estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

const listaAnimais = document.querySelector('.animais-lista')

// console.log(listaAnimais.clientHeight) // height + padding
// console.log(listaAnimais.offsetHeight) // height + padding + border
// console.log(listaAnimais.scrollHeight) // height total, mesmo dentro de scroll

// mesma coisa para o width, clientWidth...

// offsetTop e offsetLeft

// distância entre o topo do elemento e o topo da página

// console.log(listaAnimais.offsetTop)

// distância entre o canto esquerdo do elemento e o canto esquerdo do página

// console.log(listaAnimais.offsetLeft)

// getBoundingClientRect() -> método que retorna um objeto com valores de width, height, distâncias do elemento e mais

const rect = listaAnimais.getBoundingClientRect()

// console.log(rect)
// console.log(rect.height) // height do elemento
// console.log(rect.width) // width do elemento
// console.log(rect.top) // distância entre o topo do elemento e o scroll

// window

// console.log(window.innerWidth, window.outerWidth, window.innerHeight, window.outerWidth, window.pageYOffset, window.pageXOffset) // width da janela; soma dev tools também; height da janela; soma a barra de endereço; distância total do scroll horizontal; distância total do scroll vertical.

// if (window.innerWidth < 600) {console.log('Tela menor que 600px')}

// matchMedia() -> utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)')

if (small.matches) {
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
}

// DICA

// selecione o elemento no inspetor (DOM)

// abra o console e digite $0 para selecionar o mesmo

// os elementos selecionados anteriormente são $1, $2...