import { defineStore } from "pinia";
import { ref } from 'vue'

export const getStore = defineStore('state',()=>{
    let isHide = ref(false)
    function changeHide(){
        isHide = !isHide
    }

    return { isHide,changeHide }
})