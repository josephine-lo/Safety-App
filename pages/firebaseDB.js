// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/firestore';
// import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';
// import 'firebase/firestore'
// require("firebase/firestore")
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAODN854oLOurQJxBiejXsukA4tJwauc9g",
  authDomain: "safety-app-6414b.firebaseapp.com",
  projectId: "safety-app-6414b",
  storageBucket: "safety-app-6414b.appspot.com",
  messagingSenderId: "453600963488",
  appId: "1:453600963488:web:89d256ef2380655a6712c5",
  measurementId: "G-KRMCG1ZP31"
};

/*let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;*/

//firebase.initializeApp(firebaseConfig);
//var db = firebase.firestore();
//firebase.firestore();
export default firebase.initializeApp(firebaseConfig);

