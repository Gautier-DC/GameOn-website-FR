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
  } alert('cgv') 
  return false;
}

//validation of the formular

function validate(){
  let isErrors = false;
  if(!nameCheked(document.forms['reserve']['firstName'].value)){
    isErrors = true;
  }
  if(!nameCheked(document.forms['reserve']['lastName'].value)){
    isErrors = true;
  }
  if(!isEmail(document.forms['reserve']['email'].value)){
    isErrors = true;
  }
  if(!isNumeric(document.forms['reserve']['quantity'].value)){
    isErrors = true;
  }
  if(!atLeastOneCheck(document.forms['reserve']['location'])){
    isErrors = true;
  }
  if(!checkboxChecked(document.forms['reserve']['cgv'])){
    isErrors = true;
  }
  if(isErrors == true){
    return false;
  }






}
