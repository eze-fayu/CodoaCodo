
console.log(document.body.children);//nos muestra los hijos
console.log(document.body.childElementCount);//Devuelve el numero de hijos del elemento
console.log(document.childNodes);//los nodos del documento



let caja=document.createElement('div');// crea un div
let caja2=document.createElement('div');//crea otro div


caja.style.width='100px';
caja.style.height='100px';
caja.style.background='blue';
caja.style.borderRadius='9px';


caja2.style.width='100px';
caja2.style.height='100px';
caja2.style.background='red';
caja2.style.borderRadius='9px';
// document.body.appendChild(caja);//solo un nodo objeto
document.body.append(caja,caja2);//
/*
let enlaces=document.querySelector('a');//Retorna solo el primer elemento encontrado
enlaces.style.color='blue';
*/

const enlaces=[...document.querySelectorAll('a')];//Retorna todos los elementos
enlaces.map(enlaces=>{
enlaces.style.color='red';

})





