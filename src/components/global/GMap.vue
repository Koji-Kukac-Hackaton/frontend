<template>
  <GMapMap
    :center="{ lat: location.latitude, lng: location.longitude }"
    :zoom="14.5"
    map-type-id="terrain"
    style="width: 100%; height: 100%"
  >
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

export default {
  name: 'App',
  props: {
    parkingSpots: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      openedMarkerID: null,
      location: '',
      redCircle: '../../assets/icons/red-circle-icon.svg',
      greenCircle: '../../assets/icons/green-circle-icon.svg',
      nav: navigator.geolocation.getCurrentPosition(this.successLocation),
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 45.80527,
            lng: 15.96668
          }
        }
      ]
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
  mounted() {
    console.log(this.parkingSpots)
    this.markers = this.parkingSpots.map((spot) => ({
      id: spot.id,
      occupied: spot.occupied,
      position: {
        lat: spot.latitude,
        lng: spot.longitude
      }
    }))
  },
  components: { NButton }
}
</script>

<style>
.vue-map-container {
  height: 100%;
}
</style>
