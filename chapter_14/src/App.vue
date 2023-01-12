<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-left">
                <h1 class="text-center">Vue resource</h1>
                <hr>
                <div class="form-group">
                    <input class="form-control" type="text" v-model="user.userName">
                </div>
                <div class="form-group">
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <button class="btn btn-block btn-success" type="submit" @click="submit">Submit</button>
                <br>
                <button class="btn btn-block btn-primary" @click="getAllUser">Get all user</button>
                <br>
                <ul class="list-group">
                    <li class="list-group-item"
                        v-for="user in users"
                        :key="user">{{ user.userName}} - {{ user.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    userName: '',
                    email: ''
                },
                users: []
            }
        },
        methods: {
            submit() {
                this.$http.post('https://vue-rhp-form-ff662-default-rtdb.firebaseio.com/data.json', this.user)
                    .then(response => {
                        console.log(response)
                    }, error => {
                        console.log(error);
                    });
            }    ,
            getAllUser() {
                this.$http.get('https://vue-rhp-form-ff662-default-rtdb.firebaseio.com/data.json')
                    .then(response => {
                        //console.log(response);
                        return response.json();
                    })
                    .then(data => {
                        const newArr = [];

                        for (let key in data) {
                            newArr.push(data[key]);
                        }

                        this.users = newArr;
                    });
            }
        }
    }
</script>

<style scope>
   
</style>
