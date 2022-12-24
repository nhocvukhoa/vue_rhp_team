<template>
    <div class="container">
        <app-header :itemCount="items.length" :maxItems="maxItems"></app-header>
        <app-new-item @itemAdded="addItem" :items="items"></app-new-item>
        <app-items-layout :items="items" @itemRemoved="removeItem"></app-items-layout>
        <app-infor></app-infor>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
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
            appHeader: Header,
            appItemsLayout: ItemsLayout,
            appNewItem: NewItem,
            appInfor: Infor
        },
        methods: {
            addItem(item) {
                if (this.items.length >= this.maxItems) {
                    return alert('Please remove item');
                }

                this.items.push(item);
            },
            removeItem(index) {
                //splice(index start, deleteCount)
                this.items.splice(index, 1);
            }
        }
    }
</script>

<style>

</style>
