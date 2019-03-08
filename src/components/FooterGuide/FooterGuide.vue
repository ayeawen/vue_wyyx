<template>
  <div>
    <footer class="footer_guide">
      <a href="javascript:;" class="guide_item" @click="goto('/firstview')">
        <i class="item-icon icon-firstview" :class="{active: isCurrent('/firstview')}"></i>
        <span :class="{on: isCurrent('/firstview')}">首页</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goto('/item')">
        <i class="item-icon icon-item" :class="{active: isCurrent('/item')}"></i>
        <span :class="{on: isCurrent('/item')}">分类</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goto('/topic')">
        <i class="item-icon icon-topic" :class="{active: isCurrent('/topic')}"></i>
        <span :class="{on: isCurrent('/topic')}">识物</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goto('/cart')">
        <i class="item-icon icon-cart" :class="{active: isCurrent('/cart')}"></i>
        <span :class="{on: isCurrent('/cart')}">购物车</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goto('/user')">
        <i class="item-icon icon-user" :class="{active: isCurrent('/user')}"></i>
        <span :class="{on: isCurrent('/user')}">个人</span>
      </a>
    </footer>
  </div>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#d9d9d9)
    position fixed
    z-index 100
    left 0
    bottom 0
    display flex
    flex-flow row nowrap
    justify-content space-around
    align-items center
    width 100%
    height 98px
    background-color #fff
    .guide_item
      display flex
      flex-direction column
      align-items center
      position relative
      text-align center
      height 71px
      .item-icon
        display inline-block
        vertical-align middle
        background-image url('/static/img/firstview/tabBar-s43a0dc8a7d-de25ef8e19.png')
        background-repeat no-repeat
        background-size 100%
        background-position 0 -200px
        width 40px
        height 40px
      .icon-firstview
        background-position 0 -250px
        &.active
          background-position 0 -200px
      .icon-item
        background-position 0 -150px
        &.active
          background-position 0 -100px
      .icon-topic
        background-position 0 -350px
        &.active
          background-position 0 -300px
      .icon-cart
        background-position 0 -50px
        &.active
          background-position 0 0
      .icon-user
        background-position 0 -450px
        &.active
          background-position 0 -400px
      span
        display block
        margin-top 7px
        color #666
        line-height 1
        font-size 24px
        &.on
          color #b4282d
</style>
