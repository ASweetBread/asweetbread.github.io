import { getloginStore } from '@/store/index.js'

export default function beforeEach(router) {
    const state = getloginStore()
    router.beforeEach((to, from, next) => {
        if(to.name == "login"){
            next()
        }else {
            if(state.useinfo.token==""){
                next({name: "login"})
            }else {
                next()
            }
        }
        
        
    })
}