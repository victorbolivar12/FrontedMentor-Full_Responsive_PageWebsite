// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});

//Function to display the submenu

var arrowDown = document.getElementById("submenu");

function showsubMenu(){
  if(arrowDown.style.display == "none"){
    arrowDown.style.display = "block"
  }else{
    arrowDown.style.display = "none"
  }
}