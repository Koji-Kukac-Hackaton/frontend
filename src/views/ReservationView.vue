<template>
  <div class="container">
    <div class="card-container">
        <ParkingSpotComponent></ParkingSpotComponent>
    </div>
  </div>
</template>

<script>
import ParkingSpotComponent from '../components/ReservationView/ParkingSpotComponent.vue'
export default {
  name: 'ReservationView',
  components: {
    ParkingSpotComponent
  }
}
</script>

<style>

</style>
