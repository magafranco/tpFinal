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

  if (estoyEn == "inicio") {
    imagenes(foto, 0, 0, 0, 640, 480);
    mostrarTexto("Comienza la aventura", width / 2, 100);
    mostrarTexto("Comienza la aventura \n Dipper y Mabel se aventuran al bosque\n para recuperar los diarios perdidos.", width / 2, 150);
    crearBoton(width / 2 - 50, 300, 100, 50, "Comenzar", cambiarEscena, "comienzo");
  }

  if (estoyEn == "comienzo") {
    imagenes(foto, 0, 0, 0, 640, 480);

    mostrarTexto("¿Por dónde quéres empezar la búsqueda?", width/ 2, 130);
    crearBoton(50, 40, 100, 50, "Créditos", cambiarEscena, "creditos");

    //Boton Iglesia
    crearBoton(width / 2 - 260, 210, 200, 100, "Iglesia", cambiarEscena, "arbol1");
    image(foto[4], width / 2 - 260, 210, 200, 100);
    text("Explorar Iglesia abandonada", width / 2 - 260 + 100, 210 + 50);

    //Boton Rastro
    crearBoton(width / 2 + 60, 210, 200, 100, "Ratro", cambiarEscena, "rastro1");
    image(foto[5], width / 2 + 60, 210, 200, 100);
    text("Seguir Rastro", width / 2 - 180 + 340, 210 + 50);

    //Boton Bosque
    crearBoton(width / 2 - 260, 340, 200, 100, "Bosque", cambiarEscena, "bosque1");
    image(foto[1], width / 2 - 260, 340, 200, 100);
    text("Explorar Bosque", width / 2 - 260 + 100, 340 + 50);

    //Boton Lago
    crearBoton(width / 2 + 60, 340, 200, 100, "Lago", cambiarEscena, "lago1");
    image(foto[3], width / 2 + 60, 340, 200, 100);
    text("Explorar Lago", width / 2 - 180 + 340, 340 + 50);
  }

  //----------LAGO----------

  if (estoyEn == "lago1") {
    imagenes(foto, 14, 0, 0, 640, 480);
    mostrarTexto("¡encontrás una pista!", width / 2, 50);
    crearBoton(30, height - 70, 100, 50, "Volver", cambiarEscena, "comienzo");
    crearBoton(width - 140, height - 70, 120, 50, "Seguir pista", cambiarEscena, "lago2");
  }


  if (estoyEn == "lago2") {
    imagenes(foto, 17, 0, 0, 640, 480);
    mostrarTexto("¡Te encontrás con Gobblewonker!", width / 2, 50);
    crearBoton(width / 2 - 230, 330, 100, 50, "Huir", cambiarEscena, "lago4");
    crearBoton(width - 200, height - 150, 120, 50, "Pelear", cambiarEscena, "lago3");
  }

  if (estoyEn == "lago3") {
    imagenes(foto, 21, 0, 0, 640, 480);
    mostrarTexto("¡Derrotas a Gobblewonker y encontrás el diario 3! ", width / 2, 50);
    crearBoton(width / 2 - 50, 280, 100, 50, "Volver al inicio", cambiarEscena, "comienzo");
  }

  if (estoyEn == "lago4") {
    imagenes(foto, 6, 0, 0, 640, 480);
    mostrarTexto("Huis de Gobblewonker sin dejar rastro...", width / 2, 50);
    crearBoton(width / 2 - 50, 280, 100, 50, "Volver al inicio", cambiarEscena, "comienzo");
  }

  //----------BOSQUE----------

  if (estoyEn == "bosque1") {
    imagenes(foto, 8, 0, 0, 640, 480);
    crearBoton(width / 2 - 50, 280, 100, 50, "Continuar", cambiarEscena, "bosque2");
    mostrarTexto("Decidís adentrate al bosque...", width / 2, 50);
  }

  if (estoyEn == "bosque2") {
    imagenes(foto, 22, 0, 0, 640, 480);
    crearBoton(width / 2 - 200, 340, 100, 50, "Entrar", cambiarEscena, "bosque3");
    crearBoton(width / 2 + 100, 340, 100, 50, "Ir por otro lado", cambiarEscena, "bosque4");
    mostrarTexto("Encontraste un escondite en un árbol.", width / 2, 80);
    mostrarTexto("¿Que vas a hacer?", width / 2, 110);
  }

  if (estoyEn == "bosque3") {
    imagenes(foto, 18, 0, 0, 640, 480);
    crearBoton(width - 200, 390, 100, 50, "Pelear", cambiarEscena, "bosque5");
    crearBoton(width / 2 - 230, 390, 100, 50, "Huir", cambiarEscena, "bosque6");
    mostrarTexto("¡Te encontrás con el Cambiaformas!", width / 2, 80);
  }

  if (estoyEn == "bosque5") {
    imagenes(foto, 16, 0, 0, 640, 480);
    crearBoton(30, height - 70, 100, 50, "Volver", cambiarEscena, "comienzo");
    mostrarTexto("¡No tenés chance contra el!", width / 2, 80);
  }
  if (estoyEn == "bosque6") {
    imagenes(foto, 9, 0, 0, 640, 480);
    crearBoton(width / 2 - 50, 280, 100, 50, "Continuar", cambiarEscena, "bosque7");
    mostrarTexto("Lograste escapar del escondite...", width / 2, 80);
  }

  if (estoyEn == "bosque7") {
    imagenes(foto, 19, 0, 0, 640, 480);
    image(diario1, 40, 320, 140, 140);
    crearBoton(30, height - 70, 100, 50, "Volver", cambiarEscena, "comienzo");
    mostrarTexto("...¡Y encontraste el Diario 1 en la salida!", width / 2, 80);
  }


  if (estoyEn == "bosque4") {
    imagenes(foto, 10, 0, 0, 640, 480);
    crearBoton(width / 2 - 50, 280, 100, 50, "Volver al inicio", cambiarEscena, "comienzo");
    mostrarTexto("¡Te caíste de un precipicio!", width / 2, 80);
  }

  //----------IGLESIA----------

  if (estoyEn == "arbol1") {
    imagenes(foto, 23, 0, 0, 640, 480);
    crearBoton(width / 2 - 50, 280, 100, 50, "Volver al inicio", cambiarEscena, "comienzo");
    mostrarTexto("¡Encontraste el diario 2!", width / 2, 160);
  }

  //----------RASTRO----------

  if (estoyEn == "rastro1") {
    imagenes(foto, 20, 0, 0, 640, 480);
    crearBoton(30, height - 70, 100, 50, "Volver", cambiarEscena, "comienzo");
    crearBoton(width - 140, height - 70, 120, 50, "Continuar", cambiarEscena, "rastro2");
    mostrarTexto("¡Encontras una trampa y te lastimas!", width / 2, 80);
  }
  if (estoyEn == "rastro2") {
    imagenes(foto, 12, 0, 0, 640, 480);
    crearBoton(width / 2 - 230, 330, 100, 50, "Desviarse", cambiarEscena, "rastro4");
    crearBoton(width - 220, height - 150, 150, 50, "Seguir avanzando", cambiarEscena, "rastro3");
    mostrarTexto("Seguis con la búsqueda...", width / 2, 80);
  }
  if (estoyEn == "rastro3") {
    imagenes(foto, 24, 0, 0, 640, 480);
    crearBoton(30, height - 70, 100, 50, "Huir", cambiarEscena, "rastro6");
    crearBoton(width - 140, height - 70, 120, 50, "Pelear", cambiarEscena, "rastro5");
    mostrarTexto("¡Te encontrás con el Bromista del Super Halloween!", width / 2, 80);
  }
  if (estoyEn == "rastro4") {
    imagenes(foto, 13, 0, 0, 640, 480);
    crearBoton(width / 2 - 50, 280, 100, 50, "Volver al inicio", cambiarEscena, "comienzo");
    mostrarTexto("Entras en un bucle sin salida.", width / 2, 80);
  }
  if (estoyEn == "rastro5") {
    imagenes(foto, 25, 0, 0, 640, 480);
    crearBoton(width / 2 - 50, 280, 100, 50, "Volver al inicio", cambiarEscena, "comienzo");
    mostrarTexto("¡Derrotas al Bromista y tenes un festín de caramelos!", width / 2, 80);
  }
  if (estoyEn == "rastro6") {
    imagenes(foto, 26, 0, 0, 640, 480);
    crearBoton(width / 2 - 50, 280, 100, 50, "Volver al inicio", cambiarEscena, "comienzo");
    mostrarTexto("El Bromista te alcanza y te come.", width / 2, 80);
  }

  //----------CREDITOS----------

  if (estoyEn == "creditos") {
    imagenes(foto, 7, 0, 0, 640, 480);
    crearBoton(width / 2 - 50, 350, 100, 50, "Volver al inicio", cambiarEscena, "comienzo");
    mostrarTexto("Franco Magallanes Díaz", width / 2, 100);
    mostrarTexto("119074/2", width / 2, 120);
    mostrarTexto("Pilar Garayzabal", width / 2, 180);
    mostrarTexto("119036/5", width / 2, 200);
    mostrarTexto("Gravity Falls creado por Alex Hirsch", width/2, 260);
    mostrarTexto("Propiedad de Walt Disney Studios", width/2, 280);
    mostrarTexto("CREDITOS.", width / 2, 40);
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
}
