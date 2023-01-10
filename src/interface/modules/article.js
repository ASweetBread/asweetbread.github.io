import request from "../request";

export const tagsOptions = (params)=>{
    return request({
        url: '/tagsoptions',
        method: 'get',
        data: params
    })
}

export const categoryOptions = (params)=>{
    return request({
        url: '/categoryoptions',
        method: 'get',
        data: params
    })
}