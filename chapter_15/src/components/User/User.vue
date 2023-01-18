<template>
    <div>
        <h1>User page</h1>
        <hr>
        <button class="btn btn-success" @click="backHome">Go to home</button>
        <button class="btn btn-danger" @click="goAdminDetail">Go to Admin profile</button>
        <button class="btn btn-danger" @click="goUserDetail">Go to Admin profile</button>
    </div>
</template>

<script> 
    export default {
        methods: {
            backHome() {
                this.$router.push('/');
            },
            goAdminDetail() {
                this.$router.push('/user/10');
            },
            goUserDetail() {
                this.$router.push('/user/100');
            }
        },
    };
</script>

<style>
    
</style>
