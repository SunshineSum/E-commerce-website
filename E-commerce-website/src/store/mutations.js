import {RECEIVE_CLASSIFY ,
  RECEIVE_HOMES ,
  RECEIVE_SEARCH,
  RECEIVE_KINGKONGLIST,
  RECEIVE_SCENELIGHTSHOPPINGGUIDEMODULE,
  RECEIVE_PERSONALSHOP,
} from './mutation-types'

export default {
  [RECEIVE_CLASSIFY] (state, {categoryData}) {
    state.categoryData = categoryData
  },
  [RECEIVE_HOMES] (state, {homeData}) {
    state.homeData = homeData
  },
  [RECEIVE_SEARCH] (state, {categoryListData}) {
    state.categoryListData = categoryListData
  },



// 接收商品导航数据
  [RECEIVE_KINGKONGLIST] (state, kingKongList) {
    state.kingKongList = kingKongList
    // console.log(state.kingKongList,'000000000')
  },
// 接收购物导航榜单数据
  [RECEIVE_SCENELIGHTSHOPPINGGUIDEMODULE] (state, SceneLightShoppingGuideModule) {
    state.SceneLightShoppingGuideModule = SceneLightShoppingGuideModule
  },
  //接收私人定制数据
  [RECEIVE_PERSONALSHOP] (state, personalShop) {
    state.personalShop = personalShop
  },
}
