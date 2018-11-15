<template>
    <div class="container">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <swiper-slide>
                    <img class="gallary-img" src="//img1.qunarzz.com/sight/p0/1810/2b/2bb1fc603cf64c50a3.img.jpg_r_800x800_66b109ff.jpg" alt="slide">
                </swiper-slide>
                <swiper-slide>
                    <img class="gallary-img" src="//img1.qunarzz.com/sight/p0/1810/e5/e5418560e6b5c7c8a3.img.jpg_r_800x800_7593ce0a.jpg" alt="slide">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
    .container >>> .swiper-container
        overflow inherit
    .container
        display flex
        flex-direction column
        justify-content center
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background #000
        z-index 99
        .wrapper
            width 100%
            height 0
            padding-bottom 100%
            .gallary-img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem

</style>
