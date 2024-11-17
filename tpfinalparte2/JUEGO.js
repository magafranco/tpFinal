class Juego {
  constructor() {
    this.carrilJugador = 1;
    this.anchoCarril = width / 3;
    this.jugador = new Personaje(this.anchoCarril * this.carrilJugador + this.anchoCarril / 2, height - 50, this.anchoCarril / 2);
    this.obstaculos = [];
    this.balas = [];
    this.temporizador = 0;
    this.jefe = null;

    this.crearMenu();
    this.menuActivo = true;
    this.juegoActivo = false;

    this.jefeActivo = false;
    this.jefeDerrotado = false;
    this.juegoTerminado = false;
    this.volviAlMenu = false;

    this.ultimoObstaculoY = height;
    this.espacioEntreObstaculos = 300;
  }

  crearFondo1() {
    image(fondo1, 0, 0, 640, 480);
  }

  crearFondo2() {
    image(fondo2, width/2, height/2, 640, 480);
  }

  crearFondo3() {
    image(fondo1, width/2, height/2, 640, 480);
  }

  crearMenu() {
    if (this.menuActivo) {
      this.dibujarMenu();
    }
  }

  dibujarMenu() {
    if (this.volviAlMenu) {
      this.crearFondo3();
    } else {
      this.crearFondo1();
    }

    this.botonMusica();
    textSize(40);
    stroke(4);
    fill(255);
    textAlign(CENTER);
    text('¡Derrota al Bromista del Super', width / 2, 60);
    text('¡Halloween para ganar!', width / 2, 100);

    textSize(24);
    fill(255, 120, 0);
    text('Movete de izquierda a derecha con las flechas del teclado.', width / 2, 220);
    text('Pulsa la tecla E para lanzarle piedras al Bromista.', width / 2, 260);
    this.botonComenzar();
  }

  botonComenzar() {
    if (this.menuActivo) {
      fill(121, 84, 87);
      rect(270, 340, 100, 60);

      textAlign(CENTER);
      textSize(20);
      fill(255);
      text('Jugar', width/2, 375);
    }
  }

  botonVolverMenu() {
    if (this.juegoTerminado) {
      fill(121, 84, 87);
      rect(270, 240, 100, 60);

      textAlign(CENTER);
      textSize(20);
      fill(255);
      text('Menu', width/2, 275);
    }
  }

  botonMusica() {
    fill(121, 84, 87);
    rect(550, 400, 40, 40)
      image(nota, 552, 402, 36, 36);
  }

  menuFalso() {
    this.menuActivo = false;
    this.juegoActivo = true;
  }

  menuVerdadero() {
    this.carrilJugador = 1;
    this.anchoCarril = width / 3;
    this.jugador = new Personaje(this.anchoCarril * this.carrilJugador + this.anchoCarril / 2, height - 50, this.anchoCarril / 2);
    this.obstaculos = [];
    this.balas = [];
    this.temporizador = 0;
    this.jefe = null;

    this.crearMenu();
    this.menuActivo = true;
    this.juegoActivo = false;

    this.jefeActivo = false;
    this.jefeDerrotado = false;
    this.juegoTerminado = false;

    this.volviAlMenu = true;

    this.ultimoObstaculoY = height;
    this.espacioEntreObstaculos = 300;
  }

  dibujar() {
    this.crearFondo2();
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
    {
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
  }

  gestionarBalas() {
    for (let bala of this.balas) {
      bala.mover();
      bala.mostrar();
    }

    this.balas = this.balas.filter(bala => !bala.estaDestruida());
  }

  gestionarJefe() {
    {
      this.jefe.mover();
      this.jefe.mostrar();

      for (let bala of this.balas) {
        if (this.jefe.choca(bala)) {
          this.jefe.reducirTamaño();
          bala.destruir();
        }


        if (this.jefe.estaDerrotado()) {
          this.jefeDerrotado = true;
          this.juegoTerminado = true;
        }
      }
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

  creditos() {
    textSize(20);
    text('Juego creado por', width / 2, 350);
    text('Franco Magallanes Díaz y Pilar Garayzabal.', width / 2, 370);
    text('Gravity Falls creado por Alex Hirsch.', width / 2, 410);
    text('Propiedad de Walt Disney Studios.', width / 2, 430);
  }

  mostrarMensajeFin() {
    if (this.juegoActivo) {
      textSize(32);
      stroke(2);
      fill(255);
      textAlign(CENTER, CENTER);
      if (this.jefeDerrotado) {
        text('¡Derrotaste al Bromista de Super Halloween!', width / 2, 200);
        this.creditos();
        this.botonVolverMenu();
      } else {
        text('Fin del Juego', width / 2, 200);
        this.creditos();
        this.botonVolverMenu();
      }
    }
  }
}
