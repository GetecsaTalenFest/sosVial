importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js')

var config = {
    apiKey: "AIzaSyCy4ggnMjzn2mrB3aws6kaQqtqyKEhLZOY",
    authDomain: "sos-vial-65f5f.firebaseapp.com",
    databaseURL: "https://sos-vial-65f5f.firebaseio.com",
    projectId: "sos-vial-65f5f",
    storageBucket: "sos-vial-65f5f.appspot.com",
    messagingSenderId: "159699658573"
  };
firebase.initializeApp(config);

const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
