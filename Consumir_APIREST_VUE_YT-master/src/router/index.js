import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import gerentP from '../views/gerentP.vue'
import analistaP from '../views/analista.vue'
import new_user from '../views/nuevo_user'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gerentePage',
    name: 'gerentePage',
    component: gerentP
  },
  {
    path: '/analistaPage',
    name: 'analistaPage',
    component: analistaP
  },
  {
    path: '/newUser',
    name: 'newUser',
    component: new_user
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
