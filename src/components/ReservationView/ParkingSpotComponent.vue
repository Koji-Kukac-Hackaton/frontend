<template>
  <NCard>
    <div class="gmap-container">
      <GMap :parkingSpots="allParkingSpots"></GMap>
    </div>
  </NCard>
</template>

<script>
import { NCard } from 'naive-ui'
import { mapGetters } from 'vuex'
import GMap from '../global/GMap.vue'
export default {
  name: 'ReservationView',
  components: {
    NCard,
    GMap
  },
  computed: {
    ...mapGetters({
      allParkingSpots: 'allParkingSpots'
    })
  },

  created() {
    this.$store.dispatch('fetchParkingSpots')
  }
}
</script>

<style>
.gmap-container {
  height: 50vh;
  width: 100%;
}
</style>
