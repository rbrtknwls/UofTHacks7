function change() {
    
  var n = document.getElementById("n").value;
    
  var x = document.createElement("IMG");
  x.setAttribute("src", "https://image1213.s3.amazonaws.com/" + n +".jpg");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
}