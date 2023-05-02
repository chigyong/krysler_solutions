const menu = document.getElementsByClassName('menu')[0]
const navbar = document.getElementsByClassName('navbar-links')[0]


menu.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

//Scrolling Effect
AOS.init({
    duration: 2000,
 });