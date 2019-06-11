import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCPGsXf6RVHsQesAbsX8AovpMNpNQsjT1U",
    authDomain: "trainingapp-6254a.firebaseapp.com",
    databaseURL: "https://trainingapp-6254a.firebaseio.com",
    projectId: "trainingapp-6254a",
    storageBucket: "trainingapp-6254a.appspot.com",
    messagingSenderId: "844482698798",
    appId: "1:844482698798:web:28542fdbd6b30493"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const autentificacion = firebase.auth();