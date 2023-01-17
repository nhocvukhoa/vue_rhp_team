<template>
    <div>
        <h1>User page</h1>
        <hr>
        <button class="btn btn-success" @click="backHome">Go to home</button>
    </div>
</template>

<script> 
    export default {
        methods: {
            backHome() {
                this.$router.push('/');
            }
        }
    };
</script>

<style>
    
</style>
