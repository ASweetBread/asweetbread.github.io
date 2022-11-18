import Mock from 'mockjs'

import { getuserinfo } from './modules/user'

Mock.mock('/userinfo','post',getuserinfo)