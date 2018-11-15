<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-if="hotCities.length !== 0">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div
                        class="button-wrapper"
                        v-for="hot of hotCities"
                        :key="hot.id"
                        @click="handleCity(hot.name)"
                    >
                        <div class="button">{{hot.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-if="cities !== null">
                <div v-for="(city, cityAlphabet) of cities" :key="cityAlphabet" :ref="cityAlphabet">
                    <div class="title border-topbottom">{{cityAlphabet}}</div>
                    <div
                        class="item-list"
                        v-for="item of city"
                        :key="item.id"
                        @click="handleCity(item.name)"
                    >
                        <div class="item border-bottom">{{item.name}}</div>
                    </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter () {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  },
  activated () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
    &:before
        border-color #ccc
    .list
        position absolute
        overflow hidden
        top 1.78rem
        left 0
        right 0
        bottom 0
        .title
            line-height .54rem
            background #eee
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrapper
                float left
                width 33.33%
                .button
                    margin .1rem
                    padding .1rem 0
                    border-radius .06rem
                    text-align center
                    border .02rem solid #cccccc
        .item-list
            .item
                line-height .74rem
                padding-left .2rem
</style>
