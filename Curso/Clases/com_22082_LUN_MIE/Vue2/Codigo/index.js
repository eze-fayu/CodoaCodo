var app = new Vue({
    el: '#app',
    data: {
        mensaje: "Hola Mundo!"
    }
})
// En el archivo index.js se crea un nuevo objeto Vue, con new Vue() y dentro de los paréntesis, un objeto.
// La propiedad el:'#app' vincula el nuevo objeto Vue al elemento HTML con id = "app".

// Los datos y el DOM ahora están vinculados, y todo ahora es reactivo. Si  cambio el valor de app.message a un valor diferente. Debería ver que el ejemplo se ha renderizado con el nuevo valor que acaba de ingresar.
// app.mensaje= "Hola Ramiro!"

var app2 = new Vue({
    el: '#app-2',
    data: {
        mensaje: 'Usted cargó esta página...'
    }
})
// app2.mensaje = 'Usted cargó esta página el ' + new Date().toLocaleString();
