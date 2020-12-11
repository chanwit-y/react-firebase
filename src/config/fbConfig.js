import firebase from "firebase";
import "firebase/firebase";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBz88a0hqqgswgMzKkMCobvtF5m41ZKlwM",
  authDomain: "react-firebase-marioplan-4b828.firebaseapp.com",
  projectId: "react-firebase-marioplan-4b828",
  storageBucket: "react-firebase-marioplan-4b828.appspot.com",
  messagingSenderId: "729368332268",
  appId: "1:729368332268:web:276502ffbf798f999ba2c9",
  measurementId: "G-JXD6TMSEPQ",
};

try {
	firebase.initializeApp(config);
	firebase.firestore();
	console.log("Firebase Initialized");
} catch (err) {
	console.log("Error Initializing Firebase");
}

export default firebase;