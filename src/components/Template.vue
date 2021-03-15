<template>
    <main>
        <div id="wrapper">
        
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">
                <Navbar />
                <div class="row content1">
                  <div class="col-md-2"> <Sidebar /></div>
                  <div class="col-lg-10">  <router-view :key="$route.path"></router-view></div>
                </div>
               
            
                
            </div>


            </div>
        </div>
    </main>
</template>
<script>
import Sidebar from '../views/Sidebar';
import Navbar from '../views/Navbar';
export default {
  components: {
    Sidebar,Navbar
  }
}
</script>
<style>
    @import'../assets/css/starter-bootstrap.css';
    @import '../assets/vendor/fontawesome-free/css/all.min.css';
    .content1 {
  margin-top: 50px;
}

</style>