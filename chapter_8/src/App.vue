<template>
    <div class="container">
        <app-new-item @itemAdded="addItem"></app-new-item>
        <app-items-layout :items="items" @itemRemoved="removeItem"></app-items-layout>
        <app-infor></app-infor>
    </div>
</template>

<script>
    import ItemsLayout from './components/ItemsLayout.vue';
    import NewItem from './components/NewItem.vue';
    import Infor from './components/Infor.vue';

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
            appNewItem: NewItem,
            appInfor: Infor
        },
        methods: {
            addItem(item) {
                this.items.push(item);
            },
            removeItem(index) {
                this.items.splice(index, 1);
            }
        }
    }
</script>

<style>

</style>
