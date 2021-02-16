<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Form Karyawan</h6>
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <div class="row">
                            <form class="col-md-8" @submit.prevent="register()">
                                <div class="form-group">
                                  <label >ID Pelanggan</label>
                                  <input required v-model="form.custom_id" type="text" class="form-control" >
                                </div>
                                <div class="form-group">
                                    <label >Nama</label>
                                    <input required v-model="form.name" type="text" class="form-control" >
                                </div>
                                <div class="form-group">
                                    <label >Password</label>
                                    <input required v-model="form.password" type="password" class="form-control" >
                                </div>
                                <div class="form-group ">
                                    <label>RT</label>
                                    <select class="form-control" @change="getselected($event)">
                                        <option value="1">RT 01</option>
                                        <option value="2">RT 02</option>
                                        <option value="3">RT 03</option>
                                        <option value="4">RT 04</option>
                                        <option value="5">RT 05</option>
                                        <option value="6">RT 06</option>
                                        <option value="7">RT 07</option>
                                        <option value="8">RT 08</option>
                                        <option value="9">RT 09</option>
                                        <option value="10">RT 10</option>
                                        <option value="11">RT 11</option>
                                        <option value="12">RT 12</option>
                                        <option value="13">RT 13</option>
                                        <option value="14">RT 14</option>
                                        <option value="15">RT 15</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label >No Telp</label>
                                    <input required v-model="form.telephone" type="number" class="form-control" >
                                </div>
                                <div class="form-group">
                                    <label >Token</label>
                                    <input required v-model="form.token" type="text" class="form-control" >
                                </div>
                                <div v-if="success" class="alert alert-success rounded-pill p-1 text-center" role="alert">
                                    user berhasil ditambah!
                                        </div>
                                <div v-if="failed" class="alert alert-danger rounded-pill p-1 text-center" role="alert">
                                    user gagal ditambah!
                                        </div>
                                <div class="d-flex">
                                    <div class="ml-auto">
                                    <a href="" class="btn btn-secondary btn-md mt-2">Back</a>
                                    <button type="submit" class="btn btn-primary btn-md  mx-2 mt-2" >Create</button>
                                </div>
                                </div>
                              </form>
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
        form:{
            custom_id:null,
            name:null,
            password:null,
            rt:1,
            telephone:null,
            token:null
        },
        success:false,
        failed:false,
        isLoading:false
        }
    },
    methods:{
        getselected(data){
            this.rt = data.target.value
        },
        register(){
            this.success = false
            this.failed = false
            if(this.IsLoading == true){
                return 
            }
            this.isLoading = true
            axios.post('http://localhost:8000/api/register',
            {token:this.form.token,custom_id:this.form.custom_id,name:this.form.name,password:this.form.password,rt:this.form.rt,telephone:this.form.telephone}, 
            {headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`}})
            .then(res=>{
                console.log(res.data)
                this.success = true
                this.isLoading = false
            }).catch(err=>{
                console.log({err})
                this.isLoading = false
                this.failed = true
            })
        }
    }
}
</script>