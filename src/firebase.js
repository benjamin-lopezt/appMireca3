import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB2Eff1FAl_-IUHdCr4_bMo_1ZnkxYjz88",
  authDomain: "benjaminlopez-c1414.firebaseapp.com",
  databaseURL: "https://benjaminlopez-c1414.firebaseio.com",
  projectId: "benjaminlopez-c1414",
  storageBucket: "benjaminlopez-c1414.appspot.com",
  messagingSenderId: "637150086928",
  appId: "1:637150086928:web:0c5f04521cc90cef11c795",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
