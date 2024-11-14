class Jugador {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  mostrar() {
    imageMode(CENTER);
    image(imagenJugador, this.x, this.y, this.r * 2, this.r * 2.5);
  }
}
