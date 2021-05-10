let vue = new Vue({
    el: '#list',
    data: {
        todo: '',
        todos: [''],

    },
    methods: {
        stodo() {
            this.todos.push(this.todo)
        }

    }
})