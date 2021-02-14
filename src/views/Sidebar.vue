<template>
       <!-- Sidebar -->
        <ul class="navbar-nav bg-white sidebar shadow-sw  accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-text mx-3">Company Name</div>
            </a>

            <hr class="sidebar-divider my-0">

            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-home"></i>
                    <span>Dashboard</span></a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="laporan.html">
                    <i class="fas fa-chart-bar"></i>
                    <span>Laporan</span></a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="tagihan.html">
                    <i class="fas fa-calculator"></i>
                    <span>Tagihan</span></a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="informasi.html">
                    <i class="fas fa-satellite-dish"></i>
                    <span>Informasi</span></a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="pengaduan.html">
                    <i class="far fa-comment-dots"></i>
                    <span>Pengaduan</span></a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="pelanggan.html">
                    <i class="fas fa-user"></i>
                    <span>Pelanggan</span></a>
            </li>
            <li class="nav-item no-arrow">
                <a class="nav-link">
                    <i class="fas fa-user-friends"></i>
                    <span>Users</span>
                
                <b-dropdown variant="transparent" >
                    <div slot="button-content"></div>
                    <b-dropdown-item href="#">Petugas</b-dropdown-item>
                    <b-dropdown-item href="#">Karyawan</b-dropdown-item>
                </b-dropdown></a>
                
            </li>



        </ul>
        <!-- End of Sidebar -->
</template>