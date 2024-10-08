// adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach((item) => {
    item.classList.add('ativo')
    console.log(item)
})

// remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach(item => {
    item.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo')

console.log(itensMenu)

// verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img')

imgs.forEach((item) =>{
    console.log(item.hasAttribute('alt'))
})

// modifique o href do link externo no menu

itensMenu[--itensMenu.length].setAttribute('href', 'https://www.google.com/')

console.log(itensMenu[--itensMenu.length].attributes)