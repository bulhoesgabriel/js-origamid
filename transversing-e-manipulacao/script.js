// transversing e manipulação

// outerHTML, innerHTML e innerText -> propriedades que retornam uma string contendo o html ou texto, é possível atribuir um novo valor para as mesmas, ex: element.innerText = 'Novo texto'

// const menu = document.querySelector('.menu')

// console.log(menu.outerHTML) // todo o html do elemento, incluindo tag, classes, id...

// console.log(menu.innerHTML) // html interno

// console.log(menu.innerText) // texto, sem tags

// menu.innerText = '<p>Texto</p>' // a tag vai como texto

// menu.innerHTML = '<p>Texto</p>' // a tag é renderizada

// tranversing -> como navegar pelo DOM, utilizando suas propriedades e métodos

// const lista = document.querySelector('.animais-lista')

// console.log(lista.parentElement) // pai

// console.log(lista.parentElement.parentElement) // pai do pai

// console.log(lista.previousElementSibling) // elemento acima

// console.log(lista.nextElementSibling) // elemento abaixo

// console.log(lista.children) // HTMLCollection com os filhos

// console.log(lista.children[0]) // primeiro filho

// console.log(lista.children[--lista.children.length]) // último filho

// console.log(lista.querySelectorAll('li')) // todas as li's

// console.log(lista.querySelector('li:last-child')) // último filho

// Element vs Node -> Element's representam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (element), texto, comentário, quebra de linha e mais

// console.log(lista.previousElementSibling) // elemento acima

// console.log(lista.previousSibling) // node acima

// console.log(lista.firstChild) // primeiro node child

// console.log(lista.childNodes) // todos os node child

// geralmente estamos atrás de um elemento e não de qualquer node em si

// manipulando elementos -> é possível mover elementos no DOM com métodos de node

// const lista = document.querySelector('.animais-lista')

// const contato = document.querySelector('.contato')

// const titulo = contato.querySelector('.titulo')

// contato.appendChild(lista) // move lista para o final de contato

// contato.insertBefore(lista, titulo) // insere a lista antes de titulo

// contato.removeChild(titulo) // remove titulo de contato

// contato.replaceChild(lista, titulo)  // substitui titulo por lista

// novos elementos -> podemos criar novos elementos com o método createElement()

// const mapa = document.querySelector('.mapa')

// const novoH1 = document.createElement('h1')
// novoH1.innerText = 'Novo Título'
// novoH1.classList.add('titulo')

// mapa.appendChild(novoH1)

// clonar elementos -> todo elemento selecionado é único, para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

const h1 = document.querySelector('h1')
const faq = document.querySelector('.faq')

// faq.appendChild(h1) // apenas moveu o h1 para depois do faq, não clonou

const cloneH1 = h1.cloneNode(true) // true sinaliza para incluir os filhos

cloneH1.classList.add('azul')

faq.appendChild(cloneH1) // clonou o h1 e colocou depois do faq