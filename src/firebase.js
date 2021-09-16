
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

console.log("ENV VARIABLWE", process.env.REACT_APP_FIREBASE_API_KEY)

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "jaywinebrenner-video-tube",
    storageBucket: "jaywinebrenner-video-tube.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebaseApp.auth()
export default db;

