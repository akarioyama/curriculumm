var app = new Vue({
    el: '#app',
    data: {
        list: [],
        addText: '',
    },
    methods: {
        addToDo: function () {
            if (this.addText !== '') {
                this.list.push({
                    text: this.addText,
                    isChecked: false,
                });
            }
            this.addText = '';
        },
        deleteBtn: function () {
            this.list = this.list.filter(function (todo) {
                return !todo.isChecked;
            });
        }
    }
});