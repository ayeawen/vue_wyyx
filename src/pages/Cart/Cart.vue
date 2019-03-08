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
          <i></i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i></i>
          <span>48小时快速退款</span>
        </li>
        <li>
          <i></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="loginView"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
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
      .service
        display flex
        height 70px
        padding 0 30px
        justify-content space-between
        align-items center
        i
          width 10px
          height 10px
          background url("/static/img/cart/servicePolicy-0ec842d966.png")
          vertical-align middle
        span
          color #666
</style>
