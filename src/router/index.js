import Vue from 'vue'

import VueRouter from 'vue-router'

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
    path: '/home',
    redirect: '/home/createinformasi',
    name: 'Home',
    component: Template,
    children: [
      {
        path: 'createinformasi',
        name: 'CreateInfromasi',
        component: CreateInfromasi
      },
    ]
  },
  {
    path: '/home',
    redirect: '/home/updatekaryawan',
    name: 'Home',
    component: Template,
    children: [
      {
        path: 'updatekaryawan',
        name: 'Updatekaryawan',
        component: UpdateKaryawan
      },
    ]
  },
  {
    path: '/home',
    redirect: '/home/pelanggan',
    name: 'Home',
    component: Template,
    children: [
      {
        path: 'pelanggan',
        name: 'Pelanggan',
        component: Pelanggan
      },
    ]
  },
  {
    path: '/home',
    redirect: '/home/updatepelanggan',
    name: 'Home',
    component: Template,
    children: [
      {
        path: 'updatepelanggan',
        name: 'Updatepelanggan',
        component: UpdatePelanggan
      },
    ]
  },
  {
    path: '/home',
    redirect: '/home/tagihan',
    name: 'Home',
    component: Template,
    children: [
      {
        path: 'tagihan',
        name: 'Tagihan',
        component: Tagihan
      },
    ]
  },
  {
    path: '/home',
    redirect: '/home/laporan',
    name: 'Home',
    component: Template,
    children: [
      {
        path: 'laporan',
        name: 'Laporan',
        component: Laporan
      },
    ]
  },    
  {
    path: '/home',
    redirect: '/home/createkaryawan',
    name: 'Home',
    component: Template,
    children: [
      {
        path: 'createkaryawan',
        name: 'Createkaryawan',
        component: CreateKaryawan
      },
    ]
  },  
  {
    path: '/home',
    redirect: '/home/detailpengaduan',
    name: 'Home',
    component: Template,
    children: [
      {
        path: 'detailpengaduan',
        name: 'Detailpengaduan',
        component: DetailPengaduan
      },
    ]
  },
  {
    path: '/home',
    redirect: '/home/informasi',
    name: 'Home',
    component: Template,
    children: [
      {
        path: 'informasi',
        name: 'Informasi',
        component: Informasi
      },
    ]
  },
  {
    path: '/home',
    redirect: '/home/createpelanggan',
    name: 'Home',
    component: Template,
    children: [
      {
        path: 'createpelanggan',
        name: 'Createpelanggan',
        component: CreatePelanggan
      },
    ]
  },
  {
    path: '/home',
    redirect: '/home/karyawan',
    name: 'Home',
    component: Template,
    children: [
      {
        path: 'karyawan',
        name: 'Karyawan',
        component: Karyawan
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
