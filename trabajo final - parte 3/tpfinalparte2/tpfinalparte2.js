/*
FRANCO MAGALLANES DÍAZ, 119074/2
PILAR GARAYZABAL, 119036/5

https://youtu.be/NXM9dYGs5XA

 Trabajo Practico Final, Parte 2
 */
 
let imagenJugador, imagenObstaculo, imagenJefe, fondo1, fondo2;
let juego;

let musica;
let nota;

function preload() {
  imagenJugador = loadImage('data/personajes.png');
  imagenObstaculo = loadImage('data/ojo.png');
  imagenJefe = loadImage('data/bromista.png');
  fondo1 = loadImage('data/fondo1.png');
  fondo2 = loadImage('data/fondo2.jpg');
  nota = loadImage('data/nota.png');

  soundFormats('mp3');
  musica = loadSound('assets/sound/WaxBattle.mp3');
  setLoop = true;
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(0);
  if (juego.menuActivo) {
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

  if (juego.juegoTerminado && mouseX > 270 && mouseX < 370 && mouseY > 240 && mouseY < 300) {
    juego.crearFondo3();
    juego.menuVerdadero();
    juego.dibujar();
  }

  if (mouseX > 550 && mouseX < 590 && mouseY > 400 && mouseY < 440) {
    if (musica.isPlaying()) {
      musica.pause();
    } else {
      musica.play()
    }
  }
}
