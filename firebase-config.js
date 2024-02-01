// Replace with your Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyDsj4I_h7jTgsfIvakEbY3ojgMnDz4NYQY",
    authDomain: "krishna1-48406.firebaseapp.com",
    projectId: "krishna1-48406",
    storageBucket: "krishna1-48406.appspot.com",
    messagingSenderId: "268784196182",
    appId: "1:268784196182:web:f421e52b9ea8945b35f9f7",
    measurementId: "G-1YLDCEJHGS"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
