<template>
  <div id="firstView">
    <div class="headWrap">
      <div class="headUp">
        <a href="/"></a>
        <SearchBox :searchMsg="searchMsg"/>
        <div class="loginBox">登录</div>
      </div>
      <div class="headDown">
        <div class="tabs"></div>
        <transition name="arrowToggle">
          <div class="toggle">
            <div class="iconArrow"></div>
          </div>
        </transition>
      </div>
    </div>
    <div class="swiperWrap">
      <swiper class="swiper" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="swiperItem">
          <img src="/static/img/firstview/swiper01.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiperItem">
          <img src="/static/img/firstview/swiper02.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiperItem">
          <img src="/static/img/firstview/swiper03.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiperItem">
          <img src="/static/img/firstview/swiper04.png" alt="">
        </swiper-slide>
        <swiper-slide class="swiperItem">
          <img src="/static/img/firstview/swiper05.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiperItem">
          <img src="/static/img/firstview/swiper06.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiperItem">
          <img src="/static/img/firstview/swiper07.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiperItem">
          <img src="/static/img/firstview/swiper08.png" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination">
          <span class="my-bullet"></span>
          <span class="my-bullet"></span>
          <span class="my-bullet"></span>
          <span class="my-bullet"></span>
          <span class="my-bullet"></span>
          <span class="my-bullet"></span>
          <span class="my-bullet"></span>
          <span class="my-bullet"></span>
        </div>
      </swiper>
    </div>
    <div class="headWrap"></div>
  </div>
</template>

<script>
  import SearchBox from '../../components/SearchBox/searchBox.vue'

  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data () {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          loop: true,
          autoplay: true,
          delay: 2000,//1秒切换一次
          pagination: {
            el: '.swiper-pagination',
            type : 'custom',
            // 自定义分页器
            renderCustom: function (swiper, current, total) {
              let paginationHtml = "";
              for (let i = 0; i < total; i++) {
                //判断哪个分页器此刻应该被激活
                if (i === (current - 1)) {
                  paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                } else {
                  paginationHtml += '<span class="swiper-pagination-customs"></span>';
                }
              }
              return paginationHtml;
            }
          },
        },
        searchMsg: '搜索商品, 共21889款好物',
        isToggle: false
      }
    },

    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },

    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(1, 1000, false)
    },

    components: {
      swiper,
      swiperSlide,
      SearchBox
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  #firstView
    .headWrap
      width 750px
      height 148px
      .headUp
        position relative
        z-index 2
        display flex
        flex-wrap row nowrap
        align-items center
        background #fff
        padding 16px 30px
        a
          width 138px
          height 40px
          background-image url('/static/img/firstview/indexLogo-a90bdaae6b.png');
          display inline-block
          margin-right 20px
          background-size cover
          background-position center
        .loginBox
          width 74px
          height 40px
          line-height 40px
          text-align center
          color #b4282d
          border 1px solid #b4282d
          border-radius 8px
          margin-left 16px
          font-size 24px

      .headDown
        position relative
        z-index 10
        background #fff
        margin-top -1px
        height 60px
        padding-right 100px
        .tabs
          height 100%
          display flex
          flex-flow row nowrap
          background-color #fff
          position relative
        .toggle
          width 100px
          height 100%
          display flex
          flex-grow 0
          align-items center
          justify-content center
          position absolute
          top -1px
          right 0
          .iconArrow
            display inline-block
            vertical-align middle
            background-image url('/static/img/firstview/arrow-down-3-799ded53ea.png')
            background-repeat no-repeat
            background-size 100% 100%
            width 30px
            height 30px
            transition transform .5s
    .swiperWrap
      height 370px
      .swiper
        height 100%
        .swiperItem
          height 100%
        .swiper-pagination
          display flex
          justify-content center
          width 100%
          height 4px
          bottom 30px
</style>
<style>
  /*自定义分页器的样式，这个你自己想要什么样子自己写*/
  .swiper-pagination-customs {
    width: 40px;
    height: 4px;
    display: inline-block;
    background: #fff;
    opacity: .4;
    margin-right: 10px;
  }
  /*自定义分页器激活时的样式表现*/
  .swiper-pagination-customs-active {
    opacity: 1;
  }
</style>
