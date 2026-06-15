// Import the functions you need from the SDKs you need
// @ts-ignore: suppress module not found error if types are missing in the environment
import { initializeApp } from 'firebase/app'
// @ts-ignore: suppress module not found error if types are missing in the environment
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBfWyqpT15ty1YxE_HLH9_FEzzMcrcjUPs',
  authDomain: 'club-ecommerce-cffb1.firebaseapp.com',
  projectId: 'club-ecommerce-cffb1',
  storageBucket: 'club-ecommerce-cffb1.firebasestorage.app',
  messagingSenderId: '715341504321',
  appId: '1:715341504321:web:f2ccb21616e0282b250bc0',
  measurementId: 'G-CKP72Y368H'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
