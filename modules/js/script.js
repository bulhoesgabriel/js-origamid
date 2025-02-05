// Módulos

// Manutenção -> Dividir o código em diferentes arquivos com funções específicas (módulos) facilita a manutenção.

// Compartilhamento -> O compartilhamento de código com outros projetos é facilitado, pois basta você importar um módulo específico.

// Nativo no ES6+ -> Ferramentas que permitem dividirmos o código em módulos já existem a bastante tempo. Grunt, Gulp, Webpack, Browserify, Parcel e outras. Mas agora os módulos são nativos.

// Modules ES6 -> Basta adicionar type="module" na tag script do HTML. Utilize a palavra chave export na frente do valor que deseja exportar (use default se for único). E import nome from arquivo.js para importar.

// <script type="module" src="js/script.js"</script>

// Arquivo scroll-suave.js

// export default function scrollSuave() {
//     ...
// }

// Arquivo script.js

import initScrollSuave from './modules/scroll-suave.js'
import initAnimacaoScroll from './modules/animacao-scroll.js'
import initAccordion from './modules/accordion.js'
import initTabNav from './modules/tab-nav.js'

initScrollSuave()
initAnimacaoScroll()
initAccordion()
initTabNav()

// Named Exports -> Você pode exportar mais de um valor. Quando for importar utilize as chaves para especificar cada valor. O nome importado deve ser igual ao exportado.

// Arquivo scroll.js

// export function scrollSuave() {
//  ...
// }

// export function scrollAnimacao() {
//  ...
// }

// Arquivo script.js

// import {scrollSuave, scrollAnimacao} from './scroll.js'
// scrollSuave()
// scrollAnimacao()

// Podemos importar tudo de um arquivo utilizando outra forma também, exemplo:

// import * as scroll from './scroll.js'
// scroll.scrollSuave()
// scroll.scrollAnimacao()

// Valores do Export -> Podemos exportar objetos, funções, classes, números, strings e mais...

// Arquivo configuracao.js

// export function scrollSuave() {}
// export const ano = 2000
// export const obj = {nome: 'Ford'}
// export const str = 'Frase'
// export class Carro {}

// Arquivo script.js

// import * as conf from './configuracao.js'
// conf.str
// conf.obj
// conf.ano

// Características

// Strict Mode -> 'use strict' por padrão em todos os arquivos.

// Variáveis ficam no module apenas -> não vazam para o escopo globo.

// This fora de um objeto faz referência a undefined -> ao invés de fazer referência ao window.

// Assíncrono

// Use Strict -> O modo estrito previne algumas ações consideradas erros. Basta adicionarmos 'use strict' no topo de um arquivo, que ele entrará neste modo.

// 'use strict'

// nome = 'Ford' // erro, variável global
// delete Array.prototype // erro, não deletável
// window.top = 200 // erro, não pode mudar
// const arguments = 3.14 // erro, palavra reservada

// Por padrão todo module está no modo estrito

// Exercício -> dividir o projeto em diferentes módulos, já feito.