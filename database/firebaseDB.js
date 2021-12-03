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

export default firebase.initializeApp(firebaseConfig);

