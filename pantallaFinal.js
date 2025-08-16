class PantallaFinal extends Pantalla {
  constructor() {
    super();
    this.particulas = new ParticulaRebotadora (width / 2, height / 2, 10, -10 , 20);
    this.sisParticula = new Fuente (width / 2, height / 2);
  }

  draw() {
    background('#001664');

      // Actualizar y dibujar partículas
    this.particulas.update();
    this.particulas.draw();
    this.sisParticula.draw();
    this.sisParticula.update();


    fill('#CCE7FF');
    textAlign(CENTER, CENTER);
    textSize(32);
    text("¡FIN DE LA APLICACIÓN!", width / 2, height / 2 - 40);
    textSize(12);
    text("(al momento. seguirá en expasion)", width / 2, height / 2 - 5);
    textSize(20);
    text("Presiona <- para volver a la pantalla inicial", width / 2, height / 2 + 20);
  }

  keyPressed() {
    if (keyCode === LEFT_ARROW) {
      nav.seleccionarPantalla(0); // vuelve a la PantallaInicio
    }
  }
}

class Particula {
         gravity = 0.2;

      constructor(x, y, vx, vy, size) {
        this.x = this.ix = x;
        this.y = this.iy = y;
        this.vx = this.ivx = vx;
        this.vy = this.ivy = vy;
        this.size = size;
        this.rad = this.size / 2;
      }

      draw() {
        circle(this.x, this.y, this.size)
      }

      // usamos update cambiando el move
      update() {
        // aplicar gravedad a y
        this.vy += this.gravity;
        // actualizar x, y
        this.x += this.vx;
        this.y += this.vy;
        // comprobar limites 
        this._checkBounds();

      }


      reset() {
        this.x = this.ix;
        this.y = this.iy;
        this.vx = this.ivx;
        this.vy = this.ivy;
        this._checkBounds();

      }

      _checkBounds() {
        if (this.y + this.rad > height) {
          this.y = height - this.rad;
          // this.reset();
        }
      }
    }

    class ParticulaAleatoria extends Particula {
      constructor(x, y, vx, vy, size) {
        super(x, y, vx, vy, size)
      }

      _checkBounds() {
        if (this.y + this.rad > height || this.x + this.rad < 0 || this.x + this.rad > width) {
          this.x = this.ix;
          this.y = this.iy;
          this.vx = random(-this.ivx, this.ivx);
          this.vy = random(-this.ivy, this.ivy);
        }
      }
    }

1