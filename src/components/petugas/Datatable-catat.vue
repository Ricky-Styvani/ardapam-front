<template>
 <div class="table-responsive">
        <div class="row">
            <div class="col-md-6">
                <div>
                    <label for="">Bulan/Tahun</label>
                    <b-dropdown variant="transparent">
                        <b-dropdown-item href="#" v-for="data in date" @click="getbydate(data)" :key="data.index">{{data}}</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
            <div class="col-md-6">
                <div class="float-right">
                    <label for="">Alamat/Rt</label>
                    <b-dropdown variant="transparent">
                        <b-dropdown-item v-for="i in 15" :key="i" href="#" @click="sortrt(i)">{{i}}</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </div>
     <table id="my-table" class="table table-borderless table-striped table-hover display datatable" style="">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nama</th>
                <th scope="col">Awal</th>
                <th scope="col">Akhir</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody id="list" >
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
</template>

<script>
import axios from 'axios'
export default {
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
        .then((res)=>{
            console.log(res.data)
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