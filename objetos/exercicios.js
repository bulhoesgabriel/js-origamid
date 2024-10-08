// crie um objeto com os seus dados pessoais (deve possuir pelo menos duas propriedades: nome e sobrenome)

var eu = {
    nome: 'Gabriel',
    sobrenome: 'Bulhões Emerenciano',
    idade: 26,
    profissao: 'Programador',
    cidade: 'Natal',
}

// crie um método no objeto anterior que mostre o seu nome completo

eu.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

console.log(eu.nomeCompleto())

// modifique o valor da propriedade preco para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000

console.log(carro.preco)

// crie um objeto de um cachorro que represente um labrador preto com 10 anos que late ao ver um homem

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa === 'homem') {
            return console.log('au')
        } else {
            return console.log('...')
        }
    }
}

cachorro.latir('homem')