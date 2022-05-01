let numero = 0;
while (numero <= 12) {
  console.log(numero);
  numero = numero + 2;
}

let total = 0, cuenta = 1;
while (cuenta <= 10) {
  total += cuenta;
  cuenta += 1;
}
console.log(total);


let resultado = 1;
let contador = 0;
while (contador < 10) {
  resultado = resultado * 2;
  contador = contador + 1;
}
console.log(resultado);
// → 1024


//do while
let tuNombre;
do {
  tuNombre = prompt("Quien eres?");
} while (!tuNombre);
console.log(tuNombre);