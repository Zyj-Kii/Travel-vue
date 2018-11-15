<template>
    <div>
        <router-link v-show="showAbs" tag="div" class="header-abs" to="/">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div
           class="header-fixed"
           v-show="!showAbs"
           :style="opacityStyle"
        >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            {{this.productName}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  props: {
    productName: String
  },
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 50) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
@import "~styles/varibles.styl"
.header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    text-align center
    line-height .8rem
    background rgba(0,0,0,.8)
    .header-abs-back
        color #fff
        font-size .4rem
.header-fixed
    position fixed
    z-index 2
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background-color $bgColor
    font-size .32rem
    .header-fixed-back
        position absolute
        top 0
        left .1rem
        width .64rem
        font-size .4rem
        text-align center
        color #fff
</style>
