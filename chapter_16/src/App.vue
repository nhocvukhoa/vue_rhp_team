<template>
    <div class="container">
       <h1>VueX section</h1>
       <hr>
       <app-counter @updated="result = result + $event"></app-counter>
       <br>
       <app-result :result="result"></app-result>
    </div>
</template>

<script>
    import AppCounter from './components/Counter.vue'
    import AppResult from './components/Result.vue'

    export default {
        data () {
            return {
                result: 0
            }
        },
        components: {
            AppResult,
            AppCounter,
        }
    }
</script>

<style>

</style>
