   
function valida_envia(){
    if (document.formulario.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.formulario.nombre.focus()
           return 0;
    }

    telefono = document.formulario.telefono.value
    telefono = validarEntero(telefono)
    document.formulario.telefono.value=telefono
    if (telefono.lengh>10){
        alert("Tiene que introducir un número telefonico válido.")
        document.formulario.telefono.focus()
        return 0;
    }

    correo = document.formulario.correo.value
    if (!correo.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ )){
        alert("Tiene que introducir un email válido.")
        document.formulario.correo.focus()
        return 0;        
    }
    
    if (document.formulario.asunto.value.length==0){
        alert("Tiene que escribir el asunto")
        document.formulario.asunto.focus()
        return 0;
    }

    if (document.formulario.mensaje.value.length==0){
        alert("Tiene que escribir el mensaje")
        document.formulario.mensaje.focus()
        return 0;
    }
  
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    // document.formulario.submit();
}
