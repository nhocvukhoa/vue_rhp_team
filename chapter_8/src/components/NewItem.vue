<template>
   <div class="row">
        <app-items v-for="item in items" v-bind:data="item" v-bind:key="item">{{ item }}</app-items>
   </div>
</template>

<script>
    import Items from './ItemsLayout.vue';

    export default {
        props: ['items'],
        components: {
            'appItems': Items
        }
    }
</script>

<style scoped>

</style>
