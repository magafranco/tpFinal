let imagenJugador, imagenObstaculo, imagenJefe, imagenFondo;
let juego;

function preload() {
  imagenJugador = loadImage('data/personajes.png');
  imagenObstaculo = loadImage('data/ojo.png');
  imagenJefe = loadImage('data/bill.png');
  imagenFondo = loadImage('data/fondo.png');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(0);
  image(imagenFondo, 0, 0);
  juego.dibujar();
}

function keyPressed() {
  juego.controlarJugador(keyCode, key);
}
