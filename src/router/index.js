/*
 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Cart from '../pages/Cart/Cart.vue'
import Expert from '../pages/Expert/Expert.vue'
import FirstView from '../pages/FirstView/FirstView.vue'
import Item from '../pages/Item/Item.vue'
import Topic from '../pages/Topic/Topic.vue'
import User from '../pages/User/User.vue'
import Search from '../pages/Search/Search.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    //重定向到首页
    {
      path: '/',
      redirect: '/firstview'
    },

    //各个页面路由
    {
      path: '/firstview',
      component: FirstView,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/item',
      component: Item,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/topic',
      component: Topic,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/expert',
      component: Expert,
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/user',
      component: User,
    },
    {
      path: '/search',
      component: Search,
    }
  ]
})