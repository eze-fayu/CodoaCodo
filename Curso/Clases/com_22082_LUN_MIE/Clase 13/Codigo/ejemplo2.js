/*nombre=prompt("Ingrese su nombre");
console.log("Hola",nombre);

//Operacion usando entrada

numero=parseInt(prompt("Ingrese radio:"));
sup=Math.PI * Math.pow(numero,2);
console.log("La superficie del circulo es: ",sup);
*/
//Incremento y postincremento

var numero1=10;
console.log(numero1++);//numero1=10
console.log(numero1);//11
console.log(++numero1);//numero1+1=12
console.log(--numero1);//11
console.log(numero1--);//11
console.log(numero1);//10

//Operadores de comparacion

a=25;
b="25";
c=25;

console.log(a==c);//true
console.log(a==b);//true
console.log(a===c);//contenido y tipo de dato 
console.log(a===b);//false