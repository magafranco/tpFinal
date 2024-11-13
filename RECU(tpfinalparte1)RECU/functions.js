function mostrarTexto(mensaje, x, y) {
  fill(255);
  textSize(24);
  textAlign(CENTER);
  text(mensaje, x, y);
}

function imagenes(foto, a, x, y, w, h){
 image(foto[a],x, y, w, h); 
}

function cambiarEscena(nuevaEscena) {
  estoyEn = nuevaEscena;
}
