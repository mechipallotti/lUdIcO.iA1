
class Navegador {
  constructor(){
    this.pantallas = [];
    this.indicePantalla = null;
    this.pantallaActual = null;
  }

  agregarPantalla(p) {
    this.pantallas.push(p);
    if(!this.pantallaActual){
      this.indicePantalla = 0;
      this.pantallaActual = p;
      if(this.pantallaActual.onEnter) this.pantallaActual.onEnter();
    }
  }
  
  siguientePantalla(){
    // Llamo onExit de la pantalla actual
    if (this.pantallaActual?.onExit) this.pantallaActual.onExit();

    let i = (this.indicePantalla + 1) % this.pantallas.length;
    this.indicePantalla = i;
    this.pantallaActual = this.pantallas[i];
    if (this.pantallaActual?.onEnter) this.pantallaActual.onEnter();
  }

  previaPantalla(){
    if (this.pantallaActual?.onExit) this.pantallaActual.onExit();

    let i = this.indicePantalla - 1;
    if (i < 0) i = this.pantallas.length - 1;

    this.indicePantalla = i;
    this.pantallaActual = this.pantallas[i];

    if (this.pantallaActual?.onEnter) this.pantallaActual.onEnter();
  }

  seleccionarPantalla(i){
  if (i >= 0 && i < this.pantallas.length) {
      if (this.pantallaActual?.onExit) this.pantallaActual.onExit();

      this.indicePantalla = i;
      this.pantallaActual = this.pantallas[i];

      if (this.pantallaActual?.onEnter) this.pantallaActual.onEnter();
    } else {
      print('ERROR INDICE DE PANTALLA FUERA DE RANGO');
    }
    }
  }



class Pantalla {
  constructor(){
    //..
  }
  draw(){}
  mousePressed(){}
  keyPressed(){}
  onEnter(){};
  onExit(){};

}

