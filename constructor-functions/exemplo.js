// const Dom = {
//     seletor: 'li',
//     element() {
//         return document.querySelector(this.seletor)
//     },
//     ativar() {
//         this.element().classList.add('ativar')
//     }
// }

class Dom {
    constructor(seletor) {
        this.element = () => {
            return document.querySelector(seletor)
        }
        this.ativar = () => {
            this.element().classList.add('ativar')
        }
    }
}

// obs: o vscode corrigiu este código acima de uma função construtora para uma classe com um construtor

const li = new Dom('li')
li.ativar()

const ul = new Dom('ul')
ul.ativar()

const ultimoLi = new Dom('li:last-child')
ultimoLi.ativar()

// lembre-se de usar parâmetros