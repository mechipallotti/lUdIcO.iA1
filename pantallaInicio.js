
// Clase PantallaInicio
// Muestra las miniaturas de cada escena y permite navegar
// directamente a cualquiera de ellas con las teclas 1-4
// o avanzar/retroceder con las flechas <- y ->

class PantallaInicio extends Pantalla {
    constructor(){
        super();
    }

     draw() {

    background('#dcdcdce9');

      textFont(font)
      textAlign(CENTER, TOP);
      fill('#001664ff');
      textSize(16)
      text("en este campo ludico usted puede interactuar de las siguientes formas: \n \n 1. con las teclas que van del 1 al 4 \n 2. con las flechas <- o -> respectivamente. \n 3. experimentando", windowWidth / 2, windowHeight /8)

      
 
     
      
   


    imageMode(CENTER);

      if (miniatura1) {
      image(miniatura1, width / 5, height / 2, 300, 300);
    }
    if (miniatura2) {
      image(miniatura2, width / 2, height / 2, 300, 300);
    }
    if (miniatura3) {
      image(miniatura3, 3 * width / 3.7, height / 2, 300, 300);
    }

    text("UNA MULTIMEDIALES / MERCEDES PALLOTTI MIRANDA / IA1-TP1.", windowWidth / 2, windowHeight /2 + 300);
  }

  keyPressed(){
    print("tecla presionada:", key)
    if (key === '1') nav.seleccionarPantalla(1);
    else if (key === '2') nav.seleccionarPantalla(2);
    else if (key === '3') nav.seleccionarPantalla(3);
    else if (key === '4') nav.seleccionarPantalla(0);

     else if (keyCode === RIGHT_ARROW) nav.siguientePantalla();
    else if (keyCode === LEFT_ARROW) nav.previaPantalla();
  }

}