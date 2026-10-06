document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ ПРОКРУТКЕ ---
    const elementsToAnimate = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // --- 2. ЛОГИКА БУРГЕР МЕНЮ ---
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-links a');

    if (burgerMenu && navLinks) {
        // Открытие/закрытие по клику на бургер
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burgerMenu.classList.toggle('open');
        });

        // Закрытие меню при клике на любую ссылку (чтобы перейти к разделу)
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('open');
            });
        });
    }

});
