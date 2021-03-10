<template>
    <div class="container-fluid" id="tagprint">
                    <div class="card shadow mb-4 my-2 mx-3" id="print">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Transaksi</h6>
                           
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12">
                                <router-link to="/pelanggan/transaksi" class="btn btn-secondary pin"> Cancel</router-link>
                                <a href="#" @click.prevent="print()" style="float:right;"><i class="pin fas fa-print fa-lg" style="color:black;"></i></a>
                                </div>
                                
                                <div class="col-md-6 my-4">
                                    <p class="ml-2"><span >Nama :</span><span class="text-left"> {{data.user.name}}</span></p>
                                    <p class="ml-2"><span>ID Pelanggan :</span><span class="text-left"> {{data.user.custom_id}}</span></p>
                                    <p class="ml-2"><span>Alamat :</span><span class="text-left"> RT. {{data.pelanggan.rt}}</span></p>
                                    <p class="ml-2"><span>Pemakaian :</span><span class="text-left"> {{data.meter_akhir}} (Akhir) - {{data.meter_awal}} (awal) </span></p>
                                </div>
                                <div class="col-md-6 my-4">
                                    <p class="ml-2"><span>Bulan/Th :</span><span class="text-left"> {{bulantahun}}</span></p>
                                    <p class="ml-2"><span>ID Tagihan :</span><span class="text-left"> {{data.id_transaksi}}</span></p>
                                    <p class="ml-2"><span>Total :</span><span class="text-left"> {{data.total_meter}} M3</span></p>
                                </div>

                                <div class="col-md-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered my-2 text-center">
                                            <thead class="thead-light" style="color: black;">
                                            <tr>
                                                <th scope="col">Meteran</th>
                                                <th scope="col">Harga</th>
                                                <th scope="col">Total Harga</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>{{data.total_meter}}</td>
                                                <td>{{data.harga_air}}</td>
                                                <td>{{data.total_harga}}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">Harga Air</td>
                                                <td>{{data.total_harga}}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">Perawatan</td>
                                                <td>{{data.perawatan}}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">Admin</td>
                                                <td>{{data.admin}}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">Total Bayar</td>
                                                <td>{{data.total_bayar}}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            data:{
    id: null,
    id_pelanggan: null,
    id_transaksi: null,
    harga_air: null,
    meter_awal: null,
    meter_akhir: null,
    admin: null,
    perawatan: null,
    total_meter: null,
    total_harga: null,
    total_bayar: null,
    pembayaran: null,
    kode_bulan: null,
    status: null,
    user: {
        id: null,
        custom_id: null,
        name: null,
        telephone: null,
    },
    pelanggan: {
        id: null,
        user_id: null,
        rt: null,
        token: null,
        meter_awal: null,
        meter_akhir: null,
    }
}
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        print(){
            // Get HTML to print from element
const prtHtml = document.getElementById('print').innerHTML;

// Get all stylesheets HTML
let stylesHtml = '';
for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
  stylesHtml += node.outerHTML;
}

// Open the print window
const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

WinPrint.document.write(`<!DOCTYPE html>
<html>
  <head>
    ${stylesHtml}
  </head>
  <body>
    ${prtHtml}
  </body>
</html>`);

WinPrint.document.close();
WinPrint.focus();
WinPrint.print();
WinPrint.close();
        },
        getData(){
            axios.get(this.$store.state.host+'/api/transaction/'+this.$route.params.id,{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
            .then(res=>{
                this.data = res.data
            }).catch(err=>{
                console.log({err})
            })
        }
    },
    computed:{
        bulantahun(){
            var date = new Date(this.data.kode_bulan)
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            return months[date.getMonth()]+'/'+date.getFullYear()
        }
    }
}
</script>
<style scoped>
@media print {
 .pin {
  display:none !important;
  }}
</style>