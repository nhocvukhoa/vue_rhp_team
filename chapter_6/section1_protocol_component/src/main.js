import Vue from 'vue'
import App from './App.vue'
export const eventBus = new Vue({
    methods: {
        changePhone(phone) {
            this.$emit('phoneEdited', phone);
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
})
