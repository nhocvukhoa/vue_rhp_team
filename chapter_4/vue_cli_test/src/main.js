import Vue from 'vue'
import Contact from './Contact.vue'
import App from './App.vue'

//Tạo component global
Vue.component('contact-component', Contact);

new Vue({
    el: '#app',
    render: h => h(App)
})
