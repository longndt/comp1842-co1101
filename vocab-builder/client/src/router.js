import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './components/Words.vue'
import HelloWorld from './components/HelloWorld.vue'
import Greenwich from './components/Greenwich.vue'
import Words from './components/Words.vue'

Vue.use(Router)

const router = new Router({
   mode: 'history',
   routes: [
      {
         path: '/',
         component: Words
      },
      {
         path: '/hello',
         component: HelloWorld
      },
      {
         path: '/greenwich',
         component: Greenwich
      }
   ]
})

export default router