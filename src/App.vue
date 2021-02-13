<template>
<main>
        <div id="wrapper">
        <Sidebar />
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <Navbar />
                <router-view/>
                
            </div>


            </div>
        </div>
    </main>
  <!-- <div id="app">
    <router-view/>
  </div> -->
</template>

<script>
import Sidebar from './views/Sidebar';
import Navbar from './views/Navbar';
export default {
  components: {
    Sidebar,Navbar
  }
}
</script>
<style>
    @import'./assets/css/starter-bootstrap.css';
    @import './assets/vendor/fontawesome-free/css/all.min.css';

</style>