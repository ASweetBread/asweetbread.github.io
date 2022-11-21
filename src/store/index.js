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
    function getlogin(data) {
        return new Promise((resolve,reject)=>{
            getuserinfo(data).then(res=>{
                const result = res.data
                if(result.status==200) {
                    useinfo.username = result.data.username
                    useinfo.token = result.data.token
                    useinfo.role = result.data.role
                    console.log(useinfo)
                    resolve(result)
                }else {
                    reject(result)
                }
                
            })
        })
        
    }

    return { useinfo,getlogin }
})