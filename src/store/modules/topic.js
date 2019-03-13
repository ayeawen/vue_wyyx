/*item模块*/

import {
  reqTabs
} from '../../api'

import {
  RECRIVE_TABS
} from '../mutation-types'

const state = {
  tabs: []
};

const actions = {
  // 获取Tabs数据
  async getTabs({commit}) {
    const result = await reqTabs()
    //console.log(result)
    if (result.code === '200') {
      const tabs = result.data
      commit(RECRIVE_TABS, {tabs})
    }
  },
};

const mutations = {
  [RECRIVE_TABS] (state, {tabs}) {
    state.tabs = tabs
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