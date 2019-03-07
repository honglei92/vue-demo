import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Index from '@/page/Index'
import Message from '@/page/message/Message'
import Follow from '@/page/follow/Follow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/Home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/follow',
          name: 'Follow',
          component: Follow
        },
        {
          path: '/message',
          name: 'Message',
          component: Message
        }
      ]
    }
  ]
})
