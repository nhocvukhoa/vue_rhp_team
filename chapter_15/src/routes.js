import Home from './components/Home'
import User from './components/User/User'
import UserStart from './components/User/Index'
import UserDetail from './components/User/UserDetail'
import UserEdit from './components/User/UserEdit'

export const routes = [
    { path: '/', name: 'homePage', component: Home },
    { path: '/user', name: 'userPage', component: User, children: [
        { path: '', name: 'index', component: UserStart },
        { path: ':id', name: 'userDetail', component: UserDetail },
        { path: ':id/edit', name: 'userEdit', component: UserEdit },
    ] },
]
