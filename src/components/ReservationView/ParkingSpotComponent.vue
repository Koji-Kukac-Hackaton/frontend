<template>
  <NCard>
    <div>
      <ParkingSpotFilterComponent></ParkingSpotFilterComponent>
    </div>
    <div class="gmap-container">
      <GMap :parkingSpots="allParkingSpots"></GMap>
    </div>
  </NCard>
  <WSComponent></WSComponent>
</template>

<script>
import { NCard } from 'naive-ui'
import { mapGetters } from 'vuex'
import GMap from '../global/GMap.vue'
import ParkingSpotFilterComponent from './ParkingSpotFilterComponent.vue'
import WSComponent from '../global/WSComponent.vue'

export default {
  name: 'ReservationView',
  components: {
    NCard,
    GMap,
    ParkingSpotFilterComponent,
    WSComponent
  },
  computed: {
    ...mapGetters({
      allParkingSpots: 'allParkingSpots'
    })
  },

  async created() {
    await this.$store.dispatch('fetchParkingSpots')
  }
}
</script>

<style>
.gmap-container {
  height: 55vh;
  width: 100%;
}
</style>
