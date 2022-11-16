import * as VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=>import('../views/Home.vue'),
        children: [

        ]
    },
    {
        path: '/login',
        name: 'login',
        component: ()=>import('../views/Login.vue')
    },
    {
        path: '/home',
        name: 'show-page',
        component: ()=>import('../views/ShowPage.vue')
    }
]

const router = VueRouter.createRouter({
    
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
  })

export default router