// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSENGER_SENDING_ID,
  // appId: process.env.FIREBASE_APPID,
  // measurementId: process.env.FIREBASE_MEASUREMENTID
  apiKey: "AIzaSyCcqMnmUFqZR3hMweRHnnDbHifeCVNx96I",
  authDomain: "mavsabroadjapan-e105a.firebaseapp.com",
  projectId: "mavsabroadjapan-e105a",
  storageBucket: "mavsabroadjapan-e105a.appspot.com",
  messagingSenderId: "685420431938",
  appId: "1:685420431938:web:f57a1a85d092dd56d0bbdb",
  measurementId: "G-84WQ8DL91P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//importing necessary firebase functions
import {getDatabase, ref, set, child, update, remove, get}  from "https://www.gstatic.com/firebasejs/9.3.0/firebase-database.js";

const database = getDatabase();


/*FUNCTIONS FOR IMPORTANT CONTACTS PAGE*/


//This function saves the content from text field in Important Contacts Page into the firebase database.
function save()
{
var editContent = document.getElementById('box').innerHTML;
update(ref(database,'importantContacts'),{
  info: editContent
});
}

//When the "Save Changes" button is clicked, it calls the save function.
document.getElementById('save1').addEventListener('click', e => {
 save();
})

function updateContent()
{
//ref represents a specific location in the database that can be used for reading
//or writing data to that database location
const dbref = ref(database);
//This extracts data from the section "importantContacts" and if the
//database exists, the text field will be set to that data.
get(child(dbref,"importantContacts")).then((snapshot)=>{
  if(snapshot.exists())
  {
      document.getElementById("box").innerHTML = snapshot.val().info;
  }
})
}
//Function within modules won't be available to access globally.
//So, it needs to be attached to window.
window.updateContent = updateContent


//export variables to other js files
export
{
database
};
