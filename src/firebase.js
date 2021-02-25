import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDP7AbU1UbLbJbQ8XxaRXrFasoE6H6PEqI",
  authDomain: "twitter-clone-7cec4.firebaseapp.com",
  projectId: "twitter-clone-7cec4",
  storageBucket: "twitter-clone-7cec4.appspot.com",
  messagingSenderId: "434300769475",
  appId: "1:434300769475:web:a4bca37b3a79ae73c5fe76"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
export default db