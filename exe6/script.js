
const evenementDate = new Date('2023-12-31T23:59:59');  // Date de l'événement



const updateCountdown = () => {

    const actuelDate = new Date();
    const tempsRestant = evenementDate - actuelDate;


    const days = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
    const hours = Math.floor((tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((tempsRestant % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
};

// mise a jour de la fonction chaque second
setInterval(updateCountdown, 1000);