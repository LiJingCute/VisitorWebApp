import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../pages/manager/Home.vue'
import My from '../pages/manager/My.vue'
import Manager from '../pages/manager/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import( '../pages/Login.vue')
  },
  {
    path: '/manager',
    name: 'manager',
    component: Manager,
    children:[{
      path: 'home',
      component: () => import( '../pages/manager/Home.vue')
    },
    {
      path: 'my',
      component: () => import( '../pages/manager/My.vue')
    }]
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
