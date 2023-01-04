export const productMixin = {
    data() {
        return {
            products: ['Iphone', 'Samsung', 'Nokia', 'HTC', 'Oppo'],
            filterProduct: '',
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
