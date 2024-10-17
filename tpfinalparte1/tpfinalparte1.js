var total = 22;
var actual = 1

  let foto = [];
let estoyEn;

let song;

function preload() {

  for (let c=0; c<22; c++) {
    foto[c] = loadImage("data/g"+c+".jpg");

    soundFormats('mp3', 'ogg');
    song = loadSound('assets/sound/forest.mp3');
  }
}

function setup() {
  createCanvas (640, 480);
  background (120)
    
  estoyEn = "comienzo";

  for (let i=0; i<22; i++) {
    foto[i].resize(640, 480);
  }
}

function draw() {
  
  
  if (estoyEn == "comienzo") {
    imagenes(foto, 0, 0, 0, 640, 480);
    boton1();
  }
  
   if (estoyEn == "lago1") {
    imagenes(foto, 3, 0, 0, 640, 480);
  }
  
  
  
  
}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
