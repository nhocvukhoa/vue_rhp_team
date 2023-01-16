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
                <hr>
                <input type="text" class="form-control" v-model="node">
                <br>
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
                users: [],
                resource: {},
                node: 'data'
            }
        },
        methods: {
            submit() {
                //C1:
                // this.$http.post('', this.user)
                //     .then(response => {
                //         console.log(response)
                //     }, error => {
                //         console.log(error);
                //     });

                //C2:
                //this.resource.save({}, this.user)

                //C3:
                this.resource.createItem(this.user);
            },
            getAllUser() {
                // this.$http.get('')
                //     .then(response => {
                //         //console.log(response);
                //         return response.json();
                //     })
                //     .then(data => {
                //         const newArr = [];

                //         for (let key in data) {
                //             newArr.push(data[key]);
                //         }

                //         this.users = newArr;
                //     });
                this.resource.getNodeData({ node: this.node })
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
            },
        },
        created() {
            const customActions= {
                createItem: {
                    method: 'POST',
                    url: 'user.json'
                },
                getNodeData: {
                    method: 'GET'
                }
            }

            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style scope>
   
</style>
