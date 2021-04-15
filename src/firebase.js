import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAMYTEdce2s6kicjJAf9qyztHBLByfTicY",
    authDomain: "plantsnap-5b038.firebaseapp.com",
    projectId: "plantsnap-5b038",
    storageBucket: "plantsnap-5b038.appspot.com",
    messagingSenderId: "581461177413",
    appId: "1:581461177413:web:69bd987ae2fdf269079f2c"
  });


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
