import { createRouter, createWebHistory } from 'vue-router'
import Index from '../components/Index.vue'
import notFound from '../pages/notfound.vue'
import Blog from '../components/Blog.vue'
import OurProject from '../components/OurProject.vue'

const routes = [

  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: notFound
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },{
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/OurProject',
    name: 'OurProject',
    component: OurProject
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;