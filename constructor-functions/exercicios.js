// transforme o objeto abaixo em uma constructor function

// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar () {
//         console.log(this.nome + ' andou')
//     }
// }

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.andar = () => {
        console.log(nome + ' andou')
    }
}

// crie 3 pessoas, joão - 20 anos, maria - 25 anos, bruno - 15 anos

const joao = new Pessoa('João', 20)
const maria = new Pessoa('Maria', 25)
const bruno = new Pessoa('Bruno', 15)

// crie uma constructor function (dom) para manipulação de listas de elementos do dom, deve conter as seguintes propriedades e métodos:

// elements, retorna NodeList com os elementos selecionados

// addClass(classe), adiciona a classe a todos os elementos

// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
    this.elements = () => {
        return document.querySelectorAll(seletor)
    }
    this.addClass = (classe) => {
        this.elements().forEach((element) => {
            element.classList.add(classe)
        })
    }
    this.removeClass = (classe) => {
        this.elements().forEach((element) => {
            element.classList.remove(classe)
        })
    }
}

const li = new Dom('li')