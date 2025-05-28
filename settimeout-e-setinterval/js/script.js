import initScrollSuave from './modules/scroll-suave.js'
import initAnimacaoScroll from './modules/animacao-scroll.js'
import initAccordion from './modules/accordion.js'
import initTabNav from './modules/tab-nav.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'

initScrollSuave()
initAnimacaoScroll()
initAccordion()
initTabNav()
initModal()
initTooltip()
initDropdownMenu()

// setTimeout e setInterval

// setTimeout(callback, tempo, arg1, arg2, ...) -> método assíncrono que ativa o callback após o tempo. Não existe agarntia de que o código será executado exatamente após o tempo, pois o callback entra na fila e espera pela Call Stack estar vazia.

// function espera(texto) {
//     console.log(texto)
// }

// setTimeout(espera, 2000, 'Depois de 2s')

// setTimeout(() => {
//     console.log('Depois de 2s')
// }, 2000)

// Imediato -> Se não passarmos o argumento de tempo ele irá assumir o valor 0 e entrará na fila imediatamente para ser executado. Podemos passar uma função anônima diretamente com argumento.

// setTimeout(() => {
//     console.log('Após 0s?')
// })

// Loops e setTimeout -> Um loop é executado rapidamente, em milissegundos. Se colocarmos um setTimeout dentro do loop, todos eles serão adicionados à Web Api praticamente no mesmo tempo. Um evento de setTimeout não espera o tempo do anterior acabar para iniciar.

// for (let i = 0; i < 20; i++) {
//     setTimeout(() =>{
//         console.log(i)
//     }, 1000 * i)
// }

// This e Window -> setTimeout é um método do objeto Window. O valor de this dentro do mesmo callback é uma referência ao seu objeto, no caso Window.

// const btn = document.querySelector('button')

// btn.addEventListener('click', handleClick)

// function handleClick() {
//     this.classList.add('active')
// }

// function handleClick() {
//     setTimeout(function() {
//         this.classList.add('active')
//     }, 1000)
// } // Erro pois this na verdade é o objeto Window.

// function handleClick() {
//     setTimeout(() => {
//         this.classList.add('active')
//     }, 1000)
// } // Com Arrow Function this segue o contexto do objeto pai, nesse caso o btn e dará certo.

// setInterval(callback, tempo, arg1, arg2, ...) -> irá ativar o callback toda vez que a quantidade de tempo passar.

// function loop(texto) {
//     console.log(texto)
// }

// setInterval(loop, 1000, 'Passou 1s')

// Loop a cada segundo

// let i = 0

// setInterval(() => {
//     console.log(i++)
// }, 1000)

// clearInterval(var) -> Podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável.

let i = 0

const loop = setInterval(() => {
    console.log(i++)
    if (i > 20) {
        clearInterval(loop)
    }
}, 300)