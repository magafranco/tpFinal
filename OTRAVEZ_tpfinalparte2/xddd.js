let imagenJugador, imagenObstaculo, imagenJefe, fondo1, fondo2;
let juego;

function preload() {
  imagenJugador = loadImage('data/personajes.png');
  imagenObstaculo = loadImage('data/ojo.png');
  imagenJefe = loadImage('data/bromista.png');
  fondo1 = loadImage('data/fondo1.png');
  fondo2 = loadImage('data/fondo2.jpg');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(0);
  if (juego.menuActivo) {
    juego.crearFondo1();
    juego.crearMenu();
  }

  if (juego.juegoActivo) {
    juego.dibujar();
  }
  /*print("X:");
   print(mouseX);
   print("Y:");
   print(mouseY);*/
}

function keyPressed() {
  juego.controlarJugador(keyCode, key);
}

function mousePressed() {
  if (juego.juegoActivo == false && mouseX > 270 && mouseX < 370 && mouseY > 340 && mouseY < 400 ) {
    juego.menuFalso();
  }
}
