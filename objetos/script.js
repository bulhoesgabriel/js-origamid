// objetos

// conjunto de variáveis e funções, que são chamadas de propriedades e metódos

var pessoa = {
    nome: 'Gabriel',
    idade: 26,
    profissao: 'Desginer',
    possuiFaculdade: true,
}

// propriedades e metódos consistem em nome, chave e valor

// métodos -> uma propriedade que possui uma função no local do seu valor

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado
    },
    perimetro(lado) {             // podemos abreviar assim, no lugar de perimetro: function(lado) {}
        return this.lados * lado
    },
}

console.log(quadrado.lados, quadrado.area(5), quadrado.perimetro(5))

// objetos servem para organizar o código em pequenas partes reutilizáveis

console.log(Math.PI) // 3.14

console.log(Math.random()) // número aleatório

var pi = Math.PI.toFixed(2)
console.log(pi)

// Math é um objeto nativo do JavaScript!

// Já percebeu que console é um objeto e log() um método?

// com o tempo percebe-se que tudo é um objeto, tudo tem propriedades e métodos

// criar um objeto -> utilizando as chaves {}

var carro = {}

console.log(typeof carro) // object

// dot notation get -> acesse propriedades de um objeto utilizando o ponto .

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2  // palavra-chave this -> faz referência ao próprio objeto
    }
}

menu.backgroundColor = '#000' // dot notation set -> substituir o valor utilizando . e o = após o nome

menu.color = 'blue' // podemos adicionar propriedades

menu.esconder = function() { // e metódos também
    console.log('Escondi')
}

var bg = menu.backgroundColor

console.log(bg) // #84E

console.log(menu)

menu.esconder()

// protótipo e herança -> o objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo

console.log(menu.hasOwnProperty('color')) // hasOwnProperty é um método de Object

// Object() -> função nativa do JavaScript

// entender JavaScript é saber as propriedades e métodos dos diferentes objetos que a linguagem tem