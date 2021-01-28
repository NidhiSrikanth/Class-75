import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyA_5xsziy3L_iCruEwVYF8hgrLNU-xmRV0",
  authDomain: "wily-18cf6.firebaseapp.com",
  projectId: "wily-18cf6",
  storageBucket: "wily-18cf6.appspot.com",
  messagingSenderId: "814546595903",
  appId: "1:814546595903:web:ee3fb453482ce2bb49088a"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();