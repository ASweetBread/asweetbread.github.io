import * as VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=>import('../views/Home.vue'),
        children: [
            {
                path: '/',
                name: 'HomeMain',
                component: ()=>import('@/components/Home/HomeMain.vue')
            },
            {
                path: '/articles',
                name: 'Articles',
                component: ()=>import('@/components/Article/AricleList.vue')
            },
            {
                path: '/new-article',
                name: 'NewArticle',
                component: ()=>import('@/components/Article/NewArticle.vue')
            },
            {
                path: '/local',
                name: 'Local',
                component: ()=>import('@/components/Article/Local.vue')
            },
            {
                path: '/category',
                name: 'Category',
                component: ()=>import('@/components/Article/Category.vue')
            },
            {
                path: '/tags',
                name: 'Tags',
                component: ()=>import('@/components/Article/Tags.vue')
            }
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