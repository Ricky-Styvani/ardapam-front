<template>

    <div id="page-top">

        <div id="wrapper">
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

            <li class="nav-item">
                <a class="nav-link" href="karyawan.html">
                    <i class="fas fa-user-tie"></i>
                    <span>Karyawan</span></a>
            </li>
            <li class="nav-item no-arrow">
                <a class="nav-link">
                    <i class="fas fa-user-friends"></i>
                    <span>Users</span>
                
                <b-dropdown variant="transparent" class="m-2">
                    <b-dropdown-item href="#">User</b-dropdown-item>
                    <b-dropdown-item href="#">Admin</b-dropdown-item>
                </b-dropdown></a>
                
            </li>



        </ul>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Mohamad Pikri 
                                    <b-dropdown variant="transparent" text="▼">
                                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                                    <b-dropdown-item href="#">Logout</b-dropdown-item>
                                </b-dropdown></span>
                                <img class="img-profile rounded-circle"
                                    src="../assets/img/undraw_profile.svg">
                            </a>
                           
                                
                        </li>

                    </ul>

                </nav>
                <!-- End of Topbar -->
                
                <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Dashboard</h6>
                            
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    
    </div>
</template>
