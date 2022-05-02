


let frutas=["Manzana","Banana","Mandarina","kiwi"];
console.log(frutas.length);
for(let i=0;i <= frutas.length;i++){
    console.log(i,":",frutas[i]);
    }

let primero = frutas[0]
    // Manzana
    
let ultimo = frutas[frutas.length - 1]
    // Kiwi



console.log(frutas.push("Pera"));//añade elemento al final del arreglo
console.log(frutas.length);//cantidad de elementos

let numero=new Array("3");//
console.log(numero);


let valor=new Array(5);
valor[3]=55;
valor[5]=80;
console.log(valor);





console.log(frutas[1]);
frutas.pop();//elimina el ultimo elemento del array
console.log(frutas);
frutas.shift();//Elimina y devuelve el primer elemento 
console.log(frutas);


let frutas2=["Manzana","Banana",1,true];
console.log(frutas2);

/*
const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nuevoArr = arr.filter((e) => e[0] == "P");
console.log(nuevoArr);
 // Devuelve ['Pablo', 'Pedro', 'Pancracio']

*/


//Recorrer un arreglo 
 const arr = ["a", "b", "c", "d"];
 arr.forEach((x) => console.log(x));
 
 //sort
 const array = ["Alberto", "Ana", "Mauricio", "Bernardo", "Zoe"];

 // Ojo, cada línea está modificando el array original
 array.sort(); // ['Alberto', 'Ana', 'Bernardo', 'Mauricio', 'Zoe']
 array.reverse(); // ['Zoe', 'Mauricio', 'Bernardo', 'Ana', 'Alberto']
 

 
const array2 = [1, 8, 2, 32, 9, 7, 4];

array2.sort(); // Devuelve [1, 2, 32, 4, 7, 8, 9], que NO es el resultado deseado


//solucion

const array3 = [1, 8, 2, 32, 9, 7, 4];

// Función de comparación para ordenación natural
const fc = function (a, b) {
  return a - b;
};

array3.sort(fc); // Devuelve [1, 2, 4, 7, 8, 9, 32], que SÍ es el resultado deseado

 let texto1 = '¡Hola a todos!';
 console.log(typeof texto1);
 console.log(texto1.length);
 console.log(texto1.charAt(2));
 //console.log(texto1.length);

 let texto4 = new String('¡Hola!');
console.log(typeof texto4);
console.log(texto4.length);
 console.log(texto4.charAt(3));






