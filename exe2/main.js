//image to arrays
var sliderImages = Array.from(document.querySelectorAll('.slide-container img'));
var slidesCount = sliderImages.length;
var courrentSlide = 0; // Initialisez à 0 pour commencer par la première image
var autoSlideInterval;

function autoSlide() {
    courrentSlide++;
    if (courrentSlide >= slidesCount) {
        courrentSlide = 0; // Revenir à la première image
    }
    checker();
}

// Lancement automatique au chargement de la page
autoSlideInterval = setInterval(autoSlide, 2000);

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function resumeAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 2000);
}

//===============nextSlide============
var nextButton = document.querySelector('.next');

nextButton.addEventListener('click', () => {
    courrentSlide++;
    if (courrentSlide >= slidesCount) {
        courrentSlide = 0; // Revenir à la première image
    }
    checker();
    stopAutoSlide();
    resumeAutoSlide();
});

//===============prevSlide============
var prevButton = document.querySelector('.prev');

prevButton.addEventListener('click', () => {
    courrentSlide--;
    if (courrentSlide < 0) {
        courrentSlide = slidesCount - 1; // Revenir à la dernière image
    }
    checker();
    stopAutoSlide();
    resumeAutoSlide();
});

function checker() {
    removeAllActive();
    //add active to slide that is currently
    sliderImages[courrentSlide].classList.add('active');
}

//remove all active
function removeAllActive() {
    sliderImages.forEach((imgs) => {
        imgs.classList.remove('active');
    });
}