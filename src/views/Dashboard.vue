<template>
    <div class="container-fluid">
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
                        <chartpelanggan></chartpelanggan>
                        <b-button v-b-modal.modal-1 class="rounded-circle" variant="primary" style=" position: fixed; right:20px; bottom:20px;"><i class="fab fa-whatsapp fa-3x"></i></b-button>

                            <b-modal id="modal-1" title="Pengaduan">
                              <div class="form-group">
                                <label for="">Nama</label>
                                <input type="text" class="form-control">
                              </div>
                              <div class="form-group">
                                <label for="">Judul</label>
                                <input type="text" class="form-control">
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlTextarea1">Deskripsi</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                              </div>
                              <div class="form-group">
                                <label for="">Alamat</label>
                                <input type="text" class="form-control">
                              </div>
                            </b-modal>
                    </div>
                        </div>
                    </div>
                </div>
    
</template>
<script>

import chart from "../components/Chart.vue";
import chartpelanggan from "../components/Chartpelanggan.vue";
export default {
    components:{
        chart,
        chartpelanggan
    },
}
</script>