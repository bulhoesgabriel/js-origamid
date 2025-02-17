// Selecione cada curso e retorne uma array com objetos contendo título, descrição, aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos)

const objetosCursos = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    const aulas = curso.querySelector('.aulas').innerText
    const horas = curso.querySelector('.horas').innerText
    return {
        titulo,
        descricao,
        aulas,
        horas
    }
})

console.log(objetosCursos)

// Retorne uma lista com os números maiores que 100

const numeros = [3, 44, 333, 23, 122, 322, 33]

const maiorQue100 = numeros.filter(numero => numero > 100)

console.log(maiorQue100)

// Verifique se Baixo faz parte da lista de instrumentos e retorne true

const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some(instrumento => instrumento === 'Baixo')

console.log(temBaixo)

// Retorne o valor total das compras

const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    },
    {
        item: 'Melancia',
        preco: 'R$ 10,58'
    }
]

const valorTotal = compras.reduce((acumulador, item) => {
    const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.')
    return acumulador + precoLimpo
}, 0)

console.log(valorTotal)