<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Pengaduan Pelanggan</h6>
                            
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table my-2">
                                <thead class="thead-light" style="color: black;">
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(data,index) in data" :key="index">
                                    <th scope="row">{{index+=1}}</th>
                                    <td>{{data.user.name}}</td>
                                    <td>{{data.subject}}</td>
                                    <td>
                                        <router-link :to="'/admin/pengaduan/'+data.id" class="btn btn-success btn-sm">Detail</router-link>
                                    </td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
    
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      data:[]
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
            axios.get(`http://localhost:8000/api/pengaduan`,{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
            .then(res=>{
                this.data = res.data
            }).catch(err=>{console.log({err})})
        }
  }
}
</script>