<template>
    <div class="container-fluid">
      
                    <chart></chart>
                    <div class="card shadow mb-4 my-2 mt-5 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Laporan Pelanggan</h6>
                            
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            
                            <div class="table-responsive">
                                <table class="table my-2">
                                <thead class="thead-light" style="color: black;">
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" class="text-center">Nama</th>
                                    <th scope="col" class="text-center">Total Kubik</th>
                                    <th scope="col" class="text-center">Total Bayar</th>
                                    <th scope="col" class="text-center">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(data,index) in data" :key="index">
                                    <th scope="row">{{index+=1}}</th>
                                    <td class="text-center">{{data.user.name}}</td>
                                    <td class="text-center">{{data.total_meter}}</td>
                                    <td class="text-center">{{data.total_bayar}}</td>
                                    <td class="text-center">
                                        <router-link :to="'/admin/detail-laporan/'+data.id" class="btn btn-success btn-sm"><i class="fas fa-info fa-xs"> </i> info</router-link>
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
import chart from "../../components/Chart.vue";
export default {
  data(){
    return{
      data:[]
    }
  },
  components:{
    chart
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
      axios.get('http://localhost:8000/api/laporan',{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
      .then(res=>{
        this.data = res.data
      }).catch(err=>{
        console.log({err})
      })
    },
  }
}
</script>