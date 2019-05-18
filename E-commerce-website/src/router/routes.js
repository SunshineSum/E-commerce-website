// 所有路由配置对象的数组

// 引入路由
import Home from '../pages/Home/Home'
import ShopCart from '../pages/ShopCart/ShopCart'
import Search from '../pages/Search/Search'
import Personal from '../pages/Personal/Personal'
import Classify from '../pages/Classify/Classify'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/classify',
    component: Classify,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/personal',
    component: Personal
  },

  // 自动重定向路由
  {
    path: '/',
    redirect: '/home'
  }
]
