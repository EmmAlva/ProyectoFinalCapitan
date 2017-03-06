function nombre(){
	var nombre = document.getElementById("nombre");
	var ingreso = prompt("Ingrese su nombre de Usuario");
	nombre.innerHTML = "Hola coder "+ ingreso;

}nombre();

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

var mostrarOcultarSprint = function (sprint){
	var sprints = document.getElementById(sprint);

	if (sprints.style.display == "block" ) {
		sprints.style.display = "none";
	} else{
		sprints.style.display = "block";
	}
}
function Envio1(){
	
}

