import Vue from 'vue'
import App from './App.vue'

Vue.filter('toUperCase', function(value) {
    return value.toUpperCase();
});

Vue.mixin({
    created() {
        console.log('Created from global mixin');
    }
});

new Vue({
  el: '#app',
  render: h => h(App),
  created() {
      console.log('Created Vue');
  }
})
