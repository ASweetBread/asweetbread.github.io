import { getloginStore } from '@/store/index.js'

export default function beforeEach(router) {
    const state = getloginStore()
    router.beforeEach((to, from, next) => {
        if(to.name == "login"){
            next()
        }else {
            if(localStorage.getItem('useinfo')==""){
                next({name: "login"})
            }else {
                localStorage.getItem('useinfo')&&state.useinfo==""?state.useinfoPersistence(): ""
                next()
            }
        }
        
        
    })
}