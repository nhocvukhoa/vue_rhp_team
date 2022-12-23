<template>
   <div class="row">
        <app-items v-for="(item, index) in items" v-bind:data="item" v-bind:key="item" 
            @click.native="removeItem(index)">{{ item }}</app-items>
   </div>
</template>

<script>
    import Items from './Items.vue';

    export default {
        props: ['items'],
        components: {
            'appItems': Items
        },
        methods: {
            removeItem(index) {
                this.$emit('itemRemoved', index);
            }
        }
    }
</script>

<style scoped>

</style>
