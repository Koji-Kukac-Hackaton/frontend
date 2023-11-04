<template>
  <Navbar></Navbar>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/global/Navbar.vue'
</script>

<style scoped>
.app-container {
  height: 93.9vh;
}
</style>
