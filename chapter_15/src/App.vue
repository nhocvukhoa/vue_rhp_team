<template>
    <div>
        <header-page></header-page>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './components/layouts/Header.vue'

    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        components: {
            'headerPage': Header
        }
    }
</script>

<style>
   
</style>
