<template>
    <div v-if="list.length">
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
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
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .title
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
