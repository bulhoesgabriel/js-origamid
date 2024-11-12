// utilizando o forEach na array abaixo, some os valores de taxa e os valores de recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
]

let taxaTotal = 0
let recebimentoTotal = 0

transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '')
     if (item.descricao.slice(0, 4) === 'Taxa') {
        taxaTotal += numeroLimpo
     } else {
        recebimentoTotal += numeroLimpo
     }
})

console.log(taxaTotal, recebimentoTotal)

// retorne uma array com a lista abaixo

const transportes = 'Carro;Avião;Trem;ônibus;Bicicleta'

const transportesArray = transportes.split(';')
console.log(transportesArray)

// substitua todos os span's por a's

let html = `
    <ul>
        <li><span>Sobre</span></li>
        <li><span>Produtos</span></li>
        <li><span>Contato</span></li>
    </ul>
`

html = html.split('span').join('a')
console.log(html)

// retorne o último caractere da frase

const frase = 'Melhor do ano!'

console.log(frase.slice(-1))

// retorne o total de taxas

const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', ' taxa do mercado', 'depósito Bancário', 'TARIFA especial']

let totalTaxa = 0

transacoes2.forEach((item) => {
    item = item.toLowerCase().trim()
    if (item.slice(0, 4) === 'taxa') {
        totalTaxa ++
    }
})

console.log(totalTaxa)