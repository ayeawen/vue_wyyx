<template>
  <div id="item">
    <div class="headSearch">
      <SearchBox :searchMsg="searchMsg"/>
    </div>
    <div class="itemList">
      <div class="list-l">
        <ul class="list">
          <li class="item" v-for="(item, index) in itemList" :key="index">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <SubItemList/>
    <div class="footerWrap">
      <FooterGuide/>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  import SearchBox from '../../components/SearchBox/SearchBox.vue'
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  import SubItemList from './SubItemList.vue'

  export default {
    data () {
      return {
        searchMsg: '搜索商品, 共21772款好物'
      }
    },

    computed: {
      ...mapState({
        itemList: state => state.item.itemList
      }),
    },

    mounted() {
      this.$nextTick(() => {
        this._initScroll03()
      })
      this.$store.dispatch('getItemList')
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

    components: {
      SearchBox,
      SubItemList,
      FooterGuide
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
#item
  .headSearch
    bottom-border-1px(#ccc)
    position relative
    z-index 3
    display flex
    align-items: center;
    height: 1.17333rem;
    padding: 0 .4rem;
    background-color: #fff;
  .itemList
    width 100%
    height: 1148px;
    background #fff
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
