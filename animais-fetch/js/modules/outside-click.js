export default function outsideClick(element, evts, callback) {
    const html = document.documentElement
    const outside = 'data-outside'

    if (!element.hasAttribute(outside)) {
        evts.forEach((evt) => {
            setTimeout(() => {html.addEventListener(evt, handleOutsideClick)})
        })
        element.setAttribute(outside, '')
    }
    
    function handleOutsideClick(e) {
        if (!element.contains(e.target)) {
            callback()
            evts.forEach((evt) => {
                html.removeEventListener(evt, handleOutsideClick)
            })
            element.removeAttribute(outside)
        }
    }
}