$(document).ready(function(){
    $(".button-collapse").sideNav();
	
	btnSolicitud.click(alerta);
});

console.log("prueba");
var btnSolicitud = $("#botonSolicitud");



function alerta(){
	alert("Tu grua está en camino");
}
