// Sign Up Function
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up:", user.email);
    })
    .catch((error) => {
      console.error("Sign up error:", error.message);
    });
}

// Login Function
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in:", user.email);
    })
    .catch((error) => {
      console.error("Login error:", error.message);
    });
}

// Sign Out Function
function signOut() {
  firebase.auth().signOut()
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.error("Sign out error:", error.message);
    });
}
