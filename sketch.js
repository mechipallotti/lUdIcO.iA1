
let font;
let miniatura1; let miniatura2; let miniatura3;
let cnv;
let nav;
let clickSound


function preload() {
  font = loadFont('assets/CourierPrime-Regular.ttf');
  miniatura1 = loadImage('assets/escena1.logo.jpg');
   miniatura2 = loadImage('assets/escena3.logo.jpg');
  miniatura3 = loadImage('assets/escena2.logo.jpg');
  clickSound = loadSound ('assets/bell.mp3');


}


function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  nav = new Navegador();

  p = new PantallaInicio();
  nav.agregarPantalla(p);   

 p = new Pantalla01(clickSound);
 nav.agregarPantalla(p);

 p = new Pantalla02();
 nav.agregarPantalla(p);

 p = new Pantalla03(clickSound);
 nav.agregarPantalla(p);
}

function draw() {
  nav.pantallaActual.draw();
}

function mousePressed() {
   userStartAudio(); // para desbloquear el audio, sino salta error en consola "The AudioContext was not allowed to start"
  nav.pantallaActual.mousePressed();
}



function keyPressed() {
 nav.pantallaActual.keyPressed();
}


