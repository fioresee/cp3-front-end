const menuIcone = document.getElementById('menu-icone');
const navLinks = document.getElementById('links');

menuIcone.addEventListener('click', () => {
    navLinks.classList.toggle('ativo');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('ativo');
    });
});