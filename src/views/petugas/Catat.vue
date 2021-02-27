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
                            <h6 class="m-0 font-weight-bold text-primary"> Laporan</h6>
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
                                        <th scope="col">Awal</th>
                                        <th scope="col">Akhir</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(data,index) in pelanggan" :key="index">
                                        <th scope="row">{{index+=1}}</th>
                                        <td>{{data.name}}</td>
                                        <!-- catatan, untuk mengambil data didalam table , v-modelnya di kasih index sama dengan id nya, contoh: form.awal[id] nanti di button kirim tinggal ngambil data berdasarkan id -->
                                        <td><input type="number" v-model="form.meter_awal[data.id]" class="btn btn-light rounded-pill"  placeholder="Masukkan awal"></td>
                                        <td><input type="number" v-model="form.meter_akhir[data.id]" class="btn btn-light rounded-pill"  placeholder="Masukkan akhir"></td>
                                        
                                        <td>
                                        <button @click.prevent="kirim(data.id)" class="btn btn-success rounded-pill btn-sm">Kirim</button>
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
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios'
export default {
      components: {
            Loading
        },
    data(){
        return{
            form:{
                meter_awal:[],
                meter_akhir:[]
            },
            pelanggan:[],
            fullPage:true,
        canCancel:false,
        bgc:'#BFBFBF',
        color:'#007BFF',
        isLoading:false,
        }
    },
    mounted(){
        this.getdata()
    },
    methods:{
        getdata(){
            axios.get('http://localhost:8000/api/getPelanggan',{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} })
        .then(res=>{
            this.pelanggan = res.data
          for(let i = 0; i < res.data.length; i++ ){
              this.form.meter_awal[res.data[i].id] = res.data[i].pelanggan.meter_awal
              this.form.meter_akhir[res.data[i].id] = res.data[i].pelanggan.meter_akhir
          }
          }).catch(err=>{
              console.log({err})})
        },
        kirim(id){
            this.isLoading = true
            axios.post('http://localhost:8000/api/catat/'+id,{meter_awal:this.form.meter_awal[id],meter_akhir:this.form.meter_akhir[id]},{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} })
        .then(()=>{
            this.isLoading = false
            this.getdata()
        this.$swal.fire(
        'Success!',
        'Your data has been processed!.',
        'success'
        )
        }).catch(err=>{
            this.isLoading = false
            console.log({err})})
        }
    }
}
</script>
