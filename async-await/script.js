// Async Await

// A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar. O await irá indicar a promise que devemos esperar. Faz parte do ES8.

// async function puxarDados() {
//     const responseDados = await fetch('./dados.json')
//     const jsonDados = await responseDados.json()
//     console.log(jsonDados) // { aula: "JavaScript" }
// }

// puxarDados()

// Then / Async

// A diferença é uma sintaxe mais limpa e fácil de entender.

// Try / Catch

// Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.

// async function puxarDados() {
//     try {
//         const responseDados = await fetch('./dados.json')
//         const jsonDados = await responseDados.json()
//         document.body.innerText = jsonDados.aula
//     } catch (erro) {
//         console.log(erro)
//     }
// }

// puxarDados()

// Iniciar Fetch ao mesmo tempo

// Não precisamos esperar um fetch para começarmos outro. Porém precisamos eperar a resposta resolvida do catch para transformarmos a response em json.

// async function puxarDados() {
//     const responseDados = fetch('./dados.json')
//     const responseClientes = fetch('./clientes.json')
//     const jsonDados = await (await responseDados).json()
//     const jsonClientes = await (await responseClientes).json()
//     console.log(jsonDados.aula) // JavaScript
//     console.log(jsonClientes.nome) // Gabriel
// }

// puxarDados()

// Promise

// O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será sempre o resultado dessa promise.

async function asyncSemPromise() {
    // Console não irá esperar.
    await setTimeout(() => console.log('Depois de 1s'), 1000)
    console.log('Acabou')
}
asyncSemPromise()

async function iniciarAsync() {
    await new Promise (resolve => {
        setTimeout(() => resolve(), 1000)
    })
    console.log('Depois de 1s')
}
iniciarAsync()