const burgerMenu=document.querySelector(' .burger-menu');
const navbar=document.querySelector(' .navbar');

burgerMenu.addEventListener('click',()=>{
    navbar.classList.toggle('active');
});