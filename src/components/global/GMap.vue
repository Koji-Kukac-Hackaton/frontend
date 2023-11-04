<template>
    <GMapMap
        :center="{lat: 45.80528, lng:  15.96649}"
        :zoom="13"
        map-type-id="terrain"
        style="width: 500px; height: 500px  "
    >
    </GMapMap>
  </template>
  
  <script >
  export default {
    name: 'App',
    data() {
      return {
        center: {lat: 51.093048, lng: 6.842120},
      }
    }
  }
  </script>