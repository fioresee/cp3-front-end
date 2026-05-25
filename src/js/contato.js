const menuIcone = document.getElementById('menu-icone');
const navLinks = document.getElementById('links');

menuIcone.addEventListener('click', () => {
    navLinks.classList.toggle('ativo');

});