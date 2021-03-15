<template>
  <div class="container-fluid">
    <div class="card shadow mb-4 my-2 mx-3">
      <loading :active.sync="isLoading" :color="color" :can-cancel="canCancel" :background-color="bgc" :is-full-page="fullPage"></loading>
      <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text-primary">
          <router-link to="/admin/informasi" class="text-Primary"> <i class="fas fa-arrow-left"></i></router-link> Update Informasi
        </h6>
        <a @click.prevent="showAlert" href="" class="mr-4"><i class="fas fa-trash "></i></a>
      </div>
      <!-- Card Body -->
      <div class="card-body">
        <div class="row">
          <form class="col-md-8" @submit.prevent="submit()">
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
              <input type="file" @change="imagehandle($event)" class="form-control-file" accept="image/*" />
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
import axios from "axios";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "updatepelanggan",
  data() {
    return {
      form: {
        judul: "",
        deskripsi: "",
        gambar: null,
      },
      isLoading: false,
      fullPage: true,
      canCancel: false,
      bgc: "#BFBFBF",
      color: "#007BFF",
    };
  },
  components: {
    Loading,
  },
  mounted() {
    this.getData();
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
        alert("kop surat harus gambar!");
        this.form.gambar = "";
      }
    },
    showAlert() {
      // Use sweetalert2
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(this.$store.state.host + "/api/information/" + this.$route.params.id, { headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` } })
              .then((res) => {
                console.log(res.data);
                this.$swal.fire("Deleted!", "Your data has been deleted.", "success").then((result) => {
                  if (result.isConfirmed) {
                    this.$router.push("/admin/informasi");
                  }
                });
              })
              .catch((err) => {
                console.log({ err });
                this.$swal.fire("Failed!", "Failed to delete your data", "error");
              });
          }
        });
    },

    getData() {
      axios
        .get(this.$store.state.host + "/api/information/" + this.$route.params.id, { headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` } })
        .then((res) => {
          this.form.judul = res.data.judul;
          this.form.deskripsi = res.data.deskripsi;
        })
        .catch((err) => {
          console.log({ err });
        });
    },

    submit() {
      this.isLoading = true;
      axios
        .patch(
          this.$store.state.host + "/api/information/" + this.$route.params.id,
          { judul: this.form.judul, deskripsi: this.form.deskripsi, gambar: this.form.gambar },
          { headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` } }
        )
        .then(() => {
          this.isLoading = false;

          this.$swal.fire("Updated!", "Your data has been updated.", "success");
          //         this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err.response.data);
          this.$swal.fire("Failed!", "failed to update", "error");
        });
    },
  },
};
</script>
