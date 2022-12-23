<template>
    <div class="container">
        <app-new-item @itemAdded="addItem"></app-new-item>
        <app-items-layout :items="items"></app-items-layout>
    </div>
</template>

<script>
    import ItemsLayout from './components/ItemsLayout.vue';
    import NewItem from './components/NewItem.vue';

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
            appItemsLayout: ItemsLayout,
            appNewItem: NewItem
        },
        methods: {
            addItem(item) {
                this.items.push(item);
            }
        }
    }
</script>

<style>

</style>
