function crearBoton(x, y, ancho, alto, texto, accion, parametro = null) {
  stroke(0);
  fill(121, 84, 87);
  rect(x, y, ancho, alto);

  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);

  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {
    fill(173, 120, 124, 150);
    rect(x, y, ancho, alto);


    if (mouseIsPressed) {
      if (parametro) {
        accion(parametro);
      } else {
        accion();
      }
    }
  }
}

function botonMusica() {
  fill(121, 84, 87);
  rect(550, 20, 40, 40)
    image(musica, 552, 22, 36, 36);
}
