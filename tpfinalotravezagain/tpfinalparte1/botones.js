//  BOTON COMENZAR
function botonComenzar() {
  noStroke();
  fill(100, 200, 0);
  rect(width / 2 - 50, 280, 100, 50);  
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Comenzar", width / 2, 305);  
}

//BOTON VOLVER AL INICIO
function botonVolverInicio() {
  fill(100);
  rect(width / 2 - 50, 280, 100, 50); 
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Volver al inicio",  width / 2, 305);  
}

// BOTON VOLVER (lago1)
function botonVolver() {
  fill(170, 132, 74);
  rect(width / 2 - 230, 385, 100, 50);  
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Volver", (width / 2 - 230) + (100 / 2), 385 + (50 / 2));  
}
 
// BOTON CONTINUAR (lago1)
function botonContinuar() {
  fill(170, 132, 74);
  rect(width - 200, height - 100, 120, 50);
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Seguir la pista", (width - 200) + (120 / 2), (height - 100) + (50 / 2));
}

//BOTON PELEAR (LAGO2)
function botonPelear() {
  fill(36, 89, 142);
  rect(width - 200, height - 150, 120, 50);
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("pelear", (width - 200) + (120 / 2), (height - 150) + (50 / 2));
}

// BOTON HUIR (lago2)
function botonHuir() {
  fill(36, 89, 142);
  rect(width / 2 - 230, 330, 100, 50);  
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Huir", (width / 2 - 230) + (100 / 2), 330 + (50 / 2));  
}

// BOTON EXPLORAR LAGO
function botonExplorarLago() {
  image(foto[3], width / 2 - 100 + 120, 340, 200, 100);
  stroke(0, 150);
  strokeWeight(3);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Explorar Lago", width / 2 - 100 + 120 + 100, 340 + 50);
}

// BOTON EXPLORAR BOSQUE
function botonExplorarBosque() {
  image(foto[1], width / 2 - 220, 340, 200, 100); 
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Explorar Bosque", width / 2 - 220 + 100, 340 + 50);
}

// BOTON EXPLORAR ARBOL
function botonExplorarArbol() {
  image(foto[22], width / 2 - 220, 210, 200, 100); 
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Explorar Árbol Hueco", width / 2 - 220 + 100, 210 + 50);
}

// BOTON SEGUIR RASTRO
function botonSeguirRastro() {
  image(foto[5], width / 2 - 100 + 120, 210, 200, 100);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Seguir Rastro", width / 2 - 220 + 340, 210 + 50);
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
