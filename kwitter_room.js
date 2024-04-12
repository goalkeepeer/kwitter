
//AÑADE TUS ENLACES DE FIREBASE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA-RPw7nU5T5ulp3VYnjzcfMNpStEggGHw",
      authDomain: "kwitter-ddf59.firebaseapp.com",
      projectId: "kwitter-ddf59",
      storageBucket: "kwitter-ddf59.appspot.com",
      messagingSenderId: "320810907935",
      appId: "1:320810907935:web:f17d117e85d3bd5eefd82a"
    };
    
    // Initialize Firebase
Firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
