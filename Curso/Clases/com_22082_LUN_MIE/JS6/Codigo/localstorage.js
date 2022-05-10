if (typeof(Storage)!=="undefined"){
    // Store
    localStorage.setItem("apellido","Ramos");// No existe, lo agrega. 
    localStorage.setItem("apellido","Pérez");// Existe, lo reemplaza
    localStorage.setItem("nombre","Juan");
    // Retrieve
    document.getElementById("resultado").innerHTML=localStorage.getItem("apellido");
    }else{
    document.getElementById("resultado").innerHTML="Su navegador no soporta Web Storage.";
    }
    