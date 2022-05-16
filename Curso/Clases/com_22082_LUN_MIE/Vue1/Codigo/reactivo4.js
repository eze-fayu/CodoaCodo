var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hola'
    },
    computed: {
      // un getter computado
      reversedMessage: function () {
        // `this` apunta a la instancia vm
        return this.message.split('').reverse().join('')
      }
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
    nuevaFruta:'',
    total:''
    
    },
    methods:{
        agregarFruta(){
        this.frutas.push({nombre:this.nuevaFruta,cantidad:5})
        }
     
    },

  computed:{
    sumarFrutas(){//Muestra sumatoria total de cantidades de frutas.
    this.total=0;
    for(fruta of this.frutas) {
    this.total+= fruta.cantidad;//acumulador
    }
    return this.total;
    }
    }
})
    