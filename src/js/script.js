const menuIcone = document.getElementById('menu-icone');
const navLinks = document.getElementById('links');

menuIcone.addEventListener('click', () => {
    menuIcone.classList.toggle('ativo');
    navLinks.classList.toggle('ativo');
});