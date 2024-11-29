const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']

// remova o primeiro valor de comidas e coloque em uma variável

primeiroValorComidas = comidas.shift()
console.log(comidas)
console.log(primeiroValorComidas)

// remova o último valor de comids e coloque em uma variável

ultimoValorComidas = comidas.pop()
console.log(comidas)
console.log(ultimoValorComidas)

// adicione 'Arroz' ao final da array

comidas.push('Arroz')
console.log(comidas)

// adicione 'Peixe' e 'Batata' ao início da array

comidas.unshift('Peixe', 'Batata')
console.log(comidas)

// --------------------------------------------------------------------------------//

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']

// arrume os estudantes em ordem alfabética

estudantes.sort()
console.log(estudantes)

// inverta a ordem dos estudantes

estudantes.reverse()
console.log(estudantes)

// verifique se Joana faz parte dos estudantes

console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))

// --------------------------------------------------------------------------------//

let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`

// substitua section por ul e div por li utilizando split e join

html = html.split('section').join('ul').split('div').join('li')
console.log(html)

// --------------------------------------------------------------------------------//

const carros = ['Ford', 'Fiat', 'VW', 'Honda']

// remova o último carro, mas antes de remover salve a array original em outra variável

carrosClone = carros.slice()
carros.pop()
console.log(carros)
console.log(carrosClone)