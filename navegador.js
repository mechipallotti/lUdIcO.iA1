
class Navegador {
  constructor(){
    this.sistemaParticulas = new Fuente(width/2, height/2, 50);
  }

  draw() {

     background('#00347767');

      this.sistemaParticulas.update();
    this.sistemaParticulas.draw();
    
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

    class SistemaParticulas {
      constructor (x, y, num = 100) {
        this.x = x;
        this.y = y;
        this.num = num;
        this._particula = [];
        this._init();
      }

        _init() {
          
            for (let i = 0; i < this.num ; i ++) {
              this._particula.push(
                new ParticulaRebotadora(this.x, this.y, 10, 10, 5)
              )
        
            }
        }

        draw() {
          for (let particulas of this._particula){
            particulas.draw()
          }
        }

        update() {
          for (let particulas of this._particula){
            particulas.update()
          }
         }
      
        
      }

      class ParticulaRebotadora extends Particula {
        friccion = 0.99;
        update() {

          this.vx *= this.friccion;
          this.vy *= this.friccion;
          super.update();

        }
          _checkBounds () {
            if (this.x < this.rad || this.x > width - this.rad ){
              this.vx *= -1;
              this.x = constrain(this.x, 0, width - this.rad);
            }
            if(this.y < this.rad || this.y > height - this.rad){
              this.vy *= -1;
              this.y = constrain(this.y, 0, height - this.rad)
            }
              
        }
      }

      class Fuente extends SistemaParticulas{

        _init() {
          
            for (let i = 0; i < this.num ; i ++) {
              this._particula.push(
                new ParticulaRebotadora(this.x, this.y, random(-10, 10), random(-10, 10), 5)
              )
        
            }
        }

      }

