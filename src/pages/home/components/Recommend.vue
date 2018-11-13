<template>
    <div v-if="list.length">
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
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
  props: {
    list: Array
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
