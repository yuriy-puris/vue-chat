import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/views/Login'
import PrivatChat from '@/components/views/PrivatChat'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'PrivatChat',
            component: PrivatChat
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})

export default router