<template>
  <GMapMap
    :center="{ lat: location.latitude, lng: location.longitude }"
    :zoom="15"
    map-type-id="terrain"
    style="width: 100%; height: 100%"
  >
    <GMapMarker
      :icon="{
        url: blueCircle,
        scaledSize: { width: 15, height: 15 },
        labelOrigin: { x: 0, y: 0 }
      }"
      :position="{ lat: location.latitude, lng: location.longitude }"
    />
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :icon="{
        url: m.occupied ? redCircle : greenCircle,
        scaledSize: { width: 10, height: 10 },
        labelOrigin: { x: 0, y: 0 }
      }"
      :position="m.position"
      :clickable="true"
      @click="openMarker(m.id)"
    >
      <GMapInfoWindow
        :closeclick="true"
        @closeclick="openMarker(null)"
        :opened="openedMarkerID === m.id"
      >
        <div>
          <p>Vodnikova ulica 10</p>
          <p>3.2€</p>
          <NButton>Reserve</NButton>
        </div>
      </GMapInfoWindow>
    </GMapMarker>
  </GMapMap>
</template>

<script>
import { NButton } from 'naive-ui'
import redCircle from '../../assets/icons/red-circle-icon.svg'
import greenCircle from '../../assets/icons/green-circle-icon.svg'
import blueCircle from '../../assets/icons/blue-circle-icon.svg'

export default {
  name: 'GMap',
  props: {
    parkingSpots: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    markers() {
      return this.parkingSpots.map((spot) => ({
        id: spot.id,
        occupied: spot.occupied,
        position: {
          lat: spot.latitude,
          lng: spot.longitude
        }
      }))
    },
    parkingZonePrices() {
      return this.$store.getters.getParkingZonePrices
    }
  },
  data() {
    return {
      openedMarkerID: null,
      location: '',
      redCircle: redCircle,
      greenCircle: greenCircle,
      blueCircle: blueCircle,
      nav: navigator.geolocation.getCurrentPosition(this.successLocation)
    }
  },
  methods: {
    successLocation(position) {
      this.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    },
    openMarker(id) {
      this.openedMarkerID = id
    }
  },
  async created() {
    await this.$store.dispatch('fetchParkingZonePrices')
  },
  components: { NButton }
}
</script>

<style>
.vue-map-container {
  height: 100%;
}
</style>
