import Mock from 'mockjs'

import itemList from './data/itemList.json'

Mock.mock('/itemList', {
  code: 0,
  data: itemList
})