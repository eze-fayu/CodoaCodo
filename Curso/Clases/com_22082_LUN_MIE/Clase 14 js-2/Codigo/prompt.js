/*var nombre=prompt("Ingrese su nombre : ");
console.log("Hola", nombre);


var radio=parseInt(prompt("Ingrese el radio del circulo : "));
sup=Math.PI * Math.pow(radio,2);
console.log("Superficie del circulo es: " , sup);
*/

//pre y post incremento

var x=0;
console.log(x);

var a=10;


 console.log(a++);// a + 1 despues
 console.log(a)//11

 console.log(++a);// a + 1 ahora
//12
 console.log(--a);//11
 console.log(a--);//11
 console.log(a);//10

 //Operadores de comparacion
 x=10;
 y=20;
 m="20";


 console.log(y === m);

//if

var nota=5;
console.log("nota es ", nota);

if(nota > 5){
    console.log("Aprobado");
}

//if else 
var nota2=3;
console.log("nota es ", nota);

if(nota2 >= 5){
    console.log("Aprobado");
}
else{
    console.log("Desaprobado");
}