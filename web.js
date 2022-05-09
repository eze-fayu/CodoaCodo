const formulario = document.getElementById("form");


function valida_envia(){

    const userName = document.getElementById("nombre");
    const userEmail = document.getElementById("email");
    const userTel = document.getElementById("telefono");
    const userAsunto = document.getElementById("asunto");
    const userMsj = document.getElementById("mensaje");

    // console.log(userName)
    console.log(userTel)
    // console.log(userEmail)
    // console.log(userAsunto)
    // console.log(userMsj)

    // if (userName.value.length==0){
    //        alert("Tiene que escribir su nombre")
    //        userName.focus()
    //     //    return 0;
    // }

    if ( typeof userTel.value === 'undefined' || userTel.value === null || userTel.value.lengh < 10 ){
        alert("Tiene que introducir un número telefonico válido.")
        userTel.focus()
        // return 0;
    }

    // if (!userEmail.value.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ )){
    //     alert("Tiene que introducir un email válido.")
    //     userEmail.focus()
    //     // return 0;        
    // }
    
    // if (userAsunto.value.length==0){
    //     alert("Tiene que escribir el asunto")
    //     userAsunto.focus()
    //     // return 0;
    // }

    // if (userMsj.value.length==0){
    //     alert("Tiene que escribir el mensaje")
    //     userMsj.focus()
    //     // return 0;
    // }
  
    //el formulario se envia
    // alert("Muchas gracias por enviar el formulario");
    // document.formulario.submit();

}


// formulario.addEventListener('submit', valida_envia());