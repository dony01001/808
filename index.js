

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
            var bd1 = new Audio("./sounds/bd1.wav");
            bd1.play();
        break;
        
        case "s":
            var sd1 = new Audio("./sounds/sd1.wav");
            sd1.play();
        break;
            
        case "d":
            var lowTom1 = new Audio("./sounds/lowTom1.wav");
            lowTom1.play();
        break;
            
        case "f":
            var midTom1 = new Audio("./sounds/midTom1.wav");
            midTom1.play();
        break;
            
        case "g":
            var hiTom1 = new Audio("./sounds/hiTom1.wav");
            hiTom1.play();
        break;
            
        case "h":
            var clap1 = new Audio("./sounds/clap1.wav");
            clap1.play();
        break;
            
        case "j":
            var cowbell1 = new Audio("./sounds/cowbell1.wav");
            cowbell1.play();
        break;
        
        case "k":
            var closedHat1 = new Audio("./sounds/closedHat1.wav");
            closedHat1.play();
        break;
        
        case "l":
            var openHat1 = new Audio("./sounds/openHat1.wav");
            openHat1.play();
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
