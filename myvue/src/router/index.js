import {createRouter,createWebHistory} from 'vue-router'
import store from '../store/index'

const routes = [
    {
        name : 'homepage',
        path : '/homepage',
        component : () => import('../components/HomePage.vue'),
        /* children :[
            {
                name : 'body',
                path : '/body',
                component : () => import('../views/Body.vue')
            },
            {
                name : 'login',
                path : '/login',
                component : () => import('../views/Login.vue')
            },
        ] */
    },
    {
        name : 'body',
        path : '/body',
        component : () => import('../views/Body.vue')
    },
    {
        name : 'login',
        path : '/login',
        component : () => import('../views/Login.vue')
    },
   
    {
        path : '/',
        redirect : '/body'
    },
    {
        name : 'register',
        path : '/register',
        component : () => import('../views/Register.vue')
    },
    {
        name : 'map',
        path : '/map',
        component : () => import('../views/Maptest.vue')
    },
    {
        name : 'myself',
        path : '/myself',
        component : () => import('../views/Myself.vue')
    },
    {
        name : 'about',
        path : '/about',
        component : () => import('../views/About.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach((to,from,next) => {
    let token = localStorage.getItem('token');
    if(token=== "null" || token === '' || token === undefined){
        //未登录
        if(to.path==='/register' || to.path==='/login'){
            next();
        }else {
            alert('请先完成登录');
            next('/login');
        }
    }else {
        next();
    }
})

export default router;