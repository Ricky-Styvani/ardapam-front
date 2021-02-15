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
import CreatePelanggan2nd from '../views/pelanggan/Create2nd.vue'
import UpdatePelanggan from '../views/pelanggan/Update.vue'
import Profilepelanggan from '../views/pelanggan/Profile.vue'
import Tagihanpelanggan from '../views/pelanggan/Tagihan.vue'
import Transaksipelanggan from '../views/pelanggan/Transaksi.vue'

import DetailPengaduan from '../views/pengaduan/Detail.vue'

import Laporan from '../views/laporan/Laporan.vue'

import Tagihan from '../views/tagihan/Index.vue'

import Catat from '../views/petugas/Catat.vue'
import Profilepetugas from '../views/petugas/Profile.vue'
import Petugas from '../views/petugas/Index.vue'
import Bayar from '../views/petugas/Bayar.vue'

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
      {
        path: 'createinformasi',
        name: 'CreateInfromasi',
        component: CreateInfromasi
      },
      {
        path: 'tagihanpelanggan',
        name: 'Tagihanpelanggan',
        component: Tagihanpelanggan
      },
      {
        path: 'transaksipelanggan',
        name: 'Transaksipelanggan',
        component: Transaksipelanggan
      },
      {
        path: 'profilepelanggan',
        name: 'Profilepelanggan',
        component: Profilepelanggan
      },
      
      {
        path: 'createpelanggan2nd',
        name: 'CreatePelanggan2nd',
        component: CreatePelanggan2nd
      },
      {
        path: 'catat',
        name: 'Catat',
        component: Catat
      },
      {
        path: 'profilepetugas',
        name: 'Profilepetugas',
        component: Profilepetugas
      },
      {
        path: 'bayar',
        name: 'Bayar',
        component: Bayar
      },
      {
        path: 'petugas',
        name: 'Petugas',
        component: Petugas
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
