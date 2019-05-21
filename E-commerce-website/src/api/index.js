// 与后台交互模块

import ajax from './ajax'

export const categoryData = () => ajax('/category')
export const homeData = () => ajax('/home')
export const categoryListData = () => ajax('/categorylist')

// http://m.you.163.com/topic/v1/find/recManual.json
