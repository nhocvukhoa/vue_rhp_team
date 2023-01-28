<template>
    <div>
        <button class="btn btn-success" @click="increment">Increment</button>
        <button class="btn btn-success" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods: {
            increment () {
                this.$emit('updated', 1);
            },
            decrement () {
                this.$emit('updated', -1);
            }
        }
    }
</script>

<style>
    
</style>
