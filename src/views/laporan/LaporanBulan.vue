<template>
  <div class="container-fluid">
    <div class="card shadow mb-4 my-2 mt-5 mx-3">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text-primary">
          <router-link to="/admin/Laporan" class="text-Primary"> <i class="fas fa-arrow-left"></i></router-link> Laporan Perbulan
        </h6>
      </div>
      <!-- Card Body -->
      <div class="card-body">
        <app-datatable />
      </div>
    </div>
  </div>
</template>
<script>
import Datatable from "../../components/admin/Datatable-laporan-bulan.vue";
export default {
  components: {
    "app-datatable": Datatable,
  },
};
</script>
