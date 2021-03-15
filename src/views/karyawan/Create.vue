<template>
  <div class="container-fluid mt-5">
    <loading :active.sync="isLoading" :color="color" :can-cancel="canCancel" :background-color="bgc" :is-full-page="fullPage"></loading>
    <div class="card shadow mb-4 my-2 mx-3">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text-primary">
          <router-link to="/admin/petugas" class="text-Primary"> <i class="fas fa-arrow-left"></i></router-link> Form Petugas
        </h6>
      </div>
      <!-- Card Body -->
      <div class="card-body">
        <div class="row">
          <form class="col-md-8" @submit.prevent="register()">
            <div v-if="success" class="alert alert-success rounded-pill p-1 text-center" role="alert">
              user berhasil ditambah!
            </div>
            <div v-if="failed" class="alert alert-danger rounded-pill p-1 text-center" role="alert">
              user gagal ditambah!
            </div>
            <div class="form-group">
              <label>ID Petugas</label>
              <input disabled :value="year + '88' + id" type="text" class="form-control" />
              <small v-if="err.custom_id != null" class="text-danger">Id sudah dipakai</small>
            </div>
            <div class="form-group">
              <label>Nama</label>
              <input required v-model="form.name" type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <div class="d-flex">
                <input :type="passwordField" id="password" name="password" :value="'ardapam#' + id" disabled class="form-control" data-toggle="password" />
                <button type="button" class="btn btn-primary btn-sm" @click="showPassword"><v-icon :name="icon"></v-icon></button>
              </div>
            </div>
            <div class="form-group ">
              <label>Level</label>
              <select class="form-control" @change="getselected($event)">
                <option v-for="data in level" :key="data.id" :value="data.id">{{ data.level }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>No Telp</label>
              <input required v-model="form.telephone" type="number" class="form-control" />
            </div>

            <div class="d-flex">
              <div class="ml-auto">
                <button type="submit" class="btn btn-primary btn-md  mx-2 mt-2">Create</button>
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
        custom_id: null,
        name: null,
        password: null,
        level: 1,
        telephone: null,
      },
      err: {
        custom_id: null,
      },
      success: false,
      failed: false,
      isLoading: false,
      passwordField: "password",
      icon: "eye-slash",
      level: [],
      fullPage: true,
      canCancel: false,
      bgc: "#BFBFBF",
      color: "#007BFF",
      year: null,
      id: null,
    };
  },
  mounted() {
    this.getLevel();
    this.getId();
    this.getyear();
  },
  methods: {
    getyear() {
      var d = new Date();
      var n = d.getFullYear();
      this.year = n;
    },
    getId() {
      axios
        .get(this.$store.state.host + "/api/getuserid", { headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` } })
        .then((res) => {
          this.id = res.data.id;
        })
        .catch((err) => {
          console.log({ err });
        });
    },
    getLevel() {
      axios
        .get(this.$store.state.host + "/api/level", { headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` } })
        .then((res) => {
          this.level = res.data;
        })
        .catch((err) => {
          console.log({ err });
        });
    },
    getselected(data) {
      this.form.level = data.target.value;
    },
    showPassword() {
      if (this.passwordField == "password") {
        this.passwordField = "text";
        this.icon = "eye";
      } else {
        this.passwordField = "password";
        this.icon = "eye-slash";
      }
    },
    register() {
      this.success = false;
      this.failed = false;
      if (this.IsLoading == true) {
        return;
      }
      let custom_id = this.year + "88" + this.id;
      let password = "ardapam#" + this.id;
      this.isLoading = true;
      axios
        .post(
          this.$store.state.host + "/api/register",
          { token: this.form.token, custom_id: custom_id, name: this.form.name, password: password, level: this.form.level, telephone: this.form.telephone },
          { headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` } }
        )
        .then((res) => {
          console.log(res.data);
          this.getId();
          this.success = true;
          this.isLoading = false;
          this.form = {
            custom_id: null,
            name: null,
            password: null,
            rt: 1,
            telephone: null,
            token: null,
          };
        })
        .catch((err) => {
          console.log(err.response);
          this.err = JSON.parse(err.response.data);
          this.isLoading = false;
          this.failed = true;
        });
    },
  },
};
</script>
