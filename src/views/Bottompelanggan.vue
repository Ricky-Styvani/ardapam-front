<template>
  <nav class="navbar navbar-expand navbar-light bg-light shadow-lg fixed-bottom bg-white d-md-none d-lg-none d-xl-none " id="bottom">
    <div class="collapse navbar-collapse " style="text-align:center" id="navbarSupportedContent">
      <ul class="navbar-nav nav-justified w-100">
        <li class="nav-item ">
          <router-link exact to="/pelanggan/dashboard" class="nav-link">
            <a href="#" class="text-decoration-none">
              <div class="container justify-content-center">
                <v-icon name="home"></v-icon>
              </div>
              Dashboard
            </a>
          </router-link>
        </li>
        <li class="nav-item ">
          <router-link exact to="/pelanggan/tagihan" class="nav-link">
            <a href="#" class="text-decoration-none">
              <div class="container justify-content-center">
                <v-icon name="calculator"></v-icon>
              </div>
              Tagihan
            </a>
          </router-link>
        </li>
        <li class="nav-item ">
          <router-link exact to="/pelanggan/transaksi" class="nav-link">
            <a href="#" class="text-decoration-none">
              <div class="container justify-content-center">
                <v-icon name="file-alt"></v-icon>
              </div>
              Transaksi
            </a>
          </router-link>
        </li>
        <li class="nav-item ">
          <router-link exact to="/pelanggan/profile" class="nav-link">
            <a href="#" class="text-decoration-none">
              <div class="container justify-content-center">
                <v-icon name="user"></v-icon>
              </div>
              Profil
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  Name: "Bottom",
};
</script>

<style>
#bottom {
  display: none;
}
@media (max-width: 767.98px) {
  #bottom {
    display: block;
  }
}
</style>
