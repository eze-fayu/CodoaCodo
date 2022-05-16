const app = new Vue({
    el: '#app',
    data: {
        // fondo: 'bg-danger'
        fondo: 'bg-warning',
        color: false
    },
    methods: {

    }
})

// app.color= true // Cambiarlo por consola

// Creo el componente para que la etiqueta sea válida
// Siempre deberá tener un template. Ej: un navbar
// #07 Componentes básicos: https://www.youtube.com/watch?v=iBcFO5qcd44
Vue.component('prueba', {
    template: '<div><h1>Componente de prueba</h1></div>'
})

const ejemploComponente= new Vue({
    el: '#ejemploComponente',
    components: {
        'prueba': {
            template: '<div><h1>Componente de prueba</h1></div>'
        }
    }
})
