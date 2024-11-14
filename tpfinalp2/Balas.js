class Bala {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 5;  // Tamaño de la bala
    this.destruirse = false;
  }

  mover() {
    this.y -= 10;
  }

  mostrar() {
    fill(50, 200, 50);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }

  destruir() {
    this.destruirse = true;
  }

  estaDestruida() {
    return this.destruirse;
  }
}
