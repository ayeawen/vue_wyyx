/*
vuex最核心的管理对象: store
 */

import Vue from 'vue'
import Vuex from 'vuex'

import item from './modules/item'
import topic from './modules/topic'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    item,
    topic
  }
})