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
                                    <form class="user">
                                        <div class="form-group">
                                            <label for="">Username</label>
                                            <input type="text" class="form-control form-control-user"
                                                v-model="name" aria-describedby="emailHelp"
                                                placeholder="Enter Your Name...">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Password</label>
                                            <input type="password" class="form-control form-control-user"
                                                v-model="password" placeholder="Password">
                                        </div>
                                        <div class="form-group text-center">
                                        <button type="button" class="btn btn-primary" @click="login()">Masuk</button>
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
            password:''
        }
    },
    methods:{
        login(){
            axios.post('http://localhost:8000/api/login',{name:this.name,password:this.password})
            .then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log({err})
            })
        }
    }
}
</script>