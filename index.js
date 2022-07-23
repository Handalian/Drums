const number_drums_buttons = document.querySelectorAll(".drum").length;


for (let i = 0; i < number_drums_buttons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener('click', function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);


  });

}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key){
  switch (key) {
    case "w":
      drums_element = "snare";
      var audio = new Audio("sounds/"+ drums_element +".mp3");
      audio.play();
      break;
    case "a":
      drums_element = "tom-1";
      var audio = new Audio("sounds/"+ drums_element +".mp3");
      audio.play();
      break;
    case "s":
      drums_element = "tom-2";
      var audio = new Audio("sounds/"+ drums_element +".mp3");
      audio.play();
      break;
    case "d":
      drums_element = "tom-3";
      var audio = new Audio("sounds/"+ drums_element +".mp3");
      audio.play();
      break;
    case "j":
      drums_element = "crash";
      var audio = new Audio("sounds/"+ drums_element +".mp3");
      audio.play();
      break;
    case "k":
      drums_element = "hit-hat";
      var audio = new Audio("sounds/"+ drums_element +".mp3");
      audio.play();
      break;
    case "l":
      drums_element = "kick-bass";
      var audio = new Audio("sounds/"+ drums_element +".mp3");
      audio.play();
      break;
    default:


  }
  this.innerHTML;

}

function buttonAnimation(currentKey) {

  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
//
