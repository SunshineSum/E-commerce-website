import {categoryData , categoryListData , homeData} from '../api/index'
import {RECEIVE_SEARCH ,
  RECEIVE_HOMES ,
  RECEIVE_CLASSIFY,
  RECEIVE_KINGKONGLIST,
  RECEIVE_SCENELIGHTSHOPPINGGUIDEMODULE,
  RECEIVE_PERSONALSHOP,
  RECEIVE_FLASHSALEMODULE,
  RECEIVE_NEWITEMLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_CATEGORYHOTSELLMODULE,
  RECEIVE_TAGLIST
} from './mutation-types'

export default {

  async getHomeData({ commit}) {
    const result=await homeData()
    if(result.code===0){
      commit(RECEIVE_KINGKONGLIST,result.data.kingKongModule.kingKongList)
      commit(RECEIVE_SCENELIGHTSHOPPINGGUIDEMODULE,result.data.sceneLightShoppingGuideModule)
      commit(RECEIVE_PERSONALSHOP,result.data.personalShop)
      commit(RECEIVE_FLASHSALEMODULE,result.data.flashSaleModule.itemList)
      commit(RECEIVE_NEWITEMLIST,result.data.newItemList)
      commit(RECEIVE_POPULARITEMLIST,result.data.popularItemList)
      commit(RECEIVE_CATEGORYHOTSELLMODULE,result.data.categoryHotSellModule.categoryList)
      commit(RECEIVE_TAGLIST,result.data.tagList)



      // console.log(result.data.kingKongModule.kingKongList)
    }
  },
}
