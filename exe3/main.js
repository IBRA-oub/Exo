const form = document.querySelector('form');
const nom = document.querySelector('input[name="nom"]');
const email = document.querySelector('input[name="email"]');
const textArea = document.querySelector('textarea[name="message"]');

const error = document.querySelector('.errorMessage');
const error1 = document.querySelector('.errorMessage1');
const error2 = document.querySelector('.errorMessage2');


let form_valid = false;
let form_valid1=false;
let form_valid2=false;



var lowercase = /[a-z]/;
var uppercase = /[A-Z]/;
var specialChar = /[^a-zA-Z0-9]/g;

//===================validation-champ-nom==============


const validate_nom= () => {

    if (!nom.value) {
        
        error.innerText = 'nom should not be empty';
        form_valid = false;

    }

    else if (nom.value.length < 8) {
        
        error.innerText = '8 caracter au min ';
        form_valid = false;
    }

    else if (specialChar.test(nom.value)) {
        
        error.innerText = 'nom  ne doit pas contenir des caractere special';
        form_valid = false;
    }

    else {
        
        error.innerText = "";
        form_valid = true;

    }
}

//=====================champ-email================
const validate_email= () => {

    if (!email.value) {
        
        error1.innerText = 'email should not be empty';
        form_valid1 = false;

    }
    else {
       
        error1.innerText = "";
        form_valid1 = true;

    }
}
//=====================champ-message==============
const validate_message= () => {

    if (!textArea.value) {
        
        error2.innerText = 'message should not be empty';
        form_valid2 = false;

    }
    else {
        
        error2.innerText = "";
        form_valid2 = true;

    }
}
//===================submit====================

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate_nom();
    validate_email();
    validate_message();

    if (form_valid == true && form_valid1 == true && form_valid2 == true) {
        form.submit();
    }
})