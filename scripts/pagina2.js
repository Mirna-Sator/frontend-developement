// JavaScript Document

/*hartjesknop wit naar zwart*/
var hartjesknop = document.querySelector("#pagina2 ul:first-of-type li:first-of-type button");
var hartjesimg = document.querySelector("#pagina2 ul:first-of-type li:first-of-type button img");

function klikfavoriet() {

hartjesknop.classList.toggle("ingekleurd")
}

hartjesknop.addEventListener("click", klikfavoriet);

/*filteren knop ingedrukt*/
var filterknop = document.querySelector("#pagina2 button:nth-of-type(2)");

function klikfilter() {
  filterknop.classList.add("inklikken");

    setTimeout(
    function () {
      filterknop.classList.remove("inklikken");
    }, 300
  );
}

filterknop.addEventListener('click', klikfilter);
