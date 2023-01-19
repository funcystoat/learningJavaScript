function greeting(){
    alert("Hello World.");
}

function sternDiscipline(){
    alert("How DARE you!");
}

let announcement = function(){
    alert("You are learning javascript functions.");
}

let cubeThis = function(someNumber){
    document.getElementById("output").innerHTML = 
    someNumber*someNumber*someNumber;
}

let x = prompt("What ya wanna cube?");
cubeThis(x);