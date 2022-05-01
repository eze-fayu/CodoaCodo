//usa =>(arrow) en vez de la palabra function 
const potencia = (base, exponente) => {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
      resultado *= base;
    }
    return resultado;
  };

  console.log(potencia(10,2));