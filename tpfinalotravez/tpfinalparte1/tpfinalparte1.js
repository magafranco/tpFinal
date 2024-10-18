var total = 23;
var actual = 1;

let foto = [];
let estoyEn;
let song;

function preload() {
  for (let c = 0; c < total; c++) {
    foto[c] = loadImage("data/g" + c + ".jpg");
  }
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

  print("X:"); //ayuda para botones
  print(mouseX);
  print("Y:");
  print(mouseY);

  if (estoyEn == "inicio") {
    imagenes(foto, 0, 0, 0, 640, 480);
    mostrarTextoInicio();
    botonComenzar();
  }

  if (estoyEn == "comienzo") {
    imagenes(foto, 0, 0, 0, 640, 480);
    botonExplorarLago();
    botonExplorarBosque();
  }

  if (estoyEn == "lago1") {
    imagenes(foto, 14, 0, 0, 640, 480);
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("Encontrás una pista", width / 2, 50);
  }

  if (estoyEn == "bosque1") {
    imagenes(foto, 8, 0, 0, 640, 480);
    botonContinuar1();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("Decidís adentrate al bosque...", width / 2, 50);
  }

  if (estoyEn == "bosque2") {
    imagenes(foto, 4, 0, 0, 640, 480);
    botonEntrariglesia();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("Encontraste una iglesia abandonada.", width / 2, 80);
    text("¿Que vas a hacer?", width / 2, 110);
  }
}


function mousePressed() {
  if (estoyEn == "inicio" && mouseX > 250 && mouseX < 350 && mouseY > 300 && mouseY < 350) {
    estoyEn = "comienzo";
  }

  /*if (estoyEn == "comienzo" && mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > 340 && mouseY < 440) {
   estoyEn = "comienzo"; no usar
   }*/
   
  //BOSQUE
  if (estoyEn == "comienzo" && mouseX > 120 && mouseX < 320 && mouseY > 340 && mouseY < 440) {
    estoyEn = "bosque1";
  }
   if (estoyEn == "bosque1" && mouseX > 250 && mouseX < 350 && mouseY > 300 && mouseY < 350) {
    estoyEn = "bosque2";
  }
  //LAGO
  if (estoyEn == "comienzo" && mouseX > 370 && mouseX < 770 && mouseY > 340 && mouseY < 440) {
    estoyEn = "lago1";
  }
}

function mostrarTextoInicio() {
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Comienza la aventura", width / 2, 100);

  textSize(18);
  text("Dipper y Mabel se aventuran al bosque\n para recuperar los diarios perdidos.", width / 2, 150);  // Subtítulo
}
