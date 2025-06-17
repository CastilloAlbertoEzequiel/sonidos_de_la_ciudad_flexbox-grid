
// Script básico para efectos de scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, #FF6B35, #F7931E)';
        header.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
    } else {
        header.style.background = 'linear-gradient(135deg, #FF6B35, #F7931E)';
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    }
});

// Animación de entrada para las tarjetas de artistas
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    const cards = document.querySelectorAll('.artist-card');
    cards.forEach((card, index) => {
        if (isElementInViewport(card)) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}

// Inicializar animaciones
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.artist-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
    });
});

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);
