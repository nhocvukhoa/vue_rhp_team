<template>
    <div>
        <button class="btn btn-success" @click="increment">Increment</button>
        <button class="btn btn-success" @click="asyncDecrement">Decrement</button>
        <hr>
        <!-- Cách 1: -->
        <!-- <input type="text" :value="value" @input="updateValue"> -->

        <!-- Cách 2: -->
        <input type="text" v-model="value">
        <p>Test text model: {{ value  }}</p>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        computed: {
            // //value() {
            //     Cách 1
            //     return this.$store.getters.value;

            // }

            //Cách 2
            value: {
                get() {
                    return this.$store.getters.value;
                },
                set(value) {
                    this.$store.dispatch('updateValue', value);
                }
            }
        },
        methods: {
            // increment () {
            //     // this.$store.state.result++;
            //     this.$store.commit('incrementOption', 50);
            // },
            // decrement () {
            //    this.$store.state.result--;
            // }
            ...mapActions(['increment', 'asyncDecrement']),
            //Cách 1: v-model
            // updateValue(event) {
            //     //dispath để kích hoạt action đã gọi trong store
            //     return this.$store.dispatch('updateValue', event.target.value);
            // }
        }
    }
</script>

<style>
    
</style>
