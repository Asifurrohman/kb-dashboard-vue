<template>
  <div class="relative w-full  min-h-screen text-dark-grey">
    
    <!-- <SiteNavbar v-if="this.$router.currentRoute.name !== 'login'"/> -->
    <!-- <SiteNavbar v-if="this.$router.currentRoute.name !== 'login'"/> -->
    <DashboardView v-if="!$route.meta.hideNavbar" />
    <RouterView />
    
    
  </div>
  
  
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
// import SiteNavbar from './components/SiteNavbar.vue'
import DashboardView from './components/Navbar.vue'
import LoginView from './views/login/LoginView.vue'
// import ModalRequestAdikBintang from './components/ModalRequestAdikBintang.vue'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'


</script>

<style scoped>
</style>
