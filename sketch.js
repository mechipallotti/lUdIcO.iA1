
let font;
let miniatura1; let miniatura2; let miniatura3;
let cnv;
let nav;


function preload() {
  font = loadFont('assets/CourierPrime-Regular.ttf');
  miniatura1 = loadImage('assets/escena1.logo.jpg');
   miniatura2 = loadImage('assets/escena3.logo.jpg');
  miniatura3 = loadImage('assets/escena2.logo.jpg');


}


function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  nav = new Navegador();

  p = new PantallaInicio();
  nav.agregarPantalla(p);   

 p = new Pantalla01();
 nav.agregarPantalla(p);

 p = new Pantalla02();
 nav.agregarPantalla(p);

 p = new Pantalla03();
 nav.agregarPantalla(p);
}

function draw() {
  nav.pantallaActual.draw();
}

function mousePressed() {
  nav.pantallaActual.mousePressed();
}



function keyPressed() {
 nav.pantallaActual.keyPressed();
}


