'use strict'

// carousel
{
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const ul = document.getElementById('carouselImages');
    const slides = ul.children;
    let currentIndex = 0;
    const dots = [];

    function uppdateButtons() {
        prev.classList.remove('hidden');
        next.classList.remove('hidden');
        
        if(currentIndex === 0) {
             prev.classList.add('hidden');
        }
        if(currentIndex === slides.length - 1) {
             next.classList.add('hidden');
        }
    }

    function slideMove() {
        uppdateButtons();
        const slideWidth = slides[0].getBoundingClientRect().width;
        ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    }

    function dotsMove() {
        dots.forEach (dot => {
           dot.classList.remove('current');
        });
        dots[currentIndex].classList.add('current');
    }

    function setupDots() {
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('button');
            dot.addEventListener('click', () => {
                currentIndex = i;
                dotsMove();
                uppdateButtons();
                slideMove
            });
            dots.push(dot);
            document.querySelector('nav').appendChild(dot);
        }
        dots[0].classList.add('current');
    }

    uppdateButtons();
    setupDots();

    next.addEventListener('click', () => {
        currentIndex++;
        slideMove();
        dotsMove();
    });
    prev.addEventListener('click', () => {
        currentIndex--;
        slideMove();
    });


}

// appear
{
    function callback(entries, obs) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
        });
    }
    const options = {
        threshold:0.3,
    };

    const observer = new IntersectionObserver(callback, options);

    const targets = document.querySelectorAll('.container');      

    targets.forEach(target => {
        observer.observe(target);
    });
}