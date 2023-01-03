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
                <input type="text" class="form-control mb-md-3" v-model="filterProduct">
                <div class="card">
                    <div class="card-body">
                        <ul>
                            <li v-for="product in filteredProduct" v-bind:key="product">{{ product }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: 'Hello everyone, Vue Js',
                products: ['Iphone', 'Samsung', 'Nokia', 'HTC'],
                filterProduct: '',
            }
        },
        filters: {
            toLowerCase(text) {
                return text.toLowerCase();
            }
        },
        computed: {
            filteredProduct() {
                return this.products.filter((element) => {
                    return element.match(this.filterProduct);
                });
            }
        }
    }
</script>

<style>

</style>
