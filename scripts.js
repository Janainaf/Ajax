
//Exo1 et bis

let footerCounter = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function(){
  footerCounter++;
	console.log(`clic numéro ${footerCounter}`);
});

//Exo 2 

let burgerMenu = document.getElementById("navbarHeader");
	hamburger = document.querySelector("button", ".navbar-toggler").addEventListener("click", function () {
		burgerMenu.classList.toggle("collapse");
});

//Exo 3

let firstCard = document.getElementsByClassName("card-body")[0];
firstCard.getElementsByTagName("button")[1].addEventListener("click", function(){
  firstCard.getElementsByTagName("p")[0].classList.add("text-danger");
});

// Exo 4


let secondCard = document.getElementsByClassName("card-body")[1];
secondCard.getElementsByTagName("button")[1].addEventListener("click", function(){
  secondCard.getElementsByTagName("p")[0].classList.toggle("text-success");
});
