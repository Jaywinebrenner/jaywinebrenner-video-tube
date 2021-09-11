
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhzGkBMq17xhDdmsEfkQWxROgu1eHKjG0",
    authDomain: "jaywinebrenner-video-tube.firebaseapp.com",
    projectId: "jaywinebrenner-video-tube",
    storageBucket: "jaywinebrenner-video-tube.appspot.com",
    messagingSenderId: "87550752968",
    appId: "1:87550752968:web:74d220aa17913246f48dfd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
export default db;

