var maleName = ["chris brown" , "drake" , "arron carter" , "ace young" , "adam brody" , "alce baldwin" , "andy cohen" , "andrew garfield" , "brad pitt" , "chris evans" ,"chris pratt"];
var femaleName = ["rihanna" , "cardi b" ,"arianna grade" ,"nicky manaje" ,"queen naija" ,"cameron diaz" ,"kylie jenner" , "britney spears" ,"ariel winter" , "ashley benson"];

var first;
var last;
function male() {
    first = document.querySelector(".first").value;
    //console.log(first);
    last = document.querySelector(".last").value;
    //console.log(last);
    var names = first + last;   
    //console.log(names);
    
     switch(names){
        case"katia": alert("boom");
        break;
        default:
        var sum = Math.floor(Math.random()*10);
        var random = maleName
        [sum];
        var firstUpper = first.toUpperCase();
        var lastUpper = last.toUpperCase();
        document.getElementById("name").innerHTML = firstUpper + "" + lastUpper + "" + random;
        }
}  
    
    function female() {
    last = document.querySelector(".last").value;
    //console.log(first);
    first = document.querySelector(".first").value;
    //console.log(last);
    var names = first  + last ;   
    //console.log(names);
   
    
    switch(names){
        case"kat": alert("got it");
        break;
        default:
        var sum = Math.floor(Math.random()*10);
        var random = femaleName // array
        [sum];
        var firstUpper = first.toUpperCase();
        var lastUpper = last.toUpperCase();
        document.getElementById("name").innerHTML = firstUpper + "" + lastUpper + "" + random;
        }
    }
    

//var names = first + last;
//console.log(names);




