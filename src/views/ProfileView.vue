<template>
    <div class="container">
        <ChartComponent></ChartComponent>
    </div>
  </template>
  
  <script>
  import ChartComponent from '../components/analytics/ChartComponent.vue';
  export default {
    name: 'ProfileView',
    components:{
        ChartComponent
    }
  }
  </script>
  