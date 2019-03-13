<template>
  <div id="firstView">
    <div class="headWrap">
      <div class="fixed">
        <div class="headUp">
          <a href="/"></a>
          <SearchBox :searchMsg="searchMsg"/>
          <div class="loginBox">登录</div>
        </div>
        <div class="headDown">
          <div class="tabs" v-show="!isToggle">
            <div class="inner">
              <div class="yokoList">
                <div class="listItem active">
                  <span>推荐</span>
                </div>
                <div class="listItem">
                  <span>居家生活</span>
                </div>
                <div class="listItem">
                  <span>服装鞋包</span>
                </div>
                <div class="listItem">
                  <span>美食酒水</span>
                </div>
                <div class="listItem">
                  <span>个人清洁</span>
                </div>
                <div class="listItem">
                  <span>母婴亲子</span>
                </div>
                <div class="listItem">
                  <span>运动旅行</span>
                </div>
                <div class="listItem">
                  <span>数码家电</span>
                </div>
                <div class="listItem">
                  <span>礼品特色</span>
                </div>
              </div>
            </div>
          </div>
          <div class="hideListWrap" v-show="isToggle">
            <div class="hideTop">全部频道</div>
            <div class="hideList">
              <div class="hideListItem active">推荐</div>
              <div class="hideListItem">居家生活</div>
              <div class="hideListItem">服装鞋包</div>
              <div class="hideListItem">美食酒水</div>
              <div class="hideListItem">个人清洁</div>
              <div class="hideListItem">母婴亲子</div>
              <div class="hideListItem">运动旅行</div>
              <div class="hideListItem">数码家电</div>
              <div class="hideListItem">礼品特色</div>
            </div>
          </div>

          <div class="toggle">
            <div class="iconArrow" @click="arrowToggle(isToggle)"></div>
          </div>
        </div>
        <div class="mask" v-show="isToggle"></div>
      </div>
    </div>
    <div class="swiperWrap">
      <swiper class="swiper" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="swiperlistItem">
          <img src="/static/img/firstview/swiper01.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiperlistItem">
          <img src="/static/img/firstview/swiper02.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiperlistItem">
          <img src="/static/img/firstview/swiper03.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiperlistItem">
          <img src="/static/img/firstview/swiper04.png" alt="">
        </swiper-slide>
        <swiper-slide class="swiperlistItem">
          <img src="/static/img/firstview/swiper05.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiperlistItem">
          <img src="/static/img/firstview/swiper06.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiperlistItem">
          <img src="/static/img/firstview/swiper07.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiperlistItem">
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
    <div class="indexService">
      <ul class="service">
        <li>
          <a href="javascript:;">
            <i></i>
            <span>网易自营品牌</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i></i>
            <span>30天无忧退货</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i></i>
            <span>48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="navTabWrap">
        <ul class="navTab">
          <li>
            <div><img src="/static/img/firstview/li01.png" alt=""></div>
            <p>居家生活</p>
          </li>
          <li>
            <div><img src="/static/img/firstview/li02.png" alt=""></div>
            <p>服饰鞋包</p>
          </li>
          <li>
            <div><img src="/static/img/firstview/li03.png" alt=""></div>
            <p>美食酒水</p>
          </li>
          <li>
            <div><img src="/static/img/firstview/li04.png" alt=""></div>
            <p>个护清洁</p>
          </li>
          <li>
            <div><img src="/static/img/firstview/li05.png" alt=""></div>
            <p>限时购</p>
          </li>
          <li>
            <div><img src="/static/img/firstview/li06.png" alt=""></div>
            <p>母婴亲子</p>
          </li>
          <li>
            <div><img src="/static/img/firstview/li07.png" alt=""></div>
            <p>运动旅行</p>
          </li>
          <li>
            <div><img src="/static/img/firstview/li08.png" alt=""></div>
            <p>数码家电</p>
          </li>
          <li>
            <div><img src="/static/img/firstview/li09.png" alt=""></div>
            <p>礼品特色</p>
          </li>
          <li>
            <div><img src="/static/img/firstview/li10.png" alt=""></div>
            <p>超级会员</p>
          </li>
        </ul>
      </div>
      <GaryLine/>
      <div class="xr">
        <div class="xrTittle">
          <span>新人专享礼</span>
        </div>
        <div class="xrContent">
          <div class="xrC-Left">
            <p>新人专享礼包</p>
            <img src="/static/img/firstview/10yuan.png" alt="">
          </div>
          <div class="xrC-right">
            <div class="xrC-r1">
              <div class="xrCC">
                <p class="big">福利社</p>
                <p class="p-other">今日特价</p>
                <img src="/static/img/firstview/xr-up.png" alt="">
                <span>￥50.2</span>
              </div>
            </div>
            <div class="xrC-r2">
              <div class="xrCC">
                <p class="big">新人拼团</p>
                <p class="p-other">1元起包邮</p>
                <img src="/static/img/firstview/xr-down.png" alt="">
                <span>￥10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GaryLine/>
      <div class="flashSale">
        <div class="countDownWrap">
          <div class="countDown">
            <span>限时购</span>
            <div>
              <span class="hours">00</span>
              <span class="colon">:</span>
              <span class="mins">{{formatTo(cdfun.mins)}}</span>
              <span class="colon">:</span>
              <span class="secs">{{formatTo(cdfun.secs)}}</span>
            </div>
          </div>
          <a href="javascript:;">
            <span>更多</span>
            <i></i>
          </a>
        </div>
        <div class="fsGoods">
          <div class="good">
            <div class="goodImg"><img src="/static/img/firstview/fsGoods01.png" alt=""></div>
            <div class="price">
              <span class="new">￥123</span>
              <span class="old">￥234</span>
            </div>
          </div>
          <div class="good">
            <div class="goodImg"><img src="/static/img/firstview/fsGoods02.png" alt=""></div>
            <div class="price">
              <span class="new">￥216</span>
              <span class="old">￥492</span>
            </div>
          </div>
          <div class="good">
            <div class="goodImg"><img src="/static/img/firstview/fsGoods03.png" alt=""></div>
            <div class="price">
              <span class="new">￥549</span>
              <span class="old">￥156</span>
            </div>
          </div>
          <div class="good">
            <div class="goodImg"><img src="/static/img/firstview/fsGoods04.png" alt=""></div>
            <div class="price">
              <span class="new">￥713</span>
              <span class="old">￥546</span>
            </div>
          </div>
          <div class="good">
            <div class="goodImg"><img src="/static/img/firstview/fsGoods05.png" alt=""></div>
            <div class="price">
              <span class="new">￥256</span>
              <span class="old">￥234</span>
            </div>
          </div>
          <div class="good">
            <div class="goodImg"><img src="/static/img/firstview/fsGoods06.png" alt=""></div>
            <div class="price">
              <span class="new">￥245</span>
              <span class="old">￥234</span>
            </div>
          </div>
        </div>
      </div>
      <GaryLine/>
      <FirstViewCard/>
      <GaryLine/>
    </div>
    <a class="guangao" href="javascript:;">
      <i></i>
    </a>
    <footer class="footerWrap">
      <div>
        <a href="javascript:;" class="goAppOrWeb">下载APP</a>
        <a href="javascript:;" class="goAppOrWeb">电脑版</a>
      </div>
      <p class="copyright">
        <span>严选公司版权所有 © 2019-2019</span>
        <br>
        <span>食品经营许可证：JY12345678987654321</span>
      </p>
    </footer>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import BScroll from 'better-scroll'

  import SearchBox from '../../components/SearchBox/SearchBox.vue'
  import GaryLine from '../../components/GaryLine/GaryLine.vue'
  import FirstViewCard from '../../components/FirstViewCard/FirstViewCard.vue'

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
        isToggle: false,
        countDown: {
          mins: 2,
          secs: 0
        },
        isIng: true
      }
    },

    methods: {
      arrowToggle() {
        const arrDiv = document.querySelector('.iconArrow')
        const isToggle = this.isToggle
        if (!isToggle) {
          arrDiv.style = 'transform: rotate(180deg);'
          this.isToggle = !this.isToggle
          //使下拉div出现
        } else {
          arrDiv.style = 'transform: rotate(0deg);'
          this.isToggle = !this.isToggle
          //使下拉div消失
        }
      },

      _initScroll01(){
        if(!this.scroll01) {
          this.scroll01 = new BScroll('.inner', {
            click: true,
            scrollX: true
          })
        } else {
          this.scroll01.refresh()
        }
      },

      formatTo(value){
        if (value*1 < 10) {
          value = '0' + value
        }
        return value
      }
    },

    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },

      cdfun(){
        if (this.isIng) {
          setInterval(() => {
            this.isIng = false
            this.countDown.secs--
          },1000)
        }

        if (this.countDown.secs < 0) {
          this.countDown.mins--
          this.countDown.secs = 59
          if (this.countDown.mins < 0) {
            this.countDown.mins = 2
          }
        }

        return this.countDown
      }
    },

    mounted() {
      this.swiper.slideTo(1, 1000, false)
      this.$nextTick(() => {
        this._initScroll01()
      })


    },

    components: {
      swiper,
      swiperSlide,
      SearchBox,
      GaryLine,
      FirstViewCard
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  #firstView
    padding-bottom: 98px
    .headWrap
      width 750px
      height 148px
      .fixed
        position: fixed!important;
        left: 0;
        top: 0;
        z-index: 11;
        width: 100%;
        .headUp
          position relative
          z-index 3
          display flex
          flex-wrap row nowrap
          align-listItems center
          background #fff
          padding 16px 30px
          a
            position relative
            top 8px
            width 138px
            height 40px
            background-image url('/static/img/firstview/indexLogo-a90bdaae6b.png');
            display inline-block
            margin-right 20px
            background-size cover
            background-position center
          .loginBox
            position relative
            top 8px
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
          z-index 3
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
            .inner
              position relative
              height 100%
              width 100%
              overflow hidden
              display flex
              flex-flow row nowrap;
              .yokoList
                height 60px
                line-height 60px
                padding 0 30px
                font-size 28px
                display flex
                flex-flow row nowrap;
                flex-shrink 0
                .listItem
                  margin-left 20px
                  &.active
                    box-sizing content-box
                    border-bottom 4px solid #b4282d
                    span
                      color #b4282d
                  &:first-of-type
                    margin-left 0
                  span
                    display inline-block
                    padding 0 16px
                    line-height 60px
                    font-size 28px
                    color #333
                    text-align center
          .hideListWrap
            position relative
            z-index 3
            background #fff
            margin-top -1px
            width 750px
            .hideTop
              height 60px
              line-height 60px
              padding-left 30px
              font-size 28px

            .hideList
              padding-top 24px
              overflow hidden
              width 750px
              .hideListItem
                width 150px
                height 56px
                line-height 56px
                text-align center
                float left
                margin-bottom 40px
                margin-left 30px
                background #FAFAFA
                border 1px solid #CCC
                border-radius 4px
                &.active
                  border 1px solid #b4282d
                  color #b4282d
          .toggle
            position absolute
            top -1px
            right 35px
            z-index 3
            position
            width 100px
            height 100%
            display flex
            flex-grow 0
            align-listItems center
            justify-content center
            .iconArrow
              position relative
              top 16px
              display inline-block
              vertical-align middle
              background-image url('/static/img/firstview/arrow-down-3-799ded53ea.png')
              background-repeat no-repeat
              background-size 100% 100%
              width 30px
              height 30px
              transition: transform .5s;

        .mask
          position fixed
          z-index 2
          background rgba(0,0,0,.5)
          top: 0
          left: 0
          right: 0
          bottom: 0
    .swiperWrap
      height 370px
      .swiper
        height 100%
        .swiperlistItem
          height 100%
        .swiper-pagination
          display flex
          justify-content center
          width 100%
          height 4px
          bottom 30px

    .indexService
      background-color #FFFFFF
      color #B4282D
      .service
        display flex
        height 70px
        padding 0 30px
        justify-content space-between
        align-items center
        li
          i
            display inline-block
            vertical-align middle
            width 32px
            height 32px
            background url("/static/img/firstview/icon-yi.png") no-repeat
            background-size 100%
            position relative
          &:nth-of-type(2) i
            background-image url("/static/img/firstview/icon-dunpai.png")
          &:nth-of-type(3) i
            background-image url("/static/img/firstview/icon-qian.png")
          span
            display inline-block
            vertical-align middle
            color #B4282D

    .content
      .navTabWrap
        background-image: url('/static/img/firstview/background-bai.png');
        background-size: 100%;
        width: 100%;
        height: 5.22667rem;
        .navTab
          padding-bottom: .69333rem;
          display flex
          flex-wrap wrap
          li
            display: block;
            width: 1.46667rem;
            height: 2.08rem;
            float: left;
            margin: .13333rem .26667rem .12rem;
            div
              width: 1.46667rem;
              height: 1.46667rem;
              img
                width: 1.46667rem;
                height: 1.46667rem;
            p
              margin-top: .13333rem
              text-align: center
              font-size: .32rem;
              line-height: .48rem;
              white-space: nowrap;
              color: #333333;

      .xr
        background: #fff
        height 558px
        .xrTittle
          height: 1.2rem;
          width: 100%;
          line-height: 1.2rem;
          text-align: center;
          font-family: PingFangSC-Regular;
          font-size: .42667rem;
          span
            display: inline-block;
            position: relative;
            &:before
              left: -.53333rem;
              content: '';
              position: absolute;
              top: .6rem;
              width: .32rem;
              height: .04rem;
              background: #333;
            &:after
              right: -.53333rem;
              content: '';
              position: absolute;
              top: .6rem;
              width: .32rem;
              height: .04rem;
              background: #333;
        .xrContent
          padding-left: .4rem;
          overflow: hidden;
          .xrC-Left
            display: block;
            width: 4.57333rem;
            height: 5.78667rem;
            background: #F9E9CF;
            border-radius: .05333rem;
            margin-right: .05333rem;
            float: left;
            color: #333;
            p
              font-family: PingFangSC-Medium;
              font-size: .42667rem;
              padding: .4rem 0 0 .4rem;

            img
              display block
              margin: .49333rem auto;
              width: 3.44rem;
              height: 3.42667rem;
              position: relative;
          .xrC-right
            float: left;
            .xrC-r1
              background: #FBE2D3;
              border-radius: 4px;
              width: 4.57333rem;
              height: 2.86667rem;
              margin-bottom: .05333rem;
              .xrCC
                display: block;
                color: #333;
                width: 4.57333rem;
                height: 2.93333rem;
                float: left;
                border-radius: .05333rem;
                margin: 0 .05333rem .05333rem 0;
                font-size: .32rem;
                padding: .26667rem 0 0 .4rem;
                position relative
                .big
                  font-size: .42667rem;
                .p-other
                  color: #7F7F7F;
                img
                  width: 200px
                  height: 200px
                  position absolute
                  top 20px
                  right 0

                span
                  position: absolute;
                  top: 0
                  right: .45333rem;
                  width: 1.06667rem;
                  height: 1.06667rem;
                  line-height 1.06667rem
                  opacity: .8;
                  background: #F59524;
                  border-radius: 50%;
                  color: #fff;
                  text-align: center;
            .xrC-r2
              background: #FFECC2;
              border-radius: 4px;
              display: block
              width: 4.57333rem;
              height: 2.86667rem;
              .xrCC
                display: block;
                color: #333;
                width: 4.57333rem;
                height: 2.93333rem;
                float: left;
                border-radius: .05333rem;
                margin: 0 .05333rem .05333rem 0;
                font-size: .32rem;
                padding: .26667rem 0 0 .4rem;
                position relative
                .big
                  font-size: .42667rem;
                .p-other
                  position: relative;
                  display: inline-block;
                  padding: 0 .13333rem;
                  height: .42667rem;
                  background: #CBB693;
                  border-radius: .05333rem;
                  color: #fff;
                  font-size: .29333rem;
                  line-height: .42667rem;
                  text-align: center;
                img
                  width: 200px
                  height: 200px
                  position absolute
                  top 20px
                  right 0
                span
                  position: absolute;
                  top: 0
                  right: .45333rem;
                  width: 1.06667rem;
                  height: 1.06667rem;
                  line-height 1.06667rem
                  opacity: .8;
                  background: #F59524;
                  border-radius: 50%;
                  color: #fff;
                  text-align: center;

      .flashSale
        height: 698px;
        background: #fff;
        .countDownWrap
          width: 100%;
          height: 1.33333rem;
          line-height: 1.33333rem;
          padding: 0 .4rem;
          background: #fff;
          overflow: hidden;
          .countDown
            float: left;
            font-size: .42667rem;
            font-family: PingFangSC-Regular;
            div
              display: inline-block;
              vertical-align: middle;
              margin: -.08rem 0 0 .16rem;
              span.hours, span.mins, span.secs
                display: inline-block;
                font-size: .32rem;
                line-height: .48rem;
                width: .48rem;
                height: .48rem;
                text-align: center;
                background-color: #333;
                border-radius: .05333rem;
                color: #fff;
                font-family: PingFangSC-Medium;
              span.colon
                font-size: .37333rem;

          a
            display: block;
            font-size: .37333rem;
            float: right;
            color: #333;
            line-height: 1.33333rem;
            i
              margin: -.06667rem 0 0 0;
              display: inline-block;
              vertical-align: middle;
              background-image: url('/static/img/firstview/more.png');
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .17333rem;
              height: .30667rem;
        .fsGoods
          overflow: hidden;
          padding: 0 .13333rem 0 .4rem;
          .good
            display: block;
            color: #333;
            float: left;
            margin-right: .26667rem;
            padding-bottom: .4rem;
            .goodImg
              width: 2.88rem;
              height: 2.88rem;
              background: #F5F5F5;
              border-radius: 4px;
              margin-bottom: .16rem;
              img
                width: 2.88rem;
                height: 2.88rem;

            .price
              padding-left: .26667rem;
              .new
                font-size: .37333rem;
                color: #b4282d;
                margin-right: .16rem;
              .old
                font-size: .32rem;
                color: #7F7F7F;
                text-decoration: line-through;

    .guangao
      position: fixed
      right: 0
      bottom: 3.2rem
      display: block
      z-index: 10
      i
        display: inline-block
        vertical-align: middle
        background-image: url('/static/img/firstview/wapNewUserEntry-b69d0624fd.png')
        background-repeat: no-repeat
        background-size: 100%
        width: 1.49333rem
        height: 1.06667rem
    .footerWrap
      border-top 1px solid rgba(0,0,0,.15)
      background-color #414141
      text-align center
      padding 54px 20px 28px
      div
        .goAppOrWeb
          display inline-block
          margin-right 50px
          width 172px
          height 62px
          line-height 62px
          font-size 24px
          color #fff
          border 1px solid #999
          border-radius 4px
          &:last-child
            margin-right 0
      p
        margin-top: .48rem;
        font-size: .32rem;
        line-height: .42667rem;
        color: #999;
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