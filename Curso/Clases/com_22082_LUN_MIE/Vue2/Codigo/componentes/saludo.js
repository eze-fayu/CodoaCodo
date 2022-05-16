Vue.component('saludo', {
    // template: "<h1> Hola (estático) </h1>"
    // template: "<h1> {{msj}} </h1>",
    template: //html 
        `
        <div>
            <h1> {{msj}} </h1>
            <h2> {{titulo}} </h2>
        </div>
    `,
    data() {
        return {
            msj: 'Hola (dinámica  y como componente)',
            titulo: "Título (dinámico)"
        }
    }
})