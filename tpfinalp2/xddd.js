let jugador;
let obstaculos = [];
let balas = [];
let jefe;
let jefeActivo = false;
let jefeDerrotado = false; 
let juegoTerminado = false;
let temporizador = 0;
let anchoCarril;
let carrilJugador = 1;
let imagenJugador;
let imagenObstaculo;
let imagenJefe;
let imagenFondo;

function preload() {
  imagenJugador = loadImage('data/personajes.png');
  imagenObstaculo = loadImage('data/ojo.png'); 
  imagenJefe = loadImage('data/bill.png');
  imagenFondo = loadImage('data/fondo.png');
}

function setup() {
  createCanvas(640, 480);
  anchoCarril = width / 3;

  jugador = new Jugador(anchoCarril * carrilJugador + anchoCarril / 2, height - 50, anchoCarril / 2);

    for (let i = 0; i < 5; i++) {
    obstaculos.push(new Obstaculo(random([0, 1, 2]), -i * 400));
  }
}

function draw() {
  background(0);
  image(imagenFondo, 0, 0);

  if (juegoTerminado) {
    textSize(32);
    stroke(255);
    strokeWeight(1);
    fill(0);
    textAlign(CENTER, CENTER);
    if (jefeDerrotado) {
      text('¡Derrotaste a Bill!', width / 2, height / 2);
    } else {
      text('Fin del Juego', width / 2, height / 2);
    }
    return;
  }


  temporizador += deltaTime / 1000;
  //despues d 10s aparece bill
  if (temporizador > 10 && !jefeActivo) {
    jefeActivo = true;
    obstaculos = []; 
    jefe = new Jefe();
  }


  if (jefeActivo) {
    jefe.mover();
    jefe.mostrar();

    for (let bala of balas) {
      bala.mover();
      bala.mostrar();

      if (jefe.choca(bala)) {
        jefe.reducirTamaño();
        bala.destruir();
      }
    }


    balas = balas.filter(bala => !bala.estaDestruida());


    if (jefe.estaDerrotado()) {
      jefeDerrotado = true;  
      juegoTerminado = true; 
      return;
    }

  } else {
    for (let obstaculo of obstaculos) {
      obstaculo.mover();
      obstaculo.mostrar();

      
      if (obstaculo.choca(jugador)) {
        juegoTerminado = true;
      }
    }

    obstaculos = obstaculos.filter(obstaculo => !obstaculo.estaFueraPantalla());
    while (obstaculos.length < 5) {
      obstaculos.push(new Obstaculo(random([0, 1, 2]), -400));
    }
  }

  jugador.mostrar();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && carrilJugador > 0) {
    carrilJugador--;
  } else if (keyCode === RIGHT_ARROW && carrilJugador < 2) {
    carrilJugador++;
  }

  jugador.x = anchoCarril * carrilJugador + anchoCarril / 2;


  if (key === 'e' || key === 'E') {
    balas.push(new Bala(jugador.x, jugador.y - 20));
  }
}
