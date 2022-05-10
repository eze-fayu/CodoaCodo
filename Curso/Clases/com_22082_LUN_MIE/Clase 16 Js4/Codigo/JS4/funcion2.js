var numeroMaximo = function (valor1, valor2){
    if(valor1 > valor2) {
    return valor1;
    }
    return valor2;
    }
    var v1 = parseInt(prompt("Ingrese un numero entero"));
    var v2 = parseInt(prompt("Ingrese otro numero entero"));
    console.log("El numero maximo es:",numeroMaximo(v1,v2))