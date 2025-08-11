

class Onion {
    constructor(){
     this.cebolla = [];
     this.sides0 = 3;    this.sideInc = 1;
     this.radio0 = 30 ;  this.radioInc = 10;
     this.tiempo0 = 3;
     this.cantidad = 20;
     this.grilla();
    }

    grilla(){
       for(let i=0; i<this.cantidad; i++){
            let sides = this.sides0 + i*this.sideInc;
            let radio = this.radio0 + i*this.radioInc;
            let tiempo = this.tiempo0 * (i + i);
            this.cebolla.push(new Poligonos(sides, radio, tiempo));
        }
   }


    draw(){

        background(250);
            
        for(let i=this.cantidad-1 ; i>= 0; i--){
            this.cebolla[i].update();
            this.cebolla[i].display();
        
        }

        fill(220);
        textAlign(CENTER);
        textSize(16);
        text("CEBOLLITA MUSICAL", width / 2, height - 30);
        text("<- 4", 20, 0)
    }
}

class Poligonos {
        constructor(sides, radio, tiempo){
            this.sides = sides;
            this.radio = radio;
            this.angle = 0
            this.tiempo = tiempo;

            this.interaccion0 = false;
        }

        update(){
            this.angle += (TWO_PI/this.tiempo) / 60;
            
            if(this.interaccion()){
                this.interaccion0 = true; 
            } else {
                this.interaccion0 = false;
            }
        }



        display(){

            noStroke();
            
            if(this.interaccion0){
                fill(0, 85, 170, 90);
            } else {
                fill(255, 80);
            }
            push();
            translate(width / 2, height/ 2 );
            rotate(this.angle);
           12

            beginShape();
            for (let i = 0; i<this.sides; i++){
                let a = TWO_PI/this.sides * i;
                let x = this.radio * cos(a);
                let y = this.radio * sin(a);

                vertex(x, y);
            }
            endShape(CLOSE);

            
            pop();


        }

        interaccion() {
    // Podés agregar interacción: invertir, cambiar paleta, etc.
 
    
            for( let i = 0; i<this.sides ; i ++){
                let angle = (TWO_PI / this.sides * i) + this.angle;
                let y = this.radio * sin(angle);


                if(abs(y) < 2){
                    return true;
                }    
            }

            return false;
        }
        }
    

