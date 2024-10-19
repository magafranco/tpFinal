//  BOTON COMENZAR
function botonComenzar() {
  stroke(0);
  fill(100, 200, 0);
  rect(width / 2 - 50, 280, 100, 50);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Comenzar", width / 2, 305);
}

//BOTON VOLVER AL INICIO
function botonVolverInicio() {
  fill(100, 200, 0);
  rect(width / 2 - 50, 280, 100, 50);
  stroke(0);
  strokeWeight(1);
  fill(50);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Volver al inicio", width / 2, 305);
}

function botonVolverInicio2() {
  fill(100, 200, 0);
  rect(width / 2 - 50, 350, 100, 50);
  stroke(0);
  strokeWeight(1);
  fill(50);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Volver al inicio", width / 2, 375);
}

function botonContinuar2() {
  fill(170, 132, 74);
  rect(width - 140, height - 70, 120, 50);
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Continuar", width - 140 + 60, height - 70 + 25);
}

// BOTON VOLVER (lago1)
function botonVolver() {
  fill(170, 132, 74);
  rect(30, height - 70, 100, 50);
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Volver", 30 + 50, height - 70 + 25);
}

// BOTON CONTINUAR (lago1)
function botonContinuar() {
  fill(170, 132, 74);
  rect(width - 140, height - 70, 120, 50);
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Seguir pista", width - 140 + 60, height - 70 + 25);
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
  text("Pelear", (width - 200) + (120 / 2), (height - 150) + (50 / 2));
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

// BOTON EXPLORAR IGLESIA
function botonExplorarIglesia() {
  image(foto[4], width / 2 - 220, 210, 200, 100);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Explorar Iglesia abandonada", width / 2 - 220 + 100, 210 + 50);
}

// BOTON SEGUIR RASTRO
function botonSeguirRastro() {
  image(foto[5], width / 2 - 100 + 120, 210, 200, 100);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Seguir Rastro", width / 2 - 220 + 340, 210 + 50);
}
//BOTON DESVIARSE!!!!(RASTRO2)
function botonDesviarse() {
  fill(142, 121, 89);
  rect(width / 2 - 230, 330, 100, 50);
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Desviarse", (width / 2 - 230) + (100 / 2), 330 + (50 / 2));
}
//BOTON SEGUIR AVANZANDO(RATRO2)
function botonSeguirA() {
  fill(142, 121, 89);
  rect(width - 220, height - 150, 150, 50);
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Seguir avanzando", (width - 200) + (110 / 2), (height - 150) + (50 / 2));
}

function botonHuir2() {
  fill(170, 132, 74);
  rect(30, height - 70, 100, 50);
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Huir", 30 + 50, height - 70 + 25);
}

function botonPelear2() {
  fill(170, 132, 74);
  rect(width - 140, height - 70, 120, 50);
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Pelear", width - 140 + 60, height - 70 + 25);
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
// BOTON ENTRAR ARBOL
function botonEntrarArbol() {
  fill(220, 140, 0);
  rect(width / 2 - 200, 340, 100, 50);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Entrar", width / 2 - 150, 365);
}

//BOTON PELEA ARBOL
function botonPelearArbol() {
  fill(36, 89, 142);
  rect(width - 200, 390, 100, 50);
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Pelear", (width - 200) + 50, (height - 150) + 85);
}


//BOTON HUIR ARBOL
function botonHuirArbol() {
  fill(36, 89, 142);
  rect(width / 2 - 230, 390, 100, 50);
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Huir", (width / 2 - 230) + (100 / 2), 330 + 85);
}


//BOTON DESVIO ARBOL
function botonDesvioArbol() {
  fill(220, 140, 0);
  rect(width / 2 + 100, 340, 100, 50);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Ir por otro lado", width / 2 + 150, 365);
}

//BOTON MUSICA

function botonMusica() {
  fill(140, 0, 180);
  rect(550, 20, 40, 40)
    image(musica, 552, 22, 36, 36);
}

//BOTON CREDITOS

function botonCreditos() {
  fill(140, 0, 180);
  rect(45, 15, 100, 50)
    fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Creditos", 95, 42);
}
function creditos() {
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Franco Magallanes Díaz", width / 2, 100);
  text("119074/2", width / 2, 120);
  text("Pilar Garayzabal", width / 2, 180);
  text("119036/5", width / 2, 200);
  text("Gravity Falls creado por Alex Hirsch", width/2, 260);
  text("Propiedad de Walt Disney Studios", width/2, 280);
}
