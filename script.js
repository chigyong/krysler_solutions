const menu = document.getElementsByClassName('menu')[0]
const navbar = document.getElementsByClassName('navbar-links')[0]


menu.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

//Write a responsive navbar