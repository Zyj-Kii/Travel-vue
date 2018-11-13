<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of items" :key="item.id">
                <img class="item-img" :src="item.img" alt=""/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      items: [
        {
          img: 'http://img1.qunarzz.com/sight/p0/1810/2b/2bb1fc603cf64c50a3.img.jpg_200x200_16f89fef.jpg',
          title: '喜运来温泉',
          desc: '江门首站，浪费温泉之旅',
          id: 1
        },
        {
          img: 'http://img1.qunarzz.com/sight/p0/1409/04/d22f832f528e0123af655b56e7f50b86.jpg_200x200_09f00917.jpg',
          title: '上川岛',
          desc: '广东最美海岛，共度美好时光',
          id: 2
        },
        {
          img: 'http://img1.qunarzz.com/sight/p0/1603/16/16bce10bda0f2d9c90.water.jpg_200x200_28af1a65.jpg',
          title: '康桥温泉度假村',
          desc: '超值度假村十日游',
          id: 3
        },
        {
          img: 'http://img1.qunarzz.com/sight/p0/1603/73/73eb4b1a0048bbaf90.water.jpg_200x200_97d9f846.jpg',
          title: '新会古兜温泉',
          desc: '新会小城一日游，解放疲劳',
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
    .item
        position relative
        display flex
        height 2.1rem
        .item-img
            width 2rem
            height 2rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis()
            .item-button
                position absolute
                right .1rem
                bottom .13rem
                line-height .34rem
                margin-top .2rem
                background-color #ff9300
                padding .1rem
                border-radius .1rem
                color #fff
                box-shadow .03rem .03rem .03rem .03rem #ccc
</style>
