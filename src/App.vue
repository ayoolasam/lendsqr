<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="app flex">
    <SideBar v-if="route.meta.defaultLayout" />
    <div class="content w-full">
      <NavBar v-if="route.meta.defaultLayout" />

      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
/* .fade-enter-from{
opacity:0;
transform: translateY(600px);
}
.fade-leave-to{
  opacity: 0;
  transform: translateY(600px);
 
} 
.fade-enter-active,
.fade-leave-active{
  transition: all 0.8s ease;
} */

/* Initial state for the entering transition */
.fade-enter-from {
  opacity: 0;
  transform: translateY(600px); /* Start below the view */
}

/* Final state for the leaving transition */
.fade-leave-to {
  opacity: 0;
  transform: translateY(600px); /* Ends below the view */
}

/* Active state for both entering and leaving transitions */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease; /* Smooth transition effect */
}

.content {
  overflow-y: auto;
  height: 100vh;
}
</style>
