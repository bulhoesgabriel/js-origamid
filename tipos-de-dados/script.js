var idade = 26
var simbolo = Symbol()

// todos são primitivos exceto os objetos
// primitivos -> dados imutáveis

console.log(typeof idade, typeof simbolo)

var nome = 'Gabriel'
var sobrenome = 'Bulhões'

var nomeCompleto = nome + ' ' + sobrenome

console.log(nomeCompleto)

var gols = 1000
var frase = 'Romário fez ' + gols + ' gols'

// template strings
var nomeCompleto2 = `${nome} ${sobrenome}`

var frase2 = `Romário fez ${gols} gols`

console.log(frase2)