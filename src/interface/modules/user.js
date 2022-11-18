import request from "../request";

export const getuserinfo = (params)=>{
    console.log(3)
    return request({
        url: '/userinfo',
        method: 'post',
        data: params
    })
}


