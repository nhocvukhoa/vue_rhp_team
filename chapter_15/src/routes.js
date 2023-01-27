import Home from './components/Home'
import Error from './components/404'
import PageHeader from './components/layouts/Header.vue'
import User from './components/User/User'
import UserStart from './components/User/Index'
import UserDetail from './components/User/UserDetail'
import UserEdit from './components/User/UserEdit'

export const routes = [
    { path: '/', name: 'home_page', components: {
        default: Home,
        'page-header': PageHeader
    }},
    { path: '/user', name: 'user_page', component: User, children: [
        { path: '', name: 'user_index', component: UserStart },
        { path: ':id', name: 'user_detail', component: UserDetail, beforeEnter: (to, from, next) => {
            console.log('Action route guards');
            next();
        } },
        { path: ':id/edit', name: 'user_edit', component: UserEdit },
    ] },
    { path: '/auth-redirect', redirect: { name: 'home_page' }},
    //Tất cả những link ko đúng đều sẽ chuyển về trang 404
    { path: '/404', name: 'error_page', component: Error },
    { path: '*', redirect: '/404' }
]
