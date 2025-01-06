import { createMemoryHistory, createRouter } from 'vue-router'
import CatFacts from '@/components/CatFacts.vue'

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

const router = createRouter({
  history: createMemoryHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router
