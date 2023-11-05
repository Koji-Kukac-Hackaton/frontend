<template>
  <NMessageProvider>
    <NDialogProvider>
      <Navbar></Navbar>
      <div class="app-container">
        <RouterView />
      </div>
    </NDialogProvider>
  </NMessageProvider>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { NDialogProvider, NMessageProvider } from 'naive-ui'
import Navbar from './components/global/Navbar.vue'
</script>

<style scoped>
.app-container {
  height: 93.9vh;
  background-color: #dde6f0;
}
</style>
