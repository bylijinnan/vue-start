import Vue from 'vue'
import Router from 'vue-router'
import secondcomponent from '@/components/secondcomponent'
import About from '@/components/About'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/secondcomponent',
      name: 'secondcomponent',
      component: secondcomponent
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
