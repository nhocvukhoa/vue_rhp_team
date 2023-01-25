<template>
    <div>
        <h1>User Detail</h1>
        <p>ID User: {{ id }}</p>
        <hr>
        <router-link tag="button"
            class="btn btn-warning"
            :to="link">Edit user</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                link : {
                    name: 'user_edit',
                    params: { 
                        id: this.$route.params.id
                    },
                    query: {
                        locate: 'vi',
                        browser: 'chrome'
                    },
                    hash: '#react'
                }
            }
        },
        watch: {
            '$route'(to, from) {
                this.id = to.params.id;
            }
        }
    }
</script>

<style>
    
</style>
