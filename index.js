
var numberOfDrumButtons = document.querySelectorAll(".drums").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drums")[i].addEventListener("click", function () {
    var buttoninnerHTML = this.innerHTML;
    makesound(buttoninnerHTML);
  buttonAnimation(buttoninnerHTML);

  });
}
document.addEventListener("keypress", function (event) {
  makesound(event.key);
  buttonAnimation(event.key);
});
function makesound(key) {
  switch (key) {
    case "w":
      var audio1 = new Audio('sounds/tom-1.mp3');
      audio1.play();
      break;
    case "a":
      var audio1 = new Audio(
        "sounds/kick-bass.mp3"
      );
      audio1.play();
      break;
    case "s":
      var audio1 = new Audio(
        "sounds/tom-3.mp3"
      );
      audio1.play();
      break;
    case "d":
      var audio1 = new Audio(
        "sounds/crash.mp3"
      );
      audio1.play();
      break;
    case "j":
      var audio1 = new Audio(
        "sounds/tom-2.mp3"
      );
      audio1.play();
      break;
    case "k":
      var audio1 = new Audio(
        "sounds/snare.mp3"
      );
      audio1.play();
      break;
    case "l":
      var audio1 = new Audio(
        "sounds/tom-4.mp3"
      );
      audio1.play();
      break;
    default:
      alert(`"${key}" key is Not Match!!`);
  }
};
function buttonAnimation(currentKey){
  var activeButton =currentKey;
  activeButton.classList.add("animate");
  setTimeout(function(){ document.querySelector("."+ currentKey)
    activeButton.classList.remove("animate")
  },100);
};

