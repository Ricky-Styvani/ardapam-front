<template>
 <div class="table-responsive">
        <div class="row">
            <div class="col-md-6">
                <div>
                    <label for="">Bulan/Tahun</label>
                    <b-dropdown variant="transparent">
                        <b-dropdown-item href="#" v-for="data in date" @click="getbydate(data)" :key="data.index">{{data}}</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
            <div class="col-md-6">
                <div class="float-right">
                    <label for="">Alamat/Rt</label>
                    <b-dropdown variant="transparent">
                        <b-dropdown-item v-for="i in 15" :key="i" href="#" @click="sortrt(i)">{{i}}</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </div>
     <table id="my-table" class="table table-borderless table-striped table-hover display datatable" style="">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nama</th>
                <th scope="col">Awal</th>
                <th scope="col">Akhir</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody id="list" >
            <tr v-for="(data,index) in pelanggan" :key="index">
                    <th scope="row">{{index+=1}}</th>
                    <td>{{data.name}}</td>
                    <!-- catatan, untuk mengambil data didalam table , v-modelnya di kasih index sama dengan id nya, contoh: form.awal[id] nanti di button kirim tinggal ngambil data berdasarkan id -->
                    <td><input type="number" v-model="form.meter_awal[data.id]" class="btn btn-light rounded-pill"  placeholder="Masukkan awal"></td>
                    <td><input type="number" v-model="form.meter_akhir[data.id]" class="btn btn-light rounded-pill"  placeholder="Masukkan akhir"></td>
                    
                    <td>
                    <button @click.prevent="kirim(data.id)" class="btn btn-success rounded-pill btn-sm">Kirim</button>
                    </td>
            </tr>
        </tbody>
    </table>
 </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery';
require( 'datatables.net-buttons-bs4' )();
require( 'datatables.net-buttons/js/buttons.html5.js' )();
require( 'datatables.net-buttons/js/buttons.print.js' )();
import jsZip from 'jszip/dist/jszip'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jsZip
export default {
    data(){
        return{
            form:{
                meter_awal:[],
                meter_akhir:[]
            },
            pelanggan:[],
            date:[],
            fullPage:true,
        canCancel:false,
        bgc:'#BFBFBF',
        color:'#007BFF',
        isLoading:false,
        }
    },
    mounted(){
        this.getdata();
        this.getDate();
    },
    methods:{
        tabla(){
          $(document).ready(function() {
         $("#my-table").DataTable({
             dom: "<'row'<'col-12 col-sm-12 col-md-3'l><'col-md-6 mt-4 'B><'col-md-3'f>>" +
                    "<'row'<'col-sm-12'tr>>" +
                    "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 'p>>",

        buttons:[
             {
                "extend": "copyHtml5",
                "text": '<i class="fas fa-copy"></i> copy',
                "titleAttr" : "Copiar",
                "className" : "btn btn-secondary btn-sm m-1",
                "title": "Data Pengaduan",
                exportOptions: {
                    columns: [ 0, 1, 2,3]
                },
            },
             {
                "extend": "excelHtml5",
                "text": '<i class="fas fa-file-csv"></i> excel',
                "titleAttr" : "exporter excel",
                "className" : "btn btn-success btn-sm m-1",
                "title": "Data Karyawan",
                exportOptions: {
                    columns: [ 0, 1, 2,3]
                },
            } ,
            {
            "extend": "pdfHtml5",
                text: '<i class="fas fa-file-pdf"></i> pdf',
                "titleAttr" : "exporter pdf",
                "className" : "btn btn-danger btn-sm m-1",
                "title": "Data Karyawan",
            exportOptions: {
                mcolumns: [ 0, 1, 2,3]
            }
        },
            {
                "extend": "print",
                "text": '<i class="fas fa-print"></i> print',
                 exportOptions: {
                    columns: [ 0, 1, 2,3]
                },
                "className" : "btn btn-dark btn-sm m-1",
                "title": "Data Karyawan",
                 pageSize: 'A4',
                 autoPrint: false,
                customize: function ( win ) {
                    $(win.document.body)
                        .css( 'font-size', '12pt' ,
                            'height', '20%')
                        .prepend(
                            '<div class="row mt-3 ml-3 mr-3 border-bottom border-dark"  id="logo"><div class="col-6 ml-5">ARDAPAM </div><div class= "col-3 ml-auto">BUMDES Arthadawa</div></div>'
                        );
                     $(win.document.body).find( '#fluid' )
                        .css( 'border-bottom','1px');

                    $(win.document.body).find( '#logo' )
                        .css( 'font-weight', 'bold');

                    $(win.document.body).find( 'h1' )
                         .addClass( 'mt-3' )
                         .css( 'text-align', 'center');

                    $(win.document.body).find( 'table' )
                         .addClass( 'border border-dark' )
                         .removeClass('table-borderless table-striped table-hover datatable')
                     $(win.document.body).find( 'tbody tr' )
                        .addClass( 'border-bottom border-dark' )
                     $(win.document.body).find( 'thead th' )
                        .addClass( 'border-bottom border-dark' )
                    
                }     
            } ,
            
        ],
         });
        });
        },
    getbydate(data){
        axios.get(`http://localhost:8000/api/tagihan-dateCD/${data}`,{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
            .then(res=>{
                $('#my-table').DataTable().destroy();
                this.pelanggan = res.data
                this.tabla()
            }).catch(err=>{console.log({err})})
    },
        sortrt(data){
            axios.get(`http://localhost:8000/api/tagihan-rtCD/${data}`,{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
                .then(res=>{
                    $('#my-table').DataTable().destroy();
                    this.pelanggan = res.data
                    this.tabla()
                }).catch(err=>{console.log({err})})
        },
        getDate(){
            axios.get(`http://localhost:8000/api/tagihan-getDateCD`,{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
                .then(res=>{
                    this.date = res.data
                }).catch(err=>{console.log({err})})
        },

        getdata(){
            axios.get('http://localhost:8000/api/getPelanggan',{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} })
        .then(res=>{
            this.pelanggan = res.data
            this.tabla()
          for(let i = 0; i < res.data.length; i++ ){
              this.form.meter_awal[res.data[i].id] = res.data[i].pelanggan.meter_awal
              this.form.meter_akhir[res.data[i].id] = res.data[i].pelanggan.meter_akhir
          }
          }).catch(err=>{
              console.log({err})})
        },
        kirim(id){
            this.isLoading = true
            axios.post('http://localhost:8000/api/catat/'+id,{meter_awal:this.form.meter_awal[id],meter_akhir:this.form.meter_akhir[id]},{ headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`} })
        .then((res)=>{
            console.log(res.data)
            this.isLoading = false
            this.getdata()
        this.$swal.fire(
        'Success!',
        'Your data has been processed!.',
        'success'
        )
        }).catch(err=>{
            this.isLoading = false
            console.log({err})})
        }
    }
}

</script>