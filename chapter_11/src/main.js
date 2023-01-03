import Vue from 'vue'
import App from './App.vue'

//Đây là 1 directive ở dạng global
Vue.directive('global-highlight', {
    //el: element node
    //binding: truy cập vào giá trị của directive
    bind(el, binding, vnode) {
        var delay = 0;

        if (binding.modifiers['delayed']) {
            delay = 3000;

            setTimeout(() => {
                if (binding.arg == 'background') {
                    el.style.backgroundColor = binding.value;
                } else {
                    el.style.color = binding.value;
                }
            }, delay);
        }   
    },
});

new Vue({
  el: '#app',
  render: h => h(App)
})
