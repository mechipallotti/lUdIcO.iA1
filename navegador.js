



class Navegador {
  constructor(){
    //...
  }

  draw() {

     background('#003377');
      textFont(font)
      textAlign(CENTER, TOP);
      fill(255);
      text("UN MIX DE APRENDIZAJE PUESTA PARA LA EXPERIENCIA LUDICA", 600 / 2, 600/ 4);


    imageMode(CENTER);

      if (miniatura1) {
      image(miniatura1, width / 4, height / 2, 120, 120);
      text("- CLICK 1 -", width / 4, height / 2 + 80);
    }
    if (miniatura2) {
      image(miniatura2, width / 2, height / 2, 120, 120);
      text("- CLICK 2 -", width / 2, height / 2 + 80);
    }
    if (miniatura3) {
      image(miniatura3, 3 * width / 4, height / 2, 120, 120);
      text("- CLICK 3 -", 3 * width / 4, height / 2 + 80);
    }
  }   
}
