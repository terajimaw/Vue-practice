var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    methods:{
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }

})
