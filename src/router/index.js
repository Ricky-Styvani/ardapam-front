import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Template from '../components/Template.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/home/dashboard',
    name: 'Home',
    component: Template,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
    ]
  },
  {
    path: '/',
    redirect: '/login',
    name: 'Base',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
