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