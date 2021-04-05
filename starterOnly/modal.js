function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}



//function check if it's empty
function nameCheked(value) {
  value = value.trim();
    if(value != "" && value.length > 2 && value != null){
      return true;
    }
      return false;
}

//function check if it's an email
function isEmail(value){
  const regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

  if (regEmail.test(value)){    
    return true;
  } 
    return false;
}

//function is numerique
function isNumeric(value) {
  if (isNaN(value)){
    return false;
  } return true;
}



//function at least one radio checked
function atLeastOneCheck(input) {
  for (var i = 0; i < input.length ; i++){
    if (input[i].checked){
      return true;
    }
  } return false;  
}

// function for accepting general condition
function checkboxChecked(input) {
  if (input.checked){
    return true;
  } return false;
}

//function for error message span building
const createErrorSpan = (message) => {
  const errorMessage = document.createElement('span');
  errorMessage.className = "error-style";
  errorMessage.innerHTML = message;
  return errorMessage;
}



//validation of the formular

function validate(){
  let isErrors = false;
  if(!nameCheked(document.forms['reserve']['firstName'].value)){
    isErrors = true;
    document.forms['reserve']['firstName'].insertAdjacentElement('afterend', createErrorSpan('Veuillez entrer 2 caractères ou plus pour le prénom.'));
  }
  if(!nameCheked(document.forms['reserve']['lastName'].value)){
    isErrors = true;
    document.forms['reserve']['lastName'].insertAdjacentElement('afterend', createErrorSpan('Veuillez entrer 2 caractères ou plus pour le nom.'));
  }
  if(!isEmail(document.forms['reserve']['email'].value)){
    isErrors = true;
    document.forms['reserve']['email'].insertAdjacentElement('afterend', createErrorSpan('Veuillez entrer une adresse mail valide.'));
  }
  if(!isNumeric(document.forms['reserve']['quantity'].value)){
    isErrors = true;
    document.forms['reserve']['quantity'].insertAdjacentElement('afterend', createErrorSpan('Veuillez entrer une valeur'));
  }
  if(!atLeastOneCheck(document.forms['reserve']['location'])){
    isErrors = true;
    document.getElementsByClassName("formData")[5].insertAdjacentElement('afterend', createErrorSpan('Vous devez choisir au moins une ville.'));
  }
  if(!checkboxChecked(document.forms['reserve']['cgv'])){
    isErrors = true;
    document.getElementsByClassName("checkbox2-label")[0].insertAdjacentElement('afterend', createErrorSpan('Vous devez accepter les termes et conditions.'));
  }
  if(isErrors == true){
    return false;
  }
}

