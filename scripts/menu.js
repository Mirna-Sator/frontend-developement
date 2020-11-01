/*menu uitklap*/
var menuSection = document.querySelector("#menu");
var buttonHamburgermenu = document.querySelector("#hamburgerbutton");
var sluitenMenu = document.querySelector("#sluiten");


function menuopen(){
	menuSection.classList.toggle("menuasosopen");
}

buttonHamburgermenu.addEventListener("click", menuopen);
sluitenMenu.addEventListener("click", menuopen);


/*heren menu tevoorschijn*/
var damesknop = document.querySelector(".menuasos button:first-of-type");
var herenknop = document.querySelector(".menuasos button:nth-of-type(2)");
var damesmenu = document.querySelector(".menuasos ul:first-of-type");
var herenmenu = document.querySelector(".menuasos ul:nth-of-type(2)");


function klikdames(){
	herenknop.classList.remove("actief");
	damesknop.classList.add("actief");

 	damesmenu.classList.remove("verdwijnen");
 	herenmenu.classList.remove("tevoorschijn");

  herenmenu.classList.add("verdwijnen");
  damesmenu.classList.add("tevoorschijn");

}

function klikheren(){
	damesknop.classList.remove("actief");
	herenknop.classList.add("actief");

	herenmenu.classList.remove("verdwijnen");
	damesmenu.classList.remove("tevoorschijn");

  damesmenu.classList.add("verdwijnen");
  herenmenu.classList.add("tevoorschijn");

}


damesknop.addEventListener("click", klikdames);
herenknop.addEventListener("click", klikheren);
