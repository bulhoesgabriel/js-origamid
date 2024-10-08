// tudo é um objeto

// strings, números, boolean, objetos e mais, possuem propriedades e métodos, por isso são objetos

var nome = 'Gabriel'

console.log(nome.length)

console.log(nome.charAt(1))

console.log(nome.replace('Gabri', 'Rafa'))

console.log(nome)

// uma string herda propriedades e métodos do construtor String()

var nomeMinusculo = nome.toLowerCase()

console.log(nomeMinusculo)

// números

var altura = 1.8

console.log(typeof altura)

console.log(typeof altura.toString()) // transforma em string

console.log(altura.toFixed()) // arredonda o valor, 1.8 vira 2

// por um breve momento o número é envolvido em um objeto (coerção), tendo acesso assim as suas propriedades e métodos

// funções

function areaQuadrado(lado) {
    return lado * lado
}

console.log(areaQuadrado.toString()) // transforma o conteúdo da função em string

console.log(areaQuadrado.length) // retorna o número de parâmetros que a função tem

console.log(addEventListener.length) // 2

// elementos do DOM

var btn = document.querySelector('.btn')

console.log(btn)

// interagimos com elementos do DOM a partir de métodos e propriedades

btn.classList.add('azul') // adicoina a classe azul

console.log(btn.classList)

console.log(btn.innerHTML)

btn.addEventListener('click', function () {
    console.log('Clicou')
})

// praticamente todos os efeitos com JavaScript são feitos utilizando propriedades e métodos de objetos do DOM

// objetos revolucionaram a programação

// web api's são métodos e propriedades que permitem a interação JavaScript e Browser

// exemplos de web api -> addEventListener() , querySelector()