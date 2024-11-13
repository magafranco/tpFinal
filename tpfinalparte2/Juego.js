class Juego {
  constructor(cantObstaculos) {
    this.cantObstaculos = cantObstaculos;
    this.crearPersonajes();
    this.crearObstaculos();
  }

//----------DIBUJAR EL JUEGO----------
  dibujar() {
    this.personajes.dibujar();

    for (let i=0; i < this.cantObstaculos; i++) {
      this.obstaculos[i].dibujar();
    }
  }

  //----------CREACION DE OBJETOS DENTRO DEL JUEGO----------
  crearPersonajes() {
    this.personajes = new Personajes(304, 350);
  }

  //KEYPRESSED 'kipres'
  kipres(keyCode) {
    this.personajes.kipres(keyCode);
  }

  crearObstaculos() {
    this.obstaculos = [];
    for (let i=0; i < this.cantObstaculos; i++) {
      this.obstaculos[i] = new Obstaculo(i*35+35, 100);
    }
  }
}
