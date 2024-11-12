// Navegação por Tab -> vamos aplicar uma navegação por tab na lista de animais

function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo')

        function activeTab(index) {
            tabContent.forEach((section) =>{
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) =>{
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}

initTabNav()

// Accordion List -> vamos aplicar uma accordion list ao faq

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'ativo'

    if(accordionList.length) {
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)

        function activeAccordion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}

initAccordion()