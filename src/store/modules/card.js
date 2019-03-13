/*item模块*/

import {
  reqTuijian
} from '../../api'

import {
  RECRIVE_TUIJIAN
} from '../mutation-types'

const state = {
  tuijian: []
};

const actions = {
  async getTuijian({commit}){
    const result = await reqTuijian()
    if (result.code === '200') {
      const tuijian = result.data
      commit(RECRIVE_TUIJIAN, {tuijian})
    }
  }
};

const mutations = {
  [RECRIVE_TUIJIAN](state, tuijian){
    state.tuijian = tuijian
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