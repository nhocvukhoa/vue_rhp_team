<template>
    <div>
        <button class="btn btn-success" @click="increment">Increment</button>
        <button class="btn btn-success" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        methods: {
            increment () {
                // this.$store.state.result++;
                this.$store.commit('incrementOption', 50);
            },
            // decrement () {
            //    this.$store.state.result--;
            // }
            ...mapMutations(['decrement'])
        }
    }
</script>

<style>
    
</style>
