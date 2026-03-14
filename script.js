function validateName(){

let name=document.getElementById("name").value;

if(name.length<3){
document.getElementById("msg").innerText="Name must be at least 3 characters";
return false;
}

document.getElementById("msg").innerText="";
return true;

}

function validateEmail(){

let email=document.getElementById("email").value;

let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(pattern)){
document.getElementById("msg").innerText="Enter a valid email";
return false;
}

document.getElementById("msg").innerText="";
return true;

}

function submitForm(){

if(validateName() && validateEmail()){

alert("Feedback Submitted Successfully!");

document.getElementById("feedbackForm").reset();

}

else{

alert("Please correct the errors before submitting");

}

}