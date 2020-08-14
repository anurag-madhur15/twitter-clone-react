import firbase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCG1RzQSlyQ7D6oqQ_qOUMeRf88WJtVH2M",
    authDomain: "twitter-clone-e82ac.firebaseapp.com",
    databaseURL: "https://twitter-clone-e82ac.firebaseio.com",
    projectId: "twitter-clone-e82ac",
    storageBucket: "twitter-clone-e82ac.appspot.com",
    messagingSenderId: "689919600902",
    appId: "1:689919600902:web:9670c75842766210331687",
    measurementId: "G-ZN494JGB2C"
  };

  const firebase = firbase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export default db;