<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary"> Pelanggan</h6>
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                              </form>
                            
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <router-link to="/admin/createPelanggan" class="btn btn-primary"><i class="fas fa-plus fa-sm"> Pelanggan</i></router-link>
                            <div class="table-responsive">
                            <table class="table my-2">
                                <thead class="thead-light" style="color: black;">
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">nama</th>
                                    <th scope="col">No Telp</th>
                                    <th scope="col">Token</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(data,index) in pelanggan" :key="index"> 
                                    <th scope="row">{{index+=1}}</th>
                                    <td>{{data.name}}</td>
                                    <td>{{data.telephone}}</td>
                                    <td>{{data.pelanggan.token}}</td>
                                    <td>
                                        <router-link :to="'/admin/updatepelanggan/'+data.id" class="btn btn-success btn-sm"><i class="fas fa-edit fa-xs"> </i> Edit</router-link>
                                    </td>
                                  </tr>
                                 
                                </tbody>
                              </table>
                              </div>
                              <div class="d-flex ">
                                  <div class="ml-auto mt-2">
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
                </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      pelanggan:[]
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
      axios.get('http://localhost:8000/api/getPelanggan',{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} })
      .then(res=>{
        this.pelanggan = res.data
      }).catch(err=>{console.log({err})})
    }
  }
}
</script>