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
