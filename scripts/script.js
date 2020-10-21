// JavaScript Document

/*menu*/
var menuSection = document.querySelector("#menu");
var buttonHamburgermenu = document.querySelector("#hamburgerbutton");
var sluitenMenu = document.querySelector("#sluiten");


function menuopen(){
	menuSection.classList.toggle("menuasosopen");
}

buttonHamburgermenu.addEventListener("click", menuopen);
sluitenMenu.addEventListener("click", menuopen);
