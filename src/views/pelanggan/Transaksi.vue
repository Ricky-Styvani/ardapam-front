<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3 mt-5">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary"> Transaksi</h6>
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                           <app-datatable />
                        </div>
                    </div>
                </div>
</template>
<script>
import Datatable from '../../components/pelanggan/Datatable-transaksi'
export default {
  components:{
        'app-datatable': Datatable
  },
}
</script>