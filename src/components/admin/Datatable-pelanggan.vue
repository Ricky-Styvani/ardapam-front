<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="float-right">
          <label for="">Alamat/Rt</label>
          <b-dropdown variant="transparent">
            <b-dropdown-item v-for="i in 15" :key="i" href="#" @click="sortrt(i)">{{ i }}</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <table id="my-table" class="table table-borderless table-striped table-hover display datatable" style="">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">nama</th>
            <th scope="col">No Telp</th>
            <th scope="col">Token</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody id="list">
          <tr v-for="(data, index) in data" :key="index">
            <th scope="row">{{ (index += 1) }}</th>
            <td>{{ data.name }}</td>
            <td>{{ data.telephone }}</td>
            <td>{{ data.pelanggan.token }}</td>
            <td>
              <router-link :to="'/admin/updatepelanggan/' + data.id" class="btn btn-success btn-sm"><i class="fas fa-edit fa-xs"> </i> Edit</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
require("datatables.net-buttons-bs4")();
require("datatables.net-buttons/js/buttons.html5.js")();
require("datatables.net-buttons/js/buttons.print.js")();
import jsZip from "jszip/dist/jszip";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jsZip;
export default {
  mounted() {
    this.getData();
  },
  name: "Table",
  data() {
    return {
      data: [],
    };
  },
  methods: {
    sortrt(data) {
      axios
        .get(`${this.$store.state.host}/api/getPelanggan/${data}`, { headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` } })
        .then((res) => {
          $("#my-table")
            .DataTable()
            .destroy();
          this.data = res.data;
          this.tabla();
        })
        .catch((err) => {
          console.log({ err });
        });
    },
    getData() {
      axios
        .get(this.$store.state.host + "/api/getPelanggan", { headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` } })
        .then((res) => {
          this.data = res.data;
          this.tabla();
        })
        .catch((err) => {
          console.log({ err });
        });
    },
    tabla() {
      $(document).ready(function() {
        $("#my-table").DataTable({
          dom: "<'row'<'col-12 col-sm-12 col-md-3'l><'col-md-6 mt-4 'B><'col-md-3'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 'p>>",
          buttons: [
            {
              extend: "copyHtml5",
              text: '<i class="fas fa-copy"></i> copy',
              titleAttr: "Copiar",
              className: "btn btn-secondary btn-sm m-1",
              title: "Data Pengaduan",
              exportOptions: {
                columns: [0, 1, 2, 3],
              },
            },
            {
              extend: "excelHtml5",
              text: '<i class="fas fa-file-csv"></i> excel',
              titleAttr: "exporter excel",
              className: "btn btn-success btn-sm m-1",
              title: "Data Pelanggan",
              exportOptions: {
                columns: [0, 1, 2, 3],
              },
            },
            {
              extend: "pdfHtml5",
              text: '<i class="fas fa-file-pdf"></i> pdf',
              titleAttr: "exporter pdf",
              className: "btn btn-danger btn-sm m-1",
              title: "Data Pelanggan",
              exportOptions: {
                mcolumns: [0, 1, 2, 3],
              },
            },
            {
              extend: "print",
              text: '<i class="fas fa-print"></i> print',
              exportOptions: {
                columns: [0, 1, 2, 3],
              },
              className: "btn btn-dark btn-sm m-1",
              title: "Data Pelanggan",
              pageSize: "A4",
              autoPrint: false,
              customize: function(win) {
                $(win.document.body)
                  .css("font-size", "12pt", "height", "20%")
                  .prepend('<div class="row mt-3 ml-3 mr-3 border-bottom border-dark"  id="logo"><div class="col-6 ml-5">ARDAPAM </div><div class= "col-3 ml-auto">BUMDES Arthadawa</div></div>');
                $(win.document.body)
                  .find("#fluid")
                  .css("border-bottom", "1px");
                $(win.document.body)
                  .find("#logo")
                  .css("font-weight", "bold");
                $(win.document.body)
                  .find("h1")
                  .addClass("mt-3")
                  .css("text-align", "center");
                $(win.document.body)
                  .find("table")
                  .addClass("border border-dark")
                  .removeClass("table-borderless table-striped table-hover datatable");
                $(win.document.body)
                  .find("tbody tr")
                  .addClass("border-bottom border-dark");
                $(win.document.body)
                  .find("thead th")
                  .addClass("border-bottom border-dark");
              },
            },
          ],
        });
      });
    },
  },
};
</script>
