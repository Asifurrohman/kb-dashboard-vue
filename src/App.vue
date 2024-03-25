<template>
  <div class="relative w-full">

    <SiteNavbar />
    <SiteSidebar />
  </div>
  <!-- <FontAwesomeIcon :icon="byPrefixAndName.fas['house']" /> -->
  <RouterView />
  
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import SiteNavbar from './components/SiteNavbar.vue'
import SiteSidebar from './components/SiteSidebar.vue'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'


</script>

<style scoped>
</style>
