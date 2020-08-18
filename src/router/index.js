import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/Main'
import { kMaxLength } from 'buffer'
import SubMain from '@/components/main/MainContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/main/submain',
          name: 'MainContent',
          component: SubMain
        }
      ]
    }
  ]
})
