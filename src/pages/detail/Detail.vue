<template>
    <div>
        <detail-banner
            :bannerImg="bannerImg"
            :imgs="imgs"
            :productName="productName"
        ></detail-banner>
        <detail-header :productName="productName"></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      productName: '',
      bannerImg: '',
      imgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.productName = data.sightName
        this.bannerImg = data.bannerImg
        this.imgs = data.galleryImgs
        this.list = data.categoryList
        console.log(res.data)
      }
    }
  },
  activated () {
    this.getDetailInfo()
  }
}
</script>

<style scoped lang="stylus">
.content
    height 50rem
</style>
