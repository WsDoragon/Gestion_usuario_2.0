import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import gerentP from '../views/gerentP.vue'
import analistaP from '../views/analista.vue'
import administradorP from '../views/administrador.vue'
import new_user from '../views/nuevo_user'
import editar from '../views/editar.vue'
import subir from '../views/subir.vue'

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
    path: '/administradorPage',
    name: 'administradorPage',
    component: administradorP
  },
  {
    path: '/newUser',
    name: 'newUser',
    component: new_user
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: editar
  },
  {
    path: '/subir/:id',
    name: 'subir',
    component: subir
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
