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
  const preObject = document.getElementById('recent');

  //Create reference
  const dbRefObject = firebase.database().ref().child('recent');

}());
function mostrecent(){
    var ref = firebase.database().ref("recent");
    ref.orderByKey().on("child_added", function(snapshot) {
        var idd = snapshot.child("img").val();
        updatebal();
        
        changeimg(idd);

    });
}
mostrecent();
function changeimg(n) {
    
  
  document.getElementById("pername").innerHTML = n;
  document.getElementById("pers").src = "https://image1213.s3.amazonaws.com/" + n +".jpg"
}
function updatebal(){
    var ref = firebase.database().ref("recent");
    ref.orderByKey().on("child_added", function(snapshot) {
        var money = snapshot.child("money").val();
        
        document.getElementById("balance").innerHTML = money +".00";
        
    });
}

