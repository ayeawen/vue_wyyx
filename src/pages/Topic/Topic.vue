<template>
  <div>
    <div class="headWrap">
      <header class="head">
        <div class="topBar">
          <div class="inner">
            <a class="home" href="/">
              <h1></h1>
            </a>
            <div class="title">
              <a href="javascript:;" class="faxian">发现</a>
              <a href="javascript:;" class="other">甄选家</a>
            </div>
            <div class="right">
              <a href="/cart" class="cart"><i></i></a>
              <a href="/search" class="search"><i></i></a>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="tabs">
      <ul class="scrollWrap">
        <li :class="{active: +$route.params.id === index}" v-for="(tab, index) in tabs" :key="index">{{tab.tabName}}</li>
      </ul>
    </div>

    <!--识物主体显示-->
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {

    mounted() {
      this.$store.dispatch('getTabs')
    },

    computed: {
      ...mapState({
        tabs: state => state.topic.tabs,
      })
    },

  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
.headWrap
  height: 87.5px;
  width: 100%;
  position: relative;
  .head
    position: fixed !important;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    .topBar
      position: relative;
      height: 87.5px;
      background-color: #fafafa;
      box-sizing: border-box;
      border-bottom: 2px solid #d9d9d9;
      .inner
        z-index: 1;
        box-sizing: border-box;
        margin: auto;
        overflow: hidden;
        padding: 0 .30rem;
        position: relative;
        a.home
          display: block;
          float: left;
          h1
            background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAcNAP9uD9Bfrx5B8v6LSdTgr37N/Uxb14Gtm5r6aVjWhgVTkUgTYpp0pCSlNj4QAAATNJREFUSMfd0+tugyAYBmAUREXtwbNW7Vptu+29//tbsolkahSTbVn6/oM8An4fkKeLL4Kjvn5zgbTT1S8ccYTS08J2A2TUKyF8DX3cAXubkC6F+76qPRPI5XfOda0kAZg09h4wFvWBIbir4Q04L2iDI/FGNXq1J0xtfqKT7TI6q+kJaCZLtRHMYq4kCfjcjz0sWI/J7D0AO5C5FCaidjR3ZaqJ01OOV8qhTjiNXYPn30uyW7ywZ6gG0AyobbKYCth/Ea8EFwZZjgHeH6CCe8M6b1zsPhtd+4YGN/y4koNFrsSf8zZGn+CgwTNYfXiiwU3I++1av8qFBo8VZxqcDZw5m7izjXM93m3hEbwtPEEhebip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII=') no-repeat
            background-size: 40px 40px
            width: 40px
            height: 87.5px;
            background-position center
        .title
          position: absolute;
          width: 280px
          height: 100%;
          line-height: 87.5px
          display flex
          justify-content center
          left: 50%;
          top: 0;
          margin-left: -140px;
          font-size: 24px
          color: #7F7F7F;
          z-index: 1;
          a.faxian
            font-size: 36px;
            color: #b4282d;
            font-weight: bold;
            padding: 0 14px;
            vertical-align: middle;
          a.other
            padding: 0 14px;
            vertical-align: middle;
        .right
          display: block;
          float: right;
          height: 87.5px
          margin-right: 1.75px
          a.cart
            float: right;
            display: block;
            height: 87.5px
            i
              display: block;
              position: relative;
              background-position: center;
              background-repeat: no-repeat;
              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAk1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM1idyXAAAAMHRSTlMAYbmIKS7ss/BPwREDeAjlt52EIc3HQTs3JRv53djTjn5XFQ2+p6JH9K+XZDJzb12hgxUyAAABlElEQVRIx82V23KCMBCGV8AYAgLlrChaz4ce/vd/utopKks10YvO9LvaMN+E7OZnoP9FCGDgPKzv63SC1KPHWWQ40hMcMXtG32JTHHtGkkbvV1EEM1mje5n8eLf1xLYANRzwSkamu3P1gdhoFyI9ly4GgUn/rNbnsi/DkUkfXk/gZchN+gt6l/pwqg2sUFzqd9gG20+R0LXXaKnXk4kYXxZ9Yeo1l9k1tkuFQq/3sAlafZvuNcbc51PVsmH7ubD0vVooWysnlNpegxROe6lQ6vRR2Jqjude8Uh5PkK0P2EtArNf92rqP6LzcCScSGuYBj5CC69xn5BNnDZeeYA7bf0J3qxXXjYHO+/dIfu+U4T5VvOgeRqC2UkCsB20UIL7HvvKYPQ4xW9Byjqnf+SzqnKioMQv4LUdNdmZsFynKn69zN2IRa8ZewmKXjdVPEeHtth5xXd3Uh82um85hhCzoxJuQCftBTXAYkxdDsMf+qfct0XYKm2dsu8NU1cAnMZYDSKUELI845R6AlVMHbygAOVzQn/MFg0s1dXIHznQAAAAASUVORK5CYII=');
              background-size: 40px 40px
              width: 43px
              height: 87.5px
          a.search
            float: right;
            margin-right: 30px
            display: block;
            height: 87.5px
            i
              display: block;
              position: relative;
              background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAKlBMVEUAAAA0NDQ0NDQ0NDQ0NDQ0NDQzMzMUFBQ0NDROTk4zMzMzMzMzMzM2NDTc2xHNAAAADXRSTlMAbezXT6YsFM0O+L+FggY9rwAAAP5JREFUOMtjIBOwiTat0ghMQBeeaHsXBC5Logoz6l4KTGcoE9W9JIBiSO9tBzCDZe8NZKOcLgOFIRK2KghhlrWRcPbUWw5wttcdJL1nl8BN1z2AJM5zCWYDx1UUt8U2QBmylijiky9CaE5dBxRxlksTIH66jeb3vRC/MV9BE/c1AFO5CmjiTNcg1gagibNCLI4VQBNnhLi7NwE9Km6AKd0CNHH2S2BqLUbc3cIljsscXPbicicuf+EKB1zhhiuc8cYLZjzij3fMdII9XV3Bng7vXi7Amm4Vbc2xp/NisAbMfMEO0YCZj8AaMPMdTAMmQGhAAPwabmAXZ+9mIBUAAIJuXNa9gIYoAAAAAElFTkSuQmCC")
              background-position: center;
              background-repeat: no-repeat;
              background-size: 40px 40px
              width: 43px
              height: 87.5px
.tabs
  top: 87.5px
  width: 100%;
  height: 64px;
  background: #fafafa;
  border-bottom: 2px solid #d9d9d9;
  box-sizing: border-box;
  overflow: hidden;
  position: fixed;
  left: 0;
  z-index: 20;
  .scrollWrap
    width: 100%;
    height: 64px
    padding-bottom: 18px;
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
    li.active
      color: #B4282D;
      border-bottom: 3.5px solid #B4282D;
    li
      display: inline-block;
      height: 64px
      line-height: 64px
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      font-size: 24px
      color: #7F7F7F;
      padding: 0 8px;
      margin: 0 17.5px
      vertical-align: middle;
.content
  padding: 64px 0 86px 0;
</style>
