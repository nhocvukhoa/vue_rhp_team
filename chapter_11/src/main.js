import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
    //el: element node
    //binding: truy cập vào giá trị của directive
    bind(el, binding, vnode) {
        if (binding.arg == 'background') {
            el.style.backgroundColor = binding.value;
        } else {
            el.style.color = binding.value;
        }
    },
});

new Vue({
  el: '#app',
  render: h => h(App)
})
