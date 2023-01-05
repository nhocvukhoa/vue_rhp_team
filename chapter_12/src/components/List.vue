<template>
    <div class="row">
        <div class="col-xs-12 col-md-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h3>Filter products from by mixin</h3>
            <button class="btn btn-block btn-success" @click.prevent="addItem">Add new item</button>
            <input type="text" class="form-control mb-md-3 mt-md-3" v-model="filterProduct">
            <div class="card">
                <div class="card-body">
                    <ul>
                        <li v-for="product in filteredProduct" v-bind:key="product">{{ product }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { productMixin } from '../mixins/productMixin.js'; 

    export default {
        mixins: [productMixin],
        created() {
                console.log('Created from List.vue')
        },
        methods: {
            addItem() {
                this.products.push('VTC');
            } 
        }
    }
</script>

<style>

</style>
