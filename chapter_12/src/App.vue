<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filter and Mixins</h1>
                <p>{{ text | toUperCase | toLowerCase }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h3>Filter products</h3>
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
        <app-list></app-list>
    </div>
</template>

<script>
    import { productMixin } from './mixins/productMixin.js';
    import List from './components/List.vue';

    export default {
        data() {
            return {
                text: 'Hello everyone, Vue Js',
            }
        },
        methods: {
            addItem() {
                this.products.push('VTV');
            }
        },
        filters: {
            toLowerCase(text) {
                return text.toLowerCase();
            }
        },
        components: {
            'appList': List,
        },
        mixins: [productMixin],
        created() {
            console.log('Created from App.vue');
        }
    }
</script>

<style>

</style>
