class Obstaculo {
  constructor(carril, y) {
    this.x = anchoCarril * carril + anchoCarril / 2;
    this.y = y;
    this.r = anchoCarril / 3;
  }

  mover() {
    this.y += 5;
  }

  mostrar() {
    imageMode(CENTER);
    image(imagenObstaculo, this.x, this.y, this.r * 1.5, this.r * 1);
  }

  estaFueraPantalla() {
    return this.y > height;
  }

  choca(jugador) {
    let d = dist(this.x, this.y, jugador.x, jugador.y);
    return d < this.r + jugador.r;
  }
}
