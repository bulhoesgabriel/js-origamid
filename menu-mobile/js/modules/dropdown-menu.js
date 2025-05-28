import outsideClick from './outside-click.js'

export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')
    const evts = ['touchstart', 'click']

    dropdownMenus.forEach((menu) => {
        evts.forEach((evt) => {
            menu.addEventListener(evt, handleClick)
        })
    })

    function handleClick(e) {
        e.preventDefault()
        this.classList.add('active')
        outsideClick(this, evts, () => {
            this.classList.remove('active')
        })
    }
}