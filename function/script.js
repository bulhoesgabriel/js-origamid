// Function

// Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.

// const perimetro = new Function('lado', 'return lado * 4') // nunca criaremos assim

// console.log(perimetro(5))

// function perimetro(lado) { // criamos assim
//     return lado * 4
// }

// console.log(perimetro(5))

// Propriedades

// function.length -> retorna o total de argumentos da função

// function.name -> retorna uma string com o nome da função

// function somar(n1, n2, n3) {
//     return n1 + n2 + n3
// }

// console.log(somar.length, somar.name)

// Métodos

// function.call(this, arg1, arg2, ...) -> executa a função, sendo possível passarmos uma nova referência ao this da mesma

// function descricaoCarro() {
//     console.log(this.marca + ' ' + this.ano)
// }

// descricaoCarro()

// descricaoCarro.call({marca: 'Honda', ano: 2015})

// This

// O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().

// const carros = ['Ford', 'Fiat', 'VW']
// const frutas = ['Banana', 'Uva', 'Pêra']

// frutas.forEach.call(carros, (item) => {
//     console.log(item)
// })

// Exemplo Real

// O objeto atribuído a lista será substituído pelo primeiro argumento de call()

// function Dom(seletor) {
//     this.element = document.querySelector(seletor)
// }

// Dom.prototype.ativo = function(classe) {
//     this.element.classList.add(classe)
// }

// const lista = new Dom('ul')

// lista.ativo('ativo')

// console.log(lista)

// const li = {
//     element: document.querySelector('li')
// }

// lista.ativo.call(li, 'ativo')

// Array's e Call

// É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like).

// Array.prototype.mostreThis = function() {
//     console.log(this)
// }

// const frutas = ['Uva', 'Maçã', 'Banana']

// frutas.mostreThis()

// Array.prototype.pop.call(frutas) // Remove Banana, seria a mesma coisa de frutas.pop()

// console.log(frutas)

// Array-like

// HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.

// const li = document.querySelectorAll('li')

// const filtro = Array.prototype.filter.call(li, function(item) {
//     return item.classList.contains('ativo')
// })

// console.log(filtro)

// function.apply() -> O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.

// const numeros = [3, 4, 6, 1, 34, 44, 32]

// console.log(Math.max.apply(null, numeros)) // 44
// console.log(Math.max.call(null, 3, 4, 5, 6, 7, 20)) // 20

// Podemos passar null para o valor de this, caso a função não utilize o objeto principal para funcionar

// Apply vs Call -> a única diferença é a array como segundo argumento.

const li = document.querySelectorAll('li')

function itemPossuiAtivo(item) {
    return item.classList.contains('ativo')
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo)

console.log(filtro1)

const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]) // no apply temos que colocar a função dentro de uma array

console.log(filtro2)

// function.bind() -> Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.

// const li = document.querySelectorAll('li')

const filtro = Array.prototype.filter.bind(li, (item) => {
    return item.classList.contains('ativo')
})

console.log(filtro())

// Outro exemplo

const $ = document.querySelectorAll.bind(document)

console.log($('li'))

// Argumentos e Bind -> Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`
    }
}

console.log(carro.acelerar(100,20)) // Ford acelerou 100 em 20

const honda = {
    marca: 'Honda',
}

const acelerarHonda = carro.acelerar.bind(honda)

console.log(acelerarHonda(200, 10)) // Honda acelerou 200 em 10

// Argumentos Comuns -> Podemos passar argumentos padrões para uma função e retornar uma nova função.

function imc(altura, peso) {
    return peso / (altura * altura)
}

const imc192 = imc.bind(null, 1.92)

console.log(imc(1.92, 68)) // 18.44

console.log(imc192(68)) // 18.44