function change() {
    
  var n = document.getElementById("n").value;
  
  document.getElementById("pername").innerHTML = n;
  document.getElementById("pers").src = "https://image1213.s3.amazonaws.com/" + n +".jpg"
}
