import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaeT24HFwvZuPRtWQe-DSPEwXHVnI-sUg",
  authDomain: "facebook-clone-1eb9d.firebaseapp.com",
  databaseURL: "https://facebook-clone-1eb9d.firebaseio.com",
  projectId: "facebook-clone-1eb9d",
  storageBucket: "facebook-clone-1eb9d.appspot.com",
  messagingSenderId: "1031437216514",
  appId: "1:1031437216514:web:ad02cfb59ab54753c8701b",
  measurementId: "G-7Z78KDRZRM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
