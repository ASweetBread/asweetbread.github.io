
const account = [
    // role: 0是管理员，1是普通用户，2是特殊用户
    { username: 'admin',password: 'admin',role: '0' },
    { username: 'user01',password: '123456',role: '0' },
    { username: 'admintest',password: 'admintest',role: '0' },
]
const menulist = [
    { 
        menuname: '文章管理',
        name: 'Article',
        path: '/article',
        icon: 'Notebook',
        children: [
        { menuname: '文章列表',path: '/articles',name: 'Articles',icon:'Collection' },
        { menuname: '文章编写',path: '/new-article',name: 'NewArticle',icon:'DocumentAdd' },
        { menuname: '文章收藏',path: '/collection',name: 'Collection',icon:'DocumentDelete' },
        { menuname: '分类管理',path: '/category',name: 'Category',icon:'Files' },
        { menuname: '标签管理',path: '/tags',name: 'Tags',icon:'CollectionTag' }
    ] }
]

export const getuserinfo = (config)=>{
    /**
     *  body: "{"username":"admin","password":"admin"}"
        type: "POST"
        url: "/userinfo"
     */
    const res = JSON.parse(config.body)
    const exist = account.filter((ele,index)=>res.username===ele.username&&res.password===ele.password)
    if(exist.length==0) {
        return {
            "status": 404,
            "msg": "该用户不存在或者密码不正确"
        }
    }
    return {
        "data": {
            "username": exist[0].username,
            "token": "awd123edasdi1j241241",
            "role": exist[0].role
        },
        "status": 200,
        "msg": "请求成功"
    }
}

export const getMenuList = (config)=>{
    return menulist
}