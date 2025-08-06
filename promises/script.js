// Promises

// Função construtora de promessas. Existem dois resultados possíveis de uma promessa: resolvida com a execução do primeiro argumento ou rejeitada se o segundo argumento for ativado.

// const promessa = new Promise((resolve, reject) => {
//     let condicao = true
//     if (condicao) {
//         resolve({nome: 'Gabriel', idade: 27})
//     } else {
//         reject(Error('Um erro ocorreu na promise'))
//     }
// })

// console.log(promessa) // Promise { <state>: "fulfilled", <value>: undefined }

// O poder das Promises está no método then() do seu protótipo. O Callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolve().

// promessa.then(resolucao => console.log(resolucao)) // Object { nome: "Gabriel", idade: 27 }

// Assíncrono

// As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. O poder está na execução de código assíncrono que executará o resolve() ao final dele.

// const promessa =  new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Resolvida após 3s')
//     }, 3000)
// })

// promessa.then(resolucao => console.log(resolucao)) // Resolvida após 3s

// then().then()

// O método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then será o valor do retorno anterior.

// const promessa = new Promise((resolve, reject) => {
//   resolve("Etapa 1")
// })

// promessa.then((resolucao) => {
//     console.log(resolucao) // Etapa 1
//     return "Etapa 2"
//   }).then((resolucao) => {
//     console.log(resolucao) // Etapa 2
//     return "Etapa 3"
//   }).then(r => r + 4).then(r => console.log(r)) // Etapa 34

// catch()

// O método catch(), do protótipo de Promise, adiciona um callback a promessa que será ativado caso a mesma seja rejeitada.

// const promessa = new Promise((resolve, reject) => {
//     let condicao = false
//     if (condicao) {
//         resolve('Tudo certo')
//     } else {
//         reject(Error('Um erro ocorreu'))
//     }
// })

// promessa.then(resolucao => console.log(resolucao)).catch(reject => console.log(reject)) // Error: Um erro ocorreu

// Podemos passar a função que será ativada caso a promise seja rejeitada direto no método then, como segundo argumento:

// then(resolve, reject)

// promessa.then(resolucao => console.log(resolucao), reject => console.log(reject)) // Error: um erro ocorreu

// finally()

// Executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada.

// const promise = new Promise((resolve, reject) => {
//     let condition = true
//     if (condition) {
//         resolve('Resolveu')
//     } else {
//         reject(Error('Rejeitou'))
//     }
// })

// promise.then(resolve => console.log(resolve), reject => console.log(reject)).finally(() => console.log('Acabou')) // Resolveu, Acabou

// Promise.all() -> Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A resposta é uma array com as respostas de cada promise.

const login = new Promise(resolve => {
    setTimeout(() => {
        resolve('Login efetuado')
    }, 1000)
})

const dados = new Promise(resolve => {
    setTimeout(() => {
        resolve('Dados carregados')
    }, 1500)
})

// const tudoCarregado = Promise.all([login, dados])

// tudoCarregado.then(respostas => console.log(respostas)) // Array com ambas respostas

// Promise.race() -> Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá o mesmo valor da primeira promise resolvida ou rejeitada.

const carregouPrimeiro = Promise.race([login, dados]) // Corrida de Promises

carregouPrimeiro.then(resposta => console.log(resposta)) // Login efetuado, pois foi a primeira promise resolvida