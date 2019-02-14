import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savePosition) {
    return {x: 0, y: 0}
  }
})

router.beforeEach((to, from, next) => {
  const userAgent = window.navigator.userAgent
  if (userAgent.indexOf('iPhone') === -1 && userAgent.indexOf('Android') === -1) {
  //  非移动端
    alert('请通过移动端或浏览器模拟器访问')
    location.href = 'http://baidu.com'
  } else {
    next()
  }
})

export default router
