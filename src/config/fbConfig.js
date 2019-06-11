import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDd8-GnhSOe1un1RmFRTCA6Bfh50C4hjV8",
    authDomain: "bogota-reportes.firebaseapp.com",
    databaseURL: "https://bogota-reportes.firebaseio.com",
    projectId: "bogota-reportes",
    storageBucket: "",
    messagingSenderId: "592728522521",
    appId: "1:592728522521:web:a7dd1c781b9c80d8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;