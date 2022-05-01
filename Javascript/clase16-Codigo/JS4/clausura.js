function iniciar() {
    var nombre = "Codo a Codo"; // La variable nombre es una variable local creada por iniciar. 
   function mostrarNombre() { // La función mostrarNombre es una función interna, una clausura. 
    alert(nombre);// Usa una variable declarada en la función externa. 
    }
    mostrarNombre();
    }
    iniciar();
    



// Clausura: Función incr()
const incr = (function () {
  let num = 0;
  return function () {
    num++;
    return num;
  };
})();

typeof incr; // 'function'
incr(); // 1
incr(); // 2
incr(); // 3