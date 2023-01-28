<template>
    <div class="container">
        <h1>VueX section</h1>
        <hr>
        <app-result></app-result>
        <hr>
        <app-other></app-other>
        <br>
        <app-counter></app-counter>
    </div>
</template>

<script>
    import AppCounter from './components/Counter.vue'
    import AppResult from './components/Result.vue'
    import AppOther from './components/Other.vue'

    export default {
        components: {
            AppResult,
            AppCounter,
            AppOther
        }
    }
</script>

<style>

</style>
