export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]')
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

    const dataAgora = new Date()
    const diaAgora = dataAgora.getDay()
    const horarioAgora = dataAgora.getHours()

    const diaAberto = diasSemana.indexOf(diaAgora) !== -1

    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])

    if (diaAberto && horarioAberto) {
        funcionamento.classList.add('aberto')
    }
}

// Object Date

// const agora = new Date()
// console.log(agora)
// console.log(agora.getDate())
// console.log(agora.getDay())
// console.log(agora.getMonth())
// console.log(agora.getFullYear())
// console.log(agora.getHours())
// console.log(agora.getMinutes())
// console.log(agora.getTime()) // milissegundos desde 01/01/1970
// console.log(agora.getUTCHours() - 3) // Brasília

// const futuro = new Date('Dec 24 2025 23:59')
// console.log(futuro)

// function converterEmDias(tempo) {
//     return tempo / (24 * 60 * 60 * 1000)
// }

// console.log(converterEmDias(agora.getTime())) // 20.241 dias desde 01/01/1970

// const diasAgora = converterEmDias(agora.getTime())
// const diasFuturo = converterEmDias(futuro.getTime())
// const diasProNatal = diasFuturo - diasAgora

// console.log(Math.floor(diasProNatal)) // Math.floor para arrendodar o número quebrado

// Exercício: tempo restante de promoção em horas

// const promocao = new Date('Jun 10 2025 23:59')

// function converterEmHoras(tempo) {
//     return tempo / (60 * 60 * 1000)
// }

// const horasAgora = converterEmHoras(agora.getTime())
// const horasPromocao = converterEmHoras(promocao.getTime())
// const horasRestantesPromocao = horasPromocao - horasAgora
// console.log(horasRestantesPromocao)