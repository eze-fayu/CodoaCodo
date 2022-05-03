//if

let elNumero = Number(prompt("Elige un numero"));
if (!Number.isNaN(elNumero)) {
  console.log("Tu número es la raiz cuadrada de " +
              elNumero * elNumero);
}
//if else

let elNumero2 = Number(prompt("Elige un numero"));
if (!Number.isNaN(elNumero2)) {
  console.log("Tu número es la raiz cuadrada de " +
              elNumero2 * elNumero2);
} else {
  console.log("Ey. Por qué no me diste un número?");
}

//if else multiple

let numero = Number(prompt("Elige un numero"));

if (numero < 10) {
  console.log("Pequeño");
} else if (numero < 100) {
  console.log("Mediano");
} else {
  console.log("Grande");
}