<template>
  <div class="container">
    <div class="card-container">
      <ParkingSpotComponent></ParkingSpotComponent>
    </div>
  </div>
  <div v-if="showReservationPopup" class="overlay" @click="toggleOverlay">
    <div class="content">
      <p>{{ reservation.zone }}</p>
      <p>{{ reservation.price }}€</p>
      <GMapMap
        :center="{ lat: reservation.position.lat, lng: reservation.position.lng }"
        :zoom="15"
        map-type-id="terrain"
        style="width: 100%; height: 100%"
      >
        <GMapMarker
          :position="{ lat: reservation.position.lat, lng: reservation.position.lng }"
        />
      </GMapMap>

      <NButton ghost type="warning" @click="close">Close</NButton>
    </div>
  </div>
</template>

<script>
import { NButton } from 'naive-ui'
import ParkingSpotComponent from '../components/ReservationView/ParkingSpotComponent.vue'
export default {
  name: 'ReservationView',
  components: {
        ParkingSpotComponent,
    NButton
  },
  computed: {
    showReservationPopup() {
      return this.$store.getters.showReservationPopup
    },
    reservation() {
      return this.$store.getters.getReservation
    }
  },
  methods: {
    close() {
      this.$store.commit('setShowReservationPopup', false)
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.vue-map-container {
  height: 500px;
  width: 500px;
}
</style>
