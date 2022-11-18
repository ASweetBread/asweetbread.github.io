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
        "token": ""
    })
    function getlogin(data) {
        return new Promise((resolve,reject)=>{
            console.log(2)
            getuserinfo(data).then(res=>{
                console.log("Store中获取的数据")
                console.log(res)
                resolve(res)
            })
        })
        
    }

    return { getlogin }
})