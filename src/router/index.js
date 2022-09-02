import Vue from 'vue'
import VueRouter from 'vue-router'
import CatFacts from '@/components/CatFacts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: CatFacts
  },
  {
    path: '/:encoded',
    component: CatFacts
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
