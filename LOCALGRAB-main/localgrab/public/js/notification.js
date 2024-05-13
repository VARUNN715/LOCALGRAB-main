
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBywBcd9G-5c6uEFJkTe6dxS9bVcOF9Emw",
    authDomain: "localgrab-9165d.firebaseapp.com",
    projectId: "localgrab-9165d",
    storageBucket: "localgrab-9165d.appspot.com",
    messagingSenderId: "424398558723",
    appId: "1:424398558723:web:5fb7a5ea52aa4d7975a036",
    measurementId: "G-XZ7H1FZ68Q"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
