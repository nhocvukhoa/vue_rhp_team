import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://vue-rhp-form-ff662-default-rtdb.firebaseio.com/data.json';

Vue.http.interceptors.push((request, next) => {
    console.log(request);

    if (request.method == 'POST') {
        request.method = 'PUT';
    }

    next();
});

new Vue({
  el: '#app',
  render: h => h(App),
  created() {
      console.log('Created Vue');
  }
})
