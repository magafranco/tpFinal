//  BOTON COMENZAR
function botonComenzar() {
  noStroke();
  fill(100, 200, 0);
  rect(width / 2 - 50, 350, 100, 50);  // Dibujar botón
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Comenzar", width / 2, 375);  // Texto del botón
}

// BOTON EXPLORAR LAGO
function botonExplorarLago() {
  noStroke();
  image(foto[3], width / 2 - 100 + 150, 340, 200, 100); 
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Explorar Lago", width / 2 - 100 + 150 + 100, 340 + 50);
}

// BOTON EXPLORAR ARBOL
function botonExplorararbol() {
  noStroke();
  image(foto[1], width / 2 - 200, 340, 200, 100); // Mueve la imagen a la izquierda
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Explorar Árbol Hueco", width / 2 - 200 + 100, 340 + 50);
}
