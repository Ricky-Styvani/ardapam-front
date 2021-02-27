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
                            <h6 class="m-0 font-weight-bold text-primary"> Bayar</h6>
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                              </form>
                            
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div>
                                        <label for="">Bulan/Tahun</label>
                                        <b-dropdown variant="transparent">
                                            <div slot="button-content"></div>
                                            <b-dropdown-item href="#">Januari/2021</b-dropdown-item>
                                            <b-dropdown-item href="#">Februari/2021</b-dropdown-item>
                                        </b-dropdown>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="float-right">
                                        <label for="">Alamat/Rt</label>
                                        <b-dropdown variant="transparent">
                                            <div slot="button-content"></div>
                                            <b-dropdown-item href="#">Dawuhan/03</b-dropdown-item>
                                            <b-dropdown-item href="#">Dawuhan/03</b-dropdown-item>
                                        </b-dropdown>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table my-2 text-center">
                                    <thead class="thead-light" style="color: black;">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Kubik</th>
                                        <th scope="col">Bayar</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(data,index) in data" :key="index">
                                        <th scope="row">{{index+=1}}</th>
                                        <td>{{data.user.name}}</td>
                                        <td>{{data.total_meter}}</td>
                                        <td>{{data.total_bayar}}</td>
                                        <td>
                                        <button type="button" @click="lunas(data.id)" class="btn btn-primary rounded-pill btn-sm">Lunas</button>
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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios'
export default {
      components: {
            Loading
        },
    data(){
        return{
            data:[],
        fullPage:true,
        canCancel:false,
        bgc:'#BFBFBF',
        color:'#007BFF',
        isLoading:false,
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        getData(){
            this.isLoading = true
            axios.get('http://localhost:8000/api/transaction',{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
            .then(res=>{
                this.data = res.data
                this.isLoading = false
            }).catch(err=>{
                this.isLoading = false
                console.log({err})
            })
        },
        lunas(id){
            this.isLoading = true
            axios.patch('http://localhost:8000/api/transaction/'+id,{id},{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
            .then(res=>{
                this.isLoading = false
                this.data = res.data
                 this.$swal.fire(
            'Success!',
            'Your data has been processed!.',
            'success'
            )
            }).catch(err=>{
                this.isLoading = false
                console.log({err})
            })
        },
    }
}
</script>