// Code handling for Authorizations in Firebase

//import required variables and functions
import { auth, db } from './firebase.js';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

// signup
const signupForm = document.querySelector('#signup-form');

if(signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const username = signupForm['signup-username'].value;
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    const cpassword = signupForm['signup-cpassword'].value;

    if(password != cpassword)
    {
      return;
    }
    else {
      // sign up the user
      createUserWithEmailAndPassword(auth,email, password).then(cred => {
        const user = cred.user;
        //user.updateProfile({
        //  displayName: username
        //  });
        signupForm.reset();
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
//  sendEmailVerification(auth.currentUser).then(() => {
//
//  });
});}

//logout
const logout = document.getElementById("logout")
 if(logout){
   logout.onclick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  signOut(auth).then(() => {
    console.log('User signed out');
  });
  window.location.href = "index.html";
};}

// Login
const loginForm = document.querySelector('#login-form');

if(loginForm){
loginForm.addEventListener('submit', (e) => {
  // get user info
  e.preventDefault();

  const email = loginForm['login-username'].value;
  const password = loginForm['login-password'].value;

  signInWithEmailAndPassword(auth, email, password).then(cred => {
    loginForm.reset();
    window.location.href = "homepage.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

//  sendEmailVerification(auth.currentUser).then(() => {
//
//  });
});}

onAuthStateChanged(auth, (user) => {
  if(user){
    console.log('user logged in: ', user);
  }
  else{
    console.log('user logged out');
    }

});
