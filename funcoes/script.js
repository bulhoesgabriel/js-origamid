// funções

// bloco de código que pode ser executado e reutilizado, valores podem ser passados por uma função e a mesma retorna outro valor

function areaQuadrado(lado) {
    return lado * lado
}

console.log(areaQuadrado(5))

// chamada de function declaration

function pi() {
    return 3.14
}

var total = 5 * pi()

console.log(total.toFixed(2))

// parâmetros e argumentos

// ao CRIAR uma função, você pode definir parâmetros

// ao EXECUTAR uma função, você pode passar argumentos

function imc(peso, altura) {         // peso e altura são os parâmetros
    const imc = peso / (altura ** 2)
    return imc
}

console.log(imc(69, 1.92).toFixed(2)) // 69 e 1.92 são os argumentos

// separar por vírgula cada parâmetro, você pode definir mais de um parâmetro ou nenhum também

// parênteses executa a função

function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Céu'
    } else if (cor === 'verde') {
        return 'Mato'
    } else {
        return 'Nada'
    }
}

console.log(corFavorita('verde'))

// argumentos podem ser funções

// chamadas de callback, geralmente são funções que ocorrem após algum evento

addEventListener('click', function () {
    console.log('Clicou')
})

// a função possui dois argumentos, o primeiro é a string 'click' e o segundo é uma função anônima

// funções anônimas são aquelas que o nome da função não é definido, escritas como function() {} ou () => {}

// a função pode ou não retornar um valor

// quando não definimos o return, ela irá retornar undefined

// o código interno da função é executado normalmente, independente de existir valor de return ou não

function imc2(peso, altura) {
    const imc = peso / (altura ** 2)
    console.log(imc)
}

imc2(69, 1.92) // undefined

console.log(imc2(99, 1.92)) // retorna o imc e undefined

// valores retornados

// uma função pode retornar qualquer tipo de dado e até outras funções

function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Informe a sua idade!'
    } else if (idade >= 60) {
        return true
    } else {
        return false
    }
}

// cuidado: retornar diferentes tipos de dados na mesma função não é uma boa ideia

console.log(terceiraIdade(69))

// escopo: variáveis e funções definidas dentro de um bloco {} não sõo visíveis fora dele

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193
    return `Ainda faltam ${totalPaises - paisesVisitados} países`
}

console.log(totalPaises) // erro, totalPaises não definido

// escopo léxico: funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = 'Designer'

function dados() {
    var nome = 'Gabriel'
    var idade = 26
    function outrosDados() {
        var endereco = 'Rio Grande do Norte'
        var idade = 27
        return `${nome}, ${idade}, ${endereco}, ${profissao}`
    }
    return outrosDados()
}

console.log(dados()) // retorna Gabriel, 27, Rio Grande do Norte, Designer

outroDados() // retorna um erro, pois outrosDados() não foi definido, apenas dentro da função dados()

// hoisting

// antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc(69, 1.92)

function imc(peso, altura) {
    const imc = peso / (altura * altura)
    console.log(imc)
}

// dessa forma, a função acima funciona mesmo sendo chamada antes e declarada depois