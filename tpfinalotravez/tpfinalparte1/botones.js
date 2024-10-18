//  BOTON COMENZAR
function botonComenzar() {
  noStroke();
  fill(100, 200, 0);
  rect(width / 2 - 50, 280, 100, 50);  // Dibujar botón
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Comenzar", width / 2, 305);  // Texto del botón
}

// BOTON EXPLORAR LAGO
function botonExplorarLago() {
  image(foto[3], width / 2 - 100 + 150, 340, 200, 100);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Explorar Lago", width / 2 - 100 + 150 + 100, 340 + 50);
}

// BOTON EXPLORAR BOSQUE
function botonExplorarBosque() {
  image(foto[1], width / 2 - 200, 340, 200, 100); // Mueve la imagen a la izquierda
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Explorar Bosque", width / 2 - 200 + 100, 340 + 50);
}

// BOSQUE 2
function botonContinuar1() {
  fill(100, 200, 0);
  rect(width / 2 - 50, 280, 100, 50);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Continuar", width / 2, 305);
}

// BOTON ENTRAR IGLESIA
function botonEntrariglesia() {
  fill(220, 140, 0);
  rect(width / 2 - 200, 340, 100, 50);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Entrar", width / 2 - 150, 365);
}
