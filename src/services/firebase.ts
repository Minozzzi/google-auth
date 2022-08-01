import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC4_sKp26shcyxeqR2KeVuI5dQA1v9T67E",
  authDomain: "auth-d4255.firebaseapp.com",
  projectId: "auth-d4255",
  storageBucket: "auth-d4255.appspot.com",
  messagingSenderId: "801542507715",
  appId: "1:801542507715:web:801b34ef97e755ca43e676",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)