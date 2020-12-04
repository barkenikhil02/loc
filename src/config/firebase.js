import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBLBQduzJgrP2S3AKbKvErSKlKiSQDCqH4",
    authDomain: "potholechallenge-93d97.firebaseapp.com",
    databaseURL: "https://potholechallenge-93d97.firebaseio.com",
    projectId: "potholechallenge-93d97",
    storageBucket: "potholechallenge-93d97.appspot.com",
    messagingSenderId: "217099540352",
    appId: "1:217099540352:web:a983b595c988962ac65365"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

export default firebase;