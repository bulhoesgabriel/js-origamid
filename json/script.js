// JSON

// JavaScript Object Notation é um formato de organização de dados, compostos por um conjunto de chave e valor. As asplas duplas são obrigatórias, tanto na chave quanto no valor quando este for uma string.

// Valores: podem ser números, strings, boolean, arrays, objetos e null.

// Arrays e Objetos: é comum possuirmos array's com objetos em cada valor da array. Cuidado para não colocar vírgula no último item do objeto ou da array.

// fetch('./dados.json').then(r => r.json()).then(json => json.forEach(aula => console.log(aula.id, aula.nome, aula.tempo)))

// JSON.parse() e JSON.stringify()

// JSON.parse() irá transformar um texto JSON em um objeto JavaScript. JSON.stringify() irá transformar um objeto JavaScript em um texto JSON.

// Hoje em dia já temos o método .json() utilizado no lugar do JSON.parse()

const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript",
}

localStorage.config = JSON.stringify(configuracoes)

console.log(JSON.parse(localStorage.config))