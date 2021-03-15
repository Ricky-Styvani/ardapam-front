<template>
  <!-- Sidebar -->
  <ul class="navbar-nav bg-white sidebar shadow-sw mt-5 accordion" id="accordionSidebar">
    <!-- Sidebar - Brand -->

    <hr class="sidebar-divider my-0" />

    <li class="nav-item ">
      <router-link exact class="nav-link" to="/admin/dashboard">
        <i class="fas fa-home"></i>
        <span>Dashboard</span></router-link
      >
    </li>

    <li class="nav-item">
      <router-link exact class="nav-link" to="/admin/laporan">
        <i class="fas fa-chart-bar"></i>
        <span>Laporan</span></router-link
      >
    </li>

    <li class="nav-item">
      <router-link exact class="nav-link" to="/admin/tagihan">
        <i class="fas fa-calculator"></i>
        <span>Tagihan</span></router-link
      >
    </li>

    <li class="nav-item">
      <router-link exact class="nav-link" to="/admin/informasi">
        <i class="fas fa-satellite-dish"></i>
        <span>Informasi</span></router-link
      >
    </li>

    <li class="nav-item">
      <router-link exact class="nav-link" to="/admin/pengaduan">
        <i class="far fa-comment-dots"></i>
        <span
          >Pengaduan <span v-if="this.$store.state.notif.count >= 1" style=" font-size: 0.8em;" class="badge badge-pill badge-primary">{{ this.$store.state.notif.count }}</span></span
        ></router-link
      >
    </li>

    <li class="nav-item no-arrow">
      <a class="nav-link">
        <i class="fas fa-user-friends"></i>
        <span>Users</span>

        <b-dropdown variant="transparent" right>
          <b-dropdown-item to="/admin/petugas">Petugas</b-dropdown-item>
          <b-dropdown-item to="/admin/pelanggan">Pelanggan</b-dropdown-item>
        </b-dropdown></a
      >
    </li>
  </ul>
  <!-- End of Sidebar -->
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    this.getData();
    window.Echo.channel("pengaduan").listen("notif", () => {
      this.getData();
    });
  },
  methods: {
    getData() {
      axios
        .get(`${this.$store.state.host}/api/notif`, { headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` } })
        .then((res) => {
          this.$store.commit("notif", res.data);
        })
        .catch((err) => {
          console.log({ err });
        });
    },
  },
};
</script>
