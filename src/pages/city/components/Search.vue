<template>
    <div>
        <div class="search">
            <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content"
             v-show="keyword"
             ref="search">
            <ul>
                <li
                    class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleCity(item.name)"
                >{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (this.keyword) {
        this.time = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      } else {
        this.list = []
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .search
        padding .1rem
        height .72rem
        background $bgColor
        .search-input
            box-sizing border-box
            width 100%
            height .62rem
            line-height .62rem
            padding 0 .01rem
            text-align center
            border-radius .06rem
            outline none
    .search-content
        overflow hidden
        position absolute
        z-index 1
        top 1.78rem
        right 0
        left 0
        bottom 0
        background #eee
    .search-item
        line-height .62rem
        padding-left .2rem
        background #fff
        color #666
</style>
