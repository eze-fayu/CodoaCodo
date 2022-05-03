const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("funciona");
});


/*


const formulario = document.getElementById("formulario");
const userName = document.getElementById("nombre");
const userEmail = document.getElementById("email");
const usertel = document.getElementById("telefono");
const userasunto = document.getElementById("asunto");
const usermsj = document.getElementById("mensaje");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("funciona");

    console.log(userName.value);
    console.log(userEmail.value);
});





function valida_envia(){


    // console.log(document.getElementsByName("nombre").value)
    
    if (userName.value.length==0){
           alert("Tiene que escribir su nombre")
           document.formulario.nombre.focus()
           return 0;
    }

    if (usertel.lengh>10){
        alert("Tiene que introducir un número telefonico válido.")
        usertel.focus()
        return 0;
    }

    if (!userEmail.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ )){
        alert("Tiene que introducir un email válido.")
        userEmail.focus()
        return 0;        
    }
    
    if (userasunto.value.length==0){
        alert("Tiene que escribir el asunto")
        userasunto.focus()
        return 0;
    }

    if (usermsj.value.length==0){
        alert("Tiene que escribir el mensaje")
        usermsj.focus()
        return 0;
    }
  
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    // document.formulario.submit();

}


formulario.addEventListener('submit', valida_envia());

*/