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
const submitBtn = document.querySelectorAll(".btn-submit");


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
  const regPhone = new RegExp('^(\\+33|0|0033)[1-9][0-9]{8}$');

  if (regPhone.test(value)){    
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

//function check the age
const checkAge = () => {
  let yearOfBirth = document.querySelector('input[type="date"]').value.split('-')[0];
  let monthOfBirth = document.querySelector('input[type="date"]').value.split('-')[1];
  let dayOfBirth = document.querySelector('input[type="date"]').value.split('-')[2];
  let age = 18;
  let myDate = new Date();
  myDate.setFullYear(yearOfBirth, monthOfBirth - 1, dayOfBirth);

  var currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - age);
  if ((currentDate - myDate) < 0 || document.getElementById('birthdate').value == "" ) {
    return false;
  } return true;
}

//function is numerique
function isNumeric(value) {  
  if (isNaN(value) || value < 0 || value > 99 || value == ""){
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
  let isErrors = false;
  let formReserve = document.forms['reserve'];
  let firstName = formReserve['firstName'];
  let lastName = formReserve['lastName'];
  let phone = formReserve['phone'];
  let email = formReserve['email'];
  let age = formReserve['birthdate'];
  let quantity = formReserve['quantity'];
  let location = formReserve['location'];
  let cgv = formReserve['cgv'];
  document.querySelectorAll('.error').forEach(error => error.remove());
  document.querySelectorAll('.error--bg').forEach(error => error.classList.remove('error--bg'));
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
    phone.insertAdjacentElement('afterend', createErrorSpan('Veuillez entrer un numéro de téléphone valide.'));
  }
  if(!isEmail(email.value)){
    isErrors = true;
    email.classList.add('error--bg');
    email.insertAdjacentElement('afterend', createErrorSpan('Veuillez entrer une adresse mail valide.'));
  }
  if(!checkAge(age.value)){
    isErrors = true;
    age.classList.add('error--bg');
    age.insertAdjacentElement('afterend', createErrorSpan('Vous devez avoir au moins 18 ans.'));
  }
  if(!isNumeric(quantity.value)){
    isErrors = true;
    quantity.classList.add('error--bg');
    quantity.insertAdjacentElement('afterend', createErrorSpan('Veuillez entrer une valeur comprise entre 0 et 99.'));
  }
  if(!atLeastOneCheck(location)){
    isErrors = true;
    location[0].parentNode.classList.add('error--bg');
    document.getElementsByClassName("formData")[6].insertAdjacentElement('afterend', createErrorSpan('Vous devez choisir au moins une ville.'));
  }
  if(!checkboxChecked(cgv)){
    isErrors = true;
    document.getElementsByClassName("checkbox2-label")[0].children[0].classList.add('error--bg');
    document.getElementsByClassName("checkbox2-label")[0].insertAdjacentElement('afterend', createErrorSpan('Vous devez accepter les termes et conditions.'));
  }
  if(isErrors == true){
    return false;
  } else {
    const modalBody = document.querySelector('.modal-body');
    modalBody.classList.add('message-sended');
    modalBody.innerHTML = 'Merci, votre formulaire a bien été envoyé !';
    var buttonClose = document.createElement("button");
    buttonClose.classList.add('button','button:hover','button-close');
    buttonClose.innerHTML = "Fermer";
    modalBody.appendChild(buttonClose);
    buttonClose.addEventListener ("click", closeModal);    
  }
}

