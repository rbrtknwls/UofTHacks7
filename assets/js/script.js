var initr = 0;
var text = ["Websites", "Applets", "Solutions", "Registration Systems", "Data Parsers", "Calculators", "Games", "Simulations"];
var inst = setInterval(change, 2000);
var counter = 1;
var count = 0;
var currflex = "st"
var curr = "start";

highlighall = ["1","2","3","4","5","6","7","8","9","10","11"];

function back(){
    count--;
    count = count%2;
    if (count == 0){
        turnred();
    }else{
        turnblue();
    }
}
function forward(){
    count++;
    count = count%2;
    if (count == 0){
        turnred();
    }else{
        turnblue();
    }
}
function goback(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function start(){
    var val = Math.random();
    
    if (val <= 0.5){
        turnred();
        count = 0;
        document.getElementById(currflex).id = "fluxtextr";
        currflex = "fluxtextr";
        
    }else{
        turnblue();
        count = 1;
        document.getElementById(currflex).id = "fluxtextb";
        currflex = "fluxtextb";
    }
}
start();
function buttpressred(){
    
    document.getElementById(currflex).id = "fluxtextr";
    currflex = "fluxtextr";
    turnred();
    goback();
}
function buttpressblue(){
    
    document.getElementById(currflex).id = "fluxtextb";
    currflex = "fluxtextb";
    turnblue();
    goback();
}
function alloff(){
    for (var i = 0; i < highlighall.length; i++){
        document.getElementById(highlighall[i]).className = "null";
    }
    
    //red
    document.getElementById("awardst").style.display = "none";
    document.getElementById("awards").style.display = "none";
    
    document.getElementById("game").style.display = "none";
    document.getElementById("gamet").style.display = "none";
    
    document.getElementById("Workt").style.display = "none";
    document.getElementById("Work").style.display = "none";
    document.getElementById("TOHC").style.display = "none";
    
    //blue
    document.getElementById("paperst").style.display = "none";
    document.getElementById("research").style.display = "none";
    
    document.getElementById("EE").style.display = "none";
    document.getElementById("EEtitle").style.display = "none";
    
}

function turnred() {
    alloff();
    document.getElementById(curr).id = "red";
    curr = "red";
    
    
    document.getElementById("awardst").style.display = "block";
    document.getElementById("awards").style.display = "block";
    
    document.getElementById("game").style.display = "block";
    document.getElementById("gamet").style.display = "block";
    
    document.getElementById("Workt").style.display = "block";
    document.getElementById("Work").style.display = "block";
    document.getElementById("TOHC").style.display = "block";
    
    
    document.getElementById("cov").src = "img/Red_Theme_Res/head/program.png";
    
    text = ["Websites", "Applets", "Solutions", "Registration Systems", "Data Parsers", "Calculators", "Games", "Simulations"];
    
    var highlighr = ["1","2","3","4","5","6","7"];
    for (var i = 0; i < highlighr.length; i++){
        document.getElementById(highlighr[i]).className = "redbol";
    }
    document.getElementById("2").innerHTML = "code!";
    document.getElementById("butt").className = "btn btn-lg btn-danger"

    document.getElementById("git").style.color = "red";
    document.getElementById("ins").style.color = "red";
    document.getElementById("lin").style.color = "red";
    document.getElementById("fac").style.color = "red";
    document.getElementById("cod").style.color = "red";
    document.getElementById("bar").style.color = "red";
    
    $("#favicon").attr("href","img/Favicon/red.png");


}
function turnblue() {
    alloff();
    document.getElementById(curr).id = "blue";
    curr = "blue";
    
    
    document.getElementById("paperst").style.display = "block";
    document.getElementById("research").style.display = "block";
    document.getElementById("EE").style.display = "block";
    document.getElementById("EEtitle").style.display = "block";
    
    
    
    
    
    
    var highlighb = ["1","2","3","8","7","9","10","11"];
    for (var i = 0; i < highlighb.length; i++){
        document.getElementById(highlighb[i]).className = "bluemain";
    }
    document.getElementById("2").innerHTML = "learn!";
    
    document.getElementById("cov").src = "img/Blue_Theme_Res/cover2.png";
    
    text = ["Research Papers", "Extended Essays", "Independent Assessments", "Math Proofs", "Latin Explorations", "Physics/Chem Labs", "Science Write Ups"];
    
    document.getElementById("butt").className = "btn btn-lg btn-primary"
    document.getElementById("git").style.color = "blue";
    document.getElementById("ins").style.color = "blue";
    document.getElementById("lin").style.color = "blue";
    document.getElementById("fac").style.color = "blue";
    document.getElementById("cod").style.color = "blue";
    document.getElementById("bar").style.color = "blue";
    
    $("#favicon").attr("href","img/Favicon/blue.png");
    
    
}

function change() {
    
  document.getElementById(currflex).innerHTML = " " + text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}