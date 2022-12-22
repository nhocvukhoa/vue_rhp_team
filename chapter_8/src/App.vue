<template>
    <div class="container">
        <app-items-layout :items="items"></app-items-layout>
    </div>
</template>

<script>
    import ItemsLayout from './components/ItemsLayout.vue'
    export default {
        data: function() {
            return {
                items: [
                    'Câu hỏi 1',
                    'Câu hỏi 2'
                ],
                maxItems: 10
            }
        },
        components: {
            appItemsLayout: ItemsLayout
        }
    }
</script>

<style>

</style>
