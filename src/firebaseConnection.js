import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD79sUaLbbtUg_Vu2WLZNv26ki_iZ567XE",
  authDomain: "hurst-733a1.firebaseapp.com",
  projectId: "hurst-733a1",
  storageBucket: "hurst-733a1.appspot.com",
  messagingSenderId: "394758217045",
  appId: "1:394758217045:web:5c8faee59b74e2ad7fa3dc",
  measurementId: "G-1YTXDNRL38",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
