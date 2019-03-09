<template>
  <div id="cart">
    <div class="top">
      <span>购物车</span>
      <a class="right" href="">
        <span>领券</span>
      </a>
    </div>
    <div class="topDown">
      <ul class="service">
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
        <li>
          <a href="javascript:;">
            <i></i>
            <span>满88元免邮费</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="loginView">
      <div class="container">
        <img src="/static/img/cart/noCart-d6193bd6e4.png" alt="">
        <div class="textAndBtn">
          <p>去添加点什么吧</p>
          <button @click="goto">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },

    methods: {
      goto(){
        this.$router.push('/user')
      }
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  #cart
    width 100%
    .top
      height 88px
      padding 0 30px
      line-height 80px
      text-align center
      background-color #fff
      position relative
      span
        font-size 36px
        line-height 88px
      .right
        display block
        position absolute
        top 0
        right 60px
        span
          font-size 30px
          color #B4282D
    .topDown
      position relative
      left 0
      top 0
      z-index 2
      .service
        display flex
        height 70px
        padding 0 30px
        justify-content space-between
        align-items center
        li
          i
            width 10px
            height 10px
            background url("/static/img/cart/servicePolicy-0ec842d966.png") no-repeat
            background-size 98%
            position relative
            top -3px
          span
            color #666
            vertical-align middle

    .loginView
      position fixed
      top 88px
      left 0
      bottom 0
      z-index 1
      width 100%
      background-color #f4f4f4
      text-align center
      .container
        position absolute
        top -50px
        right 0
        bottom 0
        left 0
        height 300px
        margin auto
        img
          display inline-block
          vertical-align middle
          width 248px
          height 248px
          margin-bottom 8px
          background-size 248px 248px
          background-position center
          background-repeat no-repeat
        .textAndBtn
          font-size 28px
          line-height 1px
          color #7f7f7f
          p
            margin-bottom 50px
            line-height 1
            font-size 28px
            color #999
          button
            margin auto
            width 480px
            height 92px
            font-size 30px
            line-height 92px
            color #fff
            background-color #b4282d
            border-radius 3px

</style>
