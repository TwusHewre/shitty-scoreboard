
let count = 0;

/* home-scoreboard */
document.getElementById("home-1").onclick = function(){
    count += 1;
    document.getElementById("home-board").innerHTML = count;
   
}

document.getElementById("home-2").onclick = function(){
    count +=  + 2;
    document.getElementById("home-board").innerHTML = count;
  
    
}

document.getElementById("home-3").onclick = function(){
    count += + 3;
    document.getElementById("home-board").innerHTML = count;   
}


/* guest-scoreboard */

document.getElementById("guest-1").onclick = function(){
    count += 1;
    document.getElementById("guest-board").innerHTML = count;
   
}

document.getElementById("guest-2").onclick = function(){
    count +=  + 2;
    document.getElementById("guest-board").innerHTML = count;
  
    
}

document.getElementById("guest-3").onclick = function(){
    count += + 3;
    document.getElementById("guest-board").innerHTML = count;   
}