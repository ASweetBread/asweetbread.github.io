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
    if(response.status==200){
        return response.data
    }else {
        if(response.data.code=40001){
            const message = {
                msg: '您已经推出登录或者token过期'
            }
            console.warn(message.msg)
            return message
        }else {
            const message = {
                msg: '响应时发生未知错误消息未能正确返回'
            }
            console.error(message.msg)
            return message
        }
        
    }
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