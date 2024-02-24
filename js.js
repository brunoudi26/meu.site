
// Função para mostrar/ocultar menu móvel
const menuButton = document.getElementById('menu');
const closeMenuButton = document.getElementById('close-menu');
const mobileNavbar = document.getElementById('mobile-navbar');

menuButton.addEventListener('click', function() {
mobileNavbar.style.display = 'block';
});

closeMenuButton.addEventListener('click', function() {
mobileNavbar.style.display = 'none';
});

// Função para alternar entre banners
const banners = document.querySelectorAll('.banner');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
dot.addEventListener('click', function() {
    hideAllBannersAndDots();
    banners[index].classList.add('active');
    dot.classList.add('active');
});
});

function hideAllBannersAndDots() {
banners.forEach(banner => {
    banner.classList.remove('active');
});
dots.forEach(dot => {
    dot.classList.remove('active');
});
}

// Função para validação de formulário
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
event.preventDefault(); // Impede o envio do formulário

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const message = document.getElementById('message').value;

if (name && email && phone && message) {
    alert('Formulário enviado com sucesso!');
    // Aqui você pode adicionar código para enviar os dados do formulário para o servidor
    form.reset(); // Limpa o formulário após o envio
} else {
    alert('Por favor, preencha todos os campos do formulário.');
}
});

// Função para contador de visitas
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);
const footer = document.getElementById('footer');
const visitCounter = document.createElement('p');
visitCounter.textContent = `Total de visitas: ${visitCount}`;
footer.appendChild(visitCounter);

// Função para rolagem suave ao clicar nos links do menu
const links = document.querySelectorAll('nav a');

links.forEach(link => {
link.addEventListener('click', function(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const yOffset = -60; // Ajuste opcional para compensar a altura do cabeçalho

    const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
});
});

