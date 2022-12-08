import * as VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=>import('../views/Home.vue'),
        redirect: '/main',
        children: [
            {
                path: 'main',
                name: 'HomeMain',
                component: ()=>import('@/components/Home/HomeMain.vue'),
            },
            {
                path: '/articles',
                name: 'Articles',
                component: ()=>import('@/components/Article/AricleList.vue'),
                meta: {
                    menuname: '文章列表',
                    icon:'Collection'
                },
                
            },
            {
                path: '/new-article',
                name: 'NewArticle',
                component: ()=>import('@/components/Article/NewArticle.vue'),
                meta: {
                    menuname: '文章编写',
                    icon:'DocumentAdd'
                },
                
            },
            {
                path: '/local',
                name: 'Local',
                component: ()=>import('@/components/Article/Local.vue'),
                meta: {
                    menuname: '草稿箱',
                    icon:'DocumentDelete'
                },
                
            },
            {
                path: '/category',
                name: 'Category',
                component: ()=>import('@/components/Article/Category.vue'),
                meta: {
                    menuname: '分类管理',
                    icon:'Files'
                },
                
            },
            {
                path: '/tags',
                name: 'Tags',
                component: ()=>import('@/components/Article/Tags.vue'),
                meta: {
                    menuname: '标签管理',
                    icon:'CollectionTag'
                },
                
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