<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Profil Petugas</h6>
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <div class="row">
                            <form class="col-md-8">
                                <div class="form-group">
                                  <label >Nama</label>
                                  <input type="text" class="form-control" :value="form.name" readonly >
                                </div>
                                <div class="form-group">
                                    <label >No Telepon</label>
                                    <input type="text" class="form-control" v-model="form.telephone">
                                </div>
                                <div class="form-group">
                                  
                                    <label for="password">Password</label>
                        <div class="d-flex">
                        <input :type="passwordField" id="password" name="password" v-model="form.password" class="form-control" data-toggle="password">
                        <button type= "button" class="btn btn-primary btn-sm" @click="showPassword"><v-icon :name="icon"></v-icon></button>
                        </div> 
                                    <small>jika password tidak diisi, maka password tidak akan di ubah</small>
                                </div>
                              
                                <div class="d-flex">
                                    <div class="ml-auto">
                                        <a href="" class="btn btn-secondary btn-md mt-2">Back</a>
                                        <button type="button" @click="update()" class="btn btn-primary btn-md mt-2 ml-2" >Update</button>
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
                name:null,
                telephone:null,
                password:null
            },
        passwordField: 'password',
        icon: 'eye-slash',
            id:this.$store.state.user.data.id
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        showPassword() {
            
            if(this.passwordField == 'password') {
                this.passwordField = 'text'
                this.icon = 'eye'
            } else {
                this.passwordField = 'password'
                this.icon = 'eye-slash'
            }
            
            
        },
        getData(){
            axios.get(`${this.$store.state.host}/api/showuser/${this.id}`,{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
            .then(res=>{
                this.form.name = res.data.name
                this.form.telephone = res.data.telephone
            }).catch(err=>{console.log({err})})
        },
        update(){
            let data = {}
            if(this.form.password == null || this.form.password.length < 1){
                data = {telephone:this.form.telephone}
            }else{
                data = {telephone:this.form.telephone,password:this.form.password}
            }
            axios.patch(`${this.$store.state.host}/api/updateuser/${this.id}`,data,{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
            .then(()=>{
                this.$swal.fire(
            'Success!',
            'profile updated!.',
            'success'
            )
            }).catch(err=>{console.log({err})})
        }
    }
}
</script>