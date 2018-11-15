<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="this.bannerImg" :alt="productName">
            <div class="banner-info">
                <div class="banner-number"><span class="iconfont banner-icon">&#xe602;</span>{{this.imgs.length}}</div>
                <div class="banner-title">{{this.productName}}</div>
            </div>
        </div>
        <fade-animation>
            <common-gallery :imgs="imgs" v-show="showGallery" @galleryClick="handleGalleryClick"></common-gallery>
        </fade-animation>
    </div>

</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    productName: String,
    bannerImg: String,
    imgs: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClick () {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
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
