<template>
  <div id="navItemList">
    <div class="list-l">
      <ul class="list">
        <li class="item" v-for="(item, index) in itemList" :key="index">
          <router-link :to="`/item/cate?cateId=${item.id}`">
            <span>{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>

    <RouterView/>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        itemList: state => state.item.itemList
      }),
    },

    methods: {
      _initScroll03(){
        if(!this.scroll03) {
          this.scroll03 = new BScroll('.list-l', {
            scrollX: true,
            click: true
          })
        } else {
          this.scroll03.refresh()
        }
      },
    },

    mounted(){
      this.$nextTick(() => {
        this._initScroll03()
      })
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  #navItemList
    .list-l
      height 1148px
      float: left;
      width: 2.16rem;
      background-color: #fff;
      .list
        box-sizing content-box
        height 100%
        padding: .53333rem 0;
        .item
          position relative
          margin-top: .53333rem;
          width: 100%;
          height: .66667rem;
          text-align: center;
          border: none;
          font-size: .37333rem
          &:first-child
            margin-top 0
          &.active
            span
              color: #ab2b2b;
            &::before
              content: '';
              position: absolute;
              top: -5px;
              left: 0;
              bottom: 0;
              width: .08rem;
              height: .66667rem;
              background-color: #ab2b2b;
</style>
