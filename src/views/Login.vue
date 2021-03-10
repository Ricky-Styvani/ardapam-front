<template>
      <div class="container">
            <loading :active.sync="isLoading" 
        :color="color"
        :can-cancel="canCancel" 
        :background-color="bgc"
        :is-full-page="fullPage"></loading>
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
                                         <div v-if="error == 401" class="alert alert-danger rounded-pill p-1 text-center" role="alert">
                                    Username / password salah!
                                        </div>
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
                                        <!-- <small v-if="error == 401" class="text-danger mx-2 my-2">Username / password salah!</small> -->
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
   // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios';
export default {
       components: {
            Loading
        },
    data(){
        return{
            name:'',
            password:'',
            error:0,
            isLoading:false,
            fullPage:true,
            canCancel:false,
            bgc:'#BFBFBF',
            color:'#007BFF',
        }
    },
    methods:{
        login(){
            this.error = 0
            this.isLoading = true
            axios.post(this.$store.state.host+'/api/login',{custom_id:this.name,password:this.password})
            .then(res=>{
                window.localStorage.setItem('token',res.data.token)
                this.$store.commit('user',res.data)
                this.isLoading = false
                let level = this.$store.state.user.data.level.level
      if(level == 'admin'){
      this.$router.push('/admin/dashboard').catch(() => {});
      }else if(level == 'petugas'){
        this.$router.push('/petugas/dashboard').catch(() => {});
      }else if(level == 'pelanggan'){
        this.$router.push('/pelanggan/dashboard').catch(() => {});
      }
            }).catch(err=>{
                this.isLoading = false
                console.log({err})
                this.error = err.response.status
            })
        },
    }
}
</script>