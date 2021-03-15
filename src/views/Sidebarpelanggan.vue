<template>
  <!-- Sidebar -->
  <ul class="navbar-nav bg-white sidebar shadow-sw  accordion" id="accordionSidebar">
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div class="sidebar-brand-text mx-3">Company Name</div>
    </a>

    <hr class="sidebar-divider my-0" />

    <li class="nav-item ">
      <router-link exact class="nav-link" to="/pelanggan/dashboard">
        <i class="fas fa-home"></i>
        <span>Dashboard</span></router-link
      >
    </li>

    <li class="nav-item ">
      <router-link exact class="nav-link" to="/pelanggan/tagihan">
        <i class="fas fa-chart-bar"></i>
        <span>Tagihan</span></router-link
      >
    </li>

    <li class="nav-item">
      <router-link exact class="nav-link" to="/pelanggan/transaksi">
        <i class="fas fa-calculator"></i>
        <span>Transaksi</span></router-link
      >
    </li>

    <li class="nav-item">
      <router-link exact class="nav-link" to="/pelanggan/profile">
        <i class="fas fa-satellite-dish"></i>
        <span>Profil</span></router-link
      >
    </li>
  </ul>
  <!-- End of Sidebar -->
</template>
