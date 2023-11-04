<template>
    <NButton>Button 1</NButton>
    <NButton>Button 2</NButton>

    <GMap></GMap>
</template>

<script>
import { NButton } from "naive-ui";
import GMap from '../components/global/GMap.vue'
export default {
  components: {
    NButton,
    GMap
  },
  data() {
    return {
      api:  import.meta.env.VITE_API_KEY
    }}
};
</script>

<style>
</style>
