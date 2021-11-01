import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3_87CfSkbU9AemYn-sF4sFQXJkb3DWEw",
  authDomain: "login-management-787da.firebaseapp.com",
  projectId: "login-management-787da",
  storageBucket: "login-management-787da.appspot.com",
  messagingSenderId: "415780522168",
  appId: "1:415780522168:web:8bf7f2a77da30cf15c0c4d"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function signup(email, password, username) {
  return createUserWithEmailAndPassword(auth, email, password, username);
}