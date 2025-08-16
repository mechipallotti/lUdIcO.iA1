// Clase Pantalla01
// Escena de grilla generativa
// - Grilla de círculos cuyo color depende de la distancia al centro
// - Interacción: flecha arriba cambia la cantidad de círculos (aleatorio)
//                flecha abajo cambia el parámetro de forma (aleatorio)
// - Se reproduce un click al interactuar


class Pantalla01 extends Pantalla {
  constructor() {
    super();
    this.num = 30;
    this.margen = 50; 
    this.forma = 1; 
    this.paletadeColor = ["#FFFFFF", "#CCE7FF", "#99D0FF", "#66B8FF", "#339FFF", "#0077FF", "#0055AA", "#003377"];
    this.dReferencia = 100;
    this.clickSound = clickSound; 
  }

  calcularSize() {
    let cellWidth = (width - this.margen * 2) / this.num;
    let cellHeight = (height - this.margen * 2) / this.num;
    return min(cellWidth, cellHeight);
  }

  draw() {
    background(250);
    noStroke();

    push();

    let size = this.calcularSize();
    let offsetX = (width - size * this.num) / 2;
    let offsetY = (height - size * this.num) / 2;

    // GRILLA
    for (let i = 0; i < this.num; i++) {
      for (let j = 0; j < this.num; j++) {

        let x = offsetX + size / 2 + i * size;
        let y = offsetY + size / 2 + j * size;

        // GRADIENTE DE COLOR  
        let distanciaAlCentro = dist(x, y, width / 2, height / 2);
        let distancias = pow(distanciaAlCentro, this.forma);
        let index = floor(map(distancias, 0, this.dReferencia, 0, this.paletadeColor.length - 1));
        let colorIndex = index % this.paletadeColor.length;

        fill(this.paletadeColor[colorIndex]);
        ellipse(x, y, size, size);
      }  
    }

    pop();

    push();
    fill(200);
    textAlign(CENTER);
    textSize(16);
    text("CHUSEMA LA FLECHA ARRIBA o FLECHA ABAJO ", width / 2, height - 30);
    text("<- 4", 20, 0);
    pop();
  }



  keyPressed() {
    if (keyCode === UP_ARROW){ 
      this.num = int(random(10, 200));
      this.clickSound.play(0, 1, 0.3);
    } else if (keyCode === DOWN_ARROW){ 
      this.forma = random(0.5, 2);
      this.clickSound.play(0, 1, 0.3);
    } 
    else if (key === '2') nav.seleccionarPantalla(2);
    else if (key === '3') nav.seleccionarPantalla(3);
    else if (key === '4') nav.seleccionarPantalla(0);

     else if (keyCode === RIGHT_ARROW) nav.siguientePantalla();
    else if (keyCode === LEFT_ARROW) nav.previaPantalla();
  }
}
