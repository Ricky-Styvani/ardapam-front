import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import store from '../store'
import Login from '../views/Login.vue'

import Dashboard from '../views/Dashboard.vue'

import Informasi from '../views/informasi/Index.vue'
import CreateInfromasi from '../views/informasi/Createinformasi.vue'

import Karyawan from '../views/karyawan/Index.vue'
import CreateKaryawan from '../views/karyawan/Create.vue'
import UpdateKaryawan from '../views/karyawan/Update.vue'

import Pelanggan from '../views/pelanggan/Index.vue'
import CreatePelanggan from '../views/pelanggan/Create.vue'
import UpdatePelanggan from '../views/pelanggan/Update.vue'

import DetailPengaduan from '../views/pengaduan/Detail.vue'

import Laporan from '../views/laporan/Laporan.vue'

import Tagihan from '../views/tagihan/Index.vue'

import Catat from '../views/petugas/Catat.vue'

import Template from '../components/Template.vue'

Vue.use(VueRouter)
const checktoken = (to,from,next) => {
  if(window.localStorage.getItem('token') != null){
    axios.get('http://localhost:8000/api/user',{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} }).then(res=>{
      store.commit('user',res.data)
      console.log(res)
      next()
    }).catch(()=>{
        next('/login')
    })
  }
  else{
    next('/login')
  }
}
const checkexp = (to, from,next) =>{
  let date = new Date();
  let cnv = date.getTime()
  if(store.state.user.exp <= cnv){
    next('/login')
  }else{
    next()
  }
}

const routes = [
  {
    path: '/home',
    redirect: '/home/dashboard',
    name: 'Home',
    component: Template,
    beforeEnter:checktoken,
    beforeRouteUpdate:checkexp,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'createinformasi',
        name: 'CreateInfromasi',
        component: CreateInfromasi
      },
      {
        path: 'catat',
        name: 'Catat',
        component: Catat
      },
      {
        path: 'updatekaryawan',
        name: 'Updatekaryawan',
        component: UpdateKaryawan
      },
      {
        path: 'pelanggan',
        name: 'Pelanggan',
        component: Pelanggan
      },
      {
        path: 'updatepelanggan',
        name: 'Updatepelanggan',
        component: UpdatePelanggan
      },
      {
        path: 'tagihan',
        name: 'Tagihan',
        component: Tagihan
      },
      {
        path: 'laporan',
        name: 'Laporan',
        component: Laporan
      },
      {
        path: 'createkaryawan',
        name: 'Createkaryawan',
        component: CreateKaryawan
      },
      {
        path: 'detailpengaduan',
        name: 'Detailpengaduan',
        component: DetailPengaduan
      },
      {
        path: 'informasi',
        name: 'Informasi',
        component: Informasi
      },
      {
        path: 'createpelanggan',
        name: 'Createpelanggan',
        component: CreatePelanggan
      },
      {
        path: 'karyawan',
        name: 'Karyawan',
        component: Karyawan
      },
    ]
  },   
  {
    path: '/',
    redirect: '/home',
    name: 'Base',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: 'login',
        name: 'Login',
        beforeEnter: checktoken,
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
