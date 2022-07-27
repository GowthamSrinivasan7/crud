import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyD-Lv7fhk8jLJw76kxQEt-S4Wi79MU0rnE",
    authDomain: "react-contact-557b0.firebaseapp.com",
    projectId: "react-contact-557b0",
    storageBucket: "react-contact-557b0.appspot.com",
    messagingSenderId: "715161990551",
    appId: "1:715161990551:web:ea59b1ba7ff18b23f9c0d2"
  };

  const fireDB=firebase.initializeApp(firebaseConfig);
  export default fireDB.database().ref();
  