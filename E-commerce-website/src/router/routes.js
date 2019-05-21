// 所有路由配置对象的数组

// 引入路由
import Home from '../pages/Home/Home'
import ShopCart from '../pages/ShopCart/ShopCart'
import Search from '../pages/Search/Search'
import Personal from '../pages/Personal/Personal'
import Classify from '../pages/Classify/Classify'
import Sousuo from '../pages/Sousuo/Sousuo'

import OnPhone from '../pages/Personal/pages/OnPhone/OnPhone'
import Login from '../pages/Personal/pages/Login/Login'
import OnMail from '../pages/Personal/pages/OnMail/OnMail'
import OnPhoneSignIn from '../pages/Personal/pages/OnPhoneSignIn/OnPhoneSignIn'
import OnEmailSignIn from '../pages/Personal/pages/OnEmailSignIn/OnEmailSignIn'


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
    component: Personal,
    children:[
      {
        path: '/personal/login',
        component: Login,
      },
      {
        path: '/personal/onPhone',
        component: OnPhone,
      },
      {
        path: '/personal/OnMail',
        component: OnMail,
      },
      {
        path: '/personal/onPhoneSignIn',
        component: OnPhoneSignIn,
      },
      {
        path: '/personal/onEmailSignIn',
        component: OnEmailSignIn,
      },



      {
        path: '/personal',
        redirect: '/personal/login'
      }
    ]


  },
  {
    path: '/sousuo',
    component: Sousuo,
  },

  // 自动重定向路由
  {
    path: '/',
    redirect: '/home'
  }
]
