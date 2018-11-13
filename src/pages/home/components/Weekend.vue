<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of items" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.img" alt=""/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      items: [
        {
          img: 'http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg',
          title: '粤西温泉必游',
          desc: '自驾粤西，寻找自己心仪的温泉池',
          id: 1
        },
        {
          img: 'http://img1.qunarzz.com/sight/source/1506/45/313877f3917dbe.jpg_r_640x214_1c113e46.jpg',
          title: '江门必游TOP10',
          desc: '你不可错过的休闲度假之地',
          id: 2
        },
        {
          img: 'http://img1.qunarzz.com/sight/source/1507/2f/d4ae428228a1c1.jpg_r_640x214_a5fce01f.jpg',
          title: '四季都爱玩水',
          desc: '一年四季的舒适，清爽，养生',
          id: 3
        },
        {
          img: 'http://img1.qunarzz.com/sight/source/1507/a0/38e6caf2633ea8.jpg_r_640x214_22535e06.jpg',
          title: '周末去哪儿玩',
          desc: '江门当地人周末好去处',
          id: 4
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37.6%
        background-color #ccc
        .item-img
            width 100%
    .item-info
        flex 1
        padding .1rem .2rem
        min-width 0
        font-size .28rem
        ellipsis()
        .item-title
            line-height .54rem
            ellipsis()
        .item-desc
            line-height .4rem
            font-size .2rem
            color #ccc
            ellipsis()
</style>
