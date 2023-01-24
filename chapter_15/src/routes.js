import Home from './components/Home'
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
        { path: ':id', name: 'user_detail', component: UserDetail },
        { path: ':id/edit', name: 'user_edit', component: UserEdit },
    ] },
]
