import Vue from 'vue'
import Router from 'vue-router'
import Words from './views/Words.vue'
import Show from './views/Show.vue'
import New from './views/New.vue'
import Edit from './views/Edit.vue'

Vue.use(Router)

const router = new Router({
   mode: 'history',
   routes: [
      {
         path: '/',
         redirect: '/words'
      },
      {
         path: '/words',
         component: Words
      },
      {
         path: '/words/new',
         component: New
      },
      {
         path: '/words/show/:id',
         component: Show
      },
      {
         path: '/words/edit/:id',
         component: Edit
      }
   ]
})

export default router