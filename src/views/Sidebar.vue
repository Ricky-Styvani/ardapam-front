<template>
       <!-- Sidebar -->
        <ul class="navbar-nav bg-white sidebar shadow-sw  accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-text mx-3">Company Name</div>
            </a>

            <hr class="sidebar-divider my-0">

            <li class="nav-item active">
                <router-link class="nav-link" to="/admin/dashboard">
                    <i class="fas fa-home"></i>
                    <span>Dashboard</span></router-link>
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
                <router-link class="nav-link" to="/admin/informasi">
                    <i class="fas fa-satellite-dish"></i>
                    <span>Informasi</span></router-link>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="pengaduan.html">
                    <i class="far fa-comment-dots"></i>
                    <span>Pengaduan</span></a>
            </li>

            <li class="nav-item no-arrow" >
                <a class="nav-link">
                    <i class="fas fa-user-friends"></i>
                    <span>Users</span>
                
                <b-dropdown variant="transparent" right> 
                    <b-dropdown-item to="/admin/petugas">Petugas</b-dropdown-item>
                    <b-dropdown-item to="/admin/pelanggan">Pelanggan</b-dropdown-item>
                </b-dropdown></a>
                
            </li>



        </ul>
        <!-- End of Sidebar -->
</template>
