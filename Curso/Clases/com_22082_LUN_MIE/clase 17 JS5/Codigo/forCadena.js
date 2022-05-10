let cadNueva="Esto es un una cadena";
let textoNuevo=" ";
for(let x=0;x<cadNueva.length;x++){
    textoNuevo+=cadNueva[x]  + " ";
    console.log(textoNuevo);
}
textoNuevo=textoNuevo.trim();
alert(textoNuevo);