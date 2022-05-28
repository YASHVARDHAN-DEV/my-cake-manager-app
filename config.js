import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAC19YX8ob8fo3b9bs6YNe83uEquBms_BQ",
    authDomain: "cakeorder-2c95a.firebaseapp.com",
    projectId: "cakeorder-2c95a",
    storageBucket: "cakeorder-2c95a.appspot.com",
    messagingSenderId: "545402519195",
    appId: "1:545402519195:web:75bc26945ecc2fa710503e"
  };
firebase.initializeApp(firebaseConfig)
export default firebase.firestore()