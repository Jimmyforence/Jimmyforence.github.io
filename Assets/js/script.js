document.querySelector(".burguer").addEventListener("click", aBurguer);

var line1= document.querySelector(".line1");
var line2= document.querySelector(".line2");
var line3= document.querySelector(".line3");
var hyper= document.querySelector(".login");
var side= document.querySelector(".side");

function aBurguer(){
    line1.classList.toggle("activeline1");
    line2.classList.toggle("activeline2");
    line3.classList.toggle("activeline3");
    
    hyper.classList.toggle("logins");
    side.classList.toggle("sidekick");
}

