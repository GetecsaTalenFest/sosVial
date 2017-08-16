

var messaging = firebase.messaging();
messaging.requestPermission()
.then(function(){
	console.log('permiso');
	// swal("¡Exito!", "Su grúa ha sido solicitada", "Ok");
	return messaging.getToken();
})
.then(function(token){
	console.log(token);
})
.catch(function(err){
	console.log(err)
})
messaging.onMessage(function(payload){
	console.log('onMessage:', payload)
});
