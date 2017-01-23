var app = new Vue({
    el : '#app',
    data : {
        message : 'Hello World!'
    },
    created : function () {
        this.message = 'Change when created'
    }
})

var app1 = new Vue({
    el : '#app-1',
    data : {
        message : 'The power of V-Bind'
    }
})

var app2 = new Vue({
    el : '#app-2',
    data : {
        seen : true
    }
})

var app3 = new Vue({
    el : '#app-3',
    data : {
        todos : [
            { name : 'Learn' },
            { name : 'Vue' },
            { name : 'Simple' }
        ]
    }
})

var app4 = new Vue({
    el : '#app-4',
    data : {
        message : 'Input Handling'
    },
    methods : {
        reverseMessage : function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app5 = new Vue({
    el : '#app-5',
    data : {
        message : 'Type something!'
    }
})

Vue.component('todo-item', {
    props : ['todo'],
    template : '<li>{{todo.name}}</li> '
})

var app6 = new Vue({
    el : '#app-6',
    data : {
        groceryList : [
            { name : 'Chocolates' },
            { name : 'StrawBerrys' }
        ]
    }
})

var vm  = new Vue({
    //options
})

var myComponent = Vue.extend({
    //extension options
})

var myComponentInstance = new myComponent()

var data = { a : 1 }
var vm1 = new Vue({
    data : data
})

vm1.a === data.a // -> true

vm1.a = 2
data.a // -> 2

data.a = 3
vm1.a // ->3

var data1 = { a : 1 }
var vm2 = new Vue({
    el:'#example',
    data : data1
})

vm2.$data === data // -> true
vm2.$el === document.getElementById('example') // -> true

vm2.$watch('a', function (newVal, oldVal) {
    
})

var app7 = new Vue({
    el : '#app-7',
    data : {
        dynamic : 'Yes, I do'
    }
})

var app8 = new Vue({
    el : '#app-8',
    data : {
        condition : false
    }
})

var app9 = new Vue({
    el : '#app-9',
    data : {
        message : 'oh shit it works filters'
    },
    filters : {
        capitalize : function (value) {
            return value ? value.toString().charAt(0).toUpperCase() + value.slice(1) : ''
        }
    }
})

var app10 = new Vue({
    el : "#app-10",
    data : {
        message : 'Is computed?'
    },
    computed : {
        reversedMessage : function () {
            return this.message.split('').reverse().join('')
        },
        now: function () {
            return Date.now() // -> Dates didn't works
        }
    }
})

var app11 = new Vue({
    el: '#app-11',
    data : {
        isActive : false,
        classObject : {
            active : true,
            'text-danger' : true
        }
    }
})