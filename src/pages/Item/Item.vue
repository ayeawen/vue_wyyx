<template>
  <div id="item">
    <div class="headSearch">
      <SearchBox :searchMsg="searchMsg"/>
    </div>
    <div class="itemList">
      <NavItemList/>
    </div>
    <div class="footerWrap">
      <FooterGuide/>
    </div>
  </div>
</template>

<script>
  import SearchBox from '../../components/SearchBox/SearchBox.vue'
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  import SubItemList from './SubItemList.vue'
  import NavItemList from './NavItemList.vue'

  export default {
    data () {
      return {
        searchMsg: '搜索商品, 共21772款好物'
      }
    },

    mounted() {

      this.$store.dispatch('getItemList')
    },

    components: {
      SearchBox,
      NavItemList,
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
</style>
