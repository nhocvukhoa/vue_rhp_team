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
                    }
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
            }    
        }
    }
</script>

<style scope>
   
</style>
