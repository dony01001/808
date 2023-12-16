

for (let i = 0 ; i < document.querySelectorAll(".drum").length; i++) {       

    document.querySelectorAll(".drum")[i].addEventListener(
        "click", 
        function () {
            makeSound(this.innerHTML);
            buttonAnimation(this.innerHTML)
        }
    );     

}



var keysPressed = {};

// Este evento se activa cuando se presiona una tecla
document.onkeydown = function (event) {
  var key = event.key;

  // Verificamos si la tecla no ha sido presionada antes
  if (!keysPressed[key]) {
    // Marcamos la tecla como presionada
    keysPressed[key] = true;
    console.log(keysPressed);
    // Reproducimos el sonido y ejecutamos la animación
    makeSound(key);
    buttonAnimation(key);
  }
};

// Este evento se activa cuando se suelta una tecla
document.onkeyup = function (event) {
  var key = event.key;

  // Restablecemos la marca de la tecla presionada
  keysPressed[key] = false;
};




function makeSound(key) {
    switch (key) {
        case "a":
            var crash = new Audio("./sounds/bd1.wav");
            crash.play();
        break;
        
        case "s":
            var kick = new Audio("./sounds/sd1.wav");
            kick.play();
        break;
            
        case "d":
            var tom4 = new Audio("./sounds/lowTom1.wav");
            tom4.play();
        break;
            
        case "f":
            var snare = new Audio("./sounds/midTom1.wav");
            snare.play();
        break;
            
        case "g":
            var tom1 = new Audio("./sounds/hiTom1.wav");
            tom1.play();
        break;
            
        case "h":
            var tom2 = new Audio("./sounds/clap1.wav");
            tom2.play();
        break;
            
        case "j":
            var tom3 = new Audio("./sounds/cowbell1.wav");
            tom3.play();
        break;
        
        case "k":
            var tom3 = new Audio("./sounds/closedHat1.wav");
            tom3.play();
        break;
        
        case "l":
            var tom3 = new Audio("./sounds/openHat1.wav");
            tom3.play();
        break;
        
    default:
        console.log(key);
    }
}

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    console.log(currentKey);
    activeButton.classList.add("pressed");
    setTimeout(
        function(){
        activeButton.classList.remove("pressed");
        },
        100
    )
}