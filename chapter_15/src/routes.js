import Home from './components/Home'
import User from './components/User/User'

export const routes = [
    { path: '/', name: 'homePage', component: Home },
    { path: '/user', name: 'userPage', component: User },
]
