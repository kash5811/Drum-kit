
var length = document.querySelectorAll(".drum").length;
for(var i = 0; i<length ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click" , function()  {
    var buttoninnerHTML = this.innerHTML;
    switch (buttoninnerHTML) {
      case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();

        break;
        case "a":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;

          case "s":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;

          case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
          case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

            case "k":
              var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

      default:

    }

var currentkey = document.querySelector("keydowm" , function(){
  alert("hello");
});




  });
  }
  document.addEventListener("keydowm" , function(event){
    alert("key was pressed");
  });
