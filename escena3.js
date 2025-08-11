

class Webcam {
  constructor() {
    this.w = 54;
    this.h = 38;
    this.escala = 10;
    this.paleta;
  

    this.video = createCapture(VIDEO);
    this.video.size(this.w, this.h);
    this.video.hide();  


}

  draw() {
    background(220);
    this.video.loadPixels();

    push();
    translate(35,50)
   

    noStroke();
    
    //GRILLA
  
    for (let i = 0; i < this.video.width; i++) {
      for (let j = 0; j < this.video.height; j++) {
        let index = (i + j * this.video.width) * 4;
        let r = this.video.pixels[index + 0];
        let g = this.video.pixels[index + 1];
        let b = this.video.pixels[index + 2];
        let c = (r + g + b) / 3;

        // Color similar a paleta escena 1
        fill(lerpColor(color('#339FFF'), color('#CCE7FF'), c / 255));

        // ["#FFFFFF", "#CCE7FF", "#99D0FF", "#66B8FF", "#339FFF", "#0077FF", "#0055AA", "#003377"]

        let tam = map(c, 0, 255, this.escala, 0);
        rect(i * this.escala, j * this.escala, tam, tam);
      }
    }
    pop();
 

    // Texto explicativo
    fill(250);
    textAlign(CENTER);
    textSize(16);
    text("WEBCAM 2", width / 2, height - 30);
    text("<- 4", 20, 0)
  }

  onEnter() {
    this.boton.show(); // ✅ mostrar botón al entrar en escena
  }

  onExit() {
    this.boton.hide(); // ✅ ocultar botón al salir de escena
  }
}


  /*
  handleKeyPressed() {
    if (keyCode === UP_ARROW) {
       this.tam = map(c, 0, 255, this.escala * 0.2, this.escala);

    } else if (keyCode === DOWN_ARROW) {
      this.escala = random(100, 2);
    }
  }
  */

 
