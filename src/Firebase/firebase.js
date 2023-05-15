// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGk_gKWTebnxaG2Y1bpMx73TCDPmnWYuY",
  authDomain: "avira-4f9a7.firebaseapp.com",
  projectId: "avira-4f9a7",
  storageBucket: "avira-4f9a7.appspot.com",
  messagingSenderId: "278261536279",
  appId: "1:278261536279:web:b0226a272d45852a2cae52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);    
    }).catch((error)=>{
        console.log(error);
    });
}