import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB7Is6ojuXoEVI7xvclyc3oJZJ18EHjJQM",
  authDomain: "book-xchange-e49ea.firebaseapp.com",
  projectId: "book-xchange-e49ea",
  storageBucket: "book-xchange-e49ea.appspot.com",
  messagingSenderId: "902360553616",
  appId: "1:902360553616:web:b4bd50bf521f9c996da015",
  measurementId: "G-8XK87PC1FB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const storage = firebase.storage();
const firestore = firebase.firestore(); 
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {auth, storage, firestore, timestamp};