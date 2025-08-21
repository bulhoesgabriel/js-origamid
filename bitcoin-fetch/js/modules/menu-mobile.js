import outsideClick from './outside-click.js'

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')
    const evts = ['click', 'touchstart']

    if (menuButton) {
        function openMenu(e) {
            menuList.classList.add('active')
            menuButton.classList.add('active')
            outsideClick(menuList, evts, () => {
                menuList.classList.remove('active')
                menuButton.classList.remove('active')
            })
        }
        evts.forEach(e => menuButton.addEventListener(e, openMenu))
    }
}