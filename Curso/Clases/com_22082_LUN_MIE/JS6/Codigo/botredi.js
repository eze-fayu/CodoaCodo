

const boton=document.querySelector('button');//Retorna el primer elemento que concuerda con el grupo de selectores
boton.addEventListener('click',()=>{//Escucha el evento que registramos
   window.open('https://www.google.com');//abre una ventana para mostrar una URL _blank
    // window.location.href='https://www.google.com';//ubicacion  actual del documento
})