document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let ruleExpandButtons = Array.from(document.querySelectorAll('.rules-screen__rules__rule'));

ruleExpandButtons.forEach(button => {
    button.onclick = () => {
        button.classList.contains('active') ?
        button.classList.remove('active') :
        button.classList.add('active');
    }
});

let burgerMenu = document.querySelector('.burger-menu');
let navLinks = document.querySelector('.navigation__links');

let mobileMenuShowUp = () => {
    burgerMenu.classList.add('active');
    navLinks.classList.add('mobile-menu');
}

let mobileMenuShowDown = () => {
    burgerMenu.classList.remove('active');
    navLinks.classList.remove('mobile-menu');
}

burgerMenu.onclick = () => {
    burgerMenu.classList.contains('active') ?
    mobileMenuShowDown() :
    mobileMenuShowUp();
}

let menuLinks = Array.from(navLinks.querySelectorAll('a'));

menuLinks.forEach(link => {
    link.onclick = () => mobileMenuShowDown();
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
