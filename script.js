let currentSlide = 2; // Startujemy od pierwszego oryginalnego projektu
const projects = document.querySelectorAll('.project');
const slider = document.querySelector('.project-slider');
const dotsContainer = document.querySelector('.slider-dots');
const projectsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
const totalSlides = 6; // Liczba oryginalnych projektów

// Tworzenie kropek
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i + 2)); // +2 bo zaczynamy od trzeciego elementu
    dotsContainer.appendChild(dot);
}

function updateSlider() {
    const slideWidth = 100 / projectsPerView;
    const offset = currentSlide * slideWidth;
    slider.style.transform = `translateX(-${offset}%)`;
    
    // Aktualizacja kropek
    const activeIndex = ((currentSlide - 2) % totalSlides + totalSlides) % totalSlides;
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= projects.length - projectsPerView) {
        // Jeśli doszliśmy do końca, płynnie przechodzimy do początku
        setTimeout(() => {
            slider.style.transition = 'none';
            currentSlide = 2;
            updateSlider();
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease';
            }, 50);
        }, 500);
    }
    updateSlider();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide <= 1) {
        // Jeśli doszliśmy do początku, płynnie przechodzimy do końca
        setTimeout(() => {
            slider.style.transition = 'none';
            currentSlide = projects.length - projectsPerView - 1;
            updateSlider();
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease';
            }, 50);
        }, 500);
    }
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// Automatyczne przewijanie co 5 sekund
let slideInterval = setInterval(nextSlide, 5000);

// Zatrzymaj automatyczne przewijanie przy najechaniu myszką
slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Wznów automatyczne przewijanie po opuszczeniu myszką
slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// Obsługa menu mobilnego
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu');

// Tworzenie overlay
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

function openMenu() {
    navLinks.classList.add('active');
    overlay.classList.add('active');
    menuToggle.querySelector('i').classList.remove('fa-bars');
    menuToggle.querySelector('i').classList.add('fa-times');
}

function closeMenuHandler() {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.querySelector('i').classList.add('fa-bars');
    menuToggle.querySelector('i').classList.remove('fa-times');
}

menuToggle.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuHandler);
overlay.addEventListener('click', closeMenuHandler);

// Zamykanie menu po kliknięciu w link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMenuHandler);
});

// Zamykanie menu po naciśnięciu Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenuHandler();
    }
});

// Funkcja przewijania do sekcji "O mnie"
function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Obsługa animacji przy przewijaniu
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Dodaj klasę fade-in do elementów, które mają być animowane
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
}); 