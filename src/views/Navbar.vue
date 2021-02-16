<template>
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <ul class="navbar-nav ml-auto ">
                <li class="nav-item  dropdown no-arrow">
                    <a class="nav-link" >
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{name}}
                            <b-dropdown variant="transparent">
                                <div slot="button-content"><img class="img-profile rounded-circle"
                            src="../assets/img/undraw_profile.svg"></div>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Logout</b-dropdown-item>
                        </b-dropdown></span>
                        
                    </a>
                    
                        
                </li>

            </ul>

        </nav>
</template>
<script>
export default {
    data(){
        return{
            name: '',
        }
    },
    mounted(){
        this.name = this.$store.state.user.data.name 
    }
}
</script>