let inicio, escena_geometria, escena_imagen, escena_sonido;
let escenaActual;
let font;
let miniatura1; let miniatura2; let miniatura3;
let cnv;

function preload() {
  font = loadFont('assets/CourierPrime-Regular.ttf');
  miniatura1 = loadImage('assets/escena1.logo.jpg');
  miniatura2 = loadImage('assets/escena2.logo.jpg');
  miniatura3 = loadImage('assets/escena3.logo.jpg');

}


function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
 
  inicio = new Navegador();
  escena_geometria = new Circulos();
  escena_imagen = new Webcam();
  escena_sonido = new Onion();

  escenaActual = inicio;
}

function draw() {
  escenaActual.draw();
}



function keyPressed() {
  if (escenaActual.handleKeyPressed) {
    escenaActual.handleKeyPressed();
  }

  if (key === '1') {
    escenaCambio(escena_geometria);
  } else if (key === '2') {
    escenaCambio(escena_imagen);
  } else if (key === '3') {
    escenaCambio(escena_sonido);
  }else if (key === '4') {
    escenaCambio(inicio);
  }
}

function escenaCambio(newScene) {
  escenaActual = newScene;
}


