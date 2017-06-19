/*aquí va tu código*/
function clickBoton(){
	var boton = document.getElementById("boton-guardar");
	clickBoton.addEventListener("click", guardarDatos);
	guardarDatos();
     
}

function guardarDatos(){
	localStorage.clave = document.getElementById("clave").value;
	localStorage.valor = document.getElementById("valor").value;

}

