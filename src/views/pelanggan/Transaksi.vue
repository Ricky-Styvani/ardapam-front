<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary"> Transaksi</h6>
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                              </form>
                            
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            
                            <div class="table-responsive">
                                <table class="table my-2 text-center">
                                    <thead class="thead-light" style="color: black;">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Bulan/Tahun</th>
                                        <th scope="col">Kubik</th>
                                        <th scope="col">Bayar</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(data,index) in data" :key="index">
                                    <th scope="row">{{index+=1}}</th>
                                    <td class="text-center">{{data.user.name}}</td>
                                    <td class="text-center">{{data.total_meter}}</td>
                                    <td class="text-center">{{data.total_bayar}}</td>
                                    <td class="text-center">
                                        <router-link :to="'/pelanggan/detail-transaksi/'+data.id" class="btn btn-success btn-sm"><i class="fas fa-info fa-xs"> </i> info</router-link>
                                    </td>
                                  </tr>
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                        <div class="text-center">
                                    <div class="ml-4 mt-2">
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination">
                                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                        </div>
                    </div>
                </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            data:null,
            id:this.$store.state.user.data.id
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        getData(){
            axios.get(`http://localhost:8000/api/transaksi-pelanggan/${this.id}`,{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
            .then(res=>{
                this.data = res.data
            }).catch(err=>{console.log({err})})
        }
    }
}
</script>