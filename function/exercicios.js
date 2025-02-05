// Retorne a soma total de caracteres dos paragráfos utilizando reduce

const paragrafos = document.querySelectorAll('p')

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length
}, 0)

console.log(totalCaracteres)

// Crie uma função que retorna novos elementos html, com os seguintes parâmetros: tag, classe e conteúdo

function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag)
    classe ? elemento.classList.add(classe) : null
    conteudo ? elemento.innerHTML = conteudo : null
    return elemento
}

console.log(criarElemento('div', 'ativo', 'Esse é o conteúdo'))

// Crie uma nova função utilizando a anterior como base, essa nova função deverá sempre criar h1 com a classe titulo, porém o parâmetro conteúdo continuará dinâmico

const criarTitulo = criarElemento.bind(null, 'h1', 'titulo')

console.log(criarTitulo('Conteúdo do título'))