import Cart from '../pages/Cart/Cart.vue'
import Expert from '../pages/Expert/Expert.vue'
import FirstView from '../pages/FirstView/FirstView.vue'
import Item from '../pages/Item/Item.vue'
import SubItemList from '../pages/Item/SubItemList.vue'
import Topic from '../pages/Topic/Topic.vue'
import User from '../pages/User/User.vue'
import Search from '../pages/Search/Search.vue'

export default [
  //重定向到首页
  {
    path: '/',
    redirect: '/firstview'
  },
  {
    path: '/item',
    redirect: '/item/cate',
    component: Item
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

    children: [
      {
        path: '/item/cate',
        component: SubItemList,
      }
    ]
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