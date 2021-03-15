<template>
    <div class="container-fluid mt-5">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Pengaduan Pelanggan</h6>
                            
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                           <app-datatable />
                        </div>
                    </div>
                </div>
    
</template>
<script>
import Datatable from '../../components/Datatable'
import axios from 'axios'
export default {
    components: {
        'app-datatable': Datatable
    },
  data(){
    return{
    }
  },
  mounted(){
    this.updateData()
  },
  methods:{

        updateData(){
             axios.get(`${this.$store.state.host}/api/notif-read`,{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
            .then(()=>{
                this.$store.commit('notif',0)
            }).catch(err=>{console.log({err})})
        }
  }
}
</script>