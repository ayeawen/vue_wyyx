<template>
  <div id="firstViewCard">
    <a href="javascript:"></a>
    <div class="scrollWrap">
      <div class="inner">
        <div class="scroll">
          <ul class="list">
            <li class="item">
              <div><img src="/static/img/firstview/card01-01.png" alt=""></div>
              <div>100%山羊绒纯色围巾</div>
              <div class="price">￥123</div>
              <div class="color">
                <span>5</span>
                <span>色</span>
                <span>可</span>
                <span>选</span>
              </div>
            </li>
            <li class="item">
              <div><img src="/static/img/firstview/card01-01.png" alt=""></div>
              <div>100%山羊绒纯色围巾</div>
              <div class="price">￥123</div>
              <div class="color">
                <span>5</span>
                <span>色</span>
                <span>可</span>
                <span>选</span>
              </div>
            </li>
            <li class="item">
              <div><img src="/static/img/firstview/card01-01.png" alt=""></div>
              <div>100%山羊绒纯色围巾</div>
              <div class="price">￥123</div>
              <div class="color">
                <span>5</span>
                <span>色</span>
                <span>可</span>
                <span>选</span>
              </div>
            </li>
            <li class="item">
              <div><img src="/static/img/firstview/card01-01.png" alt=""></div>
              <div>100%山羊绒纯色围巾</div>
              <div class="price">￥123</div>
              <div class="color">
                <span>5</span>
                <span>色</span>
                <span>可</span>
                <span>选</span>
              </div>
            </li>
            <li class="item">
              <div><img src="/static/img/firstview/card01-01.png" alt=""></div>
              <div>100%山羊绒纯色围巾</div>
              <div class="price">￥123</div>
              <div class="color">
                <span>5</span>
                <span>色</span>
                <span>可</span>
                <span>选</span>
              </div>
            </li>
            <li class="item">
              <div><img src="/static/img/firstview/card01-01.png" alt=""></div>
              <div>100%山羊绒纯色围巾</div>
              <div class="price">￥123</div>
              <div class="color">
                <span>5</span>
                <span>色</span>
                <span>可</span>
                <span>选</span>
              </div>
            </li>
            <li class="item more">
              <span>查看更多</span>
              <i></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default{
    methods: {
      _initScroll02(){
        if(!this.scroll02) {
          this.scroll02 = new BScroll('.scroll', {
            scrollX: true,
            scrollY: false,
            click: true
          })
        } else {
          this.scroll02.refresh()
        }
      }
    },

    mounted() {
      this.$nextTick(() => {
        this._initScroll02()
      })
    },
  }

</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
#firstViewCard
  background-color: #fff;
  a
    display: block;
    width: 100%;
    height: 4.93333rem;
    margin-bottom: .26667rem;
    background-image: url('/static/img/firstview/card01.jpg');
    background-size: 100%
  .scrollWrap
    background-color: #fff;
    .inner
      margin-left: auto;
      margin-right: auto;
      position: relative;
      overflow: hidden;
      z-index: 1;
      height: auto;
      padding: 0 .4rem .4rem;
      .scroll
        .list
          float: left
          display flex
          overflow: visible;
          height: auto;
          position: relative;
          z-index: 0;
          .item
            padding: 0!important;
            margin-right: .26667rem;
            width: 2.66667rem;
            height: auto;
            position: relative;
            overflow: hidden;
            background-color: #fff;
            div:first-child
              width: 100%;
              img
                width 100%
            div:nth-child(2)
              padding-left: 0;
              font-size: .32rem;
              margin-top: 0;
              line-height: .48rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              white-space: normal;
            div.price
              margin-bottom: .05333rem;
              padding-left: 0;
              font-size: .32rem;
              line-height: .48rem;
              color: #b4282d;

            div.color
              position: absolute;
              border-width: .5px;
              border-radius: .02667rem;
              border-style: solid;
              border-color: #b4a078;
              width: .42667rem;
              top: 0;
              margin-top: .13333rem;
              margin-left: .13333rem;
              padding: .16rem 0;
              color: #b4a078;
              background: #f4f4f4;
              display: flex;
              flex-direction: column;
              justify-content: center;
              span
                font-size: .26667rem;
                text-align: center;
                line-height: 1;

          .more
            display: block;
            width: 2.66667rem;
            height: 2.66667rem;
            margin-right: 0;
            line-height: 2.66667rem;
            text-align: center;
            background: #F5F5F5;
            border-radius: .05333rem;
            span
              font-size: .37333rem;
              color: #333;
            i
              margin: -.10667rem 0 0 0;
              display: inline-block;
              vertical-align: middle;
              background-image: url('/static/img/firstview/more.png');
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .16rem;
              height: .29333rem;


</style>
