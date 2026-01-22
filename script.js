document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelector(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const dots = document.querySelector(".dot");

    let currentSlide = 0;
    const slideCount = slides.clientHeight;

    updateSlider();

    let slideInterval = setInterval(nextslide, 1000);

    function nextslide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
        resetInterval();

    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
        resetInterval();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide })`
    }
    
    
    
    


})