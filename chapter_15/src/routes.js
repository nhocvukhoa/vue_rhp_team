import Home from './components/Home'
import User from './components/User/User'
import UserDetail from './components/User/UserDetail'

export const routes = [
    { path: '/', name: 'homePage', component: Home },
    { path: '/user', name: 'userPage', component: User },
    { path: '/user/:id', name: 'userDetailPage', component: UserDetail },
]
