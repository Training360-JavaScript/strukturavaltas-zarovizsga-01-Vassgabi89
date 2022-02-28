import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBQ8F-zSTcJMLKZQOf1dsr_2ovA5Fza-A",
  authDomain: "vassgabi89-firebase-5.firebaseapp.com",
  projectId: "vassgabi89-firebase-5",
  storageBucket: "vassgabi89-firebase-5.appspot.com",
  messagingSenderId: "564583521664",
  appId: "1:564583521664:web:dc20837ec9f39fc63d3565",
  measurementId: "G-GC4W1SCZJ9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {
  production: true,
  firebaseConfig
};
