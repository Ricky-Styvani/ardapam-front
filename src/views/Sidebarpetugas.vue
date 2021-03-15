<template>
  <!-- Sidebar -->
  <ul class="navbar-nav bg-white sidebar shadow  accordion" id="side">
    <!-- Sidebar - Brand -->

    <hr class="sidebar-divider " />

    <li class="nav-item ">
      <router-link exact class="nav-link" to="/petugas/dashboard">
        <i class="fas fa-home"></i>
        <span>Dashboard</span></router-link
      >
    </li>

    <li class="nav-item ">
      <router-link exact class="nav-link" to="/petugas/catat">
        <i class="fas fa-chart-bar"></i>
        <span>Catat</span></router-link
      >
    </li>

    <li class="nav-item">
      <router-link exact class="nav-link" to="/petugas/bayar">
        <i class="fas fa-calculator"></i>
        <span>Bayar</span></router-link
      >
    </li>

    <li class="nav-item">
      <router-link exact class="nav-link" to="/petugas/profile">
        <i class="fas fa-satellite-dish"></i>
        <span>Profil</span></router-link
      >
    </li>
  </ul>
  <!-- End of Sidebar -->
</template>
<style></style>
