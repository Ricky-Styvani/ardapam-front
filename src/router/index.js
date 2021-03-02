import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import store from '../store'
import Login from '../views/Login.vue'

import Dashboard from '../views/Dashboard.vue'

import Informasi from '../views/informasi/Index.vue'
import CreateInfromasi from '../views/informasi/Createinformasi.vue'
import UpdateInfromasi from '../views/informasi/Update.vue'

import Karyawan from '../views/karyawan/Index.vue'
import CreateKaryawan from '../views/karyawan/Create.vue'
import UpdateKaryawan from '../views/karyawan/Update.vue'

import Pelanggan from '../views/pelanggan/Index.vue'
import CreatePelanggan from '../views/pelanggan/Create.vue'
import CreatePelanggan2nd from '../views/pelanggan/Create2nd.vue'
import UpdatePelanggan from '../views/pelanggan/Update.vue'
import Profilepelanggan from '../views/pelanggan/Profile.vue'
import Tagihanpelanggan from '../views/pelanggan/Tagihan.vue'
import Detailtagihanpelanggan from '../views/pelanggan/Detailtagihanpelanggan.vue'
import Detailtransaksipelanggan from '../views/pelanggan/Detailtransaksipelanggan.vue'
import Transaksipelanggan from '../views/pelanggan/Transaksi.vue'

import DetailPengaduan from '../views/pengaduan/Detail.vue'
import PengaduanPelanggan from '../views/pengaduan/PengaduanPelanggan.vue'

import Laporan from '../views/laporan/Laporan.vue'
import LaporanBulan from '../views/laporan/LaporanBulan.vue'
import DetailLaporan from '../views/laporan/DetailLaporan.vue'

import Tagihan from '../views/tagihan/Index.vue'

import Catat from '../views/petugas/Catat.vue'
import Profilepetugas from '../views/petugas/Profile.vue'
// import Petugas from '../views/petugas/Index.vue'
import Bayar from '../views/petugas/Bayar.vue'

import Template from '../components/Template.vue'
import Templatepetugas from '../components/Templatepetugas.vue'
import Templatepelanggan from '../components/Templatepelanggan.vue'

Vue.use(VueRouter)
const checktoken = (to,from,next) => {
  if(window.localStorage.getItem('token') != null){
    axios.get('http://localhost:8000/api/user',{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} }).then(res=>{
      store.commit('user',res.data)
      if(store.state.user.data.level.level == 'admin'){
      next()
      }else{
        next('/404')
      }
    }).catch(()=>{
        next('/login')
    })
  }
  else{
    next('/login')
  }
}
const checkpetugas = (to,from,next) => {
  if(window.localStorage.getItem('token') != null){
    axios.get('http://localhost:8000/api/user',{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} }).then(res=>{
      store.commit('user',res.data)
      if(store.state.user.data.level.level == 'petugas'){
      next()
      }else{
        next('/404')
      }
    }).catch(()=>{
        next('/login')
    })
  }
  else{
    next('/login')
  }
}
const checkpelanggan = (to,from,next) => {
  if(window.localStorage.getItem('token') != null){
    axios.get('http://localhost:8000/api/user',{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} }).then(res=>{
      store.commit('user',res.data)
      if(store.state.user.data.level.level == 'pelanggan'){
      next()
      }else{
        next('/404')
      }
    }).catch(()=>{
        next('/login')
    })
  }
  else{
    next('/login')
  }
}
const checkrole = (to,from,next) => {
  if(window.localStorage.getItem('token') != null){
    axios.get('http://localhost:8000/api/user',{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} }).then(res=>{
      store.commit('user',res.data)
      if(store.state.user.data.level.level == 'admin'){
      next('/admin')
      }else if(store.state.user.data.level.level == 'petugas'){
      next('/petugas')
      }else if(store.state.user.data.level.level == 'pelanggan'){
      next('/pelanggan')
      }else{
        next('/login')
      }
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
    path: '/admin',
    redirect: '/admin/dashboard',
    name: 'admin',
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
        path: 'Updateinformasi/:id',
        name: 'UpdateInfromasi',
        component: UpdateInfromasi
      },
   
      {
        path: 'pengaduan',
        name: 'PeangaduanPelanggan',
        component: PengaduanPelanggan
      },
    
      
      {
        path: 'createpelanggan2nd',
        name: 'CreatePelanggan2nd',
        component: CreatePelanggan2nd
      },
      // {
      //   path: 'catat',
      //   name: 'Catat',
      //   component: Catat
      // },
    
    
      // {
      //   path: 'petugas',
      //   name: 'Petugas',
      //   component: Petugas
      // },
      {
        path: 'updatepetugas/:id',
        name: 'Updatekaryawan',
        component: UpdateKaryawan
      },
      {
        path: 'pelanggan',
        name: 'Pelanggan',
        component: Pelanggan
      },
      {
        path: 'updatepelanggan/:id',
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
        path: 'detail-laporan/:id',
        name: 'DetailLaporan',
        component: DetailLaporan
      },
      {
        path: 'laporan/:month/:year',
        name: 'LaporanBulan',
        component: LaporanBulan
      },
      {
        path: 'createpetugas',
        name: 'Createkaryawan',
        component: CreateKaryawan
      },
      {
        path: 'pengaduan/:id',
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
        path: 'petugas',
        name: 'Karyawan',
        component: Karyawan
      },
    ]
  },   
  {
    path: '/',
    name: 'Base',
    beforeEnter: checkrole,
    component: {
      render () { return null }
    },
  },
  {
        path: '/login',
        name: 'Login',
        component: Login
  },
  {
    path: '/petugas',
    redirect: '/petugas/dashboard',
    name: 'petugas',
    component: Templatepetugas,
    beforeEnter:checkpetugas,
    beforeRouteUpdate:checkexp,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard Petugas',
        component: Dashboard
      },
      {
        path: 'catat',
        name: 'Catat',
        component: Catat
      },
      {
        path: 'bayar',
        name: 'Bayar',
        component: Bayar
      },
      {
        path: 'profile',
        name: 'Profilepetugas',
        component: Profilepetugas
      },
    ]},
  {
    path: '/pelanggan',
    redirect: '/pelanggan/dashboard',
    name: 'pelanggan',
    component: Templatepelanggan,
    beforeEnter:checkpelanggan,
    beforeRouteUpdate:checkexp,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard pelanggan',
        component: Dashboard
      },
      {
        path: 'profile',
        name: 'Profilepelanggan',
        component: Profilepelanggan
      },
      {
        path: 'tagihan',
        name: 'Tagihanpelanggan',
        component: Tagihanpelanggan
      },
      {
        path: 'transaksi',
        name: 'Transaksipelanggan',
        component: Transaksipelanggan
      },
      {
        path: 'detail-tagihan/:id',
        name: 'Detailtagihanpelanggan',
        component: Detailtagihanpelanggan
      },
      {
        path: 'detail-transaksi/:id',
        name: 'Detailtransaksipelanggan',
        component: Detailtransaksipelanggan
      },
    ]}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
