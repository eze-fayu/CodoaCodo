const app=new Vue({
    el:"#app",
    data:{
        mensaje: "Empezando con vue"
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

  