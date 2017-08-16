// Initialize Firebase. La inicializacion esta en el archivo general.js
  

//Dom
const txtEmail= document.getElementById('txtEmail');
const txtPassword= document.getElementById('txtPassword');
const btnSignUp= document.getElementById('btnSignUp');
const btnLogin= document.getElementById('btnLogin');
const btnLogout= document.getElementById('btnLogout');

//Eventos
//Evento de registrar (Boton SignUp) usa el metodo createUserWithEmailAndPassword

btnSignUp.addEventListener('click', e => {
   const email= txtEmail.value;
    const pass= txtPassword.value;
    const auth= firebase.auth();
        //Promesa
        const promise = auth.createUserWithEmailAndPassword(email, pass);
	
    promise.then(e => {location.href="ubicacion.html"}).catch(e => console.log(e.message));
	guardandoDatos(email,pass)

});

//Evento entrar (Boton Login) usa el metodo singInWithEmailAndPassword
btnLogin.addEventListener('click', e =>{
    const email= txtEmail.value;
    const pass= txtPassword.value;
    const auth= firebase.auth();
	
    
    const promise = auth.singInWithEmailAndPassword(email, pass);
    promise.then(e => {location.href="ubicacion.html"}).catch(e => console.log(e.message));
});

/*agregamos al usuario a nuestra base de datos al mismo tiempo que los creamos, lograndolo llamando a esta función dentro del proceso de sign in*/
/*function guardandoDatos(txtEmail,txtPassword) {
	firebase.database().ref('usuarios').push({
    email: txtEmail,
    pass: txtPassword
  });
  };*/

const divObject = document.getElementById("object");
const dbRefObject = firebase.database().ref().child('object');

dbRefObject.on('value' , snap => console.log(snap.val()));













//Evento Salir (Boton Logout) usa el metodo singInWithEmailAndPassword
btnLogout.addEventListener('click', e =>{
    firebase.auth().signOut();
});

//Escuchador en tiempo real de si hay un cambio en el estado de logeo, es decir si esta logeado o no esta logeado
firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
        console.log(firebaseUser);
    }else{
        console.log('no estas logueado')
    }
});


//Logeo con Google

//Evento en el boton de Google
 const btnGoogle = document.getElementById('id-google');
 btnGoogle.addEventListener( 'click', iniciarSesionGoogle);

 function obtenerDatosGoogle(provider){
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
         console.log('user', user);
        console.log(user.displayName);
		location.href="ubicacion.html"
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        console.log('error', error);
    });

}

function iniciarSesionGoogle(provider) {
    var provider = new firebase.auth.GoogleAuthProvider();
    obtenerDatosGoogle(provider);
}

/*termina login con google+*/


/**/