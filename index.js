console.log("hello world");
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

const submit=document.getElementById("btn");

console.log(name);
console.log(email);
console.log(password);
console.log(submit);

submit.addEventListener("click",function(){
    event.preventDefault();
    console.log("button clicked");
    console.log(name.value);
    console.log(email.value);
    console.log(password.value);

    alert("name:" + nom.value + "\n" + "email:" + email.value + "\n" + "password:" + password.value);

