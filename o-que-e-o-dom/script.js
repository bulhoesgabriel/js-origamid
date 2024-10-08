// o que é o DOM -> Document Object Model

// é uma interface que representa documentos HTML através de objetos, com ela é possível manipular a estrutura, estilo e  conteúdo destes documentos

console.log(window.innerHeight) // retorna a altura do browser

// window é o objeto global do browser, possui diferentes métodos e propriedades

const href = window.location.href

console.log(href)

if (href === 'http://127.0.0.1:5500/index.html') {
    console.log('É igual')
}

// window e document -> objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades

const title = document.querySelector('h1')

console.log(title)

console.log(document.body)

// window é um objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades

alert('Isso é um alerta') // funciona

// Node -> toda tag html é representada pelo objeto Element, e por isso herda seus métodos e propriedades, Element é um tipo de objeto Node

const titleClasses = title.classList // Element.classList -> retorna as classes

console.log(titleClasses)

console.log(title.innerText) // retorna o texto

console.log(title.id) // retorna o id

console.log(title.offsetHeight) // retorna a altura do elemento

function callback() {
    console.log(`Clicou em ${title.innerText}`)
}

title.addEventListener('click', callback) // ativa a função callback ao click no título