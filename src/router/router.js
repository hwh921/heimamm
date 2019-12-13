import Vue from 'vue'

import VueRouter from 'vue-router'
import login from '../views/login/login'

Vue.use(VueRouter)

const routes = [
    {
        path:"/login",
        comments:login
    }
]

const router = new VueRouter({
    routes
})

export default router