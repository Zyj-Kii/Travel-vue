<template>
    <div>
        <div class="banner">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1810/2b/2bb1fc603cf64c50a3.img.jpg_600x330_9a7b8cf2.jpg" alt="喜运来温泉">
            <div class="banner-info">
                <div class="banner-number"><span class="iconfont banner-icon">&#xe602;</span>28</div>
                <div class="banner-title">喜运来温泉</div>
            </div>
        </div>
        <common-gallary></common-gallary>
    </div>

</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  }
}
</script>

<style scoped lang="stylus">
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left .1rem
            right 0
            bottom 0
            padding .16rem 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.4))
            .banner-title
                flex 1
                font-size .36rem
                padding 0 .2rem
            .banner-number
                position absolute
                bottom .74rem
                left .2rem
                padding .02rem .3rem
                font-size .24rem
                line-height .4rem
                height .4rem
                border-radius .2rem
                background rgba(0,0,0,.5)
                .banner-icon
                    font-size .24rem
                    padding 0 .08rem
</style>
