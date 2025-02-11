import initScrollSuave from './modules/scroll-suave.js'
import initAnimacaoScroll from './modules/animacao-scroll.js'
import initAccordion from './modules/accordion.js'
import initTabNav from './modules/tab-nav.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'

initScrollSuave()
initAnimacaoScroll()
initAccordion()
initTabNav()
initModal()
initTooltip()
initDropdownMenu()

// 0506 Event Bubble

// Bubble -> verifica se o elemento parent (body) possui um evento de clique. Não possui, segue para o próximo (body -> html -> document -> window (pai de todos)).