<template>
  <main>
    <div id="wrapper">
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <Navbar />
          <Bottom />
          <div class="row content1">
            <div class="col-md-2" id="side"><Sidebar /></div>
            <div class="col-lg-10" id="content"><router-view :key="$route.path"></router-view></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import Navbar from "../views/Navbar";
import Sidebar from "../views/Sidebarpetugas";
import Bottom from "../views/Bottompetugas";
export default {
  components: {
    Navbar,
    Sidebar,
    Bottom,
  },
};
</script>
<style>
@import "../assets/css/starter-bootstrap.css";
@import "../assets/vendor/fontawesome-free/css/all.min.css";
.content1 {
  margin-top: 50px;
}
@media (max-width: 767.98px) {
  #side {
    display: none;
  }
}
</style>
