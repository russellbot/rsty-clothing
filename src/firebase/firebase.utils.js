import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBW_PoyWvmsnx2io-bqdWaKUy3_YA1lHQc",
    authDomain: "rsty-clothing.firebaseapp.com",
    projectId: "rsty-clothing",
    storageBucket: "rsty-clothing.appspot.com",
    messagingSenderId: "44563655472",
    appId: "1:44563655472:web:10616ff214dba30f3bf6f5",
    measurementId: "G-1412EJRY73"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;