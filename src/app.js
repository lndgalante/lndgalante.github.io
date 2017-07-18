const menu = document.querySelector('.nav-menu')
const burger = document.querySelector('.nav-toggle')
const menuItem = document.querySelectorAll('.nav-item')

const sections = document.querySelectorAll('section')
const aboutSection = document.querySelector('.about-section')
const projectsSection = document.querySelector('.projects-section')

burger.addEventListener('click', function() {
  this.classList.toggle('is-active')
  menu.classList.toggle('is-active')
})

function removeActives() {
  menuItem.forEach(item => item.classList.remove('is-active'))
}

function hideAll() {
  sections.forEach(section => section.classList.add('is-hidden'))
}

menuItem.forEach(item => {
  item.addEventListener('click', function() {
    removeActives()
    this.classList.add('is-active')

    if (burger.classList.contains('is-active')) {
      burger.classList.remove('is-active')
      menu.classList.remove('is-active')
    }

    if (this.classList.contains('about')) {
      hideAll()
      aboutSection.classList.remove('is-hidden')
    }

    if (this.classList.contains('projects')) {
      hideAll()
      projectsSection.classList.remove('is-hidden')
    }
  })
})
