import {RECEIVE_CLASSIFY ,
  RECEIVE_HOMES ,
  RECEIVE_SEARCH,
  RECEIVE_KINGKONGLIST,
  RECEIVE_SCENELIGHTSHOPPINGGUIDEMODULE,
  RECEIVE_PERSONALSHOP,
  RECEIVE_FLASHSALEMODULE,
  RECEIVE_NEWITEMLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_CATEGORYHOTSELLMODULE,
  RECEIVE_TAGLIST,
  RECEIVE_ZHONGCHOULIST,
  RECEIVE_TOPICLIST,
  RECEIVE_CATEGORYMODULE
} from './mutation-types'

export default {
  [RECEIVE_CLASSIFY] (state, categoryData) {
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
  //接收限时购数据
  [RECEIVE_FLASHSALEMODULE] (state, flashSaleModule) {
    state.flashSaleModule = flashSaleModule
  },
  //接收新品首发数据
  [RECEIVE_NEWITEMLIST] (state, newItemList) {
    state.newItemList = newItemList
  },
  //接收新品首发数据
  [RECEIVE_POPULARITEMLIST] (state, popularItemList) {
    state.popularItemList = popularItemList
  },
  //接收类目热销榜数据
  [RECEIVE_CATEGORYHOTSELLMODULE] (state, categoryHotSellModule) {
    state.categoryHotSellModule = categoryHotSellModule
  },
  //接收品牌制造商数据
  [RECEIVE_TAGLIST] (state, tagList) {
    state.tagList = tagList
  },
  //接收众筹数据
  [RECEIVE_ZHONGCHOULIST] (state, zhongChouList) {
    state.zhongChouList = zhongChouList
  },
  //接收专题精选数据
  [RECEIVE_TOPICLIST] (state, topicList) {
    state.topicList = topicList
  },
  //接收分类数据
  [RECEIVE_CATEGORYMODULE] (state, categoryModule) {
    state.categoryModule = categoryModule
  },
}
