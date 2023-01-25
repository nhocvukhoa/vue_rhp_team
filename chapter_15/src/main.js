import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes }  from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    // chống lại load trang khi url thay đổi
    mode: 'history',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        //Trang nào ko có hash thì ko nhảy
        if (savedPosition) {
            return savedPosition;
        } 
        //Trang nào có hash thì nhảy tới hash đó
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    },
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
})
