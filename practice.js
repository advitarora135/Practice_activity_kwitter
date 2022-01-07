
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyD6PVsjoATz-HkTgviTv_hVIGXIeabMC0c",
    authDomain: "kwitter-80410.firebaseapp.com",
    databaseURL: "https://kwitter-80410-default-rtdb.firebaseio.com",
    projectId: "kwitter-80410",
    storageBucket: "kwitter-80410.appspot.com",
    messagingSenderId: "958165000115",
    appId: "1:958165000115:web:05a56180f01af2fb6cf5c6"
  };
  
  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
      });
    }