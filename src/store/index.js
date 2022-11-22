import { defineStore } from "pinia";
import { ref, reactive } from 'vue'
import { getuserinfo } from '../interface/modules/user'

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
                const result = res.data
                if(result.status==200) {
                    useinfo.username = result.data.username
                    useinfo.token = result.data.token
                    useinfo.role = result.data.role
                    localStorage.setItem('useinfo', JSON.stringify(useinfo));
                    resolve(result)
                }else {
                    reject(result)
                }
                
            })
        })
        
    }

    return { useinfo,getlogin,useinfoPersistence }
})

export const getMenuStore = defineStore('state',()=>{
    const menulist = ref({})

    function getMenuList() {
        return new Promise((resolve,reject)=>{
            
        })
    }
})