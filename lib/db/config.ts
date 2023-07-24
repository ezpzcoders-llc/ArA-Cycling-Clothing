// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FB_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
//     projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FB_APP_ID
// }
const firebaseConfig = {
    apiKey: 'AIzaSyDvnl9HScS9LaxT8yxxAzLVbkxlIwk_1qE',
    authDomain: 'ara-cycling-clothing.firebaseapp.com',
    projectId: 'ara-cycling-clothing',
    storageBucket: 'ara-cycling-clothing.appspot.com',
    messagingSenderId: '331210686979',
    appId: '1:331210686979:web:2b5699df70747f9e4d8436',
    measurementId: 'G-LDZFVH3LXX'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
