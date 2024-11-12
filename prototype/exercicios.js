// crie uma função construtora de Pessoas

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

// crie um método de protótipo que retorne o nome completo da pessoa

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const gabriel = new Pessoa('Gabriel', 'Bulhões', 26)

// liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
console.log(Object.getOwnPropertyNames(Document.prototype))

// liste os construtores dos dados abaixo

const li = document.querySelector('li')

// li
console.log(li.constructor.name) // HTMLLIElement

// li.click
console.log(li.click.constructor.name) // Function

// li.innerText
console.log(li.innerText.constructor.name) // String

// li.value
console.log(li.value.constructor.name) // Number

// li.hidden
console.log(li.hidden.constructor.name) // Boolean

// li.offsetLeft
console.log(li.offsetLeft.constructor.name) // Number

// li.click() -> undefined

// qual o construtor do dado abaixo

// li.hidden.constructor.name
console.log(li.hidden.constructor.name.constructor.name) // String