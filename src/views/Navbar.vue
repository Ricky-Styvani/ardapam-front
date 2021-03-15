<template>
  <div>
    <b-navbar toggleable="lg" class=" bg-white  mb-4 shadow fixed-top">
      <div class="container">
        <b-navbar-brand href="#" class="text-decoration-none">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!--  Right aligned nav items -->

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown class="text-center">
              <!--     Using 'button-content' slot -->

              <template #button-content class="d-flex">
                <em>{{ name }}</em>
                <img class="img-profile rounded-circle" width="30" src="../assets/img/undraw_profile.svg" />
              </template>
              <b-dropdown-item class="text-center" href="#">Profile</b-dropdown-item>
              <b-dropdown-item class="text-center" @click="logout()">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
  <!--
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto ">
          <li class="nav-item  dropdown no-arrow">
            <a class="nav-link">
              <span class="mr-2 d-none d-lg-inline text-gray-600 small"
                >{{ name }}
                <b-dropdown variant="transparent">
                  <div slot="button-content"><img class="img-profile rounded-circle" src="../assets/img/undraw_profile.svg" /></div>

                  <b-dropdown-item href="#">Profile</b-dropdown-item>
                  <b-dropdown-item @click="logout()">Logout</b-dropdown-item>
                </b-dropdown></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
-->
</template>
<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    this.name = this.$store.state.user.data.name;
  },
  methods: {
    logout() {
      this.$store.commit("reset");
      window.localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>
