<template>
    <div>
        <button class="btn btn-success" @click="increment">Increment</button>
        <button class="btn btn-success" @click="asyncDecrement">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            // increment () {
            //     // this.$store.state.result++;
            //     this.$store.commit('incrementOption', 50);
            // },
            // decrement () {
            //    this.$store.state.result--;
            // }
            ...mapActions(['increment', 'asyncDecrement'])
        }
    }
</script>

<style>
    
</style>
