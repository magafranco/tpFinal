class Juego {
  constructor() {
    this.carrilJugador = 1;
    this.anchoCarril = width / 3;
    this.jugador = new Personaje(this.anchoCarril * this.carrilJugador + this.anchoCarril / 2, height - 50, this.anchoCarril / 2);
    this.obstaculos = [];
    this.balas = [];
    this.temporizador = 0;
    this.jefe = null;
    this.jefeActivo = false;
    this.jefeDerrotado = false;
    this.juegoTerminado = false;
    this.ultimoObstaculoY = height; 
    this.espacioEntreObstaculos = 300; 
  }

  dibujar() {
    if (this.juegoTerminado) {
      this.mostrarMensajeFin();
      return;
    }

    this.temporizador += deltaTime / 1000;
    this.jugador.mostrar();

    if (this.jefeActivo) {
      this.gestionarJefe();
    } else {
      this.gestionarObstaculos();
    }

    this.gestionarBalas();

    if (this.temporizador > 10 && !this.jefeActivo) {
      this.activarJefe();
    }
  }

  controlarJugador(keyCode, key) {
    if (keyCode === LEFT_ARROW && this.carrilJugador > 0) {
      this.carrilJugador--;
    } else if (keyCode === RIGHT_ARROW && this.carrilJugador < 2) {
      this.carrilJugador++;
    }
    this.jugador.x = this.anchoCarril * this.carrilJugador + this.anchoCarril / 2;

    if (key === 'e' || key === 'E') {
      this.balas.push(new Bala(this.jugador.x, this.jugador.y - 20));
    }
  }

  gestionarObstaculos() {
    for (let obstaculo of this.obstaculos) {
      obstaculo.mover();
      obstaculo.mostrar();

      if (obstaculo.choca(this.jugador)) {
        this.juegoTerminado = true;
      }
    }

    this.obstaculos = this.obstaculos.filter(obstaculo => !obstaculo.estaFueraPantalla());

    if (this.obstaculos.length === 1 || this.ultimoObstaculoY > this.espacioEntreObstaculos) {
      this.crearObstaculoAleatorio();
    }
  }

  gestionarBalas() {
    for (let bala of this.balas) {
      bala.mover();
      bala.mostrar();
    }

    this.balas = this.balas.filter(bala => !bala.estaDestruida());
  }

  gestionarJefe() {
    this.jefe.mover();
    this.jefe.mostrar();

    for (let bala of this.balas) {
      if (this.jefe.choca(bala)) {
        this.jefe.reducirTamaño();
        bala.destruir();
      }
    }

    if (this.jefe.estaDerrotado()) {
      this.jefeDerrotado = true;
      this.juegoTerminado = true;
    }
  }

  activarJefe() {
    this.jefeActivo = true;
    this.obstaculos = [];
    this.jefe = new Jefe(this.anchoCarril);
  }

  crearObstaculoAleatorio() {
    let carrilAleatorio = floor(random(0, 3));
    let nuevoObstaculo = new Obstaculo(carrilAleatorio, -100);
    this.obstaculos.push(nuevoObstaculo);
    this.ultimoObstaculoY = 0;
  }

  mostrarMensajeFin() {
    textSize(32);
    stroke(255);
    strokeWeight(1);
    fill(0);
    textAlign(CENTER, CENTER);
    if (this.jefeDerrotado) {
      text('¡Derrotaste a Bill!', width / 2, height / 2);
    } else {
      text('Fin del Juego', width / 2, height / 2);
    }
  }
}
