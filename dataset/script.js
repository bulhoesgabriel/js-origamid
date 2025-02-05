// Dataset

// HTMLCollection -> Todo elemento HTML do DOM  herda propriedades e métodos do construtor HTMLElement.

// h1 = document.querySelector('h1')

// console.log(Object.prototype.toString.call(h1)) // [object HTMLHeadingElement]

// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

// dataset -> É uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento HTML que começarem com data-

// console.log(h1.dataset) // DOMStringMap

// let div = document.querySelector('div')

// div.dataset.height = 1000 // Adicionando nova propriedade

// delete div.dataset.width // Deletando uma já existente

// console.log(div.dataset) // DOMStringMap {cor: "azul", height: "1000"}

// console.log(div.dataset.cor) // azul

// Data Atributes -> Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.

// const divs = document.querySelectorAll('[data-anima]')

// divs.forEach((div) => {
//     div.classList.add(div.dataset.anima)
// }) // Adiciona em cada div uma classe com o mesmo nome que o valor de data

// Data vs Class -> A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.

// Nomenclatura -> Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.

// const div = document.querySelector('[data-anima-scroll]')

// console.log(div.dataset) // {animaScroll: 'left}
// console.log(div.dataset.animaScroll) // left

// div.dataset.tempoTotal = 1000

// console.log(div) // Na div vira data-tempo-total="1000"

// delete div.dataset.animaScroll // Remove o atributo

// console.log(div) // <div data-tempo-total="1000">