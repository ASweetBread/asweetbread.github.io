import request from "../request";

export const getuserinfo = (params)=>{
    return request({
        url: '/userinfo',
        method: 'post',
        data: params
    })
}

export const getMenuList = (params)=>{
    return request({
        url: '/menulist',
        method: 'get',
        data: params
    })
}