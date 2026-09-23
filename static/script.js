function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

const typeTextSpan = document.querySelector(".type-text");
if (typeTextSpan) {
    const words = ["AspiringData Scientist", "Backend Engineer", "Business and Tech student"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
        const currentWord = words[wordIndex];
        const currentChars = currentWord.substring(0, charIndex);
        typeTextSpan.textContent = currentChars;
        typeTextSpan.classList.add("stop-blinking");

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++; setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--; setTimeout(typeEffect, 50);
        } else {
            isDeleting = !isDeleting;
            typeTextSpan.classList.remove("stop-blinking");
            wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
            setTimeout(typeEffect, 1200);
        }
    }
    typeEffect();
}

const flipper = document.getElementById('profileFlipper');
if (flipper) {
    setInterval(() => {
        flipper.classList.toggle('flipped');
    }, 4000);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element');
        }
    });
}, { threshold: 0.1 });

const hiddenElements = document.querySelectorAll('.hidden-element');
hiddenElements.forEach((el) => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            const menu = document.getElementById('mobileMenu');
            if(menu.classList.contains('active')) toggleMenu();
        }
    });
});
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-nav');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});