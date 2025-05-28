// Mude a cor da tela para verde e depois para laranja a cada 2s.

// setInterval(() => {
//     document.body.classList.toggle('active')
// }, 2000)

// Crie um cronômetro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo)

let i = 0

let timer

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerHTML = i++
    }, 100 + i)
    iniciar.setAttribute('disabled', '')
}

function pausarTempo() {
    clearInterval(timer)
    iniciar.removeAttribute('disabled')
}

function resetarTempo() {
    tempo.innerHTML = ``
    i = 0
}