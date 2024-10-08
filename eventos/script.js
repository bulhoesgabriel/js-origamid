// eventos

// addEventListener -> adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento

// const img = document.querySelector('img')

// elemento.addEventListener(event, callback, options)

// img.addEventListener('click', () => {
//     console.log('clicou')
// })

// o terceiro parâmetro é opcional

// callback

// é boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

// function callback() {
//     console.log('clicou')
// }

// img.addEventListener('click', callback)

// event -> o primeiro parâmetro do callback é referente ao evento que ocorreu

// function callback(event) {
//     console.log(event)
// }

// img.addEventListener('click', callback)

// geralmente utilizam e como nome do parâmetro

// propriedades do event

// const animaisLista = document.querySelector('.animais-lista')

// function executarCallback(event) {
//     const currentTarget = event.currentTarget // this
//     const target = event.target // onde o clique ocorreu
//     const type = event.type // tipo de evento
//     const path = event.path
//     console.log(currentTarget, target, type, path)
// }

// animaisLista.addEventListener('click', executarCallback)

// event.preventDefault() -> previne o comportamento padrão do evento no browser, no caso de um link externo por exemplo, irá previnir que o link seja ativado

// const linkExterno = document.querySelector('a[href^="http"]')

// function linkClick(event) {
//     event.preventDefault()
//     console.log(event.currentTarget.href)
// }

// linkExterno.addEventListener('click', linkClick)

// this

// a palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto, no caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado

// function callback(e) {
//     console.log(this) // retorna a imagem
//     console.log(this.getAttribute('src'))
// }

// img.addEventListener('click', callback)

// diferentes eventos -> existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais, eventos podem ser adicionados a diferentes elementos, como o window e o document também

// const h1 = document.querySelector('h1')

// function callback(event) {
//     console.log(event.type, event)
// }

// h1.addEventListener('click', callback)
// h1.addEventListener('mouseenter', callback)
// h1.addEventListener('mousemove', callback)
// window.addEventListener('scroll', callback)
// window.addEventListener('resize', callback)
// window.addEventListener('keydown', callback)

// keyboard -> você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard

// function handleKeyboard(e) {
//     console.log(e.key)
//     if(e.key === 'a')
//         document.body.classList.toggle('azul')
//     else if(e.key === 'v')
//         document.body.classList.toggle('vermelho')
// }

// window.addEventListener('keydown', handleKeyboard)

// forEach e eventos

// o método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista para adicionarmos à cada um deles

const imgs = document.querySelectorAll('img')

function imgSrc(e) {
    const src = e.currentTarget.getAttribute('src')
    console.log(src)
}

imgs.forEach((img) => {
    img.addEventListener('click', imgSrc)
})