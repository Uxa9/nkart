document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let ruleExpandButtons = Array.from(document.querySelectorAll('.expand-button'));

ruleExpandButtons.forEach(button => {
    button.onclick = () => {
        button.parentNode.parentNode.classList.contains('active') ?
        button.parentNode.parentNode.classList.remove('active') :
        button.parentNode.parentNode.classList.add('active');

    }
});
