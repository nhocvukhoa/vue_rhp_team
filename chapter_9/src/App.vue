<template>
    <div class="container">
        <app-header :itemCount="items.length" :maxItem="maxItem"></app-header>
        <app-new-item :items="items" @itemAdded="addItem"></app-new-item>
        <app-items-layout :items="items" @itemRemoved="removeItem"></app-items-layout>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import NewItem from './components/NewItem.vue';
    import ItemsLayout from './components/ItemsLayout.vue';

    export default {
        data: function() {
            return {
                items: ['Câu hỏi 1', 'Câu hỏi 2'],
                maxItem: 10
            }
        },
        components: {
            'appHeader': Header,
            'appNewItem': NewItem,
            'appItemsLayout': ItemsLayout,
        },
        methods: {
            addItem(item) {
                if (this.items.length >= this.maxItem) {
                    return alert('Đã quá số lượng, mời xóa bớt!');
                }

                this.items.push(item);
                console.log(this.items.length);
            },
            removeItem(index) {
                this.items.splice(index, 1);
                console.log('Đã xóa câu hỏi!')
            }
           
        }
    }
</script>

<style>

</style>
