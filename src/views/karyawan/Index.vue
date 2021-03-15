<template>
    <div class="container-fluid mt-5">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary"> Petugas</h6>
                        
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <router-link to="/admin/createpetugas" class="btn btn-primary"><i class="fas fa-plus fa-sm"> Petugas</i></router-link>
                           <app-datatable />
                        </div>
                    </div>
                </div>
</template>
<script>
import Datatable from '../../components/admin/Datatable-petugas'
export default {
  components:{
        'app-datatable': Datatable
  },

}
</script>