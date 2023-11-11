document.addEventListener('scroll', function () {
    const scrolled = window.scrollY;

    // Déplacement du fond du conteneur (ciel) à une vitesse plus lente
    //document.querySelector('.container').style.backgroundPositionY = `-${scrolled * 0.7}px`;

    // Déplacement de la lune à une vitesse moyenne
   document.querySelector('.moon').style.transform = `translateY(${scrolled * 0.6/2}px)`;

    // Déplacement des montagnes à une vitesse plus rapide
    document.querySelector('.montagne').style.transform = `translateY(-${scrolled * 0.6}px)`;

    document.querySelector('.sun').style.transform = `translateY(${scrolled * 0.7/2}px)`;

    document.querySelector('.daymontagne').style.transform = `translateY(-${scrolled * 0.6}px)`;
});





