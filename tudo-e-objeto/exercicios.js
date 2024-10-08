// nomeie 3 propriedades ou métodos de strings

var string = 'String'

console.log(string.length)

console.log(string.charAt(0))

console.log(string.replace('ring', 'art'))

// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('.btn')

btn.classList.add('ativo')

console.log(btn.classList)

console.log(btn.innerHTML)

console.log(btn.id)

btn.addEventListener('click', () => {
    console.log('Clicou')
})

// busque na web um objeto (método) capaz de interagir com o clipboard

new ClipboardJS('.btn')