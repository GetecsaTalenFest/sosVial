$(document).ready(function(){
    $(".button-collapse").sideNav();
	var btnSolicitud = $("#botonSolicitud");
	btnSolicitud.click(alerta);
});

console.log("prueba");




function alerta(){
	alert("Tu grua está en camino");
	location.href ="../views/historial.html"
	
}
