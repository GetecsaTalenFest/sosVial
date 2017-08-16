
var nombre = $("#name");
var apellido = $("#apellido");
var placas = $('#placas');
var telefono = $('#celular');
var btnSiguiente = $('#boton');


var cargarPagina = function(){
	nombre.keyup(validacionNombres);
	apellido.keyup(validacionNombres);
	telefono.keyup(validacionCelular);
	btnSiguiente.click(validarVacio);
	placas.keyup(validacionPlacas);
};

var validacionNombres = function (e){
	e.preventDefault();
	/*numeros*/
	if(e.keyCode < 48 && e.keyCode > 57){
		$(this).removeClass('validate');
		$(this).addClass('invalid');
	}
	letras
	else if(e.keyCode < 65 && e.keyCode > 90 || e.keyCode < 96 && e.keyCode > 122 && e.keyCode ! 46){
		$(this).removeClass('invalid');
		$(this).addClass('validate');
	}
	if(nombre.val().length === ""){
	  $(this).removeClass('invalid');
	  $(this).addClass('validate');
	}
	if(apellido.val().length === ""){
	  $(this).removeClass('invalid');
	  $(this).addClass('validate');
	}
};

var validarVacio = function(){
	if( apellido.val() === ""){
		alert("Debes completar todos los campos");
	}
	if( nombre.val() === ""){
		alert("Debes completar todos los campos");
	}
	if( telefono.val() === ""){
		alert("Debes completar todos los campos");
	}
	if( placas.val() === ""){
		alert("Debes completar todos los campos");
	}
	else{
		btnSiguiente.removeClass("disabled");
    btnSiguiente.click(function(){
		btnSiguiente.removeClass("disabled");
						   })
	}
}

var validacionCelular = function(event){
	var valorTel = telefono.val().length;
	if((event.keyCode < 48 || event.keyCode > 57)) {
		$(this).removeClass('validate');
		$(this).addClass('invalid');
	}

	if(valorTel == ""){
	  $(this).removeClass('invalid');
	  $(this).addClass('validate');

	}
	if(valorTel === 10){
	  $(this).removeClass('validate');
		$(this).addClass('invalid');
		alert("Debes ingresar solo 10 numeros");
	}
	//event.returnValue = false;
	}

var validacionPlacas = function(){

	if(placas.val() === null && placas.val() === ""){
	  $(this).removeClass('invalid');
	  $(this).addClass('validate');
		btnSiguiente.removeClass("disabled");
	}
	 else if(this !== Number && this !== String &&  placas.val().length === 6){
		$(this).addClass('validate');
		 btnSiguiente.removeClass("disabled");
	}else{
    $(this).removeClass('invalid');
		btnSiguiente.addClass("disabled");
	}
		}


$(document).ready(function(){
	cargarPagina();
});
