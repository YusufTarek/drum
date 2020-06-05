
//used when clicking the images to make sounds
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
    // alert("I got clicked!");
    // this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
}

// used when pressing specific key (on the keyboard), in order to make associated sound
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
// Gives an alert whenever a key is preesed
// document.addEventListener("keydown", function () {alert("A key was pressed"); });


// this function will be called when a key is pressed or when the image is clicked
function makeSound(key) {
  switch (key) {
    case "h":
      var crash = new Audio("sounds/kick-bass.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/crash.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
    console.log(buttonInnerHTML);
  } // end swich case
} // end function makeSound()


// function that makes an animation effect
function buttonAnimation(currnetKey) {
  var activeButton = document.querySelector("." + currnetKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {activeButton.classList.remove("pressed");}, 100);
}
