//se obtienen los elementos
var nombreUsuario= document.getElementById('nombre').value;
var apellidoUsuario= document.getElementById('pellido').value;
var celularUsuario= document.getElementById('celular').value;
var placasUsuario= document.getElementById('placas').value;
var botonUsuario = document.getElementById('');

var validarcelular= function(e){
  if(e.keyCode !== 8 && (e.keyCode =< 48|| e.keyCode >= 57)){
    //alert("digito valido")
    return true;
  }else{
    alert("digito invalido");
  }
}

var validarPlacas= function(){
  var expresionPlaca= ^([A-Z]{3}-\d{3,4})$;
  if(placasUsuario.value ! placasUsuario.test(expresionPlaca)){
    return true;
  }else{
    alert("caracteres invalidos");
  }

}

var validarApellidoNombre= function(e){
  if(e.keyCode !== 27 && (e.keyCode =< 67 || e.keyCode >= 90 ) || (e.keyCode >= 97 || e.keycode <  122 )){
    return true;
  }else{
    alert("invalido");
  }
}


var validarInput= function(){
  if(validarApellidoNombre() === "" && validarcelular() === "" && validarApellidoNombre() === ""){
    botonUsuario.classList.remove("disabled");
  }else{
    botonUsuario.classList.add("disabled");
  }
}


celularUsuario.addEventListener("keyup", validarcelular);
nombreUsuario.addEventListener("keyup", validarApellidoNombre);
apellidoUsuario.addEventListener("keyup", validarApellidoNombre);
