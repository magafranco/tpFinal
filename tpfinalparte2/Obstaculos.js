class Obstaculo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.imAlive = true
      this.proyectil = new Proyectil();
  }

  //----------DIBUJAR EN EL PROGRAMA----------
  dibujar() {
    if (this.imAlive) {
      fill(255, 0, 0);
      ellipse(this.posX, this.posY, 30, 30);
    }
  }

  //----------COLISION----------
  /*colision() {
   if (dist(this.posX, this.posY, proyectil.posX, proyectil.posY) < 15) {
   this.seMuere();
   }
   }*/

  //----------LA DIGNA Y HEROICA MUERTE DEL OBSTACULO----------
  seMuere() {
    imAlive = false;
  }
}
