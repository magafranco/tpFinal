var total = 22; 
var actual = 1;

let foto = [];
let estoyEn;
let song;

function preload() {
  for (let c = 0; c < total; c++) {
    foto[c] = loadImage("data/g" + c + ".jpg");
    soundFormats('mp3', 'ogg');
    song = loadSound('assets/sound/forest.mp3');
  }
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
  if (estoyEn == "inicio") {
    imagenes(foto, 0, 0, 0, 640, 480); 
    mostrarTextoInicio(); 
    botonComenzar(); 
  }

  if (estoyEn == "comienzo") {
    imagenes(foto, 0, 0, 0, 640, 480);  
    botonExplorarLago(); 
    botonExplorararbol();
  }

  if (estoyEn == "lago1") {
    imagenes(foto, 14, 0, 0, 640, 480);
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("Encuentras una pista", width / 2, 50);
  }
}


function mousePressed() {
  if (estoyEn == "inicio" && mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > 350 && mouseY < 400) {
    estoyEn = "comienzo";  
  }

  if (estoyEn == "comienzo" && mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > 340 && mouseY < 440) {
    estoyEn = "comienzo";  
  }
  
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}


function mostrarTextoInicio() {
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Comienza la aventura", width / 2, 100);  

  textSize(18);
  text("Dipper y Mabel se aventuran al bosque \npara recuperar los diarios perdidos.", width / 2, 150);  // Subtítulo
}
