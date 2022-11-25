import { defineStore } from "pinia";
import { ref, reactive } from 'vue'
import { getuserinfo,getMenuList } from '../interface/modules/user'

export const getStore = defineStore('state',()=>{
    const isHide = ref(false)
    function changeHide(){
        isHide.value = !isHide.value
    }

    return { isHide,changeHide }
})

export const getloginStore = defineStore('state',()=>{
    const useinfo = reactive({
        "username": "",
        "token": "",
        "role": ""
    })
    function useinfoPersistence(){
        const data = JSON.parse(localStorage.getItem('useinfo'))
        useinfo.username = data.username
        useinfo.token = data.token
        useinfo.role = data.role
    }
    function getlogin(data) {
        return new Promise((resolve,reject)=>{
            getuserinfo(data).then(res=>{
                    useinfo.username = res.data.username
                    useinfo.token = res.data.token
                    useinfo.role = res.data.role
                    localStorage.setItem('useinfo', JSON.stringify(useinfo));
                    resolve(res)
            })
        })
        
    }

    return { useinfo,getlogin,useinfoPersistence }
})

export const getMenuStore = defineStore('Menu',()=>{
    const menulist = ref({})

    function getList() {
        return new Promise((resolve)=>{
            getMenuList().then(res=>{
                menulist.value = res
                localStorage.setItem('menulist',JSON.stringify(menulist))
                resolve(res)
            })
        })
    }
    return { menulist, getList }
})