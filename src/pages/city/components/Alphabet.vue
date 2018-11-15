<template>
    <ul class="list" v-if="alphabet !== null">
        <li
        class="item"
        v-for="alpha of letters"
        :key="alpha"
        :ref="alpha"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >{{alpha}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    alphabet: Object
  },
  data () {
    return {
      touchStatus: false,
      alpha: '',
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.alphabet) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let index = Math.floor((e.touches[0].clientY - this.startY - 89) / 20)
          if (index >= 0 && index < this.letters.length) {
            if (this.alpha !== this.letters[index]) {
              this.alpha = this.letters[index]
              this.$emit('change', this.alpha)
            }
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
      this.$emit('change', this.alpha)
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles"
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.78rem
        right 0
        bottom 0
        width .4rem
        .item
            line-height .4rem
            text-align center
            color $bgColor
</style>
