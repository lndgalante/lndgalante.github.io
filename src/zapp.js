const scroll = new SmoothScroll()

const smoothScrollWithoutHash = function(selector, settings) {
  const clickHandler = function(event) {
    const toggle = event.target.closest(selector)
    if (!toggle || toggle.tagName.toLowerCase() !== 'a') return
    const anchor = document.querySelector(toggle.hash)
    if (!anchor) return
    event.preventDefault()
    scroll.animateScroll(anchor, toggle, settings || {})
  }
  window.addEventListener('click', clickHandler, false)
}

smoothScrollWithoutHash('a[href*="#"]', {
  speed: 400,
  header: '.navbar',
})

const menu = document.querySelector('.navbar-menu')
const burger = document.querySelector('.navbar-burger')
const menuItem = document.querySelectorAll('.navbar-item')

const about = document.querySelector('.about')
const projects = document.querySelector('.projects')
const references = document.querySelector('.references')

burger.addEventListener('click', function() {
  this.classList.toggle('is-active')
  menu.classList.toggle('is-active')
})

function removeActives() {
  menuItem.forEach(item => item.classList.remove('is-active'))
}

menuItem.forEach(item => {
  item.addEventListener('click', function() {
    removeActives()
    this.classList.add('is-active')

    if (burger.classList.contains('is-active')) {
      burger.classList.remove('is-active')
      menu.classList.remove('is-active')
    }
  })
})
