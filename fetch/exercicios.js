// Utilizando a API https://viacep.com.br/ws/${CEP}/json/ crie um formulário onde o usuário possa digitar o CEP e o endereço completo é retornado ao clicar em buscar.

// const cepInput = document.getElementById('cep')
// const buscarButton = document.querySelector('.buscar')
// const endereco = document.querySelector('.endereco')

// function buscarCep() {

//     const cep = cepInput.value
//     const url = `https://viacep.com.br/ws/${cep}/json/`

//     fetch(url)
//         .then(r => r.json())
//         .then(json => {
//             if (json.erro) {
//                 endereco.innerText = 'CEP não encontrado.'
//             } else {
//                 endereco.innerText = `${json.logradouro}, ${json.bairro}, ${json.localidade} - ${json.uf}`
//             }
//         })
//         .catch(() => {
//             endereco.innerText = 'Erro ao buscar o CEP.'
//         })
// }

// buscarButton.addEventListener('click', buscarCep)

// Utilizando a API https://blockchain.info/ticker retorne no DOM o valor de compra do bitcoin em reais e atualize esse valor a cada 30 segundos.

// const valorBtc = document.querySelector('.valor-btc')

// function buscarValorBtc() {
//     const url = 'https://blockchain.info/ticker'

//     fetch(url)
//         .then(r => r.json())
//         .then(json => {
//             valorBtc.innerText = `R$ ${json.BRL.buy}`
//         })
//         .catch(() => {
//             valorBtc.innerText = 'Erro ao buscar o valor do Bitcoin.'
//         })
// }

// setInterval(buscarValorBtc, 500)
// buscarValorBtc()

// Utilizando a API https://api.chucknorris.io/jokes/random retorne uma piada randomica de Chuck Norris ao clicar em próxima.

const piada = document.querySelector('.piada')
const proxima = document.querySelector('.proxima')

function buscarPiada() {
    const url = 'https://api.chucknorris.io/jokes/random'
    fetch(url)
        .then(r => {
            if (!r.ok) throw new Error('Erro na resposta do servidor.')
            return r.json()
        })
        .then(json => {
            piada.innerText = json.value
        })
        .catch(() => {
            piada.innerText = 'Erro ao buscar a piada.'
        })
}

proxima.addEventListener('click', buscarPiada)
buscarPiada()

// Faça o mesmo com a API https://api.adviceslip.com/advice, retorne um conselho aleatório ao clicar em próximo.

const conselho = document.querySelector('.conselho')
const proximo = document.querySelector('.proximo')

function buscarConselho() {
    const urlConselho = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
    fetch(urlConselho)
        .then(r => {
            if (!r.ok) throw new Error('Erro na resposta do servidor.')
            return r.json()
        })
        .then(json => {
            conselho.innerText = json.slip.advice
        })
        .catch(() => {
            conselho.innerText = 'Erro ao buscar o conselho.'
        })
}

proximo.addEventListener('click', buscarConselho)
buscarConselho()