import Home from './components/Home'
import Error from './components/404'
import PageHeader from './components/layouts/Header.vue'

const User = resolve => {
    require.ensure(['./components/User/User'], () => {
        resolve(require('./components/User/User'))
    }, 'user');
}

const UserStart = resolve => {
    require.ensure(['./components/User/Index'], () => {
        resolve(require('./components/User/Index'))
    }, 'user');
}

const UserDetail = resolve => {
    require.ensure(['./components/User/UserDetail'], () => {
        resolve(require('./components/User/UserDetail'))
    }, 'user');
}

const UserEdit = resolve => {
    require.ensure(['./components/User/UserEdit'], () => {
        resolve(require('./components/User/UserEdit'))
    }, 'user');
}

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
