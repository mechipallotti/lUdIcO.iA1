// Clase Pantalla03
// Escena con captura de webcam pixelada
// - Interacción: botones para guardar imagen e invertir colores
// - Cada acción dispara un sonido
// - Los píxeles se representan como rectángulos cuya escala depende
//   de la luminosidad y la paleta de colores de la escena

class Pantalla03 extends Pantalla {
  constructor(clickSound) { // pasamos el sonido al constructor
    super();
    this.w = 84;
    this.h = 68;
    this.escala = 10;
    this.invertirColores = false;

    this.video = createCapture(VIDEO);
    this.video.size(this.w, this.h);
    this.video.hide();  

    this.clickSound = clickSound; 

    // Botón para guardar imagen
    this.guardarBtn = createButton('Guardar Imagen');
    this.guardarBtn.position(windowWidth - 1350, 400);
    this.guardarBtn.mousePressed(() => this.guardarFrameConSonido());
    this.guardarBtn.hide(); // oculto por defecto

    // Botón para invertir colores
    this.invertirBtn = createButton('Invertir Colores');
    this.invertirBtn.position(windowWidth - 275, 400);
    this.invertirBtn.mousePressed(() => this.toggleInvertirConSonido());
    this.invertirBtn.hide(); // oculto por defecto
  }

  draw() {
    background(220);
    this.video.loadPixels();

    push();
    translate((width - this.w * this.escala) / 2, (height - this.h * this.escala) / 2); // centrado
    noStroke();
    
    for (let i = 0; i < this.video.width; i++) {
      for (let j = 0; j < this.video.height; j++) {
        let index = (i + j * this.video.width) * 4;
        let r = this.video.pixels[index + 0];
        let g = this.video.pixels[index + 1];
        let b = this.video.pixels[index + 2];
        
        if (this.invertirColores) {
          r = 255 - r;
          g = 255 - g;
          b = 255 - b;
        }

        let c = (r + g + b) / 3;
        fill(lerpColor(color('#339FFF'), color('#CCE7FF'), c / 255));
        let tam = map(c, 0, 255, this.escala, 0);
        rect(i * this.escala, j * this.escala, tam, tam);
      }
    }
    pop();

    fill(250);
    textAlign(CENTER);
    textSize(16);
    text("WEBCAM 2", width / 2, height - 30);
    text("<- 4", 20, 0);
  }

  guardarFrameConSonido() {
    this.clickSound.play(); // disparo del sonido
    this.guardarFrame();
  }

  toggleInvertirConSonido() {
    this.clickSound.play(); // disparo del sonido
    this.toggleInvertir();
  }

  guardarFrame() {
    saveCanvas('captura_video', 'png');
  }

  toggleInvertir() {
    this.invertirColores = !this.invertirColores;
  }

  keyPressed() {
    if (key === '1') nav.seleccionarPantalla(1);
    else if (key === '2') nav.seleccionarPantalla(2);
    else if (key === '3') nav.seleccionarPantalla(3);
    else if (key === '4') nav.seleccionarPantalla(0);

     else if (keyCode === RIGHT_ARROW) nav.siguientePantalla();
     else if (keyCode === LEFT_ARROW) nav.previaPantalla();
  }

  onEnter() {
    this.guardarBtn.show();
    this.invertirBtn.show();
  }

  onExit() {
    this.guardarBtn.hide();
    this.invertirBtn.hide();
  }
}
