import {categoryData , categoryListData , homeData} from '../api/index'
import {RECEIVE_SEARCH ,
  RECEIVE_HOMES ,
  RECEIVE_CLASSIFY,
  RECEIVE_KINGKONGLIST,
  RECEIVE_SCENELIGHTSHOPPINGGUIDEMODULE,
  RECEIVE_PERSONALSHOP
} from './mutation-types'

export default {

  async getHomeData({ commit}) {
    const result=await homeData()
    if(result.code===0){
      commit(RECEIVE_KINGKONGLIST,result.data.kingKongModule.kingKongList)
      commit(RECEIVE_SCENELIGHTSHOPPINGGUIDEMODULE,result.data.sceneLightShoppingGuideModule)
      commit(RECEIVE_PERSONALSHOP,result.data.personalShop)

      // console.log(result.data.kingKongModule.kingKongList)
    }
  },
}
