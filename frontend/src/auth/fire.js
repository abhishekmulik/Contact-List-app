import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCeooM4IzIF9n1E7Julafwo8Bsko_6Oht8",
    authDomain: "practice-2fc30.firebaseapp.com",
    projectId: "practice-2fc30",
    storageBucket: "practice-2fc30.appspot.com",
    messagingSenderId: "424876947485",
    appId: "1:424876947485:web:ac8a0650ba12bdceeeaef4"
  };


  const fire = initializeApp(firebaseConfig);
  
  export default fire;