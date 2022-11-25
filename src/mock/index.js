import Mock from 'mockjs'

import { getuserinfo,getMenuList } from './modules/user'

Mock.mock('/userinfo','post',getuserinfo)
Mock.mock('/menulist','get',getMenuList)