// crie uma função para verificar se um valor é truthy

function truthy(valor) {
    return !!valor
}

console.log(truthy(1))

// crie uma função matemática que retorne o perímetro de um quadrado

function perimetro(lado) {
    return lado * 4
}

console.log(perimetro(4))

// crie uma função que retorne o seu nome completo (deve ter os parâmetros nome e sobrenome)

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

console.log(nomeCompleto('Gabriel', 'Emerenciano'))

// crie uma função que verifica se o número é par

function par(numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(par(7))

// crie uma função que retorna o tipo de dado do argumento passado nela (typeof)

function tipo(x) {
    return typeof x
}

console.log(tipo(10), tipo('pkz'))

// addEventListener é uma função nativa do JavaScript, o primeiro parâmetro é o evento que ocorre e o segundo é o callback, utilize essa função para mostrar no console o seu nome completo quando o evento 'click' ocorrer

addEventListener('click', () => {
    console.log(nomeCompleto('Gabriel', 'Bulhões'))
})

// corrija o erro abaixo

var totalPaises = 193 // o erro era essa variável que estava dentro da função precisoVisitar, dessa forma não funcionava na função de baixo

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}

console.log(precisoVisitar(20), jaVisitei(20))