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

//function check if it's a phone number
function isPhone(value){
  const regEmail = new RegExp('^[+][(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]$');

  if (regEmail.test(value)){    
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
  const errorMessage = document.createElement('div');
  errorMessage.className = "error";
  errorMessage.innerHTML = message;
  return errorMessage;
}



//validation of the formular

function validate(){
  let formReserve = document.forms['reserve'];
  let isErrors = false;
  document.querySelectorAll('.error').forEach(error => error.remove());
  document.querySelectorAll('.error--bg').forEach(error => error.classList.remove('error--bg'));
  let firstName = formReserve['firstName'];
  let lastName = formReserve['lastName'];
  let phone = formReserve['phone'];
  let email = formReserve['email'];
  let quantity = formReserve['quantity'];
  let location = formReserve['location'];
  let cgv = formReserve['cgv'];
  if(!nameCheked(firstName.value)){
    isErrors = true;
    firstName.classList.add('error--bg');
    firstName.insertAdjacentElement('afterend', createErrorSpan('Veuillez entrer 2 caractères ou plus pour le prénom.'));
  }
  if(!nameCheked(lastName.value)){
    isErrors = true;
    lastName.classList.add('error--bg');
    lastName.insertAdjacentElement('afterend', createErrorSpan('Veuillez entrer 2 caractères ou plus pour le nom.'));
  }
  if(!isPhone(phone.value)){
    isErrors = true;
    phone.classList.add('error--bg');
    phone.insertAdjacentElement('afterend', createErrorSpan('Veuillez entrer 2 caractères ou plus pour le nom.'));
  }
  if(!isEmail(email.value)){
    isErrors = true;
    email.classList.add('error--bg');
    email.insertAdjacentElement('afterend', createErrorSpan('Veuillez entrer une adresse mail valide.'));
  }
  if(!isNumeric(quantity.value)){
    isErrors = true;
    quantity.classList.add('error--bg');
    quantity.insertAdjacentElement('afterend', createErrorSpan('Veuillez entrer une valeur'));
  }
  if(!atLeastOneCheck(location)){
    isErrors = true;
    location[0].parentNode.classList.add('error--bg');
    document.getElementsByClassName("formData")[5].insertAdjacentElement('afterend', createErrorSpan('Vous devez choisir au moins une ville.'));
  }
  if(!checkboxChecked(cgv)){
    isErrors = true;
    document.getElementsByClassName("checkbox2-label")[0].children.classList.add('error--bg');
    document.getElementsByClassName("checkbox2-label")[0].insertAdjacentElement('afterend', createErrorSpan('Vous devez accepter les termes et conditions.'));
  }
  if(isErrors == true){
    return false;
  }
}

