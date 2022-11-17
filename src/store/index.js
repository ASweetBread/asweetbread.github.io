import { defineStore } from "pinia";
import { ref } from 'vue'

export const getStore = defineStore('state',()=>{
    const isHide = ref(false)
    function changeHide(){
        isHide.value = !isHide.value
    }

    return { isHide,changeHide }
})