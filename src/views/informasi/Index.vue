<template>
    <div class="container-fluid">
         <loading :active.sync="isLoading" 
        :color="color"
        :can-cancel="canCancel" 
        :background-color="bgc"
        :is-full-page="fullPage"></loading>
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Informasi</h6>
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" v-model="search" type="text" placeholder="Search" aria-label="Search">
                                <button class="btn btn-primary my-2 my-sm-0" @click="searchData()" type="button">Search</button>
                              </form>
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <router-link to="/admin/createinformasi" class="btn btn-primary"><i  class="fas fa-plus fa-xs" ></i> Informasi</router-link>
                            <table class="table my-2">
                                <thead class="thead-light" style="color: black;">
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Judul</th>
                                    <th scope="col">Deskripsi</th>
                                    <th scope="col">gambar</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(data,index) in informations" :key="index">
                                    <th scope="row">{{index+=1}}</th>
                                    <td>{{data.judul}}</td>
                                    <td style="max-width:30vw;word-wrap: break-word;">{{data.deskripsi}}</td>
                                    <td><img style="max-width:100px; max-height:100px;" :src="'http://localhost:8000/images/informasi/'+data.gambar" alt=""></td>
                                    <td>
                                        <router-link :to="'/admin/updateinformasi/'+data.id" class="btn btn-primary btn-sm mx-1"><i class="fas fa-edit"></i></router-link>
                                        <!-- <a @click.prevent="deleteData(data.id)" class="btn btn-danger btn-sm mx-1"><i class="fas fa-trash"></i></a> -->
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                        </div>
                    </div>
                </div>
</template>
<script>
import axios from 'axios'
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  components: {
            Loading
        },
  data(){
    return{
      informations:[],
      isLoading:false,
      fullPage:true,
      canCancel:false,
      bgc:'#BFBFBF',
      color:'#007BFF',
      search:''
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    searchData(){
      this.isLoading = true
      axios.get('http://localhost:8000/api/information/search/'+this.search,{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} }).then(res=>{
                this.informations = res.data
                this.isLoading = false
             }).catch(err=>{
                 console.log({err})
                 this.isLoading = false
             })
    },
    deleteData(id){
      this.isLoading = true
       axios.delete('http://localhost:8000/api/information/'+id,{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} }).then(res=>{
                 this.informations = res.data
                 this.isLoading = false
             }).catch(err=>{
                 console.log({err})
                 this.isLoading = false
             })
    },
    getData(){
      axios.get('http://localhost:8000/api/information',{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} }).then(res=>{
                 this.informations = res.data.data
             }).catch(err=>{
                 console.log({err})
             })
    }
  }
}
</script>