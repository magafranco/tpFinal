var total = 24;
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
    botonExplorarArbol();
    botonSeguirRastro();
    mostrarTextoComienzo()
  }

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
    text("¡Te encontrás con gobblewonker!", width / 2, 50);
 }
 
    if (estoyEn == "lago3") {
    imagenes(foto, 21, 0, 0, 640, 480);
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("¡Derrotas a gobblewonker y encontrás el diario 3! ", width / 2, 50);
 }
 
    if (estoyEn == "lago4") {
    imagenes(foto, 6, 0, 0, 640, 480);
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("Huis de gobblewonker sin dejar rastro...", width / 2, 50);
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
  
    if (estoyEn == "arbol1") {
    imagenes(foto, 23, 0, 0, 640, 480);
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("¡Encontraste el diario 2!", width / 2, 160);
  }
  
    if (estoyEn == "rastro1") {
    imagenes(foto, 20, 0, 0, 640, 480);
    botonVolver();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("¡Encontras una trampa y te lastimas!", width / 2, 80);
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
      if (estoyEn == "lago1" && mouseX > 90 && mouseX < 190 && mouseY > 384 && mouseY < 432) {
    estoyEn = "comienzo";
    }
    if (estoyEn == "lago1" && mouseX > 440 && mouseX < 561 && mouseY > 384 && mouseY < 428) {
    estoyEn = "lago2";
    }
    
    if (estoyEn == "lago2" && mouseX > 438 && mouseX < 561 && mouseY > 326 && mouseY < 380) {
    estoyEn = "lago3";
    }
    if (estoyEn == "lago2" && mouseX > 90 && mouseX < 191 && mouseY > 330 && mouseY < 380) {
    estoyEn = "lago4";
    }
    
    
      //ARBOL HUECO
  if (estoyEn == "comienzo" && mouseX > 100 && mouseX < 300 && mouseY > 206 && mouseY < 307) {
    estoyEn = "arbol1";
  }
  
  //RASTROO
  if (estoyEn == "comienzo" && mouseX > 337 && mouseX < 540 && mouseY > 208 && mouseY < 308) {
    estoyEn = "rastro1";
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

function mostrarTextoComienzo() {
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("¿Por dónde quéres empezar la búsqueda?", width/ 2, 130);
}
  
