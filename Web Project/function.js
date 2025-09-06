// script.js
// Tab Navigation
const tabButtons = document.querySelectorAll('.tab-btn');
const contentSections = document.querySelectorAll('.content-section');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and sections
        tabButtons.forEach(btn => btn.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding section
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

var swiper = new Swiper(".swiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 4,
                slideShadows: true,
            },
            loop:true,
            navigation:{
                nextEl: ".swiper-button-next",
                prevEL: ".swiper-button-prev",
            },
            keyboard:{
                enabled: true,
            },
            mousewheel:{
                thresholDelta: 70,
            },
            breakpoints:{
            560:{
                slidesPerView: 2.5,
            },
            768:{
                slidesPerView: 3,
            },
            1024:{
                slidesPerView: 3,
            }
        }
        }
        )