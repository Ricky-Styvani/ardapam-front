<template>
       <!-- Sidebar -->
        <ul class="navbar-nav bg-white sidebar shadow-sw  accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-text mx-3">Company Name</div>
            </a>

            <hr class="sidebar-divider my-0">

            <li class="nav-item active">
                <router-link class="nav-link" to="/petugas/dashboard">
                    <i class="fas fa-home"></i>
                    <span>Dashboard</span></router-link>
            </li>

            <li class="nav-item active">
                <router-link class="nav-link" to="/petugas/catat">
                    <i class="fas fa-chart-bar"></i>
                    <span>Catat</span></router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" to="/petugas/bayar">
                    <i class="fas fa-calculator"></i>
                    <span>Bayar</span></router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" to="/petugas/profile">
                    <i class="fas fa-satellite-dish"></i>
                    <span>Profil</span></router-link>
            </li>



        </ul>
        <!-- End of Sidebar -->
</template>
