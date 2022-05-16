const app=new Vue({
    el:"#app",
    data:{
        mensaje:"Comenzando con vue"
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Usted cargó esta página el ' + new Date().toLocaleString()
    }
  })

  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: false
    }
  })
  var ejemplo_vIf_vFor = new Vue({
    el: '#example-1',
    data: {
    titulo: "Ejemplo v-if y v-for",
    frutas: [
    {nombre:"naranja", cantidad: 10},
    {nombre:"banana", cantidad: 0},
    {nombre:"pera", cantidad: 3}
    ] ,
    nuevaFruta:''
    },
    methods:{
        agregarFruta(){
        this.frutas.push({nombre:this.nuevaFruta,cantidad:0})
        }
     
    }

        
        
   })


   var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hola Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hola Vue!'
    }
  })


  
  