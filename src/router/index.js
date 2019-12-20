import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../pages/manager/Home.vue'
import My from '../pages/manager/My.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if(to.path === '/login' || store.state.user.userinfo){
//     next()
//   } else {
//     next('/login')
//   }
// })
export default router
