<template>
    <div class="container-fluid mt-5">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Dashboard</h6>
                            
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                    
                    <div v-if="this.$store.state.user.data.level.level != 'pelanggan'">
                    <chart></chart>
                    </div>
                    <div v-else>
                        <chartpelanggan></chartpelanggan><br>
                        <informasi></informasi>
                        <b-button v-b-modal.modal-1 class="rounded-circle" variant="primary" style=" position: fixed; right:20px; bottom:20px;"><i class="fab fa-whatsapp fa-3x"></i></b-button>

                            <b-modal id="modal-1"  ref="modal"  title="Pengaduan" ok-title="Submit" @ok="clicksubmit">
                            <form class="col-md-8" @submit.prevent="submit()">
                              <div class="form-group">
                                <label for="">Subject</label>
                                <input v-model="form.subject" required type="text" class="form-control">
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlTextarea1">Deskripsi</label>
                                <textarea v-model="form.deskripsi" required class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                              </div>
                              <div class="form-group">
                                <label for="">Gambar</label>
                                 <input required type="file" @change="imagehandle($event)" class="form-control-file" accept="image/*">
                              </div>
                              <button type="submit" style="display:none" ref="submit">kirim</button>
                            </form>
                            </b-modal>
                    </div>
                    <div v-if="this.$store.state.user.data.level.level == 'admin'" class="row">
                      <div class="col-4">
                      <div class="card m-3">
                        <div class="card-body">
                          <h5 class="card-title">Total Pelanggan</h5>
                          <p class="card-text">{{total_pelanggan}}</p>
                        </div>
                        </div>
                      </div>
                      <div class=" col-4">
                      <div class="card m-3">
                        <div class="card-body">
                          <h5 class="card-title">Total Kubik</h5>
                          <p class="card-text">{{total_kubik}}</p>
                        </div>
                        </div>
                      </div>
                      <div class=" col-4">
                      <div class="card m-3">
                        <div class="card-body">
                          <h5 class="card-title">Total pendapatan</h5>
                          <p class="card-text">{{total_pendapatan}}</p>
                        </div>
                        </div>
                      </div>
                    </div>
                        </div>
                    </div>
                </div>
    
</template>
<script>
import axios from 'axios'
import chart from "../components/Chart.vue";
import chartpelanggan from "../components/Chartpelanggan.vue";
import informasi from "../components/informasiPelanggan.vue";
export default {
    components:{
        chart,
        chartpelanggan,
        informasi
    },
    data(){
      return{
        form:{
          subject:'',
          deskripsi:'',
          gambar:''
        },
        total_pelanggan:0,
        total_kubik:0,
        total_pendapatan:0
      }
    },
    mounted(){
      this.totalpelanggan()
      this.pendapatankubik()
    },
 methods:{
   totalpelanggan(){
     axios.get(this.$store.state.host+'/api/totalpelanggan',{headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`}})
            .then((res)=>{
               this.total_pelanggan = res.data
            })
   },
   pendapatankubik(){
     axios.get(this.$store.state.host+'/api/pendapatankubik',{headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`}})
            .then((res)=>{
               console.log(res)
               this.total_kubik = res.data.kubik
               this.total_pendapatan = res.data.pendapatan
            })
   },
        clicksubmit(bvModalEvt){
          bvModalEvt.preventDefault()
          this.$refs.submit.click()
        },
        imagehandle(event){
            let file = event.target.files[0]
            if(file.type=='image/jpeg' || file.type=='image/jpg'|| file.type=='image/png'){
                let fileReader = new FileReader()
                fileReader.readAsDataURL(file)
                fileReader.onload = (e) =>{
                    this.form.gambar = e.target.result 
                }
            }else{
                alert('gambar tidak valid!')
                this.form.gambar = ''

            }
        },
        submit(){
            this.isLoading = true
            this.failed = false
            this.success = false
            axios.post(this.$store.state.host+'/api/pengaduan',{user_id:this.$store.state.user.data.id,gambar:this.form.gambar,subject:this.form.subject,deskripsi:this.form.deskripsi},{headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`}})
            .then(()=>{
                this.form = {
                subject:null,
                deskripsi:null,
                gambar:null
            }
            this.$refs["modal"].hide();
            this.$swal.fire(
      'Terkirim!',
      'Pengaduan anda telah kami terima.',
      'success'
    )
            }).catch(err=>{
                console.log({err})
                this.$swal.fire(
      'Failed!',
      'Pengaduan gagal dikirm, mohon coba lagi nanti.',
      'error'
    )
            })
        }
    }
}
</script>