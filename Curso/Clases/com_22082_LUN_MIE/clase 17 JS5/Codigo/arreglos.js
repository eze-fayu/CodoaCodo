

const vector= [1,3,5,8];//0, 1, 2, 3
console.log(typeof vector);
console.log(vector.length);
console.log(vector[2]);


/*
const vectorVacio=[];//Vector vacío
console.log(vectorVacio);

const vectorDos=new Array("a","b","c");
console.log(typeof vectorDos);
const vectorTres = new Array(1,5,10,15,20);
console.log(vectorTres);






const frutas=["Manzana","Banana","Mandarina","kiwi"];
console.log(frutas.push("Pera"));//añade elemento al final del arreglo
//console.log(frutas);//cantidad de elementos

console.log(frutas.length);

for(let i=0;i < frutas.length;i++){
    console.log(i,":",frutas[i]);
    }

let primero = frutas[0]
    // Manzana
    
let ultimo = frutas[frutas.length - 1]
    // Kiwi



console.log(frutas.push("Pera"));//añade elemento al final del arreglo
console.log(frutas);//cantidad de elementos

let numero=new Array("3");//
console.log(numero);


let valor=new Array(5);

//0,1,2 vacias
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
*/
/*
const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nuevoArr = arr.filter(
    (e) => e[0] == "P");
console.log(nuevoArr);

 // Devuelve ['Pablo', 'Pedro', 'Pancracio']

*/
/*

//Recorrer un arreglo 
 const arr = [1,2,5,8];
 arr.forEach(
      x=> console.log(x*x)
      );
*/
 //sort
 const array = ["Alberto", "Ana", "Mauricio", "Bernardo", "Zoe"];

 // Ojo, cada línea está modificando el array original
 console.log(array.sort()); // ['Alberto', 'Ana', 'Bernardo', 'Mauricio', 'Zoe']
 //console.log(array.reverse()); // ['Zoe', 'Mauricio', 'Bernardo', 'Ana', 'Alberto']
 

 
const array2 = [1, 8, 2, 32, 9, 7, 4];

console.log(array2.sort()); // Devuelve [1, 2, 32, 4, 7, 8, 9], que NO es el resultado deseado


//solucion

const array3 = [1, 8, 2, 32, 9, 7, 4];

// Función de comparación para ordenación natural
const fc = function (a, b) {
   
  return a - b;
};

console.log(array3.sort(fc)); // Devuelve [1, 2, 4, 7, 8, 9, 32], que SÍ es el resultado deseado


const array5 = ["a", "b", "c"];

array5.join("->"); // Devuelve 'a->b->c'
array5.join("."); // Devuelve 'a.b.c'
"a.b.c".split("."); // Devuelve ['a', 'b', 'c']
"5.4.3.2.1".split(".");


