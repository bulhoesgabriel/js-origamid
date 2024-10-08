// por qual motivo o código abaixo retorna com erros?

{
    var cor = 'preto'
    var marca = 'Fiat'
    var portas = 4      // const e let não vazam o escopo do bloco
}

console.log(cor, marca, portas)

// como corrigir o erro abaixo?

const dois = 2 // colocando a declaração da variável no escopo de fora das funções

function somarDois(x) {
    return x + dois
}

function dividirDois(x) {
    return x / dois
}

console.log(somarDois(4))
console.log(dividirDois(4))

// o que fazer para o total retornar 500?

const numero = 50

for(let numero = 0; numero < 10; numero++) { // mudar o var para let no loop
    console.log(numero)
}

const total = 10 * numero;

console.log(total)