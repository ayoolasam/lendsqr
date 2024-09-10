<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
import { useRoute } from 'vue-router';



const route = useRoute();

</script>

<template>
  <div class="app flex">
    
    <SideBar v-if="route.meta.defaultLayout"/>
    <div class="content w-full">
      <NavBar v-if="route.meta.defaultLayout"/>
      <RouterView/>
    </div>
  
  </div>
 
</template>

<style scoped>

</style>
