let users=[];

fetch("users.json")
.then(res => res.json())
.then(data=>{
users=data;
});

document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;
let error=document.getElementById("error");

if(username=="" || password==""){
error.innerText="Please enter username and password";
return;
}

let validUser=users.find(u=>u.username===username && u.password===password);

if(validUser){

error.style.color="green";
error.innerText="Login Successful";

setTimeout(()=>{
window.location.href="dashboard.html";
},1000);

}

else{

error.style.color="red";
error.innerText="Invalid Username or Password";

}

});