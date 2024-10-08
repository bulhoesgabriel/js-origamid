// duplique o menu e adicone ele em copy

const menu = document.querySelector('.menu')

const cloneMenu = menu.cloneNode(true)

const copy = document.querySelector('.copy')

copy.appendChild(cloneMenu)

// selecione o primeiro dt da dl de faq

const listaFaq = document.querySelector('.faq-lista')

const primeiroDt = listaFaq.children[0]

console.log(primeiroDt)

// selecione o dd referente ao primeiro dt

const primeiroDd = listaFaq.children[1]

console.log(primeiroDd)

// substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML