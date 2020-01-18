(function() {

  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyBwV_iwKb85p8vyM-cIbwZLpNkapY4u1kE",
    authDomain: "uofthacks-265501.firebaseapp.com",
    databaseURL: "https://uofthacks-265501.firebaseio.com",
    projectId: "uofthacks-265501",
    storageBucket: "uofthacks-265501.appspot.com",
    messagingSenderId: "403230996570",
    appId: "1:403230996570:web:effb33dd69a756a3218063",
    measurementId: "G-JS737CP792"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();
  // Get a reference to the database service
  var database = firebase.database();

  //Get elements
  const preObject = document.getElementById('object');

  //Create reference
  const dbRefObject = firebase.database().ref().child('object');

  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });

}());

function click1() {
  var Name = document.getElementById('username').value;
  var Password = document.getElementById('password').value;

  var database = firebase.database();

  var keys = firebase.database().ref().child('object').push().key;

  firebase.database().ref('object/' + keys).set({
    name: Name,
    password: Password,
  });
  alert("Event Added!")
}

function idk() {
  var database = firebase.database();

  var objectRef = database.ref('object');
  objectRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(childData);
    });
  });
}
