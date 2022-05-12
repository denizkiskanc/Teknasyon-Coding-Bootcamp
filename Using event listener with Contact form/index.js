
//mouseenter - mouseleave
document.getElementById("description").addEventListener("mouseenter", mouseEnter);
document.getElementById("description").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  document.getElementById("description").style.color = "#c93ff3";
}

function mouseLeave() {
  document.getElementById("description").style.color = "#aeb4b9";
}


//keyup
document.getElementById("name").addEventListener("keyup", myFunction);

function myFunction() {
var x = document.getElementById("name");
x.value = x.value.toUpperCase();
}



