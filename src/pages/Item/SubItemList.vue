<template>
  <div id="cateList">
    <div class="list-r" v-if="subItemList">
      <div class="list-r-content">
        <div class="list-banner">
          <!--<img :src="subItemList.imgUrl" alt="">-->
        </div>
        <div class="listWrap">
          <!--<div class="title">{{subItem.title}}</div>-->
          <ul class="list">
            <li class="item" v-for="(subItem, index) in subItemList" :key="index">
              <img :src="subItem.wapBannerUrl" class="itemImg"/>
              <div class="name">{{subItem.name}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    computed: {
      ...mapState({
        itemList: state => state.item.itemList
      }),

      subItemList () {
        if (this.itemList) {
          const result = this.itemList.find(item => item.id === this.$route.query.cateId * 1)
          /*if (!result) {
           // 初次显示
           return this.itemList[0]
           } else {
           return result
           }*/
          return result.subCateList
        }
      }
    },

    methods: {
      _initscroll04(){
        if(!this.scroll04) {
          this.scroll04 = new BScroll('.list-r', {
            scrollX: true,
            click: true
          })
        } else {
          this.scroll04.refresh()
        }
      },
    },


    mounted(){
      this.$nextTick(() => {
        this._initscroll04()
      })
    },

    watch: {
      subItemList(){
        this.$nextTick(() => {
          this._initscroll04()
        })
      }
    },
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
#cateList
  height
  .list-r
    margin-left: 2.16rem;
    height: 1148px
    overflow: hidden;
    .list-r-content
      height 100%
      box-sizing content-box
      padding: .4rem .4rem .28rem;
      .list-banner
        position: relative;
        width: 100%;
        height: 2.56rem;
        display: table;
        margin-bottom: .42667rem;
        background: center no-repeat #f4f4f4;
        background-size: cover;
        border-radius: 4px;
        background-image url("/static/img/item1/9eb09ecd7fc58151568f4b0b616db1cf.jpg")
      .listWrap
        .title
          padding-bottom: .10667rem;
          margin-bottom: .32rem;
          font-weight: 700;
          color: #333;
          border-bottom: 1px solid #d9d9d9;
          font-size: .37333rem;
        .list
          .item
            display: inline-block;
            margin-right: .45333rem;
            font-size: 0;
            width: 1.92rem;
            height 216px
            vertical-align: top;
            &:nth-child(3n)
              margin-right: -.13333rem;
            .itemImg
              width: 1.92rem;
              height: 1.92rem;
              //background: url('/static/img/item1/cee41a60a2d4d06426f863aea2395f19.png') center no-repeat;
            .name
              height: .96rem;
              font-size: .32rem;
              color: #333;
              text-align: center;
              line-height: .48rem;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
</style>
