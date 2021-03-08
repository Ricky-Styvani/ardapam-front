<template>
    <div class="container-fluid">
      
                    <div class="card shadow mb-4 my-2 mt-5 mx-3">
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Laporan Pelanggan</h6>
                            
                        </div>
                        <div class="card-body">
                    <chart></chart>
                    <div class="card shadow mb-4 my-2 mt-5 mx-3">
                        <!-- Card Header - Dropdown -->
                        <!-- Card Body -->
                        <div class="card-body">
                            <app-datatable/>
                        </div>
                        </div>
                    </div>
                </div>
    </div>
    
</template>
<script>
import chart from "../../components/Chart.vue";
import Datatable from "../../components/admin/Datatable-laporan.vue";
export default {
  components:{
    chart,
    'app-datatable': Datatable
  },
}
</script>