<template>
  <div class="relative w-full font-opensans">

    <SiteNavbar />
    
    <div class="w-full lg:w-4/5 absolute right-0 font-inter">
      <!-- <main id="main" class="min-h-screen bg-white mx-5 rounded shadow-md right-0 mt-20 p-5"> -->
      <main id="main" class=" mt-20 p-5">
        <RouterView />
      </main>
    </div>
  </div>
  <!-- <FontAwesomeIcon :icon="byPrefixAndName.fas['house']" /> -->
  
  
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import SiteNavbar from './components/SiteNavbar.vue'
// import ModalRequestAdikBintang from './components/ModalRequestAdikBintang.vue'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'


</script>

<style scoped>
</style>
