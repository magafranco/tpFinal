function imagenes(foto, a, x, y, w, h){
 image(foto[a],x, y, w, h); 
}

function textoNarrativo(texto) {
  fill(255);
  textSize(18);
  text(texto, 20, height - 50);
}
