import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
require("firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyAjlDSpZlrJ7h_ytsf1Fj98NhLKbnVx3cQ",
    authDomain: "safety-app-dbcde.firebaseapp.com",
    projectId: "safety-app-dbcde",
    storageBucket: "safety-app-dbcde.appspot.com",
    messagingSenderId: "996133857775",
    appId: "1:996133857775:web:96da9d713d7194a2296e1a",
    measurementId: "G-0CVX88012T"
  };

/*let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;*/

firebase.initializeApp(config);
var db = firebase.firestore()
export default db
