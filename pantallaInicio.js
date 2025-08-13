class PantallaInicio extends Pantalla {
    constructor(){
        super();
    }

     draw() {

    background('#003477e9');

      textFont(font)
      textAlign(CENTER, TOP);
      fill(255);
      push()
      textSize(20);
      text("UN MIX DE APRENDIZAJE PUESTA PARA LA EXPERIENCIA LUDICA", windowWidth / 2, windowHeight/ 8);
      pop()
      text("en este campo ludico usted puede interactuar con las teclas que van del 1 al 4; experimente lo que desee.", windowWidth / 2, windowHeight /8 + 50)

      
      // TIPOGRAFIA PARA EL RESTO DEL NAVEGADOR
      textSize(16)
   


    imageMode(CENTER);

      if (miniatura1) {
      image(miniatura1, width / 5, height / 2, 300, 300);
      text("- PRESIONE 1  -", width / 5 , height / 2 + 150);
    }
    if (miniatura2) {
      image(miniatura2, width / 2, height / 2, 300, 300);
      text("- PRESIONE 2 -", width / 2, height / 2 + 150);
    }
    if (miniatura3) {
      image(miniatura3, 3 * width / 3.7, height / 2, 300, 300);
      text("- PRESIONE 3 -", 3 * width / 3.7, height / 2 + 150);
    }


    text("UNA MULTIMEDIALES / MERCEDES PALLOTTI MIRANDA / IA1-TP1.", windowWidth / 2, windowHeight /2 + 380);
  }

  keyPressed(){
    print("tecla presionada:", key)
    if (key === '1') nav.seleccionarPantalla(1);
    else if (key === '2') nav.seleccionarPantalla(2);
    else if (key === '3') nav.seleccionarPantalla(3);
    else if (key === '4') nav.seleccionarPantalla(0);
  }

}