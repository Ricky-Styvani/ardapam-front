<template>
  <div class="container-fluid mt-5">
    <div class="card shadow mb-4 my-2 mx-3">
      <loading :active.sync="isLoading" :color="color" :can-cancel="canCancel" :background-color="bgc" :is-full-page="fullPage"></loading>
      <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text-primary">
          <router-link to="/admin/petugas" class="text-Primary"> <i class="fas fa-arrow-left"></i></router-link> Form petugas
        </h6>
        <a @click.prevent="showAlert" href="" class="mr-4"><i class="fas fa-trash "></i></a>
      </div>
      <!-- Card Body -->
      <div class="card-body">
        <div class="row">
          <form class="col-md-8" @submit.prevent="submit()">
            <div class="form-group">
              <label>ID petugas</label>
              <input disabled type="text" class="form-control" :value="form.custom_id" />
            </div>
            <div class="form-group">
              <label>Nama</label>
              <input required type="text" class="form-control" v-model="form.name" />
            </div>
            <div class="form-group ">
              <label>Level</label>
              <select class="form-control" @change="getselected($event)">
                <option v-for="level in levels" :selected="form.level == level.id ? true : false" :key="level.id" :value="level.id">{{ level.level }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>No Telp</label>
              <input required type="number" class="form-control" v-model="form.telephone" />
            </div>
            <div class="d-flex">
              <div class="ml-auto">
                <button type="submit" class="btn btn-primary btn-md mt-2 ml-2">Update</button>
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
  name: "updatepetugas",
  data() {
    return {
      form: {
        custom_id: "",
        name: "",
        level: "",
        telephone: "",
      },
      levels: [],
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
    this.getLevel();
  },
  methods: {
    getLevel() {
      axios
        .get(this.$store.state.host + "/api/level", { headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` } })
        .then((res) => {
          this.levels = res.data;
        })
        .catch((err) => {
          console.log({ err });
        });
    },
    getselected(data) {
      this.form.level = data.target.value;
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
              .delete(this.$store.state.host + "/api/deleteuser/" + this.$route.params.id, { headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` } })
              .then((res) => {
                console.log(res.data);
                this.$swal.fire("Deleted!", "Your data has been deleted.", "success").then((result) => {
                  if (result.isConfirmed) {
                    this.$router.push("/admin/petugas");
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
        .get(this.$store.state.host + "/api/showuser/" + this.$route.params.id, { headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` } })
        .then((res) => {
          this.form.name = res.data.name;
          this.form.custom_id = res.data.custom_id;
          this.form.level = res.data.level_id;
          this.form.telephone = res.data.telephone;
        })
        .catch((err) => {
          console.log({ err });
        });
    },

    submit() {
      this.isLoading = true;
      axios
        .patch(
          this.$store.state.host + "/api/updateuser/" + this.$route.params.id,
          { custom_id: this.form.custom_id, name: this.form.name, level_id: this.form.level, telephone: this.form.telephone },
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
