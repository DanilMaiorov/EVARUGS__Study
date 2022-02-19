const modalBtn = document.querySelector('.main-display__left-button')
const modal = document.querySelector('.modal')

function disableScrolling () {
    const x = window.scrollX
    const y = window.scrollY
    window.onscroll = function () {
        window.scrollTo(x, y) 
    }
}

modalBtn.addEventListener('click', () => {
    modal.classList.add('active')
    disableScrolling()
})
modal.addEventListener('click', (e) => {
    if(!e.target.closest('.modal__inner'))
    modal.classList.remove('active')
    window.onscroll = function () {};
})