class Personajes {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = 3;
    this.proyectil = new Proyectil();
  }

  //----------DIBUJAR EN EL PROGRAMA----------
  dibujar() {
    this.proyectil.dibujar();

    fill(0, 255, 0);
    rect(this.posX, this.posY, 32, 32);
  }

  //----------TECLAS----------
  kipres(keyCode) {
    //----------MOVERSE----------
    if (keyCode == LEFT_ARROW && this.posX > 0) {
      this.moverIzq();
    } else if (keyCode == RIGHT_ARROW && this.posX < 600) {
      this.moverDer();
    } else if (keyCode == UP_ARROW && this.posY > 0) {
      this.moverAr();
    } else if (keyCode == DOWN_ARROW && this.posY < 440) {
      this.moverAb();

      //----------DISPARAR---------- (coming soon)
    } /*else if (keyCode == ENTER) {
     this.dispararBala();
     }*/
  }

  //----------DEFINICION DEL MOVIMIENTO----------
  moverIzq() {
    this.posX -= 50;
  }
  moverDer() {
    this.posX += 50;
  }
  moverAr() {
    this.posY -= 50;
  }
  moverAb() {
    this.posY += 50;
  }
}
