// Fetch

// Fetch API

// Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.

// const doc = fetch('./doc.txt')

// doc.then(resolucao => {
//     console.log(resolucao)
// })

// Response

// O objeto Response possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras pomises.

// doc
// .then(r => r.text())
// .then(body => {
//     const conteudo = document.querySelector('.conteudo')
//     conteudo.innerText = body
// })

// Servidor Local

// O fetch faz uma requisição HTTP/HTTPS. Se você iniciar um site local diretamente pelo index.html, sem um servidor local, o fetch não funcionará.

// .json()

// Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe.

// json() transforma o corpo da resposta em um objeto JavaScript.

// const cep = fetch('https://viacep.com.br/ws/22795780/json')

// cep.then(r => r.json())
// .then(body => {
//     const conteudo = document.querySelector('.conteudo')
//     conteudo.innerText = `CEP: ${body.cep}, Logradouro: ${body.logradouro}, Bairro: ${body.bairro}, Cidade: ${body.localidade}, Estado: ${body.uf}`
// })

// .text()

// Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais. Ele transforma o corpo da resposta em uma string.

// const style = fetch('./style.css')

// style.then(r => r.text())
// .then(body => {
//     const conteudo = document.querySelector('.conteudo')
//     const styleElement = document.createElement('style')
//     styleElement.innerHTML = body
//     conteudo.appendChild(styleElement)
// })

// HTML e .text()

// Podemos pegar um arquivo inteiro em HTML e transformá-lo em uma string. Podemos então inserir esse HTML dentro de um elemento da página.

// const sobre = fetch('./sobre.html')

// sobre.then(r => r.text())
// .then(body => {
//     const conteudo = document.querySelector('.conteudo')
//     conteudo.innerHTML = body
// })

// .blob()

// Um blob é um tipo de objeto utilizado para representação de dados. Pode ser utilizado para transformarmos requisições de imagen por exemplo. O blob gera um URL único.

// const imagem = fetch('./gohan.jpeg')

// imagem.then(r => r.blob())
// .then(body => {
//     const blobUrl = URL.createObjectURL(body)
//     console.log(blobUrl)
//     const imagemDom = document.querySelector('img')
//     imagemDom.src = blobUrl
// })

// .clone()

// Ao utilizarmos os métodos acima, text, json e blob, a respsota é modificada. Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores.

// const cep = fetch('https://viacep.com.br/ws/22795780/json')

// cep.then(r => {

//     const r2 = r.clone() // Clona a resposta

//     r.text().then(text =>{
//         console.log('Texto:', text)
//     })

//     r2.json().then(json => {
//         console.log('JSON:', json)
//     })

// })

// .headers

// É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles.

// const cep = fetch('https://viacep.com.br/ws/22795780/json')

// cep.then(r => {
//     r.headers.forEach(console.log)
// })

// .status e .ok

// Retorna o status da requisição, se foi 404, 200, 202 e mais. O .ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.

// const cep = fetch('https://viacep.com.br/ws/22795780/json')
// const naoExiste = fetch('./nao-existe.txt')

// cep.then(r => {
//     console.log(r.status) // 200
//     console.log(r.ok) // true
// })

// naoExiste.then(r => {
//     console.log(r.status) // 404
//     console.log(r.ok) // false
// })

// .url e .type

// .url retorna o url da requisição e .type retorna o tipo de reposta

// types

// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// error: erro de conexão
// opaque: no-cors, não permite acesso de outros sites

const cep = fetch('https://viacep.com.br/ws/22795780/json')
const doc = fetch('./doc.txt')

cep.then(r => {
    console.log(r.url) // https://viacep.com.br/ws/22795780/json
    console.log(r.type) // cors
})

doc.then(r => {
    console.log(r.url) // https://127.0.0.1:5500/doc.txt
    console.log(r.type) // basic
})