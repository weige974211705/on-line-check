import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import Welcome from "../views/Welcome";


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/welcome',
        children: [
            {path: '/welcome', component: Welcome}
        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
