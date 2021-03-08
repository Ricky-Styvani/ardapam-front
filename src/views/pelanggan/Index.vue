<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary"> Pelanggan</h6>
                          
                            
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <router-link to="/admin/createPelanggan" class="btn btn-primary"><i class="fas fa-plus fa-sm"> Pelanggan</i></router-link>
                            <app-datatable/>
                        </div>
                    </div>
                </div>
</template>
<script>
import Datatable from '../../components/admin/Datatable-pelanggan'
export default {
  components:{
        'app-datatable': Datatable
  },

}
</script>