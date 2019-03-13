/*item模块*/

import {
  reqItemList
} from '../../api'

import {
  RECRIVE_ITEMLIST
} from '../mutation-types'

const state = {
  itemList: []
};

const actions = {
  //异步获取分类的action
  async getItemList ({commit}, cb) {
    //1.发ajax请求
    const result = await reqItemList()
    const {data, code} = result
    //2.成功后提交到mutations
    if (code===0) {
      // console.log(data)
      commit(RECRIVE_ITEMLIST, {data})
      typeof cb === 'function' && cb()
    }

  }
};

const mutations = {
  [RECRIVE_ITEMLIST] (state, {data}) {
    state.itemList = data
  }
};

const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
}