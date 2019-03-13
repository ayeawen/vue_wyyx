<template>
  <div>
    <!--推荐-->
    <div class="card01">
      <a href="javascript:;">
        <div class="uName">
          <span class="img"><img src="https://yanxuan.nosdn.127.net/ec3af82c32bc8e580c5076c5ce146331.png?imageView&quality=65&thumbnail=56y56" alt=""></span>
          <span class="name">选美</span>
        </div>
        <div class="uTitle">2019明前春茶新鲜上市，尝过这一口，才算不辜负春天</div>
        <div class="uImg"><img src="https://yanxuan.nosdn.127.net/e8f232c7b25fd412afbdf4ba785e1f0d.jpg?imageView&quality=65&thumbnail=690y376" alt=""></div>
        <div class="uWatched">
          <i></i>
          <span>13w人看过</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    mounted(){
      this.$store.dispatch('getTuijian')
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  .card01
    display block
    width: 100%;
    background: #fff;
    margin: 17.5px 0;
    box-sizing: border-box;
    padding: 32px 26.5px;
    a
      .uName
        margin-bottom: 21px;
        font-size: 24px;
        color: #333;
        line-height: 32px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .img
          display: inline-block;
          vertical-align: middle;
          width: 49px;
          height: 49px;
          overflow: hidden;
          border-radius: 50%;
          box-sizing: border-box;
          border: 1px solid #d9d9d9;
          margin-right: 8px;
          img
            width 100%
            height: 100%
        .name
          display: inline-block;
          vertical-align: middle;
      .uTitle
        font-size: 32px;
        color: #333;
        line-height: 46px;
        margin: -7px 0 14px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        font-family: PingFangSC-Regular;
      .uImg
        width: 603px
        height: 329px
        position: relative;
        margin-bottom: 14.5px;
        overflow: hidden;
        border-radius: 7px;
        img
          width 100%
          height: 100%;
      .uWatched
        margin-bottom: 21px;
        font-size: 24px;
        color: #999;
        line-height: 28px;
        margin-top: 16px;
        i
          display: inline-block;
          width: 24px;
          height: 17.5px;
          vertical-align: middle;
          background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==") no-repeat 0/100%;
          margin-right: 2px;
        span
          display: inline-block;
          vertical-align: middle;
</style>
