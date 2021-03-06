<template>
 <div class="table-responsive">
     <table id="my-table" class="table table-borderless table-striped table-hover display datatable" style="">
        <thead>
                        <tr >
                            <th>#</th>
                            <th>Nama</th>
                            <th>Subject</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="list" >
                         <tr v-for="(data,index) in data" :key="index">
                                    <th scope="row">{{index+=1}}</th>
                                    <td>{{data.user.name}}</td>
                                    <td>{{data.subject}}</td>
                                    <td>
                                        <router-link :to="'/admin/pengaduan/'+data.id" class="btn btn-success btn-sm">Detail</router-link>
                                    </td>
                                  </tr>
                    </tbody>
    </table>
 </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery';
// import dt from 'datatables.net-bs4';
require( 'datatables.net-buttons-bs4' )();
require( 'datatables.net-buttons/js/buttons.html5.js' )();
require( 'datatables.net-buttons/js/buttons.print.js' )();
import jsZip from 'jszip/dist/jszip'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jsZip
// import Icon from 'vue-awesome/components/Icon';
export default {
mounted(){
    this.getData();
    
}, 
   name: "Table",
data(){
    return{
        data :[],
    }
},

methods:{
    tabla(){
          $(document).ready(function() {
         $("#my-table").DataTable({
            "scrollY": 250,
             dom: "<'row'<'col-md-8 offset-md-3'B>>"+ "<'row'<'col-12 col-sm-12 col-md-8'l><'col-6 col-md-3'f>>" +
                    "<'row'<'col-sm-12'tr>>" +
                    "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 'p>>",

        buttons:[
             {
                "extend": "copyHtml5",
                "text": 'copy',
                "titleAttr" : "Copiar",
                "className" : "btn btn-secondary btn-sm m-1",
                "title": "Data Pengaduan",
                exportOptions: {
                    columns: [ 0, 1, 2, 3 ]
                },
            },
             {
                "extend": "excelHtml5",
                "text": '<i class="fas fa-file-excel-o"></i> excel',
                "titleAttr" : "exporter excel",
                "className" : "btn btn-success btn-sm m-1",
                "title": "Data Karyawan",
                exportOptions: {
                    columns: [ 0, 1, 2, 3 ]
                },
            } ,
            {
                "extend": "print",
                "text": "print",
                 exportOptions: {
                    columns: [ 0, 1, 2, 3 ]
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
    getData() {
        axios.get(`http://localhost:8000/api/pengaduan`,{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
            .then(res=>{
                this.data = res.data
                this.tabla()
            }).catch(err=>{console.log({err})})
        // let response= await axios.get('http://127.0.0.1:8000/api/data')
        //         if(response.status==200) {
        //             this.data = response.data.data
        //             this.tabla()
        //         }
        //         else if(response.status ==500){
        //             console.log(response.data)
        //         }
    }

}
}
</script>

<style>

</style>