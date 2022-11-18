import { def } from "@vue/shared";
import axios from "axios";


const config = {
    baseUrl: 'localhost',
    timeout: 10* 1000
}
const service = axios.create(config)

service.interceptors.request.use((config)=>{
    return config
},(error)=>{
    console.error('请求失败: ' + error)
    return Promise.reject(error)
})

service.interceptors.response.use(response=>{
    return response
},error=>{
    console.error('响应失败: '+ error)
    return Promise.reject(error)
})

const request = (config)=>{
    const defConfig = {
        method: 'post',
    }
    const finnalConfig = Object.assign(defConfig,config)

    return service(config)
}

export default request