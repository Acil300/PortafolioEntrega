"use strict";
//nav
let button = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;
button.addEventListener("click", function () {
  if (contador === 0) {
    enlaces.className = "enlaces dos";
    contador++;
  } else {
    enlaces.classList.remove("dos");
    enlaces.className = "enlaces uno";
    contador = 0;
  }
});
//scroll skills
const servibox = document.getElementById("servicebox")

