class Jefe {
  constructor(anchoCarril) {
    this.x = anchoCarril * 1 + anchoCarril / 2;
    this.y = 100;
    this.r = 60;
    this.direccion = 1;
  }

  mover() {
    this.x += this.direccion * 5;
    if (this.x > width - this.r || this.x < this.r) {
      this.direccion *= -1;
    }
  }

  mostrar() {
    imageMode(CENTER);
    image(imagenJefe, this.x, this.y, this.r * 4, this.r * 4);
  }

  choca(objeto) {
    let d = dist(this.x, this.y, objeto.x, objeto.y);
    return d < this.r + objeto.r;
  }

  reducirTamaño() {
    this.r -= 10;
  }

  estaDerrotado() {
    return this.r <= 10;
  }
}
