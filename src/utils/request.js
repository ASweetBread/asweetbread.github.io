import { def } from "@vue/shared";
import axios from "axios";
import { Notification } from 'element-ui'

const config = {
    timeout: 10* 1000
}
const service = axios.create(config)

service.interceptors.request.use((config)=>{
    return config
},(error)=>{
    console.error('请求失败: ' + error)
    Notification.error('请求失败', error)
    return Promise.reject()
})

service.interceptors.response.use(response=>{
    return response
},error=>{
    console.error('响应失败: '+ error)
    Notification.error('请求失败', error)
    return Promise.reject()
})

const request = (config)=>{
    const defConfig = {
        method: 'post',
    }
    const finnalConfig = Object.assign(defConfig,config)

    return service(config)
}

export default request