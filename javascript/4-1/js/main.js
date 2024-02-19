var app = new Vue({
    el: '#app',
    data: {
        list: [],
        addText: '',
        searchText: ''
    },
    // watchでlistの変更を監視
    watch: {
        list: {
            handler: function() {
                // localStorageにデータを保存
                localStorage.setItem("list", JSON.stringify(this.list));
            },
            deep: true
        }
    },
    // マウントされた時にlocalStorageからデータを取得
    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
    },
    methods: {
        addToDo: function() {
            if (this.addText.trim() !== '') {
                this.list.push({
                    text: this.addText.trim(), 
                    isChecked: false,
                });
            }
            this.addText = '';
        },
        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        }
    },
    computed: {
        remainingTasks: function() {
            return this.list.filter(todo => !todo.isChecked).length;
        },
        displayedList: function() {
            if (this.searchText.trim() === '') {
                return this.list;
            } else {
                return this.list.filter(todo => todo.text.includes(this.searchText.trim()));
            }
        }
    }
});