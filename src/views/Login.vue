<template>
      <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-5  col-md-4">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="p-5">
                                    <div class="text-center">
                                        <img src="../assets/account.svg" style="object-fit: contain; height:200px;width:200px;" class="px-2 py-2 mb-1 mx-1">
                                        <h4>Log in</h4>
                                    </div>
                                    <form class="user" @submit.prevent="login()">
                                        <div class="form-group">
                                            <label for="">Username</label>
                                            <input required type="text" class="form-control form-control-user"
                                                v-model="name" aria-describedby="emailHelp"
                                                placeholder="Enter Your Name...">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Password</label>
                                            <input required type="password" class="form-control form-control-user"
                                                v-model="password" placeholder="Password">
                                        <small v-if="error == 401" class="text-danger mx-2 my-2">Username / password salah!</small>
                                        <small v-if="error == 402" class="text-danger mx-2 my-2">harap isi username / password dengan benar!</small>
                                        </div>
                                        <div class="form-group text-center">
                                        <button type="submit" class="btn btn-primary">Masuk</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            name:'',
            password:'',
            error:0,
            isLoading:false
        }
    },
    methods:{
        login(){
            this.error = 0
            if(this.IsLoading == true){
                return 
            }
            this.isLoading = true
            axios.post('http://localhost:8000/api/login',{custom_id:this.name,password:this.password})
            .then(res=>{
                window.localStorage.setItem('token',res.data.token)
                this.$store.commit('user',res.data)
                this.isLoading = false
                this.$router.push('/home')
            }).catch(err=>{
                this.isLoading = false
                console.log({err})
            })
        },
    }
}
</script>