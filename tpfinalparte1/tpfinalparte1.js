/*
FRANCO MAGALLANES DÍAZ, 119074/2
 PILAR GARAYZABAL, 119036/5
 
 Trabajo Practico Final, Parte 1
 */

var total = 27;
var actual = 1;

let foto = [];
let estoyEn;
let song;
let musica;
let diario1;

function preload() {
  for (let c = 0; c < total; c++) {
    foto[c] = loadImage("data/g" + c + ".jpg");
  }
  musica = loadImage("data/musica.png");
  diario1 = loadImage("data/diario1.png");

  soundFormats('mp3', 'ogg');
  song = loadSound('assets/sound/forest.mp3');
  setLoop = true;
}

function setup() {
  createCanvas(640, 480);
  background(120);

  estoyEn = "inicio";

  for (let i = 0; i < total; i++) {
    foto[i].resize(640, 480);
  }
}

function draw() {

  /*print("X:"); //ayuda para botones
   print(mouseX);
   print("Y:");
   print(mouseY);*/

  if (estoyEn == "inicio") {
    imagenes(foto, 0, 0, 0, 640, 480);
    mostrarTextoInicio();
    botonComenzar();
  }

  if (estoyEn == "comienzo") {
    imagenes(foto, 0, 0, 0, 640, 480);
    botonCreditos();
    botonExplorarLago();
    botonExplorarBosque();
    botonExplorarIglesia();
    botonSeguirRastro();
    mostrarTextoComienzo()
  }

  //LAGO
  if (estoyEn == "lago1") {
    imagenes(foto, 14, 0, 0, 640, 480);
    botonContinuar();
    botonVolver();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("Encontrás una pista", width / 2, 50);
  }

  if (estoyEn == "lago2") {
    imagenes(foto, 17, 0, 0, 640, 480);
    botonHuir();
    botonPelear();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("¡Te encontrás con Gobblewonker!", width / 2, 50);
  }

  if (estoyEn == "lago3") {
    imagenes(foto, 21, 0, 0, 640, 480);
    botonVolverInicio();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("¡Derrotas a Gobblewonker y encontrás el diario 3! ", width / 2, 50);
  }

  if (estoyEn == "lago4") {
    imagenes(foto, 6, 0, 0, 640, 480);
    botonVolverInicio();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("Huis de Gobblewonker sin dejar rastro...", width / 2, 50);
  }

  //BOSQUE
  if (estoyEn == "bosque1") {
    imagenes(foto, 8, 0, 0, 640, 480);
    botonContinuar1();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("Decidís adentrate al bosque...", width / 2, 50);
  }

  if (estoyEn == "bosque2") {
    imagenes(foto, 22, 0, 0, 640, 480);
    botonEntrarArbol();
    botonDesvioArbol();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("Encontraste un escondite en un árbol.", width / 2, 80);
    text("¿Que vas a hacer?", width / 2, 110);
  }

  if (estoyEn == "bosque3") {
    imagenes(foto, 18, 0, 0, 640, 480);
    botonPelearArbol();
    botonHuirArbol();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("¡Te encontrás con el Cambiaformas!", width / 2, 80);
  }

  if (estoyEn == "bosque5") {
    imagenes(foto, 16, 0, 0, 640, 480);
    botonVolver();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("¡No tenés chance contra el!", width / 2, 80);
  }
  if (estoyEn == "bosque6") {
    imagenes(foto, 9, 0, 0, 640, 480);
    botonContinuar1();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("Lograste escapar del escondite...", width / 2, 80);
  }
  if (estoyEn == "bosque7") {
    imagenes(foto, 19, 0, 0, 640, 480);
    image(diario1, 40, 320, 140, 140);
    botonVolverInicio2();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("...¡Y encontraste el Diario 1 en la salida!", width / 2, 80);
  }


  if (estoyEn == "bosque4") {
    imagenes(foto, 10, 0, 0, 640, 480);
    botonVolver();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("¡Te caíste de un precipicio!", width / 2, 80);
  }

  //IGLESIA
  if (estoyEn == "arbol1") {
    imagenes(foto, 23, 0, 0, 640, 480);
    botonVolverInicio(width / 2 - 50, 280);
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("¡Encontraste el diario 2!", width / 2, 160);
  }

  //RASTRO
  if (estoyEn == "rastro1") {
    imagenes(foto, 20, 0, 0, 640, 480);
    botonVolver();
    botonContinuar2()
      fill(255);
    textSize(24);
    textAlign(CENTER);
    text("¡Encontras una trampa y te lastimas!", width / 2, 80);
  }
  if (estoyEn == "rastro2") {
    imagenes(foto, 12, 0, 0, 640, 480);
    botonDesviarse();
    botonSeguirA();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("Seguis con la búsqueda...", width / 2, 80);
  }
  if (estoyEn == "rastro3") {
    imagenes(foto, 24, 0, 0, 640, 480);
    botonHuir2()
      botonPelear2()
      fill(255);
    textSize(24);
    textAlign(CENTER);
    text("¡Te encontrás con el Bromista del Super Halloween!", width / 2, 80);
  }
  if (estoyEn == "rastro4") {
    imagenes(foto, 13, 0, 0, 640, 480);
    botonVolverInicio();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("Entras en un bucle sin salida.", width / 2, 80);
  }
  if (estoyEn == "rastro5") {
    imagenes(foto, 25, 0, 0, 640, 480);
    botonVolverInicio();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("¡Derrotas al Bromista y tenes un festín de caramelos!", width / 2, 80);
  }
  if (estoyEn == "rastro6") {
    imagenes(foto, 26, 0, 0, 640, 480);
    botonVolverInicio();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("El Bromista te alcanza y te come.", width / 2, 80);
  }

  //CREDITOS
  if (estoyEn == "creditos") {
    imagenes(foto, 7, 0, 0, 640, 480);
    creditos();
    botonVolverInicio2();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("CREDITOS.", width / 2, 40);
  }

  botonMusica();
}


function mousePressed() {

  //550, 20

  if (mouseX > 550 && mouseX < 590 && mouseY > 20 && mouseY < 60) {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }

  if (estoyEn == "inicio" && mouseX > 250 && mouseX < 350 && mouseY > 300 && mouseY < 350) {
    estoyEn = "comienzo";
  }

  //CREDITOS
  if (estoyEn == "comienzo" && mouseX > 45 && mouseX < 145 && mouseY > 15 && mouseY < 65) {
    estoyEn = "creditos";
  }
  if (estoyEn == "creditos" && mouseX > 270 && mouseX < 370 && mouseY > 350 && mouseY < 400 ) {
    estoyEn = "comienzo";
  }

  //IGLESIA
  if (estoyEn == "comienzo" && mouseX > 100 && mouseX < 300 && mouseY > 206 && mouseY < 307) {
    estoyEn = "arbol1";
  }

  if (estoyEn == "arbol1" && mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > 280 && mouseY < 330) {
    estoyEn = "comienzo";
  }

  //BOSQUE
  if (estoyEn == "comienzo" && mouseX > 100 && mouseX < 300 && mouseY > 340 && mouseY < 440) {
    estoyEn = "bosque1";
  }
  if (estoyEn == "bosque1" && mouseX > 250 && mouseX < 350 && mouseY > 300 && mouseY < 350) {
    estoyEn = "bosque2";
  }

  //ARBOL

  if (estoyEn == "bosque2" && mouseX > 120 && mouseX < 220 && mouseY > 340 && mouseY < 390) {
    estoyEn = "bosque3";
  }


  //PRECIPICIO
  if (estoyEn == "bosque2" && mouseX > 420 && mouseX < 520 && mouseY > 340 && mouseY < 390) {
    estoyEn = "bosque4";
  }
  if (estoyEn == "bosque4" && mouseX > 30 && mouseX < 130 && mouseY > 410 && mouseY < 460) {
    estoyEn = "comienzo";
  }

  //PELEAR ARBOL
  if (estoyEn == "bosque3" && mouseX > 440 && mouseX < 540 && mouseY > 390 && mouseY < 440) {
    estoyEn = "bosque5";
  }

  if (estoyEn == "bosque5" && mouseX > 28 && mouseX < 128 && mouseY > 410 && mouseY < 457) {
    estoyEn = "comienzo";
  }

  //HUIR ARBOL
  if (estoyEn == "bosque3" && mouseX > 90 && mouseX < 190 && mouseY > 390 && mouseY < 440) {
    estoyEn = "bosque6";
  }

  if (estoyEn == "bosque6" && mouseX > 250 && mouseX < 350 && mouseY > 300 && mouseY < 350) {
    estoyEn = "bosque7";
  }
  if (estoyEn == "bosque7" && mouseX > 270 && mouseX < 370 && mouseY > 350 && mouseY < 400) {
    estoyEn = "comienzo";
  }

  //LAGO
  if (estoyEn == "comienzo" && mouseX > 370 && mouseX < 770 && mouseY > 340 && mouseY < 440) {
    estoyEn = "lago1";
  }
  if (estoyEn == "lago1" && mouseX > 28 && mouseX < 128 && mouseY > 410 && mouseY < 457) {
    estoyEn = "comienzo";
  }
  if (estoyEn == "lago1" && mouseX > 500 && mouseX < 620 && mouseY > 410 && mouseY < 457) {
    estoyEn = "lago2";
  }

  if (estoyEn == "lago2" && mouseX > 438 && mouseX < 561 && mouseY > 326 && mouseY < 380) {
    estoyEn = "lago3";
  }
  if (estoyEn == "lago2" && mouseX > 90 && mouseX < 191 && mouseY > 330 && mouseY < 380) {
    estoyEn = "lago4";
  }

  if (estoyEn == "lago4" && mouseX > 270 && mouseX < 370 && mouseY > 278 && mouseY < 329) {
    estoyEn = "comienzo";
  }

  if (estoyEn == "lago3" && mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > 280 && mouseY < 330) {
    estoyEn = "comienzo";
  }

  //RASTRO
  if (estoyEn == "comienzo" && mouseX > 337 && mouseX < 540 && mouseY > 208 && mouseY < 308) {
    estoyEn = "rastro1";
  }
  if (estoyEn == "rastro1" && mouseX > 28 && mouseX < 128 && mouseY > 410 && mouseY < 457) {
    estoyEn = "comienzo";
  }
  if (estoyEn == "rastro1" && mouseX > 500 && mouseX < 620 && mouseY > 410 && mouseY < 457) {
    estoyEn = "rastro2";
  }
  if (estoyEn == "rastro2" && mouseX > 418 && mouseX < 570 && mouseY > 330 && mouseY < 380) {
    estoyEn = "rastro3";
  }
  if (estoyEn == "rastro2" && mouseX > 90 && mouseX < 190 && mouseY > 330 && mouseY < 380) {
    estoyEn = "rastro4";
  }
  if (estoyEn == "rastro3" && mouseX > 500 && mouseX < 620 && mouseY > 410 && mouseY < 457) {
    estoyEn = "rastro5";
  }
  if (estoyEn == "rastro3" && mouseX > 28 && mouseX < 128 && mouseY > 410 && mouseY < 457) {
    estoyEn = "rastro6";
  }
  if (estoyEn == "rastro4" && mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > 280 && mouseY < 330) {
    estoyEn = "comienzo";
  }
  if (estoyEn == "rastro5" && mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > 280 && mouseY < 330) {
    estoyEn = "comienzo";
  }
  if (estoyEn == "rastro6" && mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > 280 && mouseY < 330) {
    estoyEn = "comienzo";
  }
}

function mostrarTextoInicio() {
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Comienza la aventura", width / 2, 100);
  textSize(18);
  text("Dipper y Mabel se aventuran al bosque para recuperar los diarios perdidos.", width / 2, 150);  // Subtítulo
}

function mostrarTextoComienzo() {
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("¿Por dónde quéres empezar la búsqueda?", width/ 2, 130);
}
