<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Detail Pengaduan</h6>

                            <div class="d-flex">
                                <div class="ml-auto mr-4">
                                   <a type="button" class="text-primary" @click="hapus()"><i class="fas fa-trash"></i></a>
                                </div>
                            </div>
                            
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <form class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="font-weight-bold" >Nama</label>
                                        <p>{{data.user.name}}</p>
                                      </div>
                                      <div class="form-group">
                                          <label class="font-weight-bold" >Subject</label>
                                        <p>{{data.subject}}</p>
                                      </div>
                                      <div class="form-group">
                                          <label class="font-weight-bold" for="exampleFormControlTextarea1">Deskripsi</label>
                                            <p>{{data.deskripsi}}</p>
                                      </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="font-weight-bold" >Alamat</label>
                                        <p >RT. {{data.pelanggan.rt}}</p>
                                    </div>
                                        <label class="font-weight-bold" for="">Gambar</label><br>
                                        <img :src="'http://localhost:8000/images/pengaduan/'+data.gambar" style=" max-width: 300px;max-height: 240px;object-fit: contain;">
                                   
                                </div>
                                
                                <router-link to="/admin/pengaduan" class="btn btn-primary btn-md mt-2 ml-3">Back</router-link>
                              </form>
                        </div>
                    </div>
                </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      data:{
          user:{
              name:null,
          },
          subject:null,
          gambar:null,
          deskripsi:null,
          pelanggan:{
              rt:null
          }
      }
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
          hapus() {
      // Use sweetalert2
            this.$swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
       axios.delete('http://localhost:8000/api/pengaduan/'+this.$route.params.id,{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} }).then(res=>{
                 console.log(res.data)
                 this.$swal.fire(
      'Deleted!',
      'Your data has been deleted.',
      'success'
    ).then((result) => {
  if (result.isConfirmed) {
    this.$router.push('/admin/pengaduan')
  }})

             }).catch(err=>{
                 console.log({err})
                 this.$swal.fire(
      'Failed!',
      'Failed to delete your data',
      'error'
    )
             })
    
  }
})
      },
    getData(){
            axios.get(`http://localhost:8000/api/pengaduan/`+this.$route.params.id,{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
            .then(res=>{
                this.data = res.data
            }).catch(err=>{console.log({err})})
        }
  }
}
</script>