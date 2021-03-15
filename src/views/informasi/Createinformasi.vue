<template>
  <div class="container-fluid">
    <loading :active.sync="isLoading" :color="color" :can-cancel="canCancel" :background-color="bgc" :is-full-page="fullPage"></loading>
    <div class="card shadow mb-4 my-2 mx-3">
      <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text-primary">
          <router-link to="/admin/informasi" class="text-Primary"> <i class="fas fa-arrow-left"></i></router-link> Form Informasi
        </h6>
      </div>
      <div class="card-body">
        <div class="row">
          <form class="col-md-8" @submit.prevent="submit()">
            <div v-if="success" class="alert alert-success rounded-pill p-1 text-center" role="alert">
              user berhasil ditambah!
            </div>
            <div v-if="failed" class="alert alert-danger rounded-pill p-1 text-center" role="alert">
              user gagal ditambah!
            </div>
            <div class="form-group">
              <label>Judul</label>
              <input required type="text" v-model="form.judul" class="form-control" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Deskripsi</label>
              <textarea required class="form-control" v-model="form.deskripsi" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <div class="form-group ">
              <label>Image</label>
              <input required type="file" @change="imagehandle($event)" class="form-control-file" accept="image/*" />
            </div>
            <div class="d-flex">
              <div class="ml-auto">
                <button type="submit" class="btn btn-primary btn-md mt-2 ml-2 mr-2">Create</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      form: {
        judul: null,
        deskripsi: null,
        gambar: null,
      },
      success: false,
      failed: false,
      isLoading: false,
      fullPage: true,
      canCancel: false,
      bgc: "#BFBFBF",
      color: "#007BFF",
    };
  },
  methods: {
    imagehandle(event) {
      let file = event.target.files[0];
      if (file.type == "image/jpeg" || file.type == "image/jpg" || file.type == "image/png") {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (e) => {
          this.form.gambar = e.target.result;
        };
      } else {
        alert("exstensi file tidak valid!");
        this.form.gambar = "";
      }
    },
    submit() {
      this.isLoading = true;
      this.failed = false;
      this.success = false;
      axios
        .post(this.$store.state.host + "/api/information", { gambar: this.form.gambar, judul: this.form.judul, deskripsi: this.form.deskripsi }, { headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` } })
        .then(() => {
          this.isLoading = false;
          this.success = true;
          this.form = {
            judul: null,
            deskripsi: null,
            gambar: null,
          };
        })
        .catch((err) => {
          this.isLoading = false;
          console.log({ err });
          this.failed = false;
        });
    },
  },
};
</script>
