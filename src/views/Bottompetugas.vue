<template>
  <nav class="navbar navbar-expand navbar-light bg-light shadow-lg fixed-bottom bg-white d-md-none d-lg-none d-xl-none " id="bottom">
    <div class="collapse navbar-collapse " style="text-align:center" id="navbarSupportedContent">
      <ul class="navbar-nav nav-justified w-100 accordion">

        <li class="nav-item ">
           <router-link exact class="nav-link" to="/petugas/dashboard">
           <a href="#" class="text-decoration-none">
          <div class="container justify-content-center">
            <v-icon name="home"></v-icon>
          </div>
          Dashboard
           </a>
            </router-link>
        </li>

        <li class="nav-item ">
          <router-link exact class="nav-link" to="/petugas/catat">
           <a href="#" class="text-decoration-none">
            <div class="container justify-content-center ">
              <v-icon name="pencil-alt"></v-icon>
            </div>
          Catat 
          </a>
         </router-link>
        </li>

        <li class="nav-item ">
           <router-link exact class="nav-link" to="/petugas/bayar">
            <a href="#" class="text-decoration-none">
              <div class="container justify-content-center ">
                <v-icon name="calculator"></v-icon>
              </div>
              Bayar 
              </a>
           </router-link>
        </li>

        <li class="nav-item ">
            <router-link exact class="nav-link" to="/petugas/profile">
             <a href="#" class="text-decoration-none">
          <div class="container justify-content-center ">
            <v-icon name="user" class="mx-auto"></v-icon>
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
