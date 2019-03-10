<template>
  <div class="searchBox">
    <i></i>
    <span>{{searchMsg}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      searchMsg: ''
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  .searchBox
    display flex
    flex-flow row nowrap
    align-items center
    flex-grow 1
    justify-content center
    height 56px
    font-size 28px
    background-color #ededed
    border-radius 8px
    i
      display inline-block
      vertical-align middle
      background-image url('/static/img/firstview/search2-553dba3aff.png')
      background-repeat no-repeat
      background-size 100% 100%
      width 28px
      height 28px
      margin-right 10px
    span
      color #666
</style>
