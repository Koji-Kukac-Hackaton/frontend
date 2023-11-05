<template>
  <NCard class="desktop">
    <div>
      <ParkingSpotFilterComponent></ParkingSpotFilterComponent>
    </div>
    <div class="gmap-container">
      <GMap :parkingSpots="allParkingSpots"></GMap>
    </div>
  </NCard>
  <div class="mobile">
    <div class="gmap-container-mobile">
      <GMap :parkingSpots="allParkingSpots"></GMap>
      <NText class="format-button">F</NText>
    </div>
  </div>
  <WSComponent></WSComponent>
</template>

<script>
import { NCard, NText } from 'naive-ui'
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
    WSComponent,
    NText
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

.gmap-container-mobile {
  height: 90vh;
  width: 100%;
}

@media (min-width: 540px) {
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
}

@media (max-width: 539px) {
  .desktop {
    display: none;
  }
  .mobile {
    position: relative;
    display: block;
  }
}
</style>
