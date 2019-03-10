<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter" class="footer"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    data () {
      return {

      }
    },

    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  .footer
    position fixed
    z-index 1
</style>
