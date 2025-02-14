document.addEventListener('DOMContentLoaded' , init);

function init() {
const form =document.getElementById('registration-form');
const feedbackDiv = document.getElementById('form-feedback');
form.addEventListener( 'submit' , (event) =>{
    event.preventDefault();

    const username= document.getElementById('username').value.trim();
    const email =document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

let isValid = true;
const messages= [];
if (username.length < 3){
    isValid = false;
    messages.push("Incorrect user name entered , Username should not be less than three characters.");
}

if (!email.includes('@') && !email.includes('.')){
    isValid = false;
    messages.push("email must include '@' and '.' "); 
}
 if (password.length < 8){
    isValid = false;
    messages.push('Password should not be less than eight characters');
 }
 feedbackDiv.style.display="block";
  if (isValid){
    feedbackDiv.textContent = 'Registration successful';
    feedbackDiv.style.color= "#28a745";
  }
  else {
     feedbackDiv.innerHTML =  messages.join("<br>");
     feedbackDiv.style.color= "#dc3545";
  }
});



} ;