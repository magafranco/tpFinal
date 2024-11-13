/*
TRABAJO PRACTICO FINAL, ETAPA 2
 
 Franco Magallanes Diaz, 119074/2
 Pilar Garayzabal, 119036/5
 */

let game;

function setup() {
  createCanvas(640, 480);
  game = new Juego(8);
}


function draw() {
  noStroke();
  background(50);
  game.dibujar();

  /*print("X:");
   print(mouseX);
   print("Y:");
   print(mouseY);*/
}

function keyPressed() {
  game.kipres(keyCode);
}
