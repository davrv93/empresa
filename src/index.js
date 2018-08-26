var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        title: 'Lista de departamentos',
        departamentos: [],
        instance: {}
    },
    methods: {
        init: function () {
            this.get();

        },
        get: function () {
            var self = this;
            this.$http.get('http://localhost:8000/api/rrhh/departamento/').then(function (response) {
                console.log(response.body);
                this.departamentos = response.body;
            })
        },
        _create: function () {
            var params = Object.assign({}, this.instance);
            this.$http.post('http://localhost:8000/api/rrhh/departamento/', params).then(function (response) {
                this.get();
                $("#myModal").modal('hide');
            })

        },
        edit: function (item) {
            this.instance = Object.assign({}, item);
            $("#myModal").modal();
        },
        _delete: function (item) {
            this.$http.delete('http://localhost:8000/api/rrhh/departamento/' + item.id + '/').then(function (response) {
                this.get();
            })

        },
        save: function (item) {
            var params = {
                id: item.id,
                nombre: item.nombre
            };
            this.$http.put('http://localhost:8000/api/rrhh/departamento/' + item.id + '/', params).then(function (response) {
                this.instance = {};
                this.get();
                $("#myModal").modal('hide');

            })

        }
    },
    beforeMount() {
        this.init()
    }
})