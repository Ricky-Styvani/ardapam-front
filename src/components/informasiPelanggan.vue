<template>
<table class="table my-2">
                                <thead class="thead-light" style="color: black;">
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Judul</th>
                                    <th scope="col">Deskripsi</th>
                                    <th scope="col">gambar</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(data,index) in informations" :key="index">
                                    <th scope="row">{{index+=1}}</th>
                                    <td>{{data.judul}}</td>
                                    <td style="max-width:30vw;word-wrap: break-word;">{{data.deskripsi}}</td>
                                    <td><img style="max-width:100px; max-height:100px;" :src="'http://localhost:8000/images/informasi/'+data.gambar" alt=""></td>
                                   
                                  </tr>
                                </tbody>
                              </table>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      informations:[],
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
      axios.get('http://localhost:8000/api/information',{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} }).then(res=>{
                 this.informations = res.data.data
             }).catch(err=>{
                 console.log({err})
             })
    }
  }
}
</script>