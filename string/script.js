// String -> é a construtora de strings, toda string possui as propriedades e métodos do prototype de string

// const comida = 'Pizza'

// const liquido = new String('Água')

// const ano = new String(2018)

// .length -> propriedade com o total de caracteres da string

// const frase = 'A melhor comida'

// console.log(comida.length, frase.length, comida[0], frase[0], frase[frase.length - 1]) // 5, 15, P, A, a

// .charAt(n) -> retorna o caractere de acordo com o index de (n)

// const linguagem = 'JavaScript'

// console.log(linguagem.charAt(0), linguagem.charAt(2), linguagem.charAt(linguagem.length - 1)) // J, v, t

// console.log(linguagem[linguagem.length], linguagem.charAt(linguagem.length)) // undefined, empty string

// .concat(str2, str3, ...) -> concatena as strings e retorna o resultado

// const frase = 'A melhor linguagem é '

// const fraseFinal = frase.concat(linguagem, '!', ' Podemos continuar concatenando')

// .includes(search, position) -> procura pela string exata dentro de outra string, a procura é case sensitive

// const fruta = 'Banana'

// const listaFrutas = 'Melancia, Banana, Laranja'

// console.log(listaFrutas.includes(fruta), fruta.includes(listaFrutas)) // true, false

// console.log(listaFrutas.includes(fruta, 14)) // false

// .endsWith(search) e .startsWith(search)

// console.log(fruta.endsWith('nana'), fruta.startsWith('Ba'), fruta.startsWith('na')) // true, true, false

// .slice(start, end) -> corta a string de acordo com os valores de start e end

// const transacao1 = 'Depósito de cliente'
// const transacao2 = 'Depósito de fornecedor'
// const transacao3 = 'Taxa de camisas'

// console.log(transacao1.slice(0, 3), transacao3.slice(0, 3)) // Dep, Tax
// console.log(transacao1.slice(12), transacao1.slice(-4), transacao1.slice(3, 6)) // cliente, ente, ósi

// .substring(start, end -> faz o mesmo que o slice mas não funciona com valores negativos

// const linguagem = 'JavaScript'

// console.log(linguagem.substring(3, 5), linguagem.substring(0, 4), linguagem.substring(4), linguagem.substring(-3)) // aS, Java, Script, JavaScript

// .indexOf(search) e .lastIndexOf(search) -> retorna o index da string, assim que achar o primeiro resultado ele já retorna, no caso do lastIndexOf ele retorna o último resultado

// const instrumento = 'Guitarra'

// console.log(instrumento.indexOf('r'), instrumento.lastIndexOf('r'), instrumento.indexOf('ta')) // 5, 6, 3

// .padStart(n, String) e .padEnd(n, String) -> aumenta o tamanho da string para o valor de n, ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres, o preenchimento é feito com espaços, caso não seja declarado o segundo argumento

// const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000']

// listaPrecos.forEach((preco) => {
//     console.log(preco.padStart(10, '~'))
// })

// console.log(listaPrecos[0].padStart(10, '.'), listaPrecos[0].padEnd(10, '.')) // .....R$ 99, R$ 99.....

// .repeat(n) -> repete a string (n) vezes

// const frase = 'Ta'

// console.log(frase.repeat(5)) // TaTaTaTaTa

// .replace(String ou regular expression, String ou function) -> troca parte da string por outra, podemos utilizar uma regular expression ou um valor direto, se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar

// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'

// listaItens = listaItens.replace(/[ ]+/g, ', ') // Camisas, Bonés, Calças, Bermudas, Vestidos, Saias

// let preco = 'R$ 1200,43'

// preco = preco.replace(',', '.') // R$ 1200.43

// .split(padrao) -> divide a string de acordo com o padrão passado e retorna uma array

// const arrayItens = listaItens.split(', ')

// console.log(arrayItens) // Array com 6 strings

// const htmlText = '<div>O melhor item</div> <div>A melhor lista</div>'
// const htmlArray = htmlText.split('div')
// htmlNovo = htmlArray.join('section') // join é um método de Array

// console.log(htmlNovo) // <section>O melhor item</section> <section>A melhor lista</section>

// .toLowerCase() e .toUpperCase() -> retorna a string em letras maiúsculas ou minúsculas, bom para verificarmos input de usuários

// const sexo1 = 'Feminino'
// const sexo2 = 'feminino'
// const sexo3 = 'FEMININO'

// console.log(sexo1.toLowerCase() === 'feminino', sexo2.toLowerCase() === 'feminino', sexo3.toLowerCase() === 'feminino')

// .trim(), .trimStart(), .trimEnd() -> remove espaço em branco do início ou final de uma string

// const valor = '  R$ 23.00  '

// console.log(valor.trim()) // 'R$ 23.00'
// console.log(valor.trimStart()) // 'R$ 23.00  '
// console.log(valor.trimEnd()) // '  R$ 23.00'